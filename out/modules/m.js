"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;

var _s = require("./s");

var _a = require("./a");

function tree(deltac, mpith) {
  return _s.S.switchLatest(_s.S.map(function (arg10_) {
    return _a.A.tree(deltac, arg10_);
  }, mpith));
}