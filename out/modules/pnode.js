"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pnode = pnode;
exports.ring = ring;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _p = require("./p");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _Option = require("./fable-core/Option");

var _s = require("./s");

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
      cases: [["PNode", (0, _Util.Function)([_Util.Unit, (0, _Util.Interface)("Fable.Import.Browser.Node")]), (0, _Util.Function)([(0, _Util.Interface)("Fable.Import.Browser.Node"), "boolean"]), _Util.Any]]
    };
  }

}

(0, _Symbol2.setType)("Sakhe.PNode.PNode", PNode);

function pnode(a, p, s) {
  return new PNode(0, [a, p, s]);
}

const Impl = function (__exports) {
  const tryFind = __exports.tryFind = function ($var12, $var13, $var14) {
    tryFind: while (true) {
      const prove = $var12;
      const i = $var13;
      const nlist = $var14;

      if (i >= nlist.length) {
        return null;
      } else {
        const n = nlist[i];

        if (prove(n)) {
          return n;
        } else {
          $var12 = prove;
          $var13 = i + 1;
          $var14 = nlist;
          continue tryFind;
        }
      }
    }
  };

  const chain = __exports.chain = function (absurd, prove, index, _arg1) {
    return _p.P.once((0, _CurriedLambda2.default)(function (elm) {
      const $var5 = function () {
        const b = absurd();
        (0, _CurriedLambda2.default)(_arg1)(b), void 0;
        elm.insertBefore(b, elm.childNodes[index]), void 0;
      };

      const childNodes = elm.childNodes;

      if (index >= childNodes.length) {
        $var5();
      } else {
        const childAtIndex = childNodes[index];

        if (prove(childAtIndex)) {
          ($var4 => function (value_1) {
            value_1, void 0;
          }(($var3 => ($var1 => () => {
            _arg1($var1, null);
          })(function (value) {
            return value;
          }($var3)))($var4)))(childAtIndex);
        } else {
          const matchValue = tryFind(prove, index + 1, childNodes);

          if (matchValue == null) {
            $var5();
          } else {
            (function (tupledArg) {
              const b_1 = tupledArg[0];
              (0, _CurriedLambda2.default)(_arg1)(b_1), void 0;
              elm.insertBefore(b_1, tupledArg[1]), void 0;
            })([(0, _Option.getValue)(matchValue), childAtIndex]);
          }
        }
      }

      return function () {};
    }));
  };

  return __exports;
}({});

function ring(_arg1) {
  return function (o) {
    let c = 0;

    _arg1(function (_arg2) {
      const index = c | 0;
      c = c + 1 | 0;

      ($var6 => {
        var f;
        return o((f = function (arg30_) {
          return Impl.chain(_arg2.data[0], _arg2.data[1], index, arg30_);
        }, function (arg10_) {
          return _s.S.map(f, arg10_);
        })($var6));
      })(_arg2.data[2]);
    });

    ($var8 => ($var7 => o(_s.S.now.bind(_s.S)($var7)))(_p.P.once.bind(_p.P)($var8)))((0, _CurriedLambda2.default)(function (elm) {
      for (let i = elm.childNodes.length - 1; i >= c; i--) {
        elm.removeChild(elm.childNodes[i]), void 0;
      }

      return function () {};
    }));
  };
}

function tree(s, pith) {
  return _p.P.tree(s, _s.S.map(ring, pith));
}