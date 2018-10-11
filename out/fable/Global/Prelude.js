"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeArrayDictionary$00602$$$$002Ector = ResizeArrayDictionary$00602$$$$002Ector;
exports.ResizeArrayDictionary$00602$$get_Count = ResizeArrayDictionary$00602$$get_Count;
exports.ResizeArrayDictionary$00602$$Add$$5BDDA1 = ResizeArrayDictionary$00602$$Add$$5BDDA1;
exports.ResizeArrayDictionary$00602$$Get$$2B595 = ResizeArrayDictionary$00602$$Get$$2B595;
exports.Position$$$get_Empty = Position$$$get_Empty;
exports.SourceLocation$$Collapse = SourceLocation$$Collapse;
exports.SourceLocation$$$op_Addition$$Z30E388E0 = SourceLocation$$$op_Addition$$Z30E388E0;
exports.SourceLocation$$$get_Empty = SourceLocation$$$get_Empty;
exports.Tuple$$$make2 = Tuple$$$make2;
exports.Tuple3$$$item1 = Tuple3$$$item1;
exports.Tuple3$$$item2 = Tuple3$$$item2;
exports.Tuple3$$$item3 = Tuple3$$$item3;
exports.List$$$isSingle = List$$$isSingle;
exports.List$$$isMultiple = List$$$isMultiple;
exports.List$$$sameLength = List$$$sameLength;
exports.List$$$splitLast = List$$$splitLast;
exports.List$$$replaceLast = List$$$replaceLast;
exports.List$$$mapToArray = List$$$mapToArray;
exports.List$$$mapiToArray = List$$$mapiToArray;
exports.Patterns$$$$007CTry$007C_$007C = Patterns$$$$007CTry$007C_$007C;
exports.Patterns$$$$007CDicContains$007C_$007C = Patterns$$$$007CDicContains$007C_$007C;
exports.Patterns$$$$007CSetContains$007C_$007C = Patterns$$$$007CSetContains$007C_$007C;
exports.Naming$$$$007CStartsWith$007C_$007C = Naming$$$$007CStartsWith$007C_$007C;
exports.Naming$$$$007CEndsWith$007C_$007C = Naming$$$$007CEndsWith$007C_$007C;
exports.Naming$$$isIdentChar = Naming$$$isIdentChar;
exports.Naming$$$hasIdentForbiddenChars = Naming$$$hasIdentForbiddenChars;
exports.Naming$$$sanitizeIdentForbiddenChars = Naming$$$sanitizeIdentForbiddenChars;
exports.Naming$$$removeGetSetPrefix = Naming$$$removeGetSetPrefix;
exports.Naming$$$extensionMethodName = Naming$$$extensionMethodName;
exports.Naming$$$lowerFirst = Naming$$$lowerFirst;
exports.Naming$$$upperFirst = Naming$$$upperFirst;
exports.Naming$$$preventConflicts = Naming$$$preventConflicts;
exports.Naming$$$getUniqueName = Naming$$$getUniqueName;
exports.Naming$$$buildNameWithoutSanitation = Naming$$$buildNameWithoutSanitation;
exports.Naming$$$buildNameWithoutSanitationFrom = Naming$$$buildNameWithoutSanitationFrom;
exports.Naming$$$sanitizeIdent = Naming$$$sanitizeIdent;
exports.Path$$$Combine = Path$$$Combine;
exports.Path$$$Combine3 = Path$$$Combine3;
exports.Path$$$ChangeExtension = Path$$$ChangeExtension;
exports.Path$$$GetExtension = Path$$$GetExtension;
exports.Path$$$GetFileName = Path$$$GetFileName;
exports.Path$$$GetFileNameWithoutExtension = Path$$$GetFileNameWithoutExtension;
exports.Path$$$GetDirectoryName = Path$$$GetDirectoryName;
exports.Path$$$GetFullPath = Path$$$GetFullPath;
exports.Path$$$normalizePath = Path$$$normalizePath;
exports.Path$$$normalizeFullPath = Path$$$normalizeFullPath;
exports.Path$$$normalizePathAndEnsureFsExtension = Path$$$normalizePathAndEnsureFsExtension;
exports.Path$$$getRelativeFileOrDirPath = Path$$$getRelativeFileOrDirPath;
exports.Path$$$getRelativePath = Path$$$getRelativePath;
exports.Path$$$getCommonPrefix = Path$$$getCommonPrefix;
exports.Path$$$isChildPath = Path$$$isChildPath;
exports.Path$$$getCommonBaseDir = Path$$$getCommonBaseDir;
exports.Naming$002EMemberPart = exports.Naming$$$jsKeywords = exports.Naming$$$umdModules = exports.Naming$$$ignoredCompilerGenerated = exports.Naming$$$interfaceMethodsImplementedInPrototype = exports.Naming$$$ignoredInterfaces = exports.Naming$$$targetFileExtension = exports.SourceLocation = exports.Position = exports.ResizeArrayDictionary$00602 = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Util = require("../fable-core.2.0.3/Util");

var _List = require("../fable-core.2.0.3/List");

var _String = require("../fable-core.2.0.3/String");

var _Array = require("../fable-core.2.0.3/Array");

var _Option = require("../fable-core.2.0.3/Option");

var _Set = require("../fable-core.2.0.3/Set");

var _Seq = require("../fable-core.2.0.3/Seq");

const ResizeArrayDictionary$00602 = (0, _Types.declare)(function ResizeArrayDictionary$00602() {
  const $this$$1 = this;
  $this$$1.dic = new Map([]);
});
exports.ResizeArrayDictionary$00602 = ResizeArrayDictionary$00602;

function ResizeArrayDictionary$00602$$$$002Ector() {
  return this != null ? ResizeArrayDictionary$00602.call(this) : new ResizeArrayDictionary$00602();
}

function ResizeArrayDictionary$00602$$get_Count(__) {
  return __.dic.size;
}

function ResizeArrayDictionary$00602$$Add$$5BDDA1(__$$1, k, v) {
  const matchValue = (0, _Util.tryGetValue)(__$$1.dic, k, null);

  if (matchValue[0]) {
    matchValue[1].push(v);
  } else {
    __$$1.dic.set(k, Array.from([v]));
  }
}

function ResizeArrayDictionary$00602$$Get$$2B595(__$$2, k$$1) {
  const matchValue$$1 = (0, _Util.tryGetValue)(__$$2.dic, k$$1, null);

  if (matchValue$$1[0]) {
    return (0, _List.ofSeq)(matchValue$$1[1]);
  } else {
    return (0, _Types.L)();
  }
}

const Position = (0, _Types.declare)(function Position(arg1, arg2) {
  this.line = arg1 | 0;
  this.column = arg2 | 0;
}, _Types.Record);
exports.Position = Position;

function Position$$$get_Empty() {
  return new Position(1, 0);
}

const SourceLocation = (0, _Types.declare)(function SourceLocation(arg1, arg2) {
  this.start = arg1;
  this.end = arg2;
}, _Types.Record);
exports.SourceLocation = SourceLocation;

function SourceLocation$$Collapse(x) {
  return new SourceLocation(x.start, x.start);
}

function SourceLocation$$$op_Addition$$Z30E388E0(r1, r2) {
  return new SourceLocation(r1.start, r2.end);
}

function SourceLocation$$$get_Empty() {
  return new SourceLocation(Position$$$get_Empty(), Position$$$get_Empty());
}

SourceLocation.prototype.toString = function () {
  const x$$1 = this;
  return (0, _String.toText)((0, _String.printf)("(L%i,%i-L%i,%i)"))(x$$1.start.line)(x$$1.start.column)(x$$1.end.line)(x$$1.end.column);
};

function Tuple$$$make2(x$$2, y) {
  return [x$$2, y];
}

function Tuple3$$$item1(x$$3, _arg1, _arg2) {
  return x$$3;
}

function Tuple3$$$item2(_arg1$$1, y$$1, _arg2$$1) {
  return y$$1;
}

function Tuple3$$$item3(_arg1$$2, _arg2$$2, z) {
  return z;
}

function List$$$isSingle(_arg1$$3) {
  var $target$$13;

  if (_arg1$$3.tail != null) {
    if (_arg1$$3.tail.tail == null) {
      $target$$13 = 0;
    } else {
      $target$$13 = 1;
    }
  } else {
    $target$$13 = 1;
  }

  switch ($target$$13) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

function List$$$isMultiple(_arg1$$4) {
  var $target$$14;

  if (_arg1$$4.tail != null) {
    if (_arg1$$4.tail.tail == null) {
      $target$$14 = 0;
    } else {
      $target$$14 = 1;
    }
  } else {
    $target$$14 = 0;
  }

  switch ($target$$14) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        return true;
      }
  }
}

function List$$$sameLength(xs1, xs2) {
  List$$$sameLength: while (true) {
    const matchValue$$2 = [xs1, xs2];
    var $target$$15, xs1$$1, xs2$$1;

    if (matchValue$$2[0].tail != null) {
      if (matchValue$$2[0].tail.tail == null) {
        if (matchValue$$2[1].tail != null) {
          if (matchValue$$2[1].tail.tail == null) {
            $target$$15 = 1;
          } else {
            $target$$15 = 2;
            xs1$$1 = matchValue$$2[0].tail;
            xs2$$1 = matchValue$$2[1].tail;
          }
        } else {
          $target$$15 = 3;
        }
      } else if (matchValue$$2[1].tail != null) {
        $target$$15 = 2;
        xs1$$1 = matchValue$$2[0].tail;
        xs2$$1 = matchValue$$2[1].tail;
      } else {
        $target$$15 = 3;
      }
    } else if (matchValue$$2[1].tail == null) {
      $target$$15 = 0;
    } else {
      $target$$15 = 3;
    }

    switch ($target$$15) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          xs1 = xs1$$1;
          xs2 = xs2$$1;
          continue List$$$sameLength;
        }

      case 3:
        {
          return false;
        }
    }
  }
}

function List$$$splitLast(xs$$2) {
  const splitListInner = function splitListInner(acc, _arg1$$5) {
    splitListInner: while (true) {
      if (_arg1$$5.tail != null) {
        if (_arg1$$5.tail.tail == null) {
          return [(0, _List.reverse)(acc), _arg1$$5.head];
        } else {
          acc = (0, _Types.L)(_arg1$$5.head, acc);
          _arg1$$5 = _arg1$$5.tail;
          continue splitListInner;
        }
      } else {
        throw new Error("List is empty");
      }
    }
  };

  return splitListInner((0, _Types.L)(), xs$$2);
}

function List$$$replaceLast(f, xs$$4) {
  const xs$$5 = (0, _Array.ofList)(xs$$4, Array);
  xs$$5[xs$$5.length - 1] = f(xs$$5[xs$$5.length - 1]);
  return (0, _List.ofArray)(xs$$5);
}

function List$$$mapToArray(f$$1, xs$$6) {
  let ar;
  const count = (0, _List.length)(xs$$6) | 0;
  ar = (0, _Array.fill)(new Array(count), 0, count, null);
  (0, _List.iterateIndexed)(function action(i, x$$6) {
    ar[i] = f$$1(x$$6);
  }, xs$$6);
  return ar;
}

function List$$$mapiToArray(f$$2, xs$$7) {
  let ar$$1;
  const count$$1 = (0, _List.length)(xs$$7) | 0;
  ar$$1 = (0, _Array.fill)(new Array(count$$1), 0, count$$1, null);
  (0, _List.iterateIndexed)(function action$$1(i$$1, x$$7) {
    ar$$1[i$$1] = f$$2(i$$1, x$$7);
  }, xs$$7);
  return ar$$1;
}

function Patterns$$$$007CTry$007C_$007C(f$$3, a) {
  return f$$3(a);
}

function Patterns$$$$007CDicContains$007C_$007C(dic, key) {
  const patternInput = (0, _Util.tryGetValue)(dic, key, null);

  if (patternInput[0]) {
    return (0, _Option.some)(patternInput[1]);
  } else {
    return null;
  }
}

function Patterns$$$$007CSetContains$007C_$007C(set, item) {
  if ((0, _Set.contains)(item, set)) {
    return (0, _Option.some)(null);
  } else {
    return null;
  }
}

function Naming$$$$007CStartsWith$007C_$007C(pattern, txt) {
  if (txt.indexOf(pattern) === 0) {
    return txt.substr(pattern.length);
  } else {
    return null;
  }
}

function Naming$$$$007CEndsWith$007C_$007C(pattern$$1, txt$$1) {
  if ((0, _String.endsWith)(txt$$1, pattern$$1)) {
    return txt$$1.substr(0, txt$$1.length - pattern$$1.length);
  } else {
    return null;
  }
}

const Naming$$$targetFileExtension = "";
exports.Naming$$$targetFileExtension = Naming$$$targetFileExtension;
const Naming$$$ignoredInterfaces = (0, _Set.ofSeq)(["System.Collections.IStructuralEquatable", "System.Collections.IStructuralComparable", "System.IEquatable`1", "System.IComparable`1", "System.IComparable", "System.Collections.Generic.IEnumerable", "System.Collections.IEnumerable", "System.Collections.Generic.IEnumerator`1"], {
  Compare: _Util.comparePrimitives
});
exports.Naming$$$ignoredInterfaces = Naming$$$ignoredInterfaces;
const Naming$$$interfaceMethodsImplementedInPrototype = (0, _Set.ofSeq)(["System-IComparable-CompareTo", "System-Collections-Generic-IEnumerable`1-GetEnumerator"], {
  Compare: _Util.comparePrimitives
});
exports.Naming$$$interfaceMethodsImplementedInPrototype = Naming$$$interfaceMethodsImplementedInPrototype;
const Naming$$$ignoredCompilerGenerated = (0, _Set.ofSeq)(["CompareTo", "Equals", "GetHashCode"], {
  Compare: _Util.comparePrimitives
});
exports.Naming$$$ignoredCompilerGenerated = Naming$$$ignoredCompilerGenerated;
const Naming$$$umdModules = (0, _Set.ofSeq)(["commonjs", "amd", "umd"], {
  Compare: _Util.comparePrimitives
});
exports.Naming$$$umdModules = Naming$$$umdModules;

function Naming$$$isIdentChar(index, c) {
  const code = c.charCodeAt(0) | 0;

  if ((c === "_" ? true : 65 <= code ? code <= 90 : false) ? true : 97 <= code ? code <= 122 : false) {
    return true;
  } else if (index > 0 ? 48 <= code : false) {
    return code <= 57;
  } else {
    return false;
  }
}

function Naming$$$hasIdentForbiddenChars(ident) {
  let i$$2 = 0;

  while (i$$2 < ident.length ? Naming$$$isIdentChar(i$$2, ident[i$$2]) : false) {
    i$$2 = i$$2 + 1;
  }

  return i$$2 < ident.length;
}

function Naming$$$sanitizeIdentForbiddenChars(ident$$1) {
  if (Naming$$$hasIdentForbiddenChars(ident$$1)) {
    return (0, _String.join)("", ...(0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (i$$3) {
        const c$$1 = ident$$1[i$$3];
        return Naming$$$isIdentChar(i$$3, c$$1) ? (0, _Seq.singleton)(c$$1) : (0, _Seq.singleton)("$" + (0, _String.padLeft)((0, _String.format)("{0:X}", c$$1.charCodeAt(0)), 4, "0"));
      }, (0, _Seq.rangeNumber)(0, 1, ident$$1.length - 1));
    }));
  } else {
    return ident$$1;
  }
}

function Naming$$$removeGetSetPrefix(s) {
  if (s.indexOf("get_") === 0 ? true : s.indexOf("set_") === 0) {
    return s.substr(4);
  } else {
    return s;
  }
}

function Naming$$$extensionMethodName(s$$1) {
  const i1 = s$$1.indexOf(".") | 0;

  if (i1 < 0) {
    return s$$1;
  } else {
    const i2 = s$$1.indexOf(".", i1 + 1) | 0;

    if (i2 < 0) {
      return s$$1;
    } else {
      return s$$1.substr(i1 + 1, i2 - i1 - 1);
    }
  }
}

function Naming$$$lowerFirst(s$$2) {
  return s$$2.substr(0, 1).toLowerCase() + s$$2.substr(1);
}

function Naming$$$upperFirst(s$$3) {
  return s$$3.substr(0, 1).toUpperCase() + s$$3.substr(1);
}

const Naming$$$jsKeywords = new Set(["abstract", "await", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "self", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "undefined", "var", "void", "volatile", "while", "with", "yield", "Object", "Function", "Boolean", "Symbol", "Map", "Set", "NaN", "Number", "Math", "Date", "String", "RegExp", "JSON", "Promise", "Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "Attr", "CharacterData", "Comment", "CustomEvent", "Document", "DocumentFragment", "DocumentType", "DOMError", "DOMException", "DOMImplementation", "DOMString", "DOMTimeStamp", "DOMSettableTokenList", "DOMStringList", "DOMTokenList", "Element", "Event", "EventTarget", "Error", "HTMLCollection", "MutationObserver", "MutationRecord", "Node", "NodeFilter", "NodeIterator", "NodeList", "ProcessingInstruction", "Range", "Text", "TreeWalker", "URL", "Window", "Worker", "XMLDocument", "arguments", "fetch", "eval", "window", "console", "global"]);
exports.Naming$$$jsKeywords = Naming$$$jsKeywords;

function Naming$$$preventConflicts(conflicts, name) {
  const check = function check(n) {
    check: while (true) {
      const name$$1 = n > 0 ? name + "$$" + (0, _Util.int32ToString)(n) : name;

      if (!conflicts(name$$1)) {
        return name$$1;
      } else {
        n = n + 1;
        continue check;
      }
    }
  };

  return check(0);
}

const Naming$002EMemberPart = (0, _Types.declare)(function Naming$002EMemberPart(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Naming$002EMemberPart = Naming$002EMemberPart;

function Naming$$$getUniqueName(baseName, index$$1) {
  return "$" + baseName + "$$" + (0, _Util.int32ToString)(index$$1);
}

function Naming$$$printPart(sanitize, separator, part, overloadSuffix) {
  return (part === "" ? "" : separator + sanitize(part)) + (overloadSuffix === "" ? "" : "$$" + overloadSuffix);
}

function Naming$$$buildName(sanitize$$1, name$$2, part$$1) {
  var s$$5, i$$5, s$$4, i$$4;
  return sanitize$$1(name$$2) + (part$$1.tag === 1 ? (s$$5 = part$$1.fields[0], (i$$5 = part$$1.fields[1], Naming$$$printPart(sanitize$$1, "$$$", s$$5, i$$5))) : part$$1.tag === 2 ? "" : (s$$4 = part$$1.fields[0], (i$$4 = part$$1.fields[1], Naming$$$printPart(sanitize$$1, "$$", s$$4, i$$4))));
}

function Naming$$$buildNameWithoutSanitation(name$$3, part$$2) {
  return Naming$$$buildName(function (x$$8) {
    return x$$8;
  }, name$$3, part$$2);
}

function Naming$$$buildNameWithoutSanitationFrom(entityName, isStatic, memberCompiledName, overloadSuffix$$1) {
  const tupledArg = isStatic ? [entityName, new Naming$002EMemberPart(1, "StaticMemberPart", memberCompiledName, overloadSuffix$$1)] : [entityName, new Naming$002EMemberPart(0, "InstanceMemberPart", memberCompiledName, overloadSuffix$$1)];
  return function func(name$$4, part$$3) {
    return Naming$$$buildName(function sanitize$$2(x$$9) {
      return x$$9;
    }, name$$4, part$$3);
  }(tupledArg[0], tupledArg[1]);
}

function Naming$$$sanitizeIdent(conflicts$$1, name$$5, part$$4) {
  const sanitizedName = Naming$$$buildName(Naming$$$sanitizeIdentForbiddenChars, name$$5, part$$4);
  return Naming$$$preventConflicts(conflicts$$1, Naming$$$jsKeywords.has(sanitizedName) ? sanitizedName + "$" : sanitizedName);
}

function Path$$$Combine(path1, path2) {
  return (0, _String.trimEnd)(path1, "\\", "/") + "/" + (0, _String.trimStart)(path2, "\\", "/");
}

function Path$$$Combine3(path1$$1, path2$$1, path3) {
  return (0, _String.trimEnd)(path1$$1, "\\", "/") + "/" + (0, _String.trim)(path2$$1, "\\", "/") + "/" + (0, _String.trimStart)(path3, "\\", "/");
}

function Path$$$ChangeExtension(path, ext) {
  const i$$6 = path.lastIndexOf(".") | 0;

  if (i$$6 < 0) {
    return path;
  } else {
    return path.substr(0, i$$6) + ext;
  }
}

function Path$$$GetExtension(path$$1) {
  const i$$7 = path$$1.lastIndexOf(".") | 0;

  if (i$$7 < 0) {
    return "";
  } else {
    return path$$1.substr(i$$7);
  }
}

function Path$$$GetFileName(path$$2) {
  const normPath = (0, _String.trimEnd)((0, _String.replace)(path$$2, "\\", "/"), "/");
  const i$$8 = normPath.lastIndexOf("/") | 0;
  return path$$2.substr(i$$8 + 1);
}

function Path$$$GetFileNameWithoutExtension(path$$3) {
  const filename = Path$$$GetFileName(path$$3);
  const i$$9 = filename.lastIndexOf(".") | 0;

  if (i$$9 < 0) {
    return filename;
  } else {
    return filename.substr(0, i$$9);
  }
}

function Path$$$GetDirectoryName(path$$4) {
  const normPath$$1 = (0, _String.replace)(path$$4, "\\", "/");
  const i$$10 = normPath$$1.lastIndexOf("/") | 0;

  if (i$$10 < 0) {
    return "";
  } else {
    return path$$4.substr(0, i$$10);
  }
}

function Path$$$GetFullPath(path$$5) {
  return path$$5;
}

function Path$$$normalizePath(path$$6) {
  return (0, _String.replace)(path$$6, "\\", "/");
}

function Path$$$normalizeFullPath(path$$7) {
  return Path$$$normalizePath(Path$$$GetFullPath(path$$7));
}

function Path$$$normalizePathAndEnsureFsExtension(path$$8) {
  const path$$9 = Path$$$normalizePath(path$$8);

  if ((0, _String.endsWith)(path$$9, "fsi")) {
    return path$$9.substr(0, path$$9.length - 1);
  } else {
    return path$$9;
  }
}

function Path$$$getRelativeFileOrDirPath(fromIsDir, fromFullPath, toIsDir, toFullPath) {
  var path$$11;

  const pathDifference = function pathDifference(path1$$2, path2$$2) {
    let c$$2 = 0;
    let d = -1 | 0;

    while ((c$$2 < path1$$2.length ? c$$2 < path2$$2.length : false) ? path1$$2[c$$2] === path2$$2[c$$2] : false) {
      if (path1$$2[c$$2] === "/") {
        d = c$$2;
      }

      c$$2 = c$$2 + 1;
    }

    if (c$$2 === 0) {
      return path2$$2;
    } else if (c$$2 === path1$$2.length ? c$$2 === path2$$2.length : false) {
      return "";
    } else {
      let builder = "";

      while (c$$2 < path1$$2.length) {
        if (path1$$2[c$$2] === "/") {
          builder = builder + "../";
        }

        c$$2 = c$$2 + 1;
      }

      if (builder.length === 0 ? path2$$2.length - 1 === d : false) {
        return "./";
      } else {
        return builder + path2$$2.substr(d + 1);
      }
    }
  };

  const addDummyFile = function addDummyFile(isDir, path$$10) {
    if (isDir) {
      return Path$$$Combine(path$$10, "__DUMMY-FILE__.txt");
    } else {
      return path$$10;
    }
  };

  const fromFullPath$$1 = Path$$$normalizePath(fromFullPath);
  const toFullPath$$1 = Path$$$normalizePath(toFullPath);

  if (fromFullPath$$1[0] !== toFullPath$$1[0]) {
    return toFullPath$$1;
  } else {
    const fromPath = addDummyFile(fromIsDir, fromFullPath$$1);
    const toPath = addDummyFile(toIsDir, toFullPath$$1);
    const matchValue$$3 = (0, _String.replace)(pathDifference(fromPath, toPath), "__DUMMY-FILE__.txt", "");

    if (path$$11 = matchValue$$3, path$$11.indexOf(".") === 0) {
      const path$$12 = matchValue$$3;
      return path$$12;
    } else {
      const path$$13 = matchValue$$3;
      return "./" + path$$13;
    }
  }
}

function Path$$$getRelativePath(fromFullPath$$2, toFullPath$$2) {
  const isDir$$1 = function isDir$$1($arg$$10) {
    return (0, _String.isNullOrWhiteSpace)(Path$$$GetExtension($arg$$10));
  };

  return Path$$$getRelativeFileOrDirPath(isDir$$1(fromFullPath$$2), fromFullPath$$2, isDir$$1(toFullPath$$2), toFullPath$$2);
}

function Path$$$getCommonPrefix(xs$$8) {
  const getCommonPrefix = function getCommonPrefix(prefix, _arg1$$6) {
    getCommonPrefix: while (true) {
      if (_arg1$$6.tail != null) {
        const xs$$9 = _arg1$$6.tail;
        const x$$10 = _arg1$$6.head;
        let i$$11 = 0;

        while ((i$$11 < prefix.length ? i$$11 < x$$10.length : false) ? x$$10[i$$11] === prefix[i$$11] : false) {
          i$$11 = i$$11 + 1;
        }

        prefix = prefix.slice(0, i$$11 - 1 + 1);
        _arg1$$6 = xs$$9;
        continue getCommonPrefix;
      } else {
        return prefix;
      }
    }
  };

  if (xs$$8.tail != null) {
    const xs$$10 = xs$$8.tail;
    const x$$11 = xs$$8.head;
    return getCommonPrefix(x$$11, xs$$10);
  } else {
    return [];
  }
}

function Path$$$isChildPath(parent, child) {
  const split = function split(x$$12) {
    return Path$$$normalizeFullPath(x$$12).split("/").filter(function predicate($arg$$11) {
      return !(0, _String.isNullOrWhiteSpace)($arg$$11);
    });
  };

  const parent$$1 = split(parent);
  const child$$1 = split(child);
  const commonPrefix = Path$$$getCommonPrefix((0, _Types.L)(parent$$1, (0, _Types.L)(child$$1, (0, _Types.L)())));
  return commonPrefix.length >= parent$$1.length;
}

function Path$$$getCommonBaseDir(filePaths) {
  return (0, _String.join)("/", ...Path$$$getCommonPrefix((0, _List.ofSeq)((0, _Seq.map)(function mapping(filePath) {
    return Path$$$normalizePath(Path$$$GetDirectoryName(filePath)).split("/").filter(function predicate$$1($arg$$12) {
      return !(0, _String.isNullOrWhiteSpace)($arg$$12);
    });
  }, filePaths))));
}