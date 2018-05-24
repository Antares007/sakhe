"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pith = pith;
exports.pmap = pmap;
exports.deltaC = deltaC;
exports.tree = tree;

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pith(f) {
  return f;
}

function pmap(f, _arg1) {
  return (0, _CurriedLambda2.default)(f)(_arg1);
}

function deltaC(f) {
  return f;
}

function tree(_arg2, _arg1) {
  let list = new _List2.default();

  _arg1(function (a) {
    list = new _List2.default(a, list);
  });

  return _arg2(list);
}