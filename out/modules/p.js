"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = undefined;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Seq = require("./fable-core/Seq");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _m = require("./m");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Dom {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.P.Dom",
      interfaces: ["FSharpUnion"],
      cases: [["Node", (0, _Util.Tuple)([(0, _Util.Function)([_Util.Unit, (0, _Util.Interface)("Fable.Import.Browser.Element")]), (0, _Util.Function)([(0, _Util.Interface)("Fable.Import.Browser.Node"), "boolean"])]), (0, _Util.Interface)("Most.IStream")], ["Leaf", (0, _Util.Tuple)([(0, _Util.Function)([_Util.Unit, (0, _Util.Interface)("Fable.Import.Browser.CharacterData")]), (0, _Util.Function)([(0, _Util.Interface)("Fable.Import.Browser.Node"), "boolean"])]), (0, _Util.Interface)("Most.IStream")]]
    };
  }

}

exports.Dom = Dom;
(0, _Symbol2.setType)("Sakhe.P.Dom", Dom);

const Impl = function (__exports) {
  const tryFind = __exports.tryFind = function ($var13, $var14, $var15) {
    tryFind: while (true) {
      const f = $var13;
      const i = $var14;
      const nlist = $var15;

      if (i >= nlist.length) {
        return null;
      } else {
        const n = nlist[i];

        if (f(n)) {
          return n;
        } else {
          $var13 = f;
          $var14 = i + 1;
          $var15 = nlist;
          continue tryFind;
        }
      }
    }
  };

  const chain = __exports.chain = function (absurd, prove, index, patch, elm) {
    const $var2 = function () {
      const b = absurd();
      patch(b);
      elm.insertBefore(b, elm.childNodes[index]), void 0;
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
            elm.insertBefore(b_1, tupledArg[1]), void 0;
          })([(0, _Option.getValue)(matchValue), childAtIndex]);
        }
      }
    }
  };

  return __exports;
}({});

function tree(pith) {
  const ring = function (pith_1, o) {
    let c = 0;

    const chain_1 = function (ap, p) {
      const index = c | 0;
      c = c + 1 | 0;
      o(core.map($var3 => $var4 => {
        (function (patch, elm) {
          Impl.chain(ap[0], ap[1], index, patch, elm);
        })($var3, $var4);
      }, p));
    };

    pith_1(function (_arg1) {
      if (_arg1.tag === 1) {
        chain_1(_arg1.data[0], _arg1.data[1]);
      } else {
        chain_1(_arg1.data[0], _arg1.data[1]);
      }
    });

    ($var5 => o(core.now.bind(core)($var5)))(function (elm_1) {
      for (let i = elm_1.childNodes.length - 1; i >= c; i--) {
        elm_1.removeChild(elm_1.childNodes[i]), void 0;
      }
    });
  };

  const deltac = function (rs) {
    var arg00__1;
    var arg00__3;
    return (0, _Seq.fold)((arg00__1 = function (p0, p_1, e) {
      p_1(e);
      p0(e);
    }, function (arg10_, arg20_) {
      return core.combine(($var6, $var7) => $var8 => {
        arg00__1($var6, $var7, $var8);
      }, arg10_, arg20_);
    }), core.now(function (value) {
      value, void 0;
    }), (0, _Seq.map)((arg00__3 = (0, _CurriedLambda2.default)(function (arg00__2) {
      return function makeOnce(f) {
        var b;
        return function once(a) {
          if (f) {
            b = f.call(this, a);
            f = null;
          }

          return b;
        };
      }(arg00__2);
    }), function (arg10__1) {
      return core.map($var9 => $var10 => {
        arg00__3($var9, $var10);
      }, arg10__1);
    }), rs));
  };

  return (0, _m.tree)(deltac, core.map($var11 => $var12 => {
    ring($var11, $var12);
  }, pith));
}