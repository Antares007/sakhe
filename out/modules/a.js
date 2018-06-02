"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = undefined;

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _Seq = require("./fable-core/Seq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const A = exports.A = function (__exports) {
  const tree = __exports.tree = function (f, s, _arg1) {
    let list = new _List2.default();

    _arg1(function (a) {
      list = new _List2.default(a, list);
    });

    return (0, _Seq.fold)(f, s, list);
  };

  return __exports;
}({});