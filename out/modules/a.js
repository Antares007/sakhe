"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tree(deltac, pith) {
  let list = new _List2.default();
  pith(function (a) {
    list = new _List2.default(a, list);
  });
  return deltac(list);
}