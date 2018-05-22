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

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

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
  const tryFind = __exports.tryFind = function ($var11, $var12, $var13) {
    tryFind: while (true) {
      const f = $var11;
      const i = $var12;
      const nlist = $var13;

      if (i >= nlist.length) {
        return null;
      } else {
        const n = nlist[i];

        if (f(n)) {
          return n;
        } else {
          $var11 = f;
          $var12 = i + 1;
          $var13 = nlist;
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
    pith_1(function (_arg1) {
      if (_arg1.tag === 1) {
        const index = c | 0;
        c = c + 1 | 0;
        o(core.map($var3 => $var4 => {
          (function (patch, elm) {
            Impl.chain(_arg1.data[0][0], _arg1.data[0][1], index, patch, elm);
          })($var3, $var4);
        }, _arg1.data[1]));
      } else {
        const index_1 = c | 0;
        c = c + 1 | 0;
        o(core.map($var5 => $var6 => {
          (function (patch_1, elm_1) {
            Impl.chain(_arg1.data[0][0], _arg1.data[0][1], index_1, patch_1, elm_1);
          })($var5, $var6);
        }, tree(_arg1.data[1])));
      }
    });
  };

  const deltac = function (rs) {
    return core.map($var7 => $var8 => {
      (function (patches, elm_2) {
        (0, _Seq.iterate)(function (patch_2) {
          patch_2(elm_2);
        }, patches);

        for (let i = patches.length; i <= elm_2.childNodes.length - 1; i++) {
          elm_2.removeChild(elm_2.childNodes[i]), void 0;
        }
      })($var7, $var8);
    }, (0, _Seq.fold)(function (ls, rs_1) {
      return core.combine(function (l, r) {
        return new _List2.default(r, l);
      }, ls, core.map((0, _CurriedLambda2.default)(function (arg00_) {
        return function makeOnce(f) {
          var b;
          return function once(a) {
            if (f) {
              b = f.call(this, a);
              f = null;
            }

            return b;
          };
        }(arg00_);
      }), rs_1));
    }, core.now(new _List2.default()), rs));
  };

  return (0, _m.tree)(deltac, core.map($var9 => $var10 => {
    ring($var9, $var10);
  }, pith));
}