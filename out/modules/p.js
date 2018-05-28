"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = undefined;

var _s = require("./s");

const P = exports.P = function (__exports) {
  const once = __exports.once = function (f) {
    return function makeOnce(f) {
      var b;
      return function once(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(f);
  };

  const each = __exports.each = function (f) {
    return f;
  };

  const combine = __exports.combine = function (_arg2, _arg1) {
    return function (n) {
      _arg1(n);

      _arg2(n);
    };
  };

  const apply = __exports.apply = function (n, _arg1) {
    _arg1(n);

    return n;
  };

  const tree = __exports.tree = function (s, pith) {
    return _s.S.treeCombine(combine, s, pith);
  };

  return __exports;
}({});