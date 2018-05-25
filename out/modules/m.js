"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;

var _stream = require("./stream");

var _a = require("./a");

function tree(deltac, mpith) {
  return _stream.S.switchLatest(_stream.S.map(function (arg10_) {
    return (0, _a.tree)(deltac, arg10_);
  }, mpith));
}