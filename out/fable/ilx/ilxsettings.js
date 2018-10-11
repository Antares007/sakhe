"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ilxFsharpCoreLibScopeRef = ilxFsharpCoreLibScopeRef;
exports.ilxNamespace = ilxNamespace;
exports.ilxFsharpCoreLibAssemRef = exports.ilxCompilingFSharpCoreLib = exports.IlxCallImplementation = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _il = require("../absil/il");

var _bytes = require("../absil/bytes");

const IlxCallImplementation = (0, _Types.declare)(function IlxCallImplementation(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.IlxCallImplementation = IlxCallImplementation;
const ilxCompilingFSharpCoreLib = new _Types.FSharpRef(false);
exports.ilxCompilingFSharpCoreLib = ilxCompilingFSharpCoreLib;
const ilxFsharpCoreLibAssemRef = new _Types.FSharpRef(null);
exports.ilxFsharpCoreLibAssemRef = ilxFsharpCoreLibAssemRef;

function ilxFsharpCoreLibScopeRef() {
  if (ilxCompilingFSharpCoreLib.contents) {
    return new _il.ILScopeRef(0, "Local");
  } else {
    let assref;
    const matchValue = ilxFsharpCoreLibAssemRef.contents;

    if (matchValue == null) {
      assref = (0, _il.ILAssemblyRef$$$Create$$2BC8E713)("FSharp.Core", null, new _il.PublicKey(1, "PublicKeyToken", (0, _bytes.Bytes$$$ofInt32Array)(new Int32Array([176, 63, 95, 127, 17, 213, 10, 58]))), false, (0, _il.parseILVersion)("0.0.0.0"), null);
    } else {
      const o = matchValue;
      assref = o;
    }

    return new _il.ILScopeRef(2, "Assembly", assref);
  }
}

function ilxNamespace() {
  return "Microsoft.FSharp.Core";
}