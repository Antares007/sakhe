"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helper$$$ConstructorCall$$437D8EA7 = Helper$$$ConstructorCall$$437D8EA7;
exports.Helper$$$InstanceCall$$9FFCF9C = Helper$$$InstanceCall$$9FFCF9C;
exports.Helper$$$Application$$437D8EA7 = Helper$$$Application$$437D8EA7;
exports.Helper$$$CoreCall$$39739A92 = Helper$$$CoreCall$$39739A92;
exports.Helper$$$GlobalCall$$Z6A200D61 = Helper$$$GlobalCall$$Z6A200D61;
exports.Helper$$$GlobalIdent$$Z788F3BB9 = Helper$$$GlobalIdent$$Z788F3BB9;
exports.Helpers$$$resolveArgTypes = Helpers$$$resolveArgTypes;
exports.Helpers$$$emitJs = Helpers$$$emitJs;
exports.Helpers$$$objExpr = Helpers$$$objExpr;
exports.Helpers$$$add = Helpers$$$add;
exports.Helpers$$$sub = Helpers$$$sub;
exports.Helpers$$$eq = Helpers$$$eq;
exports.Helpers$$$neq = Helpers$$$neq;
exports.Helpers$$$isNull = Helpers$$$isNull;
exports.Helpers$$$error = Helpers$$$error;
exports.Helpers$$$s = Helpers$$$s;
exports.Helpers$$$genArg = Helpers$$$genArg;
exports.Helpers$$$hasBaseImplementingBasicMethods = Helpers$$$hasBaseImplementingBasicMethods;
exports.$007CBuiltin$007C_$007C = $007CBuiltin$007C_$007C;
exports.$007CInteger$007CFloat$007C = $007CInteger$007CFloat$007C;
exports.$007CNameof$007C_$007C = $007CNameof$007C_$007C;
exports.$007CReplaceName$007C_$007C = $007CReplaceName$007C_$007C;
exports.$007COrDefault$007C = $007COrDefault$007C;
exports.$007CEntFullName$007C_$007C = $007CEntFullName$007C_$007C;
exports.$007CListLiteral$007C_$007C = $007CListLiteral$007C_$007C;
exports.$007CIDictionary$007CIEqualityComparer$007COther$007C = $007CIDictionary$007CIEqualityComparer$007COther$007C;
exports.$007CIEnumerable$007CIEqualityComparer$007COther$007C = $007CIEnumerable$007CIEqualityComparer$007COther$007C;
exports.coreModFor = coreModFor;
exports.genericTypeInfoError = genericTypeInfoError;
exports.defaultof = defaultof;
exports.makeLongInt = makeLongInt;
exports.makeFloat32 = makeFloat32;
exports.makeTypeConst = makeTypeConst;
exports.makeTypeInfo = makeTypeInfo;
exports.makeTypeDefinitionInfo = makeTypeDefinitionInfo;
exports.createAtom = createAtom;
exports.toChar = toChar;
exports.toString = toString;
exports.toFloat = toFloat;
exports.fastIntFloor = fastIntFloor;
exports.toInt = toInt;
exports.arrayCons = arrayCons;
exports.toList = toList;
exports.toArray = toArray;
exports.listToArray = listToArray;
exports.stringToCharArray = stringToCharArray;
exports.enumerator2iterator = enumerator2iterator;
exports.toSeq = toSeq;
exports.iterate = iterate;
exports.$007CListSingleton$007C = $007CListSingleton$007C;
exports.$007CCustomOp$007C_$007C = $007CCustomOp$007C_$007C;
exports.applyOp = applyOp;
exports.isCompatibleWithJsComparison = isCompatibleWithJsComparison;
exports.identityHash = identityHash;
exports.structuralHash = structuralHash;
exports.makeFunctionsObject = makeFunctionsObject;
exports.equals = equals;
exports.compare = compare;
exports.compareIf = compareIf;
exports.makeComparerFunction = makeComparerFunction;
exports.makeComparer = makeComparer;
exports.makeEqualityComparer = makeEqualityComparer;
exports.makeSet = makeSet;
exports.makeMap = makeMap;
exports.makeDictionaryWithComparer = makeDictionaryWithComparer;
exports.makeDictionary = makeDictionary;
exports.makeHashSetWithComparer = makeHashSetWithComparer;
exports.makeHashSet = makeHashSet;
exports.getZero = getZero;
exports.getOne = getOne;
exports.makeAddFunction = makeAddFunction;
exports.makeGenericAdder = makeGenericAdder;
exports.makeGenericAverager = makeGenericAverager;
exports.makePojoFromLambda = makePojoFromLambda;
exports.changeCase = changeCase;
exports.makePojo = makePojo;
exports.injectArg = injectArg;
exports.fableCoreLib = fableCoreLib;
exports.getReference = getReference;
exports.setReference = setReference;
exports.newReference = newReference;
exports.references = references;
exports.getMangledNames = getMangledNames;
exports.bclType = bclType;
exports.fsharpModule = fsharpModule;
exports.getFableReplLibImport = getFableReplLibImport;
exports.fableReplLib = fableReplLib;
exports.fsFormat = fsFormat;
exports.operators = operators;
exports.chars = chars;
exports.strings = strings;
exports.stringModule = stringModule;
exports.getEnumerator = getEnumerator;
exports.seqs = seqs;
exports.resizeArrays = resizeArrays;
exports.arrays = arrays;
exports.arrayModule = arrayModule;
exports.lists = lists;
exports.listModule = listModule;
exports.sets = sets;
exports.setModule = setModule;
exports.maps = maps;
exports.mapModule = mapModule;
exports.results = results;
exports.options = options;
exports.optionModule = optionModule;
exports.parse = parse;
exports.decimals = decimals;
exports.bigints = bigints;
exports.errorStrings = errorStrings;
exports.languagePrimitives = languagePrimitives;
exports.intrinsicFunctions = intrinsicFunctions;
exports.funcs = funcs;
exports.keyValuePairs = keyValuePairs;
exports.dictionaries = dictionaries;
exports.hashSets = hashSets;
exports.exceptions = exceptions;
exports.objects = objects;
exports.valueTypes = valueTypes;
exports.unchecked = unchecked;
exports.enums = enums;
exports.log = log;
exports.bitConvert = bitConvert;
exports.convert = convert;
exports.console$ = console$;
exports.debug = debug;
exports.dates = dates;
exports.timeSpans = timeSpans;
exports.timers = timers;
exports.systemEnv = systemEnv;
exports.globalization = globalization;
exports.random = random;
exports.cancels = cancels;
exports.monitor = monitor;
exports.activator = activator;
exports.regex = regex;
exports.encoding = encoding;
exports.enumerables = enumerables;
exports.enumerators = enumerators;
exports.events = events;
exports.observable = observable;
exports.mailbox = mailbox;
exports.asyncBuilder = asyncBuilder;
exports.asyncs = asyncs;
exports.guids = guids;
exports.uris = uris;
exports.laziness = laziness;
exports.controlExtensions = controlExtensions;
exports.types = types;
exports.fsharpType = fsharpType;
exports.fsharpValue = fsharpValue;
exports.curryExprAtRuntime = curryExprAtRuntime;
exports.uncurryExprAtRuntime = uncurryExprAtRuntime;
exports.partialApplyAtRuntime = partialApplyAtRuntime;
exports.tryField = tryField;
exports.tryCall = tryCall;
exports.tryEntityRef = tryEntityRef;
exports.tryBaseConstructor = tryBaseConstructor;
exports.ParseTarget = exports.nativeArrayFunctions = exports.implementedStringFunctions = exports.BuiltinType = exports.Helper = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _AST = require("../AST/AST.Fable");

var _Transforms = require("./Transforms.Util");

var _List = require("../fable-core.2.0.3/List");

var _Option = require("../fable-core.2.0.3/Option");

var _AST2 = require("../AST/AST.Common");

var _Util = require("../fable-core.2.0.3/Util");

var _Symbols = require("../symbols/Symbols");

var _Long = _interopRequireWildcard(require("../fable-core.2.0.3/Long"));

var _Array = require("../fable-core.2.0.3/Array");

var _String = require("../fable-core.2.0.3/String");

var _FSharp2Fable = require("./FSharp2Fable.Util");

var _Prelude = require("../Global/Prelude");

var _Seq = require("../fable-core.2.0.3/Seq");

var _ReplacementsInject = require("./ReplacementsInject");

var _Map = require("../fable-core.2.0.3/Map");

var _Set = require("../fable-core.2.0.3/Set");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Helper = (0, _Types.declare)(function Helper() {});
exports.Helper = Helper;

function Helper$$$ConstructorCall$$437D8EA7(consExpr, returnType, args, argTypes, loc) {
  let argTypes$$1;

  if (argTypes == null) {
    argTypes$$1 = new _AST.SignatureKind(2, "NoUncurrying");
  } else {
    const xs = argTypes;
    argTypes$$1 = new _AST.SignatureKind(0, "Typed", xs);
  }

  return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(0, "ConstructorCall", consExpr), (0, _Transforms.AST$$$argInfo)(null, args, argTypes$$1)), returnType, loc);
}

function Helper$$$InstanceCall$$9FFCF9C(callee, memb, returnType$$1, args$$1, argTypes$$2, loc$$1) {
  const kind = new _AST.CallKind(2, "InstanceCall", (0, _Transforms.AST$$$makeStrConst)(memb));
  let argTypes$$3;

  if (argTypes$$2 == null) {
    argTypes$$3 = new _AST.SignatureKind(2, "NoUncurrying");
  } else {
    const xs$$1 = argTypes$$2;
    argTypes$$3 = new _AST.SignatureKind(0, "Typed", xs$$1);
  }

  return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", kind, (0, _Transforms.AST$$$argInfo)(callee, args$$1, argTypes$$3)), returnType$$1, loc$$1);
}

function Helper$$$Application$$437D8EA7(callee$$1, returnType$$2, args$$2, argTypes$$4, loc$$2) {
  let argTypes$$5;

  if (argTypes$$4 == null) {
    argTypes$$5 = new _AST.SignatureKind(2, "NoUncurrying");
  } else {
    const xs$$2 = argTypes$$4;
    argTypes$$5 = new _AST.SignatureKind(0, "Typed", xs$$2);
  }

  return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(2, "InstanceCall", null), (0, _Transforms.AST$$$argInfo)(callee$$1, args$$2, argTypes$$5)), returnType$$2, loc$$2);
}

function Helper$$$CoreCall$$39739A92(coreModule, coreMember, returnType$$3, args$$3, argTypes$$6, thisArg, isConstructor, hasSpread, loc$$3) {
  var xs$$3;
  const info = new _AST.ArgInfo(thisArg, args$$3, argTypes$$6 == null ? new _AST.SignatureKind(2, "NoUncurrying") : (xs$$3 = argTypes$$6, new _AST.SignatureKind(0, "Typed", xs$$3)), hasSpread != null ? hasSpread ? new _AST.SpreadKind(1, "SeqSpread") : new _AST.SpreadKind(0, "NoSpread") : new _AST.SpreadKind(0, "NoSpread"), false);
  const funcExpr = (0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), coreMember, coreModule);
  var $target$$3;

  if (isConstructor != null) {
    if (isConstructor) {
      $target$$3 = 0;
    } else {
      $target$$3 = 1;
    }
  } else {
    $target$$3 = 1;
  }

  switch ($target$$3) {
    case 0:
      {
        return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(0, "ConstructorCall", funcExpr), info), returnType$$3, loc$$3);
      }

    case 1:
      {
        return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(1, "StaticCall", funcExpr), info), returnType$$3, loc$$3);
      }
  }
}

function Helper$$$GlobalCall$$Z6A200D61(ident, returnType$$4, args$$4, argTypes$$7, memb$$1, isConstructor$$1, loc$$4) {
  let funcExpr$$1;

  if (memb$$1 == null) {
    funcExpr$$1 = (0, _Transforms.AST$$$makeIdentExprNonMangled)(ident);
  } else {
    const m = memb$$1;
    funcExpr$$1 = (0, _Transforms.AST$$$get)(null, new _AST.Type(1, "Any"), (0, _Transforms.AST$$$makeIdentExprNonMangled)(ident), m);
  }

  const op = isConstructor$$1 != null ? isConstructor$$1 ? new _AST.CallKind(0, "ConstructorCall", funcExpr$$1) : new _AST.CallKind(1, "StaticCall", funcExpr$$1) : new _AST.CallKind(1, "StaticCall", funcExpr$$1);
  let argTypes$$8;

  if (argTypes$$7 == null) {
    argTypes$$8 = new _AST.SignatureKind(2, "NoUncurrying");
  } else {
    const xs$$4 = argTypes$$7;
    argTypes$$8 = new _AST.SignatureKind(0, "Typed", xs$$4);
  }

  const info$$1 = (0, _Transforms.AST$$$argInfo)(null, args$$4, argTypes$$8);
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", op, info$$1), returnType$$4, loc$$4);
}

function Helper$$$GlobalIdent$$Z788F3BB9(ident$$1, memb$$2, typ, loc$$5) {
  return (0, _Transforms.AST$$$get)(loc$$5, typ, (0, _Transforms.AST$$$makeIdentExprNonMangled)(ident$$1), memb$$2);
}

function Helpers$$$resolveArgTypes(argTypes$$9, genArgs) {
  return (0, _List.map)(function mapping(_arg1) {
    if (_arg1.tag === 14) {
      const t = _arg1;
      const name = _arg1.fields[0];
      return (0, _Option.defaultArg)((0, _List.tryPick)(function chooser(tupledArg) {
        if (name === tupledArg[0]) {
          return tupledArg[1];
        } else {
          return null;
        }
      }, genArgs), t);
    } else {
      const t$$2 = _arg1;
      return t$$2;
    }
  }, argTypes$$9);
}

function Helpers$$$emitJs(r, t$$3, args$$5, macro) {
  const info$$2 = (0, _Transforms.AST$$$argInfo)(null, args$$5, new _AST.SignatureKind(1, "AutoUncurrying"));
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(2, "Emit", macro, info$$2), t$$3, r);
}

function Helpers$$$objExpr(t$$4, kvs) {
  const kvs$$1 = (0, _List.map)(function (tupledArg$$1) {
    return new _AST.ObjectMember(0, "ObjectMember", (0, _Transforms.AST$$$makeStrConst)(tupledArg$$1[0]), tupledArg$$1[1], new _AST.ObjectMemberKind(0, "ObjectValue"));
  }, kvs);
  return new _AST.Expr(6, "ObjectExpr", kvs$$1, t$$4, null);
}

function Helpers$$$add(left, right) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", new _AST2.BinaryOperator(12, "BinaryPlus"), left, right), (0, _AST.Expr$$get_Type)(left), null);
}

function Helpers$$$sub(left$$1, right$$1) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", new _AST2.BinaryOperator(11, "BinaryMinus"), left$$1, right$$1), (0, _AST.Expr$$get_Type)(left$$1), null);
}

function Helpers$$$eq(left$$2, right$$2) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", new _AST2.BinaryOperator(2, "BinaryEqualStrict"), left$$2, right$$2), new _AST.Type(3, "Boolean"), null);
}

function Helpers$$$neq(left$$3, right$$3) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", new _AST2.BinaryOperator(3, "BinaryUnequalStrict"), left$$3, right$$3), new _AST.Type(3, "Boolean"), null);
}

function Helpers$$$isNull(expr) {
  return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", new _AST2.BinaryOperator(0, "BinaryEqual"), expr, new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(1, "Any")))), new _AST.Type(3, "Boolean"), null);
}

function Helpers$$$error(msg) {
  return Helper$$$ConstructorCall$$437D8EA7((0, _Transforms.AST$$$makeIdentExprNonMangled)("Error"), new _AST.Type(1, "Any"), (0, _Types.L)(msg, (0, _Types.L)()));
}

function Helpers$$$s(txt) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(5, "StringConstant", txt));
}

function Helpers$$$genArg(com, ctx, r$$1, i, genArgs$$1) {
  return (0, _Option.defaultArgWith)((0, _Option.defaultArg)((0, _List.tryItem)(i, genArgs$$1), null, function mapping$$1(tuple) {
    return tuple[1];
  }), function defThunk() {
    (0, _Transforms.Log$$$addError)(com, ctx.InlinePath, r$$1, "Couldn't find generic argument in position " + (0, _Util.int32ToString)(i));
    return new _AST.Type(1, "Any");
  });
}

function Helpers$$$hasBaseImplementingBasicMethods(ent) {
  if (((0, _Symbols.FSharpEntity$$get_IsFSharpRecord)(ent) ? true : (0, _Symbols.FSharpEntity$$get_IsFSharpUnion)(ent)) ? true : (0, _Symbols.FSharpEntity$$get_IsFSharpExceptionDeclaration)(ent)) {
    return true;
  } else {
    return (0, _Symbols.FSharpEntity$$get_IsValueType)(ent);
  }
}

const BuiltinType = (0, _Types.declare)(function BuiltinType(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BuiltinType = BuiltinType;

function $007CBuiltin$007C_$007C(_arg1$$1) {
  if (_arg1$$1.tag === 16) {
    const genArgs$$2 = _arg1$$1.fields[1];
    const ent$$1 = _arg1$$1.fields[0];
    const matchValue = [(0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$1), genArgs$$2];
    var $target$$4, t$$5, k$$1, v$$1, t$$6, k$$2, v$$2;

    if (matchValue[0] != null) {
      if (matchValue[0] === "System.Guid") {
        $target$$4 = 0;
      } else if (matchValue[0] === "System.TimeSpan") {
        $target$$4 = 1;
      } else if (matchValue[0] === "System.DateTime") {
        $target$$4 = 2;
      } else if (matchValue[0] === "System.DateTimeOffset") {
        $target$$4 = 3;
      } else if (matchValue[0] === "System.Timers.Timer") {
        $target$$4 = 4;
      } else if (matchValue[0] === "System.Int64") {
        $target$$4 = 5;
      } else if (matchValue[0] === "System.UInt64") {
        $target$$4 = 6;
      } else if (matchValue[0] === "Microsoft.FSharp.Core.int64`1") {
        $target$$4 = 7;
      } else if (matchValue[0] === "System.Numerics.BigInteger") {
        $target$$4 = 8;
      } else if (matchValue[0] === "Microsoft.FSharp.Collections.FSharpSet`1") {
        if (matchValue[1].tail != null) {
          if (matchValue[1].tail.tail == null) {
            $target$$4 = 9;
            t$$5 = matchValue[1].head;
          } else {
            $target$$4 = 13;
          }
        } else {
          $target$$4 = 13;
        }
      } else if (matchValue[0] === "Microsoft.FSharp.Collections.FSharpMap`2") {
        if (matchValue[1].tail != null) {
          if (matchValue[1].tail.tail != null) {
            if (matchValue[1].tail.tail.tail == null) {
              $target$$4 = 10;
              k$$1 = matchValue[1].head;
              v$$1 = matchValue[1].tail.head;
            } else {
              $target$$4 = 13;
            }
          } else {
            $target$$4 = 13;
          }
        } else {
          $target$$4 = 13;
        }
      } else if (matchValue[0] === "System.Collections.Generic.HashSet`1") {
        if (matchValue[1].tail != null) {
          if (matchValue[1].tail.tail == null) {
            $target$$4 = 11;
            t$$6 = matchValue[1].head;
          } else {
            $target$$4 = 13;
          }
        } else {
          $target$$4 = 13;
        }
      } else if (matchValue[0] === "System.Collections.Generic.Dictionary`2") {
        if (matchValue[1].tail != null) {
          if (matchValue[1].tail.tail != null) {
            if (matchValue[1].tail.tail.tail == null) {
              $target$$4 = 12;
              k$$2 = matchValue[1].head;
              v$$2 = matchValue[1].tail.head;
            } else {
              $target$$4 = 13;
            }
          } else {
            $target$$4 = 13;
          }
        } else {
          $target$$4 = 13;
        }
      } else {
        $target$$4 = 13;
      }
    } else {
      $target$$4 = 13;
    }

    switch ($target$$4) {
      case 0:
        {
          return new BuiltinType(0, "BclGuid");
        }

      case 1:
        {
          return new BuiltinType(1, "BclTimeSpan");
        }

      case 2:
        {
          return new BuiltinType(2, "BclDateTime");
        }

      case 3:
        {
          return new BuiltinType(3, "BclDateTimeOffset");
        }

      case 4:
        {
          return new BuiltinType(4, "BclTimer");
        }

      case 5:
        {
          return new BuiltinType(5, "BclInt64");
        }

      case 6:
        {
          return new BuiltinType(6, "BclUInt64");
        }

      case 7:
        {
          return new BuiltinType(5, "BclInt64");
        }

      case 8:
        {
          return new BuiltinType(7, "BclBigInt");
        }

      case 9:
        {
          return new BuiltinType(10, "FSharpSet", t$$5);
        }

      case 10:
        {
          return new BuiltinType(11, "FSharpMap", k$$1, v$$1);
        }

      case 11:
        {
          return new BuiltinType(8, "BclHashSet", t$$6);
        }

      case 12:
        {
          return new BuiltinType(9, "BclDictionary", k$$2, v$$2);
        }

      case 13:
        {
          return null;
        }
    }
  } else {
    return null;
  }
}

function $007CInteger$007CFloat$007C(_arg1$$2) {
  var $target$$5;

  switch (_arg1$$2.tag) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      $target$$5 = 0;
      break;

    case 6:
    case 7:
    case 8:
      $target$$5 = 1;
      break;

    default:
      $target$$5 = 0;
  }

  switch ($target$$5) {
    case 0:
      {
        return new _Option.Choice(0, "Choice1Of2", null);
      }

    case 1:
      {
        return new _Option.Choice(1, "Choice2Of2", null);
      }
  }
}

function $007CNameof$007C_$007C(_arg1$$3) {
  var $target$$6, ident$$2, prop, fi;

  if (_arg1$$3.tag === 1) {
    $target$$6 = 0;
    ident$$2 = _arg1$$3.fields[0];
  } else if (_arg1$$3.tag === 9) {
    if (_arg1$$3.fields[1].tag === 0) {
      if (_arg1$$3.fields[1].fields[0].tag === 0) {
        if (_arg1$$3.fields[1].fields[0].fields[0].tag === 5) {
          $target$$6 = 1;
          prop = _arg1$$3.fields[1].fields[0].fields[0].fields[0];
        } else {
          $target$$6 = 3;
        }
      } else {
        $target$$6 = 3;
      }
    } else if (_arg1$$3.fields[1].tag === 2) {
      $target$$6 = 2;
      fi = _arg1$$3.fields[1].fields[0];
    } else {
      $target$$6 = 3;
    }
  } else {
    $target$$6 = 3;
  }

  switch ($target$$6) {
    case 0:
      {
        return ident$$2.Name;
      }

    case 1:
      {
        return prop;
      }

    case 2:
      {
        return fi;
      }

    case 3:
      {
        return null;
      }
  }
}

function $007CReplaceName$007C_$007C(namesAndReplacements, name$$1) {
  return (0, _List.tryPick)(function chooser$$1(tupledArg$$2) {
    if (tupledArg$$2[0] === name$$1) {
      return tupledArg$$2[1];
    } else {
      return null;
    }
  }, namesAndReplacements);
}

function $007COrDefault$007C(def, _arg1$$4) {
  if (_arg1$$4 == null) {
    return def;
  } else {
    const v$$3 = (0, _Option.value)(_arg1$$4);
    return v$$3;
  }
}

function $007CEntFullName$007C_$007C(typ$$1) {
  if (typ$$1.tag === 16) {
    const ent$$2 = typ$$1.fields[0];
    return (0, _Symbols.FSharpEntity$$get_FullName)(ent$$2);
  } else {
    return null;
  }
}

function $007CListLiteral$007C_$007C(e) {
  const untail = function untail(t$$7, acc, _arg1$$5) {
    untail: while (true) {
      var $target$$7, head, tail;

      if (_arg1$$5.tag === 0) {
        if (_arg1$$5.fields[0].tag === 11) {
          if (_arg1$$5.fields[0].fields[0] != null) {
            $target$$7 = 1;
            head = _arg1$$5.fields[0].fields[0][0];
            tail = _arg1$$5.fields[0].fields[0][1];
          } else {
            $target$$7 = 0;
          }
        } else {
          $target$$7 = 2;
        }
      } else {
        $target$$7 = 2;
      }

      switch ($target$$7) {
        case 0:
          {
            return [(0, _List.reverse)(acc), t$$7];
          }

        case 1:
          {
            t$$7 = t$$7;
            acc = (0, _Types.L)(head, acc);
            _arg1$$5 = tail;
            continue untail;
          }

        case 2:
          {
            return null;
          }
      }
    }
  };

  var $target$$8, t$$8, head$$1, t$$9, tail$$1;

  if (e.tag === 0) {
    if (e.fields[0].tag === 11) {
      if (e.fields[0].fields[0] != null) {
        $target$$8 = 1;
        head$$1 = e.fields[0].fields[0][0];
        t$$9 = e.fields[0].fields[1];
        tail$$1 = e.fields[0].fields[0][1];
      } else {
        $target$$8 = 0;
        t$$8 = e.fields[0].fields[1];
      }
    } else {
      $target$$8 = 2;
    }
  } else {
    $target$$8 = 2;
  }

  switch ($target$$8) {
    case 0:
      {
        return [(0, _Types.L)(), t$$8];
      }

    case 1:
      {
        return untail(t$$9, (0, _Types.L)(head$$1, (0, _Types.L)()), tail$$1);
      }

    case 2:
      {
        return null;
      }
  }
}

function $007CIDictionary$007CIEqualityComparer$007COther$007C(_arg1$$6) {
  if (_arg1$$6.tag === 16) {
    const ent$$3 = _arg1$$6.fields[0];
    const matchValue$$1 = (0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$3);
    var $target$$9;

    if (matchValue$$1 != null) {
      if (matchValue$$1 === "System.Collections.Generic.IDictionary`2") {
        $target$$9 = 0;
      } else if (matchValue$$1 === "System.Collections.Generic.IEqualityComparer`1") {
        $target$$9 = 1;
      } else {
        $target$$9 = 2;
      }
    } else {
      $target$$9 = 2;
    }

    switch ($target$$9) {
      case 0:
        {
          return new _Option.Choice(0, "Choice1Of3", null);
        }

      case 1:
        {
          return new _Option.Choice(1, "Choice2Of3", null);
        }

      case 2:
        {
          return new _Option.Choice(2, "Choice3Of3", null);
        }
    }
  } else {
    return new _Option.Choice(2, "Choice3Of3", null);
  }
}

function $007CIEnumerable$007CIEqualityComparer$007COther$007C(_arg1$$7) {
  if (_arg1$$7.tag === 16) {
    const ent$$4 = _arg1$$7.fields[0];
    const matchValue$$2 = (0, _Symbols.FSharpEntity$$get_TryFullName)(ent$$4);
    var $target$$10;

    if (matchValue$$2 != null) {
      if (matchValue$$2 === "System.Collections.Generic.IEnumerable`1") {
        $target$$10 = 0;
      } else if (matchValue$$2 === "System.Collections.Generic.IEqualityComparer`1") {
        $target$$10 = 1;
      } else {
        $target$$10 = 2;
      }
    } else {
      $target$$10 = 2;
    }

    switch ($target$$10) {
      case 0:
        {
          return new _Option.Choice(0, "Choice1Of3", null);
        }

      case 1:
        {
          return new _Option.Choice(1, "Choice2Of3", null);
        }

      case 2:
        {
          return new _Option.Choice(2, "Choice3Of3", null);
        }
    }
  } else {
    return new _Option.Choice(2, "Choice3Of3", null);
  }
}

function coreModFor(_arg1$$8) {
  var $target$$11;

  switch (_arg1$$8.tag) {
    case 2:
      $target$$11 = 1;
      break;

    case 3:
      $target$$11 = 2;
      break;

    case 4:
      $target$$11 = 3;
      break;

    case 5:
      $target$$11 = 4;
      break;

    case 6:
      $target$$11 = 5;
      break;

    case 7:
      $target$$11 = 6;
      break;

    case 1:
      $target$$11 = 7;
      break;

    case 10:
      $target$$11 = 8;
      break;

    case 11:
      $target$$11 = 9;
      break;

    case 8:
    case 9:
      $target$$11 = 10;
      break;

    default:
      $target$$11 = 0;
  }

  switch ($target$$11) {
    case 0:
      {
        return "String";
      }

    case 1:
      {
        return "Date";
      }

    case 2:
      {
        return "DateOffset";
      }

    case 3:
      {
        return "Timer";
      }

    case 4:
      {
        return "Long";
      }

    case 5:
      {
        return "Long";
      }

    case 6:
      {
        return "BigInt";
      }

    case 7:
      {
        return "Int32";
      }

    case 8:
      {
        return "Set";
      }

    case 9:
      {
        return "Map";
      }

    case 10:
      {
        throw new Error("Cannot decide core module");
      }
  }
}

function genericTypeInfoError(com$$1, file, r$$2) {
  (0, _Transforms.Log$$$addError)(com$$1, file, r$$2, "Cannot get type info of generic parameter, please inline or inject a type resolver");
}

function defaultof(t$$10) {
  switch (t$$10.tag) {
    case 7:
      {
        return (0, _Transforms.AST$$$makeIntConst)(0);
      }

    case 3:
      {
        return (0, _Transforms.AST$$$makeBoolConst)(false);
      }

    default:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", t$$10));
      }
  }
}

function makeLongInt(t$$11, signed, x) {
  const lowBits = new _AST.ValueKind(6, "NumberConstant", (0, _Long.toIntNumber)(x) >>> 0, new _AST2.NumberKind(7, "Float64"));
  const highBits = new _AST.ValueKind(6, "NumberConstant", (0, _Long.toNumber)((0, _Long.op_RightShiftUnsigned)(x, 32)), new _AST2.NumberKind(7, "Float64"));
  const unsigned = new _AST.ValueKind(3, "BoolConstant", !signed);
  const args$$6 = (0, _Types.L)(new _AST.Expr(0, "Value", lowBits), (0, _Types.L)(new _AST.Expr(0, "Value", highBits), (0, _Types.L)(new _AST.Expr(0, "Value", unsigned), (0, _Types.L)())));
  return Helper$$$CoreCall$$39739A92("Long", "fromBits", t$$11, args$$6);
}

function makeFloat32(x$$1) {
  return Helper$$$GlobalCall$$Z6A200D61("Math", new _AST.Type(7, "Number", new _AST2.NumberKind(6, "Float32")), (0, _Types.L)(new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$1, new _AST2.NumberKind(6, "Float32"))), (0, _Types.L)()), null, "fround");
}

function makeTypeConst(typ$$2, value) {
  const matchValue$$3 = [typ$$2, value];
  var $target$$12, x$$2;
  const activePatternResult66538 = $007CBuiltin$007C_$007C(matchValue$$3[0]);

  if (activePatternResult66538 != null) {
    if (activePatternResult66538.tag === 5) {
      if (matchValue$$3[1] instanceof _Long.default) {
        $target$$12 = 0;
        x$$2 = matchValue$$3[1];
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
        return makeLongInt(typ$$2, true, (0, _Long.fromValue)(x$$2, true));
      }

    case 1:
      {
        var $target$$13, x$$3;
        const activePatternResult66537 = $007CBuiltin$007C_$007C(matchValue$$3[0]);

        if (activePatternResult66537 != null) {
          if (activePatternResult66537.tag === 6) {
            if (matchValue$$3[1] instanceof _Long.default) {
              $target$$13 = 0;
              x$$3 = matchValue$$3[1];
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
              return makeLongInt(typ$$2, false, x$$3);
            }

          case 1:
            {
              var $target$$14, x$$4, x$$5, x$$6, x$$7, x$$8, x$$9, x$$10, x$$11, x$$12, x$$13, x$$14, x$$15, name$$2, x$$16, name$$3, x$$17, name$$4, x$$18, name$$5, x$$19, name$$6, x$$20, name$$7, x$$21, arr, kind$$1, arr$$1, kind$$2;

              if (matchValue$$3[0].tag === 7) {
                if (matchValue$$3[0].fields[0].tag === 6) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 1;
                    x$$5 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (matchValue$$3[0].fields[0].tag === 1) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 5;
                    x$$9 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (matchValue$$3[0].fields[0].tag === 0) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 6;
                    x$$10 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (matchValue$$3[0].fields[0].tag === 2) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 7;
                    x$$11 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (matchValue$$3[0].fields[0].tag === 3) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 8;
                    x$$12 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (matchValue$$3[0].fields[0].tag === 4) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 9;
                    x$$13 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (matchValue$$3[0].fields[0].tag === 5) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 10;
                    x$$14 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (matchValue$$3[0].fields[0].tag === 7) {
                  if (typeof matchValue$$3[1] === "number") {
                    $target$$14 = 11;
                    x$$15 = matchValue$$3[1];
                  } else {
                    $target$$14 = 22;
                  }
                } else if (typeof matchValue$$3[1] === "number") {
                  $target$$14 = 0;
                  x$$4 = matchValue$$3[1];
                } else {
                  $target$$14 = 22;
                }
              } else if (matchValue$$3[0].tag === 3) {
                if (typeof matchValue$$3[1] === "boolean") {
                  $target$$14 = 2;
                  x$$6 = matchValue$$3[1];
                } else {
                  $target$$14 = 22;
                }
              } else if (matchValue$$3[0].tag === 5) {
                if (typeof matchValue$$3[1] === "string") {
                  $target$$14 = 3;
                  x$$7 = matchValue$$3[1];
                } else {
                  $target$$14 = 22;
                }
              } else if (matchValue$$3[0].tag === 4) {
                if (typeof matchValue$$3[1] === "string") {
                  $target$$14 = 4;
                  x$$8 = matchValue$$3[1];
                } else {
                  $target$$14 = 22;
                }
              } else if (matchValue$$3[0].tag === 8) {
                if (matchValue$$3[1] instanceof _Long.default) {
                  $target$$14 = 12;
                } else if (matchValue$$3[1] instanceof _Long.default) {
                  $target$$14 = 12;
                } else if (typeof matchValue$$3[1] === "number") {
                  $target$$14 = 13;
                  name$$2 = matchValue$$3[0].fields[1];
                  x$$16 = matchValue$$3[1];
                } else if (typeof matchValue$$3[1] === "number") {
                  $target$$14 = 14;
                  name$$3 = matchValue$$3[0].fields[1];
                  x$$17 = matchValue$$3[1];
                } else if (typeof matchValue$$3[1] === "number") {
                  $target$$14 = 15;
                  name$$4 = matchValue$$3[0].fields[1];
                  x$$18 = matchValue$$3[1];
                } else if (typeof matchValue$$3[1] === "number") {
                  $target$$14 = 16;
                  name$$5 = matchValue$$3[0].fields[1];
                  x$$19 = matchValue$$3[1];
                } else if (typeof matchValue$$3[1] === "number") {
                  $target$$14 = 17;
                  name$$6 = matchValue$$3[0].fields[1];
                  x$$20 = matchValue$$3[1];
                } else if (typeof matchValue$$3[1] === "number") {
                  $target$$14 = 18;
                  name$$7 = matchValue$$3[0].fields[1];
                  x$$21 = matchValue$$3[1];
                } else {
                  $target$$14 = 22;
                }
              } else if (matchValue$$3[0].tag === 2) {
                $target$$14 = 19;
              } else if (matchValue$$3[0].tag === 11) {
                if (matchValue$$3[0].fields[0].tag === 7) {
                  if ((0, _Util.isArray)(matchValue$$3[1])) {
                    $target$$14 = 20;
                    arr = matchValue$$3[1];
                    kind$$1 = matchValue$$3[0].fields[0].fields[0];
                  } else if ((0, _Util.isArray)(matchValue$$3[1])) {
                    $target$$14 = 21;
                    arr$$1 = matchValue$$3[1];
                    kind$$2 = matchValue$$3[0].fields[0].fields[0];
                  } else {
                    $target$$14 = 22;
                  }
                } else {
                  $target$$14 = 22;
                }
              } else {
                $target$$14 = 22;
              }

              switch ($target$$14) {
                case 0:
                  {
                    return (0, _Transforms.AST$$$makeDecConst)(x$$4);
                  }

                case 1:
                  {
                    return makeFloat32(x$$5);
                  }

                case 2:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(3, "BoolConstant", x$$6));
                  }

                case 3:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(5, "StringConstant", x$$7));
                  }

                case 4:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(4, "CharConstant", x$$8));
                  }

                case 5:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$9, new _AST2.NumberKind(1, "UInt8")));
                  }

                case 6:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$10, new _AST2.NumberKind(0, "Int8")));
                  }

                case 7:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$11, new _AST2.NumberKind(2, "Int16")));
                  }

                case 8:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$12, new _AST2.NumberKind(3, "UInt16")));
                  }

                case 9:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$13, new _AST2.NumberKind(4, "Int32")));
                  }

                case 10:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$14, new _AST2.NumberKind(5, "UInt32")));
                  }

                case 11:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$15, new _AST2.NumberKind(7, "Float64")));
                  }

                case 12:
                  {
                    throw new Error("int64 enums are not supported");
                  }

                case 13:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(0, "NumberEnum", (0, _Transforms.AST$$$makeIntConst)(~~x$$16)), name$$2));
                  }

                case 14:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(0, "NumberEnum", (0, _Transforms.AST$$$makeIntConst)(x$$17)), name$$3));
                  }

                case 15:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(0, "NumberEnum", (0, _Transforms.AST$$$makeIntConst)(x$$18)), name$$4));
                  }

                case 16:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(0, "NumberEnum", (0, _Transforms.AST$$$makeIntConst)(~~x$$19)), name$$5));
                  }

                case 17:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(0, "NumberEnum", (0, _Transforms.AST$$$makeIntConst)(x$$20)), name$$6));
                  }

                case 18:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(0, "NumberEnum", (0, _Transforms.AST$$$makeIntConst)(~~x$$21)), name$$7));
                  }

                case 19:
                  {
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(2, "UnitConstant"));
                  }

                case 20:
                  {
                    const values = (0, _List.ofSeq)((0, _Array.map)(function mapping$$2(x$$22) {
                      return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$22, kind$$1));
                    }, arr, Array));
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", values), new _AST.Type(7, "Number", kind$$1)));
                  }

                case 21:
                  {
                    const values$$1 = (0, _List.ofSeq)((0, _Array.map)(function mapping$$3(x$$23) {
                      return new _AST.Expr(0, "Value", new _AST.ValueKind(6, "NumberConstant", x$$23, kind$$2));
                    }, arr$$1, Array));
                    return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", values$$1), new _AST.Type(7, "Number", kind$$2)));
                  }

                case 22:
                  {
                    return (0, _String.toFail)((0, _String.printf)("Unexpected type %A for literal %O (%s)"))(typ$$2)(value)("System.Object");
                  }
              }
            }
        }
      }
  }
}

function makeTypeInfo(r$$3, t$$12) {
  return new _AST.Expr(0, "Value", new _AST.ValueKind(0, "TypeInfo", t$$12, r$$3));
}

function makeTypeDefinitionInfo(r$$4, t$$13) {
  let t$$15;

  switch (t$$13.tag) {
    case 9:
      {
        t$$15 = new _AST.Type(9, "Option", new _AST.Type(1, "Any"));
        break;
      }

    case 11:
      {
        t$$15 = new _AST.Type(11, "Array", new _AST.Type(1, "Any"));
        break;
      }

    case 12:
      {
        t$$15 = new _AST.Type(12, "List", new _AST.Type(1, "Any"));
        break;
      }

    case 10:
      {
        const genArgs$$3 = t$$13.fields[0];
        t$$15 = new _AST.Type(10, "Tuple", (0, _List.map)(function mapping$$4(_arg1$$9) {
          return new _AST.Type(1, "Any");
        }, genArgs$$3));
        break;
      }

    case 16:
      {
        const genArgs$$4 = t$$13.fields[1];
        const ent$$5 = t$$13.fields[0];
        const genArgs$$5 = (0, _List.map)(function mapping$$5(_arg2) {
          return new _AST.Type(1, "Any");
        }, genArgs$$4);
        t$$15 = new _AST.Type(16, "DeclaredType", ent$$5, genArgs$$5);
        break;
      }

    default:
      {
        const t$$14 = t$$13;
        t$$15 = t$$14;
      }
  }

  return new _AST.Expr(0, "Value", new _AST.ValueKind(0, "TypeInfo", t$$15, r$$4));
}

function createAtom(value$$1) {
  const typ$$3 = (0, _AST.Expr$$get_Type)(value$$1);
  return Helper$$$CoreCall$$39739A92("Util", "createAtom", typ$$3, (0, _Types.L)(value$$1, (0, _Types.L)()), (0, _Types.L)(typ$$3, (0, _Types.L)()));
}

function toChar(arg) {
  const matchValue$$4 = (0, _AST.Expr$$get_Type)(arg);
  var $target$$15;

  switch (matchValue$$4.tag) {
    case 4:
    case 5:
      $target$$15 = 0;
      break;

    default:
      $target$$15 = 1;
  }

  switch ($target$$15) {
    case 0:
      {
        return arg;
      }

    case 1:
      {
        return Helper$$$GlobalCall$$Z6A200D61("String", new _AST.Type(4, "Char"), (0, _Types.L)(arg, (0, _Types.L)()), null, "fromCharCode");
      }
  }
}

function toString(com$$2, ctx$$1, r$$5, args$$7) {
  var ent$$6;

  if (args$$7.tail != null) {
    const tail$$2 = args$$7.tail;
    const head$$2 = args$$7.head;
    const matchValue$$5 = (0, _AST.Expr$$get_Type)(head$$2);
    var $target$$16;

    if (matchValue$$5.tag === 4) {
      $target$$16 = 0;
    } else if (matchValue$$5.tag === 5) {
      $target$$16 = 0;
    } else if (matchValue$$5.tag === 2) {
      $target$$16 = 1;
    } else if (matchValue$$5.tag === 3) {
      $target$$16 = 1;
    } else if (matchValue$$5.tag === 11) {
      $target$$16 = 1;
    } else if (matchValue$$5.tag === 10) {
      $target$$16 = 1;
    } else if (matchValue$$5.tag === 13) {
      $target$$16 = 1;
    } else if (matchValue$$5.tag === 8) {
      $target$$16 = 1;
    } else {
      const activePatternResult66552 = $007CBuiltin$007C_$007C(matchValue$$5);

      if (activePatternResult66552 != null) {
        if (activePatternResult66552.tag === 5) {
          $target$$16 = 2;
        } else if (activePatternResult66552.tag === 6) {
          $target$$16 = 2;
        } else {
          $target$$16 = 3;
        }
      } else {
        $target$$16 = 3;
      }
    }

    switch ($target$$16) {
      case 0:
        {
          return head$$2;
        }

      case 1:
        {
          return Helper$$$GlobalCall$$Z6A200D61("String", new _AST.Type(5, "String"), (0, _Types.L)(head$$2, (0, _Types.L)()));
        }

      case 2:
        {
          return Helper$$$CoreCall$$39739A92("Long", "toString", new _AST.Type(5, "String"), args$$7);
        }

      case 3:
        {
          var $target$$17, ent$$7;

          if (matchValue$$5.tag === 7) {
            if (matchValue$$5.fields[0].tag === 2) {
              $target$$17 = 0;
            } else if (matchValue$$5.fields[0].tag === 4) {
              $target$$17 = 1;
            } else {
              $target$$17 = 2;
            }
          } else if (matchValue$$5.tag === 16) {
            if (ent$$6 = matchValue$$5.fields[0], Helpers$$$hasBaseImplementingBasicMethods(ent$$6)) {
              $target$$17 = 3;
              ent$$7 = matchValue$$5.fields[0];
            } else {
              $target$$17 = 4;
            }
          } else {
            $target$$17 = 4;
          }

          switch ($target$$17) {
            case 0:
              {
                return Helper$$$CoreCall$$39739A92("Util", "int16ToString", new _AST.Type(5, "String"), args$$7);
              }

            case 1:
              {
                return Helper$$$CoreCall$$39739A92("Util", "int32ToString", new _AST.Type(5, "String"), args$$7);
              }

            case 2:
              {
                return Helper$$$InstanceCall$$9FFCF9C(head$$2, "toString", new _AST.Type(5, "String"), tail$$2);
              }

            case 3:
              {
                return Helper$$$InstanceCall$$9FFCF9C(head$$2, "toString", new _AST.Type(5, "String"), (0, _Types.L)());
              }

            case 4:
              {
                return Helper$$$CoreCall$$39739A92("Util", "toString", new _AST.Type(5, "String"), (0, _Types.L)(head$$2, (0, _Types.L)()));
              }
          }
        }
    }
  } else {
    return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$2, ctx$$1.InlinePath, r$$5, "toString is called with empty args");
  }
}

function toFloat(com$$3, ctx$$2, r$$6, targetType, args$$8) {
  const matchValue$$6 = (0, _AST.Expr$$get_Type)((0, _List.head)(args$$8));
  var $target$$18;

  if (matchValue$$6.tag === 5) {
    $target$$18 = 0;
  } else {
    const activePatternResult66558 = $007CBuiltin$007C_$007C(matchValue$$6);

    if (activePatternResult66558 != null) {
      if (activePatternResult66558.tag === 5) {
        $target$$18 = 1;
      } else if (activePatternResult66558.tag === 6) {
        $target$$18 = 1;
      } else {
        $target$$18 = 2;
      }
    } else {
      $target$$18 = 2;
    }
  }

  switch ($target$$18) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Double", "parse", new _AST.Type(7, "Number", new _AST2.NumberKind(7, "Float64")), args$$8);
      }

    case 1:
      {
        return Helper$$$CoreCall$$39739A92("Long", "toNumber", new _AST.Type(7, "Number", new _AST2.NumberKind(7, "Float64")), args$$8);
      }

    case 2:
      {
        var $target$$19;
        const activePatternResult66557 = $007CBuiltin$007C_$007C(matchValue$$6);

        if (activePatternResult66557 != null) {
          if (activePatternResult66557.tag === 7) {
            $target$$19 = 0;
          } else {
            $target$$19 = 1;
          }
        } else {
          $target$$19 = 1;
        }

        switch ($target$$19) {
          case 0:
            {
              let meth;
              var $target$$20;

              if (targetType.tag === 7) {
                if (targetType.fields[0].tag === 6) {
                  $target$$20 = 0;
                } else if (targetType.fields[0].tag === 7) {
                  $target$$20 = 1;
                } else if (targetType.fields[0].tag === 8) {
                  $target$$20 = 2;
                } else {
                  $target$$20 = 3;
                }
              } else {
                $target$$20 = 3;
              }

              switch ($target$$20) {
                case 0:
                  {
                    meth = "toSingle";
                    break;
                  }

                case 1:
                  {
                    meth = "toDouble";
                    break;
                  }

                case 2:
                  {
                    meth = "toDecimal";
                    break;
                  }

                case 3:
                  {
                    throw new Error("Unexpected BigInt conversion");
                    break;
                  }
              }

              return Helper$$$CoreCall$$39739A92("BigInt", meth, new _AST.Type(7, "Number", new _AST2.NumberKind(7, "Float64")), args$$8);
            }

          case 1:
            {
              var $target$$21;

              if (matchValue$$6.tag === 7) {
                $target$$21 = 0;
              } else if (matchValue$$6.tag === 4) {
                $target$$21 = 0;
              } else if (matchValue$$6.tag === 8) {
                if (matchValue$$6.fields[0].tag === 0) {
                  $target$$21 = 0;
                } else {
                  $target$$21 = 1;
                }
              } else {
                $target$$21 = 1;
              }

              switch ($target$$21) {
                case 0:
                  {
                    return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$8), targetType);
                  }

                case 1:
                  {
                    (0, _Transforms.Log$$$addWarning)(com$$3, ctx$$2.InlinePath, r$$6, "Cannot make conversion at compile time because source type is unknown");
                    return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$8), targetType);
                  }
              }
            }
        }
      }
  }
}

function fastIntFloor(expr$$1) {
  const inner = (0, _Transforms.AST$$$makeUnOp)(null, new _AST.Type(1, "Any"), expr$$1, new _AST2.UnaryOperator(3, "UnaryNotBitwise"));
  return (0, _Transforms.AST$$$makeUnOp)(null, new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), inner, new _AST2.UnaryOperator(3, "UnaryNotBitwise"));
}

function toInt(com$$4, ctx$$3, r$$7, round, targetType$$1, args$$9) {
  var typeTo$$3, matchValue$$8, activePatternResult66613, activePatternResult66612, activePatternResult66599, activePatternResult66600, activePatternResult66601, activePatternResult66604, activePatternResult66609, activePatternResult66610, activePatternResult66611;
  let sourceType;
  const matchValue$$7 = (0, _AST.Expr$$get_Type)((0, _List.head)(args$$9));
  var $target$$22, t$$16;

  if (matchValue$$7.tag === 8) {
    if (matchValue$$7.fields[0].tag === 0) {
      $target$$22 = 0;
    } else {
      $target$$22 = 1;
      t$$16 = matchValue$$7;
    }
  } else {
    $target$$22 = 1;
    t$$16 = matchValue$$7;
  }

  switch ($target$$22) {
    case 0:
      {
        sourceType = new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32"));
        break;
      }

    case 1:
      {
        sourceType = t$$16;
        break;
      }
  }

  const targetType$$2 = targetType$$1.tag === 8 ? targetType$$1.fields[0].tag === 0 ? new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")) : targetType$$1 : targetType$$1;

  const kindIndex = function kindIndex(t$$18) {
    var $target$$23;

    if (t$$18.tag === 7) {
      if (t$$18.fields[0].tag === 0) {
        $target$$23 = 0;
      } else if (t$$18.fields[0].tag === 2) {
        $target$$23 = 1;
      } else if (t$$18.fields[0].tag === 4) {
        $target$$23 = 2;
      } else {
        const activePatternResult66569 = $007CBuiltin$007C_$007C(t$$18);

        if (activePatternResult66569 != null) {
          if (activePatternResult66569.tag === 5) {
            $target$$23 = 3;
          } else {
            $target$$23 = 4;
          }
        } else {
          $target$$23 = 4;
        }
      }
    } else {
      const activePatternResult66570 = $007CBuiltin$007C_$007C(t$$18);

      if (activePatternResult66570 != null) {
        if (activePatternResult66570.tag === 5) {
          $target$$23 = 3;
        } else {
          $target$$23 = 4;
        }
      } else {
        $target$$23 = 4;
      }
    }

    switch ($target$$23) {
      case 0:
        {
          return 0;
        }

      case 1:
        {
          return 1;
        }

      case 2:
        {
          return 2;
        }

      case 3:
        {
          return 3;
        }

      case 4:
        {
          var $target$$24;

          if (t$$18.tag === 7) {
            if (t$$18.fields[0].tag === 1) {
              $target$$24 = 0;
            } else if (t$$18.fields[0].tag === 3) {
              $target$$24 = 1;
            } else if (t$$18.fields[0].tag === 5) {
              $target$$24 = 2;
            } else {
              const activePatternResult66567 = $007CBuiltin$007C_$007C(t$$18);

              if (activePatternResult66567 != null) {
                if (activePatternResult66567.tag === 6) {
                  $target$$24 = 3;
                } else {
                  $target$$24 = 4;
                }
              } else {
                $target$$24 = 4;
              }
            }
          } else {
            const activePatternResult66568 = $007CBuiltin$007C_$007C(t$$18);

            if (activePatternResult66568 != null) {
              if (activePatternResult66568.tag === 6) {
                $target$$24 = 3;
              } else {
                $target$$24 = 4;
              }
            } else {
              $target$$24 = 4;
            }
          }

          switch ($target$$24) {
            case 0:
              {
                return 4;
              }

            case 1:
              {
                return 5;
              }

            case 2:
              {
                return 6;
              }

            case 3:
              {
                return 7;
              }

            case 4:
              {
                var $target$$25;

                if (t$$18.tag === 7) {
                  if (t$$18.fields[0].tag === 6) {
                    $target$$25 = 0;
                  } else if (t$$18.fields[0].tag === 7) {
                    $target$$25 = 1;
                  } else if (t$$18.fields[0].tag === 8) {
                    $target$$25 = 2;
                  } else {
                    const activePatternResult66565 = $007CBuiltin$007C_$007C(t$$18);

                    if (activePatternResult66565 != null) {
                      if (activePatternResult66565.tag === 7) {
                        $target$$25 = 3;
                      } else {
                        $target$$25 = 4;
                      }
                    } else {
                      $target$$25 = 4;
                    }
                  }
                } else {
                  const activePatternResult66566 = $007CBuiltin$007C_$007C(t$$18);

                  if (activePatternResult66566 != null) {
                    if (activePatternResult66566.tag === 7) {
                      $target$$25 = 3;
                    } else {
                      $target$$25 = 4;
                    }
                  } else {
                    $target$$25 = 4;
                  }
                }

                switch ($target$$25) {
                  case 0:
                    {
                      return 8;
                    }

                  case 1:
                    {
                      return 9;
                    }

                  case 2:
                    {
                      return 10;
                    }

                  case 3:
                    {
                      return 11;
                    }

                  case 4:
                    {
                      return (0, _String.toFail)((0, _String.printf)("Unexpected non-number type %A"))(t$$18) | 0;
                    }
                }
              }
          }
        }
    }
  };

  const needToCast = function needToCast(typeFrom, typeTo) {
    const v$$4 = kindIndex(typeFrom) | 0;
    const h = kindIndex(typeTo) | 0;

    if ((v$$4 > h ? true : v$$4 < 4 ? h > 3 : false) ? h < 8 : false) {
      return true;
    } else if (h !== v$$4) {
      if (h === 11) {
        return true;
      } else {
        return v$$4 === 11;
      }
    } else {
      return false;
    }
  };

  const emitLong = function emitLong(unsigned$$1, args$$10) {
    const args$$11 = (0, _List.append)(args$$10, (0, _Types.L)((0, _Transforms.AST$$$makeBoolConst)(unsigned$$1), (0, _Types.L)()));
    var $target$$26;
    const activePatternResult66576 = $007CBuiltin$007C_$007C(sourceType);

    if (activePatternResult66576 != null) {
      if (activePatternResult66576.tag === 5) {
        $target$$26 = 0;
      } else if (activePatternResult66576.tag === 6) {
        $target$$26 = 0;
      } else {
        $target$$26 = 1;
      }
    } else {
      $target$$26 = 1;
    }

    switch ($target$$26) {
      case 0:
        {
          return Helper$$$CoreCall$$39739A92("Long", "fromValue", targetType$$2, args$$11);
        }

      case 1:
        {
          var $target$$27;

          if (sourceType.tag === 7) {
            if ($007CInteger$007CFloat$007C(sourceType.fields[0]).tag === 0) {
              $target$$27 = 0;
            } else {
              $target$$27 = 1;
            }
          } else {
            $target$$27 = 1;
          }

          switch ($target$$27) {
            case 0:
              {
                return Helper$$$CoreCall$$39739A92("Long", "fromInteger", targetType$$2, (0, _List.append)(args$$11, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(kindIndex(sourceType)), (0, _Types.L)())));
              }

            case 1:
              {
                return Helper$$$CoreCall$$39739A92("Long", "fromNumber", targetType$$2, args$$11);
              }
          }
        }
    }
  };

  const emitBigInt = function emitBigInt(args$$12) {
    var $target$$28;
    const activePatternResult66579 = $007CBuiltin$007C_$007C(sourceType);

    if (activePatternResult66579 != null) {
      if (activePatternResult66579.tag === 5) {
        $target$$28 = 0;
      } else if (activePatternResult66579.tag === 6) {
        $target$$28 = 0;
      } else {
        $target$$28 = 1;
      }
    } else {
      $target$$28 = 1;
    }

    switch ($target$$28) {
      case 0:
        {
          return Helper$$$CoreCall$$39739A92("BigInt", "fromInt64", targetType$$2, args$$12);
        }

      case 1:
        {
          return Helper$$$CoreCall$$39739A92("BigInt", "fromInt32", targetType$$2, args$$12);
        }
    }
  };

  const emitCast = function emitCast(typeTo$$1, args$$13) {
    var $target$$29;
    const activePatternResult66583 = $007CBuiltin$007C_$007C(typeTo$$1);

    if (activePatternResult66583 != null) {
      if (activePatternResult66583.tag === 7) {
        $target$$29 = 0;
      } else {
        $target$$29 = 1;
      }
    } else {
      $target$$29 = 1;
    }

    switch ($target$$29) {
      case 0:
        {
          return emitBigInt(args$$13);
        }

      case 1:
        {
          var $target$$30;
          const activePatternResult66582 = $007CBuiltin$007C_$007C(typeTo$$1);

          if (activePatternResult66582 != null) {
            if (activePatternResult66582.tag === 6) {
              $target$$30 = 0;
            } else {
              $target$$30 = 1;
            }
          } else {
            $target$$30 = 1;
          }

          switch ($target$$30) {
            case 0:
              {
                return emitLong(true, args$$13);
              }

            case 1:
              {
                var $target$$31;
                const activePatternResult66581 = $007CBuiltin$007C_$007C(typeTo$$1);

                if (activePatternResult66581 != null) {
                  if (activePatternResult66581.tag === 5) {
                    $target$$31 = 0;
                  } else {
                    $target$$31 = 1;
                  }
                } else {
                  $target$$31 = 1;
                }

                switch ($target$$31) {
                  case 0:
                    {
                      return emitLong(false, args$$13);
                    }

                  case 1:
                    {
                      if (typeTo$$1.tag === 7) {
                        if (typeTo$$1.fields[0].tag === 2) {
                          return Helpers$$$emitJs(null, targetType$$2, args$$13, "($0 + 0x8000 & 0xFFFF) - 0x8000");
                        } else if (typeTo$$1.fields[0].tag === 4) {
                          return fastIntFloor((0, _List.head)(args$$13));
                        } else if (typeTo$$1.fields[0].tag === 1) {
                          return Helpers$$$emitJs(null, targetType$$2, args$$13, "$0 & 0xFF");
                        } else if (typeTo$$1.fields[0].tag === 3) {
                          return Helpers$$$emitJs(null, targetType$$2, args$$13, "$0 & 0xFFFF");
                        } else if (typeTo$$1.fields[0].tag === 5) {
                          return Helpers$$$emitJs(null, targetType$$2, args$$13, "$0 >>> 0");
                        } else if (typeTo$$1.fields[0].tag === 6) {
                          return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$13), targetType$$2);
                        } else if (typeTo$$1.fields[0].tag === 7) {
                          return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$13), targetType$$2);
                        } else if (typeTo$$1.fields[0].tag === 8) {
                          return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$13), targetType$$2);
                        } else {
                          return Helpers$$$emitJs(null, targetType$$2, args$$13, "($0 + 0x80 & 0xFF) - 0x80");
                        }
                      } else {
                        return (0, _String.toFail)((0, _String.printf)("Unexpected non-number type %A"))(typeTo$$1);
                      }
                    }
                }
              }
          }
        }
    }
  };

  const castBigIntMethod = function castBigIntMethod(typeTo$$2) {
    var $target$$32;
    const activePatternResult66590 = $007CBuiltin$007C_$007C(typeTo$$2);

    if (activePatternResult66590 != null) {
      if (activePatternResult66590.tag === 7) {
        $target$$32 = 0;
      } else {
        $target$$32 = 1;
      }
    } else {
      $target$$32 = 1;
    }

    switch ($target$$32) {
      case 0:
        {
          throw new Error("Unexpected conversion");
        }

      case 1:
        {
          var $target$$33;

          if (typeTo$$2.tag === 7) {
            if (typeTo$$2.fields[0].tag === 0) {
              $target$$33 = 0;
            } else if (typeTo$$2.fields[0].tag === 2) {
              $target$$33 = 1;
            } else if (typeTo$$2.fields[0].tag === 4) {
              $target$$33 = 2;
            } else {
              const activePatternResult66588 = $007CBuiltin$007C_$007C(typeTo$$2);

              if (activePatternResult66588 != null) {
                if (activePatternResult66588.tag === 5) {
                  $target$$33 = 3;
                } else {
                  $target$$33 = 4;
                }
              } else {
                $target$$33 = 4;
              }
            }
          } else {
            const activePatternResult66589 = $007CBuiltin$007C_$007C(typeTo$$2);

            if (activePatternResult66589 != null) {
              if (activePatternResult66589.tag === 5) {
                $target$$33 = 3;
              } else {
                $target$$33 = 4;
              }
            } else {
              $target$$33 = 4;
            }
          }

          switch ($target$$33) {
            case 0:
              {
                return "toSByte";
              }

            case 1:
              {
                return "toInt16";
              }

            case 2:
              {
                return "toInt32";
              }

            case 3:
              {
                return "toInt64";
              }

            case 4:
              {
                var $target$$34;

                if (typeTo$$2.tag === 7) {
                  if (typeTo$$2.fields[0].tag === 1) {
                    $target$$34 = 0;
                  } else if (typeTo$$2.fields[0].tag === 3) {
                    $target$$34 = 1;
                  } else if (typeTo$$2.fields[0].tag === 5) {
                    $target$$34 = 2;
                  } else {
                    const activePatternResult66586 = $007CBuiltin$007C_$007C(typeTo$$2);

                    if (activePatternResult66586 != null) {
                      if (activePatternResult66586.tag === 6) {
                        $target$$34 = 3;
                      } else {
                        $target$$34 = 4;
                      }
                    } else {
                      $target$$34 = 4;
                    }
                  }
                } else {
                  const activePatternResult66587 = $007CBuiltin$007C_$007C(typeTo$$2);

                  if (activePatternResult66587 != null) {
                    if (activePatternResult66587.tag === 6) {
                      $target$$34 = 3;
                    } else {
                      $target$$34 = 4;
                    }
                  } else {
                    $target$$34 = 4;
                  }
                }

                switch ($target$$34) {
                  case 0:
                    {
                      return "toByte";
                    }

                  case 1:
                    {
                      return "toUInt16";
                    }

                  case 2:
                    {
                      return "toUInt32";
                    }

                  case 3:
                    {
                      return "toUInt64";
                    }

                  case 4:
                    {
                      var $target$$35;

                      if (typeTo$$2.tag === 7) {
                        if (typeTo$$2.fields[0].tag === 6) {
                          $target$$35 = 0;
                        } else if (typeTo$$2.fields[0].tag === 7) {
                          $target$$35 = 1;
                        } else if (typeTo$$2.fields[0].tag === 8) {
                          $target$$35 = 2;
                        } else {
                          $target$$35 = 3;
                        }
                      } else {
                        $target$$35 = 3;
                      }

                      switch ($target$$35) {
                        case 0:
                          {
                            return "toSingle";
                          }

                        case 1:
                          {
                            return "toDouble";
                          }

                        case 2:
                          {
                            return "toDecimal";
                          }

                        case 3:
                          {
                            return (0, _String.toFail)((0, _String.printf)("Unexpected non-number type %A"))(typeTo$$2);
                          }
                      }
                    }
                }
              }
          }
        }
    }
  };

  var $target$$36;

  if (sourceType.tag === 8) {
    if (sourceType.fields[0].tag === 0) {
      $target$$36 = 0;
    } else {
      const activePatternResult66618 = $007CBuiltin$007C_$007C(sourceType);

      if (activePatternResult66618 != null) {
        if (activePatternResult66618.tag === 7) {
          $target$$36 = 3;
        } else {
          $target$$36 = 4;
        }
      } else {
        $target$$36 = 4;
      }
    }
  } else if (sourceType.tag === 4) {
    $target$$36 = 1;
  } else if (sourceType.tag === 5) {
    $target$$36 = 2;
  } else {
    const activePatternResult66619 = $007CBuiltin$007C_$007C(sourceType);

    if (activePatternResult66619 != null) {
      if (activePatternResult66619.tag === 7) {
        $target$$36 = 3;
      } else {
        $target$$36 = 4;
      }
    } else {
      $target$$36 = 4;
    }
  }

  switch ($target$$36) {
    case 0:
      {
        return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$9), targetType$$2);
      }

    case 1:
      {
        return Helper$$$InstanceCall$$9FFCF9C((0, _List.head)(args$$9), "charCodeAt", targetType$$2, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)()));
      }

    case 2:
      {
        var $target$$37, kind$$3;
        const activePatternResult66592 = $007CBuiltin$007C_$007C(targetType$$2);

        if (activePatternResult66592 != null) {
          if (activePatternResult66592.tag === 5) {
            $target$$37 = 0;
            kind$$3 = activePatternResult66592;
          } else if (activePatternResult66592.tag === 6) {
            $target$$37 = 0;
            kind$$3 = activePatternResult66592;
          } else {
            $target$$37 = 1;
          }
        } else {
          $target$$37 = 1;
        }

        switch ($target$$37) {
          case 0:
            {
              const unsigned$$2 = (0, _Util.equals)(kind$$3, new BuiltinType(6, "BclUInt64"));
              const args$$14 = (0, _List.append)((0, _Types.L)((0, _List.head)(args$$9), (0, _Types.L)()), (0, _List.append)((0, _Types.L)((0, _Transforms.AST$$$makeBoolConst)(unsigned$$2), (0, _Types.L)()), (0, _List.tail)(args$$9)));
              return Helper$$$CoreCall$$39739A92("Long", "fromString", targetType$$2, args$$14);
            }

          case 1:
            {
              return Helper$$$CoreCall$$39739A92("Int32", "parse", targetType$$2, args$$9);
            }
        }
      }

    case 3:
      {
        const meth$$1 = castBigIntMethod(targetType$$2);
        return Helper$$$CoreCall$$39739A92("BigInt", meth$$1, targetType$$2, args$$9);
      }

    case 4:
      {
        var $target$$38, typeFrom$$1;

        if (sourceType.tag === 7) {
          $target$$38 = 0;
          typeFrom$$1 = sourceType;
        } else {
          const activePatternResult66617 = $007CBuiltin$007C_$007C(sourceType);

          if (activePatternResult66617 != null) {
            if (activePatternResult66617.tag === 5) {
              $target$$38 = 0;
              typeFrom$$1 = sourceType;
            } else if (activePatternResult66617.tag === 6) {
              $target$$38 = 0;
              typeFrom$$1 = sourceType;
            } else {
              $target$$38 = 1;
            }
          } else {
            $target$$38 = 1;
          }
        }

        switch ($target$$38) {
          case 0:
            {
              if (typeTo$$3 = targetType$$2, needToCast(typeFrom$$1, typeTo$$3)) {
                const typeTo$$4 = targetType$$2;
                return emitCast(typeTo$$4, (0, _Types.L)((matchValue$$8 = [typeFrom$$1, typeTo$$4], (activePatternResult66613 = $007CBuiltin$007C_$007C(matchValue$$8[0]), activePatternResult66613 != null ? activePatternResult66613.tag === 6 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? Helper$$$CoreCall$$39739A92("Long", "toIntNumber", targetType$$2, args$$9) : (activePatternResult66612 = $007CBuiltin$007C_$007C(matchValue$$8[0]), activePatternResult66612 != null ? activePatternResult66612.tag === 6 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66612.tag === 5 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66612 = $007CBuiltin$007C_$007C(matchValue$$8[0]), activePatternResult66612 != null ? activePatternResult66612.tag === 6 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66612.tag === 5 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : activePatternResult66613.tag === 5 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? Helper$$$CoreCall$$39739A92("Long", "toIntNumber", targetType$$2, args$$9) : (activePatternResult66612 = $007CBuiltin$007C_$007C(matchValue$$8[0]), activePatternResult66612 != null ? activePatternResult66612.tag === 6 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66612.tag === 5 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66612 = $007CBuiltin$007C_$007C(matchValue$$8[0]), activePatternResult66612 != null ? activePatternResult66612.tag === 6 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66612.tag === 5 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66612 = $007CBuiltin$007C_$007C(matchValue$$8[0]), activePatternResult66612 != null ? activePatternResult66612.tag === 6 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66612.tag === 5 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66612 = $007CBuiltin$007C_$007C(matchValue$$8[0]), activePatternResult66612 != null ? activePatternResult66612.tag === 6 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66612.tag === 5 ? matchValue$$8[1].tag === 7 ? Helper$$$CoreCall$$39739A92("Long", "toNumber", targetType$$2, args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : matchValue$$8[0].tag === 7 ? matchValue$$8[0].fields[0].tag === 8 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66599 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66599 != null ? activePatternResult66599.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66599.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66600 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66600 != null ? activePatternResult66600.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66600.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66601 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66601 != null ? activePatternResult66601.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66601.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66604 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66604 != null ? activePatternResult66604.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : activePatternResult66604.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : $007CInteger$007CFloat$007C(matchValue$$8[0].fields[0]).tag === 1 ? matchValue$$8[1].tag === 7 ? $007CInteger$007CFloat$007C(matchValue$$8[1].fields[0]).tag === 0 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (activePatternResult66609 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66609 != null ? activePatternResult66609.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66609.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66610 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66610 != null ? activePatternResult66610.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66610.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (activePatternResult66611 = $007CBuiltin$007C_$007C(matchValue$$8[1]), activePatternResult66611 != null ? activePatternResult66611.tag === 5 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : activePatternResult66611.tag === 6 ? round ? Helper$$$CoreCall$$39739A92("Util", "round", targetType$$2, args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)) : (0, _List.head)(args$$9) : (0, _List.head)(args$$9)))), (0, _Types.L)()));
              } else {
                var $target$$39, kind$$4;
                const activePatternResult66616 = $007CBuiltin$007C_$007C(targetType$$2);

                if (activePatternResult66616 != null) {
                  if (activePatternResult66616.tag === 6) {
                    $target$$39 = 0;
                    kind$$4 = activePatternResult66616;
                  } else if (activePatternResult66616.tag === 5) {
                    $target$$39 = 0;
                    kind$$4 = activePatternResult66616;
                  } else {
                    $target$$39 = 1;
                  }
                } else {
                  $target$$39 = 1;
                }

                switch ($target$$39) {
                  case 0:
                    {
                      return emitLong((0, _Util.equals)(kind$$4, new BuiltinType(6, "BclUInt64")), (0, _Types.L)((0, _List.head)(args$$9), (0, _Types.L)()));
                    }

                  case 1:
                    {
                      return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$9), targetType$$2);
                    }
                }
              }
            }

          case 1:
            {
              (0, _Transforms.Log$$$addWarning)(com$$4, ctx$$3.InlinePath, r$$7, "Cannot make conversion at compile time because source type is unknown");
              return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$9), targetType$$2);
            }
        }
      }
  }
}

function arrayCons(com$$5, genArg) {
  var numberKind;
  var $target$$40, numberKind$$1;

  if (genArg.tag === 7) {
    if (numberKind = genArg.fields[0], com$$5.Options.typedArrays) {
      $target$$40 = 0;
      numberKind$$1 = genArg.fields[0];
    } else {
      $target$$40 = 1;
    }
  } else {
    $target$$40 = 1;
  }

  switch ($target$$40) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeIdentExprNonMangled)((0, _Transforms.AST$$$getTypedArrayName)(com$$5, numberKind$$1));
      }

    case 1:
      {
        return (0, _Transforms.AST$$$makeIdentExprNonMangled)("Array");
      }
  }
}

function toList(returnType$$5, expr$$2) {
  return Helper$$$CoreCall$$39739A92("Seq", "toList", returnType$$5, (0, _Types.L)(expr$$2, (0, _Types.L)()));
}

function toArray(com$$6, returnType$$6, expr$$3) {
  const args$$15 = returnType$$6.tag === 11 ? (0, _Types.L)(expr$$3, (0, _Types.L)(arrayCons(com$$6, returnType$$6.fields[0]), (0, _Types.L)())) : returnType$$6.tag === 16 ? returnType$$6.fields[1].tail != null ? returnType$$6.fields[1].tail.tail == null ? (0, _Types.L)(expr$$3, (0, _Types.L)(arrayCons(com$$6, returnType$$6.fields[1].head), (0, _Types.L)())) : (0, _Types.L)(expr$$3, (0, _Types.L)()) : (0, _Types.L)(expr$$3, (0, _Types.L)()) : (0, _Types.L)(expr$$3, (0, _Types.L)());
  return Helper$$$CoreCall$$39739A92("Array", "ofSeq", returnType$$6, args$$15);
}

function listToArray(com$$7, r$$8, t$$19, li) {
  const activePatternResult66634 = $007CListLiteral$007C_$007C(li);

  if (activePatternResult66634 != null) {
    return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", activePatternResult66634[0]), activePatternResult66634[1]));
  } else {
    let args$$16;

    if (t$$19.tag === 11) {
      const genArg$$2 = t$$19.fields[0];
      args$$16 = (0, _Types.L)(li, (0, _Types.L)(arrayCons(com$$7, genArg$$2), (0, _Types.L)()));
    } else {
      args$$16 = (0, _Types.L)(li, (0, _Types.L)());
    }

    return Helper$$$CoreCall$$39739A92("Array", "ofList", t$$19, args$$16, null, null, null, null, r$$8);
  }
}

function stringToCharArray(t$$21, e$$1) {
  return Helper$$$InstanceCall$$9FFCF9C(e$$1, "split", t$$21, (0, _Types.L)((0, _Transforms.AST$$$makeStrConst)(""), (0, _Types.L)()));
}

function enumerator2iterator(e$$2) {
  return Helper$$$CoreCall$$39739A92("Seq", "toIterator", (0, _AST.Expr$$get_Type)(e$$2), (0, _Types.L)(e$$2, (0, _Types.L)()));
}

function toSeq(t$$22, e$$3) {
  if ((0, _AST.Expr$$get_Type)(e$$3).tag === 5) {
    return stringToCharArray(t$$22, e$$3);
  } else {
    return new _AST.Expr(2, "TypeCast", e$$3, t$$22);
  }
}

function iterate(r$$9, ident$$3, body, xs$$5) {
  const f = new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _Types.L)(ident$$3, (0, _Types.L)())), body, null);
  return Helper$$$CoreCall$$39739A92("Seq", "iterate", new _AST.Type(2, "Unit"), (0, _Types.L)(f, (0, _Types.L)(toSeq((0, _AST.Expr$$get_Type)(xs$$5), xs$$5), (0, _Types.L)())), null, null, null, null, r$$9);
}

function $007CListSingleton$007C(x$$24) {
  return (0, _Types.L)(x$$24, (0, _Types.L)());
}

function $007CCustomOp$007C_$007C(com$$8, ctx$$4, opName, argTypes$$10, sourceTypes) {
  const tryFindMember = function tryFindMember(com$$9, ctx$$5, ent$$8, opName$$1, argTypes$$11) {
    return (0, _FSharp2Fable.TypeHelpers$$$tryFindMember)(com$$9, ent$$8, ctx$$5.GenericArgs, opName$$1, false, argTypes$$11);
  };

  return (0, _List.tryPick)(function chooser$$2(_arg1$$10) {
    if (_arg1$$10.tag === 16) {
      const ent$$9 = _arg1$$10.fields[0];
      return tryFindMember(com$$8, ctx$$4, ent$$9, opName, argTypes$$10);
    } else {
      return null;
    }
  }, sourceTypes);
}

function applyOp(com$$10, ctx$$6, r$$10, t$$23, opName$$2, args$$17, argTypes$$12, genArgs$$6) {
  const unOp = function unOp(operator, operand) {
    return new _AST.Expr(8, "Operation", new _AST.OperationKind(3, "UnaryOperation", operator, operand), t$$23, r$$10);
  };

  const binOp = function binOp(op$$1, left$$4, right$$4) {
    return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", op$$1, left$$4, right$$4), t$$23, r$$10);
  };

  const truncateUnsigned = function truncateUnsigned(operation) {
    var $target$$41;

    if (t$$23.tag === 7) {
      if (t$$23.fields[0].tag === 5) {
        $target$$41 = 0;
      } else {
        $target$$41 = 1;
      }
    } else {
      $target$$41 = 1;
    }

    switch ($target$$41) {
      case 0:
        {
          return new _AST.Expr(8, "Operation", new _AST.OperationKind(4, "BinaryOperation", new _AST2.BinaryOperator(10, "BinaryShiftRightZeroFill"), operation, (0, _Transforms.AST$$$makeIntConst)(0)), t$$23, r$$10);
        }

      case 1:
        {
          return operation;
        }
    }
  };

  const logicOp = function logicOp(op$$2, left$$5, right$$5) {
    return new _AST.Expr(8, "Operation", new _AST.OperationKind(5, "LogicalOperation", op$$2, left$$5, right$$5), new _AST.Type(3, "Boolean"), r$$10);
  };

  const nativeOp = function nativeOp(opName$$3, argTypes$$13, args$$18) {
    const matchValue$$10 = [opName$$3, args$$18];
    var $target$$42, left$$6, right$$6, left$$7, right$$7, left$$8, right$$8, left$$9, right$$9, left$$10, right$$10, left$$11, right$$11, left$$12, right$$12, left$$13, right$$13, left$$14, right$$14, left$$15, right$$15, left$$16, right$$16, left$$17, right$$17, operand$$1, operand$$2;

    if (matchValue$$10[0] === "op_Addition") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 0;
            left$$6 = matchValue$$10[1].head;
            right$$6 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_Subtraction") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 1;
            left$$7 = matchValue$$10[1].head;
            right$$7 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_Multiply") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 2;
            left$$8 = matchValue$$10[1].head;
            right$$8 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_Division") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 3;
            left$$9 = matchValue$$10[1].head;
            right$$9 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "DivideByInt") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 3;
            left$$9 = matchValue$$10[1].head;
            right$$9 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_Modulus") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 4;
            left$$10 = matchValue$$10[1].head;
            right$$10 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_LeftShift") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 5;
            left$$11 = matchValue$$10[1].head;
            right$$11 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_RightShift") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 6;
            left$$12 = matchValue$$10[1].head;
            right$$12 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_BitwiseAnd") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 7;
            left$$13 = matchValue$$10[1].head;
            right$$13 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_BitwiseOr") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 8;
            left$$14 = matchValue$$10[1].head;
            right$$14 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_ExclusiveOr") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 9;
            left$$15 = matchValue$$10[1].head;
            right$$15 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_BooleanAnd") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 10;
            left$$16 = matchValue$$10[1].head;
            right$$16 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_BooleanOr") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail != null) {
          if (matchValue$$10[1].tail.tail.tail == null) {
            $target$$42 = 11;
            left$$17 = matchValue$$10[1].head;
            right$$17 = matchValue$$10[1].tail.head;
          } else {
            $target$$42 = 14;
          }
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_LogicalNot") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail == null) {
          $target$$42 = 12;
          operand$$1 = matchValue$$10[1].head;
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else if (matchValue$$10[0] === "op_UnaryNegation") {
      if (matchValue$$10[1].tail != null) {
        if (matchValue$$10[1].tail.tail == null) {
          $target$$42 = 13;
          operand$$2 = matchValue$$10[1].head;
        } else {
          $target$$42 = 14;
        }
      } else {
        $target$$42 = 14;
      }
    } else {
      $target$$42 = 14;
    }

    switch ($target$$42) {
      case 0:
        {
          return binOp(new _AST2.BinaryOperator(12, "BinaryPlus"), left$$6, right$$6);
        }

      case 1:
        {
          return binOp(new _AST2.BinaryOperator(11, "BinaryMinus"), left$$7, right$$7);
        }

      case 2:
        {
          return binOp(new _AST2.BinaryOperator(13, "BinaryMultiply"), left$$8, right$$8);
        }

      case 3:
        {
          var $target$$43;

          if (argTypes$$13.tail != null) {
            if (argTypes$$13.head.tag === 7) {
              if ($007CInteger$007CFloat$007C(argTypes$$13.head.fields[0]).tag === 0) {
                $target$$43 = 0;
              } else {
                $target$$43 = 1;
              }
            } else {
              $target$$43 = 1;
            }
          } else {
            $target$$43 = 1;
          }

          switch ($target$$43) {
            case 0:
              {
                return fastIntFloor(binOp(new _AST2.BinaryOperator(14, "BinaryDivide"), left$$9, right$$9));
              }

            case 1:
              {
                return binOp(new _AST2.BinaryOperator(14, "BinaryDivide"), left$$9, right$$9);
              }
          }
        }

      case 4:
        {
          return binOp(new _AST2.BinaryOperator(15, "BinaryModulus"), left$$10, right$$10);
        }

      case 5:
        {
          return truncateUnsigned(binOp(new _AST2.BinaryOperator(8, "BinaryShiftLeft"), left$$11, right$$11));
        }

      case 6:
        {
          var $target$$44;

          if (argTypes$$13.tail != null) {
            if (argTypes$$13.head.tag === 7) {
              if (argTypes$$13.head.fields[0].tag === 5) {
                $target$$44 = 0;
              } else {
                $target$$44 = 1;
              }
            } else {
              $target$$44 = 1;
            }
          } else {
            $target$$44 = 1;
          }

          switch ($target$$44) {
            case 0:
              {
                return binOp(new _AST2.BinaryOperator(10, "BinaryShiftRightZeroFill"), left$$12, right$$12);
              }

            case 1:
              {
                return binOp(new _AST2.BinaryOperator(9, "BinaryShiftRightSignPropagating"), left$$12, right$$12);
              }
          }
        }

      case 7:
        {
          return truncateUnsigned(binOp(new _AST2.BinaryOperator(19, "BinaryAndBitwise"), left$$13, right$$13));
        }

      case 8:
        {
          return truncateUnsigned(binOp(new _AST2.BinaryOperator(17, "BinaryOrBitwise"), left$$14, right$$14));
        }

      case 9:
        {
          return truncateUnsigned(binOp(new _AST2.BinaryOperator(18, "BinaryXorBitwise"), left$$15, right$$15));
        }

      case 10:
        {
          return logicOp(new _AST2.LogicalOperator(1, "LogicalAnd"), left$$16, right$$16);
        }

      case 11:
        {
          return logicOp(new _AST2.LogicalOperator(0, "LogicalOr"), left$$17, right$$17);
        }

      case 12:
        {
          return truncateUnsigned(unOp(new _AST2.UnaryOperator(3, "UnaryNotBitwise"), operand$$1));
        }

      case 13:
        {
          return unOp(new _AST2.UnaryOperator(0, "UnaryMinus"), operand$$2);
        }

      case 14:
        {
          return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$10, ctx$$6.InlinePath, r$$10, (0, _String.toText)((0, _String.printf)("Operator %s not found in %A"))(opName$$3)(argTypes$$13));
        }
    }
  };

  const argTypes$$14 = Helpers$$$resolveArgTypes(argTypes$$12, genArgs$$6);
  var $target$$45, bt;

  if (argTypes$$14.tail != null) {
    const activePatternResult66678 = $007CBuiltin$007C_$007C(argTypes$$14.head);

    if (activePatternResult66678 != null) {
      if (activePatternResult66678.tag === 5) {
        $target$$45 = 0;
        bt = activePatternResult66678;
      } else if (activePatternResult66678.tag === 6) {
        $target$$45 = 0;
        bt = activePatternResult66678;
      } else if (activePatternResult66678.tag === 7) {
        $target$$45 = 0;
        bt = activePatternResult66678;
      } else if (activePatternResult66678.tag === 2) {
        $target$$45 = 0;
        bt = activePatternResult66678;
      } else if (activePatternResult66678.tag === 3) {
        $target$$45 = 0;
        bt = activePatternResult66678;
      } else {
        $target$$45 = 1;
      }
    } else {
      $target$$45 = 1;
    }
  } else {
    $target$$45 = 1;
  }

  switch ($target$$45) {
    case 0:
      {
        let opName$$4;
        const matchValue$$11 = [bt, opName$$2];
        var $target$$46;

        if (matchValue$$11[0].tag === 6) {
          if (matchValue$$11[1] === "op_RightShift") {
            $target$$46 = 0;
          } else {
            $target$$46 = 1;
          }
        } else {
          $target$$46 = 1;
        }

        switch ($target$$46) {
          case 0:
            {
              opName$$4 = "op_RightShiftUnsigned";
              break;
            }

          case 1:
            {
              opName$$4 = opName$$2;
              break;
            }
        }

        return Helper$$$CoreCall$$39739A92(coreModFor(bt), opName$$4, t$$23, args$$17, argTypes$$14, null, null, null, r$$10);
      }

    case 1:
      {
        var $target$$47;

        if (argTypes$$14.tail != null) {
          const activePatternResult66677 = $007CBuiltin$007C_$007C(argTypes$$14.head);

          if (activePatternResult66677 != null) {
            if (activePatternResult66677.tag === 10) {
              $target$$47 = 0;
            } else {
              $target$$47 = 1;
            }
          } else {
            $target$$47 = 1;
          }
        } else {
          $target$$47 = 1;
        }

        switch ($target$$47) {
          case 0:
            {
              const mangledName = (0, _Prelude.Naming$$$buildNameWithoutSanitationFrom)("FSharpSet", true, opName$$2, "");
              return Helper$$$CoreCall$$39739A92("Set", mangledName, t$$23, args$$17, argTypes$$14, null, null, null, r$$10);
            }

          case 1:
            {
              var $target$$48;

              if (argTypes$$14.tail != null) {
                const activePatternResult66676 = $007CBuiltin$007C_$007C(argTypes$$14.head);

                if (activePatternResult66676 != null) {
                  if (activePatternResult66676.tag === 1) {
                    $target$$48 = 0;
                  } else {
                    $target$$48 = 1;
                  }
                } else {
                  $target$$48 = 1;
                }
              } else {
                $target$$48 = 1;
              }

              switch ($target$$48) {
                case 0:
                  {
                    return nativeOp(opName$$2, argTypes$$14, args$$17);
                  }

                case 1:
                  {
                    const activePatternResult66675 = $007CCustomOp$007C_$007C(com$$10, ctx$$6, opName$$2, argTypes$$14, argTypes$$14);

                    if (activePatternResult66675 != null) {
                      const m$$1 = activePatternResult66675;
                      const genArgs$$7 = (0, _Seq.map)(function mapping$$6(tuple$$1) {
                        return tuple$$1[1];
                      }, genArgs$$6);
                      return (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$10, ctx$$6, r$$10, t$$23, false, genArgs$$7, null, args$$17, m$$1);
                    } else {
                      return nativeOp(opName$$2, argTypes$$14, args$$17);
                    }
                  }
              }
            }
        }
      }
  }
}

function isCompatibleWithJsComparison(_arg1$$11) {
  var $target$$49;
  const activePatternResult66688 = $007CBuiltin$007C_$007C(_arg1$$11);

  if (activePatternResult66688 != null) {
    if (activePatternResult66688.tag === 5) {
      $target$$49 = 0;
    } else if (activePatternResult66688.tag === 6) {
      $target$$49 = 0;
    } else if (activePatternResult66688.tag === 7) {
      $target$$49 = 0;
    } else if (_arg1$$11.tag === 11) {
      $target$$49 = 0;
    } else if (_arg1$$11.tag === 12) {
      $target$$49 = 0;
    } else if (_arg1$$11.tag === 10) {
      $target$$49 = 0;
    } else if (_arg1$$11.tag === 9) {
      $target$$49 = 0;
    } else if (_arg1$$11.tag === 0) {
      $target$$49 = 0;
    } else {
      $target$$49 = 1;
    }
  } else if (_arg1$$11.tag === 11) {
    $target$$49 = 0;
  } else if (_arg1$$11.tag === 12) {
    $target$$49 = 0;
  } else if (_arg1$$11.tag === 10) {
    $target$$49 = 0;
  } else if (_arg1$$11.tag === 9) {
    $target$$49 = 0;
  } else if (_arg1$$11.tag === 0) {
    $target$$49 = 0;
  } else {
    $target$$49 = 1;
  }

  switch ($target$$49) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        var $target$$50;
        const activePatternResult66687 = $007CBuiltin$007C_$007C(_arg1$$11);

        if (activePatternResult66687 != null) {
          if (activePatternResult66687.tag === 0) {
            $target$$50 = 0;
          } else if (activePatternResult66687.tag === 1) {
            $target$$50 = 0;
          } else {
            $target$$50 = 1;
          }
        } else {
          $target$$50 = 1;
        }

        switch ($target$$50) {
          case 0:
            {
              return true;
            }

          case 1:
            {
              var $target$$51;

              switch (_arg1$$11.tag) {
                case 16:
                  $target$$51 = 0;
                  break;

                case 14:
                  $target$$51 = 1;
                  break;

                case 1:
                case 2:
                case 3:
                case 7:
                case 5:
                case 4:
                case 6:
                case 8:
                case 15:
                case 13:
                  $target$$51 = 2;
                  break;

                default:
                  $target$$51 = 3;
              }

              switch ($target$$51) {
                case 0:
                  {
                    return false;
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
                    throw new _Types.MatchFailureException("C:/code/fable/src/dotnet/Fable.Compiler/Transforms/Replacements.fs", 563, 35);
                  }
              }
            }
        }
      }
  }
}

function identityHash(r$$11, arg$$1) {
  var ent$$10;
  const matchValue$$12 = (0, _AST.Expr$$get_Type)(arg$$1);
  var $target$$52;

  if (matchValue$$12.tag === 3) {
    $target$$52 = 0;
  } else if (matchValue$$12.tag === 4) {
    $target$$52 = 0;
  } else if (matchValue$$12.tag === 5) {
    $target$$52 = 0;
  } else if (matchValue$$12.tag === 7) {
    $target$$52 = 0;
  } else if (matchValue$$12.tag === 8) {
    $target$$52 = 0;
  } else {
    const activePatternResult66690 = $007CBuiltin$007C_$007C(matchValue$$12);

    if (activePatternResult66690 != null) {
      if (activePatternResult66690.tag === 5) {
        $target$$52 = 0;
      } else if (activePatternResult66690.tag === 6) {
        $target$$52 = 0;
      } else if (activePatternResult66690.tag === 7) {
        $target$$52 = 0;
      } else if (activePatternResult66690.tag === 2) {
        $target$$52 = 0;
      } else if (activePatternResult66690.tag === 3) {
        $target$$52 = 0;
      } else if (activePatternResult66690.tag === 0) {
        $target$$52 = 0;
      } else if (activePatternResult66690.tag === 1) {
        $target$$52 = 0;
      } else {
        $target$$52 = 1;
      }
    } else {
      $target$$52 = 1;
    }
  }

  switch ($target$$52) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Util", "structuralHash", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(arg$$1, (0, _Types.L)()), null, null, null, null, r$$11);
      }

    case 1:
      {
        var $target$$53, ent$$11;

        if (matchValue$$12.tag === 16) {
          if (ent$$10 = matchValue$$12.fields[0], (0, _Symbols.FSharpEntity$$get_IsValueType)(ent$$10)) {
            $target$$53 = 0;
            ent$$11 = matchValue$$12.fields[0];
          } else {
            $target$$53 = 1;
          }
        } else {
          $target$$53 = 1;
        }

        switch ($target$$53) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("Util", "structuralHash", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(arg$$1, (0, _Types.L)()), null, null, null, null, r$$11);
            }

          case 1:
            {
              return Helper$$$CoreCall$$39739A92("Util", "identityHash", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(arg$$1, (0, _Types.L)()), null, null, null, null, r$$11);
            }
        }
      }
  }
}

function structuralHash(r$$12, arg$$2) {
  return Helper$$$CoreCall$$39739A92("Util", "structuralHash", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(arg$$2, (0, _Types.L)()), null, null, null, null, r$$12);
}

function makeFunctionsObject(namesAndFunctions) {
  const members = (0, _List.map)(function mapping$$7(tupledArg$$3) {
    return new _AST.ObjectMember(0, "ObjectMember", (0, _Transforms.AST$$$makeStrConst)(tupledArg$$3[0]), tupledArg$$3[1], new _AST.ObjectMemberKind(0, "ObjectValue"));
  }, namesAndFunctions);
  return new _AST.Expr(6, "ObjectExpr", members, new _AST.Type(1, "Any"), null);
}

function equals(com$$11, r$$13, equal, left$$18, right$$18) {
  const is = function is(equal$$1, expr$$5) {
    if (equal$$1) {
      return expr$$5;
    } else {
      return (0, _Transforms.AST$$$makeUnOp)(null, new _AST.Type(3, "Boolean"), expr$$5, new _AST2.UnaryOperator(2, "UnaryNot"));
    }
  };

  const matchValue$$13 = (0, _AST.Expr$$get_Type)(left$$18);
  var $target$$54;
  const activePatternResult66702 = $007CBuiltin$007C_$007C(matchValue$$13);

  if (activePatternResult66702 != null) {
    if (activePatternResult66702.tag === 0) {
      $target$$54 = 0;
    } else if (activePatternResult66702.tag === 1) {
      $target$$54 = 0;
    } else if (matchValue$$13.tag === 3) {
      $target$$54 = 0;
    } else if (matchValue$$13.tag === 4) {
      $target$$54 = 0;
    } else if (matchValue$$13.tag === 5) {
      $target$$54 = 0;
    } else if (matchValue$$13.tag === 7) {
      $target$$54 = 0;
    } else if (matchValue$$13.tag === 8) {
      $target$$54 = 0;
    } else {
      $target$$54 = 1;
    }
  } else if (matchValue$$13.tag === 3) {
    $target$$54 = 0;
  } else if (matchValue$$13.tag === 4) {
    $target$$54 = 0;
  } else if (matchValue$$13.tag === 5) {
    $target$$54 = 0;
  } else if (matchValue$$13.tag === 7) {
    $target$$54 = 0;
  } else if (matchValue$$13.tag === 8) {
    $target$$54 = 0;
  } else {
    $target$$54 = 1;
  }

  switch ($target$$54) {
    case 0:
      {
        const op$$3 = equal ? new _AST2.BinaryOperator(2, "BinaryEqualStrict") : new _AST2.BinaryOperator(3, "BinaryUnequalStrict");
        return (0, _Transforms.AST$$$makeBinOp)(r$$13, new _AST.Type(3, "Boolean"), left$$18, right$$18, op$$3);
      }

    case 1:
      {
        var $target$$55;
        const activePatternResult66701 = $007CBuiltin$007C_$007C(matchValue$$13);

        if (activePatternResult66701 != null) {
          if (activePatternResult66701.tag === 2) {
            $target$$55 = 0;
          } else if (activePatternResult66701.tag === 3) {
            $target$$55 = 0;
          } else {
            $target$$55 = 1;
          }
        } else {
          $target$$55 = 1;
        }

        switch ($target$$55) {
          case 0:
            {
              return is(equal, Helper$$$CoreCall$$39739A92("Date", "equals", new _AST.Type(3, "Boolean"), (0, _Types.L)(left$$18, (0, _Types.L)(right$$18, (0, _Types.L)())), null, null, null, null, r$$13));
            }

          case 1:
            {
              var $target$$56;
              const activePatternResult66700 = $007CBuiltin$007C_$007C(matchValue$$13);

              if (activePatternResult66700 != null) {
                if (activePatternResult66700.tag === 10) {
                  $target$$56 = 0;
                } else if (activePatternResult66700.tag === 11) {
                  $target$$56 = 0;
                } else {
                  $target$$56 = 1;
                }
              } else {
                $target$$56 = 1;
              }

              switch ($target$$56) {
                case 0:
                  {
                    return is(equal, Helper$$$InstanceCall$$9FFCF9C(left$$18, "Equals", new _AST.Type(3, "Boolean"), (0, _Types.L)(right$$18, (0, _Types.L)())));
                  }

                case 1:
                  {
                    var $target$$57, bt$$1;
                    const activePatternResult66699 = $007CBuiltin$007C_$007C(matchValue$$13);

                    if (activePatternResult66699 != null) {
                      if (activePatternResult66699.tag === 5) {
                        $target$$57 = 0;
                        bt$$1 = activePatternResult66699;
                      } else if (activePatternResult66699.tag === 6) {
                        $target$$57 = 0;
                        bt$$1 = activePatternResult66699;
                      } else if (activePatternResult66699.tag === 7) {
                        $target$$57 = 0;
                        bt$$1 = activePatternResult66699;
                      } else {
                        $target$$57 = 1;
                      }
                    } else {
                      $target$$57 = 1;
                    }

                    switch ($target$$57) {
                      case 0:
                        {
                          return is(equal, Helper$$$CoreCall$$39739A92(coreModFor(bt$$1), "equals", new _AST.Type(3, "Boolean"), (0, _Types.L)(left$$18, (0, _Types.L)(right$$18, (0, _Types.L)())), null, null, null, null, r$$13));
                        }

                      case 1:
                        {
                          switch (matchValue$$13.tag) {
                            case 11:
                              {
                                const t$$24 = matchValue$$13.fields[0];
                                const f$$1 = makeComparerFunction(com$$11, t$$24);
                                return is(equal, Helper$$$CoreCall$$39739A92("Array", "equalsWith", new _AST.Type(3, "Boolean"), (0, _Types.L)(f$$1, (0, _Types.L)(left$$18, (0, _Types.L)(right$$18, (0, _Types.L)()))), null, null, null, null, r$$13));
                              }

                            case 12:
                              {
                                return is(equal, Helper$$$CoreCall$$39739A92("Util", "equals", new _AST.Type(3, "Boolean"), (0, _Types.L)(left$$18, (0, _Types.L)(right$$18, (0, _Types.L)())), null, null, null, null, r$$13));
                              }

                            case 0:
                              {
                                return is(equal, Helper$$$CoreCall$$39739A92("Reflection", "equals", new _AST.Type(3, "Boolean"), (0, _Types.L)(left$$18, (0, _Types.L)(right$$18, (0, _Types.L)())), null, null, null, null, r$$13));
                              }

                            case 10:
                              {
                                return is(equal, Helper$$$CoreCall$$39739A92("Util", "equalArrays", new _AST.Type(3, "Boolean"), (0, _Types.L)(left$$18, (0, _Types.L)(right$$18, (0, _Types.L)())), null, null, null, null, r$$13));
                              }

                            default:
                              {
                                return is(equal, Helper$$$CoreCall$$39739A92("Util", "equals", new _AST.Type(3, "Boolean"), (0, _Types.L)(left$$18, (0, _Types.L)(right$$18, (0, _Types.L)())), null, null, null, null, r$$13));
                              }
                          }
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

function compare(com$$12, r$$14, left$$19, right$$19) {
  var ent$$14, ent$$12;
  const matchValue$$14 = (0, _AST.Expr$$get_Type)(left$$19);
  var $target$$58;
  const activePatternResult66710 = $007CBuiltin$007C_$007C(matchValue$$14);

  if (activePatternResult66710 != null) {
    if (activePatternResult66710.tag === 0) {
      $target$$58 = 0;
    } else if (activePatternResult66710.tag === 1) {
      $target$$58 = 0;
    } else if (matchValue$$14.tag === 3) {
      $target$$58 = 0;
    } else if (matchValue$$14.tag === 4) {
      $target$$58 = 0;
    } else if (matchValue$$14.tag === 5) {
      $target$$58 = 0;
    } else if (matchValue$$14.tag === 7) {
      $target$$58 = 0;
    } else if (matchValue$$14.tag === 8) {
      $target$$58 = 0;
    } else {
      $target$$58 = 1;
    }
  } else if (matchValue$$14.tag === 3) {
    $target$$58 = 0;
  } else if (matchValue$$14.tag === 4) {
    $target$$58 = 0;
  } else if (matchValue$$14.tag === 5) {
    $target$$58 = 0;
  } else if (matchValue$$14.tag === 7) {
    $target$$58 = 0;
  } else if (matchValue$$14.tag === 8) {
    $target$$58 = 0;
  } else {
    $target$$58 = 1;
  }

  switch ($target$$58) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Util", "comparePrimitives", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)())), null, null, null, null, r$$14);
      }

    case 1:
      {
        var $target$$59;
        const activePatternResult66709 = $007CBuiltin$007C_$007C(matchValue$$14);

        if (activePatternResult66709 != null) {
          if (activePatternResult66709.tag === 2) {
            $target$$59 = 0;
          } else if (activePatternResult66709.tag === 3) {
            $target$$59 = 0;
          } else {
            $target$$59 = 1;
          }
        } else {
          $target$$59 = 1;
        }

        switch ($target$$59) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("Date", "compare", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)())), null, null, null, null, r$$14);
            }

          case 1:
            {
              var $target$$60, bt$$2;
              const activePatternResult66708 = $007CBuiltin$007C_$007C(matchValue$$14);

              if (activePatternResult66708 != null) {
                if (activePatternResult66708.tag === 5) {
                  $target$$60 = 0;
                  bt$$2 = activePatternResult66708;
                } else if (activePatternResult66708.tag === 6) {
                  $target$$60 = 0;
                  bt$$2 = activePatternResult66708;
                } else if (activePatternResult66708.tag === 7) {
                  $target$$60 = 0;
                  bt$$2 = activePatternResult66708;
                } else {
                  $target$$60 = 1;
                }
              } else {
                $target$$60 = 1;
              }

              switch ($target$$60) {
                case 0:
                  {
                    return Helper$$$CoreCall$$39739A92(coreModFor(bt$$2), "compare", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)())), null, null, null, null, r$$14);
                  }

                case 1:
                  {
                    var $target$$61, t$$25, ent$$13;

                    if (matchValue$$14.tag === 11) {
                      $target$$61 = 0;
                      t$$25 = matchValue$$14.fields[0];
                    } else if (matchValue$$14.tag === 12) {
                      $target$$61 = 1;
                    } else if (matchValue$$14.tag === 0) {
                      $target$$61 = 2;
                    } else if (matchValue$$14.tag === 10) {
                      $target$$61 = 3;
                    } else if (matchValue$$14.tag === 16) {
                      if (ent$$12 = matchValue$$14.fields[0], Helpers$$$hasBaseImplementingBasicMethods(ent$$12)) {
                        $target$$61 = 4;
                        ent$$13 = matchValue$$14.fields[0];
                      } else {
                        $target$$61 = 5;
                      }
                    } else {
                      $target$$61 = 5;
                    }

                    switch ($target$$61) {
                      case 0:
                        {
                          const f$$2 = makeComparerFunction(com$$12, t$$25);
                          return Helper$$$CoreCall$$39739A92("Array", "compareWith", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(f$$2, (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)()))), null, null, null, null, r$$14);
                        }

                      case 1:
                        {
                          return Helper$$$CoreCall$$39739A92("Util", "compare", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)())), null, null, null, null, r$$14);
                        }

                      case 2:
                        {
                          return Helper$$$CoreCall$$39739A92("Reflection", "compare", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)())), null, null, null, null, r$$14);
                        }

                      case 3:
                        {
                          return Helper$$$CoreCall$$39739A92("Util", "compareArrays", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)())), null, null, null, null, r$$14);
                        }

                      case 4:
                        {
                          return Helper$$$InstanceCall$$9FFCF9C(left$$19, "CompareTo", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(right$$19, (0, _Types.L)()), null, r$$14);
                        }

                      case 5:
                        {
                          var $target$$62, ent$$15;

                          if (matchValue$$14.tag === 16) {
                            if (ent$$14 = matchValue$$14.fields[0], (0, _FSharp2Fable.Util$$$hasInterface)("System.IComparable", ent$$14)) {
                              $target$$62 = 0;
                              ent$$15 = matchValue$$14.fields[0];
                            } else {
                              $target$$62 = 1;
                            }
                          } else {
                            $target$$62 = 1;
                          }

                          switch ($target$$62) {
                            case 0:
                              {
                                return Helper$$$InstanceCall$$9FFCF9C(left$$19, "CompareTo", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(right$$19, (0, _Types.L)()), null, r$$14);
                              }

                            case 1:
                              {
                                return Helper$$$CoreCall$$39739A92("Util", "compare", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(left$$19, (0, _Types.L)(right$$19, (0, _Types.L)())), null, null, null, null, r$$14);
                              }
                          }
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

function compareIf(com$$13, r$$15, left$$20, right$$20, op$$4) {
  const matchValue$$15 = (0, _AST.Expr$$get_Type)(left$$20);
  var $target$$63;
  const activePatternResult66715 = $007CBuiltin$007C_$007C(matchValue$$15);

  if (activePatternResult66715 != null) {
    if (activePatternResult66715.tag === 0) {
      $target$$63 = 0;
    } else if (activePatternResult66715.tag === 1) {
      $target$$63 = 0;
    } else if (matchValue$$15.tag === 3) {
      $target$$63 = 0;
    } else if (matchValue$$15.tag === 4) {
      $target$$63 = 0;
    } else if (matchValue$$15.tag === 5) {
      $target$$63 = 0;
    } else if (matchValue$$15.tag === 7) {
      $target$$63 = 0;
    } else if (matchValue$$15.tag === 8) {
      $target$$63 = 0;
    } else {
      $target$$63 = 1;
    }
  } else if (matchValue$$15.tag === 3) {
    $target$$63 = 0;
  } else if (matchValue$$15.tag === 4) {
    $target$$63 = 0;
  } else if (matchValue$$15.tag === 5) {
    $target$$63 = 0;
  } else if (matchValue$$15.tag === 7) {
    $target$$63 = 0;
  } else if (matchValue$$15.tag === 8) {
    $target$$63 = 0;
  } else {
    $target$$63 = 1;
  }

  switch ($target$$63) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeEqOp)(r$$15, left$$20, right$$20, op$$4);
      }

    case 1:
      {
        const comparison = compare(com$$13, r$$15, left$$20, right$$20);
        return (0, _Transforms.AST$$$makeEqOp)(r$$15, comparison, (0, _Transforms.AST$$$makeIntConst)(0), op$$4);
      }
  }
}

function makeComparerFunction(com$$14, typArg) {
  const x$$25 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$14, typArg, "x");
  const y = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$14, typArg, "y");
  const body$$1 = compare(com$$14, null, new _AST.Expr(1, "IdentExpr", x$$25), new _AST.Expr(1, "IdentExpr", y));
  return new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _Types.L)(x$$25, (0, _Types.L)(y, (0, _Types.L)()))), body$$1, null);
}

function makeComparer(com$$15, typArg$$1) {
  const fn$$1 = makeComparerFunction(com$$15, typArg$$1);
  return makeFunctionsObject((0, _Types.L)(["Compare", fn$$1], (0, _Types.L)()));
}

function makeEqualityComparer(com$$16, typArg$$2) {
  const x$$26 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$16, typArg$$2, "x");
  const y$$1 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$16, typArg$$2, "y");
  const body$$2 = equals(com$$16, null, true, new _AST.Expr(1, "IdentExpr", x$$26), new _AST.Expr(1, "IdentExpr", y$$1));
  const f$$3 = new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _Types.L)(x$$26, (0, _Types.L)(y$$1, (0, _Types.L)()))), body$$2, null);
  return new _AST.Expr(6, "ObjectExpr", (0, _Types.L)(new _AST.ObjectMember(0, "ObjectMember", (0, _Transforms.AST$$$makeStrConst)("Equals"), f$$3, new _AST.ObjectMemberKind(0, "ObjectValue")), (0, _Types.L)(new _AST.ObjectMember(0, "ObjectMember", (0, _Transforms.AST$$$makeStrConst)("GetHashCode"), (0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "structuralHash", "Util"), new _AST.ObjectMemberKind(0, "ObjectValue")), (0, _Types.L)())), new _AST.Type(1, "Any"), null);
}

function makeSet(com$$17, r$$16, t$$26, methName, args$$19, genArg$$3) {
  const args$$20 = (0, _List.append)(args$$19, (0, _Types.L)(makeComparer(com$$17, genArg$$3), (0, _Types.L)()));
  return Helper$$$CoreCall$$39739A92("Set", (0, _Prelude.Naming$$$lowerFirst)(methName), t$$26, args$$20, null, null, null, null, r$$16);
}

function makeMap(com$$18, r$$17, t$$27, methName$$1, args$$21, genArg$$4) {
  const args$$22 = (0, _List.append)(args$$21, (0, _Types.L)(makeComparer(com$$18, genArg$$4), (0, _Types.L)()));
  return Helper$$$CoreCall$$39739A92("Map", (0, _Prelude.Naming$$$lowerFirst)(methName$$1), t$$27, args$$22, null, null, null, null, r$$17);
}

function makeDictionaryWithComparer(r$$18, t$$28, sourceSeq, comparer) {
  return Helper$$$CoreCall$$39739A92("Map", "createMutable", t$$28, (0, _Types.L)(sourceSeq, (0, _Types.L)(comparer, (0, _Types.L)())), null, null, null, null, r$$18);
}

function makeDictionary(com$$19, r$$19, t$$29, sourceSeq$$1) {
  var key;
  var $target$$64, key$$1;

  if (t$$29.tag === 16) {
    if (t$$29.fields[1].tail != null) {
      if (t$$29.fields[1].tail.tail != null) {
        if (t$$29.fields[1].tail.tail.tail == null) {
          if (key = t$$29.fields[1].head, !isCompatibleWithJsComparison(key)) {
            $target$$64 = 0;
            key$$1 = t$$29.fields[1].head;
          } else {
            $target$$64 = 1;
          }
        } else {
          $target$$64 = 1;
        }
      } else {
        $target$$64 = 1;
      }
    } else {
      $target$$64 = 1;
    }
  } else {
    $target$$64 = 1;
  }

  switch ($target$$64) {
    case 0:
      {
        return makeDictionaryWithComparer(r$$19, t$$29, sourceSeq$$1, makeComparer(com$$19, key$$1));
      }

    case 1:
      {
        return Helper$$$GlobalCall$$Z6A200D61("Map", t$$29, (0, _Types.L)(sourceSeq$$1, (0, _Types.L)()), null, null, true, r$$19);
      }
  }
}

function makeHashSetWithComparer(r$$20, t$$30, sourceSeq$$2, comparer$$2) {
  return Helper$$$CoreCall$$39739A92("Set", "createMutable", t$$30, (0, _Types.L)(sourceSeq$$2, (0, _Types.L)(comparer$$2, (0, _Types.L)())), null, null, null, null, r$$20);
}

function makeHashSet(com$$20, r$$21, t$$31, sourceSeq$$3) {
  var key$$2;
  var $target$$65, key$$3;

  if (t$$31.tag === 16) {
    if (t$$31.fields[1].tail != null) {
      if (t$$31.fields[1].tail.tail == null) {
        if (key$$2 = t$$31.fields[1].head, !isCompatibleWithJsComparison(key$$2)) {
          $target$$65 = 0;
          key$$3 = t$$31.fields[1].head;
        } else {
          $target$$65 = 1;
        }
      } else {
        $target$$65 = 1;
      }
    } else {
      $target$$65 = 1;
    }
  } else {
    $target$$65 = 1;
  }

  switch ($target$$65) {
    case 0:
      {
        return makeHashSetWithComparer(r$$21, t$$31, sourceSeq$$3, makeComparer(com$$20, key$$3));
      }

    case 1:
      {
        return Helper$$$GlobalCall$$Z6A200D61("Set", t$$31, (0, _Types.L)(sourceSeq$$3, (0, _Types.L)()), null, null, true, r$$21);
      }
  }
}

function getZero(com$$21, ctx$$7, t$$32) {
  var $target$$66;

  if (t$$32.tag === 4) {
    $target$$66 = 0;
  } else if (t$$32.tag === 5) {
    $target$$66 = 0;
  } else {
    const activePatternResult66765 = $007CBuiltin$007C_$007C(t$$32);

    if (activePatternResult66765 != null) {
      if (activePatternResult66765.tag === 1) {
        $target$$66 = 1;
      } else {
        $target$$66 = 2;
      }
    } else {
      $target$$66 = 2;
    }
  }

  switch ($target$$66) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeStrConst)("");
      }

    case 1:
      {
        return (0, _Transforms.AST$$$makeIntConst)(0);
      }

    case 2:
      {
        var $target$$67, t$$33;
        const activePatternResult66764 = $007CBuiltin$007C_$007C(t$$32);

        if (activePatternResult66764 != null) {
          if (activePatternResult66764.tag === 2) {
            $target$$67 = 0;
            t$$33 = t$$32;
          } else {
            $target$$67 = 1;
          }
        } else {
          $target$$67 = 1;
        }

        switch ($target$$67) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("Date", "minValue", t$$33, (0, _Types.L)());
            }

          case 1:
            {
              var $target$$68, t$$34;
              const activePatternResult66763 = $007CBuiltin$007C_$007C(t$$32);

              if (activePatternResult66763 != null) {
                if (activePatternResult66763.tag === 3) {
                  $target$$68 = 0;
                  t$$34 = t$$32;
                } else {
                  $target$$68 = 1;
                }
              } else {
                $target$$68 = 1;
              }

              switch ($target$$68) {
                case 0:
                  {
                    return Helper$$$CoreCall$$39739A92("DateOffset", "minValue", t$$34, (0, _Types.L)());
                  }

                case 1:
                  {
                    var $target$$69, genArg$$5, t$$35;
                    const activePatternResult66762 = $007CBuiltin$007C_$007C(t$$32);

                    if (activePatternResult66762 != null) {
                      if (activePatternResult66762.tag === 10) {
                        $target$$69 = 0;
                        genArg$$5 = activePatternResult66762.fields[0];
                        t$$35 = t$$32;
                      } else {
                        $target$$69 = 1;
                      }
                    } else {
                      $target$$69 = 1;
                    }

                    switch ($target$$69) {
                      case 0:
                        {
                          return makeSet(com$$21, null, t$$35, "Empty", (0, _Types.L)(), genArg$$5);
                        }

                      case 1:
                        {
                          var $target$$70, t$$36;
                          const activePatternResult66761 = $007CBuiltin$007C_$007C(t$$32);

                          if (activePatternResult66761 != null) {
                            if (activePatternResult66761.tag === 5) {
                              $target$$70 = 0;
                              t$$36 = t$$32;
                            } else if (activePatternResult66761.tag === 6) {
                              $target$$70 = 0;
                              t$$36 = t$$32;
                            } else {
                              $target$$70 = 1;
                            }
                          } else {
                            $target$$70 = 1;
                          }

                          switch ($target$$70) {
                            case 0:
                              {
                                return Helper$$$CoreCall$$39739A92("Long", "fromInt", t$$36, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)()));
                              }

                            case 1:
                              {
                                var $target$$71, t$$37;
                                const activePatternResult66760 = $007CBuiltin$007C_$007C(t$$32);

                                if (activePatternResult66760 != null) {
                                  if (activePatternResult66760.tag === 7) {
                                    $target$$71 = 0;
                                    t$$37 = t$$32;
                                  } else {
                                    $target$$71 = 1;
                                  }
                                } else {
                                  $target$$71 = 1;
                                }

                                switch ($target$$71) {
                                  case 0:
                                    {
                                      return Helper$$$CoreCall$$39739A92("BigInt", "fromInt32", t$$37, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)()));
                                    }

                                  case 1:
                                    {
                                      const activePatternResult66759 = $007CCustomOp$007C_$007C(com$$21, ctx$$7, "get_Zero", (0, _Types.L)(), $007CListSingleton$007C(t$$32));

                                      if (activePatternResult66759 != null) {
                                        const m$$2 = activePatternResult66759;
                                        return (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$21, ctx$$7, null, t$$32, false, [], null, (0, _Types.L)(), m$$2);
                                      } else {
                                        return (0, _Transforms.AST$$$makeIntConst)(0);
                                      }
                                    }
                                }
                              }
                          }
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

function getOne(com$$22, ctx$$8, t$$38) {
  var $target$$72, t$$39;
  const activePatternResult66774 = $007CBuiltin$007C_$007C(t$$38);

  if (activePatternResult66774 != null) {
    if (activePatternResult66774.tag === 5) {
      $target$$72 = 0;
      t$$39 = t$$38;
    } else if (activePatternResult66774.tag === 6) {
      $target$$72 = 0;
      t$$39 = t$$38;
    } else {
      $target$$72 = 1;
    }
  } else {
    $target$$72 = 1;
  }

  switch ($target$$72) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Long", "fromInt", t$$39, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(1), (0, _Types.L)()));
      }

    case 1:
      {
        var $target$$73, t$$40;
        const activePatternResult66773 = $007CBuiltin$007C_$007C(t$$38);

        if (activePatternResult66773 != null) {
          if (activePatternResult66773.tag === 7) {
            $target$$73 = 0;
            t$$40 = t$$38;
          } else {
            $target$$73 = 1;
          }
        } else {
          $target$$73 = 1;
        }

        switch ($target$$73) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("BigInt", "fromInt32", t$$40, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(1), (0, _Types.L)()));
            }

          case 1:
            {
              const activePatternResult66772 = $007CCustomOp$007C_$007C(com$$22, ctx$$8, "get_One", (0, _Types.L)(), $007CListSingleton$007C(t$$38));

              if (activePatternResult66772 != null) {
                const m$$3 = activePatternResult66772;
                return (0, _FSharp2Fable.Util$$$makeCallFrom)(com$$22, ctx$$8, null, t$$38, false, [], null, (0, _Types.L)(), m$$3);
              } else {
                return (0, _Transforms.AST$$$makeIntConst)(1);
              }
            }
        }
      }
  }
}

function makeAddFunction(com$$23, ctx$$9, t$$41) {
  const x$$27 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$23, t$$41, "x");
  const y$$2 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$23, t$$41, "y");
  const body$$3 = applyOp(com$$23, ctx$$9, null, t$$41, "op_Addition", (0, _Types.L)(new _AST.Expr(1, "IdentExpr", x$$27), (0, _Types.L)(new _AST.Expr(1, "IdentExpr", y$$2), (0, _Types.L)())), (0, _Types.L)(t$$41, (0, _Types.L)(t$$41, (0, _Types.L)())), (0, _Types.L)());
  return new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _Types.L)(x$$27, (0, _Types.L)(y$$2, (0, _Types.L)()))), body$$3, null);
}

function makeGenericAdder(com$$24, ctx$$10, t$$42) {
  return makeFunctionsObject((0, _Types.L)(["GetZero", (0, _Transforms.AST$$$makeDelegate)((0, _Types.L)(), getZero(com$$24, ctx$$10, t$$42))], (0, _Types.L)(["Add", makeAddFunction(com$$24, ctx$$10, t$$42)], (0, _Types.L)())));
}

function makeGenericAverager(com$$25, ctx$$11, t$$43) {
  let divideFn;
  const x$$28 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$25, t$$43, "x");
  const i$$1 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$25, new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), "i");
  const body$$5 = applyOp(com$$25, ctx$$11, null, t$$43, "DivideByInt", (0, _Types.L)(new _AST.Expr(1, "IdentExpr", x$$28), (0, _Types.L)(new _AST.Expr(1, "IdentExpr", i$$1), (0, _Types.L)())), (0, _Types.L)(t$$43, (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)())), (0, _Types.L)());
  divideFn = new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _Types.L)(x$$28, (0, _Types.L)(i$$1, (0, _Types.L)()))), body$$5, null);
  return makeFunctionsObject((0, _Types.L)(["GetZero", (0, _Transforms.AST$$$makeDelegate)((0, _Types.L)(), getZero(com$$25, ctx$$11, t$$43))], (0, _Types.L)(["Add", makeAddFunction(com$$25, ctx$$11, t$$43)], (0, _Types.L)(["DivideByInt", divideFn], (0, _Types.L)()))));
}

function makePojoFromLambda(arg$$3) {
  const flattenSequential = function flattenSequential(_arg1$$12) {
    if (_arg1$$12.tag === 14) {
      const statements = _arg1$$12.fields[0];
      return (0, _List.collect)(flattenSequential, statements);
    } else {
      const e$$4 = _arg1$$12;
      return (0, _Types.L)(e$$4, (0, _Types.L)());
    }
  };

  return (0, _Option.defaultArgWith)((0, _Option.defaultArg)(arg$$3.tag === 5 ? arg$$3.fields[0].tag === 0 ? (0, _List.foldBack)(function folder(statement, acc$$1) {
    const matchValue$$16 = [acc$$1, statement];
    var $target$$74, acc$$2, fiName, value$$3, acc$$3, prop$$1, value$$4;

    if (matchValue$$16[0] != null) {
      if (matchValue$$16[1].tag === 16) {
        if (matchValue$$16[1].fields[1].tag === 2) {
          $target$$74 = 0;
          acc$$2 = matchValue$$16[0];
          fiName = matchValue$$16[1].fields[1].fields[0];
          value$$3 = matchValue$$16[1].fields[2];
        } else if (matchValue$$16[1].fields[1].tag === 1) {
          $target$$74 = 1;
          acc$$3 = matchValue$$16[0];
          prop$$1 = matchValue$$16[1].fields[1].fields[0];
          value$$4 = matchValue$$16[1].fields[2];
        } else {
          $target$$74 = 2;
        }
      } else {
        $target$$74 = 2;
      }
    } else {
      $target$$74 = 2;
    }

    switch ($target$$74) {
      case 0:
        {
          return (0, _Types.L)(new _AST.ObjectMember(0, "ObjectMember", (0, _Transforms.AST$$$makeStrConst)(fiName), value$$3, new _AST.ObjectMemberKind(0, "ObjectValue")), acc$$2);
        }

      case 1:
        {
          return (0, _Types.L)(new _AST.ObjectMember(0, "ObjectMember", prop$$1, value$$4, new _AST.ObjectMemberKind(0, "ObjectValue")), acc$$3);
        }

      case 2:
        {
          return null;
        }
    }
  }, flattenSequential(arg$$3.fields[1]), (0, _Types.L)()) : null : null, null, function mapping$$8(members$$1) {
    return new _AST.Expr(6, "ObjectExpr", members$$1, new _AST.Type(1, "Any"), null);
  }), function defThunk$$1() {
    return Helper$$$CoreCall$$39739A92("Util", "jsOptions", new _AST.Type(1, "Any"), (0, _Types.L)(arg$$3, (0, _Types.L)()));
  });
}

function changeCase(caseRule, name$$10) {
  var $target$$75;

  switch (caseRule) {
    case 0:
      $target$$75 = 1;
      break;

    case 1:
      $target$$75 = 0;
      break;

    default:
      $target$$75 = 1;
  }

  switch ($target$$75) {
    case 0:
      {
        return (0, _Prelude.Naming$$$lowerFirst)(name$$10);
      }

    case 1:
      {
        return name$$10;
      }
  }
}

function makePojo(com$$26, r$$22, caseRule$$1, keyValueList) {
  var activePatternResult66807, activePatternResult66808, activePatternResult66809, activePatternResult66810;

  const makeObjMember = function makeObjMember(caseRule$$2, name$$11, values$$2) {
    const value$$6 = values$$2.tail != null ? values$$2.tail.tail == null ? values$$2.head : new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", values$$2), new _AST.Type(1, "Any"))) : (0, _Transforms.AST$$$makeBoolConst)(true);
    return new _AST.ObjectMember(0, "ObjectMember", (0, _Transforms.AST$$$makeStrConst)(changeCase(caseRule$$2, name$$11)), value$$6, new _AST.ObjectMemberKind(0, "ObjectValue"));
  };

  var $target$$76, rule;

  if (caseRule$$1.tag === 0) {
    if (caseRule$$1.fields[0].tag === 6) {
      $target$$76 = 0;
      rule = caseRule$$1.fields[0].fields[0];
    } else if (caseRule$$1.fields[0].tag === 8) {
      if (caseRule$$1.fields[0].fields[0].tag === 0) {
        if (caseRule$$1.fields[0].fields[0].fields[0].tag === 0) {
          if (caseRule$$1.fields[0].fields[0].fields[0].fields[0].tag === 6) {
            $target$$76 = 0;
            rule = caseRule$$1.fields[0].fields[0].fields[0].fields[0].fields[0];
          } else {
            $target$$76 = 1;
          }
        } else {
          $target$$76 = 1;
        }
      } else {
        $target$$76 = 1;
      }
    } else {
      $target$$76 = 1;
    }
  } else {
    $target$$76 = 1;
  }

  switch ($target$$76) {
    case 0:
      {
        const caseRule$$3 = ~~rule | 0;
        return (0, _Option.defaultArgWith)((0, _Option.defaultArg)((activePatternResult66807 = (0, _Transforms.AST$$$$007CMaybeCasted$007C)(keyValueList), activePatternResult66807.tag === 0 ? activePatternResult66807.fields[0].tag === 10 ? activePatternResult66807.fields[0].fields[0].tag === 0 ? (0, _List.foldBack)(function folder$$1(m$$4, acc$$4) {
          const matchValue$$17 = [acc$$4, m$$4];
          var $target$$77, acc$$5, uci, values$$4, acc$$6, name$$14, values$$6;

          if (matchValue$$17[0] != null) {
            const activePatternResult66803 = (0, _Transforms.AST$$$$007CMaybeCasted$007C)(matchValue$$17[1]);

            if (activePatternResult66803.tag === 0) {
              if (activePatternResult66803.fields[0].tag === 14) {
                $target$$77 = 0;
                acc$$5 = matchValue$$17[0];
                uci = activePatternResult66803.fields[0].fields[1];
                values$$4 = activePatternResult66803.fields[0].fields[0];
              } else if (matchValue$$17[1].tag === 0) {
                if (matchValue$$17[1].fields[0].tag === 12) {
                  if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                    if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                      if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                        $target$$77 = 1;
                        acc$$6 = matchValue$$17[0];
                        name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                        values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                      } else {
                        $target$$77 = 2;
                      }
                    } else {
                      $target$$77 = 2;
                    }
                  } else {
                    $target$$77 = 2;
                  }
                } else {
                  $target$$77 = 2;
                }
              } else {
                $target$$77 = 2;
              }
            } else if (matchValue$$17[1].tag === 0) {
              if (matchValue$$17[1].fields[0].tag === 12) {
                if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                  if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                    if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                      $target$$77 = 1;
                      acc$$6 = matchValue$$17[0];
                      name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                      values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                    } else {
                      $target$$77 = 2;
                    }
                  } else {
                    $target$$77 = 2;
                  }
                } else {
                  $target$$77 = 2;
                }
              } else {
                $target$$77 = 2;
              }
            } else {
              $target$$77 = 2;
            }
          } else {
            $target$$77 = 2;
          }

          switch ($target$$77) {
            case 0:
              {
                if ((0, _FSharp2Fable.Helpers$$$tryFindAtt)("Fable.Core.EraseAttribute", (0, _Symbols.FSharpUnionCase$$get_Attributes)(uci)) == null) {
                  const name$$13 = (0, _Option.defaultArg)((0, _FSharp2Fable.Helpers$$$unionCaseCompiledName)(uci), (0, _Symbols.FSharpUnionCase$$get_Name)(uci));
                  return (0, _Types.L)(makeObjMember(caseRule$$3, name$$13, values$$4), acc$$5);
                } else {
                  var $target$$78, name$$12, values$$5;

                  if (values$$4.tail != null) {
                    if (values$$4.head.tag === 0) {
                      if (values$$4.head.fields[0].tag === 5) {
                        $target$$78 = 0;
                        name$$12 = values$$4.head.fields[0].fields[0];
                        values$$5 = values$$4.tail;
                      } else {
                        $target$$78 = 1;
                      }
                    } else {
                      $target$$78 = 1;
                    }
                  } else {
                    $target$$78 = 1;
                  }

                  switch ($target$$78) {
                    case 0:
                      {
                        return (0, _Types.L)(makeObjMember(caseRule$$3, name$$12, values$$5), acc$$5);
                      }

                    case 1:
                      {
                        return null;
                      }
                  }
                }
              }

            case 1:
              {
                return (0, _Types.L)(makeObjMember(caseRule$$3, name$$14, values$$6), acc$$6);
              }

            case 2:
              {
                return null;
              }
          }
        }, activePatternResult66807.fields[0].fields[0].fields[0], (0, _Types.L)()) : (activePatternResult66808 = $007CListLiteral$007C_$007C(activePatternResult66807), activePatternResult66808 != null ? (0, _List.foldBack)(function folder$$1(m$$4, acc$$4) {
          const matchValue$$17 = [acc$$4, m$$4];
          var $target$$79, acc$$5, uci, values$$4, acc$$6, name$$14, values$$6;

          if (matchValue$$17[0] != null) {
            const activePatternResult66803 = (0, _Transforms.AST$$$$007CMaybeCasted$007C)(matchValue$$17[1]);

            if (activePatternResult66803.tag === 0) {
              if (activePatternResult66803.fields[0].tag === 14) {
                $target$$79 = 0;
                acc$$5 = matchValue$$17[0];
                uci = activePatternResult66803.fields[0].fields[1];
                values$$4 = activePatternResult66803.fields[0].fields[0];
              } else if (matchValue$$17[1].tag === 0) {
                if (matchValue$$17[1].fields[0].tag === 12) {
                  if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                    if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                      if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                        $target$$79 = 1;
                        acc$$6 = matchValue$$17[0];
                        name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                        values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                      } else {
                        $target$$79 = 2;
                      }
                    } else {
                      $target$$79 = 2;
                    }
                  } else {
                    $target$$79 = 2;
                  }
                } else {
                  $target$$79 = 2;
                }
              } else {
                $target$$79 = 2;
              }
            } else if (matchValue$$17[1].tag === 0) {
              if (matchValue$$17[1].fields[0].tag === 12) {
                if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                  if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                    if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                      $target$$79 = 1;
                      acc$$6 = matchValue$$17[0];
                      name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                      values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                    } else {
                      $target$$79 = 2;
                    }
                  } else {
                    $target$$79 = 2;
                  }
                } else {
                  $target$$79 = 2;
                }
              } else {
                $target$$79 = 2;
              }
            } else {
              $target$$79 = 2;
            }
          } else {
            $target$$79 = 2;
          }

          switch ($target$$79) {
            case 0:
              {
                if ((0, _FSharp2Fable.Helpers$$$tryFindAtt)("Fable.Core.EraseAttribute", (0, _Symbols.FSharpUnionCase$$get_Attributes)(uci)) == null) {
                  const name$$13 = (0, _Option.defaultArg)((0, _FSharp2Fable.Helpers$$$unionCaseCompiledName)(uci), (0, _Symbols.FSharpUnionCase$$get_Name)(uci));
                  return (0, _Types.L)(makeObjMember(caseRule$$3, name$$13, values$$4), acc$$5);
                } else {
                  var $target$$80, name$$12, values$$5;

                  if (values$$4.tail != null) {
                    if (values$$4.head.tag === 0) {
                      if (values$$4.head.fields[0].tag === 5) {
                        $target$$80 = 0;
                        name$$12 = values$$4.head.fields[0].fields[0];
                        values$$5 = values$$4.tail;
                      } else {
                        $target$$80 = 1;
                      }
                    } else {
                      $target$$80 = 1;
                    }
                  } else {
                    $target$$80 = 1;
                  }

                  switch ($target$$80) {
                    case 0:
                      {
                        return (0, _Types.L)(makeObjMember(caseRule$$3, name$$12, values$$5), acc$$5);
                      }

                    case 1:
                      {
                        return null;
                      }
                  }
                }
              }

            case 1:
              {
                return (0, _Types.L)(makeObjMember(caseRule$$3, name$$14, values$$6), acc$$6);
              }

            case 2:
              {
                return null;
              }
          }
        }, activePatternResult66808[0], (0, _Types.L)()) : null) : (activePatternResult66809 = $007CListLiteral$007C_$007C(activePatternResult66807), activePatternResult66809 != null ? (0, _List.foldBack)(function folder$$1(m$$4, acc$$4) {
          const matchValue$$17 = [acc$$4, m$$4];
          var $target$$81, acc$$5, uci, values$$4, acc$$6, name$$14, values$$6;

          if (matchValue$$17[0] != null) {
            const activePatternResult66803 = (0, _Transforms.AST$$$$007CMaybeCasted$007C)(matchValue$$17[1]);

            if (activePatternResult66803.tag === 0) {
              if (activePatternResult66803.fields[0].tag === 14) {
                $target$$81 = 0;
                acc$$5 = matchValue$$17[0];
                uci = activePatternResult66803.fields[0].fields[1];
                values$$4 = activePatternResult66803.fields[0].fields[0];
              } else if (matchValue$$17[1].tag === 0) {
                if (matchValue$$17[1].fields[0].tag === 12) {
                  if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                    if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                      if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                        $target$$81 = 1;
                        acc$$6 = matchValue$$17[0];
                        name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                        values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                      } else {
                        $target$$81 = 2;
                      }
                    } else {
                      $target$$81 = 2;
                    }
                  } else {
                    $target$$81 = 2;
                  }
                } else {
                  $target$$81 = 2;
                }
              } else {
                $target$$81 = 2;
              }
            } else if (matchValue$$17[1].tag === 0) {
              if (matchValue$$17[1].fields[0].tag === 12) {
                if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                  if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                    if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                      $target$$81 = 1;
                      acc$$6 = matchValue$$17[0];
                      name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                      values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                    } else {
                      $target$$81 = 2;
                    }
                  } else {
                    $target$$81 = 2;
                  }
                } else {
                  $target$$81 = 2;
                }
              } else {
                $target$$81 = 2;
              }
            } else {
              $target$$81 = 2;
            }
          } else {
            $target$$81 = 2;
          }

          switch ($target$$81) {
            case 0:
              {
                if ((0, _FSharp2Fable.Helpers$$$tryFindAtt)("Fable.Core.EraseAttribute", (0, _Symbols.FSharpUnionCase$$get_Attributes)(uci)) == null) {
                  const name$$13 = (0, _Option.defaultArg)((0, _FSharp2Fable.Helpers$$$unionCaseCompiledName)(uci), (0, _Symbols.FSharpUnionCase$$get_Name)(uci));
                  return (0, _Types.L)(makeObjMember(caseRule$$3, name$$13, values$$4), acc$$5);
                } else {
                  var $target$$82, name$$12, values$$5;

                  if (values$$4.tail != null) {
                    if (values$$4.head.tag === 0) {
                      if (values$$4.head.fields[0].tag === 5) {
                        $target$$82 = 0;
                        name$$12 = values$$4.head.fields[0].fields[0];
                        values$$5 = values$$4.tail;
                      } else {
                        $target$$82 = 1;
                      }
                    } else {
                      $target$$82 = 1;
                    }
                  } else {
                    $target$$82 = 1;
                  }

                  switch ($target$$82) {
                    case 0:
                      {
                        return (0, _Types.L)(makeObjMember(caseRule$$3, name$$12, values$$5), acc$$5);
                      }

                    case 1:
                      {
                        return null;
                      }
                  }
                }
              }

            case 1:
              {
                return (0, _Types.L)(makeObjMember(caseRule$$3, name$$14, values$$6), acc$$6);
              }

            case 2:
              {
                return null;
              }
          }
        }, activePatternResult66809[0], (0, _Types.L)()) : null) : (activePatternResult66810 = $007CListLiteral$007C_$007C(activePatternResult66807), activePatternResult66810 != null ? (0, _List.foldBack)(function folder$$1(m$$4, acc$$4) {
          const matchValue$$17 = [acc$$4, m$$4];
          var $target$$83, acc$$5, uci, values$$4, acc$$6, name$$14, values$$6;

          if (matchValue$$17[0] != null) {
            const activePatternResult66803 = (0, _Transforms.AST$$$$007CMaybeCasted$007C)(matchValue$$17[1]);

            if (activePatternResult66803.tag === 0) {
              if (activePatternResult66803.fields[0].tag === 14) {
                $target$$83 = 0;
                acc$$5 = matchValue$$17[0];
                uci = activePatternResult66803.fields[0].fields[1];
                values$$4 = activePatternResult66803.fields[0].fields[0];
              } else if (matchValue$$17[1].tag === 0) {
                if (matchValue$$17[1].fields[0].tag === 12) {
                  if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                    if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                      if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                        $target$$83 = 1;
                        acc$$6 = matchValue$$17[0];
                        name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                        values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                      } else {
                        $target$$83 = 2;
                      }
                    } else {
                      $target$$83 = 2;
                    }
                  } else {
                    $target$$83 = 2;
                  }
                } else {
                  $target$$83 = 2;
                }
              } else {
                $target$$83 = 2;
              }
            } else if (matchValue$$17[1].tag === 0) {
              if (matchValue$$17[1].fields[0].tag === 12) {
                if (matchValue$$17[1].fields[0].fields[0].tail != null) {
                  if (matchValue$$17[1].fields[0].fields[0].head.tag === 0) {
                    if (matchValue$$17[1].fields[0].fields[0].head.fields[0].tag === 5) {
                      $target$$83 = 1;
                      acc$$6 = matchValue$$17[0];
                      name$$14 = matchValue$$17[1].fields[0].fields[0].head.fields[0].fields[0];
                      values$$6 = matchValue$$17[1].fields[0].fields[0].tail;
                    } else {
                      $target$$83 = 2;
                    }
                  } else {
                    $target$$83 = 2;
                  }
                } else {
                  $target$$83 = 2;
                }
              } else {
                $target$$83 = 2;
              }
            } else {
              $target$$83 = 2;
            }
          } else {
            $target$$83 = 2;
          }

          switch ($target$$83) {
            case 0:
              {
                if ((0, _FSharp2Fable.Helpers$$$tryFindAtt)("Fable.Core.EraseAttribute", (0, _Symbols.FSharpUnionCase$$get_Attributes)(uci)) == null) {
                  const name$$13 = (0, _Option.defaultArg)((0, _FSharp2Fable.Helpers$$$unionCaseCompiledName)(uci), (0, _Symbols.FSharpUnionCase$$get_Name)(uci));
                  return (0, _Types.L)(makeObjMember(caseRule$$3, name$$13, values$$4), acc$$5);
                } else {
                  var $target$$84, name$$12, values$$5;

                  if (values$$4.tail != null) {
                    if (values$$4.head.tag === 0) {
                      if (values$$4.head.fields[0].tag === 5) {
                        $target$$84 = 0;
                        name$$12 = values$$4.head.fields[0].fields[0];
                        values$$5 = values$$4.tail;
                      } else {
                        $target$$84 = 1;
                      }
                    } else {
                      $target$$84 = 1;
                    }
                  } else {
                    $target$$84 = 1;
                  }

                  switch ($target$$84) {
                    case 0:
                      {
                        return (0, _Types.L)(makeObjMember(caseRule$$3, name$$12, values$$5), acc$$5);
                      }

                    case 1:
                      {
                        return null;
                      }
                  }
                }
              }

            case 1:
              {
                return (0, _Types.L)(makeObjMember(caseRule$$3, name$$14, values$$6), acc$$6);
              }

            case 2:
              {
                return null;
              }
          }
        }, activePatternResult66810[0], (0, _Types.L)()) : null)), null, function mapping$$9(members$$2) {
          return new _AST.Expr(6, "ObjectExpr", members$$2, new _AST.Type(1, "Any"), null);
        }), function defThunk$$2() {
          return Helper$$$CoreCall$$39739A92("Util", "createObj", new _AST.Type(1, "Any"), (0, _Types.L)(keyValueList, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(caseRule$$3), (0, _Types.L)())));
        });
      }

    case 1:
      {
        return Helper$$$CoreCall$$39739A92("Util", "createObj", new _AST.Type(1, "Any"), (0, _Types.L)(keyValueList, (0, _Types.L)(caseRule$$1, (0, _Types.L)())));
      }
  }
}

function injectArg(com$$27, ctx$$12, r$$23, moduleName, methName$$2, genArgs$$8, args$$25) {
  const $007CGenericArg$007C_$007C = function $007CGenericArg$007C_$007C(genArgs$$9, genArgIndex) {
    return (0, _List.tryItem)(genArgIndex, genArgs$$9);
  };

  const buildArg = function buildArg(_arg1$$13) {
    var $target$$85, genArg$$6;

    if (_arg1$$13[0] === "System.Collections.Generic.IComparer`1") {
      const activePatternResult66835 = $007CGenericArg$007C_$007C(genArgs$$8, _arg1$$13[1]);

      if (activePatternResult66835 != null) {
        $target$$85 = 0;
        genArg$$6 = activePatternResult66835[1];
      } else {
        $target$$85 = 1;
      }
    } else {
      $target$$85 = 1;
    }

    switch ($target$$85) {
      case 0:
        {
          return makeComparer(com$$27, genArg$$6);
        }

      case 1:
        {
          var $target$$86, genArg$$7;

          if (_arg1$$13[0] === "System.Collections.Generic.IEqualityComparer`1") {
            const activePatternResult66833 = $007CGenericArg$007C_$007C(genArgs$$8, _arg1$$13[1]);

            if (activePatternResult66833 != null) {
              $target$$86 = 0;
              genArg$$7 = activePatternResult66833[1];
            } else {
              $target$$86 = 1;
            }
          } else {
            $target$$86 = 1;
          }

          switch ($target$$86) {
            case 0:
              {
                return makeEqualityComparer(com$$27, genArg$$7);
              }

            case 1:
              {
                var $target$$87, genArg$$8;

                if (_arg1$$13[0] === "Array.IArrayCons`1") {
                  const activePatternResult66831 = $007CGenericArg$007C_$007C(genArgs$$8, _arg1$$13[1]);

                  if (activePatternResult66831 != null) {
                    $target$$87 = 0;
                    genArg$$8 = activePatternResult66831[1];
                  } else {
                    $target$$87 = 1;
                  }
                } else {
                  $target$$87 = 1;
                }

                switch ($target$$87) {
                  case 0:
                    {
                      return arrayCons(com$$27, genArg$$8);
                    }

                  case 1:
                    {
                      var $target$$88, genArg$$9;

                      if (_arg1$$13[0] === "Fable.Core.IGenericAdder`1") {
                        const activePatternResult66829 = $007CGenericArg$007C_$007C(genArgs$$8, _arg1$$13[1]);

                        if (activePatternResult66829 != null) {
                          $target$$88 = 0;
                          genArg$$9 = activePatternResult66829[1];
                        } else {
                          $target$$88 = 1;
                        }
                      } else {
                        $target$$88 = 1;
                      }

                      switch ($target$$88) {
                        case 0:
                          {
                            return makeGenericAdder(com$$27, ctx$$12, genArg$$9);
                          }

                        case 1:
                          {
                            var $target$$89, genArg$$10;

                            if (_arg1$$13[0] === "Fable.Core.IGenericAverager`1") {
                              const activePatternResult66827 = $007CGenericArg$007C_$007C(genArgs$$8, _arg1$$13[1]);

                              if (activePatternResult66827 != null) {
                                $target$$89 = 0;
                                genArg$$10 = activePatternResult66827[1];
                              } else {
                                $target$$89 = 1;
                              }
                            } else {
                              $target$$89 = 1;
                            }

                            switch ($target$$89) {
                              case 0:
                                {
                                  return makeGenericAverager(com$$27, ctx$$12, genArg$$10);
                                }

                              case 1:
                                {
                                  (0, _Transforms.Log$$$addError)(com$$27, ctx$$12.InlinePath, r$$23, (0, _String.toText)((0, _String.printf)("Cannot inject arg to %s.%s (genArgs %A - expected index %i)"))(moduleName)(methName$$2)((0, _List.map)(function (tuple$$2) {
                                    return tuple$$2[0];
                                  }, genArgs$$8))(_arg1$$13[1]));
                                  return null;
                                }
                            }
                          }
                      }
                    }
                }
              }
          }
        }
    }
  };

  const _arg2$$1 = (0, _Option.defaultArg)((0, _Option.defaultArg)((0, _Map.tryFind)(moduleName, _ReplacementsInject.fableCoreModules), null, function binder(table) {
    return (0, _Map.tryFind)(methName$$2, table);
  }), null, function mapping$$10(list$$9) {
    return (0, _List.choose)(buildArg, list$$9);
  });

  if (_arg2$$1 != null) {
    const injections = _arg2$$1;
    return (0, _List.append)(args$$25, injections);
  } else {
    return args$$25;
  }
}

function fableCoreLib(com$$28, ctx$$13, r$$24, t$$44, i$$2, thisArg$$1, args$$26) {
  var ent$$16, activePatternResult66866, name$$16, activePatternResult66868, name$$17;
  const matchValue$$19 = [i$$2.CompiledName, args$$26];
  var $target$$90, m$$5, suffix;

  if (matchValue$$19[0] === "Async.AwaitPromise.Static") {
    $target$$90 = 0;
    m$$5 = matchValue$$19[0];
  } else if (matchValue$$19[0] === "Async.StartAsPromise.Static") {
    $target$$90 = 0;
    m$$5 = matchValue$$19[0];
  } else if (matchValue$$19[0] === "importDynamic") {
    $target$$90 = 1;
  } else {
    const activePatternResult66882 = (0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("import", matchValue$$19[0]);

    if (activePatternResult66882 != null) {
      $target$$90 = 2;
      suffix = activePatternResult66882;
    } else {
      $target$$90 = 3;
    }
  }

  switch ($target$$90) {
    case 0:
      {
        const meth$$2 = m$$5 === "Async.AwaitPromise.Static" ? "awaitPromise" : "startAsPromise";
        return Helper$$$CoreCall$$39739A92("Async", meth$$2, t$$44, args$$26, i$$2.SignatureArgTypes, thisArg$$1, null, null, r$$24);
      }

    case 1:
      {
        return Helper$$$GlobalCall$$Z6A200D61("import", t$$44, args$$26, null, null, null, r$$24);
      }

    case 2:
      {
        const matchValue$$20 = [suffix, args$$26];
        var $target$$91, path, path$$1, path$$2, path$$3, path$$4, selector;

        if (matchValue$$20[0] === "Member") {
          if (matchValue$$20[1].tail != null) {
            if (matchValue$$20[1].tail.tail != null) {
              if (matchValue$$20[1].tail.tail.tail == null) {
                $target$$91 = 4;
                path$$4 = matchValue$$20[1].tail.head;
                selector = matchValue$$20[1].head;
              } else {
                $target$$91 = 5;
              }
            } else {
              $target$$91 = 0;
              path = matchValue$$20[1].head;
            }
          } else {
            $target$$91 = 5;
          }
        } else if (matchValue$$20[0] === "Default") {
          if (matchValue$$20[1].tail != null) {
            if (matchValue$$20[1].tail.tail != null) {
              if (matchValue$$20[1].tail.tail.tail == null) {
                $target$$91 = 4;
                path$$4 = matchValue$$20[1].tail.head;
                selector = matchValue$$20[1].head;
              } else {
                $target$$91 = 5;
              }
            } else {
              $target$$91 = 1;
              path$$1 = matchValue$$20[1].head;
            }
          } else {
            $target$$91 = 5;
          }
        } else if (matchValue$$20[0] === "SideEffects") {
          if (matchValue$$20[1].tail != null) {
            if (matchValue$$20[1].tail.tail != null) {
              if (matchValue$$20[1].tail.tail.tail == null) {
                $target$$91 = 4;
                path$$4 = matchValue$$20[1].tail.head;
                selector = matchValue$$20[1].head;
              } else {
                $target$$91 = 5;
              }
            } else {
              $target$$91 = 2;
              path$$2 = matchValue$$20[1].head;
            }
          } else {
            $target$$91 = 5;
          }
        } else if (matchValue$$20[0] === "All") {
          if (matchValue$$20[1].tail != null) {
            if (matchValue$$20[1].tail.tail != null) {
              if (matchValue$$20[1].tail.tail.tail == null) {
                $target$$91 = 4;
                path$$4 = matchValue$$20[1].tail.head;
                selector = matchValue$$20[1].head;
              } else {
                $target$$91 = 5;
              }
            } else {
              $target$$91 = 3;
              path$$3 = matchValue$$20[1].head;
            }
          } else {
            $target$$91 = 5;
          }
        } else if (matchValue$$20[1].tail != null) {
          if (matchValue$$20[1].tail.tail != null) {
            if (matchValue$$20[1].tail.tail.tail == null) {
              $target$$91 = 4;
              path$$4 = matchValue$$20[1].tail.head;
              selector = matchValue$$20[1].head;
            } else {
              $target$$91 = 5;
            }
          } else {
            $target$$91 = 5;
          }
        } else {
          $target$$91 = 5;
        }

        switch ($target$$91) {
          case 0:
            {
              return new _AST.Expr(4, "Import", (0, _Transforms.AST$$$makeStrConst)("__PLACE-HOLDER__"), path, new _AST.ImportKind(2, "CustomImport"), t$$44, r$$24);
            }

          case 1:
            {
              return new _AST.Expr(4, "Import", (0, _Transforms.AST$$$makeStrConst)("default"), path$$1, new _AST.ImportKind(2, "CustomImport"), t$$44, r$$24);
            }

          case 2:
            {
              return new _AST.Expr(4, "Import", (0, _Transforms.AST$$$makeStrConst)(""), path$$2, new _AST.ImportKind(2, "CustomImport"), t$$44, r$$24);
            }

          case 3:
            {
              return new _AST.Expr(4, "Import", (0, _Transforms.AST$$$makeStrConst)("*"), path$$3, new _AST.ImportKind(2, "CustomImport"), t$$44, r$$24);
            }

          case 4:
            {
              return new _AST.Expr(4, "Import", selector, path$$4, new _AST.ImportKind(2, "CustomImport"), t$$44, r$$24);
            }

          case 5:
            {
              return null;
            }
        }
      }

    case 3:
      {
        var $target$$92, left$$21, memb$$3, callee$$2, prop$$2, value$$8, args$$27, callee$$3, m$$6, name$$15, value$$9, kvs$$2, caseRule$$4, keyValueList$$1, arg$$4;

        if (matchValue$$19[0] === "op_BangBang") {
          $target$$92 = 0;
        } else if (matchValue$$19[0] === "op_BangHat") {
          $target$$92 = 0;
        } else if (matchValue$$19[0] === "op_Dynamic") {
          if (matchValue$$19[1].tail != null) {
            if (matchValue$$19[1].tail.tail != null) {
              if (matchValue$$19[1].tail.tail.tail == null) {
                $target$$92 = 1;
                left$$21 = matchValue$$19[1].head;
                memb$$3 = matchValue$$19[1].tail.head;
              } else {
                $target$$92 = 20;
              }
            } else {
              $target$$92 = 20;
            }
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "op_DynamicAssignment") {
          if (matchValue$$19[1].tail != null) {
            if (matchValue$$19[1].tail.tail != null) {
              if (matchValue$$19[1].tail.tail.tail != null) {
                if (matchValue$$19[1].tail.tail.tail.tail == null) {
                  $target$$92 = 2;
                  callee$$2 = matchValue$$19[1].head;
                  prop$$2 = matchValue$$19[1].tail.head;
                  value$$8 = (0, _Transforms.AST$$$$007CMaybeLambdaUncurriedAtCompileTime$007C)(matchValue$$19[1].tail.tail.head);
                } else {
                  $target$$92 = 20;
                }
              } else {
                $target$$92 = 20;
              }
            } else {
              $target$$92 = 20;
            }
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "op_Dollar") {
          if (matchValue$$19[1].tail != null) {
            $target$$92 = 3;
            args$$27 = matchValue$$19[1].tail;
            callee$$3 = matchValue$$19[1].head;
            m$$6 = matchValue$$19[0];
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "createNew") {
          if (matchValue$$19[1].tail != null) {
            $target$$92 = 3;
            args$$27 = matchValue$$19[1].tail;
            callee$$3 = matchValue$$19[1].head;
            m$$6 = matchValue$$19[0];
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "op_EqualsEqualsGreater") {
          if (matchValue$$19[1].tail != null) {
            if (matchValue$$19[1].tail.tail != null) {
              if (matchValue$$19[1].tail.tail.tail == null) {
                $target$$92 = 4;
                name$$15 = matchValue$$19[1].head;
                value$$9 = (0, _Transforms.AST$$$$007CMaybeLambdaUncurriedAtCompileTime$007C)(matchValue$$19[1].tail.head);
              } else {
                $target$$92 = 20;
              }
            } else {
              $target$$92 = 20;
            }
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "createObj") {
          if (matchValue$$19[1].tail != null) {
            if (matchValue$$19[1].tail.tail == null) {
              $target$$92 = 5;
              kvs$$2 = matchValue$$19[1].head;
            } else {
              $target$$92 = 20;
            }
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "keyValueList") {
          if (matchValue$$19[1].tail != null) {
            if (matchValue$$19[1].tail.tail != null) {
              if (matchValue$$19[1].tail.tail.tail == null) {
                $target$$92 = 6;
                caseRule$$4 = matchValue$$19[1].head;
                keyValueList$$1 = matchValue$$19[1].tail.head;
              } else {
                $target$$92 = 20;
              }
            } else {
              $target$$92 = 20;
            }
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "toPlainJsObj") {
          $target$$92 = 7;
        } else if (matchValue$$19[0] === "jsOptions") {
          if (matchValue$$19[1].tail != null) {
            if (matchValue$$19[1].tail.tail == null) {
              $target$$92 = 8;
              arg$$4 = matchValue$$19[1].head;
            } else {
              $target$$92 = 20;
            }
          } else {
            $target$$92 = 20;
          }
        } else if (matchValue$$19[0] === "jsThis") {
          $target$$92 = 9;
        } else if (matchValue$$19[0] === "jsConstructor") {
          $target$$92 = 10;
        } else if (matchValue$$19[0] === "createEmpty") {
          $target$$92 = 11;
        } else if (matchValue$$19[0] === "nameof") {
          $target$$92 = 12;
        } else if (matchValue$$19[0] === "nameofLambda") {
          $target$$92 = 13;
        } else if (matchValue$$19[0] === "AreEqual") {
          $target$$92 = 14;
        } else if (matchValue$$19[0] === "NotEqual") {
          $target$$92 = 15;
        } else if (matchValue$$19[0] === "jsNative") {
          $target$$92 = 16;
        } else if (matchValue$$19[0] === "ofJson") {
          $target$$92 = 17;
        } else if (matchValue$$19[0] === "toJson") {
          $target$$92 = 18;
        } else if (matchValue$$19[0] === "inflate") {
          $target$$92 = 19;
        } else if (matchValue$$19[0] === "deflate") {
          $target$$92 = 19;
        } else {
          $target$$92 = 20;
        }

        switch ($target$$92) {
          case 0:
            {
              return (0, _List.tryHead)(args$$26);
            }

          case 1:
            {
              return (0, _Transforms.AST$$$getExpr)(r$$24, t$$44, left$$21, memb$$3);
            }

          case 2:
            {
              return new _AST.Expr(16, "Set", callee$$2, new _AST.SetKind(1, "ExprSet", prop$$2), value$$8, r$$24);
            }

          case 3:
            {
              let argInfo;
              const inputRecord = (0, _Transforms.AST$$$argInfo)(null, args$$27, new _AST.SignatureKind(1, "AutoUncurrying"));
              argInfo = new _AST.ArgInfo(inputRecord.ThisArg, inputRecord.Args, inputRecord.SignatureArgTypes, new _AST.SpreadKind(2, "TupleSpread"), inputRecord.IsBaseOrSelfConstructorCall);

              if (m$$6 === "createNew") {
                return (0, _Transforms.AST$$$constructorCall)(r$$24, t$$44, argInfo, callee$$3);
              } else {
                return (0, _Transforms.AST$$$staticCall)(r$$24, t$$44, argInfo, callee$$3);
              }
            }

          case 4:
            {
              return new _AST.Expr(0, "Value", new _AST.ValueKind(12, "NewTuple", (0, _Types.L)(name$$15, (0, _Types.L)(value$$9, (0, _Types.L)()))));
            }

          case 5:
            {
              return new _AST.Expr(3, "DelayedResolution", new _AST.DelayedResolutionKind(0, "AsPojo", kvs$$2, (0, _Transforms.AST$$$makeIntConst)(0)), t$$44, r$$24);
            }

          case 6:
            {
              return new _AST.Expr(3, "DelayedResolution", new _AST.DelayedResolutionKind(0, "AsPojo", keyValueList$$1, caseRule$$4), t$$44, r$$24);
            }

          case 7:
            {
              const emptyObj = new _AST.Expr(6, "ObjectExpr", (0, _Types.L)(), t$$44, null);
              return Helper$$$GlobalCall$$Z6A200D61("Object", new _AST.Type(1, "Any"), (0, _Types.L)(emptyObj, args$$26), null, "assign", null, r$$24);
            }

          case 8:
            {
              return makePojoFromLambda(arg$$4);
            }

          case 9:
            {
              return new _AST.Expr(1, "IdentExpr", (0, _Transforms.AST$$$makeTypedIdentNonMangled)(t$$44, "this"));
            }

          case 10:
            {
              const matchValue$$21 = Helpers$$$genArg(com$$28, ctx$$13, r$$24, 0, i$$2.GenericArgs);
              var $target$$93, ent$$17;

              if (matchValue$$21.tag === 16) {
                if (ent$$16 = matchValue$$21.fields[0], (0, _Symbols.FSharpEntity$$get_IsClass)(ent$$16)) {
                  $target$$93 = 0;
                  ent$$17 = matchValue$$21.fields[0];
                } else {
                  $target$$93 = 1;
                }
              } else {
                $target$$93 = 1;
              }

              switch ($target$$93) {
                case 0:
                  {
                    return (0, _FSharp2Fable.Util$$$entityRefMaybeImported)(com$$28, ent$$17);
                  }

                case 1:
                  {
                    (0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Only class types define a function constructor in JS");
                    return null;
                  }
              }
            }

          case 11:
            {
              return Helpers$$$objExpr(t$$44, (0, _Types.L)());
            }

          case 12:
            {
              return (0, _Transforms.AST$$$makeStrConst)(args$$26.tail != null ? (activePatternResult66866 = $007CNameof$007C_$007C(args$$26.head), activePatternResult66866 != null ? args$$26.tail.tail == null ? (name$$16 = activePatternResult66866, name$$16) : ((0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Cannot infer name of expression"), "UNKNOWN") : ((0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Cannot infer name of expression"), "UNKNOWN")) : ((0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Cannot infer name of expression"), "UNKNOWN"));
            }

          case 13:
            {
              return (0, _Transforms.AST$$$makeStrConst)(args$$26.tail != null ? args$$26.head.tag === 5 ? (activePatternResult66868 = $007CNameof$007C_$007C(args$$26.head.fields[1]), activePatternResult66868 != null ? args$$26.tail.tail == null ? (name$$17 = activePatternResult66868, name$$17) : ((0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Cannot infer name of expression"), "UNKNOWN") : ((0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Cannot infer name of expression"), "UNKNOWN")) : ((0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Cannot infer name of expression"), "UNKNOWN") : ((0, _Transforms.Log$$$addError)(com$$28, ctx$$13.InlinePath, r$$24, "Cannot infer name of expression"), "UNKNOWN"));
            }

          case 14:
            {
              return Helper$$$CoreCall$$39739A92("Util", "assertEqual", t$$44, args$$26, i$$2.SignatureArgTypes, thisArg$$1, null, null, r$$24);
            }

          case 15:
            {
              return Helper$$$CoreCall$$39739A92("Util", "assertNotEqual", t$$44, args$$26, i$$2.SignatureArgTypes, thisArg$$1, null, null, r$$24);
            }

          case 16:
            {
              (0, _Transforms.Log$$$addWarning)(com$$28, ctx$$13.InlinePath, r$$24, "jsNative is being compiled without replacement, this will fail at runtime.");
              const runtimeMsg = new _AST.Expr(0, "Value", new _AST.ValueKind(5, "StringConstant", "A function supposed to be replaced by JS native code has been called, please check."));
              return new _AST.Expr(11, "Throw", Helpers$$$error(runtimeMsg), t$$44, r$$24);
            }

          case 17:
            {
              return Helper$$$GlobalCall$$Z6A200D61("JSON", t$$44, args$$26, null, "parse", null, r$$24);
            }

          case 18:
            {
              return Helper$$$GlobalCall$$Z6A200D61("JSON", t$$44, args$$26, null, "stringify", null, r$$24);
            }

          case 19:
            {
              return (0, _List.tryHead)(args$$26);
            }

          case 20:
            {
              return null;
            }
        }
      }
  }
}

function getReference(r$$25, t$$45, expr$$6) {
  return (0, _Transforms.AST$$$get)(r$$25, t$$45, expr$$6, "contents");
}

function setReference(r$$26, expr$$7, value$$11) {
  return new _AST.Expr(16, "Set", expr$$7, new _AST.SetKind(1, "ExprSet", (0, _Transforms.AST$$$makeStrConst)("contents")), value$$11, r$$26);
}

function newReference(r$$27, t$$46, value$$12) {
  return Helper$$$ConstructorCall$$437D8EA7((0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "FSharpRef", "Types"), t$$46, (0, _Types.L)(value$$12, (0, _Types.L)()), null, r$$27);
}

function references(_arg1$$14, ctx$$14, r$$28, t$$47, i$$3, thisArg$$2, args$$28) {
  const matchValue$$22 = [i$$3.CompiledName, thisArg$$2, args$$28];
  var $target$$94, callee$$4, callee$$5, value$$13;

  if (matchValue$$22[0] === "get_Value") {
    if (matchValue$$22[1] != null) {
      $target$$94 = 0;
      callee$$4 = matchValue$$22[1];
    } else {
      $target$$94 = 2;
    }
  } else if (matchValue$$22[0] === "set_Value") {
    if (matchValue$$22[1] != null) {
      if (matchValue$$22[2].tail != null) {
        if (matchValue$$22[2].tail.tail == null) {
          $target$$94 = 1;
          callee$$5 = matchValue$$22[1];
          value$$13 = matchValue$$22[2].head;
        } else {
          $target$$94 = 2;
        }
      } else {
        $target$$94 = 2;
      }
    } else {
      $target$$94 = 2;
    }
  } else {
    $target$$94 = 2;
  }

  switch ($target$$94) {
    case 0:
      {
        return getReference(r$$28, t$$47, callee$$4);
      }

    case 1:
      {
        return setReference(r$$28, callee$$5, value$$13);
      }

    case 2:
      {
        return null;
      }
  }
}

function getMangledNames(i$$4, thisArg$$3) {
  const isStatic = thisArg$$3 == null;
  const pos = i$$4.DeclaringEntityFullName.lastIndexOf(".") | 0;
  const moduleName$$1 = (0, _String.replace)(i$$4.DeclaringEntityFullName.substr(0, pos), "Microsoft.", "");
  const entityName = (0, _Prelude.Naming$$$sanitizeIdentForbiddenChars)(i$$4.DeclaringEntityFullName.substr(pos + 1));
  const memberName = (0, _Prelude.Naming$$$sanitizeIdentForbiddenChars)(i$$4.CompiledName);
  const mangledName$$1 = (0, _Prelude.Naming$$$buildNameWithoutSanitationFrom)(entityName, isStatic, memberName, i$$4.OverloadSuffix.Value);
  return [moduleName$$1, mangledName$$1];
}

function bclType(_arg1$$15, ctx$$15, r$$29, t$$48, i$$5, thisArg$$4, args$$29) {
  const patternInput = getMangledNames(i$$5, thisArg$$4);
  let args$$30;

  if (thisArg$$4 != null) {
    const callee$$6 = thisArg$$4;
    args$$30 = (0, _Types.L)(callee$$6, args$$29);
  } else {
    args$$30 = args$$29;
  }

  return Helper$$$CoreCall$$39739A92(patternInput[0], patternInput[1], t$$48, args$$30, i$$5.SignatureArgTypes, null, null, null, r$$29);
}

function fsharpModule(com$$29, ctx$$16, r$$30, t$$49, i$$6, thisArg$$5, args$$31) {
  const patternInput$$1 = getMangledNames(i$$6, thisArg$$5);
  return Helper$$$CoreCall$$39739A92(patternInput$$1[0], patternInput$$1[1], t$$49, args$$31, i$$6.SignatureArgTypes, null, null, null, r$$30);
}

function getFableReplLibImport(isStatic$$1, entityFullName, memberName$$1, overloadSuffix) {
  const entityFullName$$1 = entityFullName.substr(15);
  const memberName$$2 = (0, _Prelude.Naming$$$sanitizeIdentForbiddenChars)(memberName$$1);
  let patternInput$$2;
  const matchValue$$23 = entityFullName$$1.indexOf(".") | 0;

  if (matchValue$$23 === -1) {
    patternInput$$2 = [entityFullName$$1, memberName$$2, new _Prelude.Naming$002EMemberPart(2, "NoMemberPart")];
  } else {
    const pos$$1 = matchValue$$23 | 0;
    const fileName = entityFullName$$1.substr(0, pos$$1);
    const entityName$$1 = (0, _Prelude.Naming$$$sanitizeIdentForbiddenChars)(entityFullName$$1.substr(pos$$1 + 1));
    let memberPart;
    const matchValue$$24 = [memberName$$2, isStatic$$1];
    memberPart = matchValue$$24[0] === "" ? new _Prelude.Naming$002EMemberPart(2, "NoMemberPart") : matchValue$$24[1] ? new _Prelude.Naming$002EMemberPart(1, "StaticMemberPart", memberName$$2, overloadSuffix) : new _Prelude.Naming$002EMemberPart(0, "InstanceMemberPart", memberName$$2, overloadSuffix);
    patternInput$$2 = [fileName, entityName$$1, memberPart];
  }

  const mangledName$$4 = (0, _Prelude.Naming$$$buildNameWithoutSanitation)(patternInput$$2[1], patternInput$$2[2]);
  return (0, _Transforms.AST$$$makeCustomImport)(new _AST.Type(1, "Any"), mangledName$$4, "fable-repl-lib/" + patternInput$$2[0]);
}

function fableReplLib(com$$30, ctx$$17, r$$31, t$$50, i$$7, thisArg$$6, args$$32) {
  let argInfo$$1;
  const inputRecord$$1 = (0, _Transforms.AST$$$argInfo)(thisArg$$6, args$$32, new _AST.SignatureKind(0, "Typed", i$$7.SignatureArgTypes));
  argInfo$$1 = new _AST.ArgInfo(inputRecord$$1.ThisArg, inputRecord$$1.Args, inputRecord$$1.SignatureArgTypes, i$$7.Spread, inputRecord$$1.IsBaseOrSelfConstructorCall);
  return (0, _Transforms.AST$$$staticCall)(r$$31, t$$50, argInfo$$1, getFableReplLibImport(thisArg$$6 == null, i$$7.DeclaringEntityFullName, i$$7.CompiledName, i$$7.OverloadSuffix.Value));
}

function fsFormat(com$$31, ctx$$18, r$$32, t$$51, i$$8, thisArg$$7, args$$33) {
  const matchValue$$25 = [i$$8.CompiledName, thisArg$$7, args$$33];
  var $target$$95, callee$$7, args$$34, arg$$5, callee$$8, arg$$6;

  if (matchValue$$25[0] === "get_Value") {
    if (matchValue$$25[1] != null) {
      $target$$95 = 0;
      callee$$7 = matchValue$$25[1];
    } else {
      $target$$95 = 10;
    }
  } else if (matchValue$$25[0] === "PrintFormatToStringThen") {
    $target$$95 = 1;
  } else if (matchValue$$25[0] === "PrintFormatToString") {
    $target$$95 = 2;
  } else if (matchValue$$25[0] === "PrintFormatLine") {
    $target$$95 = 3;
  } else if (matchValue$$25[0] === "PrintFormatToTextWriter") {
    if (matchValue$$25[2].tail != null) {
      $target$$95 = 4;
      args$$34 = matchValue$$25[2].tail;
    } else {
      $target$$95 = 10;
    }
  } else if (matchValue$$25[0] === "PrintFormatLineToTextWriter") {
    if (matchValue$$25[2].tail != null) {
      $target$$95 = 4;
      args$$34 = matchValue$$25[2].tail;
    } else {
      $target$$95 = 10;
    }
  } else if (matchValue$$25[0] === "PrintFormat") {
    $target$$95 = 5;
  } else if (matchValue$$25[0] === "PrintFormatThen") {
    if (matchValue$$25[2].tail != null) {
      if (matchValue$$25[2].tail.tail != null) {
        $target$$95 = 6;
        arg$$5 = matchValue$$25[2].head;
        callee$$8 = matchValue$$25[2].tail.head;
      } else {
        $target$$95 = 10;
      }
    } else {
      $target$$95 = 10;
    }
  } else if (matchValue$$25[0] === "PrintFormatToStringThenFail") {
    $target$$95 = 7;
  } else if (matchValue$$25[0] === "PrintFormatToStringBuilder") {
    $target$$95 = 8;
  } else if (matchValue$$25[0] === "PrintFormatToStringBuilderThen") {
    $target$$95 = 8;
  } else if (matchValue$$25[0] === ".ctor") {
    if (matchValue$$25[2].tail != null) {
      $target$$95 = 9;
      arg$$6 = matchValue$$25[2].head;
    } else {
      $target$$95 = 10;
    }
  } else {
    $target$$95 = 10;
  }

  switch ($target$$95) {
    case 0:
      {
        return (0, _Transforms.AST$$$get)(null, t$$51, callee$$7, "input");
      }

    case 1:
      {
        var $target$$96, cont, fmt;

        if (args$$33.tail != null) {
          if (args$$33.tail.tail != null) {
            if (args$$33.tail.tail.tail == null) {
              $target$$96 = 1;
              cont = args$$33.head;
              fmt = args$$33.tail.head;
            } else {
              $target$$96 = 2;
            }
          } else {
            $target$$96 = 0;
          }
        } else {
          $target$$96 = 2;
        }

        switch ($target$$96) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("String", "toText", t$$51, args$$33, i$$8.SignatureArgTypes, null, null, null, r$$32);
            }

          case 1:
            {
              return Helper$$$InstanceCall$$9FFCF9C(fmt, "cont", t$$51, (0, _Types.L)(cont, (0, _Types.L)()));
            }

          case 2:
            {
              return null;
            }
        }
      }

    case 2:
      {
        return Helper$$$CoreCall$$39739A92("String", "toText", t$$51, args$$33, i$$8.SignatureArgTypes, null, null, null, r$$32);
      }

    case 3:
      {
        return Helper$$$CoreCall$$39739A92("String", "toConsole", t$$51, args$$33, i$$8.SignatureArgTypes, null, null, null, r$$32);
      }

    case 4:
      {
        return Helper$$$CoreCall$$39739A92("String", "toConsole", t$$51, args$$34, i$$8.SignatureArgTypes, null, null, null, r$$32);
      }

    case 5:
      {
        return Helper$$$CoreCall$$39739A92("String", "toConsole", t$$51, args$$33, i$$8.SignatureArgTypes, null, null, null, r$$32);
      }

    case 6:
      {
        return Helper$$$InstanceCall$$9FFCF9C(callee$$8, "cont", t$$51, (0, _Types.L)(arg$$5, (0, _Types.L)()));
      }

    case 7:
      {
        return Helper$$$CoreCall$$39739A92("String", "toFail", t$$51, args$$33, i$$8.SignatureArgTypes, null, null, null, r$$32);
      }

    case 8:
      {
        return fsharpModule(com$$31, ctx$$18, r$$32, t$$51, i$$8, thisArg$$7, args$$33);
      }

    case 9:
      {
        return Helper$$$CoreCall$$39739A92("String", "printf", t$$51, (0, _Types.L)(arg$$6, (0, _Types.L)()), i$$8.SignatureArgTypes, null, null, null, r$$32);
      }

    case 10:
      {
        return null;
      }
  }
}

function operators(com$$32, ctx$$19, r$$33, t$$52, i$$9, thisArg$$8, args$$35) {
  var activePatternResult66983, activePatternResult66982;

  const curriedApply = function curriedApply(r$$34, t$$53, applied, args$$36) {
    return new _AST.Expr(8, "Operation", new _AST.OperationKind(1, "CurriedApply", applied, args$$36), t$$53, r$$34);
  };

  const compose = function compose(com$$33, r$$35, t$$54, f1, f2) {
    const patternInput$$3 = t$$54.tag === 13 ? t$$54.fields[0].tag === 0 ? [t$$54.fields[0].fields[0], t$$54.fields[1]] : [new _AST.Type(1, "Any"), new _AST.Type(1, "Any")] : [new _AST.Type(1, "Any"), new _AST.Type(1, "Any")];
    const tempVar = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$33, patternInput$$3[0], "arg");
    const tempVarExpr = patternInput$$3[0].tag === 2 ? new _AST.Expr(0, "Value", new _AST.ValueKind(2, "UnitConstant")) : new _AST.Expr(1, "IdentExpr", tempVar);
    const body$$7 = curriedApply(r$$35, patternInput$$3[1], f2, (0, _Types.L)(curriedApply(null, new _AST.Type(1, "Any"), f1, (0, _Types.L)(tempVarExpr, (0, _Types.L)())), (0, _Types.L)()));
    return new _AST.Expr(5, "Function", new _AST.FunctionKind(0, "Lambda", tempVar), body$$7, null);
  };

  const math = function math(r$$36, t$$55, args$$37, argTypes$$17, methName$$3) {
    return Helper$$$GlobalCall$$Z6A200D61("Math", t$$55, args$$37, argTypes$$17, (0, _Prelude.Naming$$$lowerFirst)(methName$$3), null, r$$36);
  };

  const matchValue$$26 = [i$$9.CompiledName, args$$35];
  var $target$$97, arg$$7, arg$$8, xs$$6, arg$$9, f$$4, x$$34, f$$5, x$$35, y$$3, f$$6, x$$36, y$$4, z, f1$$1, f2$$1, f1$$2, f2$$2, msg$$1, argName, msg$$2, arg$$10, arg1, arg2, tup, tup$$1, arg$$11, o, v$$5, arg$$12, left$$22, right$$21, left$$23, right$$22, arg$$13, arg$$14, left$$24, right$$23, left$$25, right$$24, left$$26, right$$25, left$$27, right$$26, left$$28, right$$27, meth$$4, operand$$3;

  if (matchValue$$26[0] === "DefaultArg") {
    $target$$97 = 0;
  } else if (matchValue$$26[0] === "DefaultAsyncBuilder") {
    $target$$97 = 1;
  } else if (matchValue$$26[0] === "KeyValuePattern") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 2;
        arg$$7 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Identity") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 2;
        arg$$7 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Box") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 2;
        arg$$7 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Unbox") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 2;
        arg$$7 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "ToEnum") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 2;
        arg$$7 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Ignore") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 3;
        arg$$8 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "ToSByte") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToByte") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToInt8") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToUInt8") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToInt16") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToUInt16") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToInt") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToUInt") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToInt32") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToUInt32") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToInt64") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToUInt64") {
    $target$$97 = 4;
  } else if (matchValue$$26[0] === "ToSingle") {
    $target$$97 = 5;
  } else if (matchValue$$26[0] === "ToDouble") {
    $target$$97 = 5;
  } else if (matchValue$$26[0] === "ToDecimal") {
    $target$$97 = 5;
  } else if (matchValue$$26[0] === "ToChar") {
    $target$$97 = 6;
  } else if (matchValue$$26[0] === "ToString") {
    $target$$97 = 7;
  } else if (matchValue$$26[0] === "CreateSequence") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 8;
        xs$$6 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "CreateDictionary") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 9;
        arg$$9 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "CreateSet") {
    $target$$97 = 10;
  } else if (matchValue$$26[0] === "op_Range") {
    $target$$97 = 11;
  } else if (matchValue$$26[0] === "op_RangeStep") {
    $target$$97 = 11;
  } else if (matchValue$$26[0] === "op_PipeRight") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 12;
          f$$4 = matchValue$$26[1].tail.head;
          x$$34 = matchValue$$26[1].head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_PipeLeft") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 12;
          f$$4 = matchValue$$26[1].head;
          x$$34 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_PipeRight2") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail != null) {
          if (matchValue$$26[1].tail.tail.tail.tail == null) {
            $target$$97 = 13;
            f$$5 = matchValue$$26[1].tail.tail.head;
            x$$35 = matchValue$$26[1].head;
            y$$3 = matchValue$$26[1].tail.head;
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
            $target$$97 = 50;
          } else {
            $target$$97 = 51;
          }
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_PipeLeft2") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail != null) {
          if (matchValue$$26[1].tail.tail.tail.tail == null) {
            $target$$97 = 13;
            f$$5 = matchValue$$26[1].head;
            x$$35 = matchValue$$26[1].tail.head;
            y$$3 = matchValue$$26[1].tail.tail.head;
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
            $target$$97 = 50;
          } else {
            $target$$97 = 51;
          }
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_PipeRight3") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail != null) {
          if (matchValue$$26[1].tail.tail.tail.tail != null) {
            if (matchValue$$26[1].tail.tail.tail.tail.tail == null) {
              $target$$97 = 14;
              f$$6 = matchValue$$26[1].tail.tail.tail.head;
              x$$36 = matchValue$$26[1].head;
              y$$4 = matchValue$$26[1].tail.head;
              z = matchValue$$26[1].tail.tail.head;
            } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
              $target$$97 = 50;
            } else {
              $target$$97 = 51;
            }
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
            $target$$97 = 50;
          } else {
            $target$$97 = 51;
          }
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_PipeLeft3") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail != null) {
          if (matchValue$$26[1].tail.tail.tail.tail != null) {
            if (matchValue$$26[1].tail.tail.tail.tail.tail == null) {
              $target$$97 = 14;
              f$$6 = matchValue$$26[1].head;
              x$$36 = matchValue$$26[1].tail.head;
              y$$4 = matchValue$$26[1].tail.tail.head;
              z = matchValue$$26[1].tail.tail.tail.head;
            } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
              $target$$97 = 50;
            } else {
              $target$$97 = 51;
            }
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
            $target$$97 = 50;
          } else {
            $target$$97 = 51;
          }
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_ComposeRight") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 15;
          f1$$1 = matchValue$$26[1].head;
          f2$$1 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_ComposeLeft") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 16;
          f1$$2 = matchValue$$26[1].tail.head;
          f2$$2 = matchValue$$26[1].head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "PrintFormatToString") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "PrintFormatToStringThen") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "PrintFormat") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "PrintFormatLine") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "PrintFormatThen") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "PrintFormatToStringThenFail") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "PrintFormatToStringBuilder") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "PrintFormatToStringBuilderThen") {
    $target$$97 = 17;
  } else if (matchValue$$26[0] === "Failure") {
    $target$$97 = 18;
  } else if (matchValue$$26[0] === "FailurePattern") {
    $target$$97 = 18;
  } else if (matchValue$$26[0] === "Lock") {
    $target$$97 = 18;
  } else if (matchValue$$26[0] === "NullArg") {
    $target$$97 = 18;
  } else if (matchValue$$26[0] === "FailWith") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 19;
        msg$$1 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "InvalidOp") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 19;
        msg$$1 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "InvalidArg") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 20;
          argName = matchValue$$26[1].head;
          msg$$2 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Raise") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 21;
        arg$$10 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Reraise") {
    $target$$97 = 22;
  } else if (matchValue$$26[0] === "Pow") {
    $target$$97 = 23;
  } else if (matchValue$$26[0] === "PowInteger") {
    $target$$97 = 23;
  } else if (matchValue$$26[0] === "op_Exponentiation") {
    $target$$97 = 23;
  } else if (matchValue$$26[0] === "Ceil") {
    $target$$97 = 24;
  } else if (matchValue$$26[0] === "Ceiling") {
    $target$$97 = 24;
  } else if (matchValue$$26[0] === "Log") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 25;
          arg1 = matchValue$$26[1].head;
          arg2 = matchValue$$26[1].tail.head;
        } else {
          $target$$97 = 27;
        }
      } else {
        $target$$97 = 27;
      }
    } else {
      $target$$97 = 27;
    }
  } else if (matchValue$$26[0] === "Abs") {
    $target$$97 = 26;
  } else if (matchValue$$26[0] === "Acos") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Asin") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Atan") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Atan2") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Cos") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Exp") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Floor") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Log10") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Sin") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Sqrt") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Tan") {
    $target$$97 = 27;
  } else if (matchValue$$26[0] === "Round") {
    $target$$97 = 28;
  } else if (matchValue$$26[0] === "Sign") {
    $target$$97 = 29;
  } else if (matchValue$$26[0] === "Infinity") {
    $target$$97 = 30;
  } else if (matchValue$$26[0] === "InfinitySingle") {
    $target$$97 = 30;
  } else if (matchValue$$26[0] === "NaN") {
    $target$$97 = 31;
  } else if (matchValue$$26[0] === "NaNSingle") {
    $target$$97 = 31;
  } else if (matchValue$$26[0] === "Fst") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 32;
        tup = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Snd") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 33;
        tup$$1 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_Dereference") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 34;
        arg$$11 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_ColonEquals") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 35;
          o = matchValue$$26[1].head;
          v$$5 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Ref") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 36;
        arg$$12 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Increment") {
    $target$$97 = 37;
  } else if (matchValue$$26[0] === "Decrement") {
    $target$$97 = 37;
  } else if (matchValue$$26[0] === "op_Append") {
    $target$$97 = 38;
  } else if (matchValue$$26[0] === "op_Inequality") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 39;
          left$$22 = matchValue$$26[1].head;
          right$$21 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Neq") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 39;
          left$$22 = matchValue$$26[1].head;
          right$$21 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_Equality") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 40;
          left$$23 = matchValue$$26[1].head;
          right$$22 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Eq") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 40;
          left$$23 = matchValue$$26[1].head;
          right$$22 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "IsNull") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 41;
        arg$$13 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Hash") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 42;
        arg$$14 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Compare") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 43;
          left$$24 = matchValue$$26[1].head;
          right$$23 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_LessThan") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 44;
          left$$25 = matchValue$$26[1].head;
          right$$24 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Lt") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 44;
          left$$25 = matchValue$$26[1].head;
          right$$24 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_LessThanOrEqual") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 45;
          left$$26 = matchValue$$26[1].head;
          right$$25 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Lte") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 45;
          left$$26 = matchValue$$26[1].head;
          right$$25 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_GreaterThan") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 46;
          left$$27 = matchValue$$26[1].head;
          right$$26 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Gt") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 46;
          left$$27 = matchValue$$26[1].head;
          right$$26 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "op_GreaterThanOrEqual") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 47;
          left$$28 = matchValue$$26[1].head;
          right$$27 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Gte") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail != null) {
        if (matchValue$$26[1].tail.tail.tail == null) {
          $target$$97 = 47;
          left$$28 = matchValue$$26[1].head;
          right$$27 = matchValue$$26[1].tail.head;
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
          $target$$97 = 50;
        } else {
          $target$$97 = 51;
        }
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if (matchValue$$26[0] === "Min") {
    $target$$97 = 48;
    meth$$4 = matchValue$$26[0];
  } else if (matchValue$$26[0] === "Max") {
    $target$$97 = 48;
    meth$$4 = matchValue$$26[0];
  } else if (matchValue$$26[0] === "Not") {
    if (matchValue$$26[1].tail != null) {
      if (matchValue$$26[1].tail.tail == null) {
        $target$$97 = 49;
        operand$$3 = matchValue$$26[1].head;
      } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
        $target$$97 = 50;
      } else {
        $target$$97 = 51;
      }
    } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
      $target$$97 = 50;
    } else {
      $target$$97 = 51;
    }
  } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(_Transforms.Operators$$$standardSet, matchValue$$26[0]) != null) {
    $target$$97 = 50;
  } else {
    $target$$97 = 51;
  }

  switch ($target$$97) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Option", "defaultArg", t$$52, args$$35, i$$9.SignatureArgTypes, null, null, null, r$$33);
      }

    case 1:
      {
        return (0, _Transforms.AST$$$makeCoreRef)(t$$52, "singleton", "AsyncBuilder");
      }

    case 2:
      {
        return new _AST.Expr(2, "TypeCast", arg$$7, t$$52);
      }

    case 3:
      {
        return new _AST.Expr(2, "TypeCast", arg$$8, new _AST.Type(2, "Unit"));
      }

    case 4:
      {
        return toInt(com$$32, ctx$$19, r$$33, false, t$$52, args$$35);
      }

    case 5:
      {
        return toFloat(com$$32, ctx$$19, r$$33, t$$52, args$$35);
      }

    case 6:
      {
        return toChar((0, _List.head)(args$$35));
      }

    case 7:
      {
        return toString(com$$32, ctx$$19, r$$33, args$$35);
      }

    case 8:
      {
        return toSeq(t$$52, xs$$6);
      }

    case 9:
      {
        return makeDictionary(com$$32, r$$33, t$$52, arg$$9);
      }

    case 10:
      {
        return makeSet(com$$32, r$$33, t$$52, "OfSeq", args$$35, Helpers$$$genArg(com$$32, ctx$$19, r$$33, 0, i$$9.GenericArgs));
      }

    case 11:
      {
        const genArg$$12 = Helpers$$$genArg(com$$32, ctx$$19, r$$33, 0, i$$9.GenericArgs);

        const addStep = function addStep(args$$38) {
          var $target$$98, first, last;

          if (args$$38.tail != null) {
            if (args$$38.tail.tail != null) {
              if (args$$38.tail.tail.tail == null) {
                $target$$98 = 0;
                first = args$$38.head;
                last = args$$38.tail.head;
              } else {
                $target$$98 = 1;
              }
            } else {
              $target$$98 = 1;
            }
          } else {
            $target$$98 = 1;
          }

          switch ($target$$98) {
            case 0:
              {
                return (0, _Types.L)(first, (0, _Types.L)(getOne(com$$32, ctx$$19, genArg$$12), (0, _Types.L)(last, (0, _Types.L)())));
              }

            case 1:
              {
                return args$$38;
              }
          }
        };

        const patternInput$$4 = genArg$$12.tag === 4 ? ["rangeChar", args$$35] : (activePatternResult66983 = $007CBuiltin$007C_$007C(genArg$$12), activePatternResult66983 != null ? activePatternResult66983.tag === 5 ? ["rangeLong", (0, _List.append)(addStep(args$$35), (0, _Types.L)((0, _Transforms.AST$$$makeBoolConst)(false), (0, _Types.L)()))] : (activePatternResult66982 = $007CBuiltin$007C_$007C(genArg$$12), activePatternResult66982 != null ? activePatternResult66982.tag === 6 ? ["rangeLong", (0, _List.append)(addStep(args$$35), (0, _Types.L)((0, _Transforms.AST$$$makeBoolConst)(true), (0, _Types.L)()))] : ["rangeNumber", addStep(args$$35)] : ["rangeNumber", addStep(args$$35)]) : (activePatternResult66982 = $007CBuiltin$007C_$007C(genArg$$12), activePatternResult66982 != null ? activePatternResult66982.tag === 6 ? ["rangeLong", (0, _List.append)(addStep(args$$35), (0, _Types.L)((0, _Transforms.AST$$$makeBoolConst)(true), (0, _Types.L)()))] : ["rangeNumber", addStep(args$$35)] : ["rangeNumber", addStep(args$$35)]));
        return Helper$$$CoreCall$$39739A92("Seq", patternInput$$4[0], t$$52, patternInput$$4[1], i$$9.SignatureArgTypes, null, null, null, r$$33);
      }

    case 12:
      {
        return curriedApply(r$$33, t$$52, f$$4, (0, _Types.L)(x$$34, (0, _Types.L)()));
      }

    case 13:
      {
        return curriedApply(r$$33, t$$52, f$$5, (0, _Types.L)(x$$35, (0, _Types.L)(y$$3, (0, _Types.L)())));
      }

    case 14:
      {
        return curriedApply(r$$33, t$$52, f$$6, (0, _Types.L)(x$$36, (0, _Types.L)(y$$4, (0, _Types.L)(z, (0, _Types.L)()))));
      }

    case 15:
      {
        return compose(com$$32, r$$33, t$$52, f1$$1, f2$$1);
      }

    case 16:
      {
        return compose(com$$32, r$$33, t$$52, f1$$2, f2$$2);
      }

    case 17:
      {
        return fsFormat(com$$32, ctx$$19, r$$33, t$$52, i$$9, thisArg$$8, args$$35);
      }

    case 18:
      {
        return fsharpModule(com$$32, ctx$$19, r$$33, t$$52, i$$9, thisArg$$8, args$$35);
      }

    case 19:
      {
        return new _AST.Expr(11, "Throw", Helpers$$$error(msg$$1), t$$52, r$$33);
      }

    case 20:
      {
        const msg$$3 = Helpers$$$add(Helpers$$$add(msg$$2, Helpers$$$s("\\nParameter name: ")), argName);
        return new _AST.Expr(11, "Throw", Helpers$$$error(msg$$3), t$$52, r$$33);
      }

    case 21:
      {
        return new _AST.Expr(11, "Throw", arg$$10, t$$52, r$$33);
      }

    case 22:
      {
        if (ctx$$19.CaughtException == null) {
          (0, _Transforms.Log$$$addError)(com$$32, ctx$$19.InlinePath, r$$33, "`reraise` used in context where caught exception is not available, please report");
          return new _AST.Expr(11, "Throw", Helpers$$$error(Helpers$$$s("")), t$$52, r$$33);
        } else {
          const ex = ctx$$19.CaughtException;
          return new _AST.Expr(11, "Throw", new _AST.Expr(1, "IdentExpr", ex), t$$52, r$$33);
        }
      }

    case 23:
      {
        return math(r$$33, t$$52, args$$35, i$$9.SignatureArgTypes, "pow");
      }

    case 24:
      {
        return math(r$$33, t$$52, args$$35, i$$9.SignatureArgTypes, "ceil");
      }

    case 25:
      {
        const dividend = math(null, t$$52, (0, _Types.L)(arg1, (0, _Types.L)()), (0, _List.take)(1, i$$9.SignatureArgTypes), "log");
        const divisor = math(null, t$$52, (0, _Types.L)(arg2, (0, _Types.L)()), (0, _List.skip)(1, i$$9.SignatureArgTypes), "log");
        return (0, _Transforms.AST$$$makeBinOp)(r$$33, t$$52, dividend, divisor, new _AST2.BinaryOperator(14, "BinaryDivide"));
      }

    case 26:
      {
        const matchValue$$28 = Helpers$$$resolveArgTypes(i$$9.SignatureArgTypes, i$$9.GenericArgs);
        var $target$$99, bt$$3;

        if (matchValue$$28.tail != null) {
          const activePatternResult67000 = $007CBuiltin$007C_$007C(matchValue$$28.head);

          if (activePatternResult67000 != null) {
            if (activePatternResult67000.tag === 5) {
              $target$$99 = 0;
              bt$$3 = activePatternResult67000;
            } else if (activePatternResult67000.tag === 7) {
              $target$$99 = 0;
              bt$$3 = activePatternResult67000;
            } else {
              $target$$99 = 1;
            }
          } else {
            $target$$99 = 1;
          }
        } else {
          $target$$99 = 1;
        }

        switch ($target$$99) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92(coreModFor(bt$$3), "abs", t$$52, args$$35, i$$9.SignatureArgTypes, thisArg$$8, null, null, r$$33);
            }

          case 1:
            {
              return math(r$$33, t$$52, args$$35, i$$9.SignatureArgTypes, i$$9.CompiledName);
            }
        }
      }

    case 27:
      {
        return math(r$$33, t$$52, args$$35, i$$9.SignatureArgTypes, i$$9.CompiledName);
      }

    case 28:
      {
        return Helper$$$CoreCall$$39739A92("Util", "round", t$$52, args$$35, i$$9.SignatureArgTypes, thisArg$$8, null, null, r$$33);
      }

    case 29:
      {
        const args$$40 = (0, _Types.L)(toFloat(com$$32, ctx$$19, r$$33, t$$52, args$$35), (0, _Types.L)());
        return Helper$$$CoreCall$$39739A92("Util", "sign", t$$52, args$$40, i$$9.SignatureArgTypes, null, null, null, r$$33);
      }

    case 30:
      {
        return Helper$$$GlobalIdent$$Z788F3BB9("Number", "POSITIVE_INFINITY", t$$52, r$$33);
      }

    case 31:
      {
        return Helper$$$GlobalIdent$$Z788F3BB9("Number", "NaN", t$$52, r$$33);
      }

    case 32:
      {
        return new _AST.Expr(9, "Get", tup, new _AST.GetKind(1, "TupleGet", 0), t$$52, r$$33);
      }

    case 33:
      {
        return new _AST.Expr(9, "Get", tup$$1, new _AST.GetKind(1, "TupleGet", 1), t$$52, r$$33);
      }

    case 34:
      {
        return getReference(r$$33, t$$52, arg$$11);
      }

    case 35:
      {
        return setReference(r$$33, o, v$$5);
      }

    case 36:
      {
        return newReference(r$$33, t$$52, arg$$12);
      }

    case 37:
      {
        return Helpers$$$emitJs(r$$33, t$$52, args$$35, i$$9.CompiledName === "Increment" ? "void($0.contents++)" : "void($0.contents--)");
      }

    case 38:
      {
        return Helper$$$CoreCall$$39739A92("List", "append", t$$52, args$$35, i$$9.SignatureArgTypes, thisArg$$8, null, null, r$$33);
      }

    case 39:
      {
        return equals(com$$32, r$$33, false, left$$22, right$$21);
      }

    case 40:
      {
        return equals(com$$32, r$$33, true, left$$23, right$$22);
      }

    case 41:
      {
        return (0, _Transforms.AST$$$makeEqOp)(r$$33, arg$$13, new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", (0, _AST.Expr$$get_Type)(arg$$13))), new _AST2.BinaryOperator(0, "BinaryEqual"));
      }

    case 42:
      {
        return structuralHash(r$$33, arg$$14);
      }

    case 43:
      {
        return compare(com$$32, r$$33, left$$24, right$$23);
      }

    case 44:
      {
        return compareIf(com$$32, r$$33, left$$25, right$$24, new _AST2.BinaryOperator(4, "BinaryLess"));
      }

    case 45:
      {
        return compareIf(com$$32, r$$33, left$$26, right$$25, new _AST2.BinaryOperator(5, "BinaryLessOrEqual"));
      }

    case 46:
      {
        return compareIf(com$$32, r$$33, left$$27, right$$26, new _AST2.BinaryOperator(6, "BinaryGreater"));
      }

    case 47:
      {
        return compareIf(com$$32, r$$33, left$$28, right$$27, new _AST2.BinaryOperator(7, "BinaryGreaterOrEqual"));
      }

    case 48:
      {
        const f$$7 = makeComparerFunction(com$$32, t$$52);
        return Helper$$$CoreCall$$39739A92("Util", (0, _Prelude.Naming$$$lowerFirst)(meth$$4), t$$52, (0, _Types.L)(f$$7, args$$35), i$$9.SignatureArgTypes, null, null, null, r$$33);
      }

    case 49:
      {
        return (0, _Transforms.AST$$$makeUnOp)(r$$33, t$$52, operand$$3, new _AST2.UnaryOperator(2, "UnaryNot"));
      }

    case 50:
      {
        return applyOp(com$$32, ctx$$19, r$$33, t$$52, i$$9.CompiledName, args$$35, i$$9.SignatureArgTypes, i$$9.GenericArgs);
      }

    case 51:
      {
        if (matchValue$$26[0] === "TypeOf") {
          return makeTypeInfo(r$$33, Helpers$$$genArg(com$$32, ctx$$19, r$$33, 0, i$$9.GenericArgs));
        } else if (matchValue$$26[0] === "TypeDefOf") {
          return makeTypeDefinitionInfo(r$$33, Helpers$$$genArg(com$$32, ctx$$19, r$$33, 0, i$$9.GenericArgs));
        } else {
          return null;
        }
      }
  }
}

function chars(com$$34, ctx$$20, r$$37, t$$58, i$$10, _arg1$$16, args$$41) {
  const icall = function icall(r$$38, t$$59, args$$42, argTypes$$18, memb$$4) {
    const matchValue$$29 = [args$$42, argTypes$$18];
    var $target$$100, argTypes$$19, args$$43, thisArg$$9;

    if (matchValue$$29[0].tail != null) {
      if (matchValue$$29[1].tail != null) {
        $target$$100 = 0;
        argTypes$$19 = matchValue$$29[1].tail;
        args$$43 = matchValue$$29[0].tail;
        thisArg$$9 = matchValue$$29[0].head;
      } else {
        $target$$100 = 1;
      }
    } else {
      $target$$100 = 1;
    }

    switch ($target$$100) {
      case 0:
        {
          const info$$3 = (0, _Transforms.AST$$$argInfo)(thisArg$$9, args$$43, new _AST.SignatureKind(0, "Typed", argTypes$$19));
          return (0, _Transforms.AST$$$instanceCall)(r$$38, t$$59, info$$3, (0, _Transforms.AST$$$makeStrConst)(memb$$4));
        }

      case 1:
        {
          return null;
        }
    }
  };

  var $target$$101;

  if (i$$10.CompiledName === "ToUpper") {
    $target$$101 = 0;
  } else if (i$$10.CompiledName === "ToUpperInvariant") {
    $target$$101 = 1;
  } else if (i$$10.CompiledName === "ToLower") {
    $target$$101 = 2;
  } else if (i$$10.CompiledName === "ToLowerInvariant") {
    $target$$101 = 3;
  } else if (i$$10.CompiledName === "ToString") {
    $target$$101 = 4;
  } else if (i$$10.CompiledName === "GetUnicodeCategory") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsControl") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsDigit") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsLetter") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsLetterOrDigit") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsUpper") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsLower") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsNumber") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsPunctuation") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsSeparator") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsSymbol") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsWhiteSpace") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsHighSurrogate") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsLowSurrogate") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsSurrogate") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "IsSurrogatePair") {
    $target$$101 = 5;
  } else if (i$$10.CompiledName === "Parse") {
    $target$$101 = 5;
  } else {
    $target$$101 = 6;
  }

  switch ($target$$101) {
    case 0:
      {
        return icall(r$$37, t$$58, args$$41, i$$10.SignatureArgTypes, "toLocaleUpperCase");
      }

    case 1:
      {
        return icall(r$$37, t$$58, args$$41, i$$10.SignatureArgTypes, "toUpperCase");
      }

    case 2:
      {
        return icall(r$$37, t$$58, args$$41, i$$10.SignatureArgTypes, "toLocaleLowerCase");
      }

    case 3:
      {
        return icall(r$$37, t$$58, args$$41, i$$10.SignatureArgTypes, "toLowerCase");
      }

    case 4:
      {
        return toString(com$$34, ctx$$20, r$$37, args$$41);
      }

    case 5:
      {
        const methName$$5 = (0, _Prelude.Naming$$$lowerFirst)(i$$10.CompiledName);
        return Helper$$$CoreCall$$39739A92("Char", methName$$5, t$$58, args$$41, i$$10.SignatureArgTypes, null, null, null, r$$37);
      }

    case 6:
      {
        return null;
      }
  }
}

const implementedStringFunctions = (0, _Set.ofSeq)(["Compare", "CompareTo", "EndsWith", "Format", "IndexOfAny", "Insert", "IsNullOrEmpty", "IsNullOrWhiteSpace", "PadLeft", "PadRight", "Remove", "Replace"], {
  Compare: _Util.comparePrimitives
});
exports.implementedStringFunctions = implementedStringFunctions;

function strings(com$$35, ctx$$21, r$$39, t$$60, i$$11, thisArg$$10, args$$44) {
  const join = function join(nonDelimiterArgType, args$$45) {
    let hasSpread$$1;
    const matchValue$$31 = [i$$11.Spread, nonDelimiterArgType];
    var $target$$102;

    if (matchValue$$31[0].tag === 1) {
      $target$$102 = 0;
    } else {
      const activePatternResult67164 = $007CEntFullName$007C_$007C(matchValue$$31[1]);

      if (activePatternResult67164 != null) {
        if (activePatternResult67164 === "System.Collections.Generic.IEnumerable`1") {
          $target$$102 = 1;
        } else {
          $target$$102 = 2;
        }
      } else {
        $target$$102 = 2;
      }
    }

    switch ($target$$102) {
      case 0:
        {
          hasSpread$$1 = true;
          break;
        }

      case 1:
        {
          hasSpread$$1 = true;
          break;
        }

      case 2:
        {
          hasSpread$$1 = false;
          break;
        }
    }

    return Helper$$$CoreCall$$39739A92("String", "join", t$$60, args$$45, null, null, null, hasSpread$$1, r$$39);
  };

  const matchValue$$32 = [i$$11.CompiledName, thisArg$$10, args$$44];

  var $target$$103, fstArg, c, c$$1, x$$37, y$$5, kind$$5, x$$38, y$$6, arg$$15, c$$2, _str, c$$3, _comp, _str$$1, c$$4, args$$46, c$$5, methName$$6;

  if (matchValue$$32[0] === ".ctor") {
    if (matchValue$$32[2].tail != null) {
      $target$$103 = 0;
      fstArg = matchValue$$32[2].head;
    } else {
      const activePatternResult67222 = $007CReplaceName$007C_$007C((0, _Types.L)(["Substring", "substr"], (0, _Types.L)(["ToUpper", "toLocaleUpperCase"], (0, _Types.L)(["ToUpperInvariant", "toUpperCase"], (0, _Types.L)(["ToLower", "toLocaleLowerCase"], (0, _Types.L)(["ToLowerInvariant", "toLowerCase"], (0, _Types.L)()))))), matchValue$$32[0]);

      if (activePatternResult67222 != null) {
        if (matchValue$$32[1] != null) {
          $target$$103 = 8;
          args$$46 = matchValue$$32[2];
          c$$5 = matchValue$$32[1];
          methName$$6 = activePatternResult67222;
        } else {
          $target$$103 = 9;
        }
      } else {
        $target$$103 = 9;
      }
    }
  } else if (matchValue$$32[0] === "get_Length") {
    if (matchValue$$32[1] != null) {
      $target$$103 = 1;
      c = matchValue$$32[1];
    } else {
      $target$$103 = 9;
    }
  } else if (matchValue$$32[0] === "get_Chars") {
    if (matchValue$$32[1] != null) {
      $target$$103 = 2;
      c$$1 = matchValue$$32[1];
    } else {
      $target$$103 = 9;
    }
  } else if (matchValue$$32[0] === "Equals") {
    if (matchValue$$32[1] == null) {
      if (matchValue$$32[2].tail != null) {
        if (matchValue$$32[2].tail.tail != null) {
          if (matchValue$$32[2].tail.tail.tail != null) {
            if (matchValue$$32[2].tail.tail.tail.tail == null) {
              $target$$103 = 4;
              kind$$5 = matchValue$$32[2].tail.tail.head;
              x$$38 = matchValue$$32[2].head;
              y$$6 = matchValue$$32[2].tail.head;
            } else {
              $target$$103 = 9;
            }
          } else {
            $target$$103 = 3;
            x$$37 = matchValue$$32[2].head;
            y$$5 = matchValue$$32[2].tail.head;
          }
        } else {
          $target$$103 = 9;
        }
      } else {
        $target$$103 = 9;
      }
    } else if (matchValue$$32[2].tail != null) {
      if (matchValue$$32[2].tail.tail != null) {
        if (matchValue$$32[2].tail.tail.tail == null) {
          $target$$103 = 4;
          kind$$5 = matchValue$$32[2].tail.head;
          x$$38 = matchValue$$32[1];
          y$$6 = matchValue$$32[2].head;
        } else {
          const activePatternResult67223 = $007CReplaceName$007C_$007C((0, _Types.L)(["Substring", "substr"], (0, _Types.L)(["ToUpper", "toLocaleUpperCase"], (0, _Types.L)(["ToUpperInvariant", "toUpperCase"], (0, _Types.L)(["ToLower", "toLocaleLowerCase"], (0, _Types.L)(["ToLowerInvariant", "toLowerCase"], (0, _Types.L)()))))), matchValue$$32[0]);

          if (activePatternResult67223 != null) {
            $target$$103 = 8;
            args$$46 = matchValue$$32[2];
            c$$5 = matchValue$$32[1];
            methName$$6 = activePatternResult67223;
          } else {
            $target$$103 = 9;
          }
        }
      } else {
        $target$$103 = 3;
        x$$37 = matchValue$$32[1];
        y$$5 = matchValue$$32[2].head;
      }
    } else {
      const activePatternResult67224 = $007CReplaceName$007C_$007C((0, _Types.L)(["Substring", "substr"], (0, _Types.L)(["ToUpper", "toLocaleUpperCase"], (0, _Types.L)(["ToUpperInvariant", "toUpperCase"], (0, _Types.L)(["ToLower", "toLocaleLowerCase"], (0, _Types.L)(["ToLowerInvariant", "toLowerCase"], (0, _Types.L)()))))), matchValue$$32[0]);

      if (activePatternResult67224 != null) {
        $target$$103 = 8;
        args$$46 = matchValue$$32[2];
        c$$5 = matchValue$$32[1];
        methName$$6 = activePatternResult67224;
      } else {
        $target$$103 = 9;
      }
    }
  } else if (matchValue$$32[0] === "Contains") {
    if (matchValue$$32[1] != null) {
      if (matchValue$$32[2].tail != null) {
        $target$$103 = 5;
        arg$$15 = matchValue$$32[2].head;
        c$$2 = matchValue$$32[1];
      } else {
        const activePatternResult67225 = $007CReplaceName$007C_$007C((0, _Types.L)(["Substring", "substr"], (0, _Types.L)(["ToUpper", "toLocaleUpperCase"], (0, _Types.L)(["ToUpperInvariant", "toUpperCase"], (0, _Types.L)(["ToLower", "toLocaleLowerCase"], (0, _Types.L)(["ToLowerInvariant", "toLowerCase"], (0, _Types.L)()))))), matchValue$$32[0]);

        if (activePatternResult67225 != null) {
          $target$$103 = 8;
          args$$46 = matchValue$$32[2];
          c$$5 = matchValue$$32[1];
          methName$$6 = activePatternResult67225;
        } else {
          $target$$103 = 9;
        }
      }
    } else {
      $target$$103 = 9;
    }
  } else if (matchValue$$32[0] === "StartsWith") {
    if (matchValue$$32[1] != null) {
      if (matchValue$$32[2].tail != null) {
        if (matchValue$$32[2].tail.tail != null) {
          if (matchValue$$32[2].tail.tail.tail == null) {
            $target$$103 = 7;
            _comp = matchValue$$32[2].tail.head;
            _str$$1 = matchValue$$32[2].head;
            c$$4 = matchValue$$32[1];
          } else {
            const activePatternResult67226 = $007CReplaceName$007C_$007C((0, _Types.L)(["Substring", "substr"], (0, _Types.L)(["ToUpper", "toLocaleUpperCase"], (0, _Types.L)(["ToUpperInvariant", "toUpperCase"], (0, _Types.L)(["ToLower", "toLocaleLowerCase"], (0, _Types.L)(["ToLowerInvariant", "toLowerCase"], (0, _Types.L)()))))), matchValue$$32[0]);

            if (activePatternResult67226 != null) {
              $target$$103 = 8;
              args$$46 = matchValue$$32[2];
              c$$5 = matchValue$$32[1];
              methName$$6 = activePatternResult67226;
            } else {
              $target$$103 = 9;
            }
          }
        } else {
          $target$$103 = 6;
          _str = matchValue$$32[2].head;
          c$$3 = matchValue$$32[1];
        }
      } else {
        const activePatternResult67227 = $007CReplaceName$007C_$007C((0, _Types.L)(["Substring", "substr"], (0, _Types.L)(["ToUpper", "toLocaleUpperCase"], (0, _Types.L)(["ToUpperInvariant", "toUpperCase"], (0, _Types.L)(["ToLower", "toLocaleLowerCase"], (0, _Types.L)(["ToLowerInvariant", "toLowerCase"], (0, _Types.L)()))))), matchValue$$32[0]);

        if (activePatternResult67227 != null) {
          $target$$103 = 8;
          args$$46 = matchValue$$32[2];
          c$$5 = matchValue$$32[1];
          methName$$6 = activePatternResult67227;
        } else {
          $target$$103 = 9;
        }
      }
    } else {
      $target$$103 = 9;
    }
  } else {
    const activePatternResult67228 = $007CReplaceName$007C_$007C((0, _Types.L)(["Substring", "substr"], (0, _Types.L)(["ToUpper", "toLocaleUpperCase"], (0, _Types.L)(["ToUpperInvariant", "toUpperCase"], (0, _Types.L)(["ToLower", "toLocaleLowerCase"], (0, _Types.L)(["ToLowerInvariant", "toLowerCase"], (0, _Types.L)()))))), matchValue$$32[0]);

    if (activePatternResult67228 != null) {
      if (matchValue$$32[1] != null) {
        $target$$103 = 8;
        args$$46 = matchValue$$32[2];
        c$$5 = matchValue$$32[1];
        methName$$6 = activePatternResult67228;
      } else {
        $target$$103 = 9;
      }
    } else {
      $target$$103 = 9;
    }
  }

  switch ($target$$103) {
    case 0:
      {
        const matchValue$$33 = (0, _AST.Expr$$get_Type)(fstArg);

        switch (matchValue$$33.tag) {
          case 4:
            {
              var $target$$104;

              if (args$$44.tail != null) {
                if (args$$44.tail.tail != null) {
                  if (args$$44.tail.tail.tail == null) {
                    $target$$104 = 0;
                  } else {
                    $target$$104 = 1;
                  }
                } else {
                  $target$$104 = 1;
                }
              } else {
                $target$$104 = 1;
              }

              switch ($target$$104) {
                case 0:
                  {
                    return Helpers$$$emitJs(r$$39, t$$60, args$$44, "Array($1 + 1).join($0)");
                  }

                case 1:
                  {
                    return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$35, ctx$$21.InlinePath, r$$39, "Unexpected arguments in System.String constructor.");
                  }
              }
            }

          case 11:
            {
              var $target$$105;

              if (args$$44.tail != null) {
                if (args$$44.tail.tail != null) {
                  if (args$$44.tail.tail.tail != null) {
                    if (args$$44.tail.tail.tail.tail == null) {
                      $target$$105 = 1;
                    } else {
                      $target$$105 = 2;
                    }
                  } else {
                    $target$$105 = 2;
                  }
                } else {
                  $target$$105 = 0;
                }
              } else {
                $target$$105 = 2;
              }

              switch ($target$$105) {
                case 0:
                  {
                    return Helpers$$$emitJs(r$$39, t$$60, args$$44, "$0.join('')");
                  }

                case 1:
                  {
                    return Helpers$$$emitJs(r$$39, t$$60, args$$44, "$0.join('').substr($1, $2)");
                  }

                case 2:
                  {
                    return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$35, ctx$$21.InlinePath, r$$39, "Unexpected arguments in System.String constructor.");
                  }
              }
            }

          default:
            {
              return fsFormat(com$$35, ctx$$21, r$$39, t$$60, i$$11, thisArg$$10, args$$44);
            }
        }
      }

    case 1:
      {
        return (0, _Transforms.AST$$$get)(r$$39, t$$60, c, "length");
      }

    case 2:
      {
        return Helper$$$CoreCall$$39739A92("String", "getCharAtIndex", t$$60, args$$44, i$$11.SignatureArgTypes, c$$1, null, null, r$$39);
      }

    case 3:
      {
        return (0, _Transforms.AST$$$makeEqOp)(r$$39, x$$37, y$$5, new _AST2.BinaryOperator(2, "BinaryEqualStrict"));
      }

    case 4:
      {
        const left$$29 = Helper$$$CoreCall$$39739A92("String", "compare", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(x$$38, (0, _Types.L)(y$$6, (0, _Types.L)(kind$$5, (0, _Types.L)()))));
        return (0, _Transforms.AST$$$makeEqOp)(r$$39, left$$29, (0, _Transforms.AST$$$makeIntConst)(0), new _AST2.BinaryOperator(2, "BinaryEqualStrict"));
      }

    case 5:
      {
        if ((0, _List.length)(args$$44) > 1) {
          (0, _Transforms.Log$$$addWarning)(com$$35, ctx$$21.InlinePath, r$$39, "String.Contains: second argument is ignored");
        }

        const left$$30 = Helper$$$InstanceCall$$9FFCF9C(c$$2, "indexOf", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(arg$$15, (0, _Types.L)()));
        return (0, _Transforms.AST$$$makeEqOp)(r$$39, left$$30, (0, _Transforms.AST$$$makeIntConst)(0), new _AST2.BinaryOperator(7, "BinaryGreaterOrEqual"));
      }

    case 6:
      {
        const left$$31 = Helper$$$InstanceCall$$9FFCF9C(c$$3, "indexOf", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), args$$44);
        return (0, _Transforms.AST$$$makeEqOp)(r$$39, left$$31, (0, _Transforms.AST$$$makeIntConst)(0), new _AST2.BinaryOperator(2, "BinaryEqualStrict"));
      }

    case 7:
      {
        return Helper$$$CoreCall$$39739A92("String", "startsWith", t$$60, args$$44, i$$11.SignatureArgTypes, c$$4, null, null, r$$39);
      }

    case 8:
      {
        return Helper$$$InstanceCall$$9FFCF9C(c$$5, methName$$6, t$$60, args$$46, i$$11.SignatureArgTypes, r$$39);
      }

    case 9:
      {
        var $target$$106, c$$6, c$$7, c$$8, c$$9, _delimiter, _parts, args$$49, thisArg$$11;

        if (matchValue$$32[0] === "IndexOf") {
          if (matchValue$$32[1] != null) {
            $target$$106 = 0;
            c$$6 = matchValue$$32[1];
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "LastIndexOf") {
          if (matchValue$$32[1] != null) {
            $target$$106 = 0;
            c$$6 = matchValue$$32[1];
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "Trim") {
          if (matchValue$$32[1] != null) {
            $target$$106 = 1;
            c$$7 = matchValue$$32[1];
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "TrimStart") {
          if (matchValue$$32[1] != null) {
            $target$$106 = 1;
            c$$7 = matchValue$$32[1];
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "TrimEnd") {
          if (matchValue$$32[1] != null) {
            $target$$106 = 1;
            c$$7 = matchValue$$32[1];
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "ToCharArray") {
          if (matchValue$$32[1] != null) {
            $target$$106 = 2;
            c$$8 = matchValue$$32[1];
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "Split") {
          if (matchValue$$32[1] != null) {
            $target$$106 = 3;
            c$$9 = matchValue$$32[1];
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "Join") {
          if (matchValue$$32[1] == null) {
            if (matchValue$$32[2].tail != null) {
              if (matchValue$$32[2].tail.tail != null) {
                if (matchValue$$32[2].tail.tail.tail != null) {
                  if ((0, _AST.Expr$$get_Type)(matchValue$$32[2].tail.tail.head).tag === 7) {
                    if (matchValue$$32[2].tail.tail.tail.tail != null) {
                      if ((0, _AST.Expr$$get_Type)(matchValue$$32[2].tail.tail.tail.head).tag === 7) {
                        if (matchValue$$32[2].tail.tail.tail.tail.tail == null) {
                          $target$$106 = 4;
                          _delimiter = matchValue$$32[2].head;
                          _parts = matchValue$$32[2].tail.head;
                        } else {
                          $target$$106 = 5;
                        }
                      } else {
                        $target$$106 = 5;
                      }
                    } else {
                      $target$$106 = 5;
                    }
                  } else {
                    $target$$106 = 5;
                  }
                } else {
                  $target$$106 = 5;
                }
              } else {
                $target$$106 = 5;
              }
            } else {
              $target$$106 = 5;
            }
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "Concat") {
          if (matchValue$$32[1] == null) {
            $target$$106 = 6;
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if (matchValue$$32[0] === "CompareOrdinal") {
          if (matchValue$$32[1] == null) {
            $target$$106 = 7;
          } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
            $target$$106 = 8;
            args$$49 = matchValue$$32[2];
            thisArg$$11 = matchValue$$32[1];
          } else {
            $target$$106 = 9;
          }
        } else if ((0, _Prelude.Patterns$$$$007CSetContains$007C_$007C)(implementedStringFunctions, matchValue$$32[0]) != null) {
          $target$$106 = 8;
          args$$49 = matchValue$$32[2];
          thisArg$$11 = matchValue$$32[1];
        } else {
          $target$$106 = 9;
        }

        switch ($target$$106) {
          case 0:
            {
              var $target$$107;

              if (args$$44.tail != null) {
                const activePatternResult67182 = (0, _AST.Expr$$get_Type)(args$$44.head);

                if (activePatternResult67182.tag === 4) {
                  if (args$$44.tail.tail != null) {
                    const activePatternResult67183 = (0, _AST.Expr$$get_Type)(args$$44.tail.head);

                    if (activePatternResult67183.tag === 7) {
                      if (activePatternResult67183.fields[0].tag === 4) {
                        if (args$$44.tail.tail.tail == null) {
                          $target$$107 = 0;
                        } else {
                          $target$$107 = 1;
                        }
                      } else {
                        $target$$107 = 1;
                      }
                    } else {
                      $target$$107 = 1;
                    }
                  } else {
                    $target$$107 = 0;
                  }
                } else if (activePatternResult67182.tag === 5) {
                  if (args$$44.tail.tail != null) {
                    const activePatternResult67184 = (0, _AST.Expr$$get_Type)(args$$44.tail.head);

                    if (activePatternResult67184.tag === 7) {
                      if (activePatternResult67184.fields[0].tag === 4) {
                        if (args$$44.tail.tail.tail == null) {
                          $target$$107 = 0;
                        } else {
                          $target$$107 = 1;
                        }
                      } else {
                        $target$$107 = 1;
                      }
                    } else {
                      $target$$107 = 1;
                    }
                  } else {
                    $target$$107 = 0;
                  }
                } else {
                  $target$$107 = 1;
                }
              } else {
                $target$$107 = 1;
              }

              switch ($target$$107) {
                case 0:
                  {
                    return Helper$$$InstanceCall$$9FFCF9C(c$$6, (0, _Prelude.Naming$$$lowerFirst)(i$$11.CompiledName), t$$60, args$$44, i$$11.SignatureArgTypes, r$$39);
                  }

                case 1:
                  {
                    return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$35, ctx$$21.InlinePath, r$$39, "The only extra argument accepted for String.IndexOf/LastIndexOf is startIndex.");
                  }
              }
            }

          case 1:
            {
              const methName$$7 = (0, _Prelude.Naming$$$lowerFirst)(i$$11.CompiledName);

              if (args$$44.tail != null) {
                const tail$$3 = args$$44.tail;
                const head$$3 = args$$44.head;
                let spread;
                const matchValue$$34 = [(0, _AST.Expr$$get_Type)(head$$3), tail$$3];
                var $target$$108;

                if (matchValue$$34[0].tag === 11) {
                  if (matchValue$$34[1].tail == null) {
                    $target$$108 = 0;
                  } else {
                    $target$$108 = 1;
                  }
                } else {
                  $target$$108 = 1;
                }

                switch ($target$$108) {
                  case 0:
                    {
                      spread = true;
                      break;
                    }

                  case 1:
                    {
                      spread = false;
                      break;
                    }
                }

                return Helper$$$CoreCall$$39739A92("String", methName$$7, t$$60, (0, _Types.L)(c$$7, args$$44), null, null, null, spread, r$$39);
              } else {
                return Helper$$$InstanceCall$$9FFCF9C(c$$7, methName$$7, t$$60, (0, _Types.L)(), i$$11.SignatureArgTypes, r$$39);
              }
            }

          case 2:
            {
              return stringToCharArray(t$$60, c$$8);
            }

          case 3:
            {
              var $target$$109, separator, arg1$$1, arg2$$1, args$$48;

              if (args$$44.tail != null) {
                if (args$$44.head.tag === 0) {
                  if (args$$44.head.fields[0].tag === 4) {
                    if (args$$44.tail.tail != null) {
                      if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                        if (args$$44.tail.tail.tail == null) {
                          $target$$109 = 2;
                          arg1$$1 = args$$44.head;
                          arg2$$1 = args$$44.tail.head;
                        } else {
                          $target$$109 = 3;
                          args$$48 = args$$44;
                        }
                      } else {
                        $target$$109 = 3;
                        args$$48 = args$$44;
                      }
                    } else {
                      $target$$109 = 1;
                      separator = args$$44.head;
                    }
                  } else if (args$$44.head.fields[0].tag === 5) {
                    if (args$$44.tail.tail != null) {
                      if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                        if (args$$44.tail.tail.tail == null) {
                          $target$$109 = 2;
                          arg1$$1 = args$$44.head;
                          arg2$$1 = args$$44.tail.head;
                        } else {
                          $target$$109 = 3;
                          args$$48 = args$$44;
                        }
                      } else {
                        $target$$109 = 3;
                        args$$48 = args$$44;
                      }
                    } else {
                      $target$$109 = 1;
                      separator = args$$44.head;
                    }
                  } else if (args$$44.head.fields[0].tag === 10) {
                    if (args$$44.head.fields[0].fields[0].tag === 0) {
                      if (args$$44.head.fields[0].fields[0].fields[0].tail != null) {
                        if (args$$44.head.fields[0].fields[0].fields[0].tail.tail == null) {
                          if (args$$44.tail.tail != null) {
                            if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                              if (args$$44.tail.tail.tail == null) {
                                $target$$109 = 2;
                                arg1$$1 = args$$44.head;
                                arg2$$1 = args$$44.tail.head;
                              } else {
                                $target$$109 = 3;
                                args$$48 = args$$44;
                              }
                            } else {
                              $target$$109 = 3;
                              args$$48 = args$$44;
                            }
                          } else {
                            $target$$109 = 1;
                            separator = args$$44.head.fields[0].fields[0].fields[0].head;
                          }
                        } else if (args$$44.tail.tail != null) {
                          if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                            if (args$$44.tail.tail.tail == null) {
                              $target$$109 = 2;
                              arg1$$1 = args$$44.head;
                              arg2$$1 = args$$44.tail.head;
                            } else {
                              $target$$109 = 3;
                              args$$48 = args$$44;
                            }
                          } else {
                            $target$$109 = 3;
                            args$$48 = args$$44;
                          }
                        } else {
                          $target$$109 = 3;
                          args$$48 = args$$44;
                        }
                      } else if (args$$44.tail.tail != null) {
                        if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                          if (args$$44.tail.tail.tail == null) {
                            $target$$109 = 2;
                            arg1$$1 = args$$44.head;
                            arg2$$1 = args$$44.tail.head;
                          } else {
                            $target$$109 = 3;
                            args$$48 = args$$44;
                          }
                        } else {
                          $target$$109 = 3;
                          args$$48 = args$$44;
                        }
                      } else {
                        $target$$109 = 3;
                        args$$48 = args$$44;
                      }
                    } else if (args$$44.tail.tail != null) {
                      if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                        if (args$$44.tail.tail.tail == null) {
                          $target$$109 = 2;
                          arg1$$1 = args$$44.head;
                          arg2$$1 = args$$44.tail.head;
                        } else {
                          $target$$109 = 3;
                          args$$48 = args$$44;
                        }
                      } else {
                        $target$$109 = 3;
                        args$$48 = args$$44;
                      }
                    } else {
                      $target$$109 = 3;
                      args$$48 = args$$44;
                    }
                  } else if (args$$44.tail.tail != null) {
                    if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                      if (args$$44.tail.tail.tail == null) {
                        $target$$109 = 2;
                        arg1$$1 = args$$44.head;
                        arg2$$1 = args$$44.tail.head;
                      } else {
                        $target$$109 = 3;
                        args$$48 = args$$44;
                      }
                    } else {
                      $target$$109 = 3;
                      args$$48 = args$$44;
                    }
                  } else {
                    $target$$109 = 3;
                    args$$48 = args$$44;
                  }
                } else if (args$$44.tail.tail != null) {
                  if ((0, _AST.Expr$$get_Type)(args$$44.tail.head).tag === 8) {
                    if (args$$44.tail.tail.tail == null) {
                      $target$$109 = 2;
                      arg1$$1 = args$$44.head;
                      arg2$$1 = args$$44.tail.head;
                    } else {
                      $target$$109 = 3;
                      args$$48 = args$$44;
                    }
                  } else {
                    $target$$109 = 3;
                    args$$48 = args$$44;
                  }
                } else {
                  $target$$109 = 3;
                  args$$48 = args$$44;
                }
              } else {
                $target$$109 = 0;
              }

              switch ($target$$109) {
                case 0:
                  {
                    return Helper$$$InstanceCall$$9FFCF9C(c$$9, "split", t$$60, (0, _Types.L)((0, _Transforms.AST$$$makeStrConst)(""), (0, _Types.L)()));
                  }

                case 1:
                  {
                    return Helper$$$InstanceCall$$9FFCF9C(c$$9, "split", t$$60, (0, _Types.L)(separator, (0, _Types.L)()));
                  }

                case 2:
                  {
                    const arg1$$2 = (0, _AST.Expr$$get_Type)(arg1$$1).tag === 11 ? arg1$$1 : new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", (0, _Types.L)(arg1$$1, (0, _Types.L)())), new _AST.Type(5, "String")));
                    const args$$47 = (0, _Types.L)(arg1$$2, (0, _Types.L)(new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(1, "Any"))), (0, _Types.L)(arg2$$1, (0, _Types.L)())));
                    return Helper$$$CoreCall$$39739A92("String", "split", t$$60, (0, _Types.L)(c$$9, args$$47), null, null, null, null, r$$39);
                  }

                case 3:
                  {
                    return Helper$$$CoreCall$$39739A92("String", "split", t$$60, args$$48, i$$11.SignatureArgTypes, thisArg$$10, null, null, r$$39);
                  }
              }
            }

          case 4:
            {
              return Helper$$$CoreCall$$39739A92("String", "joinWithIndices", t$$60, args$$44, null, null, null, null, r$$39);
            }

          case 5:
            {
              return join((0, _List.item)(1, i$$11.SignatureArgTypes), args$$44);
            }

          case 6:
            {
              return join((0, _List.head)(i$$11.SignatureArgTypes), (0, _Types.L)((0, _Transforms.AST$$$makeStrConst)(""), args$$44));
            }

          case 7:
            {
              return Helper$$$CoreCall$$39739A92("String", "compareOrdinal", t$$60, args$$44, null, null, null, null, r$$39);
            }

          case 8:
            {
              const hasSpread$$2 = i$$11.Spread.tag === 1 ? true : false;
              return Helper$$$CoreCall$$39739A92("String", (0, _Prelude.Naming$$$lowerFirst)(i$$11.CompiledName), t$$60, args$$49, i$$11.SignatureArgTypes, thisArg$$11, null, hasSpread$$2, r$$39);
            }

          case 9:
            {
              return null;
            }
        }
      }
  }
}

function stringModule(com$$36, ctx$$22, r$$40, t$$61, i$$12, _arg1$$17, args$$50) {
  const matchValue$$37 = [i$$12.CompiledName, args$$50];
  var $target$$110, arg$$16, args$$53, meth$$5;

  if (matchValue$$37[0] === "Length") {
    if (matchValue$$37[1].tail != null) {
      if (matchValue$$37[1].tail.tail == null) {
        $target$$110 = 0;
        arg$$16 = matchValue$$37[1].head;
      } else {
        $target$$110 = 4;
        args$$53 = matchValue$$37[1];
        meth$$5 = matchValue$$37[0];
      }
    } else {
      $target$$110 = 4;
      args$$53 = matchValue$$37[1];
      meth$$5 = matchValue$$37[0];
    }
  } else if (matchValue$$37[0] === "Iterate") {
    $target$$110 = 1;
  } else if (matchValue$$37[0] === "IterateIndexed") {
    $target$$110 = 1;
  } else if (matchValue$$37[0] === "ForAll") {
    $target$$110 = 1;
  } else if (matchValue$$37[0] === "Exists") {
    $target$$110 = 1;
  } else if (matchValue$$37[0] === "Map") {
    $target$$110 = 2;
  } else if (matchValue$$37[0] === "MapIndexed") {
    $target$$110 = 2;
  } else if (matchValue$$37[0] === "Collect") {
    $target$$110 = 2;
  } else if (matchValue$$37[0] === "Concat") {
    $target$$110 = 3;
  } else {
    $target$$110 = 4;
    args$$53 = matchValue$$37[1];
    meth$$5 = matchValue$$37[0];
  }

  switch ($target$$110) {
    case 0:
      {
        return (0, _Transforms.AST$$$get)(r$$40, t$$61, arg$$16, "length");
      }

    case 1:
      {
        const args$$51 = (0, _Prelude.List$$$replaceLast)(function f$$8(e$$18) {
          return stringToCharArray((0, _AST.Expr$$get_Type)(e$$18), e$$18);
        }, args$$50);
        return Helper$$$CoreCall$$39739A92("Seq", (0, _Prelude.Naming$$$lowerFirst)(i$$12.CompiledName), t$$61, args$$51, i$$12.SignatureArgTypes, null, null, null, r$$40);
      }

    case 2:
      {
        const args$$52 = (0, _Prelude.List$$$replaceLast)(function f$$9(e$$19) {
          return stringToCharArray((0, _AST.Expr$$get_Type)(e$$19), e$$19);
        }, args$$50);
        const name$$19 = (0, _Prelude.Naming$$$lowerFirst)(i$$12.CompiledName);
        return Helpers$$$emitJs(r$$40, t$$61, (0, _Types.L)(Helper$$$CoreCall$$39739A92("Seq", name$$19, new _AST.Type(1, "Any"), args$$52, i$$12.SignatureArgTypes), (0, _Types.L)()), "Array.from($0).join('')");
      }

    case 3:
      {
        return Helper$$$CoreCall$$39739A92("String", "join", t$$61, args$$50, null, null, null, true, r$$40);
      }

    case 4:
      {
        return Helper$$$CoreCall$$39739A92("String", (0, _Prelude.Naming$$$lowerFirst)(meth$$5), t$$61, args$$53, i$$12.SignatureArgTypes, null, null, null, r$$40);
      }
  }
}

function getEnumerator(r$$41, t$$62, expr$$8) {
  return Helper$$$CoreCall$$39739A92("Seq", "getEnumerator", t$$62, (0, _Types.L)(toSeq(new _AST.Type(1, "Any"), expr$$8), (0, _Types.L)()), null, null, null, null, r$$41);
}

function seqs(com$$37, ctx$$23, r$$42, t$$63, i$$13, thisArg$$12, args$$54) {
  const sort = function sort(r$$43, returnType$$7, descending, projection, args$$55, genArg$$13) {
    let compareFn;

    const identExpr = function identExpr(ident$$4) {
      if (projection == null) {
        return new _AST.Expr(1, "IdentExpr", ident$$4);
      } else {
        const projection$$1 = projection;
        const info$$4 = (0, _Transforms.AST$$$argInfo)(null, (0, _Types.L)(new _AST.Expr(1, "IdentExpr", ident$$4), (0, _Types.L)()), new _AST.SignatureKind(2, "NoUncurrying"));
        return new _AST.Expr(8, "Operation", new _AST.OperationKind(0, "Call", new _AST.CallKind(1, "StaticCall", projection$$1), info$$4), genArg$$13, null);
      }
    };

    const x$$39 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$37, genArg$$13, "x");
    const y$$7 = (0, _Transforms.AST$$$makeTypedIdentUnique)(com$$37, genArg$$13, "y");
    let comparison$$2;
    const comparison$$1 = compare(com$$37, null, identExpr(x$$39), identExpr(y$$7));
    comparison$$2 = descending ? (0, _Transforms.AST$$$makeUnOp)(null, new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), comparison$$1, new _AST2.UnaryOperator(0, "UnaryMinus")) : comparison$$1;
    compareFn = new _AST.Expr(5, "Function", new _AST.FunctionKind(1, "Delegate", (0, _Types.L)(x$$39, (0, _Types.L)(y$$7, (0, _Types.L)()))), comparison$$2, null);
    return Helper$$$CoreCall$$39739A92("Seq", "sortWith", returnType$$7, (0, _Types.L)(compareFn, args$$55), null, null, null, null, r$$43);
  };

  const matchValue$$38 = [i$$13.CompiledName, args$$54];
  var $target$$111, arg$$17, arg$$18, arg$$19, arg1$$3, arg2$$2, meth$$6, arg$$20, f$$10, args$$57, meth$$7, args$$58, meth$$8, projection$$2, args$$59, meth$$9, args$$61, meth$$11, meth$$13;

  if (matchValue$$38[0] === "Cast") {
    if (matchValue$$38[1].tail != null) {
      if (matchValue$$38[1].tail.tail == null) {
        $target$$111 = 0;
        arg$$17 = matchValue$$38[1].head;
      } else {
        $target$$111 = 10;
        meth$$13 = matchValue$$38[0];
      }
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "Cache") {
    if (matchValue$$38[1].tail != null) {
      if (matchValue$$38[1].tail.tail == null) {
        $target$$111 = 1;
        arg$$18 = matchValue$$38[1].head;
      } else {
        $target$$111 = 10;
        meth$$13 = matchValue$$38[0];
      }
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "ToArray") {
    if (matchValue$$38[1].tail != null) {
      if (matchValue$$38[1].tail.tail == null) {
        $target$$111 = 1;
        arg$$18 = matchValue$$38[1].head;
      } else {
        $target$$111 = 10;
        meth$$13 = matchValue$$38[0];
      }
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "OfList") {
    if (matchValue$$38[1].tail != null) {
      if (matchValue$$38[1].tail.tail == null) {
        $target$$111 = 2;
        arg$$19 = matchValue$$38[1].head;
      } else {
        $target$$111 = 10;
        meth$$13 = matchValue$$38[0];
      }
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "ToList") {
    $target$$111 = 3;
  } else if (matchValue$$38[0] === "ChunkBySize") {
    if (matchValue$$38[1].tail != null) {
      if (matchValue$$38[1].tail.tail != null) {
        if (matchValue$$38[1].tail.tail.tail == null) {
          $target$$111 = 4;
          arg1$$3 = matchValue$$38[1].head;
          arg2$$2 = matchValue$$38[1].tail.head;
          meth$$6 = matchValue$$38[0];
        } else {
          $target$$111 = 10;
          meth$$13 = matchValue$$38[0];
        }
      } else {
        $target$$111 = 10;
        meth$$13 = matchValue$$38[0];
      }
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "Permute") {
    if (matchValue$$38[1].tail != null) {
      if (matchValue$$38[1].tail.tail != null) {
        if (matchValue$$38[1].tail.tail.tail == null) {
          $target$$111 = 4;
          arg1$$3 = matchValue$$38[1].head;
          arg2$$2 = matchValue$$38[1].tail.head;
          meth$$6 = matchValue$$38[0];
        } else {
          $target$$111 = 10;
          meth$$13 = matchValue$$38[0];
        }
      } else {
        $target$$111 = 10;
        meth$$13 = matchValue$$38[0];
      }
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "EnumerateUsing") {
    if (matchValue$$38[1].tail != null) {
      if (matchValue$$38[1].tail.tail != null) {
        if (matchValue$$38[1].tail.tail.tail == null) {
          $target$$111 = 5;
          arg$$20 = matchValue$$38[1].head;
          f$$10 = matchValue$$38[1].tail.head;
        } else {
          $target$$111 = 10;
          meth$$13 = matchValue$$38[0];
        }
      } else {
        $target$$111 = 10;
        meth$$13 = matchValue$$38[0];
      }
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "Sort") {
    $target$$111 = 6;
    args$$57 = matchValue$$38[1];
    meth$$7 = matchValue$$38[0];
  } else if (matchValue$$38[0] === "SortDescending") {
    $target$$111 = 6;
    args$$57 = matchValue$$38[1];
    meth$$7 = matchValue$$38[0];
  } else if (matchValue$$38[0] === "SortBy") {
    if (matchValue$$38[1].tail != null) {
      $target$$111 = 7;
      args$$58 = matchValue$$38[1].tail;
      meth$$8 = matchValue$$38[0];
      projection$$2 = matchValue$$38[1].head;
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "SortByDescending") {
    if (matchValue$$38[1].tail != null) {
      $target$$111 = 7;
      args$$58 = matchValue$$38[1].tail;
      meth$$8 = matchValue$$38[0];
      projection$$2 = matchValue$$38[1].head;
    } else {
      $target$$111 = 10;
      meth$$13 = matchValue$$38[0];
    }
  } else if (matchValue$$38[0] === "GroupBy") {
    $target$$111 = 8;
    args$$59 = matchValue$$38[1];
    meth$$9 = matchValue$$38[0];
  } else if (matchValue$$38[0] === "CountBy") {
    $target$$111 = 8;
    args$$59 = matchValue$$38[1];
    meth$$9 = matchValue$$38[0];
  } else if (matchValue$$38[0] === "Distinct") {
    $target$$111 = 9;
    args$$61 = matchValue$$38[1];
    meth$$11 = matchValue$$38[0];
  } else if (matchValue$$38[0] === "DistinctBy") {
    $target$$111 = 9;
    args$$61 = matchValue$$38[1];
    meth$$11 = matchValue$$38[0];
  } else {
    $target$$111 = 10;
    meth$$13 = matchValue$$38[0];
  }

  switch ($target$$111) {
    case 0:
      {
        return arg$$17;
      }

    case 1:
      {
        return toArray(com$$37, t$$63, arg$$18);
      }

    case 2:
      {
        return toSeq(t$$63, arg$$19);
      }

    case 3:
      {
        return Helper$$$CoreCall$$39739A92("List", "ofSeq", t$$63, args$$54, i$$13.SignatureArgTypes, null, null, null, r$$42);
      }

    case 4:
      {
        const arg2$$3 = toArray(com$$37, new _AST.Type(11, "Array", new _AST.Type(1, "Any")), arg2$$2);
        let args$$56;
        const matchValue$$39 = [meth$$6, t$$63];

        var $target$$112, _seq, genArg$$14;

        if (matchValue$$39[0] === "Permute") {
          if (matchValue$$39[1].tag === 16) {
            if (matchValue$$39[1].fields[1].tail != null) {
              if (matchValue$$39[1].fields[1].tail.tail == null) {
                $target$$112 = 0;
                _seq = matchValue$$39[1].fields[0];
                genArg$$14 = matchValue$$39[1].fields[1].head;
              } else {
                $target$$112 = 1;
              }
            } else {
              $target$$112 = 1;
            }
          } else {
            $target$$112 = 1;
          }
        } else {
          $target$$112 = 1;
        }

        switch ($target$$112) {
          case 0:
            {
              args$$56 = (0, _List.append)((0, _Types.L)(arg1$$3, (0, _Types.L)(arg2$$3, (0, _Types.L)())), (0, _Types.L)(arrayCons(com$$37, genArg$$14), (0, _Types.L)()));
              break;
            }

          case 1:
            {
              args$$56 = (0, _Types.L)(arg1$$3, (0, _Types.L)(arg2$$3, (0, _Types.L)()));
              break;
            }
        }

        const result = Helper$$$CoreCall$$39739A92("Array", (0, _Prelude.Naming$$$lowerFirst)(meth$$6), new _AST.Type(1, "Any"), args$$56);
        return Helper$$$CoreCall$$39739A92("Seq", "ofArray", t$$63, (0, _Types.L)(result, (0, _Types.L)()));
      }

    case 5:
      {
        return Helper$$$CoreCall$$39739A92("Seq", "enumerateUsing", t$$63, (0, _Types.L)(arg$$20, (0, _Types.L)(f$$10, (0, _Types.L)())), i$$13.SignatureArgTypes, null, null, null, r$$42);
      }

    case 6:
      {
        return sort(r$$42, t$$63, meth$$7 === "SortDescending", null, args$$57, Helpers$$$genArg(com$$37, ctx$$23, r$$42, 0, i$$13.GenericArgs));
      }

    case 7:
      {
        return sort(r$$42, t$$63, meth$$8 === "SortByDescending", projection$$2, args$$58, Helpers$$$genArg(com$$37, ctx$$23, r$$42, 1, i$$13.GenericArgs));
      }

    case 8:
      {
        const meth$$10 = (0, _Prelude.Naming$$$lowerFirst)(meth$$9);
        const args$$60 = injectArg(com$$37, ctx$$23, r$$42, "Map", meth$$10, i$$13.GenericArgs, args$$59);
        return Helper$$$CoreCall$$39739A92("Map", meth$$10, t$$63, args$$60, i$$13.SignatureArgTypes, null, null, null, r$$42);
      }

    case 9:
      {
        const meth$$12 = (0, _Prelude.Naming$$$lowerFirst)(meth$$11);
        const args$$62 = injectArg(com$$37, ctx$$23, r$$42, "Set", meth$$12, i$$13.GenericArgs, args$$61);
        return Helper$$$CoreCall$$39739A92("Set", meth$$12, t$$63, args$$62, i$$13.SignatureArgTypes, null, null, null, r$$42);
      }

    case 10:
      {
        const meth$$14 = (0, _Prelude.Naming$$$lowerFirst)(meth$$13);
        const args$$63 = injectArg(com$$37, ctx$$23, r$$42, "Seq", meth$$14, i$$13.GenericArgs, args$$54);
        return Helper$$$CoreCall$$39739A92("Seq", meth$$14, t$$63, args$$63, i$$13.SignatureArgTypes, thisArg$$12, null, null, r$$42);
      }
  }
}

function resizeArrays(com$$38, ctx$$24, r$$44, t$$64, i$$14, thisArg$$13, args$$64) {
  const matchValue$$40 = [i$$14.CompiledName, thisArg$$13, args$$64];
  var $target$$113, vals;

  if (matchValue$$40[0] === ".ctor") {
    if (matchValue$$40[2].tail != null) {
      if ((0, _AST.Expr$$get_Type)(matchValue$$40[2].head).tag === 7) {
        if (matchValue$$40[2].tail.tail == null) {
          $target$$113 = 1;
        } else {
          $target$$113 = 3;
        }
      } else if (matchValue$$40[2].head.tag === 0) {
        if (matchValue$$40[2].head.fields[0].tag === 10) {
          if (matchValue$$40[2].head.fields[0].fields[0].tag === 0) {
            if (matchValue$$40[2].tail.tail == null) {
              $target$$113 = 2;
              vals = matchValue$$40[2].head.fields[0].fields[0].fields[0];
            } else {
              $target$$113 = 3;
            }
          } else {
            const activePatternResult67304 = $007CListLiteral$007C_$007C(matchValue$$40[2].head);

            if (activePatternResult67304 != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$113 = 2;
                vals = activePatternResult67304[0];
              } else {
                $target$$113 = 3;
              }
            } else {
              $target$$113 = 3;
            }
          }
        } else {
          const activePatternResult67305 = $007CListLiteral$007C_$007C(matchValue$$40[2].head);

          if (activePatternResult67305 != null) {
            if (matchValue$$40[2].tail.tail == null) {
              $target$$113 = 2;
              vals = activePatternResult67305[0];
            } else {
              $target$$113 = 3;
            }
          } else {
            $target$$113 = 3;
          }
        }
      } else {
        const activePatternResult67306 = $007CListLiteral$007C_$007C(matchValue$$40[2].head);

        if (activePatternResult67306 != null) {
          if (matchValue$$40[2].tail.tail == null) {
            $target$$113 = 2;
            vals = activePatternResult67306[0];
          } else {
            $target$$113 = 3;
          }
        } else {
          $target$$113 = 3;
        }
      }
    } else {
      $target$$113 = 0;
    }
  } else {
    $target$$113 = 3;
  }

  switch ($target$$113) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)());
      }

    case 1:
      {
        return (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)());
      }

    case 2:
      {
        return (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), vals);
      }

    case 3:
      {
        var $target$$114, args$$65, ar, idx, ar$$1, idx$$1, value$$16, ar$$2, args$$66, ar$$3, arg$$21, ar$$4, ar$$5, ar$$6, ar$$7, arg$$22, ar$$8, arg$$23, ar$$9, arg$$24, ar$$10, arg$$25, ar$$11, arg$$26, ar$$12, args$$67, ar$$13, arg$$27, idx$$2, ar$$14, args$$68, ar$$15, idx$$3, ar$$16, ar$$17, ar$$18, ar$$19;

        if (matchValue$$40[0] === ".ctor") {
          $target$$114 = 0;
          args$$65 = matchValue$$40[2];
        } else if (matchValue$$40[0] === "get_Item") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 1;
                ar = matchValue$$40[1];
                idx = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "set_Item") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail != null) {
                if (matchValue$$40[2].tail.tail.tail == null) {
                  $target$$114 = 2;
                  ar$$1 = matchValue$$40[1];
                  idx$$1 = matchValue$$40[2].head;
                  value$$16 = matchValue$$40[2].tail.head;
                } else {
                  $target$$114 = 21;
                }
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Add") {
          if (matchValue$$40[1] != null) {
            $target$$114 = 3;
            ar$$2 = matchValue$$40[1];
            args$$66 = matchValue$$40[2];
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Remove") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 4;
                ar$$3 = matchValue$$40[1];
                arg$$21 = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "GetEnumerator") {
          if (matchValue$$40[1] != null) {
            $target$$114 = 5;
            ar$$4 = matchValue$$40[1];
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "get_Count") {
          if (matchValue$$40[1] != null) {
            $target$$114 = 6;
            ar$$5 = matchValue$$40[1];
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Clear") {
          if (matchValue$$40[1] != null) {
            $target$$114 = 7;
            ar$$6 = matchValue$$40[1];
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Find") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 8;
                ar$$7 = matchValue$$40[1];
                arg$$22 = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "FindLast") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 9;
                ar$$8 = matchValue$$40[1];
                arg$$23 = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "FindAll") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 10;
                ar$$9 = matchValue$$40[1];
                arg$$24 = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "AddRange") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 11;
                ar$$10 = matchValue$$40[1];
                arg$$25 = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Contains") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 12;
                ar$$11 = matchValue$$40[1];
                arg$$26 = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "IndexOf") {
          if (matchValue$$40[1] != null) {
            $target$$114 = 13;
            ar$$12 = matchValue$$40[1];
            args$$67 = matchValue$$40[2];
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Insert") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail != null) {
                if (matchValue$$40[2].tail.tail.tail == null) {
                  $target$$114 = 14;
                  ar$$13 = matchValue$$40[1];
                  arg$$27 = matchValue$$40[2].tail.head;
                  idx$$2 = matchValue$$40[2].head;
                } else {
                  $target$$114 = 21;
                }
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "RemoveRange") {
          if (matchValue$$40[1] != null) {
            $target$$114 = 15;
            ar$$14 = matchValue$$40[1];
            args$$68 = matchValue$$40[2];
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "RemoveAt") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if (matchValue$$40[2].tail.tail == null) {
                $target$$114 = 16;
                ar$$15 = matchValue$$40[1];
                idx$$3 = matchValue$$40[2].head;
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Reverse") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail == null) {
              $target$$114 = 17;
              ar$$16 = matchValue$$40[1];
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "Sort") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail != null) {
              if ((0, _AST.Expr$$get_Type)(matchValue$$40[2].head).tag === 13) {
                if (matchValue$$40[2].tail.tail == null) {
                  $target$$114 = 19;
                  ar$$18 = matchValue$$40[1];
                } else {
                  $target$$114 = 21;
                }
              } else {
                $target$$114 = 21;
              }
            } else {
              $target$$114 = 18;
              ar$$17 = matchValue$$40[1];
            }
          } else {
            $target$$114 = 21;
          }
        } else if (matchValue$$40[0] === "ToArray") {
          if (matchValue$$40[1] != null) {
            if (matchValue$$40[2].tail == null) {
              $target$$114 = 20;
              ar$$19 = matchValue$$40[1];
            } else {
              $target$$114 = 21;
            }
          } else {
            $target$$114 = 21;
          }
        } else {
          $target$$114 = 21;
        }

        switch ($target$$114) {
          case 0:
            {
              return Helper$$$GlobalCall$$Z6A200D61("Array", t$$64, args$$65, null, "from", null, r$$44);
            }

          case 1:
            {
              return (0, _Transforms.AST$$$getExpr)(r$$44, t$$64, ar, idx);
            }

          case 2:
            {
              return new _AST.Expr(16, "Set", ar$$1, new _AST.SetKind(1, "ExprSet", idx$$1), value$$16, r$$44);
            }

          case 3:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$2, "push", t$$64, args$$66, null, r$$44);
            }

          case 4:
            {
              return Helper$$$CoreCall$$39739A92("Array", "removeInPlace", t$$64, (0, _Types.L)(arg$$21, (0, _Types.L)(ar$$3, (0, _Types.L)())), null, null, null, null, r$$44);
            }

          case 5:
            {
              return getEnumerator(r$$44, t$$64, ar$$4);
            }

          case 6:
            {
              return Helper$$$CoreCall$$39739A92("Util", "count", t$$64, (0, _Types.L)(ar$$5, (0, _Types.L)()), null, null, null, null, r$$44);
            }

          case 7:
            {
              return Helper$$$CoreCall$$39739A92("Util", "clear", t$$64, (0, _Types.L)(ar$$6, (0, _Types.L)()), null, null, null, null, r$$44);
            }

          case 8:
            {
              return Helper$$$CoreCall$$39739A92("Option", "value", t$$64, (0, _Types.L)(Helper$$$CoreCall$$39739A92("Seq", "tryFind", t$$64, (0, _Types.L)(arg$$22, (0, _Types.L)(ar$$7, (0, _Types.L)(defaultof(t$$64), (0, _Types.L)()))), null, null, null, null, r$$44), (0, _Types.L)(new _AST.Expr(0, "Value", new _AST.ValueKind(3, "BoolConstant", true)), (0, _Types.L)())), null, null, null, null, r$$44);
            }

          case 9:
            {
              return Helper$$$CoreCall$$39739A92("Option", "value", t$$64, (0, _Types.L)(Helper$$$CoreCall$$39739A92("Seq", "tryFindBack", t$$64, (0, _Types.L)(arg$$23, (0, _Types.L)(ar$$8, (0, _Types.L)(defaultof(t$$64), (0, _Types.L)()))), null, null, null, null, r$$44), (0, _Types.L)(new _AST.Expr(0, "Value", new _AST.ValueKind(3, "BoolConstant", true)), (0, _Types.L)())), null, null, null, null, r$$44);
            }

          case 10:
            {
              return toArray(com$$38, t$$64, Helper$$$CoreCall$$39739A92("Seq", "filter", t$$64, (0, _Types.L)(arg$$24, (0, _Types.L)(ar$$9, (0, _Types.L)())), null, null, null, null, r$$44));
            }

          case 11:
            {
              return Helper$$$CoreCall$$39739A92("Array", "addRangeInPlace", t$$64, (0, _Types.L)(arg$$25, (0, _Types.L)(ar$$10, (0, _Types.L)())), null, null, null, null, r$$44);
            }

          case 12:
            {
              const left$$32 = Helper$$$InstanceCall$$9FFCF9C(ar$$11, "indexOf", new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)(arg$$26, (0, _Types.L)()), null, r$$44);
              return (0, _Transforms.AST$$$makeEqOp)(r$$44, left$$32, (0, _Transforms.AST$$$makeIntConst)(0), new _AST2.BinaryOperator(7, "BinaryGreaterOrEqual"));
            }

          case 13:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$12, "indexOf", t$$64, args$$67, null, r$$44);
            }

          case 14:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$13, "splice", t$$64, (0, _Types.L)(idx$$2, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)(arg$$27, (0, _Types.L)()))), null, r$$44);
            }

          case 15:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$14, "splice", t$$64, args$$68, null, r$$44);
            }

          case 16:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$15, "splice", t$$64, (0, _Types.L)(idx$$3, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(1), (0, _Types.L)())), null, r$$44);
            }

          case 17:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$16, "reverse", t$$64, args$$64, null, r$$44);
            }

          case 18:
            {
              const compareFn$$1 = makeComparerFunction(com$$38, Helpers$$$genArg(com$$38, ctx$$24, r$$44, 0, i$$14.GenericArgs));
              return Helper$$$InstanceCall$$9FFCF9C(ar$$17, "sort", t$$64, (0, _Types.L)(compareFn$$1, (0, _Types.L)()), null, r$$44);
            }

          case 19:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$18, "sort", t$$64, args$$64, null, r$$44);
            }

          case 20:
            {
              return Helper$$$InstanceCall$$9FFCF9C(ar$$19, "slice", t$$64, args$$64, null, r$$44);
            }

          case 21:
            {
              return null;
            }
        }
      }
  }
}

const nativeArrayFunctions = new Map([["Exists", "some"], ["Filter", "filter"], ["Find", "find"], ["FindIndex", "findIndex"], ["ForAll", "every"], ["Iterate", "forEach"], ["Reduce", "reduce"], ["ReduceBack", "reduceRight"], ["SortInPlace", "sort"], ["SortInPlaceWith", "sort"]]);
exports.nativeArrayFunctions = nativeArrayFunctions;

function arrays(_arg1$$18, ctx$$25, r$$45, t$$65, i$$15, thisArg$$14, args$$69) {
  const matchValue$$41 = [i$$15.CompiledName, thisArg$$14, args$$69];
  var $target$$115, ar$$20, ar$$21, idx$$4, ar$$22, idx$$5, value$$17, count, source$$3, target, count$$1, source$$4, sourceIndex, target$$1, targetIndex;

  if (matchValue$$41[0] === "get_Length") {
    if (matchValue$$41[1] != null) {
      $target$$115 = 0;
      ar$$20 = matchValue$$41[1];
    } else {
      $target$$115 = 5;
    }
  } else if (matchValue$$41[0] === "get_Item") {
    if (matchValue$$41[1] != null) {
      if (matchValue$$41[2].tail != null) {
        if (matchValue$$41[2].tail.tail == null) {
          $target$$115 = 1;
          ar$$21 = matchValue$$41[1];
          idx$$4 = matchValue$$41[2].head;
        } else {
          $target$$115 = 5;
        }
      } else {
        $target$$115 = 5;
      }
    } else {
      $target$$115 = 5;
    }
  } else if (matchValue$$41[0] === "set_Item") {
    if (matchValue$$41[1] != null) {
      if (matchValue$$41[2].tail != null) {
        if (matchValue$$41[2].tail.tail != null) {
          if (matchValue$$41[2].tail.tail.tail == null) {
            $target$$115 = 2;
            ar$$22 = matchValue$$41[1];
            idx$$5 = matchValue$$41[2].head;
            value$$17 = matchValue$$41[2].tail.head;
          } else {
            $target$$115 = 5;
          }
        } else {
          $target$$115 = 5;
        }
      } else {
        $target$$115 = 5;
      }
    } else {
      $target$$115 = 5;
    }
  } else if (matchValue$$41[0] === "Copy") {
    if (matchValue$$41[1] == null) {
      if (matchValue$$41[2].tail != null) {
        if (matchValue$$41[2].tail.tail != null) {
          if (matchValue$$41[2].tail.tail.tail != null) {
            if (matchValue$$41[2].tail.tail.tail.tail != null) {
              if (matchValue$$41[2].tail.tail.tail.tail.tail != null) {
                if (matchValue$$41[2].tail.tail.tail.tail.tail.tail == null) {
                  $target$$115 = 4;
                  count$$1 = matchValue$$41[2].tail.tail.tail.tail.head;
                  source$$4 = matchValue$$41[2].head;
                  sourceIndex = matchValue$$41[2].tail.head;
                  target$$1 = matchValue$$41[2].tail.tail.head;
                  targetIndex = matchValue$$41[2].tail.tail.tail.head;
                } else {
                  $target$$115 = 5;
                }
              } else {
                $target$$115 = 5;
              }
            } else {
              $target$$115 = 3;
              count = matchValue$$41[2].tail.tail.head;
              source$$3 = matchValue$$41[2].head;
              target = matchValue$$41[2].tail.head;
            }
          } else {
            $target$$115 = 5;
          }
        } else {
          $target$$115 = 5;
        }
      } else {
        $target$$115 = 5;
      }
    } else {
      $target$$115 = 5;
    }
  } else {
    $target$$115 = 5;
  }

  switch ($target$$115) {
    case 0:
      {
        return (0, _Transforms.AST$$$get)(r$$45, t$$65, ar$$20, "length");
      }

    case 1:
      {
        return (0, _Transforms.AST$$$getExpr)(r$$45, t$$65, ar$$21, idx$$4);
      }

    case 2:
      {
        return new _AST.Expr(16, "Set", ar$$22, new _AST.SetKind(1, "ExprSet", idx$$5), value$$17, r$$45);
      }

    case 3:
      {
        return Helper$$$CoreCall$$39739A92("Array", "copyTo", t$$65, (0, _Types.L)(source$$3, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)(target, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)(count, (0, _Types.L)()))))), i$$15.SignatureArgTypes, null, null, null, r$$45);
      }

    case 4:
      {
        return Helper$$$CoreCall$$39739A92("Array", "copyTo", t$$65, args$$69, i$$15.SignatureArgTypes, null, null, null, r$$45);
      }

    case 5:
      {
        return null;
      }
  }
}

function arrayModule(com$$39, ctx$$26, r$$46, t$$66, i$$16, _arg1$$19, args$$70) {
  const createArray = function createArray(size, value$$18) {
    const matchValue$$42 = [t$$66, value$$18];
    var $target$$116, t2, t2$$1, value$$19;

    if (matchValue$$42[0].tag === 11) {
      if (matchValue$$42[0].fields[0].tag === 7) {
        if (matchValue$$42[1] != null) {
          $target$$116 = 1;
          t2$$1 = matchValue$$42[0].fields[0];
          value$$19 = matchValue$$42[1];
        } else {
          $target$$116 = 0;
          t2 = matchValue$$42[0].fields[0];
        }
      } else if (matchValue$$42[0].fields[0].tag === 3) {
        $target$$116 = 1;
        t2$$1 = matchValue$$42[0].fields[0];
        value$$19 = $007COrDefault$007C((0, _Transforms.AST$$$makeBoolConst)(false), matchValue$$42[1]);
      } else {
        $target$$116 = 1;
        t2$$1 = matchValue$$42[0].fields[0];
        value$$19 = $007COrDefault$007C(new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(1, "Any"))), matchValue$$42[1]);
      }
    } else {
      $target$$116 = 2;
    }

    switch ($target$$116) {
      case 0:
        {
          return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(1, "ArrayAlloc", size), t2));
        }

      case 1:
        {
          return Helper$$$CoreCall$$39739A92("Array", "fill", t$$66, (0, _Types.L)(new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(1, "ArrayAlloc", size), t2$$1)), (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)(size, (0, _Types.L)(value$$19, (0, _Types.L)())))));
        }

      case 2:
        {
          return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$39, ctx$$26.InlinePath, r$$46, (0, _String.toText)((0, _String.printf)("Expecting an array type but got %A"))(t$$66));
        }
    }
  };

  const matchValue$$43 = [i$$16.CompiledName, args$$70];
  var $target$$117, arg$$28, arg$$29, arg$$30, arg$$31, ar$$23, idx$$6, ar$$24, idx$$7, ar$$25, idx$$8, value$$20, count$$2, count$$3, value$$21, ar$$26, meth$$15;

  if (matchValue$$43[0] === "ToSeq") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail == null) {
        $target$$117 = 0;
        arg$$28 = matchValue$$43[1].head;
      } else {
        const activePatternResult67347 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67347 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67347;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67348 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67348 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67348;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "OfSeq") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail == null) {
        $target$$117 = 1;
        arg$$29 = matchValue$$43[1].head;
      } else {
        const activePatternResult67349 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67349 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67349;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67350 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67350 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67350;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "OfList") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail == null) {
        $target$$117 = 2;
        arg$$30 = matchValue$$43[1].head;
      } else {
        const activePatternResult67351 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67351 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67351;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67352 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67352 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67352;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "Length") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail == null) {
        $target$$117 = 3;
        arg$$31 = matchValue$$43[1].head;
      } else {
        const activePatternResult67353 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67353 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67353;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67354 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67354 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67354;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "Count") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail == null) {
        $target$$117 = 3;
        arg$$31 = matchValue$$43[1].head;
      } else {
        const activePatternResult67355 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67355 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67355;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67356 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67356 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67356;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "Item") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail != null) {
        if (matchValue$$43[1].tail.tail.tail == null) {
          $target$$117 = 4;
          ar$$23 = matchValue$$43[1].tail.head;
          idx$$6 = matchValue$$43[1].head;
        } else {
          const activePatternResult67357 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

          if (activePatternResult67357 != null) {
            $target$$117 = 11;
            meth$$15 = activePatternResult67357;
          } else {
            $target$$117 = 12;
          }
        }
      } else {
        const activePatternResult67358 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67358 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67358;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67359 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67359 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67359;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "Get") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail != null) {
        if (matchValue$$43[1].tail.tail.tail == null) {
          $target$$117 = 5;
          ar$$24 = matchValue$$43[1].head;
          idx$$7 = matchValue$$43[1].tail.head;
        } else {
          const activePatternResult67360 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

          if (activePatternResult67360 != null) {
            $target$$117 = 11;
            meth$$15 = activePatternResult67360;
          } else {
            $target$$117 = 12;
          }
        }
      } else {
        const activePatternResult67361 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67361 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67361;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67362 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67362 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67362;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "Set") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail != null) {
        if (matchValue$$43[1].tail.tail.tail != null) {
          if (matchValue$$43[1].tail.tail.tail.tail == null) {
            $target$$117 = 6;
            ar$$25 = matchValue$$43[1].head;
            idx$$8 = matchValue$$43[1].tail.head;
            value$$20 = matchValue$$43[1].tail.tail.head;
          } else {
            const activePatternResult67363 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

            if (activePatternResult67363 != null) {
              $target$$117 = 11;
              meth$$15 = activePatternResult67363;
            } else {
              $target$$117 = 12;
            }
          }
        } else {
          const activePatternResult67364 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

          if (activePatternResult67364 != null) {
            $target$$117 = 11;
            meth$$15 = activePatternResult67364;
          } else {
            $target$$117 = 12;
          }
        }
      } else {
        const activePatternResult67365 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67365 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67365;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67366 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67366 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67366;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "ZeroCreate") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail == null) {
        $target$$117 = 7;
        count$$2 = matchValue$$43[1].head;
      } else {
        const activePatternResult67367 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67367 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67367;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67368 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67368 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67368;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "Create") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail != null) {
        if (matchValue$$43[1].tail.tail.tail == null) {
          $target$$117 = 8;
          count$$3 = matchValue$$43[1].head;
          value$$21 = matchValue$$43[1].tail.head;
        } else {
          const activePatternResult67369 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

          if (activePatternResult67369 != null) {
            $target$$117 = 11;
            meth$$15 = activePatternResult67369;
          } else {
            $target$$117 = 12;
          }
        }
      } else {
        const activePatternResult67370 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67370 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67370;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67371 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67371 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67371;
      } else {
        $target$$117 = 12;
      }
    }
  } else if (matchValue$$43[0] === "Empty") {
    $target$$117 = 9;
  } else if (matchValue$$43[0] === "IsEmpty") {
    if (matchValue$$43[1].tail != null) {
      if (matchValue$$43[1].tail.tail == null) {
        $target$$117 = 10;
        ar$$26 = matchValue$$43[1].head;
      } else {
        const activePatternResult67372 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

        if (activePatternResult67372 != null) {
          $target$$117 = 11;
          meth$$15 = activePatternResult67372;
        } else {
          $target$$117 = 12;
        }
      }
    } else {
      const activePatternResult67373 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

      if (activePatternResult67373 != null) {
        $target$$117 = 11;
        meth$$15 = activePatternResult67373;
      } else {
        $target$$117 = 12;
      }
    }
  } else {
    const activePatternResult67374 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(nativeArrayFunctions, matchValue$$43[0]);

    if (activePatternResult67374 != null) {
      $target$$117 = 11;
      meth$$15 = activePatternResult67374;
    } else {
      $target$$117 = 12;
    }
  }

  switch ($target$$117) {
    case 0:
      {
        return arg$$28;
      }

    case 1:
      {
        return toArray(com$$39, t$$66, arg$$29);
      }

    case 2:
      {
        return listToArray(com$$39, r$$46, t$$66, arg$$30);
      }

    case 3:
      {
        return (0, _Transforms.AST$$$get)(r$$46, t$$66, arg$$31, "length");
      }

    case 4:
      {
        return (0, _Transforms.AST$$$getExpr)(r$$46, t$$66, ar$$23, idx$$6);
      }

    case 5:
      {
        return (0, _Transforms.AST$$$getExpr)(r$$46, t$$66, ar$$24, idx$$7);
      }

    case 6:
      {
        return new _AST.Expr(16, "Set", ar$$25, new _AST.SetKind(1, "ExprSet", idx$$8), value$$20, r$$46);
      }

    case 7:
      {
        return createArray(count$$2, null);
      }

    case 8:
      {
        return createArray(count$$3, value$$21);
      }

    case 9:
      {
        let t$$70;

        if (t$$66.tag === 11) {
          const t$$69 = t$$66.fields[0];
          t$$70 = t$$69;
        } else {
          t$$70 = new _AST.Type(1, "Any");
        }

        return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(1, "ArrayAlloc", (0, _Transforms.AST$$$makeIntConst)(0)), t$$70));
      }

    case 10:
      {
        return Helpers$$$eq((0, _Transforms.AST$$$get)(r$$46, new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), ar$$26, "length"), (0, _Transforms.AST$$$makeIntConst)(0));
      }

    case 11:
      {
        const patternInput$$5 = (0, _Prelude.List$$$splitLast)(args$$70);
        const argTypes$$20 = (0, _List.take)((0, _List.length)(patternInput$$5[0]), i$$16.SignatureArgTypes);
        return Helper$$$InstanceCall$$9FFCF9C(patternInput$$5[1], meth$$15, t$$66, patternInput$$5[0], argTypes$$20, r$$46);
      }

    case 12:
      {
        const meth$$17 = (0, _Prelude.Naming$$$lowerFirst)(matchValue$$43[0]);
        const args$$72 = injectArg(com$$39, ctx$$26, r$$46, "Array", meth$$17, i$$16.GenericArgs, args$$70);
        return Helper$$$CoreCall$$39739A92("Array", meth$$17, t$$66, args$$72, i$$16.SignatureArgTypes, null, null, null, r$$46);
      }
  }
}

function lists(com$$40, ctx$$27, r$$47, t$$72, i$$17, thisArg$$16, args$$73) {
  const matchValue$$44 = [i$$17.CompiledName, thisArg$$16, args$$73];
  var $target$$118, methName$$8, x$$40;
  const activePatternResult67391 = $007CReplaceName$007C_$007C((0, _Types.L)(["get_Head", "head"], (0, _Types.L)(["get_Tail", "tail"], (0, _Types.L)(["get_Item", "item"], (0, _Types.L)(["get_Length", "length"], (0, _Types.L)(["GetSlice", "slice"], (0, _Types.L)()))))), matchValue$$44[0]);

  if (activePatternResult67391 != null) {
    if (matchValue$$44[1] != null) {
      $target$$118 = 0;
      methName$$8 = activePatternResult67391;
      x$$40 = matchValue$$44[1];
    } else {
      $target$$118 = 1;
    }
  } else {
    $target$$118 = 1;
  }

  switch ($target$$118) {
    case 0:
      {
        const args$$75 = args$$73.tail != null ? (0, _AST.Expr$$get_Type)(args$$73.head).tag === 2 ? args$$73.tail.tail == null ? (0, _Types.L)(x$$40, (0, _Types.L)()) : (0, _List.append)(args$$73, (0, _Types.L)(x$$40, (0, _Types.L)())) : (0, _List.append)(args$$73, (0, _Types.L)(x$$40, (0, _Types.L)())) : (0, _List.append)(args$$73, (0, _Types.L)(x$$40, (0, _Types.L)()));
        return Helper$$$CoreCall$$39739A92("List", methName$$8, t$$72, args$$75, i$$17.SignatureArgTypes, null, null, null, r$$47);
      }

    case 1:
      {
        var $target$$119, x$$41, h$$1, t$$73, callee$$9;

        if (matchValue$$44[0] === "get_IsEmpty") {
          if (matchValue$$44[1] != null) {
            $target$$119 = 0;
            x$$41 = matchValue$$44[1];
          } else {
            $target$$119 = 4;
          }
        } else if (matchValue$$44[0] === "get_Empty") {
          if (matchValue$$44[1] == null) {
            $target$$119 = 1;
          } else {
            $target$$119 = 4;
          }
        } else if (matchValue$$44[0] === "Cons") {
          if (matchValue$$44[1] == null) {
            if (matchValue$$44[2].tail != null) {
              if (matchValue$$44[2].tail.tail != null) {
                if (matchValue$$44[2].tail.tail.tail == null) {
                  $target$$119 = 2;
                  h$$1 = matchValue$$44[2].head;
                  t$$73 = matchValue$$44[2].tail.head;
                } else {
                  $target$$119 = 4;
                }
              } else {
                $target$$119 = 4;
              }
            } else {
              $target$$119 = 4;
            }
          } else {
            $target$$119 = 4;
          }
        } else if (matchValue$$44[0] === "GetHashCode") {
          if (matchValue$$44[1] != null) {
            $target$$119 = 3;
            callee$$9 = matchValue$$44[1];
          } else {
            $target$$119 = 4;
          }
        } else if (matchValue$$44[0] === "Equals") {
          if (matchValue$$44[1] != null) {
            $target$$119 = 3;
            callee$$9 = matchValue$$44[1];
          } else {
            $target$$119 = 4;
          }
        } else if (matchValue$$44[0] === "CompareTo") {
          if (matchValue$$44[1] != null) {
            $target$$119 = 3;
            callee$$9 = matchValue$$44[1];
          } else {
            $target$$119 = 4;
          }
        } else {
          $target$$119 = 4;
        }

        switch ($target$$119) {
          case 0:
            {
              return new _AST.Expr(7, "Test", x$$41, new _AST.TestKind(3, "ListTest", false), r$$47);
            }

          case 1:
            {
              return new _AST.Expr(0, "Value", new _AST.ValueKind(11, "NewList", null, Helpers$$$genArg(com$$40, ctx$$27, r$$47, 0, i$$17.GenericArgs)));
            }

          case 2:
            {
              return new _AST.Expr(0, "Value", new _AST.ValueKind(11, "NewList", [h$$1, t$$73], Helpers$$$genArg(com$$40, ctx$$27, r$$47, 0, i$$17.GenericArgs)));
            }

          case 3:
            {
              return Helper$$$InstanceCall$$9FFCF9C(callee$$9, i$$17.CompiledName, t$$72, args$$73, i$$17.SignatureArgTypes, r$$47);
            }

          case 4:
            {
              return null;
            }
        }
      }
  }
}

function listModule(com$$41, ctx$$28, r$$48, t$$74, i$$18, _arg1$$20, args$$76) {
  const matchValue$$45 = [i$$18.CompiledName, args$$76];
  var $target$$120, x$$42, x$$43, x$$44, x$$45, meth$$18;

  if (matchValue$$45[0] === "IsEmpty") {
    if (matchValue$$45[1].tail != null) {
      if (matchValue$$45[1].tail.tail == null) {
        $target$$120 = 0;
        x$$42 = matchValue$$45[1].head;
      } else {
        $target$$120 = 5;
        meth$$18 = matchValue$$45[0];
      }
    } else {
      $target$$120 = 5;
      meth$$18 = matchValue$$45[0];
    }
  } else if (matchValue$$45[0] === "Empty") {
    $target$$120 = 1;
  } else if (matchValue$$45[0] === "Singleton") {
    if (matchValue$$45[1].tail != null) {
      if (matchValue$$45[1].tail.tail == null) {
        $target$$120 = 2;
        x$$43 = matchValue$$45[1].head;
      } else {
        $target$$120 = 5;
        meth$$18 = matchValue$$45[0];
      }
    } else {
      $target$$120 = 5;
      meth$$18 = matchValue$$45[0];
    }
  } else if (matchValue$$45[0] === "ToSeq") {
    if (matchValue$$45[1].tail != null) {
      if (matchValue$$45[1].tail.tail == null) {
        $target$$120 = 3;
        x$$44 = matchValue$$45[1].head;
      } else {
        $target$$120 = 5;
        meth$$18 = matchValue$$45[0];
      }
    } else {
      $target$$120 = 5;
      meth$$18 = matchValue$$45[0];
    }
  } else if (matchValue$$45[0] === "ToArray") {
    if (matchValue$$45[1].tail != null) {
      if (matchValue$$45[1].tail.tail == null) {
        $target$$120 = 4;
        x$$45 = matchValue$$45[1].head;
      } else {
        $target$$120 = 5;
        meth$$18 = matchValue$$45[0];
      }
    } else {
      $target$$120 = 5;
      meth$$18 = matchValue$$45[0];
    }
  } else {
    $target$$120 = 5;
    meth$$18 = matchValue$$45[0];
  }

  switch ($target$$120) {
    case 0:
      {
        return new _AST.Expr(7, "Test", x$$42, new _AST.TestKind(3, "ListTest", false), r$$48);
      }

    case 1:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(11, "NewList", null, Helpers$$$genArg(com$$41, ctx$$28, r$$48, 0, i$$18.GenericArgs)));
      }

    case 2:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(11, "NewList", [x$$43, new _AST.Expr(0, "Value", new _AST.ValueKind(11, "NewList", null, t$$74))], Helpers$$$genArg(com$$41, ctx$$28, r$$48, 0, i$$18.GenericArgs)));
      }

    case 3:
      {
        return toSeq(t$$74, x$$44);
      }

    case 4:
      {
        return listToArray(com$$41, r$$48, t$$74, x$$45);
      }

    case 5:
      {
        const meth$$19 = (0, _Prelude.Naming$$$lowerFirst)(meth$$18);
        const args$$77 = injectArg(com$$41, ctx$$28, r$$48, "List", meth$$19, i$$18.GenericArgs, args$$76);
        return Helper$$$CoreCall$$39739A92("List", meth$$19, t$$74, args$$77, i$$18.SignatureArgTypes, null, null, null, r$$48);
      }
  }
}

function sets(com$$42, ctx$$29, r$$49, t$$75, i$$19, thisArg$$17, args$$78) {
  if (i$$19.CompiledName === ".ctor") {
    return makeSet(com$$42, r$$49, t$$75, "OfSeq", args$$78, Helpers$$$genArg(com$$42, ctx$$29, r$$49, 0, i$$19.GenericArgs));
  } else {
    const isStatic$$2 = thisArg$$17 == null;
    const mangledName$$5 = (0, _Prelude.Naming$$$buildNameWithoutSanitationFrom)("FSharpSet", isStatic$$2, i$$19.CompiledName, i$$19.OverloadSuffix.Value);
    const args$$79 = injectArg(com$$42, ctx$$29, r$$49, "Set", mangledName$$5, i$$19.GenericArgs, args$$78);
    return Helper$$$CoreCall$$39739A92("Set", mangledName$$5, t$$75, args$$79, i$$19.SignatureArgTypes, thisArg$$17, null, null, r$$49);
  }
}

function setModule(com$$43, ctx$$30, r$$50, t$$76, i$$20, _arg1$$21, args$$80) {
  const meth$$20 = (0, _Prelude.Naming$$$lowerFirst)(i$$20.CompiledName);
  const args$$81 = injectArg(com$$43, ctx$$30, r$$50, "Set", meth$$20, i$$20.GenericArgs, args$$80);
  return Helper$$$CoreCall$$39739A92("Set", meth$$20, t$$76, args$$81, i$$20.SignatureArgTypes, null, null, null, r$$50);
}

function maps(com$$44, ctx$$31, r$$51, t$$77, i$$21, thisArg$$18, args$$82) {
  if (i$$21.CompiledName === ".ctor") {
    return makeMap(com$$44, r$$51, t$$77, "OfSeq", args$$82, Helpers$$$genArg(com$$44, ctx$$31, r$$51, 0, i$$21.GenericArgs));
  } else {
    const isStatic$$3 = thisArg$$18 == null;
    const mangledName$$6 = (0, _Prelude.Naming$$$buildNameWithoutSanitationFrom)("FSharpMap", isStatic$$3, i$$21.CompiledName, i$$21.OverloadSuffix.Value);
    const args$$83 = injectArg(com$$44, ctx$$31, r$$51, "Map", mangledName$$6, i$$21.GenericArgs, args$$82);
    return Helper$$$CoreCall$$39739A92("Map", mangledName$$6, t$$77, args$$83, i$$21.SignatureArgTypes, thisArg$$18, null, null, r$$51);
  }
}

function mapModule(com$$45, ctx$$32, r$$52, t$$78, i$$22, _arg1$$22, args$$84) {
  const meth$$21 = (0, _Prelude.Naming$$$lowerFirst)(i$$22.CompiledName);
  const args$$85 = injectArg(com$$45, ctx$$32, r$$52, "Map", meth$$21, i$$22.GenericArgs, args$$84);
  return Helper$$$CoreCall$$39739A92("Map", meth$$21, t$$78, args$$85, i$$22.SignatureArgTypes, null, null, null, r$$52);
}

function results(_arg2$$2, ctx$$33, r$$53, t$$79, i$$23, _arg1$$23, args$$86) {
  return (0, _Option.defaultArg)(i$$23.CompiledName === "Map" ? "mapOk" : i$$23.CompiledName === "MapError" ? "mapError" : i$$23.CompiledName === "Bind" ? "bindOk" : null, null, function mapping$$11(meth$$22) {
    return Helper$$$CoreCall$$39739A92("Option", meth$$22, t$$79, args$$86, i$$23.SignatureArgTypes, null, null, null, r$$53);
  });
}

function options(_arg1$$24, ctx$$34, r$$54, t$$80, i$$24, thisArg$$19, args$$87) {
  const matchValue$$49 = [i$$24.CompiledName, thisArg$$19, args$$87];
  var $target$$121;

  if (matchValue$$49[0] === "get_Value") {
    if (matchValue$$49[1] != null) {
      $target$$121 = 0;
    } else {
      $target$$121 = 3;
    }
  } else if (matchValue$$49[0] === "get_IsSome") {
    if (matchValue$$49[1] != null) {
      $target$$121 = 1;
    } else {
      $target$$121 = 3;
    }
  } else if (matchValue$$49[0] === "get_IsNone") {
    if (matchValue$$49[1] != null) {
      $target$$121 = 2;
    } else {
      $target$$121 = 3;
    }
  } else {
    $target$$121 = 3;
  }

  switch ($target$$121) {
    case 0:
      {
        const c$$10 = matchValue$$49[1];
        return new _AST.Expr(9, "Get", c$$10, new _AST.GetKind(7, "OptionValue"), t$$80, r$$54);
      }

    case 1:
      {
        const c$$11 = matchValue$$49[1];
        return new _AST.Expr(7, "Test", c$$11, new _AST.TestKind(2, "OptionTest", true), r$$54);
      }

    case 2:
      {
        const c$$12 = matchValue$$49[1];
        return new _AST.Expr(7, "Test", c$$12, new _AST.TestKind(2, "OptionTest", false), r$$54);
      }

    case 3:
      {
        return null;
      }
  }
}

function optionModule(com$$46, ctx$$35, r$$55, t$$81, i$$25, _arg1$$25, args$$88) {
  const toArray$$1 = function toArray$$1(r$$56, t$$82, arg$$32) {
    const ident$$5 = (0, _Transforms.AST$$$makeIdentUnique)(com$$46, "x");
    const f$$11 = (0, _Transforms.AST$$$makeDelegate)((0, _Types.L)(ident$$5, (0, _Types.L)()), (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)(new _AST.Expr(1, "IdentExpr", ident$$5), (0, _Types.L)())));
    return Helper$$$CoreCall$$39739A92("Option", "defaultArg", t$$82, (0, _Types.L)(arg$$32, (0, _Types.L)((0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()), (0, _Types.L)(f$$11, (0, _Types.L)()))), null, null, null, null, r$$56);
  };

  const matchValue$$50 = [i$$25.CompiledName, args$$88];
  var $target$$122, c$$13, c$$14, c$$15, c$$16, c$$17, arg$$33, f$$12, arg$$34, folder$$2, opt, state$$2, meth$$23;

  if (matchValue$$50[0] === "None") {
    $target$$122 = 0;
  } else if (matchValue$$50[0] === "GetValue") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 1;
        c$$13 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "OfObj") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 2;
        c$$14 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "OfNullable") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 2;
        c$$14 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "ToObj") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 3;
        c$$15 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "ToNullable") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 3;
        c$$15 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "Flatten") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 3;
        c$$15 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "IsSome") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 4;
        c$$16 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "IsNone") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 5;
        c$$17 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "Map") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail != null) {
        if (matchValue$$50[1].tail.tail.tail == null) {
          $target$$122 = 6;
          arg$$33 = matchValue$$50[1].tail.head;
          f$$12 = matchValue$$50[1].head;
        } else {
          $target$$122 = 13;
        }
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "Bind") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail != null) {
        if (matchValue$$50[1].tail.tail.tail == null) {
          $target$$122 = 6;
          arg$$33 = matchValue$$50[1].tail.head;
          f$$12 = matchValue$$50[1].head;
        } else {
          $target$$122 = 13;
        }
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "Filter") {
    $target$$122 = 7;
  } else if (matchValue$$50[0] === "ToArray") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail == null) {
        $target$$122 = 8;
        arg$$34 = matchValue$$50[1].head;
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "FoldBack") {
    if (matchValue$$50[1].tail != null) {
      if (matchValue$$50[1].tail.tail != null) {
        if (matchValue$$50[1].tail.tail.tail != null) {
          if (matchValue$$50[1].tail.tail.tail.tail == null) {
            $target$$122 = 9;
            folder$$2 = matchValue$$50[1].head;
            opt = matchValue$$50[1].tail.head;
            state$$2 = matchValue$$50[1].tail.tail.head;
          } else {
            $target$$122 = 13;
          }
        } else {
          $target$$122 = 13;
        }
      } else {
        $target$$122 = 13;
      }
    } else {
      $target$$122 = 13;
    }
  } else if (matchValue$$50[0] === "DefaultValue") {
    $target$$122 = 10;
  } else if (matchValue$$50[0] === "OrElse") {
    $target$$122 = 10;
  } else if (matchValue$$50[0] === "DefaultWith") {
    $target$$122 = 11;
  } else if (matchValue$$50[0] === "OrElseWith") {
    $target$$122 = 11;
  } else if (matchValue$$50[0] === "Count") {
    $target$$122 = 12;
    meth$$23 = matchValue$$50[0];
  } else if (matchValue$$50[0] === "Contains") {
    $target$$122 = 12;
    meth$$23 = matchValue$$50[0];
  } else if (matchValue$$50[0] === "Exists") {
    $target$$122 = 12;
    meth$$23 = matchValue$$50[0];
  } else if (matchValue$$50[0] === "Fold") {
    $target$$122 = 12;
    meth$$23 = matchValue$$50[0];
  } else if (matchValue$$50[0] === "ForAll") {
    $target$$122 = 12;
    meth$$23 = matchValue$$50[0];
  } else if (matchValue$$50[0] === "Iterate") {
    $target$$122 = 12;
    meth$$23 = matchValue$$50[0];
  } else if (matchValue$$50[0] === "ToList") {
    $target$$122 = 12;
    meth$$23 = matchValue$$50[0];
  } else {
    $target$$122 = 13;
  }

  switch ($target$$122) {
    case 0:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(9, "NewOption", null, t$$81));
      }

    case 1:
      {
        return new _AST.Expr(9, "Get", c$$13, new _AST.GetKind(7, "OptionValue"), t$$81, r$$55);
      }

    case 2:
      {
        return new _AST.Expr(2, "TypeCast", c$$14, t$$81);
      }

    case 3:
      {
        return Helper$$$CoreCall$$39739A92("Option", "value", t$$81, (0, _Types.L)(c$$15, (0, _Types.L)((0, _Transforms.AST$$$makeBoolConst)(true), (0, _Types.L)())), null, null, null, null, r$$55);
      }

    case 4:
      {
        return new _AST.Expr(7, "Test", c$$16, new _AST.TestKind(2, "OptionTest", true), r$$55);
      }

    case 5:
      {
        return new _AST.Expr(7, "Test", c$$17, new _AST.TestKind(2, "OptionTest", false), r$$55);
      }

    case 6:
      {
        const patternInput$$6 = i$$25.SignatureArgTypes.tail != null ? i$$25.SignatureArgTypes.tail.tail != null ? i$$25.SignatureArgTypes.tail.tail.tail == null ? [i$$25.SignatureArgTypes.head, i$$25.SignatureArgTypes.tail.head] : [(0, _AST.Expr$$get_Type)(f$$12), (0, _AST.Expr$$get_Type)(arg$$33)] : [(0, _AST.Expr$$get_Type)(f$$12), (0, _AST.Expr$$get_Type)(arg$$33)] : [(0, _AST.Expr$$get_Type)(f$$12), (0, _AST.Expr$$get_Type)(arg$$33)];
        const args$$90 = (0, _Types.L)(arg$$33, (0, _Types.L)(new _AST.Expr(0, "Value", new _AST.ValueKind(9, "NewOption", null, patternInput$$6[1])), (0, _Types.L)(f$$12, (0, _Types.L)())));
        return Helper$$$CoreCall$$39739A92("Option", "defaultArg", t$$81, args$$90, (0, _Types.L)(patternInput$$6[1], (0, _Types.L)(new _AST.Type(9, "Option", patternInput$$6[1]), (0, _Types.L)(patternInput$$6[0], (0, _Types.L)()))), null, null, null, r$$55);
      }

    case 7:
      {
        return Helper$$$CoreCall$$39739A92("Option", "filter", t$$81, args$$88, i$$25.SignatureArgTypes, null, null, null, r$$55);
      }

    case 8:
      {
        return toArray$$1(r$$55, t$$81, arg$$34);
      }

    case 9:
      {
        return Helper$$$CoreCall$$39739A92("Seq", "foldBack", t$$81, (0, _Types.L)(folder$$2, (0, _Types.L)(toArray$$1(null, new _AST.Type(1, "Any"), opt), (0, _Types.L)(state$$2, (0, _Types.L)()))), i$$25.SignatureArgTypes, null, null, null, r$$55);
      }

    case 10:
      {
        return Helper$$$CoreCall$$39739A92("Option", "defaultArg", t$$81, (0, _List.reverse)(args$$88), null, null, null, null, r$$55);
      }

    case 11:
      {
        return Helper$$$CoreCall$$39739A92("Option", "defaultArgWith", t$$81, (0, _List.reverse)(args$$88), (0, _List.reverse)(i$$25.SignatureArgTypes), null, null, null, r$$55);
      }

    case 12:
      {
        const args$$91 = (0, _Prelude.List$$$replaceLast)((0, _Util.partialApply)(1, toArray$$1, [null, new _AST.Type(1, "Any")]), args$$88);
        const patternInput$$7 = meth$$23 === "ToList" ? ["List", "ofArray"] : ["Seq", (0, _Prelude.Naming$$$lowerFirst)(meth$$23)];
        return Helper$$$CoreCall$$39739A92(patternInput$$7[0], patternInput$$7[1], t$$81, args$$91, i$$25.SignatureArgTypes, null, null, null, r$$55);
      }

    case 13:
      {
        return null;
      }
  }
}

const ParseTarget = (0, _Types.declare)(function ParseTarget(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ParseTarget = ParseTarget;

function parse(target$$2, com$$47, ctx$$36, r$$57, t$$83, i$$26, thisArg$$20, args$$92) {
  const patternInput$$8 = target$$2.tag === 1 ? [false, "Long"] : target$$2.tag === 2 ? [true, "Double"] : [false, "Int32"];
  const matchValue$$52 = [i$$26.CompiledName, args$$92];
  var $target$$123;

  if (matchValue$$52[0] === "IsNaN") {
    if (matchValue$$52[1].tail != null) {
      if (matchValue$$52[1].tail.tail == null) {
        if (patternInput$$8[0]) {
          $target$$123 = 0;
        } else {
          $target$$123 = 1;
        }
      } else {
        $target$$123 = 1;
      }
    } else {
      $target$$123 = 1;
    }
  } else {
    $target$$123 = 1;
  }

  switch ($target$$123) {
    case 0:
      {
        return Helper$$$GlobalCall$$Z6A200D61("Number", t$$83, args$$92, null, "isNaN", null, r$$57);
      }

    case 1:
      {
        var $target$$124;

        if (matchValue$$52[0] === "IsInfinity") {
          if (matchValue$$52[1].tail != null) {
            if (matchValue$$52[1].tail.tail == null) {
              if (patternInput$$8[0]) {
                $target$$124 = 0;
              } else {
                $target$$124 = 1;
              }
            } else {
              $target$$124 = 1;
            }
          } else {
            $target$$124 = 1;
          }
        } else {
          $target$$124 = 1;
        }

        switch ($target$$124) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("Double", "isInfinity", t$$83, args$$92, i$$26.SignatureArgTypes, null, null, null, r$$57);
            }

          case 1:
            {
              var $target$$125, str, hexConst$0027, str$$1, str$$2, defValue, str$$3, format;

              if (matchValue$$52[0] === "Parse") {
                if (matchValue$$52[1].tail != null) {
                  if (matchValue$$52[1].tail.tail != null) {
                    if (matchValue$$52[1].tail.head.tag === 0) {
                      if (matchValue$$52[1].tail.head.fields[0].tag === 8) {
                        if (matchValue$$52[1].tail.head.fields[0].fields[0].tag === 0) {
                          if (matchValue$$52[1].tail.head.fields[0].fields[0].fields[0].tag === 0) {
                            if (matchValue$$52[1].tail.head.fields[0].fields[0].fields[0].fields[0].tag === 6) {
                              if (matchValue$$52[1].tail.tail.tail == null) {
                                $target$$125 = 1;
                                hexConst$0027 = matchValue$$52[1].tail.head.fields[0].fields[0].fields[0].fields[0].fields[0];
                                str$$1 = matchValue$$52[1].head;
                              } else {
                                $target$$125 = 2;
                                str$$2 = matchValue$$52[1].head;
                              }
                            } else {
                              $target$$125 = 2;
                              str$$2 = matchValue$$52[1].head;
                            }
                          } else {
                            $target$$125 = 2;
                            str$$2 = matchValue$$52[1].head;
                          }
                        } else {
                          $target$$125 = 2;
                          str$$2 = matchValue$$52[1].head;
                        }
                      } else {
                        $target$$125 = 2;
                        str$$2 = matchValue$$52[1].head;
                      }
                    } else {
                      $target$$125 = 2;
                      str$$2 = matchValue$$52[1].head;
                    }
                  } else {
                    $target$$125 = 0;
                    str = matchValue$$52[1].head;
                  }
                } else {
                  $target$$125 = 6;
                }
              } else if (matchValue$$52[0] === "TryParse") {
                if (matchValue$$52[1].tail != null) {
                  if (matchValue$$52[1].tail.tail != null) {
                    if (matchValue$$52[1].tail.tail.tail == null) {
                      $target$$125 = 3;
                      defValue = matchValue$$52[1].tail.head;
                      str$$3 = matchValue$$52[1].head;
                    } else {
                      $target$$125 = 6;
                    }
                  } else {
                    $target$$125 = 6;
                  }
                } else {
                  $target$$125 = 6;
                }
              } else if (matchValue$$52[0] === "ToString") {
                if (matchValue$$52[1].tail != null) {
                  if (matchValue$$52[1].head.tag === 0) {
                    if (matchValue$$52[1].head.fields[0].tag === 5) {
                      if (matchValue$$52[1].tail.tail == null) {
                        $target$$125 = 4;
                        format = matchValue$$52[1].head;
                      } else {
                        $target$$125 = 5;
                      }
                    } else {
                      $target$$125 = 5;
                    }
                  } else {
                    $target$$125 = 5;
                  }
                } else {
                  $target$$125 = 5;
                }
              } else {
                $target$$125 = 6;
              }

              switch ($target$$125) {
                case 0:
                  {
                    return Helper$$$CoreCall$$39739A92(patternInput$$8[1], "parse", t$$83, (0, _Types.L)(str, (0, _Types.L)(patternInput$$8[0] ? (0, _Transforms.AST$$$makeFloatConst)(10) : (0, _Transforms.AST$$$makeIntConst)(10), (0, _Types.L)())), (0, _Types.L)((0, _List.head)(i$$26.SignatureArgTypes), (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(6, "Float32")), (0, _Types.L)())), null, null, null, r$$57);
                  }

                case 1:
                  {
                    const hexConst = 515;

                    if (hexConst$0027 === hexConst) {
                      return Helper$$$CoreCall$$39739A92(patternInput$$8[1], "parse", t$$83, (0, _Types.L)(str$$1, (0, _Types.L)(patternInput$$8[0] ? (0, _Transforms.AST$$$makeFloatConst)(16) : (0, _Transforms.AST$$$makeIntConst)(16), (0, _Types.L)())), (0, _Types.L)((0, _List.head)(i$$26.SignatureArgTypes), (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(6, "Float32")), (0, _Types.L)())), null, null, null, r$$57);
                    } else {
                      return null;
                    }
                  }

                case 2:
                  {
                    (0, _Transforms.Log$$$addWarning)(com$$47, ctx$$36.InlinePath, r$$57, (0, _String.toText)((0, _String.printf)("%s.Parse(): second argument is ignored"))(i$$26.DeclaringEntityFullName));
                    return Helper$$$CoreCall$$39739A92(patternInput$$8[1], "parse", t$$83, (0, _Types.L)(str$$2, (0, _Types.L)(patternInput$$8[0] ? (0, _Transforms.AST$$$makeFloatConst)(10) : (0, _Transforms.AST$$$makeIntConst)(10), (0, _Types.L)())), (0, _Types.L)((0, _List.head)(i$$26.SignatureArgTypes), (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(6, "Float32")), (0, _Types.L)())));
                  }

                case 3:
                  {
                    return Helper$$$CoreCall$$39739A92(patternInput$$8[1], "tryParse", t$$83, (0, _Types.L)(str$$3, (0, _Types.L)(patternInput$$8[0] ? (0, _Transforms.AST$$$makeFloatConst)(10) : (0, _Transforms.AST$$$makeIntConst)(10), (0, _Types.L)(defValue, (0, _Types.L)()))), (0, _Types.L)((0, _List.head)(i$$26.SignatureArgTypes), (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(6, "Float32")), (0, _Types.L)((0, _List.head)((0, _List.tail)(i$$26.SignatureArgTypes)), (0, _Types.L)()))), null, null, null, r$$57);
                  }

                case 4:
                  {
                    const format$$1 = Helpers$$$emitJs(r$$57, new _AST.Type(5, "String"), (0, _Types.L)(format, (0, _Types.L)()), "'{0:' + $0 + '}'");
                    return Helper$$$CoreCall$$39739A92("String", "format", t$$83, (0, _Types.L)(format$$1, (0, _Types.L)(thisArg$$20, (0, _Types.L)())), (0, _Types.L)((0, _AST.Expr$$get_Type)(format$$1), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$20), (0, _Types.L)())), null, null, null, r$$57);
                  }

                case 5:
                  {
                    return Helper$$$CoreCall$$39739A92("Util", "toString", t$$83, (0, _Types.L)(thisArg$$20, (0, _Types.L)()), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$20), (0, _Types.L)()), null, null, null, r$$57);
                  }

                case 6:
                  {
                    return null;
                  }
              }
            }
        }
      }
  }
}

function decimals(com$$48, ctx$$37, r$$58, t$$84, i$$27, thisArg$$21, args$$93) {
  const matchValue$$53 = [i$$27.CompiledName, args$$93];
  var $target$$126, x$$46, arVals, high, isNegative, low$$1, mid$$1, scale$$1, arg$$35, left$$33, right$$28, left$$34, right$$29, left$$35, right$$30, left$$36, right$$31, arg$$36, arg$$37;

  if (matchValue$$53[0] === ".ctor") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].head.tag === 0) {
        if (matchValue$$53[1].head.fields[0].tag === 6) {
          if (matchValue$$53[1].tail.tail != null) {
            if (matchValue$$53[1].tail.head.tag === 0) {
              if (matchValue$$53[1].tail.head.fields[0].tag === 6) {
                if (matchValue$$53[1].tail.head.fields[0].fields[1].tag === 4) {
                  if (matchValue$$53[1].tail.tail.tail != null) {
                    if (matchValue$$53[1].tail.tail.head.tag === 0) {
                      if (matchValue$$53[1].tail.tail.head.fields[0].tag === 6) {
                        if (matchValue$$53[1].tail.tail.head.fields[0].fields[1].tag === 4) {
                          if (matchValue$$53[1].tail.tail.tail.tail != null) {
                            if (matchValue$$53[1].tail.tail.tail.head.tag === 0) {
                              if (matchValue$$53[1].tail.tail.tail.head.fields[0].tag === 3) {
                                if (matchValue$$53[1].tail.tail.tail.tail.tail != null) {
                                  if (matchValue$$53[1].tail.tail.tail.tail.head.tag === 0) {
                                    if (matchValue$$53[1].tail.tail.tail.tail.head.fields[0].tag === 6) {
                                      if (matchValue$$53[1].tail.tail.tail.tail.head.fields[0].fields[1].tag === 1) {
                                        if (matchValue$$53[1].tail.tail.tail.tail.tail.tail == null) {
                                          if (matchValue$$53[1].head.fields[0].fields[1].tag === 4) {
                                            $target$$126 = 2;
                                            high = matchValue$$53[1].tail.tail.head.fields[0].fields[0];
                                            isNegative = matchValue$$53[1].tail.tail.tail.head.fields[0].fields[0];
                                            low$$1 = matchValue$$53[1].head.fields[0].fields[0];
                                            mid$$1 = matchValue$$53[1].tail.head.fields[0].fields[0];
                                            scale$$1 = matchValue$$53[1].tail.tail.tail.tail.head.fields[0].fields[0];
                                          } else {
                                            $target$$126 = 11;
                                          }
                                        } else {
                                          $target$$126 = 11;
                                        }
                                      } else {
                                        $target$$126 = 11;
                                      }
                                    } else {
                                      $target$$126 = 11;
                                    }
                                  } else {
                                    $target$$126 = 11;
                                  }
                                } else {
                                  $target$$126 = 11;
                                }
                              } else {
                                $target$$126 = 11;
                              }
                            } else {
                              $target$$126 = 11;
                            }
                          } else {
                            $target$$126 = 11;
                          }
                        } else {
                          $target$$126 = 11;
                        }
                      } else {
                        $target$$126 = 11;
                      }
                    } else {
                      $target$$126 = 11;
                    }
                  } else {
                    $target$$126 = 11;
                  }
                } else {
                  $target$$126 = 11;
                }
              } else {
                $target$$126 = 11;
              }
            } else {
              $target$$126 = 11;
            }
          } else {
            $target$$126 = 0;
            x$$46 = matchValue$$53[1].head.fields[0].fields[0];
          }
        } else if (matchValue$$53[1].head.fields[0].tag === 10) {
          if (matchValue$$53[1].head.fields[0].fields[0].tag === 0) {
            if (matchValue$$53[1].tail.tail == null) {
              $target$$126 = 1;
              arVals = matchValue$$53[1].head.fields[0].fields[0].fields[0];
            } else {
              $target$$126 = 11;
            }
          } else {
            $target$$126 = 11;
          }
        } else {
          $target$$126 = 11;
        }
      } else if (matchValue$$53[1].head.tag === 1) {
        if (matchValue$$53[1].tail.tail == null) {
          $target$$126 = 3;
          arg$$35 = matchValue$$53[1].head;
        } else {
          $target$$126 = 11;
        }
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else if (matchValue$$53[0] === "MakeDecimal") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].head.tag === 0) {
        if (matchValue$$53[1].head.fields[0].tag === 6) {
          if (matchValue$$53[1].head.fields[0].fields[1].tag === 4) {
            if (matchValue$$53[1].tail.tail != null) {
              if (matchValue$$53[1].tail.head.tag === 0) {
                if (matchValue$$53[1].tail.head.fields[0].tag === 6) {
                  if (matchValue$$53[1].tail.head.fields[0].fields[1].tag === 4) {
                    if (matchValue$$53[1].tail.tail.tail != null) {
                      if (matchValue$$53[1].tail.tail.head.tag === 0) {
                        if (matchValue$$53[1].tail.tail.head.fields[0].tag === 6) {
                          if (matchValue$$53[1].tail.tail.head.fields[0].fields[1].tag === 4) {
                            if (matchValue$$53[1].tail.tail.tail.tail != null) {
                              if (matchValue$$53[1].tail.tail.tail.head.tag === 0) {
                                if (matchValue$$53[1].tail.tail.tail.head.fields[0].tag === 3) {
                                  if (matchValue$$53[1].tail.tail.tail.tail.tail != null) {
                                    if (matchValue$$53[1].tail.tail.tail.tail.head.tag === 0) {
                                      if (matchValue$$53[1].tail.tail.tail.tail.head.fields[0].tag === 6) {
                                        if (matchValue$$53[1].tail.tail.tail.tail.head.fields[0].fields[1].tag === 1) {
                                          if (matchValue$$53[1].tail.tail.tail.tail.tail.tail == null) {
                                            $target$$126 = 2;
                                            high = matchValue$$53[1].tail.tail.head.fields[0].fields[0];
                                            isNegative = matchValue$$53[1].tail.tail.tail.head.fields[0].fields[0];
                                            low$$1 = matchValue$$53[1].head.fields[0].fields[0];
                                            mid$$1 = matchValue$$53[1].tail.head.fields[0].fields[0];
                                            scale$$1 = matchValue$$53[1].tail.tail.tail.tail.head.fields[0].fields[0];
                                          } else {
                                            $target$$126 = 11;
                                          }
                                        } else {
                                          $target$$126 = 11;
                                        }
                                      } else {
                                        $target$$126 = 11;
                                      }
                                    } else {
                                      $target$$126 = 11;
                                    }
                                  } else {
                                    $target$$126 = 11;
                                  }
                                } else {
                                  $target$$126 = 11;
                                }
                              } else {
                                $target$$126 = 11;
                              }
                            } else {
                              $target$$126 = 11;
                            }
                          } else {
                            $target$$126 = 11;
                          }
                        } else {
                          $target$$126 = 11;
                        }
                      } else {
                        $target$$126 = 11;
                      }
                    } else {
                      $target$$126 = 11;
                    }
                  } else {
                    $target$$126 = 11;
                  }
                } else {
                  $target$$126 = 11;
                }
              } else {
                $target$$126 = 11;
              }
            } else {
              $target$$126 = 11;
            }
          } else {
            $target$$126 = 11;
          }
        } else {
          $target$$126 = 11;
        }
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else if (matchValue$$53[0] === "Parse") {
    $target$$126 = 4;
  } else if (matchValue$$53[0] === "TryParse") {
    $target$$126 = 4;
  } else if (matchValue$$53[0] === "op_LessThan") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].tail.tail != null) {
        if (matchValue$$53[1].tail.tail.tail == null) {
          $target$$126 = 5;
          left$$33 = matchValue$$53[1].head;
          right$$28 = matchValue$$53[1].tail.head;
        } else {
          $target$$126 = 11;
        }
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else if (matchValue$$53[0] === "op_LessThanOrEqual") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].tail.tail != null) {
        if (matchValue$$53[1].tail.tail.tail == null) {
          $target$$126 = 6;
          left$$34 = matchValue$$53[1].head;
          right$$29 = matchValue$$53[1].tail.head;
        } else {
          $target$$126 = 11;
        }
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else if (matchValue$$53[0] === "op_GreaterThan") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].tail.tail != null) {
        if (matchValue$$53[1].tail.tail.tail == null) {
          $target$$126 = 7;
          left$$35 = matchValue$$53[1].head;
          right$$30 = matchValue$$53[1].tail.head;
        } else {
          $target$$126 = 11;
        }
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else if (matchValue$$53[0] === "op_GreaterThanOrEqual") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].tail.tail != null) {
        if (matchValue$$53[1].tail.tail.tail == null) {
          $target$$126 = 8;
          left$$36 = matchValue$$53[1].head;
          right$$31 = matchValue$$53[1].tail.head;
        } else {
          $target$$126 = 11;
        }
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else if (matchValue$$53[0] === "op_UnaryNegation") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].tail.tail == null) {
        $target$$126 = 9;
        arg$$36 = matchValue$$53[1].head;
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else if (matchValue$$53[0] === "op_Explicit") {
    if (matchValue$$53[1].tail != null) {
      if (matchValue$$53[1].tail.tail == null) {
        $target$$126 = 10;
        arg$$37 = matchValue$$53[1].head;
      } else {
        $target$$126 = 11;
      }
    } else {
      $target$$126 = 11;
    }
  } else {
    $target$$126 = 11;
  }

  switch ($target$$126) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeDecConst)(x$$46);
      }

    case 1:
      {
        var $target$$127, _high, low, mid, scale;

        if (arVals.tail != null) {
          if (arVals.head.tag === 0) {
            if (arVals.head.fields[0].tag === 6) {
              if (arVals.head.fields[0].fields[1].tag === 4) {
                if (arVals.tail.tail != null) {
                  if (arVals.tail.head.tag === 0) {
                    if (arVals.tail.head.fields[0].tag === 6) {
                      if (arVals.tail.head.fields[0].fields[1].tag === 4) {
                        if (arVals.tail.tail.tail != null) {
                          if (arVals.tail.tail.head.tag === 0) {
                            if (arVals.tail.tail.head.fields[0].tag === 6) {
                              if (arVals.tail.tail.head.fields[0].fields[1].tag === 4) {
                                if (arVals.tail.tail.tail.tail != null) {
                                  if (arVals.tail.tail.tail.head.tag === 0) {
                                    if (arVals.tail.tail.tail.head.fields[0].tag === 6) {
                                      if (arVals.tail.tail.tail.head.fields[0].fields[1].tag === 4) {
                                        if (arVals.tail.tail.tail.tail.tail == null) {
                                          $target$$127 = 0;
                                          _high = arVals.tail.tail.head.fields[0].fields[0];
                                          low = arVals.head.fields[0].fields[0];
                                          mid = arVals.tail.head.fields[0].fields[0];
                                          scale = arVals.tail.tail.tail.head.fields[0].fields[0];
                                        } else {
                                          $target$$127 = 1;
                                        }
                                      } else {
                                        $target$$127 = 1;
                                      }
                                    } else {
                                      $target$$127 = 1;
                                    }
                                  } else {
                                    $target$$127 = 1;
                                  }
                                } else {
                                  $target$$127 = 1;
                                }
                              } else {
                                $target$$127 = 1;
                              }
                            } else {
                              $target$$127 = 1;
                            }
                          } else {
                            $target$$127 = 1;
                          }
                        } else {
                          $target$$127 = 1;
                        }
                      } else {
                        $target$$127 = 1;
                      }
                    } else {
                      $target$$127 = 1;
                    }
                  } else {
                    $target$$127 = 1;
                  }
                } else {
                  $target$$127 = 1;
                }
              } else {
                $target$$127 = 1;
              }
            } else {
              $target$$127 = 1;
            }
          } else {
            $target$$127 = 1;
          }
        } else {
          $target$$127 = 1;
        }

        switch ($target$$127) {
          case 0:
            {
              const x$$47 = (0, _Long.toNumber)((0, _Long.op_BitwiseOr)((0, _Long.op_LeftShift)((0, _Long.fromInteger)(mid >>> 0, true, 6), 32), (0, _Long.fromInteger)(low >>> 0, true, 6))) / Math.pow(10, ~~scale >> 16 & 255);
              return (0, _Transforms.AST$$$makeDecConst)(scale < 0 ? -x$$47 : x$$47);
            }

          case 1:
            {
              return null;
            }
        }
      }

    case 2:
      {
        const x$$49 = (0, _Long.toNumber)((0, _Long.op_BitwiseOr)((0, _Long.op_LeftShift)((0, _Long.fromInteger)(mid$$1 >>> 0, true, 6), 32), (0, _Long.fromInteger)(low$$1 >>> 0, true, 6))) / Math.pow(10, scale$$1);
        return (0, _Transforms.AST$$$makeDecConst)(isNegative ? -x$$49 : x$$49);
      }

    case 3:
      {
        (0, _Transforms.Log$$$addWarning)(com$$48, ctx$$37.InlinePath, r$$58, "Decimals are implemented with floats.");
        return arg$$35;
      }

    case 4:
      {
        return parse(new ParseTarget(2, "Parse2Float"), com$$48, ctx$$37, r$$58, t$$84, i$$27, thisArg$$21, args$$93);
      }

    case 5:
      {
        return compareIf(com$$48, r$$58, left$$33, right$$28, new _AST2.BinaryOperator(4, "BinaryLess"));
      }

    case 6:
      {
        return compareIf(com$$48, r$$58, left$$34, right$$29, new _AST2.BinaryOperator(5, "BinaryLessOrEqual"));
      }

    case 7:
      {
        return compareIf(com$$48, r$$58, left$$35, right$$30, new _AST2.BinaryOperator(6, "BinaryGreater"));
      }

    case 8:
      {
        return compareIf(com$$48, r$$58, left$$36, right$$31, new _AST2.BinaryOperator(7, "BinaryGreaterOrEqual"));
      }

    case 9:
      {
        return applyOp(com$$48, ctx$$37, r$$58, t$$84, i$$27.CompiledName, args$$93, i$$27.SignatureArgTypes, i$$27.GenericArgs);
      }

    case 10:
      {
        var $target$$128;

        if (t$$84.tag === 7) {
          if ($007CInteger$007CFloat$007C(t$$84.fields[0]).tag === 0) {
            $target$$128 = 0;
          } else {
            const activePatternResult67535 = $007CBuiltin$007C_$007C(t$$84);

            if (activePatternResult67535 != null) {
              if (activePatternResult67535.tag === 5) {
                $target$$128 = 0;
              } else if (activePatternResult67535.tag === 6) {
                $target$$128 = 0;
              } else {
                $target$$128 = 1;
              }
            } else {
              $target$$128 = 1;
            }
          }
        } else {
          const activePatternResult67536 = $007CBuiltin$007C_$007C(t$$84);

          if (activePatternResult67536 != null) {
            if (activePatternResult67536.tag === 5) {
              $target$$128 = 0;
            } else if (activePatternResult67536.tag === 6) {
              $target$$128 = 0;
            } else {
              $target$$128 = 1;
            }
          } else {
            $target$$128 = 1;
          }
        }

        switch ($target$$128) {
          case 0:
            {
              return toInt(com$$48, ctx$$37, r$$58, false, t$$84, args$$93);
            }

          case 1:
            {
              var $target$$129;

              if (t$$84.tag === 7) {
                if ($007CInteger$007CFloat$007C(t$$84.fields[0]).tag === 1) {
                  $target$$129 = 0;
                } else {
                  $target$$129 = 1;
                }
              } else {
                $target$$129 = 1;
              }

              switch ($target$$129) {
                case 0:
                  {
                    return toFloat(com$$48, ctx$$37, r$$58, t$$84, args$$93);
                  }

                case 1:
                  {
                    return null;
                  }
              }
            }
        }
      }

    case 11:
      {
        return null;
      }
  }
}

function bigints(com$$49, ctx$$38, r$$59, t$$85, i$$28, thisArg$$22, args$$94) {
  const matchValue$$54 = [thisArg$$22, i$$28.CompiledName];

  if (matchValue$$54[0] != null) {
    const callee$$10 = matchValue$$54[0];
    return Helper$$$CoreCall$$39739A92("BigInt", (0, _Prelude.Naming$$$lowerFirst)(matchValue$$54[1]), t$$85, (0, _Types.L)(callee$$10, (0, _Types.L)()), i$$28.SignatureArgTypes, null, null, null, r$$59);
  } else if (matchValue$$54[1] === ".ctor") {
    var $target$$130;

    if (i$$28.SignatureArgTypes.tail != null) {
      const activePatternResult67546 = $007CBuiltin$007C_$007C(i$$28.SignatureArgTypes.head);

      if (activePatternResult67546 != null) {
        if (activePatternResult67546.tag === 5) {
          if (i$$28.SignatureArgTypes.tail.tail == null) {
            $target$$130 = 0;
          } else {
            $target$$130 = 1;
          }
        } else if (activePatternResult67546.tag === 6) {
          if (i$$28.SignatureArgTypes.tail.tail == null) {
            $target$$130 = 0;
          } else {
            $target$$130 = 1;
          }
        } else {
          $target$$130 = 1;
        }
      } else {
        $target$$130 = 1;
      }
    } else {
      $target$$130 = 1;
    }

    switch ($target$$130) {
      case 0:
        {
          return Helper$$$CoreCall$$39739A92("BigInt", "fromInt64", t$$85, args$$94, i$$28.SignatureArgTypes, null, null, null, r$$59);
        }

      case 1:
        {
          return Helper$$$CoreCall$$39739A92("BigInt", "fromInt32", t$$85, args$$94, i$$28.SignatureArgTypes, null, null, null, r$$59);
        }
    }
  } else if (matchValue$$54[1] === "op_Explicit") {
    var $target$$131;

    if (t$$85.tag === 7) {
      if ($007CInteger$007CFloat$007C(t$$85.fields[0]).tag === 0) {
        $target$$131 = 0;
      } else {
        const activePatternResult67552 = $007CBuiltin$007C_$007C(t$$85);

        if (activePatternResult67552 != null) {
          if (activePatternResult67552.tag === 5) {
            $target$$131 = 0;
          } else if (activePatternResult67552.tag === 6) {
            $target$$131 = 0;
          } else {
            $target$$131 = 1;
          }
        } else {
          $target$$131 = 1;
        }
      }
    } else {
      const activePatternResult67553 = $007CBuiltin$007C_$007C(t$$85);

      if (activePatternResult67553 != null) {
        if (activePatternResult67553.tag === 5) {
          $target$$131 = 0;
        } else if (activePatternResult67553.tag === 6) {
          $target$$131 = 0;
        } else {
          $target$$131 = 1;
        }
      } else {
        $target$$131 = 1;
      }
    }

    switch ($target$$131) {
      case 0:
        {
          return toInt(com$$49, ctx$$38, r$$59, false, t$$85, args$$94);
        }

      case 1:
        {
          var $target$$132;

          if (t$$85.tag === 7) {
            if ($007CInteger$007CFloat$007C(t$$85.fields[0]).tag === 1) {
              $target$$132 = 0;
            } else {
              $target$$132 = 1;
            }
          } else {
            $target$$132 = 1;
          }

          switch ($target$$132) {
            case 0:
              {
                return toFloat(com$$49, ctx$$38, r$$59, t$$85, args$$94);
              }

            case 1:
              {
                return null;
              }
          }
        }
    }
  } else {
    return Helper$$$CoreCall$$39739A92("BigInt", (0, _Prelude.Naming$$$lowerFirst)(matchValue$$54[1]), t$$85, args$$94, i$$28.SignatureArgTypes, null, null, null, r$$59);
  }
}

function errorStrings(_arg1$$26) {
  switch (_arg1$$26) {
    case "InputArrayEmptyString":
      {
        return Helpers$$$s("The input array was empty");
      }

    case "InputSequenceEmptyString":
      {
        return Helpers$$$s("The input sequence was empty");
      }

    case "InputMustBeNonNegativeString":
      {
        return Helpers$$$s("The input must be non-negative");
      }

    default:
      {
        return null;
      }
  }
}

function languagePrimitives(com$$50, ctx$$39, r$$60, t$$86, i$$29, thisArg$$23, args$$95) {
  const matchValue$$56 = [i$$29.CompiledName, args$$95];
  var $target$$133, arg$$38, arg$$39, arg$$40, arg$$41, comp, left$$37, right$$32, comp$$1, left$$38, right$$33, left$$39, right$$34, left$$40, right$$35, left$$41, right$$36, left$$42, right$$37, left$$43, right$$38, left$$44, right$$39, comp$$2, left$$45, right$$40, left$$46, right$$41, arg$$42, arg$$43;

  if (matchValue$$56[0] === "GenericZero") {
    $target$$133 = 0;
  } else if (matchValue$$56[0] === "GenericOne") {
    $target$$133 = 1;
  } else if (matchValue$$56[0] === "EnumOfValue") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 2;
        arg$$38 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "EnumToValue") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 3;
        arg$$39 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericHash") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 4;
        arg$$40 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericHashIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 4;
        arg$$40 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericHashWithComparer") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 5;
          arg$$41 = matchValue$$56[1].tail.head;
          comp = matchValue$$56[1].head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericHashWithComparerIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 5;
          arg$$41 = matchValue$$56[1].tail.head;
          comp = matchValue$$56[1].head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericComparison") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 6;
          left$$37 = matchValue$$56[1].head;
          right$$32 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericComparisonIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 6;
          left$$37 = matchValue$$56[1].head;
          right$$32 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericComparisonWithComparer") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail != null) {
          if (matchValue$$56[1].tail.tail.tail.tail == null) {
            $target$$133 = 7;
            comp$$1 = matchValue$$56[1].head;
            left$$38 = matchValue$$56[1].tail.head;
            right$$33 = matchValue$$56[1].tail.tail.head;
          } else {
            $target$$133 = 19;
          }
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericComparisonWithComparerIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail != null) {
          if (matchValue$$56[1].tail.tail.tail.tail == null) {
            $target$$133 = 7;
            comp$$1 = matchValue$$56[1].head;
            left$$38 = matchValue$$56[1].tail.head;
            right$$33 = matchValue$$56[1].tail.tail.head;
          } else {
            $target$$133 = 19;
          }
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericLessThan") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 8;
          left$$39 = matchValue$$56[1].head;
          right$$34 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericLessThanIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 8;
          left$$39 = matchValue$$56[1].head;
          right$$34 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericLessOrEqual") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 9;
          left$$40 = matchValue$$56[1].head;
          right$$35 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericLessOrEqualIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 9;
          left$$40 = matchValue$$56[1].head;
          right$$35 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericGreaterThan") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 10;
          left$$41 = matchValue$$56[1].head;
          right$$36 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericGreaterThanIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 10;
          left$$41 = matchValue$$56[1].head;
          right$$36 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericGreaterOrEqual") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 11;
          left$$42 = matchValue$$56[1].head;
          right$$37 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericGreaterOrEqualIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 11;
          left$$42 = matchValue$$56[1].head;
          right$$37 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericEquality") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 12;
          left$$43 = matchValue$$56[1].head;
          right$$38 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericEqualityIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 12;
          left$$43 = matchValue$$56[1].head;
          right$$38 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericEqualityER") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 13;
          left$$44 = matchValue$$56[1].head;
          right$$39 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericEqualityERIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 13;
          left$$44 = matchValue$$56[1].head;
          right$$39 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericEqualityWithComparer") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail != null) {
          if (matchValue$$56[1].tail.tail.tail.tail == null) {
            $target$$133 = 14;
            comp$$2 = matchValue$$56[1].head;
            left$$45 = matchValue$$56[1].tail.head;
            right$$40 = matchValue$$56[1].tail.tail.head;
          } else {
            $target$$133 = 19;
          }
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericEqualityWithComparerIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail != null) {
          if (matchValue$$56[1].tail.tail.tail.tail == null) {
            $target$$133 = 14;
            comp$$2 = matchValue$$56[1].head;
            left$$45 = matchValue$$56[1].tail.head;
            right$$40 = matchValue$$56[1].tail.tail.head;
          } else {
            $target$$133 = 19;
          }
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "PhysicalEquality") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 15;
          left$$46 = matchValue$$56[1].head;
          right$$41 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "PhysicalEqualityIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail != null) {
        if (matchValue$$56[1].tail.tail.tail == null) {
          $target$$133 = 15;
          left$$46 = matchValue$$56[1].head;
          right$$41 = matchValue$$56[1].tail.head;
        } else {
          $target$$133 = 19;
        }
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "PhysicalHash") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 16;
        arg$$42 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "PhysicalHashIntrinsic") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 16;
        arg$$42 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "GenericEqualityComparer") {
    $target$$133 = 17;
  } else if (matchValue$$56[0] === "GenericEqualityERComparer") {
    $target$$133 = 17;
  } else if (matchValue$$56[0] === "FastGenericComparer") {
    $target$$133 = 17;
  } else if (matchValue$$56[0] === "FastGenericComparerFromTable") {
    $target$$133 = 17;
  } else if (matchValue$$56[0] === "FastGenericEqualityComparer") {
    $target$$133 = 17;
  } else if (matchValue$$56[0] === "FastGenericEqualityComparerFromTable") {
    $target$$133 = 17;
  } else if (matchValue$$56[0] === "ParseInt32") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 18;
        arg$$43 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "ParseUInt32") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 18;
        arg$$43 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "ParseInt64") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 18;
        arg$$43 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else if (matchValue$$56[0] === "ParseUInt64") {
    if (matchValue$$56[1].tail != null) {
      if (matchValue$$56[1].tail.tail == null) {
        $target$$133 = 18;
        arg$$43 = matchValue$$56[1].head;
      } else {
        $target$$133 = 19;
      }
    } else {
      $target$$133 = 19;
    }
  } else {
    $target$$133 = 19;
  }

  switch ($target$$133) {
    case 0:
      {
        return getZero(com$$50, ctx$$39, t$$86);
      }

    case 1:
      {
        return getOne(com$$50, ctx$$39, t$$86);
      }

    case 2:
      {
        if (t$$86.tag === 8) {
          const fullName = t$$86.fields[1];
          return new _AST.Expr(0, "Value", new _AST.ValueKind(8, "Enum", new _AST.EnumKind(0, "NumberEnum", arg$$38), fullName));
        } else {
          return null;
        }
      }

    case 3:
      {
        var $target$$134, v$$6;

        if (arg$$39.tag === 0) {
          if (arg$$39.fields[0].tag === 8) {
            if (arg$$39.fields[0].fields[0].tag === 0) {
              $target$$134 = 0;
              v$$6 = arg$$39.fields[0].fields[0].fields[0];
            } else {
              $target$$134 = 1;
            }
          } else {
            $target$$134 = 1;
          }
        } else {
          $target$$134 = 1;
        }

        switch ($target$$134) {
          case 0:
            {
              return v$$6;
            }

          case 1:
            {
              return null;
            }
        }
      }

    case 4:
      {
        return structuralHash(r$$60, arg$$40);
      }

    case 5:
      {
        return Helper$$$InstanceCall$$9FFCF9C(comp, "GetHashCode", t$$86, (0, _Types.L)(arg$$41, (0, _Types.L)()), i$$29.SignatureArgTypes, r$$60);
      }

    case 6:
      {
        return compare(com$$50, r$$60, left$$37, right$$32);
      }

    case 7:
      {
        return Helper$$$InstanceCall$$9FFCF9C(comp$$1, "Compare", t$$86, (0, _Types.L)(left$$38, (0, _Types.L)(right$$33, (0, _Types.L)())), i$$29.SignatureArgTypes, r$$60);
      }

    case 8:
      {
        return compareIf(com$$50, r$$60, left$$39, right$$34, new _AST2.BinaryOperator(4, "BinaryLess"));
      }

    case 9:
      {
        return compareIf(com$$50, r$$60, left$$40, right$$35, new _AST2.BinaryOperator(5, "BinaryLessOrEqual"));
      }

    case 10:
      {
        return compareIf(com$$50, r$$60, left$$41, right$$36, new _AST2.BinaryOperator(6, "BinaryGreater"));
      }

    case 11:
      {
        return compareIf(com$$50, r$$60, left$$42, right$$37, new _AST2.BinaryOperator(7, "BinaryGreaterOrEqual"));
      }

    case 12:
      {
        return equals(com$$50, r$$60, true, left$$43, right$$38);
      }

    case 13:
      {
        return equals(com$$50, r$$60, true, left$$44, right$$39);
      }

    case 14:
      {
        return Helper$$$InstanceCall$$9FFCF9C(comp$$2, "Equals", t$$86, (0, _Types.L)(left$$45, (0, _Types.L)(right$$40, (0, _Types.L)())), i$$29.SignatureArgTypes, r$$60);
      }

    case 15:
      {
        return (0, _Transforms.AST$$$makeEqOp)(r$$60, left$$46, right$$41, new _AST2.BinaryOperator(2, "BinaryEqualStrict"));
      }

    case 16:
      {
        return identityHash(r$$60, arg$$42);
      }

    case 17:
      {
        return fsharpModule(com$$50, ctx$$39, r$$60, t$$86, i$$29, thisArg$$23, args$$95);
      }

    case 18:
      {
        return toInt(com$$50, ctx$$39, r$$60, false, t$$86, (0, _Types.L)(arg$$43, (0, _Types.L)()));
      }

    case 19:
      {
        return null;
      }
  }
}

function intrinsicFunctions(com$$51, ctx$$40, r$$61, t$$87, i$$30, thisArg$$24, args$$96) {
  const matchValue$$57 = [i$$30.CompiledName, thisArg$$24, args$$96];
  var $target$$135, arg$$44, ar$$27, idx$$9, ar$$28, idx$$10, value$$22, ar$$29, lower, upper, args$$97, expr$$10, args$$98, args$$99;

  if (matchValue$$57[0] === "CheckThis") {
    if (matchValue$$57[2].tail != null) {
      if (matchValue$$57[2].tail.tail == null) {
        $target$$135 = 0;
        arg$$44 = matchValue$$57[2].head;
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "UnboxFast") {
    if (matchValue$$57[2].tail != null) {
      if (matchValue$$57[2].tail.tail == null) {
        $target$$135 = 0;
        arg$$44 = matchValue$$57[2].head;
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "UnboxGeneric") {
    if (matchValue$$57[2].tail != null) {
      if (matchValue$$57[2].tail.tail == null) {
        $target$$135 = 0;
        arg$$44 = matchValue$$57[2].head;
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "MakeDecimal") {
    $target$$135 = 1;
  } else if (matchValue$$57[0] === "GetString") {
    if (matchValue$$57[2].tail != null) {
      if (matchValue$$57[2].tail.tail != null) {
        if (matchValue$$57[2].tail.tail.tail == null) {
          $target$$135 = 2;
          ar$$27 = matchValue$$57[2].head;
          idx$$9 = matchValue$$57[2].tail.head;
        } else {
          $target$$135 = 12;
        }
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "GetArray") {
    if (matchValue$$57[2].tail != null) {
      if (matchValue$$57[2].tail.tail != null) {
        if (matchValue$$57[2].tail.tail.tail == null) {
          $target$$135 = 2;
          ar$$27 = matchValue$$57[2].head;
          idx$$9 = matchValue$$57[2].tail.head;
        } else {
          $target$$135 = 12;
        }
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "SetArray") {
    if (matchValue$$57[2].tail != null) {
      if (matchValue$$57[2].tail.tail != null) {
        if (matchValue$$57[2].tail.tail.tail != null) {
          if (matchValue$$57[2].tail.tail.tail.tail == null) {
            $target$$135 = 3;
            ar$$28 = matchValue$$57[2].head;
            idx$$10 = matchValue$$57[2].tail.head;
            value$$22 = matchValue$$57[2].tail.tail.head;
          } else {
            $target$$135 = 12;
          }
        } else {
          $target$$135 = 12;
        }
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "GetArraySlice") {
    if (matchValue$$57[1] == null) {
      if (matchValue$$57[2].tail != null) {
        if (matchValue$$57[2].tail.tail != null) {
          if (matchValue$$57[2].tail.tail.tail != null) {
            if (matchValue$$57[2].tail.tail.tail.tail == null) {
              $target$$135 = 4;
              ar$$29 = matchValue$$57[2].head;
              lower = matchValue$$57[2].tail.head;
              upper = matchValue$$57[2].tail.tail.head;
            } else {
              $target$$135 = 12;
            }
          } else {
            $target$$135 = 12;
          }
        } else {
          $target$$135 = 12;
        }
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "GetStringSlice") {
    if (matchValue$$57[1] == null) {
      if (matchValue$$57[2].tail != null) {
        if (matchValue$$57[2].tail.tail != null) {
          if (matchValue$$57[2].tail.tail.tail != null) {
            if (matchValue$$57[2].tail.tail.tail.tail == null) {
              $target$$135 = 4;
              ar$$29 = matchValue$$57[2].head;
              lower = matchValue$$57[2].tail.head;
              upper = matchValue$$57[2].tail.tail.head;
            } else {
              $target$$135 = 12;
            }
          } else {
            $target$$135 = 12;
          }
        } else {
          $target$$135 = 12;
        }
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "SetArraySlice") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 5;
      args$$97 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "TypeTestGeneric") {
    if (matchValue$$57[1] == null) {
      if (matchValue$$57[2].tail != null) {
        if (matchValue$$57[2].tail.tail == null) {
          $target$$135 = 6;
          expr$$10 = matchValue$$57[2].head;
        } else {
          $target$$135 = 12;
        }
      } else {
        $target$$135 = 12;
      }
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "CreateInstance") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 7;
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "PowDouble") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 8;
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeChar") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 9;
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeSByte") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeByte") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeInt16") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeUInt16") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeInt32") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeUInt32") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeSingle") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeDouble") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 10;
      args$$98 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeInt64") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 11;
      args$$99 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else if (matchValue$$57[0] === "RangeUInt64") {
    if (matchValue$$57[1] == null) {
      $target$$135 = 11;
      args$$99 = matchValue$$57[2];
    } else {
      $target$$135 = 12;
    }
  } else {
    $target$$135 = 12;
  }

  switch ($target$$135) {
    case 0:
      {
        return arg$$44;
      }

    case 1:
      {
        return decimals(com$$51, ctx$$40, r$$61, t$$87, i$$30, thisArg$$24, args$$96);
      }

    case 2:
      {
        return (0, _Transforms.AST$$$getExpr)(r$$61, t$$87, ar$$27, idx$$9);
      }

    case 3:
      {
        return new _AST.Expr(16, "Set", ar$$28, new _AST.SetKind(1, "ExprSet", idx$$10), value$$22, r$$61);
      }

    case 4:
      {
        const upper$$1 = upper.tag === 0 ? upper.fields[0].tag === 9 ? upper.fields[0].fields[0] == null ? (0, _Transforms.AST$$$getExpr)(null, new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), ar$$29, (0, _Transforms.AST$$$makeStrConst)("length")) : Helpers$$$add(upper, (0, _Transforms.AST$$$makeIntConst)(1)) : Helpers$$$add(upper, (0, _Transforms.AST$$$makeIntConst)(1)) : Helpers$$$add(upper, (0, _Transforms.AST$$$makeIntConst)(1));
        return Helper$$$InstanceCall$$9FFCF9C(ar$$29, "slice", t$$87, (0, _Types.L)(lower, (0, _Types.L)(upper$$1, (0, _Types.L)())), null, r$$61);
      }

    case 5:
      {
        return Helper$$$CoreCall$$39739A92("Array", "setSlice", t$$87, args$$97, i$$30.SignatureArgTypes, null, null, null, r$$61);
      }

    case 6:
      {
        return new _AST.Expr(7, "Test", expr$$10, new _AST.TestKind(0, "TypeTest", Helpers$$$genArg(com$$51, ctx$$40, r$$61, 0, i$$30.GenericArgs)), r$$61);
      }

    case 7:
      {
        const matchValue$$58 = Helpers$$$genArg(com$$51, ctx$$40, r$$61, 0, i$$30.GenericArgs);

        if (matchValue$$58.tag === 16) {
          const ent$$18 = matchValue$$58.fields[0];
          const entRef = (0, _FSharp2Fable.Util$$$entityRefMaybeImported)(com$$51, ent$$18);
          return Helper$$$ConstructorCall$$437D8EA7(entRef, t$$87, (0, _Types.L)(), null, r$$61);
        } else {
          const t$$88 = matchValue$$58;
          return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$51, ctx$$40.InlinePath, r$$61, (0, _String.toText)((0, _String.printf)("Cannot create instance of type unresolved at compile time: %A"))(t$$88));
        }
      }

    case 8:
      {
        return Helper$$$GlobalCall$$Z6A200D61("Math", t$$87, args$$96, i$$30.SignatureArgTypes, "pow", null, r$$61);
      }

    case 9:
      {
        return Helper$$$CoreCall$$39739A92("Seq", "rangeChar", t$$87, args$$96, i$$30.SignatureArgTypes, null, null, null, r$$61);
      }

    case 10:
      {
        return Helper$$$CoreCall$$39739A92("Seq", "rangeNumber", t$$87, args$$98, i$$30.SignatureArgTypes, null, null, null, r$$61);
      }

    case 11:
      {
        const isUnsigned = (0, _Transforms.AST$$$makeBoolConst)(i$$30.CompiledName === "RangeUInt64");
        return Helper$$$CoreCall$$39739A92("Seq", "rangeLong", t$$87, (0, _List.append)(args$$99, (0, _Types.L)(isUnsigned, (0, _Types.L)())), i$$30.SignatureArgTypes, null, null, null, r$$61);
      }

    case 12:
      {
        return null;
      }
  }
}

function funcs(_arg1$$27, ctx$$41, r$$62, t$$89, i$$31, thisArg$$25, args$$100) {
  const matchValue$$59 = [i$$31.CompiledName, thisArg$$25];
  var $target$$136;

  if (matchValue$$59[0] === "Adapt") {
    $target$$136 = 0;
  } else if (matchValue$$59[0] === "Invoke") {
    if (matchValue$$59[1] != null) {
      $target$$136 = 1;
    } else {
      $target$$136 = 2;
    }
  } else {
    $target$$136 = 2;
  }

  switch ($target$$136) {
    case 0:
      {
        return (0, _List.tryHead)(args$$100);
      }

    case 1:
      {
        const callee$$11 = matchValue$$59[1];
        return Helper$$$Application$$437D8EA7(callee$$11, t$$89, args$$100, i$$31.SignatureArgTypes, r$$62);
      }

    case 2:
      {
        return null;
      }
  }
}

function keyValuePairs(_arg1$$28, ctx$$42, r$$63, t$$90, i$$32, thisArg$$26, args$$101) {
  const matchValue$$60 = [i$$32.CompiledName, thisArg$$26];
  var $target$$137;

  if (matchValue$$60[0] === ".ctor") {
    $target$$137 = 0;
  } else if (matchValue$$60[0] === "get_Key") {
    if (matchValue$$60[1] != null) {
      $target$$137 = 1;
    } else {
      $target$$137 = 3;
    }
  } else if (matchValue$$60[0] === "get_Value") {
    if (matchValue$$60[1] != null) {
      $target$$137 = 2;
    } else {
      $target$$137 = 3;
    }
  } else {
    $target$$137 = 3;
  }

  switch ($target$$137) {
    case 0:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(12, "NewTuple", args$$101));
      }

    case 1:
      {
        const c$$18 = matchValue$$60[1];
        return new _AST.Expr(9, "Get", c$$18, new _AST.GetKind(1, "TupleGet", 0), t$$90, r$$63);
      }

    case 2:
      {
        const c$$19 = matchValue$$60[1];
        return new _AST.Expr(9, "Get", c$$19, new _AST.GetKind(1, "TupleGet", 1), t$$90, r$$63);
      }

    case 3:
      {
        return null;
      }
  }
}

function dictionaries(com$$52, ctx$$43, r$$64, t$$91, i$$33, thisArg$$27, args$$102) {
  const matchValue$$61 = [i$$33.CompiledName, thisArg$$27];
  var $target$$138, callee$$12, c$$21, methName$$11;

  if (matchValue$$61[0] === ".ctor") {
    $target$$138 = 0;
  } else if (matchValue$$61[0] === "get_IsReadOnly") {
    $target$$138 = 1;
  } else if (matchValue$$61[0] === "get_Count") {
    $target$$138 = 2;
  } else if (matchValue$$61[0] === "GetEnumerator") {
    if (matchValue$$61[1] != null) {
      $target$$138 = 3;
      callee$$12 = matchValue$$61[1];
    } else {
      $target$$138 = 7;
    }
  } else if (matchValue$$61[0] === "ContainsValue") {
    $target$$138 = 4;
  } else if (matchValue$$61[0] === "TryGetValue") {
    $target$$138 = 5;
  } else {
    const activePatternResult67645 = $007CReplaceName$007C_$007C((0, _Types.L)(["get_Item", "get"], (0, _Types.L)(["set_Item", "set"], (0, _Types.L)(["get_Keys", "keys"], (0, _Types.L)(["get_Values", "values"], (0, _Types.L)(["ContainsKey", "has"], (0, _Types.L)(["Clear", "clear"], (0, _Types.L)(["Add", "set"], (0, _Types.L)(["Remove", "delete"], (0, _Types.L)())))))))), matchValue$$61[0]);

    if (activePatternResult67645 != null) {
      if (matchValue$$61[1] != null) {
        $target$$138 = 6;
        c$$21 = matchValue$$61[1];
        methName$$11 = activePatternResult67645;
      } else {
        $target$$138 = 7;
      }
    } else {
      $target$$138 = 7;
    }
  }

  switch ($target$$138) {
    case 0:
      {
        const matchValue$$62 = [i$$33.SignatureArgTypes, args$$102];
        var $target$$139, arg$$45, arg$$46, eqComp, eqComp$$1;

        if (matchValue$$62[0].tail != null) {
          if (matchValue$$62[0].head.tag === 7) {
            if (matchValue$$62[0].tail.tail != null) {
              if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$62[0].tail.head).tag === 1) {
                if (matchValue$$62[0].tail.tail.tail == null) {
                  if ($007CIDictionary$007CIEqualityComparer$007COther$007C(matchValue$$62[0].head).tag === 0) {
                    if (matchValue$$62[1].tail != null) {
                      if (matchValue$$62[1].tail.tail != null) {
                        if (matchValue$$62[1].tail.tail.tail == null) {
                          $target$$139 = 2;
                          arg$$46 = matchValue$$62[1].head;
                          eqComp = matchValue$$62[1].tail.head;
                        } else {
                          $target$$139 = 4;
                        }
                      } else {
                        $target$$139 = 4;
                      }
                    } else {
                      $target$$139 = 4;
                    }
                  } else if (matchValue$$62[1].tail != null) {
                    if (matchValue$$62[1].tail.tail != null) {
                      if (matchValue$$62[1].tail.tail.tail == null) {
                        $target$$139 = 3;
                        eqComp$$1 = matchValue$$62[1].tail.head;
                      } else {
                        $target$$139 = 4;
                      }
                    } else {
                      $target$$139 = 4;
                    }
                  } else {
                    $target$$139 = 4;
                  }
                } else {
                  $target$$139 = 4;
                }
              } else {
                $target$$139 = 4;
              }
            } else {
              $target$$139 = 0;
            }
          } else if ($007CIDictionary$007CIEqualityComparer$007COther$007C(matchValue$$62[0].head).tag === 0) {
            if (matchValue$$62[0].tail.tail != null) {
              if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$62[0].tail.head).tag === 1) {
                if (matchValue$$62[0].tail.tail.tail == null) {
                  if (matchValue$$62[1].tail != null) {
                    if (matchValue$$62[1].tail.tail != null) {
                      if (matchValue$$62[1].tail.tail.tail == null) {
                        $target$$139 = 2;
                        arg$$46 = matchValue$$62[1].head;
                        eqComp = matchValue$$62[1].tail.head;
                      } else {
                        $target$$139 = 4;
                      }
                    } else {
                      $target$$139 = 4;
                    }
                  } else {
                    $target$$139 = 4;
                  }
                } else {
                  $target$$139 = 4;
                }
              } else {
                $target$$139 = 4;
              }
            } else if (matchValue$$62[1].tail != null) {
              if (matchValue$$62[1].tail.tail == null) {
                $target$$139 = 1;
                arg$$45 = matchValue$$62[1].head;
              } else {
                $target$$139 = 4;
              }
            } else {
              $target$$139 = 4;
            }
          } else if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$62[0].head).tag === 1) {
            if (matchValue$$62[0].tail.tail == null) {
              if (matchValue$$62[1].tail != null) {
                if (matchValue$$62[1].tail.tail == null) {
                  $target$$139 = 3;
                  eqComp$$1 = matchValue$$62[1].head;
                } else {
                  $target$$139 = 4;
                }
              } else {
                $target$$139 = 4;
              }
            } else {
              $target$$139 = 4;
            }
          } else {
            $target$$139 = 4;
          }
        } else {
          $target$$139 = 0;
        }

        switch ($target$$139) {
          case 0:
            {
              return makeDictionary(com$$52, r$$64, t$$91, (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()));
            }

          case 1:
            {
              return makeDictionary(com$$52, r$$64, t$$91, arg$$45);
            }

          case 2:
            {
              return makeDictionaryWithComparer(r$$64, t$$91, arg$$46, Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp, (0, _Types.L)())));
            }

          case 3:
            {
              return makeDictionaryWithComparer(r$$64, t$$91, (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()), Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp$$1, (0, _Types.L)())));
            }

          case 4:
            {
              return null;
            }
        }
      }

    case 1:
      {
        return (0, _Transforms.AST$$$makeBoolConst)(false);
      }

    case 2:
      {
        return (0, _Transforms.AST$$$get)(r$$64, t$$91, thisArg$$27, "size");
      }

    case 3:
      {
        return getEnumerator(r$$64, t$$91, callee$$12);
      }

    case 4:
      {
        const matchValue$$63 = [thisArg$$27, args$$102];
        var $target$$140, arg$$47, c$$20;

        if (matchValue$$63[0] != null) {
          if (matchValue$$63[1].tail != null) {
            if (matchValue$$63[1].tail.tail == null) {
              $target$$140 = 0;
              arg$$47 = matchValue$$63[1].head;
              c$$20 = matchValue$$63[0];
            } else {
              $target$$140 = 1;
            }
          } else {
            $target$$140 = 1;
          }
        } else {
          $target$$140 = 1;
        }

        switch ($target$$140) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("Util", "containsValue", t$$91, (0, _Types.L)(arg$$47, (0, _Types.L)(c$$20, (0, _Types.L)())), null, null, null, null, r$$64);
            }

          case 1:
            {
              return null;
            }
        }
      }

    case 5:
      {
        return Helper$$$CoreCall$$39739A92("Util", "tryGetValue", t$$91, args$$102, i$$33.SignatureArgTypes, thisArg$$27, null, null, r$$64);
      }

    case 6:
      {
        return Helper$$$InstanceCall$$9FFCF9C(c$$21, methName$$11, t$$91, args$$102, i$$33.SignatureArgTypes, r$$64);
      }

    case 7:
      {
        return null;
      }
  }
}

function hashSets(com$$53, ctx$$44, r$$65, t$$92, i$$34, thisArg$$28, args$$103) {
  const matchValue$$64 = [i$$34.CompiledName, thisArg$$28, args$$103];
  var $target$$141, args$$104, c$$22, methName$$12;

  if (matchValue$$64[0] === ".ctor") {
    $target$$141 = 0;
  } else if (matchValue$$64[0] === "get_Count") {
    $target$$141 = 1;
  } else if (matchValue$$64[0] === "get_IsReadOnly") {
    $target$$141 = 2;
  } else {
    const activePatternResult67666 = $007CReplaceName$007C_$007C((0, _Types.L)(["Clear", "clear"], (0, _Types.L)(["Contains", "has"], (0, _Types.L)(["Remove", "delete"], (0, _Types.L)()))), matchValue$$64[0]);

    if (activePatternResult67666 != null) {
      if (matchValue$$64[1] != null) {
        $target$$141 = 3;
        args$$104 = matchValue$$64[2];
        c$$22 = matchValue$$64[1];
        methName$$12 = activePatternResult67666;
      } else {
        $target$$141 = 4;
      }
    } else {
      $target$$141 = 4;
    }
  }

  switch ($target$$141) {
    case 0:
      {
        const matchValue$$65 = [i$$34.SignatureArgTypes, args$$103];
        var $target$$142, arg$$48, arg$$49, eqComp$$2, eqComp$$3;

        if (matchValue$$65[0].tail != null) {
          const activePatternResult67657 = $007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$65[0].head);

          if (activePatternResult67657.tag === 0) {
            if (matchValue$$65[0].tail.tail != null) {
              if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$65[0].tail.head).tag === 1) {
                if (matchValue$$65[0].tail.tail.tail == null) {
                  if (matchValue$$65[1].tail != null) {
                    if (matchValue$$65[1].tail.tail != null) {
                      if (matchValue$$65[1].tail.tail.tail == null) {
                        $target$$142 = 2;
                        arg$$49 = matchValue$$65[1].head;
                        eqComp$$2 = matchValue$$65[1].tail.head;
                      } else {
                        $target$$142 = 4;
                      }
                    } else {
                      $target$$142 = 4;
                    }
                  } else {
                    $target$$142 = 4;
                  }
                } else {
                  $target$$142 = 4;
                }
              } else {
                $target$$142 = 4;
              }
            } else if (matchValue$$65[1].tail != null) {
              if (matchValue$$65[1].tail.tail == null) {
                $target$$142 = 1;
                arg$$48 = matchValue$$65[1].head;
              } else {
                $target$$142 = 4;
              }
            } else {
              $target$$142 = 4;
            }
          } else if (activePatternResult67657.tag === 1) {
            if (matchValue$$65[0].tail.tail == null) {
              if (matchValue$$65[1].tail != null) {
                if (matchValue$$65[1].tail.tail == null) {
                  $target$$142 = 3;
                  eqComp$$3 = matchValue$$65[1].head;
                } else {
                  $target$$142 = 4;
                }
              } else {
                $target$$142 = 4;
              }
            } else {
              $target$$142 = 4;
            }
          } else {
            $target$$142 = 4;
          }
        } else {
          $target$$142 = 0;
        }

        switch ($target$$142) {
          case 0:
            {
              return makeHashSet(com$$53, r$$65, t$$92, (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()));
            }

          case 1:
            {
              return makeHashSet(com$$53, r$$65, t$$92, arg$$48);
            }

          case 2:
            {
              return makeHashSetWithComparer(r$$65, t$$92, arg$$49, Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp$$2, (0, _Types.L)())));
            }

          case 3:
            {
              return makeHashSetWithComparer(r$$65, t$$92, (0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()), Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp$$3, (0, _Types.L)())));
            }

          case 4:
            {
              return null;
            }
        }
      }

    case 1:
      {
        return (0, _Transforms.AST$$$get)(r$$65, t$$92, thisArg$$28, "size");
      }

    case 2:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(3, "BoolConstant", false));
      }

    case 3:
      {
        return Helper$$$InstanceCall$$9FFCF9C(c$$22, methName$$12, t$$92, args$$104, i$$34.SignatureArgTypes, r$$65);
      }

    case 4:
      {
        var $target$$143, arg$$50, c$$23, args$$105, c$$24, meth$$27;

        if (matchValue$$64[0] === "Add") {
          if (matchValue$$64[1] != null) {
            if (matchValue$$64[2].tail != null) {
              if (matchValue$$64[2].tail.tail == null) {
                $target$$143 = 0;
                arg$$50 = matchValue$$64[2].head;
                c$$23 = matchValue$$64[1];
              } else {
                $target$$143 = 2;
              }
            } else {
              $target$$143 = 2;
            }
          } else {
            $target$$143 = 2;
          }
        } else if (matchValue$$64[0] === "IsProperSubsetOf") {
          if (matchValue$$64[1] != null) {
            $target$$143 = 1;
            args$$105 = matchValue$$64[2];
            c$$24 = matchValue$$64[1];
            meth$$27 = matchValue$$64[0];
          } else {
            $target$$143 = 2;
          }
        } else if (matchValue$$64[0] === "IsProperSupersetOf") {
          if (matchValue$$64[1] != null) {
            $target$$143 = 1;
            args$$105 = matchValue$$64[2];
            c$$24 = matchValue$$64[1];
            meth$$27 = matchValue$$64[0];
          } else {
            $target$$143 = 2;
          }
        } else if (matchValue$$64[0] === "UnionWith") {
          if (matchValue$$64[1] != null) {
            $target$$143 = 1;
            args$$105 = matchValue$$64[2];
            c$$24 = matchValue$$64[1];
            meth$$27 = matchValue$$64[0];
          } else {
            $target$$143 = 2;
          }
        } else if (matchValue$$64[0] === "IntersectWith") {
          if (matchValue$$64[1] != null) {
            $target$$143 = 1;
            args$$105 = matchValue$$64[2];
            c$$24 = matchValue$$64[1];
            meth$$27 = matchValue$$64[0];
          } else {
            $target$$143 = 2;
          }
        } else if (matchValue$$64[0] === "ExceptWith") {
          if (matchValue$$64[1] != null) {
            $target$$143 = 1;
            args$$105 = matchValue$$64[2];
            c$$24 = matchValue$$64[1];
            meth$$27 = matchValue$$64[0];
          } else {
            $target$$143 = 2;
          }
        } else if (matchValue$$64[0] === "IsSubsetOf") {
          if (matchValue$$64[1] != null) {
            $target$$143 = 1;
            args$$105 = matchValue$$64[2];
            c$$24 = matchValue$$64[1];
            meth$$27 = matchValue$$64[0];
          } else {
            $target$$143 = 2;
          }
        } else if (matchValue$$64[0] === "IsSupersetOf") {
          if (matchValue$$64[1] != null) {
            $target$$143 = 1;
            args$$105 = matchValue$$64[2];
            c$$24 = matchValue$$64[1];
            meth$$27 = matchValue$$64[0];
          } else {
            $target$$143 = 2;
          }
        } else {
          $target$$143 = 2;
        }

        switch ($target$$143) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("Util", "addToSet", t$$92, (0, _Types.L)(arg$$50, (0, _Types.L)(c$$23, (0, _Types.L)())), null, null, null, null, r$$65);
            }

          case 1:
            {
              const meth$$28 = (0, _Prelude.Naming$$$lowerFirst)(meth$$27);
              const args$$106 = injectArg(com$$53, ctx$$44, r$$65, "Set", meth$$28, i$$34.GenericArgs, args$$105);
              return Helper$$$CoreCall$$39739A92("Set", meth$$28, t$$92, (0, _Types.L)(c$$24, args$$106), null, null, null, null, r$$65);
            }

          case 2:
            {
              return null;
            }
        }
      }
  }
}

function exceptions(_arg1$$29, ctx$$45, r$$66, t$$93, i$$35, thisArg$$29, args$$107) {
  const matchValue$$66 = [i$$35.CompiledName, thisArg$$29];
  var $target$$144;

  if (matchValue$$66[0] === ".ctor") {
    $target$$144 = 0;
  } else if (matchValue$$66[0] === "get_Message") {
    if (matchValue$$66[1] != null) {
      $target$$144 = 1;
    } else {
      $target$$144 = 3;
    }
  } else if (matchValue$$66[0] === "get_StackTrace") {
    if (matchValue$$66[1] != null) {
      $target$$144 = 2;
    } else {
      $target$$144 = 3;
    }
  } else {
    $target$$144 = 3;
  }

  switch ($target$$144) {
    case 0:
      {
        return Helper$$$ConstructorCall$$437D8EA7((0, _Transforms.AST$$$makeIdentExprNonMangled)("Error"), t$$93, args$$107, null, r$$66);
      }

    case 1:
      {
        const e$$27 = matchValue$$66[1];
        return (0, _Transforms.AST$$$get)(r$$66, t$$93, e$$27, "message");
      }

    case 2:
      {
        const e$$28 = matchValue$$66[1];
        return (0, _Transforms.AST$$$get)(r$$66, t$$93, e$$28, "stack");
      }

    case 3:
      {
        return null;
      }
  }
}

function objects(com$$54, ctx$$46, r$$67, t$$94, i$$36, thisArg$$30, args$$108) {
  const matchValue$$67 = [i$$36.CompiledName, thisArg$$30, args$$108];
  var $target$$145, arg$$51, arg$$52, left$$47, right$$42, arg1$$4, arg2$$4, arg$$53;

  if (matchValue$$67[0] === ".ctor") {
    $target$$145 = 0;
  } else if (matchValue$$67[0] === "GetHashCode") {
    if (matchValue$$67[1] != null) {
      $target$$145 = 1;
      arg$$51 = matchValue$$67[1];
    } else {
      $target$$145 = 6;
    }
  } else if (matchValue$$67[0] === "ToString") {
    if (matchValue$$67[1] != null) {
      $target$$145 = 2;
      arg$$52 = matchValue$$67[1];
    } else {
      $target$$145 = 6;
    }
  } else if (matchValue$$67[0] === "ReferenceEquals") {
    if (matchValue$$67[2].tail != null) {
      if (matchValue$$67[2].tail.tail != null) {
        if (matchValue$$67[2].tail.tail.tail == null) {
          $target$$145 = 3;
          left$$47 = matchValue$$67[2].head;
          right$$42 = matchValue$$67[2].tail.head;
        } else {
          $target$$145 = 6;
        }
      } else {
        $target$$145 = 6;
      }
    } else {
      $target$$145 = 6;
    }
  } else if (matchValue$$67[0] === "Equals") {
    if (matchValue$$67[1] == null) {
      if (matchValue$$67[2].tail != null) {
        if (matchValue$$67[2].tail.tail != null) {
          if (matchValue$$67[2].tail.tail.tail == null) {
            $target$$145 = 4;
            arg1$$4 = matchValue$$67[2].head;
            arg2$$4 = matchValue$$67[2].tail.head;
          } else {
            $target$$145 = 6;
          }
        } else {
          $target$$145 = 6;
        }
      } else {
        $target$$145 = 6;
      }
    } else if (matchValue$$67[2].tail != null) {
      if (matchValue$$67[2].tail.tail == null) {
        $target$$145 = 4;
        arg1$$4 = matchValue$$67[1];
        arg2$$4 = matchValue$$67[2].head;
      } else {
        $target$$145 = 6;
      }
    } else {
      $target$$145 = 6;
    }
  } else if (matchValue$$67[0] === "GetType") {
    if (matchValue$$67[1] != null) {
      $target$$145 = 5;
      arg$$53 = matchValue$$67[1];
    } else {
      $target$$145 = 6;
    }
  } else {
    $target$$145 = 6;
  }

  switch ($target$$145) {
    case 0:
      {
        return Helpers$$$objExpr(t$$94, (0, _Types.L)());
      }

    case 1:
      {
        return identityHash(r$$67, arg$$51);
      }

    case 2:
      {
        return toString(com$$54, ctx$$46, r$$67, (0, _Types.L)(arg$$52, (0, _Types.L)()));
      }

    case 3:
      {
        return (0, _Transforms.AST$$$makeEqOp)(r$$67, left$$47, right$$42, new _AST2.BinaryOperator(2, "BinaryEqualStrict"));
      }

    case 4:
      {
        return Helper$$$CoreCall$$39739A92("Util", "equals", t$$94, (0, _Types.L)(arg1$$4, (0, _Types.L)(arg2$$4, (0, _Types.L)())), null, null, null, null, r$$67);
      }

    case 5:
      {
        if ((0, _Util.equals)((0, _AST.Expr$$get_Type)(arg$$53), new _AST.Type(1, "Any"))) {
          (0, _Transforms.Log$$$addWarning)(com$$54, ctx$$46.InlinePath, r$$67, "Types can only be resolved at compile time. At runtime this will be same as `typeof<obj>`");
        }

        return makeTypeInfo(r$$67, (0, _AST.Expr$$get_Type)(arg$$53));
      }

    case 6:
      {
        return null;
      }
  }
}

function valueTypes(_arg1$$30, ctx$$47, r$$68, t$$95, i$$37, thisArg$$31, args$$109) {
  const matchValue$$68 = [i$$37.CompiledName, thisArg$$31];
  var $target$$146, thisArg$$33;

  if (matchValue$$68[0] === ".ctor") {
    $target$$146 = 0;
  } else if (matchValue$$68[0] === "ToString") {
    if (matchValue$$68[1] != null) {
      $target$$146 = 1;
    } else {
      $target$$146 = 3;
    }
  } else if (matchValue$$68[0] === "GetHashCode") {
    if (matchValue$$68[1] != null) {
      $target$$146 = 2;
      thisArg$$33 = matchValue$$68[1];
    } else {
      $target$$146 = 3;
    }
  } else if (matchValue$$68[0] === "Equals") {
    if (matchValue$$68[1] != null) {
      $target$$146 = 2;
      thisArg$$33 = matchValue$$68[1];
    } else {
      $target$$146 = 3;
    }
  } else if (matchValue$$68[0] === "CompareTo") {
    if (matchValue$$68[1] != null) {
      $target$$146 = 2;
      thisArg$$33 = matchValue$$68[1];
    } else {
      $target$$146 = 3;
    }
  } else {
    $target$$146 = 3;
  }

  switch ($target$$146) {
    case 0:
      {
        return Helpers$$$objExpr(t$$95, (0, _Types.L)());
      }

    case 1:
      {
        const thisArg$$32 = matchValue$$68[1];
        return Helper$$$InstanceCall$$9FFCF9C(thisArg$$32, "toString", new _AST.Type(5, "String"), (0, _Types.L)(), i$$37.SignatureArgTypes, r$$68);
      }

    case 2:
      {
        return Helper$$$InstanceCall$$9FFCF9C(thisArg$$33, i$$37.CompiledName, t$$95, args$$109, i$$37.SignatureArgTypes, r$$68);
      }

    case 3:
      {
        return null;
      }
  }
}

function unchecked(com$$55, ctx$$48, r$$69, t$$96, i$$38, _arg1$$31, args$$110) {
  if (i$$38.CompiledName === "DefaultOf") {
    return defaultof(Helpers$$$genArg(com$$55, ctx$$48, r$$69, 0, i$$38.GenericArgs));
  } else if (i$$38.CompiledName === "Hash") {
    return structuralHash(r$$69, (0, _List.head)(args$$110));
  } else if (i$$38.CompiledName === "Equals") {
    return Helper$$$CoreCall$$39739A92("Util", "equals", t$$96, args$$110, i$$38.SignatureArgTypes, null, null, null, r$$69);
  } else if (i$$38.CompiledName === "Compare") {
    return Helper$$$CoreCall$$39739A92("Util", "compare", t$$96, args$$110, i$$38.SignatureArgTypes, null, null, null, r$$69);
  } else {
    return null;
  }
}

function enums(_arg2$$3, ctx$$49, r$$70, _arg1$$32, i$$39, thisArg$$34, args$$111) {
  const matchValue$$70 = [thisArg$$34, i$$39.CompiledName, args$$111];
  var $target$$147, arg$$54, this$;

  if (matchValue$$70[0] != null) {
    if (matchValue$$70[1] === "HasFlag") {
      if (matchValue$$70[2].tail != null) {
        if (matchValue$$70[2].tail.tail == null) {
          $target$$147 = 0;
          arg$$54 = matchValue$$70[2].head;
          this$ = matchValue$$70[0];
        } else {
          $target$$147 = 1;
        }
      } else {
        $target$$147 = 1;
      }
    } else {
      $target$$147 = 1;
    }
  } else {
    $target$$147 = 1;
  }

  switch ($target$$147) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeEqOp)(r$$70, (0, _Transforms.AST$$$makeBinOp)(r$$70, new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), this$, arg$$54, new _AST2.BinaryOperator(19, "BinaryAndBitwise")), (0, _Transforms.AST$$$makeIntConst)(0), new _AST2.BinaryOperator(1, "BinaryUnequal"));
      }

    case 1:
      {
        return null;
      }
  }
}

function log(_arg2$$4, r$$71, t$$98, i$$40, _arg1$$33, args$$112) {
  const args$$113 = args$$112.tail != null ? args$$112.tail.tail == null ? (0, _Types.L)(args$$112.head, (0, _Types.L)()) : args$$112.head.tag === 0 ? args$$112.head.fields[0].tag === 5 ? (0, _Types.L)(Helper$$$CoreCall$$39739A92("String", "format", t$$98, args$$112, i$$40.SignatureArgTypes), (0, _Types.L)()) : (0, _Types.L)((0, _List.head)(args$$112), (0, _Types.L)()) : (0, _Types.L)((0, _List.head)(args$$112), (0, _Types.L)()) : (0, _Types.L)();
  return Helper$$$GlobalCall$$Z6A200D61("console", t$$98, args$$113, null, "log", null, r$$71);
}

function bitConvert(_arg3, ctx$$50, r$$72, _arg2$$5, i$$41, _arg1$$34, args$$114) {
  let memberName$$3;

  if (i$$41.CompiledName === "GetBytes") {
    const matchValue$$71 = (0, _AST.Expr$$get_Type)((0, _List.head)(args$$114));
    var $target$$148;

    if (matchValue$$71.tag === 3) {
      $target$$148 = 0;
    } else if (matchValue$$71.tag === 4) {
      $target$$148 = 1;
    } else if (matchValue$$71.tag === 5) {
      $target$$148 = 1;
    } else if (matchValue$$71.tag === 7) {
      if (matchValue$$71.fields[0].tag === 2) {
        $target$$148 = 2;
      } else if (matchValue$$71.fields[0].tag === 4) {
        $target$$148 = 3;
      } else {
        const activePatternResult67736 = $007CBuiltin$007C_$007C(matchValue$$71);

        if (activePatternResult67736 != null) {
          if (activePatternResult67736.tag === 5) {
            $target$$148 = 4;
          } else {
            $target$$148 = 5;
          }
        } else {
          $target$$148 = 5;
        }
      }
    } else {
      const activePatternResult67737 = $007CBuiltin$007C_$007C(matchValue$$71);

      if (activePatternResult67737 != null) {
        if (activePatternResult67737.tag === 5) {
          $target$$148 = 4;
        } else {
          $target$$148 = 5;
        }
      } else {
        $target$$148 = 5;
      }
    }

    switch ($target$$148) {
      case 0:
        {
          memberName$$3 = "getBytesBoolean";
          break;
        }

      case 1:
        {
          memberName$$3 = "getBytesChar";
          break;
        }

      case 2:
        {
          memberName$$3 = "getBytesInt16";
          break;
        }

      case 3:
        {
          memberName$$3 = "getBytesInt32";
          break;
        }

      case 4:
        {
          memberName$$3 = "getBytesInt64";
          break;
        }

      case 5:
        {
          var $target$$149;

          if (matchValue$$71.tag === 7) {
            if (matchValue$$71.fields[0].tag === 3) {
              $target$$149 = 0;
            } else {
              const activePatternResult67734 = $007CBuiltin$007C_$007C(matchValue$$71);

              if (activePatternResult67734 != null) {
                if (activePatternResult67734.tag === 6) {
                  $target$$149 = 1;
                } else {
                  $target$$149 = 2;
                }
              } else {
                $target$$149 = 2;
              }
            }
          } else {
            const activePatternResult67735 = $007CBuiltin$007C_$007C(matchValue$$71);

            if (activePatternResult67735 != null) {
              if (activePatternResult67735.tag === 6) {
                $target$$149 = 1;
              } else {
                $target$$149 = 2;
              }
            } else {
              $target$$149 = 2;
            }
          }

          switch ($target$$149) {
            case 0:
              {
                memberName$$3 = "getBytesUInt16";
                break;
              }

            case 1:
              {
                memberName$$3 = "getBytesUInt64";
                break;
              }

            case 2:
              {
                var $target$$150, x$$51;

                if (matchValue$$71.tag === 7) {
                  if (matchValue$$71.fields[0].tag === 5) {
                    $target$$150 = 0;
                  } else if (matchValue$$71.fields[0].tag === 6) {
                    $target$$150 = 1;
                  } else if (matchValue$$71.fields[0].tag === 7) {
                    $target$$150 = 2;
                  } else {
                    $target$$150 = 3;
                    x$$51 = matchValue$$71;
                  }
                } else {
                  $target$$150 = 3;
                  x$$51 = matchValue$$71;
                }

                switch ($target$$150) {
                  case 0:
                    {
                      memberName$$3 = "getBytesUInt32";
                      break;
                    }

                  case 1:
                    {
                      memberName$$3 = "getBytesSingle";
                      break;
                    }

                  case 2:
                    {
                      memberName$$3 = "getBytesDouble";
                      break;
                    }

                  case 3:
                    {
                      memberName$$3 = (0, _String.toFail)((0, _String.printf)("Unsupported type in BitConverter.GetBytes(): %A"))(x$$51);
                      break;
                    }
                }

                break;
              }
          }

          break;
        }
    }
  } else {
    memberName$$3 = (0, _Prelude.Naming$$$lowerFirst)(i$$41.CompiledName);
  }

  return Helper$$$CoreCall$$39739A92("BitConverter", memberName$$3, new _AST.Type(3, "Boolean"), args$$114, i$$41.SignatureArgTypes, null, null, null, r$$72);
}

function convert(com$$56, ctx$$51, r$$73, t$$99, i$$42, _arg1$$35, args$$115) {
  var $target$$151;

  if (i$$42.CompiledName === "ToSByte") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToByte") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToInt16") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToUInt16") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToInt32") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToUInt32") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToInt64") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToUInt64") {
    $target$$151 = 0;
  } else if (i$$42.CompiledName === "ToSingle") {
    $target$$151 = 1;
  } else if (i$$42.CompiledName === "ToDouble") {
    $target$$151 = 1;
  } else if (i$$42.CompiledName === "ToDecimal") {
    $target$$151 = 1;
  } else if (i$$42.CompiledName === "ToChar") {
    $target$$151 = 2;
  } else if (i$$42.CompiledName === "ToString") {
    $target$$151 = 3;
  } else if (i$$42.CompiledName === "ToBase64String") {
    $target$$151 = 4;
  } else if (i$$42.CompiledName === "FromBase64String") {
    $target$$151 = 4;
  } else {
    $target$$151 = 5;
  }

  switch ($target$$151) {
    case 0:
      {
        return toInt(com$$56, ctx$$51, r$$73, true, t$$99, args$$115);
      }

    case 1:
      {
        return toFloat(com$$56, ctx$$51, r$$73, t$$99, args$$115);
      }

    case 2:
      {
        return toChar((0, _List.head)(args$$115));
      }

    case 3:
      {
        return toString(com$$56, ctx$$51, r$$73, args$$115);
      }

    case 4:
      {
        if (!(0, _Prelude.List$$$isSingle)(args$$115)) {
          (0, _Transforms.Log$$$addWarning)(com$$56, ctx$$51.InlinePath, r$$73, (0, _String.toText)((0, _String.printf)("Convert.%s only accepts one single argument"))((0, _Prelude.Naming$$$upperFirst)(i$$42.CompiledName)));
        }

        return Helper$$$CoreCall$$39739A92("String", (0, _Prelude.Naming$$$lowerFirst)(i$$42.CompiledName), t$$99, args$$115, i$$42.SignatureArgTypes, null, null, null, r$$73);
      }

    case 5:
      {
        return null;
      }
  }
}

function console$(com$$57, ctx$$52, r$$74, t$$100, i$$43, thisArg$$35, args$$116) {
  if (i$$43.CompiledName === "get_Out") {
    return Helpers$$$objExpr(t$$100, (0, _Types.L)());
  } else if (i$$43.CompiledName === "Write") {
    (0, _Transforms.Log$$$addWarning)(com$$57, ctx$$52.InlinePath, r$$74, "Write will behave as WriteLine");
    return log(com$$57, r$$74, t$$100, i$$43, thisArg$$35, args$$116);
  } else if (i$$43.CompiledName === "WriteLine") {
    return log(com$$57, r$$74, t$$100, i$$43, thisArg$$35, args$$116);
  } else {
    return null;
  }
}

function debug(com$$58, ctx$$53, r$$75, t$$101, i$$44, thisArg$$36, args$$117) {
  if (i$$44.CompiledName === "Write") {
    (0, _Transforms.Log$$$addWarning)(com$$58, ctx$$53.InlinePath, r$$75, "Write will behave as WriteLine");
    return log(com$$58, r$$75, t$$101, i$$44, thisArg$$36, args$$117);
  } else if (i$$44.CompiledName === "WriteLine") {
    return log(com$$58, r$$75, t$$101, i$$44, thisArg$$36, args$$117);
  } else if (i$$44.CompiledName === "Break") {
    return new _AST.Expr(10, "Debugger");
  } else if (i$$44.CompiledName === "Assert") {
    const cond = new _AST.Expr(8, "Operation", new _AST.OperationKind(3, "UnaryOperation", new _AST2.UnaryOperator(2, "UnaryNot"), (0, _List.head)(args$$117)), new _AST.Type(3, "Boolean"), r$$75);
    return new _AST.Expr(19, "IfThenElse", cond, new _AST.Expr(10, "Debugger"), new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(2, "Unit"))));
  } else {
    return null;
  }
}

function dates(_arg1$$36, ctx$$54, r$$76, t$$102, i$$45, thisArg$$37, args$$118) {
  var e$$32;

  const getTime = function getTime(e$$29) {
    return Helper$$$InstanceCall$$9FFCF9C(e$$29, "getTime", t$$102, (0, _Types.L)());
  };

  const moduleName$$5 = i$$45.DeclaringEntityFullName === "System.DateTime" ? "Date" : "DateOffset";
  var $target$$152, m$$7;

  if (i$$45.CompiledName === ".ctor") {
    $target$$152 = 0;
  } else if (i$$45.CompiledName === "ToString") {
    $target$$152 = 1;
  } else if (i$$45.CompiledName === "get_Kind") {
    $target$$152 = 2;
  } else if (i$$45.CompiledName === "get_Offset") {
    $target$$152 = 2;
  } else if (i$$45.CompiledName === "get_DateTime") {
    $target$$152 = 3;
    m$$7 = i$$45.CompiledName;
  } else if (i$$45.CompiledName === "get_LocalDateTime") {
    $target$$152 = 3;
    m$$7 = i$$45.CompiledName;
  } else if (i$$45.CompiledName === "get_UtcDateTime") {
    $target$$152 = 3;
    m$$7 = i$$45.CompiledName;
  } else if (i$$45.CompiledName === "FromUnixTimeSeconds") {
    $target$$152 = 4;
  } else if (i$$45.CompiledName === "FromUnixTimeMilliseconds") {
    $target$$152 = 4;
  } else if (i$$45.CompiledName === "ToUnixTimeSeconds") {
    $target$$152 = 5;
  } else if (i$$45.CompiledName === "ToUnixTimeMilliseconds") {
    $target$$152 = 5;
  } else if (i$$45.CompiledName === "get_Ticks") {
    $target$$152 = 6;
  } else if (i$$45.CompiledName === "get_UtcTicks") {
    $target$$152 = 7;
  } else if (i$$45.CompiledName === "AddTicks") {
    $target$$152 = 8;
  } else {
    $target$$152 = 9;
  }

  switch ($target$$152) {
    case 0:
      {
        var $target$$153;

        if (args$$118.tail != null) {
          const activePatternResult67788 = $007CBuiltin$007C_$007C((0, _AST.Expr$$get_Type)(args$$118.head));

          if (activePatternResult67788 != null) {
            if (activePatternResult67788.tag === 5) {
              $target$$153 = 1;
            } else {
              $target$$153 = 2;
            }
          } else {
            $target$$153 = 2;
          }
        } else {
          $target$$153 = 0;
        }

        switch ($target$$153) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92(moduleName$$5, "minValue", t$$102, (0, _Types.L)(), (0, _Types.L)(), null, null, null, r$$76);
            }

          case 1:
            {
              return Helper$$$CoreCall$$39739A92(moduleName$$5, "fromTicks", t$$102, args$$118, i$$45.SignatureArgTypes, null, null, null, r$$76);
            }

          case 2:
            {
              var $target$$154, e$$33;

              if (args$$118.tail != null) {
                const activePatternResult67786 = (0, _AST.Expr$$get_Type)(args$$118.head);

                if (activePatternResult67786.tag === 16) {
                  if (activePatternResult67786.fields[1].tail == null) {
                    if (e$$32 = activePatternResult67786.fields[0], (0, _Symbols.FSharpEntity$$get_FullName)(e$$32) === "System.DateTime") {
                      $target$$154 = 0;
                      e$$33 = activePatternResult67786.fields[0];
                    } else {
                      $target$$154 = 1;
                    }
                  } else {
                    $target$$154 = 1;
                  }
                } else {
                  $target$$154 = 1;
                }
              } else {
                $target$$154 = 1;
              }

              switch ($target$$154) {
                case 0:
                  {
                    return Helper$$$CoreCall$$39739A92("DateOffset", "fromDate", t$$102, args$$118, i$$45.SignatureArgTypes, null, null, null, r$$76);
                  }

                case 1:
                  {
                    const last$$1 = (0, _List.last)(args$$118);
                    const matchValue$$76 = [(0, _List.length)(args$$118), (0, _AST.Expr$$get_Type)(last$$1)];
                    var $target$$155;

                    if (matchValue$$76[0] === 7) {
                      if (matchValue$$76[1].tag === 8) {
                        if (matchValue$$76[1].fields[1] === "System.DateTimeKind") {
                          $target$$155 = 0;
                        } else {
                          $target$$155 = 1;
                        }
                      } else {
                        $target$$155 = 1;
                      }
                    } else {
                      $target$$155 = 1;
                    }

                    switch ($target$$155) {
                      case 0:
                        {
                          const args$$119 = (0, _List.append)((0, _List.take)(6, args$$118), (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)(last$$1, (0, _Types.L)())));
                          const argTypes$$21 = (0, _List.append)((0, _List.take)(6, i$$45.SignatureArgTypes), (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)((0, _AST.Expr$$get_Type)(last$$1), (0, _Types.L)())));
                          return Helper$$$CoreCall$$39739A92("Date", "create", t$$102, args$$119, argTypes$$21, null, null, null, r$$76);
                        }

                      case 1:
                        {
                          return Helper$$$CoreCall$$39739A92(moduleName$$5, "create", t$$102, args$$118, i$$45.SignatureArgTypes, null, null, null, r$$76);
                        }
                    }
                  }
              }
            }
        }
      }

    case 1:
      {
        return Helper$$$CoreCall$$39739A92("Date", "toString", t$$102, args$$118, i$$45.SignatureArgTypes, thisArg$$37, null, null, r$$76);
      }

    case 2:
      {
        return (0, _Transforms.AST$$$get)(r$$76, t$$102, thisArg$$37, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$45.CompiledName)));
      }

    case 3:
      {
        const kind$$6 = (0, _Transforms.AST$$$makeIntConst)(m$$7 === "get_LocalDateTime" ? 2 : m$$7 === "get_UtcDateTime" ? 1 : 0);
        return Helper$$$CoreCall$$39739A92("Date", "fromDateTimeOffset", t$$102, (0, _Types.L)(thisArg$$37, (0, _Types.L)(kind$$6, (0, _Types.L)())), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$37), (0, _Types.L)((0, _AST.Expr$$get_Type)(kind$$6), (0, _Types.L)())), null, null, null, r$$76);
      }

    case 4:
      {
        const value$$24 = Helper$$$CoreCall$$39739A92("Long", "toNumber", new _AST.Type(7, "Number", new _AST2.NumberKind(7, "Float64")), args$$118, i$$45.SignatureArgTypes);
        const value$$25 = i$$45.CompiledName === "FromUnixTimeSeconds" ? (0, _Transforms.AST$$$makeBinOp)(r$$76, t$$102, value$$24, (0, _Transforms.AST$$$makeIntConst)(1000), new _AST2.BinaryOperator(13, "BinaryMultiply")) : value$$24;
        return Helper$$$CoreCall$$39739A92("DateOffset", "default", t$$102, (0, _Types.L)(value$$25, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(0), (0, _Types.L)())), (0, _Types.L)((0, _AST.Expr$$get_Type)(value$$25), (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)())), null, null, null, r$$76);
      }

    case 5:
      {
        const ms$$1 = getTime(thisArg$$37);
        const args$$120 = i$$45.CompiledName === "ToUnixTimeSeconds" ? (0, _Types.L)((0, _Transforms.AST$$$makeBinOp)(r$$76, t$$102, ms$$1, (0, _Transforms.AST$$$makeIntConst)(1000), new _AST2.BinaryOperator(14, "BinaryDivide")), (0, _Types.L)()) : (0, _Types.L)(ms$$1, (0, _Types.L)());
        return Helper$$$CoreCall$$39739A92("Long", "fromNumber", t$$102, args$$120, null, null, null, null, r$$76);
      }

    case 6:
      {
        return Helper$$$CoreCall$$39739A92("Date", "getTicks", t$$102, (0, _Types.L)(thisArg$$37, (0, _Types.L)()), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$37), (0, _Types.L)()), null, null, null, r$$76);
      }

    case 7:
      {
        return Helper$$$CoreCall$$39739A92("DateOffset", "getUtcTicks", t$$102, (0, _Types.L)(thisArg$$37, (0, _Types.L)()), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$37), (0, _Types.L)()), null, null, null, r$$76);
      }

    case 8:
      {
        const matchValue$$77 = [thisArg$$37, args$$118];
        var $target$$156, c$$25, ticks;

        if (matchValue$$77[0] != null) {
          if (matchValue$$77[1].tail != null) {
            if (matchValue$$77[1].tail.tail == null) {
              $target$$156 = 0;
              c$$25 = matchValue$$77[0];
              ticks = matchValue$$77[1].head;
            } else {
              $target$$156 = 1;
            }
          } else {
            $target$$156 = 1;
          }
        } else {
          $target$$156 = 1;
        }

        switch ($target$$156) {
          case 0:
            {
              const ms$$2 = Helper$$$CoreCall$$39739A92("Long", "op_Division", (0, _List.head)(i$$45.SignatureArgTypes), (0, _Types.L)(ticks, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(10000), (0, _Types.L)())), (0, _Types.L)((0, _AST.Expr$$get_Type)(ticks), (0, _Types.L)(new _AST.Type(7, "Number", new _AST2.NumberKind(4, "Int32")), (0, _Types.L)())));
              const ms$$3 = Helper$$$CoreCall$$39739A92("Long", "toNumber", new _AST.Type(7, "Number", new _AST2.NumberKind(7, "Float64")), (0, _Types.L)(ms$$2, (0, _Types.L)()), (0, _Types.L)((0, _AST.Expr$$get_Type)(ms$$2), (0, _Types.L)()));
              return Helper$$$CoreCall$$39739A92(moduleName$$5, "addMilliseconds", new _AST.Type(7, "Number", new _AST2.NumberKind(7, "Float64")), (0, _Types.L)(c$$25, (0, _Types.L)(ms$$3, (0, _Types.L)())), (0, _Types.L)((0, _AST.Expr$$get_Type)(c$$25), (0, _Types.L)((0, _AST.Expr$$get_Type)(ms$$3), (0, _Types.L)())), null, null, null, r$$76);
            }

          case 1:
            {
              return null;
            }
        }
      }

    case 9:
      {
        const meth$$29 = i$$45.CompiledName;
        const meth$$30 = (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(meth$$29));
        return Helper$$$CoreCall$$39739A92(moduleName$$5, meth$$30, t$$102, args$$118, i$$45.SignatureArgTypes, thisArg$$37, null, null, r$$76);
      }
  }
}

function timeSpans(_arg1$$37, ctx$$55, r$$77, t$$103, i$$46, thisArg$$38, args$$121) {
  if (i$$46.CompiledName === ".ctor") {
    return Helper$$$CoreCall$$39739A92("TimeSpan", "create", t$$103, args$$121, i$$46.SignatureArgTypes, null, null, null, r$$77);
  } else if (i$$46.CompiledName === "FromMilliseconds") {
    return new _AST.Expr(2, "TypeCast", (0, _List.head)(args$$121), t$$103);
  } else if (i$$46.CompiledName === "get_TotalMilliseconds") {
    return new _AST.Expr(2, "TypeCast", thisArg$$38, t$$103);
  } else {
    const meth$$31 = i$$46.CompiledName;
    const meth$$32 = (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(meth$$31));
    return Helper$$$CoreCall$$39739A92("TimeSpan", meth$$32, t$$103, args$$121, i$$46.SignatureArgTypes, thisArg$$38, null, null, r$$77);
  }
}

function timers(_arg1$$38, ctx$$56, r$$78, t$$104, i$$47, thisArg$$39, args$$122) {
  const matchValue$$79 = [i$$47.CompiledName, thisArg$$39, args$$122];
  var $target$$157, meth$$33, x$$53;

  if (matchValue$$79[0] === ".ctor") {
    $target$$157 = 0;
  } else {
    const activePatternResult67823 = (0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("get_", matchValue$$79[0]);

    if (activePatternResult67823 != null) {
      if (matchValue$$79[1] != null) {
        $target$$157 = 1;
        meth$$33 = activePatternResult67823;
        x$$53 = matchValue$$79[1];
      } else {
        $target$$157 = 2;
      }
    } else {
      $target$$157 = 2;
    }
  }

  switch ($target$$157) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Timer", "default", t$$104, args$$122, i$$47.SignatureArgTypes, null, true, null, r$$78);
      }

    case 1:
      {
        return (0, _Transforms.AST$$$get)(r$$78, t$$104, x$$53, meth$$33);
      }

    case 2:
      {
        var $target$$158, meth$$34, value$$26, x$$54;
        const activePatternResult67821 = (0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("set_", matchValue$$79[0]);

        if (activePatternResult67821 != null) {
          if (matchValue$$79[1] != null) {
            if (matchValue$$79[2].tail != null) {
              if (matchValue$$79[2].tail.tail == null) {
                $target$$158 = 0;
                meth$$34 = activePatternResult67821;
                value$$26 = matchValue$$79[2].head;
                x$$54 = matchValue$$79[1];
              } else {
                $target$$158 = 1;
              }
            } else {
              $target$$158 = 1;
            }
          } else {
            $target$$158 = 1;
          }
        } else {
          $target$$158 = 1;
        }

        switch ($target$$158) {
          case 0:
            {
              return new _AST.Expr(16, "Set", x$$54, new _AST.SetKind(1, "ExprSet", (0, _Transforms.AST$$$makeStrConst)(meth$$34)), value$$26, r$$78);
            }

          case 1:
            {
              if (matchValue$$79[1] != null) {
                const x$$55 = matchValue$$79[1];
                return Helper$$$InstanceCall$$9FFCF9C(x$$55, matchValue$$79[0], t$$104, matchValue$$79[2], i$$47.SignatureArgTypes, r$$78);
              } else {
                return null;
              }
            }
        }
      }
  }
}

function systemEnv(_arg5, ctx$$57, _arg4, _arg3$$1, i$$48, _arg2$$6, _arg1$$39) {
  if (i$$48.CompiledName === "get_NewLine") {
    return (0, _Transforms.AST$$$makeStrConst)("\n");
  } else {
    return null;
  }
}

function globalization(_arg4$$1, ctx$$58, _arg3$$2, t$$105, i$$49, _arg2$$7, _arg1$$40) {
  if (i$$49.CompiledName === "get_InvariantCulture") {
    return new _AST.Expr(6, "ObjectExpr", (0, _Types.L)(), t$$105, null);
  } else {
    return null;
  }
}

function random(_arg2$$8, ctx$$59, r$$79, t$$106, i$$50, _arg1$$41, args$$124) {
  if (i$$50.CompiledName === ".ctor") {
    return new _AST.Expr(6, "ObjectExpr", (0, _Types.L)(), t$$106, null);
  } else if (i$$50.CompiledName === "Next") {
    let patternInput$$9;

    if (args$$124.tail != null) {
      if (args$$124.tail.tail != null) {
        if (args$$124.tail.tail.tail == null) {
          patternInput$$9 = [args$$124.head, args$$124.tail.head];
        } else {
          throw new Error("Unexpected arg count for Random.Next");
        }
      } else {
        patternInput$$9 = [(0, _Transforms.AST$$$makeIntConst)(0), args$$124.head];
      }
    } else {
      patternInput$$9 = [(0, _Transforms.AST$$$makeIntConst)(0), (0, _Transforms.AST$$$makeIntConst)(2147483647)];
    }

    return Helper$$$CoreCall$$39739A92("Util", "randomNext", t$$106, (0, _Types.L)(patternInput$$9[0], (0, _Types.L)(patternInput$$9[1], (0, _Types.L)())), (0, _Types.L)((0, _AST.Expr$$get_Type)(patternInput$$9[0]), (0, _Types.L)((0, _AST.Expr$$get_Type)(patternInput$$9[1]), (0, _Types.L)())), null, null, null, r$$79);
  } else if (i$$50.CompiledName === "NextDouble") {
    return Helper$$$GlobalCall$$Z6A200D61("Math", t$$106, (0, _Types.L)(), (0, _Types.L)(), "random");
  } else {
    return null;
  }
}

function cancels(_arg1$$42, ctx$$60, r$$80, t$$107, i$$51, thisArg$$40, args$$125) {
  var $target$$159;

  if (i$$51.CompiledName === ".ctor") {
    $target$$159 = 0;
  } else if (i$$51.CompiledName === "get_Token") {
    $target$$159 = 1;
  } else if (i$$51.CompiledName === "Cancel") {
    $target$$159 = 2;
  } else if (i$$51.CompiledName === "CancelAfter") {
    $target$$159 = 2;
  } else if (i$$51.CompiledName === "get_IsCancellationRequested") {
    $target$$159 = 2;
  } else if (i$$51.CompiledName === "Dispose") {
    $target$$159 = 3;
  } else {
    $target$$159 = 4;
  }

  switch ($target$$159) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Async", "createCancellationToken", t$$107, args$$125, i$$51.SignatureArgTypes);
      }

    case 1:
      {
        return thisArg$$40;
      }

    case 2:
      {
        let patternInput$$10;

        if (thisArg$$40 == null) {
          patternInput$$10 = [args$$125, i$$51.SignatureArgTypes];
        } else {
          const c$$26 = thisArg$$40;
          patternInput$$10 = [(0, _Types.L)(c$$26, args$$125), (0, _Types.L)((0, _AST.Expr$$get_Type)(c$$26), i$$51.SignatureArgTypes)];
        }

        return Helper$$$CoreCall$$39739A92("Async", (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$51.CompiledName)), t$$107, patternInput$$10[0], patternInput$$10[1], null, null, null, r$$80);
      }

    case 3:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(2, "Unit")));
      }

    case 4:
      {
        return null;
      }
  }
}

function monitor(_arg1$$43, ctx$$61, r$$81, t$$108, i$$52, thisArg$$41, args$$127) {
  var $target$$160;

  if (i$$52.CompiledName === "Enter") {
    $target$$160 = 0;
  } else if (i$$52.CompiledName === "Exit") {
    $target$$160 = 0;
  } else {
    $target$$160 = 1;
  }

  switch ($target$$160) {
    case 0:
      {
        return new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", new _AST.Type(2, "Unit")));
      }

    case 1:
      {
        return null;
      }
  }
}

function activator(_arg1$$44, ctx$$62, r$$82, t$$109, i$$53, thisArg$$42, args$$128) {
  const matchValue$$85 = [i$$53.CompiledName, thisArg$$42, args$$128];
  var $target$$161;

  if (matchValue$$85[0] === "CreateInstance") {
    if (matchValue$$85[1] == null) {
      if (matchValue$$85[2].tail != null) {
        $target$$161 = 0;
      } else {
        $target$$161 = 1;
      }
    } else {
      $target$$161 = 1;
    }
  } else {
    $target$$161 = 1;
  }

  switch ($target$$161) {
    case 0:
      {
        const typRef = matchValue$$85[2].head;
        const args$$129 = matchValue$$85[2].tail;
        const info$$5 = (0, _Transforms.AST$$$argInfo)(null, args$$129, new _AST.SignatureKind(0, "Typed", (0, _List.tail)(i$$53.SignatureArgTypes)));
        return (0, _Transforms.AST$$$constructorCall)(r$$82, t$$109, info$$5, typRef);
      }

    case 1:
      {
        return null;
      }
  }
}

function regex(com$$59, ctx$$63, r$$83, t$$110, i$$54, thisArg$$43, args$$130) {
  var activePatternResult67891;

  const propInt = function propInt(p, callee$$13) {
    return (0, _Transforms.AST$$$getExpr)(r$$83, t$$110, callee$$13, (0, _Transforms.AST$$$makeIntConst)(p));
  };

  const propStr = function propStr(p$$1, callee$$14) {
    return (0, _Transforms.AST$$$getExpr)(r$$83, t$$110, callee$$14, (0, _Transforms.AST$$$makeStrConst)(p$$1));
  };

  const isGroup = thisArg$$43 != null ? (activePatternResult67891 = $007CEntFullName$007C_$007C((0, _AST.Expr$$get_Type)(thisArg$$43)), activePatternResult67891 != null ? activePatternResult67891 === "System.Text.RegularExpressions.Group" ? true : false : false) : false;

  if (i$$54.CompiledName === ".ctor") {
    return Helper$$$CoreCall$$39739A92("RegExp", "create", t$$110, args$$130, i$$54.SignatureArgTypes, null, null, null, r$$83);
  } else if (i$$54.CompiledName === "get_Options") {
    return Helper$$$CoreCall$$39739A92("RegExp", "options", t$$110, (0, _Types.L)(thisArg$$43, (0, _Types.L)()), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$43), (0, _Types.L)()), null, null, null, r$$83);
  } else if (i$$54.CompiledName === "get_Index") {
    if (!isGroup) {
      return propStr("index", thisArg$$43);
    } else {
      return (0, _Transforms.Log$$$addErrorAndReturnNull)(com$$59, ctx$$63.InlinePath, r$$83, "Accessing index of Regex groups is not supported");
    }
  } else if (i$$54.CompiledName === "get_Value") {
    if (isGroup) {
      return (0, _Transforms.AST$$$makeLogOp)(r$$83, thisArg$$43, (0, _Transforms.AST$$$makeStrConst)(""), new _AST2.LogicalOperator(0, "LogicalOr"));
    } else {
      return propInt(0, thisArg$$43);
    }
  } else if (i$$54.CompiledName === "get_Length") {
    if (isGroup) {
      return propStr("length", thisArg$$43);
    } else {
      return propStr("length", propInt(0, thisArg$$43));
    }
  } else if (i$$54.CompiledName === "get_Success") {
    return (0, _Transforms.AST$$$makeEqOp)(r$$83, thisArg$$43, new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", (0, _AST.Expr$$get_Type)(thisArg$$43))), new _AST2.BinaryOperator(1, "BinaryUnequal"));
  } else if (i$$54.CompiledName === "get_Groups") {
    return thisArg$$43;
  } else if (i$$54.CompiledName === "get_Item") {
    return (0, _Transforms.AST$$$getExpr)(r$$83, t$$110, thisArg$$43, (0, _List.head)(args$$130));
  } else if (i$$54.CompiledName === "get_Count") {
    return propStr("length", thisArg$$43);
  } else {
    const meth$$36 = i$$54.CompiledName;
    const meth$$37 = (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(meth$$36));
    return Helper$$$CoreCall$$39739A92("RegExp", meth$$37, t$$110, args$$130, i$$54.SignatureArgTypes, thisArg$$43, null, null, r$$83);
  }
}

function encoding(_arg1$$45, ctx$$64, r$$84, t$$111, i$$55, thisArg$$44, args$$131) {
  const matchValue$$87 = [i$$55.CompiledName, thisArg$$44, (0, _List.length)(args$$131)];
  var $target$$162, callee$$15;

  if (matchValue$$87[0] === "get_Unicode") {
    $target$$162 = 0;
  } else if (matchValue$$87[0] === "get_UTF8") {
    $target$$162 = 0;
  } else if (matchValue$$87[0] === "GetBytes") {
    if (matchValue$$87[1] != null) {
      if (matchValue$$87[2] === 1) {
        $target$$162 = 1;
        callee$$15 = matchValue$$87[1];
      } else if (matchValue$$87[2] === 3) {
        $target$$162 = 1;
        callee$$15 = matchValue$$87[1];
      } else {
        $target$$162 = 2;
      }
    } else {
      $target$$162 = 2;
    }
  } else if (matchValue$$87[0] === "GetString") {
    if (matchValue$$87[1] != null) {
      if (matchValue$$87[2] === 1) {
        $target$$162 = 1;
        callee$$15 = matchValue$$87[1];
      } else if (matchValue$$87[2] === 3) {
        $target$$162 = 1;
        callee$$15 = matchValue$$87[1];
      } else {
        $target$$162 = 2;
      }
    } else {
      $target$$162 = 2;
    }
  } else {
    $target$$162 = 2;
  }

  switch ($target$$162) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Encoding", i$$55.CompiledName, t$$111, args$$131, i$$55.SignatureArgTypes, null, null, null, r$$84);
      }

    case 1:
      {
        const meth$$38 = (0, _Prelude.Naming$$$lowerFirst)(i$$55.CompiledName);
        return Helper$$$InstanceCall$$9FFCF9C(callee$$15, meth$$38, t$$111, args$$131, i$$55.SignatureArgTypes, r$$84);
      }

    case 2:
      {
        return null;
      }
  }
}

function enumerables(_arg2$$9, ctx$$65, r$$85, t$$112, i$$56, thisArg$$45, _arg1$$46) {
  const matchValue$$88 = [thisArg$$45, i$$56.CompiledName];
  var $target$$163, callee$$16, callee$$17;

  if (matchValue$$88[0] != null) {
    if (matchValue$$88[1] === "get_Count") {
      $target$$163 = 0;
      callee$$16 = matchValue$$88[0];
    } else if (matchValue$$88[1] === "GetEnumerator") {
      $target$$163 = 1;
      callee$$17 = matchValue$$88[0];
    } else {
      $target$$163 = 2;
    }
  } else {
    $target$$163 = 2;
  }

  switch ($target$$163) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Seq", "length", t$$112, (0, _Types.L)(callee$$16, (0, _Types.L)()), null, null, null, null, r$$85);
      }

    case 1:
      {
        return getEnumerator(r$$85, t$$112, callee$$17);
      }

    case 2:
      {
        return null;
      }
  }
}

function enumerators(_arg1$$47, ctx$$66, r$$86, t$$113, i$$57, thisArg$$46, args$$132) {
  const matchValue$$89 = [i$$57.CompiledName, thisArg$$46];
  var $target$$164;

  if (matchValue$$89[0] === "get_Current") {
    if (matchValue$$89[1] != null) {
      $target$$164 = 0;
    } else {
      $target$$164 = 2;
    }
  } else if (matchValue$$89[1] != null) {
    $target$$164 = 1;
  } else {
    $target$$164 = 2;
  }

  switch ($target$$164) {
    case 0:
      {
        const x$$56 = matchValue$$89[1];
        return (0, _Transforms.AST$$$get)(r$$86, t$$113, x$$56, "Current");
      }

    case 1:
      {
        const x$$57 = matchValue$$89[1];
        return Helper$$$InstanceCall$$9FFCF9C(x$$57, matchValue$$89[0], t$$113, args$$132, i$$57.SignatureArgTypes, r$$86);
      }

    case 2:
      {
        return null;
      }
  }
}

function events(_arg1$$48, ctx$$67, r$$87, t$$114, i$$58, thisArg$$47, args$$133) {
  const matchValue$$90 = [i$$58.CompiledName, thisArg$$47];
  var $target$$165, meth$$41;

  if (matchValue$$90[0] === ".ctor") {
    $target$$165 = 0;
  } else if (matchValue$$90[0] === "get_Publish") {
    if (matchValue$$90[1] == null) {
      $target$$165 = 3;
      meth$$41 = matchValue$$90[0];
    } else {
      $target$$165 = 1;
    }
  } else if (matchValue$$90[1] == null) {
    $target$$165 = 3;
    meth$$41 = matchValue$$90[0];
  } else {
    $target$$165 = 2;
  }

  switch ($target$$165) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Event", "default", t$$114, args$$133, i$$58.SignatureArgTypes, null, true, null, r$$87);
      }

    case 1:
      {
        const x$$58 = matchValue$$90[1];
        return (0, _Transforms.AST$$$get)(r$$87, t$$114, x$$58, "Publish");
      }

    case 2:
      {
        const x$$59 = matchValue$$90[1];
        return Helper$$$InstanceCall$$9FFCF9C(x$$59, matchValue$$90[0], t$$114, args$$133, i$$58.SignatureArgTypes, r$$87);
      }

    case 3:
      {
        return Helper$$$CoreCall$$39739A92("Event", (0, _Prelude.Naming$$$lowerFirst)(meth$$41), t$$114, args$$133, i$$58.SignatureArgTypes, null, null, null, r$$87);
      }
  }
}

function observable(_arg2$$10, ctx$$68, r$$88, t$$115, i$$59, _arg1$$49, args$$134) {
  return Helper$$$CoreCall$$39739A92("Observable", (0, _Prelude.Naming$$$lowerFirst)(i$$59.CompiledName), t$$115, args$$134, i$$59.SignatureArgTypes, null, null, null, r$$88);
}

function mailbox(_arg1$$50, ctx$$69, r$$89, t$$116, i$$60, thisArg$$48, args$$135) {
  if (thisArg$$48 != null) {
    const callee$$18 = thisArg$$48;
    var $target$$166;

    if (i$$60.CompiledName === "Start") {
      $target$$166 = 0;
    } else if (i$$60.CompiledName === "Receive") {
      $target$$166 = 0;
    } else if (i$$60.CompiledName === "PostAndAsyncReply") {
      $target$$166 = 0;
    } else if (i$$60.CompiledName === "Post") {
      $target$$166 = 0;
    } else if (i$$60.CompiledName === "Reply") {
      $target$$166 = 1;
    } else {
      $target$$166 = 2;
    }

    switch ($target$$166) {
      case 0:
        {
          const memb$$5 = i$$60.CompiledName === "Start" ? "startInstance" : (0, _Prelude.Naming$$$lowerFirst)(i$$60.CompiledName);
          return Helper$$$CoreCall$$39739A92("MailboxProcessor", memb$$5, t$$116, args$$135, i$$60.SignatureArgTypes, callee$$18, null, null, r$$89);
        }

      case 1:
        {
          return Helper$$$InstanceCall$$9FFCF9C(callee$$18, "reply", t$$116, args$$135, i$$60.SignatureArgTypes, r$$89);
        }

      case 2:
        {
          return null;
        }
    }
  } else {
    if (i$$60.CompiledName === ".ctor") {
      return Helper$$$CoreCall$$39739A92("MailboxProcessor", "default", t$$116, args$$135, i$$60.SignatureArgTypes, null, true, null, r$$89);
    } else if (i$$60.CompiledName === "Start") {
      return Helper$$$CoreCall$$39739A92("MailboxProcessor", "start", t$$116, args$$135, i$$60.SignatureArgTypes, null, null, null, r$$89);
    } else {
      return null;
    }
  }
}

function asyncBuilder(com$$60, ctx$$70, r$$90, t$$117, i$$61, thisArg$$49, args$$136) {
  const matchValue$$93 = [thisArg$$49, i$$61.CompiledName, args$$136];
  var $target$$167, arg$$55, f$$14, x$$60, meth$$42, x$$61, meth$$43;

  if (matchValue$$93[1] === "Singleton") {
    $target$$167 = 0;
  } else if (matchValue$$93[1] === "Using") {
    if (matchValue$$93[0] == null) {
      $target$$167 = 3;
      meth$$43 = matchValue$$93[1];
    } else if (matchValue$$93[2].tail != null) {
      if (matchValue$$93[2].tail.tail != null) {
        if (matchValue$$93[2].tail.tail.tail == null) {
          $target$$167 = 1;
          arg$$55 = matchValue$$93[2].head;
          f$$14 = matchValue$$93[2].tail.head;
          x$$60 = matchValue$$93[0];
        } else {
          $target$$167 = 2;
          meth$$42 = matchValue$$93[1];
          x$$61 = matchValue$$93[0];
        }
      } else {
        $target$$167 = 2;
        meth$$42 = matchValue$$93[1];
        x$$61 = matchValue$$93[0];
      }
    } else {
      $target$$167 = 2;
      meth$$42 = matchValue$$93[1];
      x$$61 = matchValue$$93[0];
    }
  } else if (matchValue$$93[0] == null) {
    $target$$167 = 3;
    meth$$43 = matchValue$$93[1];
  } else {
    $target$$167 = 2;
    meth$$42 = matchValue$$93[1];
    x$$61 = matchValue$$93[0];
  }

  switch ($target$$167) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeCoreRef)(t$$117, "singleton", "AsyncBuilder");
      }

    case 1:
      {
        return Helper$$$InstanceCall$$9FFCF9C(x$$60, "Using", t$$117, (0, _Types.L)(arg$$55, (0, _Types.L)(f$$14, (0, _Types.L)())), i$$61.SignatureArgTypes, r$$90);
      }

    case 2:
      {
        return Helper$$$InstanceCall$$9FFCF9C(x$$61, meth$$42, t$$117, args$$136, i$$61.SignatureArgTypes, r$$90);
      }

    case 3:
      {
        return Helper$$$CoreCall$$39739A92("AsyncBuilder", (0, _Prelude.Naming$$$lowerFirst)(meth$$43), t$$117, args$$136, i$$61.SignatureArgTypes, null, null, null, r$$90);
      }
  }
}

function asyncs(com$$61, ctx$$71, r$$91, t$$118, i$$62, _arg1$$51, args$$137) {
  if (i$$62.CompiledName === "Start") {
    (0, _Transforms.Log$$$addWarning)(com$$61, ctx$$71.InlinePath, r$$91, "Async.Start will behave as StartImmediate");
    return Helper$$$CoreCall$$39739A92("Async", "start", t$$118, args$$137, i$$62.SignatureArgTypes, null, null, null, r$$91);
  } else if (i$$62.CompiledName === "get_CancellationToken") {
    return Helper$$$CoreCall$$39739A92("Async", "cancellationToken", t$$118, (0, _Types.L)(), null, null, null, null, r$$91);
  } else if (i$$62.CompiledName === "Catch") {
    return Helper$$$CoreCall$$39739A92("Async", "catchAsync", t$$118, args$$137, i$$62.SignatureArgTypes, null, null, null, r$$91);
  } else {
    const meth$$44 = i$$62.CompiledName;
    return Helper$$$CoreCall$$39739A92("Async", (0, _Prelude.Naming$$$lowerFirst)(meth$$44), t$$118, args$$137, i$$62.SignatureArgTypes, null, null, null, r$$91);
  }
}

function guids(_arg2$$11, ctx$$72, _arg1$$52, t$$119, i$$63, thisArg$$50, args$$138) {
  if (i$$63.CompiledName === "NewGuid") {
    return Helper$$$CoreCall$$39739A92("String", "newGuid", t$$119, (0, _Types.L)());
  } else if (i$$63.CompiledName === "Parse") {
    return Helper$$$CoreCall$$39739A92("String", "validateGuid", t$$119, args$$138, i$$63.SignatureArgTypes);
  } else if (i$$63.CompiledName === "TryParse") {
    return Helper$$$CoreCall$$39739A92("String", "validateGuid", t$$119, (0, _Types.L)((0, _List.head)(args$$138), (0, _Types.L)((0, _Transforms.AST$$$makeBoolConst)(true), (0, _Types.L)())), (0, _Types.L)((0, _AST.Expr$$get_Type)((0, _List.head)(args$$138)), (0, _Types.L)(new _AST.Type(3, "Boolean"), (0, _Types.L)())));
  } else if (i$$63.CompiledName === "ToByteArray") {
    return Helper$$$CoreCall$$39739A92("String", "guidToArray", t$$119, (0, _Types.L)(thisArg$$50, (0, _Types.L)()), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$50), (0, _Types.L)()));
  } else if (i$$63.CompiledName === ".ctor") {
    var $target$$168;

    if (args$$138.tail != null) {
      const activePatternResult67998 = (0, _AST.Expr$$get_Type)(args$$138.head);

      if (activePatternResult67998.tag === 11) {
        if (args$$138.tail.tail == null) {
          $target$$168 = 1;
        } else {
          $target$$168 = 3;
        }
      } else if (activePatternResult67998.tag === 5) {
        if (args$$138.tail.tail == null) {
          $target$$168 = 2;
        } else {
          $target$$168 = 3;
        }
      } else {
        $target$$168 = 3;
      }
    } else {
      $target$$168 = 0;
    }

    switch ($target$$168) {
      case 0:
        {
          return (0, _Transforms.AST$$$makeStrConst)("00000000-0000-0000-0000-000000000000");
        }

      case 1:
        {
          return Helper$$$CoreCall$$39739A92("String", "arrayToGuid", t$$119, args$$138, i$$63.SignatureArgTypes);
        }

      case 2:
        {
          return Helper$$$CoreCall$$39739A92("String", "validateGuid", t$$119, args$$138, i$$63.SignatureArgTypes);
        }

      case 3:
        {
          return null;
        }
    }
  } else {
    return null;
  }
}

function uris(_arg1$$53, ctx$$73, r$$92, t$$120, i$$64, thisArg$$51, args$$139) {
  if (i$$64.CompiledName === ".ctor") {
    return Helper$$$CoreCall$$39739A92("Uri", "default", t$$120, args$$139, i$$64.SignatureArgTypes, null, true, null, r$$92);
  } else if (i$$64.CompiledName === "UnescapeDataString") {
    return Helper$$$CoreCall$$39739A92("Util", "unescapeDataString", t$$120, args$$139, i$$64.SignatureArgTypes);
  } else if (i$$64.CompiledName === "EscapeDataString") {
    return Helper$$$CoreCall$$39739A92("Util", "escapeDataString", t$$120, args$$139, i$$64.SignatureArgTypes);
  } else if (i$$64.CompiledName === "EscapeUriString") {
    return Helper$$$CoreCall$$39739A92("Util", "escapeUriString", t$$120, args$$139, i$$64.SignatureArgTypes);
  } else if (i$$64.CompiledName === "get_IsAbsoluteUri") {
    return (0, _Transforms.AST$$$get)(r$$92, t$$120, thisArg$$51, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$64.CompiledName)));
  } else if (i$$64.CompiledName === "get_Scheme") {
    return (0, _Transforms.AST$$$get)(r$$92, t$$120, thisArg$$51, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$64.CompiledName)));
  } else if (i$$64.CompiledName === "get_Host") {
    return (0, _Transforms.AST$$$get)(r$$92, t$$120, thisArg$$51, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$64.CompiledName)));
  } else if (i$$64.CompiledName === "get_AbsolutePath") {
    return (0, _Transforms.AST$$$get)(r$$92, t$$120, thisArg$$51, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$64.CompiledName)));
  } else if (i$$64.CompiledName === "get_PathAndQuery") {
    return (0, _Transforms.AST$$$get)(r$$92, t$$120, thisArg$$51, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$64.CompiledName)));
  } else if (i$$64.CompiledName === "get_Query") {
    return (0, _Transforms.AST$$$get)(r$$92, t$$120, thisArg$$51, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$64.CompiledName)));
  } else if (i$$64.CompiledName === "get_Fragment") {
    return (0, _Transforms.AST$$$get)(r$$92, t$$120, thisArg$$51, (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$64.CompiledName)));
  } else {
    return null;
  }
}

function laziness(_arg1$$54, ctx$$74, r$$93, t$$121, i$$65, thisArg$$52, args$$140) {
  const matchValue$$97 = [i$$65.CompiledName, thisArg$$52, args$$140];
  var $target$$169, callee$$20;

  if (matchValue$$97[0] === ".ctor") {
    $target$$169 = 0;
  } else if (matchValue$$97[0] === "Create") {
    $target$$169 = 0;
  } else if (matchValue$$97[0] === "CreateFromValue") {
    $target$$169 = 1;
  } else if (matchValue$$97[0] === "Force") {
    if (matchValue$$97[1] != null) {
      $target$$169 = 2;
    } else {
      $target$$169 = 4;
    }
  } else if (matchValue$$97[0] === "get_Value") {
    if (matchValue$$97[1] != null) {
      $target$$169 = 3;
      callee$$20 = matchValue$$97[1];
    } else {
      $target$$169 = 4;
    }
  } else if (matchValue$$97[0] === "get_IsValueCreated") {
    if (matchValue$$97[1] != null) {
      $target$$169 = 3;
      callee$$20 = matchValue$$97[1];
    } else {
      $target$$169 = 4;
    }
  } else {
    $target$$169 = 4;
  }

  switch ($target$$169) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Util", "Lazy", t$$121, args$$140, i$$65.SignatureArgTypes, null, true, null, r$$93);
      }

    case 1:
      {
        return Helper$$$CoreCall$$39739A92("Util", "lazyFromValue", t$$121, args$$140, i$$65.SignatureArgTypes, null, null, null, r$$93);
      }

    case 2:
      {
        const callee$$19 = matchValue$$97[1];
        return (0, _Transforms.AST$$$get)(r$$93, t$$121, callee$$19, "Value");
      }

    case 3:
      {
        return (0, _Transforms.AST$$$get)(r$$93, t$$121, callee$$20, (0, _Prelude.Naming$$$removeGetSetPrefix)(i$$65.CompiledName));
      }

    case 4:
      {
        return null;
      }
  }
}

function controlExtensions(_arg2$$12, ctx$$75, _arg1$$55, t$$122, i$$66, thisArg$$53, args$$141) {
  return (0, _Option.defaultArg)(i$$66.CompiledName === "AddToObservable" ? "add" : i$$66.CompiledName === "SubscribeToObservable" ? "subscribe" : null, null, function mapping$$13(meth$$45) {
    var value$$27;
    let patternInput$$11;
    const tupledArg$$4 = (value$$27 = [args$$141, i$$66.SignatureArgTypes], function (option$$11) {
      return (0, _Option.defaultArg)(option$$11, value$$27);
    })((0, _Option.defaultArg)(thisArg$$53, null, function mapping$$12(thisArg$$54) {
      return [(0, _Types.L)(thisArg$$54, args$$141), (0, _Types.L)((0, _AST.Expr$$get_Type)(thisArg$$54), i$$66.SignatureArgTypes)];
    }));
    patternInput$$11 = [(0, _List.reverse)(tupledArg$$4[0]), (0, _List.reverse)(tupledArg$$4[1])];
    return Helper$$$CoreCall$$39739A92("Observable", meth$$45, t$$122, patternInput$$11[0], patternInput$$11[1]);
  });
}

function types(com$$62, ctx$$76, r$$94, t$$123, i$$67, thisArg$$55, _args) {
  const returnString = function returnString(x$$62) {
    return new _AST.Expr(0, "Value", new _AST.ValueKind(5, "StringConstant", x$$62));
  };

  var $target$$170, exprRange, exprType, thisArg$$56, thisArg$$57;

  if (thisArg$$55 == null) {
    $target$$170 = 2;
  } else if (thisArg$$55.tag === 0) {
    if (thisArg$$55.fields[0].tag === 0) {
      $target$$170 = 0;
      exprRange = thisArg$$55.fields[0].fields[1];
      exprType = thisArg$$55.fields[0].fields[0];
      thisArg$$56 = thisArg$$55;
    } else {
      $target$$170 = 1;
      thisArg$$57 = thisArg$$55;
    }
  } else {
    $target$$170 = 1;
    thisArg$$57 = thisArg$$55;
  }

  switch ($target$$170) {
    case 0:
      {
        if (exprType.tag === 14) {
          genericTypeInfoError(com$$62, ctx$$76.InlinePath, exprRange);
        }

        var $target$$171;

        if (i$$67.CompiledName === "get_FullName") {
          $target$$171 = 0;
        } else if (i$$67.CompiledName === "get_Namespace") {
          $target$$171 = 1;
        } else if (i$$67.CompiledName === "get_IsArray") {
          $target$$171 = 2;
        } else if (i$$67.CompiledName === "GetElementType") {
          $target$$171 = 3;
        } else if (i$$67.CompiledName === "get_IsGenericType") {
          $target$$171 = 4;
        } else if (i$$67.CompiledName === "get_GenericTypeArguments") {
          $target$$171 = 5;
        } else if (i$$67.CompiledName === "GetGenericArguments") {
          $target$$171 = 5;
        } else if (i$$67.CompiledName === "GetTypeInfo") {
          $target$$171 = 6;
        } else if (i$$67.CompiledName === "GetGenericTypeDefinition") {
          $target$$171 = 7;
        } else {
          $target$$171 = 8;
        }

        switch ($target$$171) {
          case 0:
            {
              return returnString((0, _Transforms.AST$$$getTypeFullName)(false, exprType));
            }

          case 1:
            {
              const fullname = (0, _Transforms.AST$$$getTypeFullName)(false, exprType);
              const matchValue$$100 = fullname.lastIndexOf(".") | 0;

              if (matchValue$$100 === -1) {
                return returnString("");
              } else {
                const i$$68 = matchValue$$100 | 0;
                return returnString(fullname.substr(0, i$$68));
              }
            }

          case 2:
            {
              return new _AST.Expr(0, "Value", new _AST.ValueKind(3, "BoolConstant", exprType.tag === 11 ? true : false));
            }

          case 3:
            {
              if (exprType.tag === 11) {
                const t$$124 = exprType.fields[0];
                return new _AST.Expr(0, "Value", new _AST.ValueKind(0, "TypeInfo", t$$124, r$$94));
              } else {
                return new _AST.Expr(0, "Value", new _AST.ValueKind(1, "Null", t$$123));
              }
            }

          case 4:
            {
              return new _AST.Expr(0, "Value", new _AST.ValueKind(3, "BoolConstant", !((0, _AST.Type$$get_Generics)(exprType).tail == null)));
            }

          case 5:
            {
              const arVals$$1 = new _AST.NewArrayKind(0, "ArrayValues", (0, _List.map)(function mapping$$14(t$$125) {
                return makeTypeInfo(r$$94, t$$125);
              }, (0, _AST.Type$$get_Generics)(exprType)));
              return new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", arVals$$1, new _AST.Type(1, "Any")));
            }

          case 6:
            {
              return thisArg$$56;
            }

          case 7:
            {
              const newGen = (0, _List.map)(function mapping$$15(_arg1$$56) {
                return new _AST.Type(1, "Any");
              }, (0, _AST.Type$$get_Generics)(exprType));
              return new _AST.Expr(0, "Value", new _AST.ValueKind(0, "TypeInfo", (0, _AST.Type$$ReplaceGenerics$$ZE41DBA1)(exprType, newGen), exprRange));
            }

          case 8:
            {
              return null;
            }
        }
      }

    case 1:
      {
        var $target$$172;

        if (i$$67.CompiledName === "get_GenericTypeArguments") {
          $target$$172 = 0;
        } else if (i$$67.CompiledName === "GetGenericArguments") {
          $target$$172 = 0;
        } else if (i$$67.CompiledName === "get_FullName") {
          $target$$172 = 1;
        } else if (i$$67.CompiledName === "get_Namespace") {
          $target$$172 = 1;
        } else if (i$$67.CompiledName === "get_IsArray") {
          $target$$172 = 1;
        } else if (i$$67.CompiledName === "GetElementType") {
          $target$$172 = 1;
        } else if (i$$67.CompiledName === "get_IsGenericType") {
          $target$$172 = 1;
        } else if (i$$67.CompiledName === "GetGenericTypeDefinition") {
          $target$$172 = 1;
        } else if (i$$67.CompiledName === "GetTypeInfo") {
          $target$$172 = 2;
        } else {
          $target$$172 = 3;
        }

        switch ($target$$172) {
          case 0:
            {
              return Helper$$$CoreCall$$39739A92("Reflection", "getGenerics", t$$123, (0, _Types.L)(thisArg$$57, (0, _Types.L)()), null, null, null, null, r$$94);
            }

          case 1:
            {
              const meth$$46 = (0, _Prelude.Naming$$$lowerFirst)((0, _Prelude.Naming$$$removeGetSetPrefix)(i$$67.CompiledName));
              return Helper$$$CoreCall$$39739A92("Reflection", meth$$46, t$$123, (0, _Types.L)(thisArg$$57, (0, _Types.L)()), null, null, null, null, r$$94);
            }

          case 2:
            {
              return thisArg$$57;
            }

          case 3:
            {
              return null;
            }
        }
      }

    case 2:
      {
        return null;
      }
  }
}

function fsharpType(methName$$13, r$$95, t$$126, i$$69, args$$144) {
  var $target$$173;

  switch (methName$$13) {
    case "MakeTupleType":
      $target$$173 = 0;
      break;

    case "GetRecordFields":
      $target$$173 = 1;
      break;

    case "GetUnionCases":
    case "GetTupleElements":
    case "GetFunctionElements":
    case "IsUnion":
    case "IsRecord":
    case "IsTuple":
    case "IsFunction":
      $target$$173 = 2;
      break;

    case "IsExceptionRepresentation":
    case "GetExceptionFields":
      $target$$173 = 3;
      break;

    default:
      $target$$173 = 4;
  }

  switch ($target$$173) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Reflection", "tuple", t$$126, args$$144, i$$69.SignatureArgTypes, null, null, null, r$$95);
      }

    case 1:
      {
        return Helper$$$CoreCall$$39739A92("Reflection", "getRecordElements", t$$126, args$$144, i$$69.SignatureArgTypes, null, null, null, r$$95);
      }

    case 2:
      {
        return Helper$$$CoreCall$$39739A92("Reflection", (0, _Prelude.Naming$$$lowerFirst)(methName$$13), t$$126, args$$144, i$$69.SignatureArgTypes, null, null, null, r$$95);
      }

    case 3:
      {
        return null;
      }

    case 4:
      {
        return null;
      }
  }
}

function fsharpValue(methName$$14, r$$96, t$$127, i$$70, args$$145) {
  var $target$$174;

  switch (methName$$14) {
    case "GetUnionFields":
    case "GetRecordFields":
    case "GetRecordField":
    case "GetTupleFields":
    case "GetTupleField":
    case "MakeUnion":
    case "MakeRecord":
    case "MakeTuple":
      $target$$174 = 0;
      break;

    case "GetExceptionFields":
      $target$$174 = 1;
      break;

    default:
      $target$$174 = 2;
  }

  switch ($target$$174) {
    case 0:
      {
        return Helper$$$CoreCall$$39739A92("Reflection", (0, _Prelude.Naming$$$lowerFirst)(methName$$14), t$$127, args$$145, i$$70.SignatureArgTypes, null, null, null, r$$96);
      }

    case 1:
      {
        return null;
      }

    case 2:
      {
        return null;
      }
  }
}

function curryExprAtRuntime(arity, expr$$11) {
  return Helper$$$CoreCall$$39739A92("Util", "curry", (0, _AST.Expr$$get_Type)(expr$$11), (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(arity), (0, _Types.L)(expr$$11, (0, _Types.L)())));
}

function uncurryExprAtRuntime(arity$$1, expr$$12) {
  return Helper$$$CoreCall$$39739A92("Util", "uncurry", (0, _AST.Expr$$get_Type)(expr$$12), (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(arity$$1), (0, _Types.L)(expr$$12, (0, _Types.L)())));
}

function partialApplyAtRuntime(t$$128, arity$$2, fn$$2, args$$146) {
  const args$$147 = new _AST.Expr(0, "Value", new _AST.ValueKind(10, "NewArray", new _AST.NewArrayKind(0, "ArrayValues", args$$146), new _AST.Type(1, "Any")));
  return Helper$$$CoreCall$$39739A92("Util", "partialApply", t$$128, (0, _Types.L)((0, _Transforms.AST$$$makeIntConst)(arity$$2), (0, _Types.L)(fn$$2, (0, _Types.L)(args$$147, (0, _Types.L)()))));
}

function tryField(returnTyp, ownerTyp, fieldName) {
  const matchValue$$102 = [ownerTyp, fieldName];
  var $target$$175;

  if (matchValue$$102[0].tag === 7) {
    if (matchValue$$102[0].fields[0].tag === 8) {
      if (matchValue$$102[1] === "Zero") {
        $target$$175 = 0;
      } else if (matchValue$$102[1] === "One") {
        $target$$175 = 1;
      } else if (matchValue$$102[1] === "Empty") {
        const activePatternResult68106 = $007CBuiltin$007C_$007C(matchValue$$102[0]);

        if (activePatternResult68106 != null) {
          if (activePatternResult68106.tag === 0) {
            $target$$175 = 3;
          } else {
            $target$$175 = 4;
          }
        } else {
          $target$$175 = 4;
        }
      } else {
        $target$$175 = 4;
      }
    } else {
      const activePatternResult68107 = $007CBuiltin$007C_$007C(matchValue$$102[0]);

      if (activePatternResult68107 != null) {
        if (activePatternResult68107.tag === 0) {
          if (matchValue$$102[1] === "Empty") {
            $target$$175 = 3;
          } else {
            $target$$175 = 4;
          }
        } else {
          $target$$175 = 4;
        }
      } else {
        $target$$175 = 4;
      }
    }
  } else if (matchValue$$102[0].tag === 5) {
    if (matchValue$$102[1] === "Empty") {
      $target$$175 = 2;
    } else {
      $target$$175 = 4;
    }
  } else {
    const activePatternResult68108 = $007CBuiltin$007C_$007C(matchValue$$102[0]);

    if (activePatternResult68108 != null) {
      if (activePatternResult68108.tag === 0) {
        if (matchValue$$102[1] === "Empty") {
          $target$$175 = 3;
        } else {
          $target$$175 = 4;
        }
      } else {
        $target$$175 = 4;
      }
    } else {
      $target$$175 = 4;
    }
  }

  switch ($target$$175) {
    case 0:
      {
        return (0, _Transforms.AST$$$makeDecConst)(0);
      }

    case 1:
      {
        return (0, _Transforms.AST$$$makeDecConst)(1);
      }

    case 2:
      {
        return (0, _Transforms.AST$$$makeStrConst)("");
      }

    case 3:
      {
        return (0, _Transforms.AST$$$makeStrConst)("00000000-0000-0000-0000-000000000000");
      }

    case 4:
      {
        var $target$$176;
        const activePatternResult68105 = $007CBuiltin$007C_$007C(matchValue$$102[0]);

        if (activePatternResult68105 != null) {
          if (activePatternResult68105.tag === 1) {
            if (matchValue$$102[1] === "Zero") {
              $target$$176 = 0;
            } else {
              $target$$176 = 1;
            }
          } else {
            $target$$176 = 1;
          }
        } else {
          $target$$176 = 1;
        }

        switch ($target$$176) {
          case 0:
            {
              return (0, _Transforms.AST$$$makeIntConst)(0);
            }

          case 1:
            {
              var $target$$177;
              const activePatternResult68104 = $007CBuiltin$007C_$007C(matchValue$$102[0]);

              if (activePatternResult68104 != null) {
                if (activePatternResult68104.tag === 2) {
                  if (matchValue$$102[1] === "MaxValue") {
                    $target$$177 = 0;
                  } else if (matchValue$$102[1] === "MinValue") {
                    $target$$177 = 0;
                  } else {
                    $target$$177 = 1;
                  }
                } else {
                  $target$$177 = 1;
                }
              } else {
                $target$$177 = 1;
              }

              switch ($target$$177) {
                case 0:
                  {
                    return Helper$$$CoreCall$$39739A92(coreModFor(new BuiltinType(2, "BclDateTime")), (0, _Prelude.Naming$$$lowerFirst)(fieldName), returnTyp, (0, _Types.L)());
                  }

                case 1:
                  {
                    var $target$$178;
                    const activePatternResult68103 = $007CBuiltin$007C_$007C(matchValue$$102[0]);

                    if (activePatternResult68103 != null) {
                      if (activePatternResult68103.tag === 3) {
                        if (matchValue$$102[1] === "MaxValue") {
                          $target$$178 = 0;
                        } else if (matchValue$$102[1] === "MinValue") {
                          $target$$178 = 0;
                        } else {
                          $target$$178 = 1;
                        }
                      } else {
                        $target$$178 = 1;
                      }
                    } else {
                      $target$$178 = 1;
                    }

                    switch ($target$$178) {
                      case 0:
                        {
                          return Helper$$$CoreCall$$39739A92(coreModFor(new BuiltinType(3, "BclDateTimeOffset")), (0, _Prelude.Naming$$$lowerFirst)(fieldName), returnTyp, (0, _Types.L)());
                        }

                      case 1:
                        {
                          return null;
                        }
                    }
                  }
              }
            }
        }
      }
  }
}

const replacedModules = new Map([["System.Math", function (com$$63) {
  return function (ctx$$77) {
    return function (r$$97) {
      return function (t$$129) {
        return function (i$$71) {
          return function (thisArg$$58) {
            return function (args$$148) {
              return operators(com$$63, ctx$$77, r$$97, t$$129, i$$71, thisArg$$58, args$$148);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.Operators", function (com$$64) {
  return function (ctx$$78) {
    return function (r$$98) {
      return function (t$$130) {
        return function (i$$72) {
          return function (thisArg$$59) {
            return function (args$$149) {
              return operators(com$$64, ctx$$78, r$$98, t$$130, i$$72, thisArg$$59, args$$149);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.Operators.Checked", function (com$$65) {
  return function (ctx$$79) {
    return function (r$$99) {
      return function (t$$131) {
        return function (i$$73) {
          return function (thisArg$$60) {
            return function (args$$150) {
              return operators(com$$65, ctx$$79, r$$99, t$$131, i$$73, thisArg$$60, args$$150);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.Operators.Unchecked", function (com$$66) {
  return function (ctx$$80) {
    return function (r$$100) {
      return function (t$$132) {
        return function (i$$74) {
          return function (arg50$0040) {
            return function (args$$151) {
              return unchecked(com$$66, ctx$$80, r$$100, t$$132, i$$74, arg50$0040, args$$151);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.Operators.OperatorIntrinsics", function (com$$67) {
  return function (ctx$$81) {
    return function (r$$101) {
      return function (t$$133) {
        return function (i$$75) {
          return function (thisArg$$61) {
            return function (args$$152) {
              return intrinsicFunctions(com$$67, ctx$$81, r$$101, t$$133, i$$75, thisArg$$61, args$$152);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.ExtraTopLevelOperators", function (com$$68) {
  return function (ctx$$82) {
    return function (r$$102) {
      return function (t$$134) {
        return function (i$$76) {
          return function (thisArg$$62) {
            return function (args$$153) {
              return operators(com$$68, ctx$$82, r$$102, t$$134, i$$76, thisArg$$62, args$$153);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions", function (com$$69) {
  return function (ctx$$83) {
    return function (r$$103) {
      return function (t$$135) {
        return function (i$$77) {
          return function (thisArg$$63) {
            return function (args$$154) {
              return intrinsicFunctions(com$$69, ctx$$83, r$$103, t$$135, i$$77, thisArg$$63, args$$154);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.LanguagePrimitives", function (com$$70) {
  return function (ctx$$84) {
    return function (r$$104) {
      return function (t$$136) {
        return function (i$$78) {
          return function (thisArg$$64) {
            return function (args$$155) {
              return languagePrimitives(com$$70, ctx$$84, r$$104, t$$136, i$$78, thisArg$$64, args$$155);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.LanguagePrimitives.HashCompare", function (com$$71) {
  return function (ctx$$85) {
    return function (r$$105) {
      return function (t$$137) {
        return function (i$$79) {
          return function (thisArg$$65) {
            return function (args$$156) {
              return languagePrimitives(com$$71, ctx$$85, r$$105, t$$137, i$$79, thisArg$$65, args$$156);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicOperators", function (com$$72) {
  return function (ctx$$86) {
    return function (r$$106) {
      return function (t$$138) {
        return function (i$$80) {
          return function (thisArg$$66) {
            return function (args$$157) {
              return operators(com$$72, ctx$$86, r$$106, t$$138, i$$80, thisArg$$66, args$$157);
            };
          };
        };
      };
    };
  };
}], ["System.Char", function (com$$73) {
  return function (ctx$$87) {
    return function (r$$107) {
      return function (t$$139) {
        return function (i$$81) {
          return function (arg50$0040$$1) {
            return function (args$$158) {
              return chars(com$$73, ctx$$87, r$$107, t$$139, i$$81, arg50$0040$$1, args$$158);
            };
          };
        };
      };
    };
  };
}], ["System.String", function (com$$74) {
  return function (ctx$$88) {
    return function (r$$108) {
      return function (t$$140) {
        return function (i$$82) {
          return function (thisArg$$67) {
            return function (args$$159) {
              return strings(com$$74, ctx$$88, r$$108, t$$140, i$$82, thisArg$$67, args$$159);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.StringModule", function (com$$75) {
  return function (ctx$$89) {
    return function (r$$109) {
      return function (t$$141) {
        return function (i$$83) {
          return function (arg50$0040$$2) {
            return function (args$$160) {
              return stringModule(com$$75, ctx$$89, r$$109, t$$141, i$$83, arg50$0040$$2, args$$160);
            };
          };
        };
      };
    };
  };
}], ["System.Text.StringBuilder", function (arg00$0040) {
  return function (ctx$$90) {
    return function (r$$110) {
      return function (t$$142) {
        return function (i$$84) {
          return function (thisArg$$68) {
            return function (args$$161) {
              return bclType(arg00$0040, ctx$$90, r$$110, t$$142, i$$84, thisArg$$68, args$$161);
            };
          };
        };
      };
    };
  };
}], ["System.Array", function (arg00$0040$$1) {
  return function (ctx$$91) {
    return function (r$$111) {
      return function (t$$143) {
        return function (i$$85) {
          return function (thisArg$$69) {
            return function (args$$162) {
              return arrays(arg00$0040$$1, ctx$$91, r$$111, t$$143, i$$85, thisArg$$69, args$$162);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.FSharpList`1", function (com$$76) {
  return function (ctx$$92) {
    return function (r$$112) {
      return function (t$$144) {
        return function (i$$86) {
          return function (thisArg$$70) {
            return function (args$$163) {
              return lists(com$$76, ctx$$92, r$$112, t$$144, i$$86, thisArg$$70, args$$163);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.ArrayModule", function (com$$77) {
  return function (ctx$$93) {
    return function (r$$113) {
      return function (t$$145) {
        return function (i$$87) {
          return function (arg50$0040$$3) {
            return function (args$$164) {
              return arrayModule(com$$77, ctx$$93, r$$113, t$$145, i$$87, arg50$0040$$3, args$$164);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.ListModule", function (com$$78) {
  return function (ctx$$94) {
    return function (r$$114) {
      return function (t$$146) {
        return function (i$$88) {
          return function (arg50$0040$$4) {
            return function (args$$165) {
              return listModule(com$$78, ctx$$94, r$$114, t$$146, i$$88, arg50$0040$$4, args$$165);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.HashIdentity", function (com$$79) {
  return function (ctx$$95) {
    return function (r$$115) {
      return function (t$$147) {
        return function (i$$89) {
          return function (thisArg$$71) {
            return function (args$$166) {
              return fsharpModule(com$$79, ctx$$95, r$$115, t$$147, i$$89, thisArg$$71, args$$166);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.ComparisonIdentity", function (com$$80) {
  return function (ctx$$96) {
    return function (r$$116) {
      return function (t$$148) {
        return function (i$$90) {
          return function (thisArg$$72) {
            return function (args$$167) {
              return fsharpModule(com$$80, ctx$$96, r$$116, t$$148, i$$90, thisArg$$72, args$$167);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.CompilerServices.RuntimeHelpers", function (com$$81) {
  return function (ctx$$97) {
    return function (r$$117) {
      return function (t$$149) {
        return function (i$$91) {
          return function (thisArg$$73) {
            return function (args$$168) {
              return seqs(com$$81, ctx$$97, r$$117, t$$149, i$$91, thisArg$$73, args$$168);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.SeqModule", function (com$$82) {
  return function (ctx$$98) {
    return function (r$$118) {
      return function (t$$150) {
        return function (i$$92) {
          return function (thisArg$$74) {
            return function (args$$169) {
              return seqs(com$$82, ctx$$98, r$$118, t$$150, i$$92, thisArg$$74, args$$169);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.KeyValuePair`2", function (arg00$0040$$2) {
  return function (ctx$$99) {
    return function (r$$119) {
      return function (t$$151) {
        return function (i$$93) {
          return function (thisArg$$75) {
            return function (args$$170) {
              return keyValuePairs(arg00$0040$$2, ctx$$99, r$$119, t$$151, i$$93, thisArg$$75, args$$170);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.Dictionary`2", function (com$$83) {
  return function (ctx$$100) {
    return function (r$$120) {
      return function (t$$152) {
        return function (i$$94) {
          return function (thisArg$$76) {
            return function (args$$171) {
              return dictionaries(com$$83, ctx$$100, r$$120, t$$152, i$$94, thisArg$$76, args$$171);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.IDictionary`2", function (com$$84) {
  return function (ctx$$101) {
    return function (r$$121) {
      return function (t$$153) {
        return function (i$$95) {
          return function (thisArg$$77) {
            return function (args$$172) {
              return dictionaries(com$$84, ctx$$101, r$$121, t$$153, i$$95, thisArg$$77, args$$172);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.IEnumerable`1", function (arg00$0040$$3) {
  return function (ctx$$102) {
    return function (r$$122) {
      return function (t$$154) {
        return function (i$$96) {
          return function (thisArg$$78) {
            return function (arg60$0040) {
              return enumerables(arg00$0040$$3, ctx$$102, r$$122, t$$154, i$$96, thisArg$$78, arg60$0040);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.IEnumerable", function (arg00$0040$$4) {
  return function (ctx$$103) {
    return function (r$$123) {
      return function (t$$155) {
        return function (i$$97) {
          return function (thisArg$$79) {
            return function (arg60$0040$$1) {
              return enumerables(arg00$0040$$4, ctx$$103, r$$123, t$$155, i$$97, thisArg$$79, arg60$0040$$1);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.Dictionary`2.ValueCollection", function (arg00$0040$$5) {
  return function (ctx$$104) {
    return function (r$$124) {
      return function (t$$156) {
        return function (i$$98) {
          return function (thisArg$$80) {
            return function (arg60$0040$$2) {
              return enumerables(arg00$0040$$5, ctx$$104, r$$124, t$$156, i$$98, thisArg$$80, arg60$0040$$2);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.Dictionary`2.KeyCollection", function (arg00$0040$$6) {
  return function (ctx$$105) {
    return function (r$$125) {
      return function (t$$157) {
        return function (i$$99) {
          return function (thisArg$$81) {
            return function (arg60$0040$$3) {
              return enumerables(arg00$0040$$6, ctx$$105, r$$125, t$$157, i$$99, thisArg$$81, arg60$0040$$3);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.Dictionary`2.Enumerator", function (arg00$0040$$7) {
  return function (ctx$$106) {
    return function (r$$126) {
      return function (t$$158) {
        return function (i$$100) {
          return function (thisArg$$82) {
            return function (args$$173) {
              return enumerators(arg00$0040$$7, ctx$$106, r$$126, t$$158, i$$100, thisArg$$82, args$$173);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.Dictionary`2.ValueCollection.Enumerator", function (arg00$0040$$8) {
  return function (ctx$$107) {
    return function (r$$127) {
      return function (t$$159) {
        return function (i$$101) {
          return function (thisArg$$83) {
            return function (args$$174) {
              return enumerators(arg00$0040$$8, ctx$$107, r$$127, t$$159, i$$101, thisArg$$83, args$$174);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.Dictionary`2.KeyCollection.Enumerator", function (arg00$0040$$9) {
  return function (ctx$$108) {
    return function (r$$128) {
      return function (t$$160) {
        return function (i$$102) {
          return function (thisArg$$84) {
            return function (args$$175) {
              return enumerators(arg00$0040$$9, ctx$$108, r$$128, t$$160, i$$102, thisArg$$84, args$$175);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.List`1.Enumerator", function (arg00$0040$$10) {
  return function (ctx$$109) {
    return function (r$$129) {
      return function (t$$161) {
        return function (i$$103) {
          return function (thisArg$$85) {
            return function (args$$176) {
              return enumerators(arg00$0040$$10, ctx$$109, r$$129, t$$161, i$$103, thisArg$$85, args$$176);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.List`1", function (com$$85) {
  return function (ctx$$110) {
    return function (r$$130) {
      return function (t$$162) {
        return function (i$$104) {
          return function (thisArg$$86) {
            return function (args$$177) {
              return resizeArrays(com$$85, ctx$$110, r$$130, t$$162, i$$104, thisArg$$86, args$$177);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.IList`1", function (com$$86) {
  return function (ctx$$111) {
    return function (r$$131) {
      return function (t$$163) {
        return function (i$$105) {
          return function (thisArg$$87) {
            return function (args$$178) {
              return resizeArrays(com$$86, ctx$$111, r$$131, t$$163, i$$105, thisArg$$87, args$$178);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.ICollection`1", function (com$$87) {
  return function (ctx$$112) {
    return function (r$$132) {
      return function (t$$164) {
        return function (i$$106) {
          return function (thisArg$$88) {
            return function (args$$179) {
              return resizeArrays(com$$87, ctx$$112, r$$132, t$$164, i$$106, thisArg$$88, args$$179);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.HashSet`1", function (com$$88) {
  return function (ctx$$113) {
    return function (r$$133) {
      return function (t$$165) {
        return function (i$$107) {
          return function (thisArg$$89) {
            return function (args$$180) {
              return hashSets(com$$88, ctx$$113, r$$133, t$$165, i$$107, thisArg$$89, args$$180);
            };
          };
        };
      };
    };
  };
}], ["System.Collections.Generic.ISet`1", function (com$$89) {
  return function (ctx$$114) {
    return function (r$$134) {
      return function (t$$166) {
        return function (i$$108) {
          return function (thisArg$$90) {
            return function (args$$181) {
              return hashSets(com$$89, ctx$$114, r$$134, t$$166, i$$108, thisArg$$90, args$$181);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.FSharpOption`1", function (arg00$0040$$11) {
  return function (ctx$$115) {
    return function (r$$135) {
      return function (t$$167) {
        return function (i$$109) {
          return function (thisArg$$91) {
            return function (args$$182) {
              return options(arg00$0040$$11, ctx$$115, r$$135, t$$167, i$$109, thisArg$$91, args$$182);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.OptionModule", function (com$$90) {
  return function (ctx$$116) {
    return function (r$$136) {
      return function (t$$168) {
        return function (i$$110) {
          return function (arg50$0040$$5) {
            return function (args$$183) {
              return optionModule(com$$90, ctx$$116, r$$136, t$$168, i$$110, arg50$0040$$5, args$$183);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.ResultModule", function (arg00$0040$$12) {
  return function (ctx$$117) {
    return function (r$$137) {
      return function (t$$169) {
        return function (i$$111) {
          return function (arg50$0040$$6) {
            return function (args$$184) {
              return results(arg00$0040$$12, ctx$$117, r$$137, t$$169, i$$111, arg50$0040$$6, args$$184);
            };
          };
        };
      };
    };
  };
}], ["System.Numerics.BigInteger", function (com$$91) {
  return function (ctx$$118) {
    return function (r$$138) {
      return function (t$$170) {
        return function (i$$112) {
          return function (thisArg$$92) {
            return function (args$$185) {
              return bigints(com$$91, ctx$$118, r$$138, t$$170, i$$112, thisArg$$92, args$$185);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.NumericLiterals.NumericLiteralI", function (com$$92) {
  return function (ctx$$119) {
    return function (r$$139) {
      return function (t$$171) {
        return function (i$$113) {
          return function (thisArg$$93) {
            return function (args$$186) {
              return bigints(com$$92, ctx$$119, r$$139, t$$171, i$$113, thisArg$$93, args$$186);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Core.FSharpRef`1", function (arg00$0040$$13) {
  return function (ctx$$120) {
    return function (r$$140) {
      return function (t$$172) {
        return function (i$$114) {
          return function (thisArg$$94) {
            return function (args$$187) {
              return references(arg00$0040$$13, ctx$$120, r$$140, t$$172, i$$114, thisArg$$94, args$$187);
            };
          };
        };
      };
    };
  };
}], ["System.Object", function (com$$93) {
  return function (ctx$$121) {
    return function (r$$141) {
      return function (t$$173) {
        return function (i$$115) {
          return function (thisArg$$95) {
            return function (args$$188) {
              return objects(com$$93, ctx$$121, r$$141, t$$173, i$$115, thisArg$$95, args$$188);
            };
          };
        };
      };
    };
  };
}], ["System.ValueType", function (arg00$0040$$14) {
  return function (ctx$$122) {
    return function (r$$142) {
      return function (t$$174) {
        return function (i$$116) {
          return function (thisArg$$96) {
            return function (args$$189) {
              return valueTypes(arg00$0040$$14, ctx$$122, r$$142, t$$174, i$$116, thisArg$$96, args$$189);
            };
          };
        };
      };
    };
  };
}], ["System.Enum", function (arg00$0040$$15) {
  return function (ctx$$123) {
    return function (r$$143) {
      return function (arg30$0040) {
        return function (i$$117) {
          return function (thisArg$$97) {
            return function (args$$190) {
              return enums(arg00$0040$$15, ctx$$123, r$$143, arg30$0040, i$$117, thisArg$$97, args$$190);
            };
          };
        };
      };
    };
  };
}], ["System.BitConverter", function (arg00$0040$$16) {
  return function (ctx$$124) {
    return function (r$$144) {
      return function (arg30$0040$$1) {
        return function (i$$118) {
          return function (arg50$0040$$7) {
            return function (args$$191) {
              return bitConvert(arg00$0040$$16, ctx$$124, r$$144, arg30$0040$$1, i$$118, arg50$0040$$7, args$$191);
            };
          };
        };
      };
    };
  };
}], ["System.Int32", function (com$$94) {
  return function (ctx$$125) {
    return function (r$$145) {
      return function (t$$175) {
        return function (i$$119) {
          return function (thisArg$$98) {
            return function (args$$192) {
              return parse(new ParseTarget(0, "Parse2Int"), com$$94, ctx$$125, r$$145, t$$175, i$$119, thisArg$$98, args$$192);
            };
          };
        };
      };
    };
  };
}], ["System.Int64", function (com$$95) {
  return function (ctx$$126) {
    return function (r$$146) {
      return function (t$$176) {
        return function (i$$120) {
          return function (thisArg$$99) {
            return function (args$$193) {
              return parse(new ParseTarget(1, "Parse2Int64"), com$$95, ctx$$126, r$$146, t$$176, i$$120, thisArg$$99, args$$193);
            };
          };
        };
      };
    };
  };
}], ["System.Single", function (com$$96) {
  return function (ctx$$127) {
    return function (r$$147) {
      return function (t$$177) {
        return function (i$$121) {
          return function (thisArg$$100) {
            return function (args$$194) {
              return parse(new ParseTarget(2, "Parse2Float"), com$$96, ctx$$127, r$$147, t$$177, i$$121, thisArg$$100, args$$194);
            };
          };
        };
      };
    };
  };
}], ["System.Double", function (com$$97) {
  return function (ctx$$128) {
    return function (r$$148) {
      return function (t$$178) {
        return function (i$$122) {
          return function (thisArg$$101) {
            return function (args$$195) {
              return parse(new ParseTarget(2, "Parse2Float"), com$$97, ctx$$128, r$$148, t$$178, i$$122, thisArg$$101, args$$195);
            };
          };
        };
      };
    };
  };
}], ["System.Decimal", function (com$$98) {
  return function (ctx$$129) {
    return function (r$$149) {
      return function (t$$179) {
        return function (i$$123) {
          return function (thisArg$$102) {
            return function (args$$196) {
              return decimals(com$$98, ctx$$129, r$$149, t$$179, i$$123, thisArg$$102, args$$196);
            };
          };
        };
      };
    };
  };
}], ["System.Convert", function (com$$99) {
  return function (ctx$$130) {
    return function (r$$150) {
      return function (t$$180) {
        return function (i$$124) {
          return function (arg50$0040$$8) {
            return function (args$$197) {
              return convert(com$$99, ctx$$130, r$$150, t$$180, i$$124, arg50$0040$$8, args$$197);
            };
          };
        };
      };
    };
  };
}], ["System.Console", function (com$$100) {
  return function (ctx$$131) {
    return function (r$$151) {
      return function (t$$181) {
        return function (i$$125) {
          return function (thisArg$$103) {
            return function (args$$198) {
              return console$(com$$100, ctx$$131, r$$151, t$$181, i$$125, thisArg$$103, args$$198);
            };
          };
        };
      };
    };
  };
}], ["System.Diagnostics.Debug", function (com$$101) {
  return function (ctx$$132) {
    return function (r$$152) {
      return function (t$$182) {
        return function (i$$126) {
          return function (thisArg$$104) {
            return function (args$$199) {
              return debug(com$$101, ctx$$132, r$$152, t$$182, i$$126, thisArg$$104, args$$199);
            };
          };
        };
      };
    };
  };
}], ["System.Diagnostics.Debugger", function (com$$102) {
  return function (ctx$$133) {
    return function (r$$153) {
      return function (t$$183) {
        return function (i$$127) {
          return function (thisArg$$105) {
            return function (args$$200) {
              return debug(com$$102, ctx$$133, r$$153, t$$183, i$$127, thisArg$$105, args$$200);
            };
          };
        };
      };
    };
  };
}], ["System.DateTime", function (arg00$0040$$17) {
  return function (ctx$$134) {
    return function (r$$154) {
      return function (t$$184) {
        return function (i$$128) {
          return function (thisArg$$106) {
            return function (args$$201) {
              return dates(arg00$0040$$17, ctx$$134, r$$154, t$$184, i$$128, thisArg$$106, args$$201);
            };
          };
        };
      };
    };
  };
}], ["System.DateTimeOffset", function (arg00$0040$$18) {
  return function (ctx$$135) {
    return function (r$$155) {
      return function (t$$185) {
        return function (i$$129) {
          return function (thisArg$$107) {
            return function (args$$202) {
              return dates(arg00$0040$$18, ctx$$135, r$$155, t$$185, i$$129, thisArg$$107, args$$202);
            };
          };
        };
      };
    };
  };
}], ["System.TimeSpan", function (arg00$0040$$19) {
  return function (ctx$$136) {
    return function (r$$156) {
      return function (t$$186) {
        return function (i$$130) {
          return function (thisArg$$108) {
            return function (args$$203) {
              return timeSpans(arg00$0040$$19, ctx$$136, r$$156, t$$186, i$$130, thisArg$$108, args$$203);
            };
          };
        };
      };
    };
  };
}], ["System.Timers.Timer", function (arg00$0040$$20) {
  return function (ctx$$137) {
    return function (r$$157) {
      return function (t$$187) {
        return function (i$$131) {
          return function (thisArg$$109) {
            return function (args$$204) {
              return timers(arg00$0040$$20, ctx$$137, r$$157, t$$187, i$$131, thisArg$$109, args$$204);
            };
          };
        };
      };
    };
  };
}], ["System.Environment", function (arg00$0040$$21) {
  return function (ctx$$138) {
    return function (arg20$0040) {
      return function (arg30$0040$$2) {
        return function (i$$132) {
          return function (arg50$0040$$9) {
            return function (arg60$0040$$4) {
              return systemEnv(arg00$0040$$21, ctx$$138, arg20$0040, arg30$0040$$2, i$$132, arg50$0040$$9, arg60$0040$$4);
            };
          };
        };
      };
    };
  };
}], ["System.Globalization.CultureInfo", function (arg00$0040$$22) {
  return function (ctx$$139) {
    return function (arg20$0040$$1) {
      return function (t$$188) {
        return function (i$$133) {
          return function (arg50$0040$$10) {
            return function (arg60$0040$$5) {
              return globalization(arg00$0040$$22, ctx$$139, arg20$0040$$1, t$$188, i$$133, arg50$0040$$10, arg60$0040$$5);
            };
          };
        };
      };
    };
  };
}], ["System.Random", function (arg00$0040$$23) {
  return function (ctx$$140) {
    return function (r$$158) {
      return function (t$$189) {
        return function (i$$134) {
          return function (arg50$0040$$11) {
            return function (args$$205) {
              return random(arg00$0040$$23, ctx$$140, r$$158, t$$189, i$$134, arg50$0040$$11, args$$205);
            };
          };
        };
      };
    };
  };
}], ["System.Threading.CancellationToken", function (arg00$0040$$24) {
  return function (ctx$$141) {
    return function (r$$159) {
      return function (t$$190) {
        return function (i$$135) {
          return function (thisArg$$110) {
            return function (args$$206) {
              return cancels(arg00$0040$$24, ctx$$141, r$$159, t$$190, i$$135, thisArg$$110, args$$206);
            };
          };
        };
      };
    };
  };
}], ["System.Threading.CancellationTokenSource", function (arg00$0040$$25) {
  return function (ctx$$142) {
    return function (r$$160) {
      return function (t$$191) {
        return function (i$$136) {
          return function (thisArg$$111) {
            return function (args$$207) {
              return cancels(arg00$0040$$25, ctx$$142, r$$160, t$$191, i$$136, thisArg$$111, args$$207);
            };
          };
        };
      };
    };
  };
}], ["System.Threading.Monitor", function (arg00$0040$$26) {
  return function (ctx$$143) {
    return function (r$$161) {
      return function (t$$192) {
        return function (i$$137) {
          return function (thisArg$$112) {
            return function (args$$208) {
              return monitor(arg00$0040$$26, ctx$$143, r$$161, t$$192, i$$137, thisArg$$112, args$$208);
            };
          };
        };
      };
    };
  };
}], ["System.Activator", function (arg00$0040$$27) {
  return function (ctx$$144) {
    return function (r$$162) {
      return function (t$$193) {
        return function (i$$138) {
          return function (thisArg$$113) {
            return function (args$$209) {
              return activator(arg00$0040$$27, ctx$$144, r$$162, t$$193, i$$138, thisArg$$113, args$$209);
            };
          };
        };
      };
    };
  };
}], ["System.Text.Encoding", function (arg00$0040$$28) {
  return function (ctx$$145) {
    return function (r$$163) {
      return function (t$$194) {
        return function (i$$139) {
          return function (thisArg$$114) {
            return function (args$$210) {
              return encoding(arg00$0040$$28, ctx$$145, r$$163, t$$194, i$$139, thisArg$$114, args$$210);
            };
          };
        };
      };
    };
  };
}], ["System.Text.UnicodeEncoding", function (arg00$0040$$29) {
  return function (ctx$$146) {
    return function (r$$164) {
      return function (t$$195) {
        return function (i$$140) {
          return function (thisArg$$115) {
            return function (args$$211) {
              return encoding(arg00$0040$$29, ctx$$146, r$$164, t$$195, i$$140, thisArg$$115, args$$211);
            };
          };
        };
      };
    };
  };
}], ["System.Text.UTF8Encoding", function (arg00$0040$$30) {
  return function (ctx$$147) {
    return function (r$$165) {
      return function (t$$196) {
        return function (i$$141) {
          return function (thisArg$$116) {
            return function (args$$212) {
              return encoding(arg00$0040$$30, ctx$$147, r$$165, t$$196, i$$141, thisArg$$116, args$$212);
            };
          };
        };
      };
    };
  };
}], ["System.Text.RegularExpressions.Capture", function (com$$103) {
  return function (ctx$$148) {
    return function (r$$166) {
      return function (t$$197) {
        return function (i$$142) {
          return function (thisArg$$117) {
            return function (args$$213) {
              return regex(com$$103, ctx$$148, r$$166, t$$197, i$$142, thisArg$$117, args$$213);
            };
          };
        };
      };
    };
  };
}], ["System.Text.RegularExpressions.Match", function (com$$104) {
  return function (ctx$$149) {
    return function (r$$167) {
      return function (t$$198) {
        return function (i$$143) {
          return function (thisArg$$118) {
            return function (args$$214) {
              return regex(com$$104, ctx$$149, r$$167, t$$198, i$$143, thisArg$$118, args$$214);
            };
          };
        };
      };
    };
  };
}], ["System.Text.RegularExpressions.Group", function (com$$105) {
  return function (ctx$$150) {
    return function (r$$168) {
      return function (t$$199) {
        return function (i$$144) {
          return function (thisArg$$119) {
            return function (args$$215) {
              return regex(com$$105, ctx$$150, r$$168, t$$199, i$$144, thisArg$$119, args$$215);
            };
          };
        };
      };
    };
  };
}], ["System.Text.RegularExpressions.MatchCollection", function (com$$106) {
  return function (ctx$$151) {
    return function (r$$169) {
      return function (t$$200) {
        return function (i$$145) {
          return function (thisArg$$120) {
            return function (args$$216) {
              return regex(com$$106, ctx$$151, r$$169, t$$200, i$$145, thisArg$$120, args$$216);
            };
          };
        };
      };
    };
  };
}], ["System.Text.RegularExpressions.GroupCollection", function (com$$107) {
  return function (ctx$$152) {
    return function (r$$170) {
      return function (t$$201) {
        return function (i$$146) {
          return function (thisArg$$121) {
            return function (args$$217) {
              return regex(com$$107, ctx$$152, r$$170, t$$201, i$$146, thisArg$$121, args$$217);
            };
          };
        };
      };
    };
  };
}], ["System.Text.RegularExpressions.Regex", function (com$$108) {
  return function (ctx$$153) {
    return function (r$$171) {
      return function (t$$202) {
        return function (i$$147) {
          return function (thisArg$$122) {
            return function (args$$218) {
              return regex(com$$108, ctx$$153, r$$171, t$$202, i$$147, thisArg$$122, args$$218);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.FSharpSet`1", function (com$$109) {
  return function (ctx$$154) {
    return function (r$$172) {
      return function (t$$203) {
        return function (i$$148) {
          return function (thisArg$$123) {
            return function (args$$219) {
              return sets(com$$109, ctx$$154, r$$172, t$$203, i$$148, thisArg$$123, args$$219);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.SetModule", function (com$$110) {
  return function (ctx$$155) {
    return function (r$$173) {
      return function (t$$204) {
        return function (i$$149) {
          return function (arg50$0040$$12) {
            return function (args$$220) {
              return setModule(com$$110, ctx$$155, r$$173, t$$204, i$$149, arg50$0040$$12, args$$220);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.FSharpMap`2", function (com$$111) {
  return function (ctx$$156) {
    return function (r$$174) {
      return function (t$$205) {
        return function (i$$150) {
          return function (thisArg$$124) {
            return function (args$$221) {
              return maps(com$$111, ctx$$156, r$$174, t$$205, i$$150, thisArg$$124, args$$221);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Collections.MapModule", function (com$$112) {
  return function (ctx$$157) {
    return function (r$$175) {
      return function (t$$206) {
        return function (i$$151) {
          return function (arg50$0040$$13) {
            return function (args$$222) {
              return mapModule(com$$112, ctx$$157, r$$175, t$$206, i$$151, arg50$0040$$13, args$$222);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.FSharpMailboxProcessor`1", function (arg00$0040$$31) {
  return function (ctx$$158) {
    return function (r$$176) {
      return function (t$$207) {
        return function (i$$152) {
          return function (thisArg$$125) {
            return function (args$$223) {
              return mailbox(arg00$0040$$31, ctx$$158, r$$176, t$$207, i$$152, thisArg$$125, args$$223);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.FSharpAsyncReplyChannel`1", function (arg00$0040$$32) {
  return function (ctx$$159) {
    return function (r$$177) {
      return function (t$$208) {
        return function (i$$153) {
          return function (thisArg$$126) {
            return function (args$$224) {
              return mailbox(arg00$0040$$32, ctx$$159, r$$177, t$$208, i$$153, thisArg$$126, args$$224);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.FSharpAsyncBuilder", function (com$$113) {
  return function (ctx$$160) {
    return function (r$$178) {
      return function (t$$209) {
        return function (i$$154) {
          return function (thisArg$$127) {
            return function (args$$225) {
              return asyncBuilder(com$$113, ctx$$160, r$$178, t$$209, i$$154, thisArg$$127, args$$225);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.AsyncActivation`1", function (com$$114) {
  return function (ctx$$161) {
    return function (r$$179) {
      return function (t$$210) {
        return function (i$$155) {
          return function (thisArg$$128) {
            return function (args$$226) {
              return asyncBuilder(com$$114, ctx$$161, r$$179, t$$210, i$$155, thisArg$$128, args$$226);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.FSharpAsync", function (com$$115) {
  return function (ctx$$162) {
    return function (r$$180) {
      return function (t$$211) {
        return function (i$$156) {
          return function (arg50$0040$$14) {
            return function (args$$227) {
              return asyncs(com$$115, ctx$$162, r$$180, t$$211, i$$156, arg50$0040$$14, args$$227);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.AsyncPrimitives", function (com$$116) {
  return function (ctx$$163) {
    return function (r$$181) {
      return function (t$$212) {
        return function (i$$157) {
          return function (arg50$0040$$15) {
            return function (args$$228) {
              return asyncs(com$$116, ctx$$163, r$$181, t$$212, i$$157, arg50$0040$$15, args$$228);
            };
          };
        };
      };
    };
  };
}], ["System.Guid", function (arg00$0040$$33) {
  return function (ctx$$164) {
    return function (arg20$0040$$2) {
      return function (t$$213) {
        return function (i$$158) {
          return function (thisArg$$129) {
            return function (args$$229) {
              return guids(arg00$0040$$33, ctx$$164, arg20$0040$$2, t$$213, i$$158, thisArg$$129, args$$229);
            };
          };
        };
      };
    };
  };
}], ["System.Uri", function (arg00$0040$$34) {
  return function (ctx$$165) {
    return function (r$$182) {
      return function (t$$214) {
        return function (i$$159) {
          return function (thisArg$$130) {
            return function (args$$230) {
              return uris(arg00$0040$$34, ctx$$165, r$$182, t$$214, i$$159, thisArg$$130, args$$230);
            };
          };
        };
      };
    };
  };
}], ["System.Lazy`1", function (arg00$0040$$35) {
  return function (ctx$$166) {
    return function (r$$183) {
      return function (t$$215) {
        return function (i$$160) {
          return function (thisArg$$131) {
            return function (args$$231) {
              return laziness(arg00$0040$$35, ctx$$166, r$$183, t$$215, i$$160, thisArg$$131, args$$231);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.Lazy", function (arg00$0040$$36) {
  return function (ctx$$167) {
    return function (r$$184) {
      return function (t$$216) {
        return function (i$$161) {
          return function (thisArg$$132) {
            return function (args$$232) {
              return laziness(arg00$0040$$36, ctx$$167, r$$184, t$$216, i$$161, thisArg$$132, args$$232);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.LazyExtensions", function (arg00$0040$$37) {
  return function (ctx$$168) {
    return function (r$$185) {
      return function (t$$217) {
        return function (i$$162) {
          return function (thisArg$$133) {
            return function (args$$233) {
              return laziness(arg00$0040$$37, ctx$$168, r$$185, t$$217, i$$162, thisArg$$133, args$$233);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.CommonExtensions", function (arg00$0040$$38) {
  return function (ctx$$169) {
    return function (arg20$0040$$3) {
      return function (t$$218) {
        return function (i$$163) {
          return function (thisArg$$134) {
            return function (args$$234) {
              return controlExtensions(arg00$0040$$38, ctx$$169, arg20$0040$$3, t$$218, i$$163, thisArg$$134, args$$234);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.FSharpEvent`1", function (arg00$0040$$39) {
  return function (ctx$$170) {
    return function (r$$186) {
      return function (t$$219) {
        return function (i$$164) {
          return function (thisArg$$135) {
            return function (args$$235) {
              return events(arg00$0040$$39, ctx$$170, r$$186, t$$219, i$$164, thisArg$$135, args$$235);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.EventModule", function (arg00$0040$$40) {
  return function (ctx$$171) {
    return function (r$$187) {
      return function (t$$220) {
        return function (i$$165) {
          return function (thisArg$$136) {
            return function (args$$236) {
              return events(arg00$0040$$40, ctx$$171, r$$187, t$$220, i$$165, thisArg$$136, args$$236);
            };
          };
        };
      };
    };
  };
}], ["Microsoft.FSharp.Control.ObservableModule", function (arg00$0040$$41) {
  return function (ctx$$172) {
    return function (r$$188) {
      return function (t$$221) {
        return function (i$$166) {
          return function (arg50$0040$$16) {
            return function (args$$237) {
              return observable(arg00$0040$$41, ctx$$172, r$$188, t$$221, i$$166, arg50$0040$$16, args$$237);
            };
          };
        };
      };
    };
  };
}], ["System.Type", function (com$$117) {
  return function (ctx$$173) {
    return function (r$$189) {
      return function (t$$222) {
        return function (i$$167) {
          return function (thisArg$$137) {
            return function (_args$$1) {
              return types(com$$117, ctx$$173, r$$189, t$$222, i$$167, thisArg$$137, _args$$1);
            };
          };
        };
      };
    };
  };
}], ["System.Reflection.TypeInfo", function (com$$118) {
  return function (ctx$$174) {
    return function (r$$190) {
      return function (t$$223) {
        return function (i$$168) {
          return function (thisArg$$138) {
            return function (_args$$2) {
              return types(com$$118, ctx$$174, r$$190, t$$223, i$$168, thisArg$$138, _args$$2);
            };
          };
        };
      };
    };
  };
}]]);

function tryCall(com$$119, ctx$$175, r$$191, t$$224, info$$6, thisArg$$139, args$$238) {
  const activePatternResult68139 = (0, _Prelude.Patterns$$$$007CDicContains$007C_$007C)(replacedModules, info$$6.DeclaringEntityFullName);

  if (activePatternResult68139 != null) {
    const replacement$$1 = activePatternResult68139;
    return replacement$$1(com$$119)(ctx$$175)(r$$191)(t$$224)(info$$6)(thisArg$$139)(args$$238);
  } else {
    var $target$$179;

    if (info$$6.DeclaringEntityFullName === "Microsoft.FSharp.Core.LanguagePrimitives.ErrorStrings") {
      $target$$179 = 0;
    } else if (info$$6.DeclaringEntityFullName === "Microsoft.FSharp.Core.PrintfModule") {
      $target$$179 = 1;
    } else if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Microsoft.FSharp.Core.PrintfFormat", info$$6.DeclaringEntityFullName) != null) {
      $target$$179 = 1;
    } else {
      $target$$179 = 2;
    }

    switch ($target$$179) {
      case 0:
        {
          return errorStrings(info$$6.CompiledName);
        }

      case 1:
        {
          return fsFormat(com$$119, ctx$$175, r$$191, t$$224, info$$6, thisArg$$139, args$$238);
        }

      case 2:
        {
          if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Fable.Core.", info$$6.DeclaringEntityFullName) != null) {
            return fableCoreLib(com$$119, ctx$$175, r$$191, t$$224, info$$6, thisArg$$139, args$$238);
          } else {
            if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Fable.Repl.Lib.", info$$6.DeclaringEntityFullName) != null) {
              return fableReplLib(com$$119, ctx$$175, r$$191, t$$224, info$$6, thisArg$$139, args$$238);
            } else {
              if ((0, _Prelude.Naming$$$$007CEndsWith$007C_$007C)("Exception", info$$6.DeclaringEntityFullName) != null) {
                return exceptions(com$$119, ctx$$175, r$$191, t$$224, info$$6, thisArg$$139, args$$238);
              } else {
                var $target$$180;

                if (info$$6.DeclaringEntityFullName === "System.Timers.ElapsedEventArgs") {
                  $target$$180 = 0;
                } else if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("System.Action", info$$6.DeclaringEntityFullName) != null) {
                  $target$$180 = 1;
                } else if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("System.Func", info$$6.DeclaringEntityFullName) != null) {
                  $target$$180 = 1;
                } else if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Microsoft.FSharp.Core.FSharpFunc", info$$6.DeclaringEntityFullName) != null) {
                  $target$$180 = 1;
                } else if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Microsoft.FSharp.Core.OptimizedClosures.FSharpFunc", info$$6.DeclaringEntityFullName) != null) {
                  $target$$180 = 1;
                } else {
                  $target$$180 = 2;
                }

                switch ($target$$180) {
                  case 0:
                    {
                      return thisArg$$139;
                    }

                  case 1:
                    {
                      return funcs(com$$119, ctx$$175, r$$191, t$$224, info$$6, thisArg$$139, args$$238);
                    }

                  case 2:
                    {
                      var $target$$181;

                      if (info$$6.DeclaringEntityFullName === "Microsoft.FSharp.Reflection.FSharpType") {
                        $target$$181 = 0;
                      } else if (info$$6.DeclaringEntityFullName === "Microsoft.FSharp.Reflection.FSharpValue") {
                        $target$$181 = 1;
                      } else if (info$$6.DeclaringEntityFullName === "Microsoft.FSharp.Reflection.FSharpReflectionExtensions") {
                        $target$$181 = 2;
                      } else if (info$$6.DeclaringEntityFullName === "Microsoft.FSharp.Reflection.UnionCaseInfo") {
                        $target$$181 = 3;
                      } else if (info$$6.DeclaringEntityFullName === "System.Reflection.PropertyInfo") {
                        $target$$181 = 3;
                      } else if (info$$6.DeclaringEntityFullName === "System.Reflection.MemberInfo") {
                        $target$$181 = 3;
                      } else {
                        $target$$181 = 4;
                      }

                      switch ($target$$181) {
                        case 0:
                          {
                            return fsharpType(info$$6.CompiledName, r$$191, t$$224, info$$6, args$$238);
                          }

                        case 1:
                          {
                            return fsharpValue(info$$6.CompiledName, r$$191, t$$224, info$$6, args$$238);
                          }

                        case 2:
                          {
                            const isFSharpType = info$$6.CompiledName.indexOf("FSharpType") === 0;
                            const methName$$15 = (0, _Prelude.Naming$$$extensionMethodName)(info$$6.CompiledName);

                            if (isFSharpType) {
                              return fsharpType(methName$$15, r$$191, t$$224, info$$6, args$$238);
                            } else {
                              return fsharpValue(methName$$15, r$$191, t$$224, info$$6, args$$238);
                            }
                          }

                        case 3:
                          {
                            const matchValue$$104 = [thisArg$$139, info$$6.CompiledName];
                            var $target$$182, c$$27, c$$28, c$$29, c$$30;

                            if (matchValue$$104[0] != null) {
                              if (matchValue$$104[1] === "get_Tag") {
                                $target$$182 = 0;
                                c$$27 = matchValue$$104[0];
                              } else if (matchValue$$104[1] === "get_PropertyType") {
                                $target$$182 = 1;
                                c$$28 = matchValue$$104[0];
                              } else if (matchValue$$104[1] === "GetFields") {
                                $target$$182 = 2;
                                c$$29 = matchValue$$104[0];
                              } else if (matchValue$$104[1] === "get_Name") {
                                $target$$182 = 3;
                                c$$30 = matchValue$$104[0];
                              } else {
                                $target$$182 = 4;
                              }
                            } else {
                              $target$$182 = 4;
                            }

                            switch ($target$$182) {
                              case 0:
                                {
                                  return (0, _Transforms.AST$$$getExpr)(r$$191, t$$224, c$$27, (0, _Transforms.AST$$$makeStrConst)("tag"));
                                }

                              case 1:
                                {
                                  return (0, _Transforms.AST$$$getExpr)(r$$191, t$$224, c$$28, (0, _Transforms.AST$$$makeIntConst)(1));
                                }

                              case 2:
                                {
                                  return Helper$$$CoreCall$$39739A92("Reflection", "getUnionCaseFields", t$$224, (0, _Types.L)(c$$29, (0, _Types.L)()), null, null, null, null, r$$191);
                                }

                              case 3:
                                {
                                  var $target$$183, exprType$$1, c$$31;

                                  if (c$$30.tag === 0) {
                                    if (c$$30.fields[0].tag === 0) {
                                      $target$$183 = 0;
                                      exprType$$1 = c$$30.fields[0].fields[0];
                                    } else {
                                      $target$$183 = 1;
                                      c$$31 = c$$30;
                                    }
                                  } else {
                                    $target$$183 = 1;
                                    c$$31 = c$$30;
                                  }

                                  switch ($target$$183) {
                                    case 0:
                                      {
                                        const fullname$$1 = (0, _Transforms.AST$$$getTypeFullName)(false, exprType$$1);
                                        const matchValue$$105 = fullname$$1.lastIndexOf(".") | 0;

                                        if (matchValue$$105 === -1) {
                                          return new _AST.Expr(0, "Value", new _AST.ValueKind(5, "StringConstant", fullname$$1));
                                        } else {
                                          const i$$169 = matchValue$$105 | 0;
                                          return new _AST.Expr(0, "Value", new _AST.ValueKind(5, "StringConstant", fullname$$1.substr(i$$169 + 1)));
                                        }
                                      }

                                    case 1:
                                      {
                                        return Helper$$$CoreCall$$39739A92("Reflection", "name", t$$224, (0, _Types.L)(c$$31, (0, _Types.L)()), null, null, null, null, r$$191);
                                      }
                                  }
                                }

                              case 4:
                                {
                                  return null;
                                }
                            }
                          }

                        case 4:
                          {
                            return null;
                          }
                      }
                    }
                }
              }
            }
          }
        }
    }
  }
}

function tryEntityRef(ent$$19) {
  const matchValue$$106 = (0, _Symbols.FSharpEntity$$get_FullName)(ent$$19);

  if (matchValue$$106 === "Microsoft.FSharp.Core.FSharpRef`1") {
    return (0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "FSharpRef", "Types");
  } else if (matchValue$$106 === "Microsoft.FSharp.Core.MatchFailureException") {
    return (0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "MatchFailureException", "Types");
  } else if (matchValue$$106 === "Microsoft.FSharp.Core.FSharpResult`2") {
    return (0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "Result", "Option");
  } else if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Microsoft.FSharp.Core.FSharpChoice", matchValue$$106) != null) {
    return (0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "Choice", "Option");
  } else {
    if ((0, _Prelude.Naming$$$$007CStartsWith$007C_$007C)("Fable.Repl.Lib.", matchValue$$106) != null) {
      return getFableReplLibImport(true, (0, _Symbols.FSharpEntity$$get_FullName)(ent$$19), "", "");
    } else {
      return null;
    }
  }
}

function tryBaseConstructor(com$$120, ent$$20, memb$$8, genArgs$$10, args$$239) {
  const matchValue$$107 = (0, _Symbols.FSharpEntity$$get_FullName)(ent$$20);

  switch (matchValue$$107) {
    case "System.Exception":
      {
        return [(0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "Exception", "Types"), args$$239];
      }

    case "System.Attribute":
      {
        return [(0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "Attribute", "Types"), args$$239];
      }

    case "System.Collections.Generic.Dictionary`2":
      {
        let args$$240;
        const matchValue$$108 = [(0, _FSharp2Fable.TypeHelpers$$$getArgTypes)(com$$120, memb$$8), args$$239];
        var $target$$184, arg$$56, arg$$57, eqComp$$4, eqComp$$5;

        if (matchValue$$108[0].tail != null) {
          if (matchValue$$108[0].head.tag === 7) {
            if (matchValue$$108[0].tail.tail != null) {
              if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$108[0].tail.head).tag === 1) {
                if (matchValue$$108[0].tail.tail.tail == null) {
                  if ($007CIDictionary$007CIEqualityComparer$007COther$007C(matchValue$$108[0].head).tag === 0) {
                    if (matchValue$$108[1].tail != null) {
                      if (matchValue$$108[1].tail.tail != null) {
                        if (matchValue$$108[1].tail.tail.tail == null) {
                          $target$$184 = 2;
                          arg$$57 = matchValue$$108[1].head;
                          eqComp$$4 = matchValue$$108[1].tail.head;
                        } else {
                          $target$$184 = 4;
                        }
                      } else {
                        $target$$184 = 4;
                      }
                    } else {
                      $target$$184 = 4;
                    }
                  } else if (matchValue$$108[1].tail != null) {
                    if (matchValue$$108[1].tail.tail != null) {
                      if (matchValue$$108[1].tail.tail.tail == null) {
                        $target$$184 = 3;
                        eqComp$$5 = matchValue$$108[1].tail.head;
                      } else {
                        $target$$184 = 4;
                      }
                    } else {
                      $target$$184 = 4;
                    }
                  } else {
                    $target$$184 = 4;
                  }
                } else {
                  $target$$184 = 4;
                }
              } else {
                $target$$184 = 4;
              }
            } else {
              $target$$184 = 0;
            }
          } else if ($007CIDictionary$007CIEqualityComparer$007COther$007C(matchValue$$108[0].head).tag === 0) {
            if (matchValue$$108[0].tail.tail != null) {
              if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$108[0].tail.head).tag === 1) {
                if (matchValue$$108[0].tail.tail.tail == null) {
                  if (matchValue$$108[1].tail != null) {
                    if (matchValue$$108[1].tail.tail != null) {
                      if (matchValue$$108[1].tail.tail.tail == null) {
                        $target$$184 = 2;
                        arg$$57 = matchValue$$108[1].head;
                        eqComp$$4 = matchValue$$108[1].tail.head;
                      } else {
                        $target$$184 = 4;
                      }
                    } else {
                      $target$$184 = 4;
                    }
                  } else {
                    $target$$184 = 4;
                  }
                } else {
                  $target$$184 = 4;
                }
              } else {
                $target$$184 = 4;
              }
            } else if (matchValue$$108[1].tail != null) {
              if (matchValue$$108[1].tail.tail == null) {
                $target$$184 = 1;
                arg$$56 = matchValue$$108[1].head;
              } else {
                $target$$184 = 4;
              }
            } else {
              $target$$184 = 4;
            }
          } else if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$108[0].head).tag === 1) {
            if (matchValue$$108[0].tail.tail == null) {
              if (matchValue$$108[1].tail != null) {
                if (matchValue$$108[1].tail.tail == null) {
                  $target$$184 = 3;
                  eqComp$$5 = matchValue$$108[1].head;
                } else {
                  $target$$184 = 4;
                }
              } else {
                $target$$184 = 4;
              }
            } else {
              $target$$184 = 4;
            }
          } else {
            $target$$184 = 4;
          }
        } else {
          $target$$184 = 0;
        }

        switch ($target$$184) {
          case 0:
            {
              args$$240 = (0, _Types.L)((0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()), (0, _Types.L)(makeComparer(com$$120, (0, _Seq.head)(genArgs$$10)), (0, _Types.L)()));
              break;
            }

          case 1:
            {
              args$$240 = (0, _Types.L)(arg$$56, (0, _Types.L)(makeComparer(com$$120, (0, _Seq.head)(genArgs$$10)), (0, _Types.L)()));
              break;
            }

          case 2:
            {
              args$$240 = (0, _Types.L)(arg$$57, (0, _Types.L)(Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp$$4, (0, _Types.L)())), (0, _Types.L)()));
              break;
            }

          case 3:
            {
              args$$240 = (0, _Types.L)((0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()), (0, _Types.L)(Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp$$5, (0, _Types.L)())), (0, _Types.L)()));
              break;
            }

          case 4:
            {
              throw new Error("Unexpected dictionary constructor");
              break;
            }
        }

        return [(0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "Dictionary", "DictTypes"), args$$240];
      }

    case "System.Collections.Generic.HashSet`1":
      {
        let args$$241;
        const matchValue$$109 = [(0, _FSharp2Fable.TypeHelpers$$$getArgTypes)(com$$120, memb$$8), args$$239];
        var $target$$185, arg$$58, arg$$59, eqComp$$6, eqComp$$7;

        if (matchValue$$109[0].tail != null) {
          const activePatternResult68162 = $007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$109[0].head);

          if (activePatternResult68162.tag === 0) {
            if (matchValue$$109[0].tail.tail != null) {
              if ($007CIEnumerable$007CIEqualityComparer$007COther$007C(matchValue$$109[0].tail.head).tag === 1) {
                if (matchValue$$109[0].tail.tail.tail == null) {
                  if (matchValue$$109[1].tail != null) {
                    if (matchValue$$109[1].tail.tail != null) {
                      if (matchValue$$109[1].tail.tail.tail == null) {
                        $target$$185 = 2;
                        arg$$59 = matchValue$$109[1].head;
                        eqComp$$6 = matchValue$$109[1].tail.head;
                      } else {
                        $target$$185 = 4;
                      }
                    } else {
                      $target$$185 = 4;
                    }
                  } else {
                    $target$$185 = 4;
                  }
                } else {
                  $target$$185 = 4;
                }
              } else {
                $target$$185 = 4;
              }
            } else if (matchValue$$109[1].tail != null) {
              if (matchValue$$109[1].tail.tail == null) {
                $target$$185 = 1;
                arg$$58 = matchValue$$109[1].head;
              } else {
                $target$$185 = 4;
              }
            } else {
              $target$$185 = 4;
            }
          } else if (activePatternResult68162.tag === 1) {
            if (matchValue$$109[0].tail.tail == null) {
              if (matchValue$$109[1].tail != null) {
                if (matchValue$$109[1].tail.tail == null) {
                  $target$$185 = 3;
                  eqComp$$7 = matchValue$$109[1].head;
                } else {
                  $target$$185 = 4;
                }
              } else {
                $target$$185 = 4;
              }
            } else {
              $target$$185 = 4;
            }
          } else {
            $target$$185 = 4;
          }
        } else {
          $target$$185 = 0;
        }

        switch ($target$$185) {
          case 0:
            {
              args$$241 = (0, _Types.L)((0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()), (0, _Types.L)(makeComparer(com$$120, (0, _Seq.head)(genArgs$$10)), (0, _Types.L)()));
              break;
            }

          case 1:
            {
              args$$241 = (0, _Types.L)(arg$$58, (0, _Types.L)(makeComparer(com$$120, (0, _Seq.head)(genArgs$$10)), (0, _Types.L)()));
              break;
            }

          case 2:
            {
              args$$241 = (0, _Types.L)(arg$$59, (0, _Types.L)(Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp$$6, (0, _Types.L)())), (0, _Types.L)()));
              break;
            }

          case 3:
            {
              args$$241 = (0, _Types.L)((0, _Transforms.AST$$$makeArray)(new _AST.Type(1, "Any"), (0, _Types.L)()), (0, _Types.L)(Helper$$$CoreCall$$39739A92("Util", "comparerFromEqualityComparer", new _AST.Type(1, "Any"), (0, _Types.L)(eqComp$$7, (0, _Types.L)())), (0, _Types.L)()));
              break;
            }

          case 4:
            {
              throw new Error("Unexpected hashset constructor");
              break;
            }
        }

        return [(0, _Transforms.AST$$$makeCoreRef)(new _AST.Type(1, "Any"), "HashSet", "DictTypes"), args$$241];
      }

    default:
      {
        return null;
      }
  }
}