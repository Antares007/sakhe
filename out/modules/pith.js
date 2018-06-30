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

  const empty = __exports.empty = function () {
    return function (value) {
      value, void 0;
    };
  };

  const map = __exports.map = function (f, _arg1) {
    return function (o) {
      _arg1($var1 => o(f($var1)));
    };
  };

  const mapi = __exports.mapi = function (f, p) {
    let c = 0;
    return map(function (a) {
      const index = c | 0;
      c = c + 1 | 0;
      return f(index, a);
    }, p);
  };

  const append = __exports.append = function (_arg2, _arg1) {
    return function (o) {
      _arg2(o);

      _arg1(o);
    };
  };

  const concat = __exports.concat = function (_arg1) {
    let pith = empty();

    _arg1(function (p) {
      pith = append(pith, p);
    });

    return pith;
  };

  const fold = __exports.fold = function (f, s, _arg1) {
    let state = s;

    _arg1(function (a) {
      state = f(state, a);
    });

    return state;
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