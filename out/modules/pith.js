"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith = undefined;

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pith = exports.Pith = function (__exports) {
  const return_ = __exports["return'"] = function (p) {
    return p;
  };

  const map = __exports.map = function (f, _arg1) {
    return function (o) {
      _arg1($var1 => o(f($var1)));
    };
  };

  const toList = __exports.toList = function (_arg1) {
    let list = new _List2.default();

    _arg1(function (a) {
      list = new _List2.default(a, list);
    });

    return list;
  };

  const tree = __exports.tree = function (deltaC, pith) {
    return deltaC(toList(pith));
  };

  const PithBuilder = __exports.PithBuilder = class PithBuilder {
    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Pith.PithBuilder",
        properties: {}
      };
    }

    constructor() {}

    Return(a) {
      return return_(a);
    }

    ReturnFrom(a) {
      return a;
    }

  };
  (0, _Symbol2.setType)("Sakhe.Pith.PithBuilder", PithBuilder);
  const p = __exports.p = new PithBuilder();
  return __exports;
}({});