"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith = undefined;

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pith = exports.Pith = function (__exports) {
  const Of = __exports.Of = function (a) {
    return a;
  };

  const map = __exports.map = function (f, _arg1) {
    return (0, _CurriedLambda2.default)(f)(_arg1);
  };

  const tree = __exports.tree = function (_arg2, _arg1) {
    let list = new _List2.default();

    _arg1(function (a) {
      list = new _List2.default(a, list);
    });

    return _arg2(list);
  };

  return __exports;
}({});