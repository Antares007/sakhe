"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PNode = undefined;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Seq = require("./fable-core/Seq");

var _m = require("./m");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PNode {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.PNode.PNode",
      interfaces: ["FSharpUnion"],
      cases: [["PNode", (0, _Util.Tuple)([(0, _Util.Function)([_Util.Unit, (0, _Util.Interface)("Fable.Import.Browser.Node")]), (0, _Util.Function)([(0, _Util.Interface)("Fable.Import.Browser.Node"), "boolean"])]), (0, _Util.Interface)("Most.IStream")]]
    };
  }

}

exports.PNode = PNode;
(0, _Symbol2.setType)("Sakhe.PNode.PNode", PNode);

const Impl = function (__exports) {
  const tryFind = __exports.tryFind = function ($var8, $var9, $var10) {
    tryFind: while (true) {
      const f = $var8;
      const i = $var9;
      const nlist = $var10;

      if (i >= nlist.length) {
        return null;
      } else {
        const n = nlist[i];

        if (f(n)) {
          return n;
        } else {
          $var8 = f;
          $var9 = i + 1;
          $var10 = nlist;
          continue tryFind;
        }
      }
    }
  };

  const chain = __exports.chain = function (absurd, prove, index, patch) {
    return (0, _CurriedLambda2.default)(function makeOnce(f) {
      var b;
      return function once(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function (elm) {
      const $var2 = function () {
        const b = absurd();
        patch(b);
        elm.insertBefore(b, elm.childNodes[index]);
      };

      const childNodes = elm.childNodes;

      if (index >= childNodes.length) {
        $var2();
      } else {
        const childAtIndex = childNodes[index];

        if (prove(childAtIndex)) {
          ($var1 => patch(function (value) {
            return value;
          }($var1)))(childAtIndex);
        } else {
          const matchValue = tryFind(prove, index, childNodes);

          if (matchValue == null) {
            $var2();
          } else {
            (function (tupledArg) {
              const b_1 = tupledArg[0];
              patch(b_1);
              elm.insertBefore(b_1, tupledArg[1]);
            })([(0, _Option.getValue)(matchValue), childAtIndex]);
          }
        }
      }
    }));
  };

  return __exports;
}({});

function tree(pith) {
  const ring = function (pith_1, o) {
    let c = 0;
    pith_1(function (_arg1) {
      const index = c | 0;
      c = c + 1 | 0;
      o(core.map((0, _CurriedLambda2.default)(function (patch) {
        return Impl.chain(_arg1.data[0][0], _arg1.data[0][1], index, patch);
      }), _arg1.data[1]));
    });
    o(core.now(function makeOnce(f) {
      var b;
      return function once(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function (elm) {
      for (let i = elm.childNodes.length - 1; i >= c; i--) {
        elm.removeChild(elm.childNodes[i]);
      }
    })));
  };

  let deltac;
  let folder;

  const arg00_ = function (p0, p, e) {
    p(e);
    p0(e);
  };

  folder = function (arg10_, arg20_) {
    return core.combine(($var3, $var4) => $var5 => {
      arg00_($var3, $var4, $var5);
    }, arg10_, arg20_);
  };

  const state = core.now(function (value) {
    value;
  });

  deltac = function (source) {
    return (0, _Seq.fold)(folder, state, source);
  };

  return (0, _m.tree)(deltac, core.map($var6 => $var7 => {
    ring($var6, $var7);
  }, pith));
}