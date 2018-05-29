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
    pith({
      Div(pith_1) {
        ($var21 => ($var18 => ($var17 => ($var16 => {
          var s;
          return ($var15 => o(Div($var15)))((s = _p.P.once(value => {
            value, void 0;
          }), pith_2 => (0, _pnode.tree)(s, pith_2))($var16));
        })((a_1 => _s.S.now(a_1))($var17)))((arg0 => arg0)($var18)))(($var19 => $var20 => {
          ((pith_3, o_1) => {
            apiRing(pith_3, o_1);
          })($var19, $var20);
        })($var21)))(pith_1);
      },

      Span(pith_1) {
        ($var28 => ($var25 => ($var24 => ($var23 => {
          var s;
          return ($var22 => o(Span($var22)))((s = _p.P.once(value => {
            value, void 0;
          }), pith_2 => (0, _pnode.tree)(s, pith_2))($var23));
        })((a_1 => _s.S.now(a_1))($var24)))((arg0 => arg0)($var25)))(($var26 => $var27 => {
          ((pith_3, o_1) => {
            apiRing(pith_3, o_1);
          })($var26, $var27);
        })($var28)))(pith_1);
      },

      Button(pith_1) {
        ($var35 => ($var32 => ($var31 => ($var30 => {
          var s;
          return ($var29 => o(Button($var29)))((s = _p.P.once(value => {
            value, void 0;
          }), pith_2 => (0, _pnode.tree)(s, pith_2))($var30));
        })((a_1 => _s.S.now(a_1))($var31)))((arg0 => arg0)($var32)))(($var33 => $var34 => {
          ((pith_3, o_1) => {
            apiRing(pith_3, o_1);
          })($var33, $var34);
        })($var35)))(pith_1);
      },

      H3(pith_1) {
        ($var42 => ($var39 => ($var38 => ($var37 => {
          var s;
          return ($var36 => o(H3($var36)))((s = _p.P.once(value => {
            value, void 0;
          }), pith_2 => (0, _pnode.tree)(s, pith_2))($var37));
        })((a_1 => _s.S.now(a_1))($var38)))((arg0 => arg0)($var39)))(($var40 => $var41 => {
          ((pith_3, o_1) => {
            apiRing(pith_3, o_1);
          })($var40, $var41);
        })($var42)))(pith_1);
      },

      Text(s) {
        ($var44 => {
          var f;
          return ($var43 => o(_Text($var43)))((f = str => _p.P.once(text_1 => {
            text_1.textContent = str;
          }), arg10_ => _s.S.map(f, arg10_))($var44));
        })(s);
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
          ($var45 => o_3.Text.bind(o_3)(_s.S.now.bind(_s.S)($var45)))("+");
        });

        if (d > 0) {
          ($var48 => o_2.Div.bind(o_2)(($var46 => $var47 => {
            counter2($var46, $var47);
          })($var48)))(d - 1);
        }
      });
      o_1.Button.bind(o_1)(function (o_5) {
        o_5.Span.bind(o_5)(function (o_6) {
          ($var49 => o_6.Text.bind(o_6)(_s.S.now.bind(_s.S)($var49)))("-");
        });

        if (d > 0) {
          ($var52 => o_5.Div.bind(o_5)(($var50 => $var51 => {
            counter2($var50, $var51);
          })($var52)))(d - 1);
        }
      });
      o_1.H3.bind(o_1)(function (o_8) {
        ($var53 => o_8.Text.bind(o_8)(_s.S.now.bind(_s.S)($var53)))("0");
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

      ($var57 => ($var56 => ($var55 => {
        var s;
        return ($var54 => o(Button($var54)))((s = _p.P.once(function (x_1) {
          x_1.addEventListener("click", ep.Trigger.bind(ep));
        }), function (pith) {
          return (0, _pnode.tree)(s, pith);
        })($var55));
      })(_s.S.now.bind(_s.S)($var56)))(function (arg0) {
        return arg0;
      }($var57)))(function (o_1) {
        ($var58 => o_1(span($var58)))(function (o_2) {
          ($var59 => o_2(text($var59)))("+");
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var63 => ($var62 => ($var61 => {
        var s_2;
        return ($var60 => o(Button($var60)))((s_2 = _p.P.once(function (x_2) {
          x_2.addEventListener("click", em.Trigger.bind(em));
        }), function (pith_1) {
          return (0, _pnode.tree)(s_2, pith_1);
        })($var61));
      })(_s.S.now.bind(_s.S)($var62)))(function (arg0_1) {
        return arg0_1;
      }($var63)))(function (o_3) {
        ($var64 => o_3(span($var64)))(function (o_4) {
          ($var65 => o_4(text($var65)))("-");
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var66 => o(h3($var66)))(function (o_5) {
        ($var68 => {
          var f;
          return ($var67 => o_5(_Text($var67)))((f = function (i) {
            return _p.P.once(function (text_1) {
              text_1.textContent = i.toString();
            });
          }, function (arg10_) {
            return _s.S.map(f, arg10_);
          })($var68));
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

  const rez_1 = __exports.rez = ($var70 => ($var69 => (0, _pnode.tree)(_p.P.once(function (value) {
    value, void 0;
  }), _s.S.now($var69)))(function (arg0) {
    return arg0;
  }($var70)))(function (o) {
    o(counter(3));

    ($var80 => ($var77 => ($var74 => ($var73 => ($var72 => {
      var s;
      return ($var71 => o(Div($var71)))((s = _p.P.once(function (value_1) {
        value_1, void 0;
      }), function (pith) {
        return (0, _pnode.tree)(s, pith);
      })($var72));
    })(_s.S.now.bind(_s.S)($var73)))(function (arg0_1) {
      return arg0_1;
    }($var74)))(($var75 => $var76 => {
      apiRing($var75, $var76);
    })($var77)))(($var78 => $var79 => {
      counter2($var78, $var79);
    })($var80)))(3);
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
    return new _g.G(2, [($var81 => function (s) {
      return State.Object(key, s);
    }(function (tuple) {
      return tuple[0];
    }($var81)))(p), ($var82 => Dom.Div(function (tuple_1) {
      return tuple_1[1];
    }($var82)))(p)]);
  };

  const rez_2 = __exports.rez = ($var84 => ($var83 => tree(_s.S.now($var83)))(function (arg0) {
    return arg0;
  }($var84)))(function (o) {
    ($var88 => ($var87 => ($var86 => ($var85 => o(function (arg0_1) {
      return new _g.G(0, arg0_1);
    }($var85)))(function (s) {
      return State.Number("a", s);
    }($var86)))(_s.S.now.bind(_s.S)($var87)))((0, _r.set)($var88)))(1);

    ($var92 => ($var91 => ($var90 => ($var89 => o(function (arg0_2) {
      return new _g.G(1, arg0_2);
    }($var89)))(Dom.Div($var90)))(_s.S.now.bind(_s.S)($var91)))(function (arg0_3) {
      return arg0_3;
    }($var92)))(function (elm) {
      elm.innerHTML = "<h1>hello world!</h1>";
    });

    ($var96 => ($var95 => ($var94 => ($var93 => o(function (tupledArg) {
      return g("hmmm", tupledArg[0], tupledArg[1]);
    }($var93)))(tree($var94)))(_s.S.now.bind(_s.S)($var95)))(function (arg0_4) {
      return arg0_4;
    }($var96)))(function (o_1) {
      ($var100 => ($var99 => ($var98 => ($var97 => o_1(function (arg0_5) {
        return new _g.G(0, arg0_5);
      }($var97)))(function (s_1) {
        return State.Number("aa", s_1);
      }($var98)))(_s.S.now.bind(_s.S)($var99)))((0, _r.set)($var100)))(2);

      ($var104 => ($var103 => ($var102 => ($var101 => o_1(function (arg0_6) {
        return new _g.G(1, arg0_6);
      }($var101)))(Dom.Div($var102)))(_s.S.now.bind(_s.S)($var103)))(function (arg0_7) {
        return arg0_7;
      }($var104)))(function (elm_1) {
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