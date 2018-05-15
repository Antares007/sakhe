"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = undefined;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _most = require("./most");

var _m = require("./m");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _Option = require("./fable-core/Option");

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
          const $var2 = _arg1[1];

          const $var1 = i => {
            if (i <= ~~parentElement.childNodes.length) {
              return parentElement.childNodes[i];
            } else {
              return null;
            }
          };

          const matchValue = $var1(index);

          if (matchValue != null) {
            const matchValue_1 = $var2((0, _Option.getValue)(matchValue));

            if (matchValue_1 == null) {
              const findNode = index_1 => {
                findNode: while (true) {
                  const matchValue_2 = $var1(index_1);

                  if (matchValue_2 != null) {
                    const matchValue_3 = $var2((0, _Option.getValue)(matchValue_2));

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
                (childAtIndex => {
                  const child_1 = _arg1[0]();

                  childNodePatch(child_1);
                  parentElement.insertBefore(child_1, childAtIndex), void 0;
                })((0, _Option.getValue)(matchValue));
              } else {
                (tupledArg => {
                  childNodePatch(tupledArg[0]);
                  parentElement.insertBefore(tupledArg[0], tupledArg[1]), void 0;
                })([(0, _Option.getValue)(matchValue_4), (0, _Option.getValue)(matchValue)]);
              }
            } else {
              childNodePatch((0, _Option.getValue)(matchValue_1));
            }
          } else {
            (() => {
              const child = _arg1[0]();

              childNodePatch(child);
              parentElement.insertBefore(child, null), void 0;
            })();
          }
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
          const $var4 = _arg2[1];

          const $var3 = i => {
            if (i <= ~~parentElement.childNodes.length) {
              return parentElement.childNodes[i];
            } else {
              return null;
            }
          };

          const matchValue = $var3(index);

          if (matchValue != null) {
            const matchValue_1 = $var4((0, _Option.getValue)(matchValue));

            if (matchValue_1 == null) {
              const findNode = index_1 => {
                findNode: while (true) {
                  const matchValue_2 = $var3(index_1);

                  if (matchValue_2 != null) {
                    const matchValue_3 = $var4((0, _Option.getValue)(matchValue_2));

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
                (childAtIndex => {
                  const child_1 = _arg2[0]();

                  childNodePatch(child_1);
                  parentElement.insertBefore(child_1, childAtIndex), void 0;
                })((0, _Option.getValue)(matchValue));
              } else {
                (tupledArg => {
                  childNodePatch(tupledArg[0]);
                  parentElement.insertBefore(tupledArg[0], tupledArg[1]), void 0;
                })([(0, _Option.getValue)(matchValue_4), (0, _Option.getValue)(matchValue)]);
              }
            } else {
              childNodePatch((0, _Option.getValue)(matchValue_1));
            }
          } else {
            (() => {
              const child = _arg2[0]();

              childNodePatch(child);
              parentElement.insertBefore(child, null), void 0;
            })();
          }
        })))(s));
      },

      Patch(s) {
        o(_m.most.map($var7 => $var8 => {
          (function makeOnce(f) {
            var b;
            return function onceAtoBtoAtoB(a) {
              if (f) {
                b = f.call(this, a);
                f = null;
              }

              return b;
            };
          })($var5 => $var6 => {
            ((patch, n) => {
              patch(n);
            })($var5, $var6);
          })($var7, $var8);
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

    const s = _m.most.map($var9 => $var10 => {
      (function (patch, element_2) {
        f(element_2);
        patch(element_2);
      })($var9, $var10);
    })((0, _m.tree)((0, _CurriedLambda2.default)(function (arg00, arg10) {
      return _m.most.combineArray((...list) => ($var11 => $var12 => {
        arg00($var11, $var12);
      })(list), arg10);
    })(function (ps, e) {
      ps.forEach(function (p) {
        p(e);
      });
    }), _m.most.map($var13 => $var14 => {
      ring($var13, $var14);
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