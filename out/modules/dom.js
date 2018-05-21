"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disposeWith = disposeWith;
exports.tree = tree;

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _disposable = require("@most/disposable");

var disposable = _interopRequireWildcard(_disposable);

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _Seq = require("./fable-core/Seq");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _m = require("./m");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function tryFind($var16, $var17, $var18) {
  tryFind: while (true) {
    const f = $var16;
    const i = $var17;
    const nlist = $var18;

    if (i >= nlist.length) {
      return null;
    } else {
      const n = nlist[i];

      if (f(n)) {
        return n;
      } else {
        $var16 = f;
        $var17 = i + 1;
        $var18 = nlist;
        continue tryFind;
      }
    }
  }
}

function chain(absurd, prove, index, patch, elm) {
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
}

function disposeWith(f, s) {
  return core.newStream(function (sink, scheduler) {
    const d = core.run(sink, scheduler, s);
    return disposable.disposeWith(function () {
      d.dispose();
      f();
    }, null);
  });
}

function tree(pith) {
  const ring = function (pith_1, o) {
    let counter = 0;
    pith_1({
      Node(_arg1, pith_2) {
        const index = counter | 0;
        counter = counter + 1 | 0;

        ($var5 => {
          var arg00_;
          return o((arg00_ = (patch, elm) => {
            chain(_arg1[0], _arg1[1], index, patch, elm);
          }, arg10_ => core.map($var3 => $var4 => {
            arg00_($var3, $var4);
          }, arg10_))($var5));
        })(tree(pith_2));
      },

      Leaf(_arg2, s) {
        const index = counter | 0;
        counter = counter + 1 | 0;

        ($var8 => {
          var arg00_;
          return o((arg00_ = (patch, elm) => {
            chain(_arg2[0], _arg2[1], index, patch, elm);
          }, arg10_ => core.map($var6 => $var7 => {
            arg00_($var6, $var7);
          }, arg10_))($var8));
        })(s);
      },

      Patch(s) {
        ($var11 => {
          var arg00_;
          return o((arg00_ = (patch, elm) => {
            patch(elm);
          }, arg10_ => core.map($var9 => $var10 => {
            arg00_($var9, $var10);
          }, arg10_))($var11));
        })(s);
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.Dom.IElm"]
        };
      }

    });
  };

  const deltaC = function (rays) {
    const restore = {
      contents: function () {}
    };

    const makeRestore = function makeOnce(f) {
      var b;
      return function onceAtoBtoAtoB(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }((0, _CurriedLambda2.default)(function (elm) {
      const childNodes = elm.childNodes;
      const oldNodes = [...childNodes];
      return function () {
        const ref = childNodes[0];

        for (let i = 0; i <= oldNodes.length - 1; i++) {
          elm.insertBefore(oldNodes[i], ref), void 0;
        }

        for (let i_1 = oldNodes.length; i_1 <= childNodes.length - 1; i_1++) {
          elm.removeChild(childNodes[i_1]), void 0;
        }
      };
    }));

    return disposeWith(function () {
      const d = restore.contents;
      d();
    }, core.map($var12 => $var13 => {
      (function (patches, elm_1) {
        restore.contents = (0, _CurriedLambda2.default)(makeRestore)(elm_1);
        (0, _Seq.iterate)(function (patch) {
          patch(elm_1);
        }, patches);

        for (let i_2 = patches.length; i_2 <= elm_1.childNodes.length - 1; i_2++) {
          elm_1.removeChild(elm_1.childNodes[i_2]), void 0;
        }
      })($var12, $var13);
    }, (0, _Seq.fold)(function (ls, rs) {
      return core.combine(function (l, r) {
        return new _List2.default(r, l);
      }, ls, core.map((0, _CurriedLambda2.default)(function (arg00_) {
        return function makeOnce(f) {
          var b;
          return function onceAtoBtoAtoB(a) {
            if (f) {
              b = f.call(this, a);
              f = null;
            }

            return b;
          };
        }(arg00_);
      }), rs));
    }, core.now(new _List2.default()), rays)));
  };

  return (0, _m.tree)(deltaC, core.map($var14 => $var15 => {
    ring($var14, $var15);
  }, pith));
}