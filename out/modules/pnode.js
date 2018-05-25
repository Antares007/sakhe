"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ray = exports.AP = undefined;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _patch = require("./patch");

var _Option = require("./fable-core/Option");

var _stream = require("./stream");

var _Seq = require("./fable-core/Seq");

var _m = require("./m");

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

class Ray {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.PNode.Ray",
      interfaces: ["FSharpUnion"],
      cases: [["RNode", _Util.Any, _Util.Any, _Util.Any]]
    };
  }

}

exports.Ray = Ray;
(0, _Symbol2.setType)("Sakhe.PNode.Ray", Ray);

const Impl = function (__exports) {
  const tryFind = __exports.tryFind = function ($var3, $var4, $var5) {
    tryFind: while (true) {
      const f = $var3;
      const i = $var4;
      const nlist = $var5;

      if (i >= nlist.length) {
        return null;
      } else {
        const n = nlist[i];

        if (f(n)) {
          return n;
        } else {
          $var3 = f;
          $var4 = i + 1;
          $var5 = nlist;
          continue tryFind;
        }
      }
    }
  };

  const chain = __exports.chain = function (absurd, prove, index, _arg1) {
    return _patch.Patch.once(function (elm) {
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
      const prove = _arg1.data[1];
      const a = _arg1.data[0];

      const prove_1 = function (n) {
        const matchValue = prove(n);

        if (matchValue == null) {
          return false;
        } else {
          return true;
        }
      };

      const index = c | 0;
      c = c + 1 | 0;
      o(_stream.S.map(function (arg20_) {
        return Impl.chain(a, prove_1, index, arg20_);
      }, _arg1.data[2]));
    });
    o(_stream.S.now(_patch.Patch.once(function (elm) {
      for (let i = elm.childNodes.length - 1; i >= c; i--) {
        elm.removeChild(elm.childNodes[i]), void 0;
      }
    })));
  };

  let deltac;
  let folder;

  const f = function (arg00_, arg10_) {
    return _patch.Patch.combine(arg00_, arg10_);
  };

  folder = function (arg10__1, arg20__1) {
    return _stream.S.combine(f, arg10__1, arg20__1);
  };

  const state = _stream.S.now(function (value) {
    value, void 0;
  });

  deltac = function (source) {
    return (0, _Seq.fold)(folder, state, source);
  };

  return (0, _m.tree)(deltac, _stream.S.map(function (arg10__2) {
    return _a.Pith.map(ring, arg10__2);
  }, pith));
}