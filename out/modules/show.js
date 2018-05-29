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

  const apiRing = __exports.apiRing = function (pith, o) {
    const elm = function (t, pith_1) {
      ($var21 => ($var18 => ($var17 => ($var16 => {
        var s;
        return ($var15 => o(t($var15)))((s = _p.P.once(function (value) {
          value, void 0;
        }), function (pith_2) {
          return (0, _pnode.tree)(s, pith_2);
        })($var16));
      })(_s.S.now.bind(_s.S)($var17)))(function (arg0) {
        return arg0;
      }($var18)))(($var19 => $var20 => {
        apiRing($var19, $var20);
      })($var21)))(pith_1);
    };

    pith({
      Div(pith_4) {
        elm(Div, pith_4);
      },

      Span(pith_4) {
        elm(Span, pith_4);
      },

      Button(pith_4) {
        elm(Button, pith_4);
      },

      H3(pith_4) {
        elm(H3, pith_4);
      },

      Text(s_1) {
        ($var23 => {
          var f;
          return ($var22 => o(_Text($var22)))((f = str => _p.P.once(text_1 => {
            text_1.textContent = str;
          }), arg10_ => _s.S.map(f, arg10_))($var23));
        })(s_1);
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.Show.Dom.IApi"]
        };
      }

    });
  };

  const counter2 = __exports.counter2 = function (d, o) {
    o.Div.bind(o)(function (o_1) {
      o_1.Button.bind(o_1)(function (o_2) {
        o_2.Span.bind(o_2)(function (o_3) {
          ($var24 => o_3.Text.bind(o_3)(_s.S.now.bind(_s.S)($var24)))("+");
        });

        if (d > 0) {
          ($var27 => o_2.Div.bind(o_2)(($var25 => $var26 => {
            counter2($var25, $var26);
          })($var27)))(d - 1);
        }
      });
      o_1.Button.bind(o_1)(function (o_5) {
        o_5.Span.bind(o_5)(function (o_6) {
          ($var28 => o_6.Text.bind(o_6)(_s.S.now.bind(_s.S)($var28)))("-");
        });

        if (d > 0) {
          ($var31 => o_5.Div.bind(o_5)(($var29 => $var30 => {
            counter2($var29, $var30);
          })($var31)))(d - 1);
        }
      });
      o_1.H3.bind(o_1)(function (o_8) {
        ($var32 => o_8.Text.bind(o_8)(_s.S.now.bind(_s.S)($var32)))("0");
      });
    });
  };

  const counter = __exports.counter = function (d) {
    return div(function (o) {
      const ep = new _Event3.default();
      const em = new _Event3.default();

      const sum = _s.S.scan(function (x, y) {
        return x + y;
      }, 0, _s.S.merge(_s.S.konst(-1, _s.S.toStream(em)), _s.S.konst(1, _s.S.toStream(ep))));

      ($var36 => ($var35 => ($var34 => {
        var s;
        return ($var33 => o(Button($var33)))((s = _p.P.once(function (x_1) {
          x_1.addEventListener("click", ep.Trigger.bind(ep));
        }), function (pith) {
          return (0, _pnode.tree)(s, pith);
        })($var34));
      })(_s.S.now.bind(_s.S)($var35)))(function (arg0) {
        return arg0;
      }($var36)))(function (o_1) {
        ($var37 => o_1(span($var37)))(function (o_2) {
          ($var38 => o_2(text($var38)))("+");
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var42 => ($var41 => ($var40 => {
        var s_2;
        return ($var39 => o(Button($var39)))((s_2 = _p.P.once(function (x_2) {
          x_2.addEventListener("click", em.Trigger.bind(em));
        }), function (pith_1) {
          return (0, _pnode.tree)(s_2, pith_1);
        })($var40));
      })(_s.S.now.bind(_s.S)($var41)))(function (arg0_1) {
        return arg0_1;
      }($var42)))(function (o_3) {
        ($var43 => o_3(span($var43)))(function (o_4) {
          ($var44 => o_4(text($var44)))("-");
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var45 => o(h3($var45)))(function (o_5) {
        ($var47 => {
          var f;
          return ($var46 => o_5(_Text($var46)))((f = function (i) {
            return _p.P.once(function (text_1) {
              text_1.textContent = i.toString();
            });
          }, function (arg10_) {
            return _s.S.map(f, arg10_);
          })($var47));
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

  const rez_1 = __exports.rez = ($var49 => ($var48 => (0, _pnode.tree)(_p.P.once(function (value) {
    value, void 0;
  }), _s.S.now($var48)))(function (arg0) {
    return arg0;
  }($var49)))(function (o) {
    o(counter(3));

    ($var59 => ($var56 => ($var53 => ($var52 => ($var51 => {
      var s;
      return ($var50 => o(Div($var50)))((s = _p.P.once(function (value_1) {
        value_1, void 0;
      }), function (pith) {
        return (0, _pnode.tree)(s, pith);
      })($var51));
    })(_s.S.now.bind(_s.S)($var52)))(function (arg0_1) {
      return arg0_1;
    }($var53)))(($var54 => $var55 => {
      apiRing($var54, $var55);
    })($var56)))(($var57 => $var58 => {
      counter2($var57, $var58);
    })($var59)))(3);
  });

  _s.S.drain(render(document.getElementById("root-node"), rez_1)), void 0;
  return __exports;
}({});

const Test2 = exports.Test2 = function (__exports) {
  const tree = __exports.tree = function (pith) {
    var s;
    return (0, _g.tree)(_r.treeObj, (s = _p.P.once(function (value) {
      value, void 0;
    }), function (pith_2) {
      return (0, _pnode.tree)(s, pith_2);
    }), pith);
  };

  const g = __exports.g = function (key, p_0, p_1) {
    const p = [p_0, p_1];
    return new _g.G(2, [($var60 => function (s) {
      return State.Object(key, s);
    }(function (tuple) {
      return tuple[0];
    }($var60)))(p), ($var61 => Dom.Div(function (tuple_1) {
      return tuple_1[1];
    }($var61)))(p)]);
  };

  const rez_2 = __exports.rez = ($var63 => ($var62 => tree(_s.S.now($var62)))(function (arg0) {
    return arg0;
  }($var63)))(function (o) {
    ($var67 => ($var66 => ($var65 => ($var64 => o(function (arg0_1) {
      return new _g.G(0, arg0_1);
    }($var64)))(function (s) {
      return State.Number("a", s);
    }($var65)))(_s.S.now.bind(_s.S)($var66)))((0, _r.set)($var67)))(1);

    ($var71 => ($var70 => ($var69 => ($var68 => o(function (arg0_2) {
      return new _g.G(1, arg0_2);
    }($var68)))(Dom.Div($var69)))(_s.S.now.bind(_s.S)($var70)))(function (arg0_3) {
      return arg0_3;
    }($var71)))(function (elm) {
      elm.innerHTML = "<h1>hello world!</h1>";
    });

    ($var75 => ($var74 => ($var73 => ($var72 => o(function (tupledArg) {
      return g("hmmm", tupledArg[0], tupledArg[1]);
    }($var72)))(tree($var73)))(_s.S.now.bind(_s.S)($var74)))(function (arg0_4) {
      return arg0_4;
    }($var75)))(function (o_1) {
      ($var79 => ($var78 => ($var77 => ($var76 => o_1(function (arg0_5) {
        return new _g.G(0, arg0_5);
      }($var76)))(function (s_1) {
        return State.Number("aa", s_1);
      }($var77)))(_s.S.now.bind(_s.S)($var78)))((0, _r.set)($var79)))(2);

      ($var83 => ($var82 => ($var81 => ($var80 => o_1(function (arg0_6) {
        return new _g.G(1, arg0_6);
      }($var80)))(Dom.Div($var81)))(_s.S.now.bind(_s.S)($var82)))(function (arg0_7) {
        return arg0_7;
      }($var83)))(function (elm_1) {
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