"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.o = undefined;
exports.absurdObj = absurdObj;
exports.proveObj = proveObj;
exports.otree = otree;

var _dom = require("./dom2");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Seq = require("./fable-core/Seq");

var _Map = require("./fable-core/Map");

var _m = require("./m");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_dom.run);

function setKey(_arg3, _arg2, _arg1) {
  throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
}

function absurdObj() {
  return {};
}

function proveObj(_arg1) {
  return true;
}

function otree(pith) {
  const ring = function (pith_1, o) {
    return pith_1({
      ONode(key, r) {
        throw new Error("ni");
      },

      ANode(key, r) {
        throw new Error("ni");
      },

      Value(key, absurd, prove, r) {
        o([key, absurd(), arg00 => prove(arg00), core.map($var1 => $var2 => ((r_1, o_1) => {
          const x = o_1.key;
          const oa = (arg00_1 => prove(arg00_1))(x) ? x : absurd();
          const na = r_1(oa);
          return setKey(key, na, o_1);
        })($var1, $var2), r)]);
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.State.IObject"]
        };
      }

    });
  };

  const deltac = function (xs) {
    return (0, _Seq.fold)(function (rez, grp) {
      return function (arg10_) {
        return core.merge(rez, arg10_);
      }((0, _Seq.fold)(function (tupledArg, tupledArg_1) {
        return tupledArg[1](tupledArg_1[1]) ? [core.merge(tupledArg[0], tupledArg_1[3]), tupledArg_1[2]] : [tupledArg[0], tupledArg[1]];
      }, [core.empty(), function (_arg5) {
        return true;
      }], grp[1])[0]);
    }, core.empty(), (0, _Map.groupBy)(function (tupledArg_2) {
      return tupledArg_2[0];
    }, xs));
  };

  return (0, _m.tree)(deltac, core.map($var3 => $var4 => ring($var3, $var4), pith));
}

const o = exports.o = [];