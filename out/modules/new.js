"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = undefined;
exports.ap2 = ap2;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Option = require("./fable-core/Option");

var _most = require("./most");

var _m = require("./m");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class T {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.Dom.T",
      interfaces: ["FSharpUnion"],
      cases: [["Absurd", (0, _Util.Function)([_Util.Unit, (0, _Util.GenericParam)("a")])], ["Prove", (0, _Util.Function)([(0, _Util.GenericParam)("a"), (0, _Util.Option)((0, _Util.GenericParam)("b"))])]]
    };
  }

}

exports.T = T;
(0, _Symbol2.setType)("Sakhe.Dom.T", T);

function ap2(fIndexOutOfBounds, fProvedNode, fFoundNode, fOtherNode, index, at, prove) {
  const matchValue = at(index);

  if (matchValue != null) {
    const matchValue_1 = prove((0, _Option.getValue)(matchValue));

    if (matchValue_1 == null) {
      const findNode = function (index_1) {
        findNode: while (true) {
          const matchValue_2 = at(index_1);

          if (matchValue_2 != null) {
            const matchValue_3 = prove((0, _Option.getValue)(matchValue_2));

            if (matchValue_3 == null) {
              index_1 = index_1 + 1;
              continue findNode;
            } else {
              return (0, _Option.makeSome)((0, _Option.getValue)(matchValue_3));
            }
          } else {
            return null;
          }
        }
      };

      const matchValue_4 = findNode(index + 1);

      if (matchValue_4 == null) {
        fOtherNode((0, _Option.getValue)(matchValue));
      } else {
        fFoundNode([(0, _Option.getValue)(matchValue_4), (0, _Option.getValue)(matchValue)]);
      }
    } else {
      fProvedNode((0, _Option.getValue)(matchValue_1));
    }
  } else {
    fIndexOutOfBounds();
  }
}

const disposable = _most.DisposableModule.require;

function tree(pith) {
  const ring = function (pith_1, o) {
    let c = 0;
    pith_1({
      Node(_arg1, pith_2) {
        const index = c | 0;
        c = c + 1 | 0;
        o(_m.most.map((0, _CurriedLambda2.default)(childNodePatch => function makeOnce(f) {
          var b;
          return function onceAtoBtoAtoB(a) {
            if (f) {
              b = f.call(this, a);
              f = null;
            }

            return b;
          };
        }(parentElement => {
          ap2(() => {
            const child = _arg1[0]();

            childNodePatch(child);
            parentElement.insertBefore(child, null), void 0;
          }, childNodePatch, tupledArg => {
            childNodePatch(tupledArg[0]);
            parentElement.insertBefore(tupledArg[0], tupledArg[1]), void 0;
          }, childAtIndex => {
            const child_1 = _arg1[0]();

            childNodePatch(child_1);
            parentElement.insertBefore(child_1, childAtIndex), void 0;
          }, index, i => i <= ~~parentElement.childNodes.length ? parentElement.childNodes[i] : null, _arg1[1]);
        })))(tree(pith_2)));
      },

      Leaf(_arg2, s) {
        const index = c | 0;
        c = c + 1 | 0;
        o(_m.most.map((0, _CurriedLambda2.default)(childNodePatch => function makeOnce(f) {
          var b;
          return function onceAtoBtoAtoB(a) {
            if (f) {
              b = f.call(this, a);
              f = null;
            }

            return b;
          };
        }(parentElement => {
          const $var1 = _arg2[1];
          const childNodes = parentElement.childNodes;
          const length = ~~childNodes.length | 0;

          if (index >= length) {
            (() => {
              const child = _arg2[0]();

              childNodePatch(child);
              parentElement.insertBefore(child, null), void 0;
            })();
          } else {
            const childAtIndex_1 = childNodes[index];
            const matchValue = $var1(childAtIndex_1);

            if (matchValue == null) {
              const findNode = index_1 => {
                findNode: while (true) {
                  if (index_1 < length) {
                    const matchValue_1 = $var1(childNodes[index_1]);

                    if (matchValue_1 == null) {
                      index_1 = index_1 + 1;
                      continue findNode;
                    } else {
                      return (0, _Option.makeSome)((0, _Option.getValue)(matchValue_1));
                    }
                  } else {
                    return null;
                  }
                }
              };

              const matchValue_2 = findNode(index);

              if (matchValue_2 == null) {
                (childAtIndex => {
                  const child_1 = _arg2[0]();

                  childNodePatch(child_1);
                  parentElement.insertBefore(child_1, childAtIndex), void 0;
                })(childAtIndex_1);
              } else {
                (tupledArg => {
                  childNodePatch(tupledArg[0]);
                  parentElement.insertBefore(tupledArg[0], tupledArg[1]), void 0;
                })([(0, _Option.getValue)(matchValue_2), childAtIndex_1]);
              }
            } else {
              childNodePatch((0, _Option.getValue)(matchValue));
            }
          }
        })))(s));
      },

      Patch(s) {
        o(_m.most.map($var4 => $var5 => {
          (function makeOnce(f) {
            var b;
            return function onceAtoBtoAtoB(a) {
              if (f) {
                b = f.call(this, a);
                f = null;
              }

              return b;
            };
          })($var2 => $var3 => {
            ((patch, n) => {
              patch(n);
            })($var2, $var3);
          })($var4, $var5);
        })(s));
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.Dom.ILang"]
        };
      }

    });
    o(_m.most.now(function makeOnce(f) {
      var b;
      return function onceAtoBtoAtoB(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function (element) {
      const childNodes = element.childNodes;
      const length = ~~childNodes.length | 0;

      for (let i = c; i <= length - 1; i++) {
        element.removeChild(childNodes[i]), void 0;
      }
    })));
  };

  return _m.most.newStream(function (sink, scheduler) {
    const restore = {
      contents: function () {}
    };

    const f = function makeOnce(f) {
      var b;
      return function onceAtoBtoAtoB(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function (element_1) {
      const oldNodes = [...element_1.childNodes];

      restore.contents = function () {
        const ref = element_1.childNodes[0];

        for (let i_1 = 0; i_1 <= oldNodes.length - 1; i_1++) {
          element_1.insertBefore(oldNodes[i_1], ref), void 0;
        }

        for (let i_2 = oldNodes.length; i_2 <= ~~element_1.childNodes.length - 1; i_2++) {
          element_1.removeChild(element_1.childNodes[i_2]), void 0;
        }
      };
    });

    const s = _m.most.map($var6 => $var7 => {
      (function (patch, element_2) {
        f(element_2);
        patch(element_2);
      })($var6, $var7);
    })((0, _m.tree)((0, _CurriedLambda2.default)(function (arg00, arg10) {
      return _m.most.combineArray((...list) => ($var8 => $var9 => {
        arg00($var8, $var9);
      })(list), arg10);
    })(function (ps, e) {
      ps.forEach(function (p) {
        p(e);
      });
    }), _m.most.map($var10 => $var11 => {
      ring($var10, $var11);
    })(pith)));

    const dispble = _m.most.run(sink)(scheduler, s);

    return disposable.disposeWith(function makeOnce(f) {
      var b;
      return function onceAtoBtoAtoB(a) {
        if (f) {
          b = f.call(this, a);
          f = null;
        }

        return b;
      };
    }(function () {
      const d1 = dispble.dispose.bind(dispble);
      d1();
      const dispose = restore.contents;
      dispose();
    }), void 0);
  });
}