"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RValue = undefined;
exports.objectTree = objectTree;
exports.arrayTree = arrayTree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Option = require("./fable-core/Option");

var _m = require("./m");

var _Seq = require("./fable-core/Seq");

var _a = require("./a");

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

const Impl = function (__exports) {
  const chain = __exports.chain = function (absurd, key, prove, r, o) {
    if (o == null) {
      const o_1 = absurd();
      const a = r(null);
      o_1[key] = a;
      return o_1;
    } else {
      const o_2 = (0, _Option.getValue)(o);
      const x = o_2[key];
      const a_1 = r(prove(x));

      if (x === a_1) {
        return o_2;
      } else {
        const oClone = Object.assign(absurd(), o_2);
        oClone[key] = a_1;
        return oClone;
      }
    }
  };

  const ring = __exports.ring = function (absurdObj, pith, o) {
    pith(function (_arg1) {
      switch (_arg1.tag) {
        case 1:
          return o((0, _m.map)($var1 => $var2 => {
            var prove;
            return (prove = function (arg00_) {
              return typeof arg00_ === "number" ? arg00_ : null;
            }, function (r, o_1) {
              return chain(absurdObj, _arg1.data[0], prove, r, o_1);
            })($var1, $var2);
          }, _arg1.data[1]));

        case 2:
          return o((0, _m.map)($var3 => $var4 => {
            var prove_1;
            return (prove_1 = function (arg00__1) {
              return typeof arg00__1 === "boolean" ? arg00__1 : null;
            }, function (r_1, o_2) {
              return chain(absurdObj, _arg1.data[0], prove_1, r_1, o_2);
            })($var3, $var4);
          }, _arg1.data[1]));

        case 3:
          return o((0, _m.map)($var5 => $var6 => {
            var prove_2;
            return (prove_2 = function (arg00__2) {
              return typeof arg00__2 === "object" && arg00__2 != null ? arg00__2 : null;
            }, function (r_2, o_3) {
              return chain(absurdObj, _arg1.data[0], prove_2, r_2, o_3);
            })($var5, $var6);
          }, _arg1.data[1]));

        case 4:
          return o((0, _m.map)($var7 => $var8 => {
            var prove_3;
            return (prove_3 = function (arg00__3) {
              return Array.isArray(arg00__3) ? arg00__3 : null;
            }, function (r_3, o_4) {
              return chain(absurdObj, _arg1.data[0], prove_3, r_3, o_4);
            })($var7, $var8);
          }, _arg1.data[1]));

        default:
          return o((0, _m.map)($var9 => $var10 => {
            var prove_4;
            return (prove_4 = function (arg00__4) {
              return typeof arg00__4 === "string" ? arg00__4 : null;
            }, function (r_4, o_5) {
              return chain(absurdObj, _arg1.data[0], prove_4, r_4, o_5);
            })($var9, $var10);
          }, _arg1.data[1]));
      }
    });
  };

  return __exports;
}({});

function objectTree(pith) {
  var f;

  const deltac = function (list) {
    return (0, _Seq.fold)(function (a, b) {
      return (0, _m.merge)(b, a);
    }, (0, _m.empty)(), list);
  };

  return (0, _m.tree)(deltac, (0, _m.map)((f = function (pith_1, o) {
    Impl.ring(function () {
      return {};
    }, pith_1, o);
  }, function (arg10_) {
    return (0, _a.pmap)(f, arg10_);
  }), pith));
}

function arrayTree(pith) {
  var f;

  const deltac = function (list) {
    return (0, _Seq.fold)(function (a, b) {
      return (0, _m.merge)(b, a);
    }, (0, _m.empty)(), list);
  };

  return (0, _m.tree)(deltac, (0, _m.map)((f = function (pith_1, o) {
    Impl.ring(function () {
      return [];
    }, pith_1, o);
  }, function (arg10_) {
    return (0, _a.pmap)(f, arg10_);
  }), pith));
}