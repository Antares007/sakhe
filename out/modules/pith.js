"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith = undefined;

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pith = exports.Pith = function (__exports) {
  const map = __exports.map = function (f, _arg1) {
    return function (o) {
      _arg1($var1 => o(f($var1)));
    };
  };

  const tree = __exports.tree = function (deltaC, _arg1) {
    let list = new _List2.default();

    _arg1(function (a) {
      list = new _List2.default(a, list);
    });

    return deltaC(list);
  };

  return __exports;
}({});