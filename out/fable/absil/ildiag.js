"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dprintf = dprintf;
exports.dprintfn = dprintfn;
exports.dprintn = dprintn;

var _String = require("../fable-core.2.0.3/String");

function dprintf(fmt) {
  return (0, _String.toConsole)(fmt);
}

function dprintfn(fmt$$1) {
  return (0, _String.toConsole)(fmt$$1);
}

function dprintn(s) {
  (0, _String.toConsole)((0, _String.printf)("%s"))(s);
}