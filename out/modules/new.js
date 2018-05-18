"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = undefined;
exports.tree = tree;
exports.tree2 = tree2;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _m = require("./m");

var _Seq = require("./fable-core/Seq");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _disposable = require("@most/disposable");

var disposable = _interopRequireWildcard(_disposable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

function tree(pith) {
  const ring = function (pith_1, o) {
    let c = 0;
    pith_1({
      Node(_arg1, pith_2) {
        const index = c | 0;
        c = c + 1 | 0;

        ($var5 => {
          var arg00_;
          return o((arg00_ = (childNodePatch, parentElement) => {
            const $var2 = _arg1[1];

            const $var1 = i => {
              return parentElement.childNodes[i];
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
          }, arg10_ => core.map($var3 => $var4 => {
            arg00_($var3, $var4);
          }, arg10_))($var5));
        })(tree(pith_2));
      },

      Leaf(_arg2, s) {
        const index = c | 0;
        c = c + 1 | 0;

        ($var10 => {
          var arg00_;
          return o((arg00_ = (childNodePatch, parentElement) => {
            const $var7 = _arg2[1];

            const $var6 = i => {
              return parentElement.childNodes[i];
            };

            const matchValue = $var6(index);

            if (matchValue != null) {
              const matchValue_1 = $var7((0, _Option.getValue)(matchValue));

              if (matchValue_1 == null) {
                const findNode = index_1 => {
                  findNode: while (true) {
                    const matchValue_2 = $var6(index_1);

                    if (matchValue_2 != null) {
                      const matchValue_3 = $var7((0, _Option.getValue)(matchValue_2));

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
          }, arg10_ => core.map($var8 => $var9 => {
            arg00_($var8, $var9);
          }, arg10_))($var10));
        })(s);
      },

      Patch(s) {
        o(core.map((0, _CurriedLambda2.default)(x => x), s));
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.Dom.ILang"]
        };
      }

    });

    ($var11 => o(core.now.bind(core)($var11)))(function (element) {
      const childNodes = element.childNodes;
      const length = ~~childNodes.length | 0;

      for (let i = c; i <= length - 1; i++) {
        element.removeChild(childNodes[i]), void 0;
      }
    });
  };

  const s_1 = (0, _m.tree)(function (rays) {
    return function (arg10_) {
      return core.map($var12 => $var13 => {
        (function (ps, e) {
          ps.forEach(function (p) {
            p(e);
          });
        })($var12, $var13);
      }, arg10_);
    }((0, _Seq.fold)(function (alS, aS) {
      return core.combine(function (aList, a) {
        return aList.concat([a]);
      }, alS, aS);
    }, core.now([]), Array.from((0, _List.map)(function (s) {
      return core.map((0, _CurriedLambda2.default)(function (arg00__1) {
        return function makeOnce(f) {
          var b;
          return function onceAtoBtoAtoB(a) {
            if (f) {
              b = f.call(this, a);
              f = null;
            }

            return b;
          };
        }(arg00__1);
      }), s);
    }, rays)).slice().reverse()));
  }, core.map($var14 => $var15 => {
    ring($var14, $var15);
  }, pith));
  return core.newStream(function (sink, scheduler) {
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

    const s_2 = core.map($var16 => $var17 => {
      (function (patch, element_2) {
        f(element_2);
        patch(element_2);
      })($var16, $var17);
    }, s_1);
    const dispble = core.run(sink, scheduler, s_2);
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
    }), null);
  });
}

function tryFind($var33, $var34, $var35) {
  tryFind: while (true) {
    const f = $var33;
    const i = $var34;
    const nlist = $var35;

    if (i >= nlist.length) {
      return null;
    } else {
      const n = nlist[i];

      if (f(n)) {
        return n;
      } else {
        $var33 = f;
        $var34 = i + 1;
        $var35 = nlist;
        continue tryFind;
      }
    }
  }
}

function tree2(pith) {
  const ring = function (pith_1, o) {
    pith_1({
      Node(_arg1, pith_2) {
        ($var20 => {
          var arg00_;
          return o((arg00_ = (patch, ro) => {
            const matchValue = ro.TryFind(_arg1[1]);

            if (matchValue != null) {
              const b = (0, _Option.getValue)(matchValue);
              patch(b);
              ro.Append((0, _Option.getValue)(matchValue));
            } else {
              const b_1 = _arg1[0]();

              patch(b_1);
              ro.Append(b_1);
            }
          }, arg10_ => core.map($var18 => $var19 => {
            arg00_($var18, $var19);
          }, arg10_))($var20));
        })(tree2(pith_2));
      },

      Leaf(_arg2, s) {
        ($var23 => {
          var arg00_;
          return o((arg00_ = (patch, ro) => {
            const matchValue = ro.TryFind(_arg2[1]);

            if (matchValue != null) {
              const b = (0, _Option.getValue)(matchValue);
              patch(b);
              ro.Append((0, _Option.getValue)(matchValue));
            } else {
              const b_1 = _arg2[0]();

              patch(b_1);
              ro.Append(b_1);
            }
          }, arg10_ => core.map($var21 => $var22 => {
            arg00_($var21, $var22);
          }, arg10_))($var23));
        })(s);
      },

      Patch(s) {
        ($var26 => {
          var arg00_;
          return o((arg00_ = (patch, ro) => {
            ro.Apply(patch);
          }, arg10_ => core.map($var24 => $var25 => {
            arg00_($var24, $var25);
          }, arg10_))($var26));
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
    return core.map($var27 => $var28 => {
      (function (patches, element) {
        console.log(patches);
        let index = 0;
        const rev = {
          TryFind(_typeof) {
            return tryFind(_typeof, index, element.childNodes);
          },

          Apply(patch) {
            patch(element);
          },

          Append(n) {
            element.insertBefore(n, element.childNodes[index]), void 0;
            index = index + 1 | 0;
          },

          [_Symbol3.default.reflection]() {
            return {
              interfaces: ["Sakhe.Dom.IRev"]
            };
          }

        };
        (0, _Seq.iterate)(function (p) {
          p(rev);
        }, patches);

        for (let i = index; i <= ~~element.childNodes.length - 1; i++) {
          element.removeChild(element.childNodes[i]), void 0;
        }
      })($var27, $var28);
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
    }, core.now(new _List2.default()), rays));
  };

  return (0, _m.tree)(deltaC, core.map($var29 => $var30 => {
    ring($var29, $var30);
  }, pith));
}