"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = undefined;

var _s = require("./s");

var _a = require("./a");

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

  const chain = __exports.chain = function (f, _arg1) {
    return f(_arg1);
  };

  const add = __exports.add = function (f, _arg1) {
    return once(function (a) {
      _arg1(a);

      f(a);
    });
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