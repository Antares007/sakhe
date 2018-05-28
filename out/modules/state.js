"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.R = exports.RValue = undefined;
exports.oTree = oTree;
exports.aTree = aTree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Option = require("./fable-core/Option");

var _s = require("./s");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RValue {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.State.RValue",
      interfaces: ["FSharpUnion", "System.IEquatable"],
      cases: [["RString", (0, _Util.GenericParam)("key"), _Util.Any], ["RNumber", (0, _Util.GenericParam)("key"), _Util.Any], ["RBool", (0, _Util.GenericParam)("key"), _Util.Any], ["RObject", (0, _Util.GenericParam)("key"), _Util.Any], ["RArray", (0, _Util.GenericParam)("key"), _Util.Any]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

}

exports.RValue = RValue;
(0, _Symbol2.setType)("Sakhe.State.RValue", RValue);

const R = exports.R = function (__exports) {
  const set = __exports.set = function (a) {
    return function (_arg1) {
      return a;
    };
  };

  const update = __exports.update = function (f) {
    return f;
  };

  const apply = __exports.apply = function (s, _arg1) {
    return (0, _Option.makeSome)(_arg1(s));
  };

  return __exports;
}({});

const Impl = function (__exports) {
  const chain = __exports.chain = function (absurd, key, prove, _arg1) {
    return function (_arg2) {
      if (_arg2 == null) {
        const o = absurd();

        const a = _arg1(null);

        o[key] = a;
        return o;
      } else {
        const o_1 = (0, _Option.getValue)(_arg2);
        const x = o_1[key];

        const a_1 = _arg1(prove(x));

        if (x === a_1) {
          return o_1;
        } else {
          const oClone = Object.assign(absurd(), o_1);
          oClone[key] = a_1;
          return oClone;
        }
      }
    };
  };

  const makeRing = __exports.makeRing = function (absurdObj, _arg1) {
    return function (o) {
      _arg1(function (_arg2) {
        var prove;
        var prove_1;
        var prove_2;
        var prove_3;
        var prove_4;

        switch (_arg2.tag) {
          case 1:
            o(_s.S.map((prove = function (arg00_) {
              return typeof arg00_ === "number" ? arg00_ : null;
            }, function (arg30_) {
              return chain(absurdObj, _arg2.data[0], prove, arg30_);
            }), _arg2.data[1]));
            break;

          case 2:
            o(_s.S.map((prove_1 = function (arg00__1) {
              return typeof arg00__1 === "boolean" ? arg00__1 : null;
            }, function (arg30__1) {
              return chain(absurdObj, _arg2.data[0], prove_1, arg30__1);
            }), _arg2.data[1]));
            break;

          case 3:
            o(_s.S.map((prove_2 = function (arg00__2) {
              return typeof arg00__2 === "object" && arg00__2 != null ? arg00__2 : null;
            }, function (arg30__2) {
              return chain(absurdObj, _arg2.data[0], prove_2, arg30__2);
            }), _arg2.data[1]));
            break;

          case 4:
            o(_s.S.map((prove_3 = function (arg00__3) {
              return Array.isArray(arg00__3) ? arg00__3 : null;
            }, function (arg30__3) {
              return chain(absurdObj, _arg2.data[0], prove_3, arg30__3);
            }), _arg2.data[1]));
            break;

          default:
            o(_s.S.map((prove_4 = function (arg00__4) {
              return typeof arg00__4 === "string" ? arg00__4 : null;
            }, function (arg30__4) {
              return chain(absurdObj, _arg2.data[0], prove_4, arg30__4);
            }), _arg2.data[1]));
        }
      });
    };
  };

  return __exports;
}({});

function oTree(pith) {
  return _s.S.treeMerge(_s.S.empty(), _s.S.map(function (arg10_) {
    return Impl.makeRing(function () {
      return {};
    }, arg10_);
  }, pith));
}

function aTree(pith) {
  return _s.S.treeMerge(_s.S.empty(), _s.S.map(function (arg10_) {
    return Impl.makeRing(function () {
      return [];
    }, arg10_);
  }, pith));
}