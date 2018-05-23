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
      type: "Sakhe.State.RValue",
      interfaces: ["FSharpUnion", "System.IEquatable"],
      cases: [["RString", (0, _Util.GenericParam)("key"), (0, _Util.Interface)("Most.IStream")], ["RNumber", (0, _Util.GenericParam)("key"), (0, _Util.Interface)("Most.IStream")], ["RBool", (0, _Util.GenericParam)("key"), (0, _Util.Interface)("Most.IStream")], ["RObject", (0, _Util.GenericParam)("key"), (0, _Util.Interface)("Most.IStream")], ["RArray", (0, _Util.GenericParam)("key"), (0, _Util.Interface)("Most.IStream")]]
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

  return __exports;
}({});

function objectTree(pith) {
  const ring = function (pith_1, o) {
    pith_1(function (_arg1) {
      switch (_arg1.tag) {
        case 1:
          o(core.map($var1 => $var2 => {
            var prove;
            return (prove = function (arg00_) {
              return typeof arg00_ === "number" ? arg00_ : null;
            }, function (r, o_1) {
              return Impl.chain(function () {
                return {};
              }, _arg1.data[0], prove, r, o_1);
            })($var1, $var2);
          }, _arg1.data[1]));
          break;

        case 2:
          o(core.map($var3 => $var4 => {
            var prove_1;
            return (prove_1 = function (arg00__2) {
              return typeof arg00__2 === "boolean" ? arg00__2 : null;
            }, function (r_1, o_2) {
              return Impl.chain(function () {
                return {};
              }, _arg1.data[0], prove_1, r_1, o_2);
            })($var3, $var4);
          }, _arg1.data[1]));
          break;

        case 3:
          o(core.map($var5 => $var6 => {
            var prove_2;
            return (prove_2 = function (arg00__4) {
              return typeof arg00__4 === "object" && arg00__4 != null ? arg00__4 : null;
            }, function (r_2, o_3) {
              return Impl.chain(function () {
                return {};
              }, _arg1.data[0], prove_2, r_2, o_3);
            })($var5, $var6);
          }, _arg1.data[1]));
          break;

        case 4:
          o(core.map($var7 => $var8 => {
            var prove_3;
            return (prove_3 = function (arg00__6) {
              return Array.isArray(arg00__6) ? arg00__6 : null;
            }, function (r_3, o_4) {
              return Impl.chain(function () {
                return {};
              }, _arg1.data[0], prove_3, r_3, o_4);
            })($var7, $var8);
          }, _arg1.data[1]));
          break;

        default:
          o(core.map($var9 => $var10 => {
            var prove_4;
            return (prove_4 = function (arg00__8) {
              return typeof arg00__8 === "string" ? arg00__8 : null;
            }, function (r_4, o_5) {
              return Impl.chain(function () {
                return {};
              }, _arg1.data[0], prove_4, r_4, o_5);
            })($var9, $var10);
          }, _arg1.data[1]));
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

function arrayTree(pith) {
  const ring = function (pith_1, o) {
    pith_1(function (_arg1) {
      switch (_arg1.tag) {
        case 1:
          o(core.map($var13 => $var14 => {
            var prove;
            return (prove = function (arg00_) {
              return typeof arg00_ === "number" ? arg00_ : null;
            }, function (r, o_1) {
              return Impl.chain(function () {
                return [];
              }, _arg1.data[0], prove, r, o_1);
            })($var13, $var14);
          }, _arg1.data[1]));
          break;

        case 2:
          o(core.map($var15 => $var16 => {
            var prove_1;
            return (prove_1 = function (arg00__2) {
              return typeof arg00__2 === "boolean" ? arg00__2 : null;
            }, function (r_1, o_2) {
              return Impl.chain(function () {
                return [];
              }, _arg1.data[0], prove_1, r_1, o_2);
            })($var15, $var16);
          }, _arg1.data[1]));
          break;

        case 3:
          o(core.map($var17 => $var18 => {
            var prove_2;
            return (prove_2 = function (arg00__4) {
              return typeof arg00__4 === "object" && arg00__4 != null ? arg00__4 : null;
            }, function (r_2, o_3) {
              return Impl.chain(function () {
                return [];
              }, _arg1.data[0], prove_2, r_2, o_3);
            })($var17, $var18);
          }, _arg1.data[1]));
          break;

        case 4:
          o(core.map($var19 => $var20 => {
            var prove_3;
            return (prove_3 = function (arg00__6) {
              return Array.isArray(arg00__6) ? arg00__6 : null;
            }, function (r_3, o_4) {
              return Impl.chain(function () {
                return [];
              }, _arg1.data[0], prove_3, r_3, o_4);
            })($var19, $var20);
          }, _arg1.data[1]));
          break;

        default:
          o(core.map($var21 => $var22 => {
            var prove_4;
            return (prove_4 = function (arg00__8) {
              return typeof arg00__8 === "string" ? arg00__8 : null;
            }, function (r_4, o_5) {
              return Impl.chain(function () {
                return [];
              }, _arg1.data[0], prove_4, r_4, o_5);
            })($var21, $var22);
          }, _arg1.data[1]));
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