"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSuffix = checkSuffix;
exports.hasExtensionWithValidate = hasExtensionWithValidate;
exports.hasExtension = hasExtension;
exports.chopExtension = chopExtension;
exports.directoryName = directoryName;
exports.fileNameOfPath = fileNameOfPath;
exports.fileNameWithoutExtensionWithValidate = fileNameWithoutExtensionWithValidate;
exports.fileNameWithoutExtension = fileNameWithoutExtension;
exports.trimQuotes = trimQuotes;
exports.checkPathForIllegalChars = exports.IllegalFileNameChar = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _adapters = require("../fcs-fable/adapters");

var _Seq = require("../fable-core.2.0.3/Seq");

var _String = require("../fable-core.2.0.3/String");

var _illib = require("../absil/illib");

const IllegalFileNameChar = (0, _Types.declare)(function IllegalFileNameChar(arg1, arg2) {
  this.Data0 = arg1;
  this.Data1 = arg2;
}, _Types.FSharpException);
exports.IllegalFileNameChar = IllegalFileNameChar;

const checkPathForIllegalChars = (() => {
  const chars = new Set((0, _adapters.System$002EIO$002EPath$$$GetInvalidPathChars)());
  return function (path) {
    (0, _Seq.iterate)(function (c) {
      if (chars.has(c)) {
        throw new IllegalFileNameChar(path, c);
      }
    }, path.split(""));
  };
})();

exports.checkPathForIllegalChars = checkPathForIllegalChars;

function checkSuffix(x, y) {
  return (0, _String.endsWith)(x, y, 4);
}

function hasExtensionWithValidate(validate, s) {
  if (validate) {
    const value$$1 = checkPathForIllegalChars(s);
  }

  const sLen = s.length | 0;

  if (((sLen >= 1 ? s[sLen - 1] === "." : false) ? s !== ".." : false) ? s !== "." : false) {
    return true;
  } else {
    return (0, _adapters.System$002EIO$002EPath$$$HasExtension)(s);
  }
}

function hasExtension(s$$1) {
  return hasExtensionWithValidate(true, s$$1);
}

function chopExtension(s$$2) {
  checkPathForIllegalChars(s$$2);

  if (s$$2 === ".") {
    return "";
  } else {
    if (!hasExtensionWithValidate(false, s$$2)) {
      throw new Error("chopExtension");
    }

    return (0, _adapters.System$002EIO$002EPath$$$Combine)((0, _adapters.System$002EIO$002EPath$$$GetDirectoryName)(s$$2), (0, _adapters.System$002EIO$002EPath$$$GetFileNameWithoutExtension)(s$$2));
  }
}

function directoryName(s$$3) {
  checkPathForIllegalChars(s$$3);

  if (s$$3 === "") {
    return ".";
  } else {
    const matchValue = (0, _adapters.System$002EIO$002EPath$$$GetDirectoryName)(s$$3);

    if (matchValue === null) {
      if ((0, _illib.Shim$$$FileSystem)().IsPathRootedShim(s$$3)) {
        return s$$3;
      } else {
        return ".";
      }
    } else {
      const res = matchValue;

      if (res === "") {
        return ".";
      } else {
        return res;
      }
    }
  }
}

function fileNameOfPath(s$$4) {
  checkPathForIllegalChars(s$$4);
  return (0, _adapters.System$002EIO$002EPath$$$GetFileName)(s$$4);
}

function fileNameWithoutExtensionWithValidate(validate$$1, s$$5) {
  if (validate$$1) {
    const value$$2 = checkPathForIllegalChars(s$$5);
  }

  return (0, _adapters.System$002EIO$002EPath$$$GetFileNameWithoutExtension)(s$$5);
}

function fileNameWithoutExtension(s$$6) {
  return fileNameWithoutExtensionWithValidate(true, s$$6);
}

function trimQuotes(s$$7) {
  return (0, _String.trim)(s$$7, " ", "\"");
}