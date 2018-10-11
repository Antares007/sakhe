"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.System$002EDecimal$$$GetBits = System$002EDecimal$$$GetBits;
exports.System$002EDiagnostics$002ETrace$$$$002Ector = System$002EDiagnostics$002ETrace$$$$002Ector;
exports.System$002EDiagnostics$002ETrace$$$TraceInformation$$1505 = System$002EDiagnostics$002ETrace$$$TraceInformation$$1505;
exports.System$002EReflection$002EAssemblyName$$$$002Ector$$Z721C83C5 = System$002EReflection$002EAssemblyName$$$$002Ector$$Z721C83C5;
exports.System$002EReflection$002EAssemblyName$$get_Name = System$002EReflection$002EAssemblyName$$get_Name;
exports.System$002EWeakReference$00601$$$$002Ector$$2B595 = System$002EWeakReference$00601$$$$002Ector$$2B595;
exports.System$002EWeakReference$00601$$TryGetTarget = System$002EWeakReference$00601$$TryGetTarget;
exports.System$002EStringComparer$$$$002Ector$$2A47EB22 = System$002EStringComparer$$$$002Ector$$2A47EB22;
exports.System$002EStringComparer$$$get_Ordinal = System$002EStringComparer$$$get_Ordinal;
exports.System$002EStringComparer$$$get_OrdinalIgnoreCase = System$002EStringComparer$$$get_OrdinalIgnoreCase;
exports.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector$$Z79760D57 = System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector$$Z79760D57;
exports.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector = System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector;
exports.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$TryAdd$$5BDDA1 = System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$TryAdd$$5BDDA1;
exports.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$GetOrAdd$$Z1F9F2CFE = System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$GetOrAdd$$Z1F9F2CFE;
exports.System$002EIO$002EDirectory$$$GetCurrentDirectory = System$002EIO$002EDirectory$$$GetCurrentDirectory;
exports.System$002EIO$002EPath$$$Combine = System$002EIO$002EPath$$$Combine;
exports.System$002EIO$002EPath$$$ChangeExtension = System$002EIO$002EPath$$$ChangeExtension;
exports.System$002EIO$002EPath$$$HasExtension = System$002EIO$002EPath$$$HasExtension;
exports.System$002EIO$002EPath$$$GetExtension = System$002EIO$002EPath$$$GetExtension;
exports.System$002EIO$002EPath$$$GetInvalidPathChars = System$002EIO$002EPath$$$GetInvalidPathChars;
exports.System$002EIO$002EPath$$$GetInvalidFileNameChars = System$002EIO$002EPath$$$GetInvalidFileNameChars;
exports.System$002EIO$002EPath$$$GetFullPath = System$002EIO$002EPath$$$GetFullPath;
exports.System$002EIO$002EPath$$$GetFileName = System$002EIO$002EPath$$$GetFileName;
exports.System$002EIO$002EPath$$$GetFileNameWithoutExtension = System$002EIO$002EPath$$$GetFileNameWithoutExtension;
exports.System$002EIO$002EPath$$$GetDirectoryName = System$002EIO$002EPath$$$GetDirectoryName;
exports.System$002EIO$002EPath$$$IsPathRooted = System$002EIO$002EPath$$$IsPathRooted;
exports.Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$getEscapeSequence = Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$getEscapeSequence;
exports.Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$escape = Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$escape;
exports.Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString = Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString;
exports.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$$$002Ector$$Z384F8060 = Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$$$002Ector$$Z384F8060;
exports.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format = Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format;
exports.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$postProcessString = Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$postProcessString;
exports.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString = Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString;
exports.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601 = exports.Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$s_escapeChars = exports.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602 = exports.System$002EStringComparer = exports.System$002EWeakReference$00601 = exports.System$002EReflection$002EAssemblyName = exports.System$002EDiagnostics$002ETrace = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _String = require("../fable-core.2.0.3/String");

var _Util = require("../fable-core.2.0.3/Util");

var _DictTypes = require("../fable-core.2.0.3/DictTypes");

var _Array = require("../fable-core.2.0.3/Array");

var _Seq = require("../fable-core.2.0.3/Seq");

var _fsstrings = require("./fsstrings");

function System$002EDecimal$$$GetBits(d) {
  return new Int32Array([0, 0, 0, 0]);
}

const System$002EDiagnostics$002ETrace = (0, _Types.declare)(function System$002EDiagnostics$002ETrace() {});
exports.System$002EDiagnostics$002ETrace = System$002EDiagnostics$002ETrace;

function System$002EDiagnostics$002ETrace$$$$002Ector() {
  return this != null ? System$002EDiagnostics$002ETrace.call(this) : new System$002EDiagnostics$002ETrace();
}

function System$002EDiagnostics$002ETrace$$$TraceInformation$$1505(s) {}

const System$002EReflection$002EAssemblyName = (0, _Types.declare)(function System$002EReflection$002EAssemblyName(assemblyName) {
  const $this$$2 = this;
  $this$$2.assemblyName = assemblyName;
});
exports.System$002EReflection$002EAssemblyName = System$002EReflection$002EAssemblyName;

function System$002EReflection$002EAssemblyName$$$$002Ector$$Z721C83C5(assemblyName) {
  return this != null ? System$002EReflection$002EAssemblyName.call(this, assemblyName) : new System$002EReflection$002EAssemblyName(assemblyName);
}

function System$002EReflection$002EAssemblyName$$get_Name(x) {
  return x.assemblyName;
}

const System$002EWeakReference$00601 = (0, _Types.declare)(function System$002EWeakReference$00601(v) {
  const $this$$3 = this;
  $this$$3.v = v;
});
exports.System$002EWeakReference$00601 = System$002EWeakReference$00601;

function System$002EWeakReference$00601$$$$002Ector$$2B595(v) {
  return this != null ? System$002EWeakReference$00601.call(this, v) : new System$002EWeakReference$00601(v);
}

function System$002EWeakReference$00601$$TryGetTarget(x$$1) {
  return [true, x$$1.v];
}

const System$002EStringComparer = (0, _Types.declare)(function System$002EStringComparer(comp) {
  const $this$$4 = this;
  $this$$4.comp = comp;
});
exports.System$002EStringComparer = System$002EStringComparer;

function System$002EStringComparer$$$$002Ector$$2A47EB22(comp) {
  return this != null ? System$002EStringComparer.call(this, comp) : new System$002EStringComparer(comp);
}

function System$002EStringComparer$$$get_Ordinal() {
  return System$002EStringComparer$$$$002Ector$$2A47EB22(4);
}

function System$002EStringComparer$$$get_OrdinalIgnoreCase() {
  return System$002EStringComparer$$$$002Ector$$2A47EB22(5);
}

System$002EStringComparer.prototype.Equals = function (a, b) {
  const x$$2 = this;
  return (0, _String.compare)(a, b, x$$2.comp) === 0;
};

System$002EStringComparer.prototype.GetHashCode = function (a$$1) {
  const x$$3 = this;
  return (x$$3.comp === 4 ? (0, _Util.structuralHash)(a$$1) : x$$3.comp === 5 ? (0, _Util.structuralHash)(a$$1.toLowerCase()) : (0, _String.toFail)((0, _String.printf)("Unsupported StringComparison: %A"))(x$$3.comp)) | 0;
};

System$002EStringComparer.prototype.Compare = function (a$$2, b$$1) {
  const x$$4 = this;
  return (0, _String.compare)(a$$2, b$$1, x$$4.comp) | 0;
};

const System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602 = (0, _Types.declare)(function System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602(comparer) {
  const $this$$5 = this;

  _DictTypes.Dictionary.call($this$$5, [], (0, _Util.comparerFromEqualityComparer)(comparer));
}, _DictTypes.Dictionary);
exports.System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602 = System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602;

function System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector$$Z79760D57(comparer) {
  return this != null ? System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602.call(this, comparer) : new System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602(comparer);
}

function System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector() {
  return System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$$$002Ector$$Z79760D57.call(this, {
    GetHashCode(x$$5) {
      return (0, _Util.identityHash)(x$$5);
    },

    Equals(x$$6, y) {
      return (0, _Util.equals)(x$$6, y);
    }

  });
}

function System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$TryAdd$$5BDDA1(x$$7, key, value) {
  x$$7.set(key, value);
  return true;
}

function System$002ECollections$002EConcurrent$002EConcurrentDictionary$00602$$GetOrAdd$$Z1F9F2CFE(x$$8, key$$1, valueFactory) {
  const matchValue$$1 = (0, _Util.tryGetValue)(x$$8, key$$1, null);

  if (matchValue$$1[0]) {
    return matchValue$$1[1];
  } else {
    const v$$2 = valueFactory(key$$1);
    x$$8.set(key$$1, v$$2);
    return v$$2;
  }
}

function System$002EIO$002EDirectory$$$GetCurrentDirectory() {
  return ".";
}

function System$002EIO$002EPath$$$Combine(path1, path2) {
  const path1$$1 = path1.length === 0 ? path1 : (0, _String.trimEnd)(path1, "\\", "/") + "/";
  return path1$$1 + (0, _String.trimStart)(path2, "\\", "/");
}

function System$002EIO$002EPath$$$ChangeExtension(path, ext) {
  const i = path.lastIndexOf(".") | 0;

  if (i < 0) {
    return path;
  } else {
    return path.substr(0, i) + ext;
  }
}

function System$002EIO$002EPath$$$HasExtension(path$$1) {
  const i$$1 = path$$1.lastIndexOf(".") | 0;
  return i$$1 >= 0;
}

function System$002EIO$002EPath$$$GetExtension(path$$2) {
  const i$$2 = path$$2.lastIndexOf(".") | 0;

  if (i$$2 < 0) {
    return "";
  } else {
    return path$$2.substr(i$$2);
  }
}

function System$002EIO$002EPath$$$GetInvalidPathChars() {
  return (0, _Array.ofSeq)("<>:\"|\\/?*\b\t".split(""), Array);
}

function System$002EIO$002EPath$$$GetInvalidFileNameChars() {
  return (0, _Array.ofSeq)("<>:\"|\\/?*\b\t".split(""), Array);
}

function System$002EIO$002EPath$$$GetFullPath(path$$3) {
  return path$$3;
}

function System$002EIO$002EPath$$$GetFileName(path$$4) {
  const normPath = (0, _String.trimEnd)((0, _String.replace)(path$$4, "\\", "/"), "/");
  const i$$3 = normPath.lastIndexOf("/") | 0;
  return path$$4.substr(i$$3 + 1);
}

function System$002EIO$002EPath$$$GetFileNameWithoutExtension(path$$5) {
  const filename = System$002EIO$002EPath$$$GetFileName(path$$5);
  const i$$4 = filename.lastIndexOf(".") | 0;

  if (i$$4 < 0) {
    return filename;
  } else {
    return filename.substr(0, i$$4);
  }
}

function System$002EIO$002EPath$$$GetDirectoryName(path$$6) {
  const normPath$$1 = (0, _String.replace)(path$$6, "\\", "/");
  const i$$5 = normPath$$1.lastIndexOf("/") | 0;

  if (i$$5 <= 0) {
    return "";
  } else {
    return path$$6.substr(0, i$$5);
  }
}

function System$002EIO$002EPath$$$IsPathRooted(path$$7) {
  const normPath$$2 = (0, _String.trimEnd)((0, _String.replace)(path$$7, "\\", "/"), "/");
  return path$$7.indexOf("/") === 0;
}

const Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$s_escapeChars = ["<", ">", "\"", "'", "&"];
exports.Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$s_escapeChars = Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$s_escapeChars;

function Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$getEscapeSequence(c) {
  switch (c) {
    case "\"":
      {
        return "&quot;";
      }

    case "&":
      {
        return "&amp;";
      }

    case "'":
      {
        return "&apos;";
      }

    case "<":
      {
        return "&lt;";
      }

    case ">":
      {
        return "&gt;";
      }

    default:
      {
        const ch = c;
        return ch;
      }
  }
}

function Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$escape(str) {
  return Array.from((0, _Seq.collect)(Microsoft$002EFSharp$002ECore$002EXmlAdapters$$$getEscapeSequence, str.split(""))).join("");
}

function Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString(name) {
  const matchValue$$2 = (0, _Util.tryGetValue)(_fsstrings.resources, name, null);

  if (matchValue$$2[0]) {
    return matchValue$$2[1];
  } else {
    return "Missing FSStrings error message for: " + name;
  }
}

const Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601 = (0, _Types.declare)(function Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601(sfmt, fmt) {
  const $this$$6 = this;
  $this$$6.sfmt = sfmt;
  $this$$6.fmt = fmt;
});
exports.Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601 = Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601;

function Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$$$002Ector$$Z384F8060(sfmt, fmt) {
  return this != null ? Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601.call(this, sfmt, fmt) : new Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601(sfmt, fmt);
}

function Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$get_Format(x$$9) {
  const a$$3 = (0, _Array.map)(function mapping(s$$2) {
    return "%" + s$$2;
  }, x$$9.fmt.split("%").filter(function predicate(s$$1) {
    return s$$1.length > 0;
  }), Array);
  const tmp = (0, _String.format)(x$$9.sfmt, ...a$$3);
  const fmt$$1 = (0, _String.printf)(tmp);
  return (0, _String.toText)(fmt$$1);
}

function Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$postProcessString(s$$3) {
  return (0, _String.replace)((0, _String.replace)(s$$3, "\\n", "\n"), "\\t", "\t");
}

function Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$DeclareResourceString(messageID, fmt$$2) {
  const messageString = Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$$$postProcessString(Microsoft$002EFSharp$002ECompiler$002ESR$$$GetString(messageID));
  return Microsoft$002EFSharp$002ECompiler$002EDiagnosticMessage$002EResourceString$00601$$$$002Ector$$Z384F8060(messageString, fmt$$2);
}