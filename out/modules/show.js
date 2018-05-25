"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = exports.Dom = exports.State = undefined;

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _stream = require("./stream");

var _a = require("./a");

var _pnode = require("./pnode");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _patch = require("./patch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const State = exports.State = function (__exports) {
  const init = __exports.init = function (a, a2b, maybe_a) {
    if (maybe_a == null) {
      return a2b(a);
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

  const emptystring = __exports.emptystring = {};
  const rez = __exports.rez = (0, _stream.tap)(console.log.bind(console), (0, _stream.scan)(_state.R.apply.bind(_state.R), {}, ($var2 => ($var1 => (0, _state.oTree)((0, _stream.at)(_stream.TimeModule.ms(0), $var1)))(_a.Pith.Of.bind(_a.Pith)($var2)))(function (o) {
    ($var6 => ($var5 => {
      var arg00_;
      return ($var4 => ($var3 => o(function (s_1) {
        return _Object("achiko", s_1);
      }($var3)))((0, _state.oTree)($var4)))((arg00_ = _stream.TimeModule.ms(3000), function (a_1) {
        return (0, _stream.at)(arg00_, a_1);
      })($var5));
    })(_a.Pith.Of.bind(_a.Pith)($var6)))(function (o_1) {
      ($var9 => ($var8 => {
        var arg00__1;
        return ($var7 => o_1(function (s_2) {
          return _Number("age", s_2);
        }($var7)))((arg00__1 = _stream.TimeModule.ms(3000), function (a_3) {
          return (0, _stream.at)(arg00__1, a_3);
        })($var8));
      })(_state.R.update.bind(_state.R)($var9)))(function (_arg1) {
        return _arg1 == null ? 0 : (0, _Option.getValue)(_arg1) + 1;
      });
    });
  })));
  (0, _stream.drain)(rez), void 0;
  return __exports;
}({});

const Dom = exports.Dom = function (__exports) {
  const pnode = __exports.pnode = function (a, p, s) {
    return new _pnode.Ray(0, [a, p, s]);
  };

  const createElm = __exports.createElm = function (tag) {
    return (0, _CurriedLambda2.default)(($var14 => ($var12 => $var13 => ($var11 => ($var10 => (0, _CurriedLambda2.default)(pnode)($var10))(function (arg0) {
      return arg0;
    }($var11)))(function () {
      const elm = document.createElement(tag);
      return elm;
    })($var12, $var13))(function (arg0_1) {
      return arg0_1;
    }($var14)))(function (n) {
      return n.nodeName === tag ? n : null;
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
    return n.nodeName === "#text" ? n : null;
  }));

  const intS = __exports.intS = (0, _stream.multicast)((0, _stream.skip)(1, (0, _stream.scan)(function (c, _arg1) {
    return c + 1;
  }, 0, (0, _stream.periodic)(_stream.TimeModule.ms(10)))));

  const counter = __exports.counter = function (d) {
    return ($var17 => ($var16 => {
      var arg00_;
      return ($var15 => Div((0, _pnode.tree)($var15)))((arg00_ = _stream.TimeModule.ms(0), function (a) {
        return (0, _stream.at)(arg00_, a);
      })($var16));
    })(_a.Pith.Of.bind(_a.Pith)($var17)))(function (o) {
      ($var21 => ($var20 => {
        var arg00__1;
        return ($var19 => ($var18 => o(Button($var18)))((0, _pnode.tree)($var19)))((arg00__1 = _stream.TimeModule.ms(0), function (a_2) {
          return (0, _stream.at)(arg00__1, a_2);
        })($var20));
      })(_a.Pith.Of.bind(_a.Pith)($var21)))(function (o_1) {
        ($var25 => ($var24 => {
          var arg00__2;
          return ($var23 => ($var22 => o_1(Span($var22)))((0, _pnode.tree)($var23)))((arg00__2 = _stream.TimeModule.ms(0), function (a_4) {
            return (0, _stream.at)(arg00__2, a_4);
          })($var24));
        })(_a.Pith.Of.bind(_a.Pith)($var25)))(function (o_2) {
          ($var28 => ($var27 => {
            var arg00__3;
            return ($var26 => o_2(_Text($var26)))((arg00__3 = _stream.TimeModule.ms(0), function (a_6) {
              return (0, _stream.at)(arg00__3, a_6);
            })($var27));
          })(_patch.Patch.once.bind(_patch.Patch)($var28)))(function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var32 => ($var31 => {
        var arg00__4;
        return ($var30 => ($var29 => o(Button($var29)))((0, _pnode.tree)($var30)))((arg00__4 = _stream.TimeModule.ms(0), function (a_7) {
          return (0, _stream.at)(arg00__4, a_7);
        })($var31));
      })(_a.Pith.Of.bind(_a.Pith)($var32)))(function (o_3) {
        ($var36 => ($var35 => {
          var arg00__5;
          return ($var34 => ($var33 => o_3(Span($var33)))((0, _pnode.tree)($var34)))((arg00__5 = _stream.TimeModule.ms(0), function (a_9) {
            return (0, _stream.at)(arg00__5, a_9);
          })($var35));
        })(_a.Pith.Of.bind(_a.Pith)($var36)))(function (o_4) {
          ($var39 => ($var38 => {
            var arg00__6;
            return ($var37 => o_4(_Text($var37)))((arg00__6 = _stream.TimeModule.ms(0), function (a_11) {
              return (0, _stream.at)(arg00__6, a_11);
            })($var38));
          })(_patch.Patch.once.bind(_patch.Patch)($var39)))(function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var43 => ($var42 => {
        var arg00__7;
        return ($var41 => ($var40 => o(H3($var40)))((0, _pnode.tree)($var41)))((arg00__7 = _stream.TimeModule.ms(0), function (a_12) {
          return (0, _stream.at)(arg00__7, a_12);
        })($var42));
      })(_a.Pith.Of.bind(_a.Pith)($var43)))(function (o_5) {
        ($var45 => {
          var f_2;
          return ($var44 => o_5(_Text($var44)))((f_2 = function (i) {
            return _patch.Patch.once(function (text_2) {
              text_2.textContent = i.toString();
            });
          }, function (arg10_) {
            return (0, _stream.map)(f_2, arg10_);
          })($var45));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = (0, _stream.scan)(_patch.Patch.apply.bind(_patch.Patch), document.getElementById("root-node"), ($var47 => ($var46 => (0, _pnode.tree)((0, _stream.now)($var46)))(_a.Pith.Of.bind(_a.Pith)($var47)))(function (o) {
    o(counter(3));
  }));
  (0, _stream.drain)(rez_1), void 0;
  return __exports;
}({});

const Test = exports.Test = function (__exports) {
  const a = __exports.a = (0, _stream.now)(1);
  (0, _stream.drain)((() => {
    const f = function (n, arg10_) {
      _patch.Patch.apply(null, arg10_);
    };

    return function (arg20_) {
      return (0, _stream.scan)(f, null, arg20_);
    };
  })()(($var49 => ($var48 => _patch.Patch.tree((0, _stream.now)($var48)))(_a.Pith.Of.bind(_a.Pith)($var49)))(function (o) {
    ($var51 => ($var50 => o((0, _stream.now)($var50)))(_patch.Patch.each.bind(_patch.Patch)($var51)))(function () {
      console.log("start patching...");
    });

    ($var54 => ($var53 => ($var52 => o(_patch.Patch.tree.bind(_patch.Patch)($var52)))((0, _stream.now)($var53)))(_a.Pith.Of.bind(_a.Pith)($var54)))(function (o_1) {
      o_1((0, _stream.map)(function (i) {
        return _patch.Patch.once(function () {
          console.log("p", i);
        });
      }, (0, _stream.scan)(function (x, y) {
        return x + y;
      }, 0, (0, _stream.konst)(1, (0, _stream.periodic)(_stream.TimeModule.ms(1000))))));

      ($var56 => ($var55 => o_1((0, _stream.now)($var55)))(_patch.Patch.once.bind(_patch.Patch)($var56)))(function () {
        console.log("___");
      });
    });

    ($var58 => ($var57 => o((0, _stream.now)($var57)))(_patch.Patch.each.bind(_patch.Patch)($var58)))(function () {
      console.log("...end patching");
    });
  }))), void 0;
  return __exports;
}({});