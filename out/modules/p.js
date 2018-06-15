"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = undefined;

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _Map = require("./fable-core/Map");

var _s = require("./s");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const P = exports.P = function (__exports) {
  const memoize = __exports.memoize = function (fn) {
    var cache;
    return (0, _CurriedLambda2.default)((cache = new Map(), function (a) {
      const matchValue = (0, _Map.tryGetValue)(cache, a, null);

      if (matchValue[0]) {
        return matchValue[1];
      } else {
        const b = fn(a);
        cache.set(a, b);
        return b;
      }
    }));
  };

  const once = __exports.once = function (patch) {
    return memoize(patch);
  };

  const empty = __exports.empty = function () {
    return once(function (value) {
      value, void 0;
    });
  };

  const combine = __exports.combine = function (_arg2, _arg1) {
    return once(function (n) {
      _arg1(n);

      _arg2(n);
    });
  };

  const apply = __exports.apply = function (n, _arg1) {
    _arg1(n), void 0;
    return n;
  };

  const tree = __exports.tree = function (s, pith) {
    return _s.S.treeCombine(combine, s, pith);
  };

  return __exports;
}({});