"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Patch = undefined;

var _s = require("./s");

var _Seq = require("./fable-core/Seq");

var _m = require("./m");

const Patch = exports.Patch = function (__exports) {
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

  const tree = __exports.tree = function (pith) {
    let deltac;
    let folder;

    const f = function (arg00_, arg10_) {
      return combine(arg00_, arg10_);
    };

    folder = function (arg10__1, arg20_) {
      return _s.S.combine(f, arg10__1, arg20_);
    };

    const state = _s.S.now(function (value) {
      value, void 0;
    });

    deltac = function (source) {
      return (0, _Seq.fold)(folder, state, source);
    };

    return (0, _m.tree)(deltac, pith);
  };

  return __exports;
}({});