"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;

var _stream = require("./stream");

var _a = require("./a");

function tree(deltac, mpith) {
  return _stream.S.switchLatest(_stream.S.map(function (arg10_) {
    return _a.Pith.tree(deltac, arg10_);
  }, mpith));
}