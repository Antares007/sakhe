"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = undefined;

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _Map = require("./fable-core/Map");

var _s = require("./s");

var _a = require("./a");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const P = exports.P = function (__exports) {
  const memoize = function (f) {
    var cache;
    return (0, _CurriedLambda2.default)((cache = new Map(), function (x) {
      const patternInput = (0, _Map.tryGetValue)(cache, x, null);

      if (patternInput[0]) {
        return patternInput[1];
      } else {
        const v = f(x);
        cache.set(x, v);
        return v;
      }
    }));
  };

  const once = __exports.once = function (f) {
    return memoize((0, _CurriedLambda2.default)(function (a) {
      null, void 0;
      return memoize((0, _CurriedLambda2.default)(f)(a));
    }));
  };

  const empty = __exports.empty = function () {
    return once(function (_arg1, unitVar0) {});
  };

  const combine = __exports.combine = function (_arg2, _arg1) {
    return once((0, _CurriedLambda2.default)(function (n) {
      const d1 = (0, _CurriedLambda2.default)(_arg1)(n);
      const d2 = (0, _CurriedLambda2.default)(_arg2)(n);
      return function () {
        d1();
        d2();
      };
    }));
  };

  const apply = __exports.apply = function (n, _arg1) {
    (0, _CurriedLambda2.default)(_arg1)(n), void 0;
    return n;
  };

  const tree = __exports.tree = function (s, pith) {
    var f_1;
    var f;
    return _s.S.switchLatest(_s.S.map((f_1 = (f = combine, function (arg10__1, arg20_) {
      return _s.S.combine(f, arg10__1, arg20_);
    }), function (arg20__1) {
      return _a.A.tree(f_1, s, arg20__1);
    }), pith));
  };

  return __exports;
}({});