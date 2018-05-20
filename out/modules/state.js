"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.o = undefined;
exports.otree = otree;

var _dom = require("./dom2");

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _m = require("./m");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_dom.run);

function otree(pith) {
  const ring = function (pith_1, o) {
    return pith_1({
      ONode(key, r) {
        throw new Error("ni");
      },

      ANode(key, r) {
        throw new Error("ni");
      },

      Value(key, absurd, pove, r) {
        throw new Error("ni");
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.State.IObject"]
        };
      }

    });
  };

  const deltac = function (xs) {
    throw new Error("ni");
  };

  return (0, _m.tree)(deltac, core.map($var1 => $var2 => ring($var1, $var2), pith));
}

const o = exports.o = [];