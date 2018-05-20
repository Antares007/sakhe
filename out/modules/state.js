"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.o = undefined;
exports.otree = otree;

var _dom = require("./dom2");

var _Map = require("./fable-core/Map");

var _Comparer = require("./fable-core/Comparer");

var _Comparer2 = _interopRequireDefault(_Comparer);

var _Util = require("./fable-core/Util");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _m = require("./m");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_dom.run);

function setKey(_arg3, _arg2, _arg1) {
  throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
}

function otree(pith) {
  const ring = function (pith_1, o) {
    let rMap = (0, _Map.create)(null, new _Comparer2.default(_Util.comparePrimitives));
    pith_1({
      ONode(key, r) {
        throw new Error("ni");
      },

      ANode(key, r) {
        throw new Error("ni");
      },

      Value(key, absurd, prove, r) {
        const r_2 = core.map($var1 => $var2 => ((r_1, o_1) => {
          const x = o_1.key;
          const oa = (arg00 => prove(arg00))(x) ? x : absurd();
          const na = r_1(oa);
          return setKey(key, na, o_1);
        })($var1, $var2), r);
        rMap = (0, _Map.add)(key, r_2, rMap);
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.State.IObject"]
        };
      }

    });
    (0, _Map.iterate)(function (_arg1, r) {
      o(r);
    }, rMap);
  };

  const deltac = function (xs) {
    throw new Error("ni");
  };

  return (0, _m.tree)(deltac, core.map($var3 => $var4 => {
    ring($var3, $var4);
  }, pith));
}

const o = exports.o = [];