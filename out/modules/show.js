"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test2 = exports.Dom = exports.State = exports.AnimationFrame = undefined;

var _s = require("./s");

var _Option = require("./fable-core/Option");

var _r = require("./r");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _pnode = require("./pnode");

var _p = require("./p");

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _Seq = require("./fable-core/Seq");

var _Event2 = require("./fable-core/Event");

var _Event3 = _interopRequireDefault(_Event2);

var _List = require("./fable-core/List");

var _g = require("./g");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AnimationFrame = exports.AnimationFrame = function (__exports) {
  const a = __exports.a = _s.S.now(1);

  return __exports;
}({});

const State = exports.State = function (__exports) {
  const init = __exports.init = function (a_1, a2b, maybe_a) {
    if (maybe_a == null) {
      return a2b(a_1);
    } else {
      return a2b((0, _Option.getValue)(maybe_a));
    }
  };

  const _Number = __exports.Number = function (k, s) {
    return new _r.RValue(1, [k, s]);
  };

  const _Object = __exports.Object = function (k, s) {
    return new _r.RValue(3, [k, s]);
  };

  const _Array = __exports.Array = function (k, s) {
    return new _r.RValue(4, [k, s]);
  };

  const rez = __exports.rez = ($var2 => ($var1 => (0, _r.treeObj)(_s.S.at(_s.TimeModule.ms(0), $var1)))(function (arg0) {
    return arg0;
  }($var2)))(function (o) {
    ($var6 => ($var5 => {
      var arg00_;
      return ($var4 => ($var3 => o(function (s) {
        return _Object("achiko", s);
      }($var3)))((0, _r.treeObj)($var4)))((arg00_ = _s.TimeModule.ms(3000), function (a_1) {
        return _s.S.at(arg00_, a_1);
      })($var5));
    })(function (arg0_1) {
      return arg0_1;
    }($var6)))(function (o_1) {
      ($var9 => ($var8 => {
        var arg00__1;
        return ($var7 => o_1(function (s_1) {
          return _Number("age", s_1);
        }($var7)))((arg00__1 = _s.TimeModule.ms(3000), function (a_2) {
          return _s.S.at(arg00__1, a_2);
        })($var8));
      })((0, _r.update)($var9)))(function (_arg1) {
        return _arg1 == null ? 0 : (0, _Option.getValue)(_arg1) + 1;
      });
    });
  });

  const update = __exports.update = function (s) {
    return _s.S.tap(console.log.bind(console), _s.S.scan(_r.apply, {}, s));
  };

  _s.S.drain(update(rez)), void 0;
  return __exports;
}({});

const Dom = exports.Dom = function (__exports) {
  const H = __exports.H = function (__exports) {
    const createElm = __exports.createElm = function (tag) {
      return (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(_pnode.pnode)(function () {
        return document.createElement(tag);
      }))(function (n) {
        return n.nodeName === tag;
      }));
    };

    const Div = __exports.Div = (0, _CurriedLambda2.default)(createElm("DIV"));
    const A = __exports.A = (0, _CurriedLambda2.default)(createElm("A"));
    const Button = __exports.Button = (0, _CurriedLambda2.default)(createElm("BUTTON"));
    const Span = __exports.Span = (0, _CurriedLambda2.default)(createElm("SPAN"));
    const H1 = __exports.H1 = (0, _CurriedLambda2.default)(createElm("H1"));
    const H2 = __exports.H2 = (0, _CurriedLambda2.default)(createElm("H2"));
    const H3 = __exports.H3 = (0, _CurriedLambda2.default)(createElm("H3"));

    const _Text = __exports.Text = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(_pnode.pnode)(function () {
      return document.createTextNode("");
    }))(function (n) {
      return n.nodeName === "#text";
    }));

    const intS = __exports.intS = _s.S.multicast(_s.S.skip(1, _s.S.scan(function (c, _arg1) {
      return c + 1;
    }, 0, _s.S.periodic(_s.TimeModule.ms(10)))));

    const statTree = __exports.statTree = function (t, p) {
      return ($var13 => ($var12 => ($var11 => {
        var s;
        return t((s = ($var10 => _s.S.now(_p.P.once($var10)))(function (value) {
          value, void 0;
        }), function (pith) {
          return (0, _pnode.tree)(s, pith);
        })($var11));
      })(_s.S.now.bind(_s.S)($var12)))(function (arg0) {
        return arg0;
      }($var13)))(p);
    };

    const div = __exports.div = function (p) {
      return statTree(Div, p);
    };

    const btn = __exports.btn = function (p) {
      return statTree(Button, p);
    };

    const span = __exports.span = function (p) {
      return statTree(Span, p);
    };

    const h3 = __exports.h3 = function (p) {
      return statTree(H3, p);
    };

    const text = __exports.text = function (s) {
      return ($var15 => ($var14 => {
        var arg00_;
        return _Text((arg00_ = _s.TimeModule.ms(0), function (a_1) {
          return _s.S.at(arg00_, a_1);
        })($var14));
      })(_p.P.once.bind(_p.P)($var15)))(function (text_1) {
        text_1.textContent = s;
      });
    };

    return __exports;
  }({});

  const DomEvents = __exports.DomEvents = class DomEvents {
    constructor(tag, data) {
      this.tag = tag | 0;
      this.data = data;
    }

    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Show.Dom.DomEvents",
        interfaces: ["FSharpUnion"],
        cases: [["Click", (0, _Util.Function)([(0, _Util.Interface)("Fable.Import.Browser.MouseEvent"), (0, _Util.GenericParam)("a")])]]
      };
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.Dom.DomEvents", DomEvents);
  const Actions = __exports.Actions = class Actions {
    constructor(tag) {
      this.tag = tag | 0;
    }

    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Show.Dom.Actions",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: [["Plus"], ["Minus"]]
      };
    }

    Equals(other) {
      return this.tag === other.tag;
    }

    CompareTo(other) {
      return (0, _Util.comparePrimitives)(this.tag, other.tag);
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.Dom.Actions", Actions);

  const konst = __exports.konst = function (a_1, _arg1) {
    return a_1;
  };

  const OnP = __exports.OnP = function (e, l) {
    const d = {
      contents: function () {
        null, void 0;
      }
    };

    const p = _p.P.once(function (elm) {
      d.contents = (0, _Seq.fold)((0, _CurriedLambda2.default)(function (d_1, _arg1) {
        const h = function (arg) {
          e.Trigger(_arg1.data(arg));
        };

        elm.addEventListener("click", h);
        console.log("add");
        return function () {
          elm.removeEventListener("click", h);
          console.log("remove");
          d_1();
        };
      }), function () {
        null, void 0;
      }, l);
    });

    return [p, d];
  };

  const On = __exports.On = function (e, s) {
    return _s.S.map(function (tupledArg) {
      const d = tupledArg[0][1].contents;
      d();
      return tupledArg[1][0];
    }, _s.S.pairwise([_p.P.once(function (value) {
      value, void 0;
    }), {
      contents: function () {
        null, void 0;
      }
    }], _s.S.map(function (l) {
      return OnP(e, l);
    }, s)));
  };

  const counter = __exports.counter = function (d) {
    return H.div(function (o) {
      const acts = new _Event3.default();

      const sum = _s.S.scan(function (m, _arg1) {
        return _arg1.tag === 1 ? m - 1 : m + 1;
      }, 0, _s.S.toStream(acts));

      ($var19 => ($var18 => ($var17 => {
        var s_1;
        return ($var16 => o(H.Button($var16)))((s_1 = function (s) {
          return On(acts, s);
        }(_s.S.now((0, _List.ofArray)([new DomEvents(0, function (_arg1_1) {
          return new Actions(0);
        })]))), function (pith) {
          return (0, _pnode.tree)(s_1, pith);
        })($var17));
      })(_s.S.now.bind(_s.S)($var18)))(function (arg0) {
        return arg0;
      }($var19)))(function (o_1) {
        ($var20 => o_1(H.span.bind(H)($var20)))(function (o_2) {
          ($var21 => o_2(H.text.bind(H)($var21)))("+");
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var25 => ($var24 => ($var23 => {
        var s_4;
        return ($var22 => o(H.Button($var22)))((s_4 = function (s_3) {
          return On(acts, s_3);
        }(_s.S.now((0, _List.ofArray)([new DomEvents(0, function (_arg2) {
          return new Actions(1);
        })]))), function (pith_1) {
          return (0, _pnode.tree)(s_4, pith_1);
        })($var23));
      })(_s.S.now.bind(_s.S)($var24)))(function (arg0_1) {
        return arg0_1;
      }($var25)))(function (o_3) {
        ($var26 => o_3(H.span.bind(H)($var26)))(function (o_4) {
          ($var27 => o_4(H.text.bind(H)($var27)))("-");
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var28 => o(H.h3.bind(H)($var28)))(function (o_5) {
        ($var30 => {
          var f;
          return ($var29 => o_5(H.Text($var29)))((f = function (i) {
            return _p.P.once(function (text_1) {
              text_1.textContent = i.toString();
            });
          }, function (arg10_) {
            return _s.S.map(f, arg10_);
          })($var30));
        })(sum);
      });
    });
  };

  const render = __exports.render = function (elm, s) {
    var f;
    return (f = _p.P.apply.bind(_p.P), function (arg20_) {
      return _s.S.scan(f, elm, arg20_);
    })(function (arg10__1) {
      return _s.S.sample(_s.S.animationFrame, arg10__1);
    }(s));
  };

  const rez_1 = __exports.rez = ($var33 => ($var31 => (0, _pnode.tree)(($var32 => _s.S.now(_p.P.once($var32)))(function (value) {
    value, void 0;
  }), _s.S.now($var31)))(function (arg0) {
    return arg0;
  }($var33)))(function (o) {
    ($var34 => o(counter($var34)))(3);
  });

  _s.S.drain(render(document.getElementById("root-node"), rez_1)), void 0;
  return __exports;
}({});

const Test2 = exports.Test2 = function (__exports) {
  const tree = __exports.tree = function (pith) {
    var s;
    return (0, _g.tree)(_r.treeObj, (s = ($var35 => _s.S.now(_p.P.once($var35)))(function (value) {
      value, void 0;
    }), function (pith_2) {
      return (0, _pnode.tree)(s, pith_2);
    }), pith);
  };

  const g = __exports.g = function (key, p_0, p_1) {
    const p = [p_0, p_1];
    return new _g.G(2, [($var36 => function (s) {
      return State.Object(key, s);
    }(function (tuple) {
      return tuple[0];
    }($var36)))(p), ($var37 => Dom.H.Div(function (tuple_1) {
      return tuple_1[1];
    }($var37)))(p)]);
  };

  const rez_2 = __exports.rez = ($var39 => ($var38 => tree(_s.S.now($var38)))(function (arg0) {
    return arg0;
  }($var39)))(function (o) {
    ($var43 => ($var42 => ($var41 => ($var40 => o(function (arg0_1) {
      return new _g.G(0, arg0_1);
    }($var40)))(function (s) {
      return State.Number("a", s);
    }($var41)))(_s.S.now.bind(_s.S)($var42)))((0, _r.set)($var43)))(1);

    ($var47 => ($var46 => ($var45 => ($var44 => o(function (arg0_2) {
      return new _g.G(1, arg0_2);
    }($var44)))(Dom.H.Div($var45)))(_s.S.now.bind(_s.S)($var46)))(function (arg0_3) {
      return arg0_3;
    }($var47)))(function (elm) {
      elm.innerHTML = "<h1>hello world!</h1>";
    });

    ($var51 => ($var50 => ($var49 => ($var48 => o(function (tupledArg) {
      return g("hmmm", tupledArg[0], tupledArg[1]);
    }($var48)))(tree($var49)))(_s.S.now.bind(_s.S)($var50)))(function (arg0_4) {
      return arg0_4;
    }($var51)))(function (o_1) {
      ($var55 => ($var54 => ($var53 => ($var52 => o_1(function (arg0_5) {
        return new _g.G(0, arg0_5);
      }($var52)))(function (s_1) {
        return State.Number("aa", s_1);
      }($var53)))(_s.S.now.bind(_s.S)($var54)))((0, _r.set)($var55)))(2);

      ($var59 => ($var58 => ($var57 => ($var56 => o_1(function (arg0_6) {
        return new _g.G(1, arg0_6);
      }($var56)))(Dom.H.Div($var57)))(_s.S.now.bind(_s.S)($var58)))(function (arg0_7) {
        return arg0_7;
      }($var59)))(function (elm_1) {
        elm_1.innerHTML = "<h2>hello world!</h2>";
      });
    });
  });

  _s.S.merge(_s.S.map(function (value) {
    value, void 0;
  }, Dom.render(document.getElementById("root-node"), rez_2[1])), _s.S.map(function (value_1) {
    value_1, void 0;
  }, State.update(rez_2[0]))), void 0;
  return __exports;
}({});