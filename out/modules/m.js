"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.most = undefined;
exports.tree = tree;

var _most = require("./most");

var _a = require("./a");

var most = exports.most = _most.Core.require;

function tree(deltac, mpith) {
  return most.switchLatest.bind(most)(most.map(function (pith) {
    return (0, _a.tree)(deltac, pith);
  })(mpith));
}
