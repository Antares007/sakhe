"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test2 = exports.Dom = exports.State = exports.AnimationFrame = undefined;

var _s = require("./s");

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _pnode = require("./pnode");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _p = require("./p");

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
    return new _state.RValue(1, [k, s]);
  };

  const _Object = __exports.Object = function (k, s) {
    return new _state.RValue(3, [k, s]);
  };

  const _Array = __exports.Array = function (k, s) {
    return new _state.RValue(4, [k, s]);
  };

  const rez = __exports.rez = ($var2 => ($var1 => (0, _state.treeObj)(_s.S.at(_s.TimeModule.ms(0), $var1)))(function (arg0) {
    return arg0;
  }($var2)))(function (o) {
    ($var6 => ($var5 => {
      var arg00_;
      return ($var4 => ($var3 => o(function (s) {
        return _Object("achiko", s);
      }($var3)))((0, _state.treeObj)($var4)))((arg00_ = _s.TimeModule.ms(3000), function (a_1) {
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
      })(_state.R.update.bind(_state.R)($var9)))(function (_arg1) {
        return _arg1 == null ? 0 : (0, _Option.getValue)(_arg1) + 1;
      });
    });
  });

  const update = __exports.update = function (s) {
    return _s.S.tap(console.log.bind(console), _s.S.scan(_state.R.apply.bind(_state.R), {}, s));
  };

  _s.S.drain(update(rez)), void 0;
  return __exports;
}({});

const Dom = exports.Dom = function (__exports) {
  const pnode = __exports.pnode = function (a_1, p, s) {
    return new _pnode.PValue(0, [a_1, p, s]);
  };

  const createElm = __exports.createElm = function (tag) {
    return (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(pnode)(function () {
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

  const _Text = __exports.Text = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(pnode)(function () {
    return document.createTextNode("");
  }))(function (n) {
    return n.nodeName === "#text";
  }));

  const intS = __exports.intS = _s.S.multicast(_s.S.skip(1, _s.S.scan(function (c, _arg1) {
    return c + 1;
  }, 0, _s.S.periodic(_s.TimeModule.ms(10)))));

  const statTree = __exports.statTree = function (t, p) {
    return ($var12 => ($var11 => ($var10 => {
      var s;
      return t((s = _p.P.once(function (value) {
        value, void 0;
      }), function (pith) {
        return (0, _pnode.tree)(s, pith);
      })($var10));
    })(_s.S.now.bind(_s.S)($var11)))(function (arg0) {
      return arg0;
    }($var12)))(p);
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
    return ($var14 => ($var13 => {
      var arg00_;
      return _Text((arg00_ = _s.TimeModule.ms(0), function (a_1) {
        return _s.S.at(arg00_, a_1);
      })($var13));
    })(_p.P.once.bind(_p.P)($var14)))(function (text_1) {
      text_1.textContent = s;
    });
  };

  const counter = __exports.counter = function (d) {
    return div(function (o) {
      ($var15 => o(btn($var15)))(function (o_1) {
        ($var16 => o_1(span($var16)))(function (o_2) {
          ($var17 => o_2(text($var17)))("+");
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var18 => o(btn($var18)))(function (o_3) {
        ($var19 => o_3(span($var19)))(function (o_4) {
          ($var20 => o_4(text($var20)))("-");
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var21 => o(h3($var21)))(function (o_5) {
        ($var23 => {
          var f;
          return ($var22 => o_5(_Text($var22)))((f = function (i) {
            return _p.P.once(function (text_1) {
              text_1.textContent = i.toString();
            });
          }, function (arg10_) {
            return _s.S.map(f, arg10_);
          })($var23));
        })(intS);
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

  const rez_1 = __exports.rez = ($var25 => ($var24 => (0, _pnode.tree)(_p.P.once(function (value) {
    value, void 0;
  }), _s.S.now($var24)))(function (arg0) {
    return arg0;
  }($var25)))(function (o) {
    o(counter(3));
  });

  render(document.getElementById("root-node"), rez_1), void 0;
  return __exports;
}({});

const Test2 = exports.Test2 = function (__exports) {
  const tree = __exports.tree = function (pith) {
    var s;
    return (0, _g.tree)(_state.treeObj, (s = _p.P.once(function (value) {
      value, void 0;
    }), function (pith_2) {
      return (0, _pnode.tree)(s, pith_2);
    }), pith);
  };

  const g = __exports.g = function (key, p_0, p_1) {
    const p = [p_0, p_1];
    return new _g.G(2, [($var26 => function (s) {
      return State.Object(key, s);
    }(function (tuple) {
      return tuple[0];
    }($var26)))(p), ($var27 => Dom.Div(function (tuple_1) {
      return tuple_1[1];
    }($var27)))(p)]);
  };

  const rez_2 = __exports.rez = ($var29 => ($var28 => tree(_s.S.now($var28)))(function (arg0) {
    return arg0;
  }($var29)))(function (o) {
    ($var33 => ($var32 => ($var31 => ($var30 => o(function (arg0_1) {
      return new _g.G(0, arg0_1);
    }($var30)))(function (s) {
      return State.Number("a", s);
    }($var31)))(_s.S.now.bind(_s.S)($var32)))(_state.R.set.bind(_state.R)($var33)))(1);

    ($var37 => ($var36 => ($var35 => ($var34 => o(function (arg0_2) {
      return new _g.G(1, arg0_2);
    }($var34)))(Dom.Div($var35)))(_s.S.now.bind(_s.S)($var36)))(function (arg0_3) {
      return arg0_3;
    }($var37)))(function (elm) {
      elm.innerHTML = "<h1>hello world!</h1>";
    });

    ($var41 => ($var40 => ($var39 => ($var38 => o(function (tupledArg) {
      return g("hmmm", tupledArg[0], tupledArg[1]);
    }($var38)))(tree($var39)))(_s.S.now.bind(_s.S)($var40)))(function (arg0_4) {
      return arg0_4;
    }($var41)))(function (o_1) {
      ($var45 => ($var44 => ($var43 => ($var42 => o_1(function (arg0_5) {
        return new _g.G(0, arg0_5);
      }($var42)))(function (s_1) {
        return State.Number("aa", s_1);
      }($var43)))(_s.S.now.bind(_s.S)($var44)))(_state.R.set.bind(_state.R)($var45)))(2);

      ($var49 => ($var48 => ($var47 => ($var46 => o_1(function (arg0_6) {
        return new _g.G(1, arg0_6);
      }($var46)))(Dom.Div($var47)))(_s.S.now.bind(_s.S)($var48)))(function (arg0_7) {
        return arg0_7;
      }($var49)))(function (elm_1) {
        elm_1.innerHTML = "<h2>hello world!</h2>";
      });
    });
  });

  _s.S.drain(_s.S.merge(_s.S.map(function (value) {
    value, void 0;
  }, Dom.render(document.getElementById("root-node"), rez_2[1])), _s.S.map(function (value_1) {
    value_1, void 0;
  }, State.update(rez_2[0])))), void 0;
  return __exports;
}({});