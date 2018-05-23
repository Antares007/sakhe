"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RValue = undefined;
exports.oTree = oTree;
exports.aTree = aTree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Seq = require("./fable-core/Seq");

var _m = require("./m");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RValue {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.State2.RValue",
      interfaces: ["FSharpUnion", "System.IEquatable"],
      cases: [["RString", (0, _Util.Interface)("Most.IStream")], ["RNumber", (0, _Util.Interface)("Most.IStream")], ["RBool", (0, _Util.Interface)("Most.IStream")], ["RObject", (0, _Util.Interface)("Most.IStream")], ["RArray", (0, _Util.Interface)("Most.IStream")]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

}

exports.RValue = RValue;
(0, _Symbol2.setType)("Sakhe.State2.RValue", RValue);

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

  return __exports;
}({});

function oTree(pith) {
  const ring = function (pith_1, o) {
    pith_1(function (_arg1) {
      if (_arg1[1].tag === 1) {
        const r = _arg1[1].data;
        o(core.map($var1 => $var2 => {
          var absurd;
          var prove;
          return (absurd = function () {
            return {};
          }, prove = function (arg00__1) {
            return typeof arg00__1 === "number" ? arg00__1 : null;
          }, function (r_1, o_1) {
            return Impl.chain(absurd, _arg1[0], prove, r_1, o_1);
          })($var1, $var2);
        }, r));
      } else if (_arg1[1].tag === 2) {
        const r_2 = _arg1[1].data;
        o(core.map($var3 => $var4 => {
          var absurd_1;
          var prove_1;
          return (absurd_1 = function () {
            return {};
          }, prove_1 = function (arg00__3) {
            return typeof arg00__3 === "boolean" ? arg00__3 : null;
          }, function (r_3, o_2) {
            return Impl.chain(absurd_1, _arg1[0], prove_1, r_3, o_2);
          })($var3, $var4);
        }, r_2));
      } else if (_arg1[1].tag === 3) {
        const r_4 = _arg1[1].data;
        o(core.map($var5 => $var6 => {
          var absurd_2;
          var prove_2;
          return (absurd_2 = function () {
            return {};
          }, prove_2 = function (arg00__5) {
            return typeof arg00__5 === "object" && arg00__5 != null ? arg00__5 : null;
          }, function (r_5, o_3) {
            return Impl.chain(absurd_2, _arg1[0], prove_2, r_5, o_3);
          })($var5, $var6);
        }, oTree(r_4)));
      } else if (_arg1[1].tag === 4) {
        const r_6 = _arg1[1].data;
        o(core.map($var7 => $var8 => {
          var absurd_3;
          var prove_3;
          return (absurd_3 = function () {
            return {};
          }, prove_3 = function (arg00__7) {
            return Array.isArray(arg00__7) ? arg00__7 : null;
          }, function (r_7, o_4) {
            return Impl.chain(absurd_3, _arg1[0], prove_3, r_7, o_4);
          })($var7, $var8);
        }, aTree(r_6)));
      } else {
        const r_8 = _arg1[1].data;
        o(core.map($var9 => $var10 => {
          var absurd_4;
          var prove_4;
          return (absurd_4 = function () {
            return {};
          }, prove_4 = function (arg00__9) {
            return typeof arg00__9 === "string" ? arg00__9 : null;
          }, function (r_9, o_5) {
            return Impl.chain(absurd_4, _arg1[0], prove_4, r_9, o_5);
          })($var9, $var10);
        }, r_8));
      }
    });
  };

  const deltac = function (list) {
    return (0, _Seq.fold)(core.merge.bind(core), core.empty(), list);
  };

  return (0, _m.tree)(deltac, core.map($var11 => $var12 => {
    ring($var11, $var12);
  }, pith));
}

function aTree(pith) {
  const ring = function (pith_1, o) {
    pith_1(function (_arg2) {
      if (_arg2[1].tag === 1) {
        const r = _arg2[1].data;
        o(core.map($var13 => $var14 => {
          var absurd;
          var prove;
          return (absurd = function () {
            return [];
          }, prove = function (arg00__1) {
            return typeof arg00__1 === "number" ? arg00__1 : null;
          }, function (r_1, o_1) {
            return Impl.chain(absurd, _arg2[0], prove, r_1, o_1);
          })($var13, $var14);
        }, r));
      } else if (_arg2[1].tag === 2) {
        const r_2 = _arg2[1].data;
        o(core.map($var15 => $var16 => {
          var absurd_1;
          var prove_1;
          return (absurd_1 = function () {
            return [];
          }, prove_1 = function (arg00__3) {
            return typeof arg00__3 === "boolean" ? arg00__3 : null;
          }, function (r_3, o_2) {
            return Impl.chain(absurd_1, _arg2[0], prove_1, r_3, o_2);
          })($var15, $var16);
        }, r_2));
      } else if (_arg2[1].tag === 3) {
        const r_4 = _arg2[1].data;
        o(core.map($var17 => $var18 => {
          var absurd_2;
          var prove_2;
          return (absurd_2 = function () {
            return [];
          }, prove_2 = function (arg00__5) {
            return typeof arg00__5 === "object" && arg00__5 != null ? arg00__5 : null;
          }, function (r_5, o_3) {
            return Impl.chain(absurd_2, _arg2[0], prove_2, r_5, o_3);
          })($var17, $var18);
        }, oTree(r_4)));
      } else if (_arg2[1].tag === 4) {
        const r_6 = _arg2[1].data;
        o(core.map($var19 => $var20 => {
          var absurd_3;
          var prove_3;
          return (absurd_3 = function () {
            return [];
          }, prove_3 = function (arg00__7) {
            return Array.isArray(arg00__7) ? arg00__7 : null;
          }, function (r_7, o_4) {
            return Impl.chain(absurd_3, _arg2[0], prove_3, r_7, o_4);
          })($var19, $var20);
        }, aTree(r_6)));
      } else {
        const r_8 = _arg2[1].data;
        o(core.map($var21 => $var22 => {
          var absurd_4;
          var prove_4;
          return (absurd_4 = function () {
            return [];
          }, prove_4 = function (arg00__9) {
            return typeof arg00__9 === "string" ? arg00__9 : null;
          }, function (r_9, o_5) {
            return Impl.chain(absurd_4, _arg2[0], prove_4, r_9, o_5);
          })($var21, $var22);
        }, r_8));
      }
    });
  };

  const deltac = function (list) {
    return (0, _Seq.fold)(core.merge.bind(core), core.empty(), list);
  };

  return (0, _m.tree)(deltac, core.map($var23 => $var24 => {
    ring($var23, $var24);
  }, pith));
}