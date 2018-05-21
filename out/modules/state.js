"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = chain;
exports.absurdObj = absurdObj;
exports.absurdArray = absurdArray;
exports.oTree = oTree;
exports.aTree = aTree;

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Seq = require("./fable-core/Seq");

var _m = require("./m");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function chain(key, absurd, prove, r, o) {
  if (o == null) {
    return Object.assign(absurd(), absurd(), {
      [key]: r(null)
    });
  } else {
    const x = (0, _Option.getValue)(o)[key];
    return Object.assign(absurd(), (0, _Option.getValue)(o), {
      [key]: r(prove(x) ? (0, _Option.makeSome)(x) : null)
    });
  }
}

function absurdObj() {
  return {};
}

function absurdArray() {
  return [];
}

function oTree(pith) {
  const ring = function (pith_1, o) {
    pith_1(function (key) {
      return {
        JString(r) {
          o(core.map($var1 => $var2 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "string", (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var1, $var2);
          }, r));
        },

        JNumber(r) {
          o(core.map($var3 => $var4 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "number", (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var3, $var4);
          }, r));
        },

        JBool(r) {
          o(core.map($var5 => $var6 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "boolean", (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var5, $var6);
          }, r));
        },

        JObject(r) {
          o(core.map($var7 => $var8 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "object" && arg00_ != null, (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var7, $var8);
          }, oTree(r)));
        },

        JArray(r) {
          o(core.map($var9 => $var10 => {
            var prove;
            return (prove = arg00_ => Array.isArray(arg00_), (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var9, $var10);
          }, aTree(r)));
        },

        [_Symbol3.default.reflection]() {
          return {
            interfaces: ["Sakhe.State.IJValueRay"]
          };
        }

      };
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
    let c = 0;

    const cpp = function () {
      const index = c | 0;
      c = c + 1 | 0;
      return index | 0;
    };

    pith_1({
      JString(r) {
        (key => {
          o(core.map($var13 => $var14 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "string", (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var13, $var14);
          }, r));
        })(cpp());
      },

      JNumber(r) {
        (key => {
          o(core.map($var15 => $var16 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "number", (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var15, $var16);
          }, r));
        })(cpp());
      },

      JBool(r) {
        (key => {
          o(core.map($var17 => $var18 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "boolean", (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var17, $var18);
          }, r));
        })(cpp());
      },

      JObject(r) {
        (key => {
          o(core.map($var19 => $var20 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "object" && arg00_ != null, (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var19, $var20);
          }, oTree(r)));
        })(cpp());
      },

      JArray(r) {
        (key => {
          o(core.map($var21 => $var22 => {
            var prove;
            return (prove = arg00_ => Array.isArray(arg00_), (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var21, $var22);
          }, aTree(r)));
        })(cpp());
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.State.IJValueRay"]
        };
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