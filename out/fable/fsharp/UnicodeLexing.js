"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringAsLexbuf = StringAsLexbuf;
exports.FunctionAsLexbuf = FunctionAsLexbuf;

var _primLexing = require("../utils/prim-lexing");

function StringAsLexbuf(arg00) {
  return (0, _primLexing.LexBuffer$00601$$$FromString$$Z721C83C5)(arg00);
}

function FunctionAsLexbuf(arg00$$1) {
  return (0, _primLexing.LexBuffer$00601$$$FromFunction$$60D283D9)(arg00$$1);
}