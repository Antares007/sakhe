"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSharpGlyph = void 0;

var _Types = require("../fable-core.2.0.3/Types");

const FSharpGlyph = (0, _Types.declare)(function FSharpGlyph(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.FSharpGlyph = FSharpGlyph;