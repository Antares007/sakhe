"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Patch = exports.PNode = exports.AP = undefined;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Option = require("./fable-core/Option");

var _m = require("./m");

var _Seq = require("./fable-core/Seq");

var _a = require("./a");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AP {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.PNode.AP",
      interfaces: ["FSharpUnion"],
      cases: [["AP", (0, _Util.Function)([_Util.Unit, (0, _Util.GenericParam)("a")]), (0, _Util.Function)([(0, _Util.Interface)("Fable.Import.Browser.Node"), "boolean"])]]
    };
  }

}

exports.AP = AP;
(0, _Symbol2.setType)("Sakhe.PNode.AP", AP);

class PNode {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.PNode.PNode",
      interfaces: ["FSharpUnion"],
      cases: [["PNode", (0, _Util.makeGeneric)(AP, {
        a: (0, _Util.Interface)("Fable.Import.Browser.Node")
      }), _Util.Any]]
    };
  }

}

exports.PNode = PNode;
(0, _Symbol2.setType)("Sakhe.PNode.PNode", PNode);

const Patch = exports.Patch = function (__exports) {
  const once = __exports.once = function (f) {
    return function makeOnce(f) {
      var b;
      return function once(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(f);
  };

  const combine = __exports.combine = function (_arg2, _arg1) {
    return function (n) {
      _arg1(n);

      _arg2(n);
    };
  };

  const apply = __exports.apply = function (n, _arg1) {
    _arg1(n);

    return n;
  };

  return __exports;
}({});

const Impl = function (__exports) {
  const tryFind = __exports.tryFind = function ($var4, $var5, $var6) {
    tryFind: while (true) {
      const f = $var4;
      const i = $var5;
      const nlist = $var6;

      if (i >= nlist.length) {
        return null;
      } else {
        const n = nlist[i];

        if (f(n)) {
          return n;
        } else {
          $var4 = f;
          $var5 = i + 1;
          $var6 = nlist;
          continue tryFind;
        }
      }
    }
  };

  const chain = __exports.chain = function (absurd, prove, index, _arg1) {
    return Patch.once(function (elm) {
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
          const matchValue = tryFind(prove, index, childNodes);

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

function tree(pith) {
  const ring = function (pith_1, o) {
    let c = 0;
    pith_1(function (_arg1) {
      const prove = _arg1.data[0].data[1];
      const a = _arg1.data[0].data[0];
      const index = c | 0;
      c = c + 1 | 0;
      o((0, _m.map)(function (arg20_) {
        return Impl.chain(a, prove, index, arg20_);
      }, _arg1.data[1]));
    });
    o((0, _m.now)(Patch.once(function (elm) {
      for (let i = elm.childNodes.length - 1; i >= c; i--) {
        elm.removeChild(elm.childNodes[i]), void 0;
      }
    })));
  };

  let deltac;
  let folder;

  const f = function (arg00_, arg10_) {
    return Patch.combine(arg00_, arg10_);
  };

  folder = function (arg10__1, arg20__1) {
    return (0, _m.combine)(f, arg10__1, arg20__1);
  };

  const state = (0, _m.now)(function (value) {
    value, void 0;
  });

  deltac = function (source) {
    return (0, _Seq.fold)(folder, state, source);
  };

  return (0, _m.tree)(deltac, (0, _m.map)(function (arg10__2) {
    return _a.Pith.map(ring, arg10__2);
  }, pith));
}