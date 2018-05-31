"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = undefined;

var _Map = require("./fable-core/Map");

var _s = require("./s");

const P = exports.P = function (__exports) {
  const once = __exports.once = function (patch) {
    const cache = new Map();
    return function (a) {
      const patternInput = (0, _Map.tryGetValue)(cache, a, null);

      if (patternInput[0]) {} else {
        cache.set(a, null);
        patch(a);
      }
    };
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