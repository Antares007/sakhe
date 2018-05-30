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
        cases: [["Click", (0, _Util.Function)([(0, _Util.Interface)("Fable.Import.Browser.MouseEvent"), _Util.Unit])]]
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

  const on_ = __exports.on_ = function (f, s) {
    const d = {
      contents: function () {}
    };
    return _s.S.disposeWith(function () {
      const d_1 = d.contents;
      d_1();
    }, ($var20 => ($var16 => $var17 => _s.S.map.bind(_s.S)($var16, $var17))(($var18 => $var19 => _p.P.add.bind(_p.P)($var18, $var19))($var20)))(function (a_1) {
      d.contents = (0, _CurriedLambda2.default)(f)(a_1);
    })(s));
  };

  const on = __exports.on = function (l, s) {
    return (0, _CurriedLambda2.default)(on_)((0, _CurriedLambda2.default)(function (e) {
      return (0, _Seq.fold)(function (d, _arg1) {
        e.addEventListener("click", _arg1.data);
        console.log("add");
        return function () {
          d();
          e.removeEventListener("click", _arg1.data);
          console.log("remove");
        };
      }, function () {}, l);
    }))(s);
  };

  const counter = __exports.counter = function (d) {
    return H.div(function (o) {
      const ep = new _Event3.default();

      const sum = _s.S.scan(function (m, _arg1) {
        return _arg1.tag === 1 ? m - 1 : m + 1;
      }, 0, _s.S.toStream(ep));

      ($var25 => ($var24 => ($var23 => {
        var s;
        return ($var21 => o(H.Button($var21)))((s = ($var22 => _s.S.now(_p.P.once($var22)))(function (value) {
          value, void 0;
        }), function (pith) {
          return (0, _pnode.tree)(s, pith);
        })($var23));
      })(_s.S.now.bind(_s.S)($var24)))(function (arg0) {
        return arg0;
      }($var25)))(function (o_1) {
        ($var26 => o_1(H.span.bind(H)($var26)))(function (o_2) {
          ($var27 => o_2(H.text.bind(H)($var27)))("+");
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var32 => ($var31 => ($var30 => {
        var s_2;
        return ($var28 => o(H.Button($var28)))((s_2 = ($var29 => _s.S.now(_p.P.once($var29)))(function (value_1) {
          value_1, void 0;
        }), function (pith_1) {
          return (0, _pnode.tree)(s_2, pith_1);
        })($var30));
      })(_s.S.now.bind(_s.S)($var31)))(function (arg0_1) {
        return arg0_1;
      }($var32)))(function (o_3) {
        ($var33 => o_3(H.span.bind(H)($var33)))(function (o_4) {
          ($var34 => o_4(H.text.bind(H)($var34)))("-");
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var35 => o(H.h3.bind(H)($var35)))(function (o_5) {
        ($var37 => {
          var f;
          return ($var36 => o_5(H.Text($var36)))((f = function (i) {
            return _p.P.once(function (text_1) {
              text_1.textContent = i.toString();
            });
          }, function (arg10_) {
            return _s.S.map(f, arg10_);
          })($var37));
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

  const rez_1 = __exports.rez = ($var40 => ($var38 => (0, _pnode.tree)(($var39 => _s.S.now(_p.P.once($var39)))(function (value) {
    value, void 0;
  }), _s.S.now($var38)))(function (arg0) {
    return arg0;
  }($var40)))(function (o) {
    ($var41 => o(counter($var41)))(3);
  });

  _s.S.drain(render(document.getElementById("root-node"), rez_1)), void 0;
  return __exports;
}({});

const Test2 = exports.Test2 = function (__exports) {
  const tree = __exports.tree = function (pith) {
    var s;
    return (0, _g.tree)(_r.treeObj, (s = ($var42 => _s.S.now(_p.P.once($var42)))(function (value) {
      value, void 0;
    }), function (pith_2) {
      return (0, _pnode.tree)(s, pith_2);
    }), pith);
  };

  const g = __exports.g = function (key, p_0, p_1) {
    const p = [p_0, p_1];
    return new _g.G(2, [($var43 => function (s) {
      return State.Object(key, s);
    }(function (tuple) {
      return tuple[0];
    }($var43)))(p), ($var44 => Dom.H.Div(function (tuple_1) {
      return tuple_1[1];
    }($var44)))(p)]);
  };

  const rez_2 = __exports.rez = ($var46 => ($var45 => tree(_s.S.now($var45)))(function (arg0) {
    return arg0;
  }($var46)))(function (o) {
    ($var50 => ($var49 => ($var48 => ($var47 => o(function (arg0_1) {
      return new _g.G(0, arg0_1);
    }($var47)))(function (s) {
      return State.Number("a", s);
    }($var48)))(_s.S.now.bind(_s.S)($var49)))((0, _r.set)($var50)))(1);

    ($var54 => ($var53 => ($var52 => ($var51 => o(function (arg0_2) {
      return new _g.G(1, arg0_2);
    }($var51)))(Dom.H.Div($var52)))(_s.S.now.bind(_s.S)($var53)))(function (arg0_3) {
      return arg0_3;
    }($var54)))(function (elm) {
      elm.innerHTML = "<h1>hello world!</h1>";
    });

    ($var58 => ($var57 => ($var56 => ($var55 => o(function (tupledArg) {
      return g("hmmm", tupledArg[0], tupledArg[1]);
    }($var55)))(tree($var56)))(_s.S.now.bind(_s.S)($var57)))(function (arg0_4) {
      return arg0_4;
    }($var58)))(function (o_1) {
      ($var62 => ($var61 => ($var60 => ($var59 => o_1(function (arg0_5) {
        return new _g.G(0, arg0_5);
      }($var59)))(function (s_1) {
        return State.Number("aa", s_1);
      }($var60)))(_s.S.now.bind(_s.S)($var61)))((0, _r.set)($var62)))(2);

      ($var66 => ($var65 => ($var64 => ($var63 => o_1(function (arg0_6) {
        return new _g.G(1, arg0_6);
      }($var63)))(Dom.H.Div($var64)))(_s.S.now.bind(_s.S)($var65)))(function (arg0_7) {
        return arg0_7;
      }($var66)))(function (elm_1) {
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