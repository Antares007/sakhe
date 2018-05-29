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
  const tryFind = __exports.tryFind = function ($var9, $var10, $var11) {
    tryFind: while (true) {
      const prove = $var9;
      const i = $var10;
      const nlist = $var11;

      if (i >= nlist.length) {
        return null;
      } else {
        const n = nlist[i];

        if (prove(n)) {
          return n;
        } else {
          $var9 = prove;
          $var10 = i + 1;
          $var11 = nlist;
          continue tryFind;
        }
      }
    }
  };

  const chain = __exports.chain = function (absurd, prove, index, _arg1) {
    return _p.P.once(function (elm) {
      const $var2 = function () {
        const b = absurd();

        _arg1(b);

        elm.insertBefore(b, elm.childNodes[index]), void 0;
      };

      const childNodes = elm.childNodes;

      if (index >= childNodes.length) {
        $var2();
      } else {
        const childAtIndex = childNodes[index];

        if (prove(childAtIndex)) {
          ($var1 => _arg1(function (value) {
            return value;
          }($var1)))(childAtIndex);
        } else {
          const matchValue = tryFind(prove, index + 1, childNodes);

          if (matchValue == null) {
            $var2();
          } else {
            (function (tupledArg) {
              const b_1 = tupledArg[0];

              _arg1(b_1);

              elm.insertBefore(b_1, tupledArg[1]), void 0;
            })([(0, _Option.getValue)(matchValue), childAtIndex]);
          }
        }
      }
    });
  };

  return __exports;
}({});

function ring(_arg1) {
  return function (o) {
    let c = 0;

    _arg1(function (_arg2) {
      const index = c | 0;
      c = c + 1 | 0;

      ($var3 => {
        var f;
        return o((f = function (arg30_) {
          return Impl.chain(_arg2.data[0], _arg2.data[1], index, arg30_);
        }, function (arg10_) {
          return _s.S.map(f, arg10_);
        })($var3));
      })(_arg2.data[2]);
    });

    ($var5 => ($var4 => o(_s.S.now.bind(_s.S)($var4)))(_p.P.once.bind(_p.P)($var5)))(function (elm) {
      for (let i = elm.childNodes.length - 1; i >= c; i--) {
        elm.removeChild(elm.childNodes[i]), void 0;
      }
    });
  };
}

function tree(s, pith) {
  return _p.P.tree(s, _s.S.map(ring, pith));
}