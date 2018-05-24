"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = exports.State = undefined;

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _m = require("./m");

var _a = require("./a");

var _pnode = require("./pnode");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

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
  const rez = __exports.rez = (0, _m.tap)(console.log.bind(console), (0, _m.scan)(function (s, r) {
    return r(s);
  }, {}, ($var5 => ($var4 => (0, _state.objectTree)(($var3 => ($var1 => $var2 => (0, _m.at)($var1, $var2))(_m.TimeModule.ms.bind(_m.TimeModule)($var3)))(0)($var4)))((0, _a.pith)($var5)))(function (o) {
    ($var7 => ($var6 => o(function (s_1) {
      return _Number("a", s_1);
    }($var6)))((0, _m.now)($var7)))(function (_arg1) {
      return 1;
    });

    ($var9 => ($var8 => o(function (s_2) {
      return _Object("b", s_2);
    }($var8)))((0, _m.now)($var9)))(function (_arg2) {
      return {
        k: 42
      };
    });

    ($var13 => ($var12 => ($var11 => ($var10 => o(function (s_3) {
      return _Object("b", s_3);
    }($var10)))((0, _state.objectTree)($var11)))((0, _m.now)($var12)))((0, _a.pith)($var13)))(function (o_1) {
      ($var15 => ($var14 => o_1(function (s_4) {
        return _Number("k", s_4);
      }($var14)))((0, _m.now)($var15)))(function (_arg1_1) {
        return _arg1_1 == null ? 0 : (0, _Option.getValue)(_arg1_1) + 1;
      });
    });

    ($var17 => ($var16 => o(function (s_5) {
      return _Object("array", s_5);
    }($var16)))((0, _m.now)($var17)))(function (_arg3) {
      return [{
        name: "archil",
        age: 42
      }, {
        name: "archil",
        age: 42
      }, {
        name: "archil",
        age: 42
      }, {
        name: "archil",
        age: 42
      }];
    });

    ($var21 => ($var20 => {
      var arg00__1;
      return ($var19 => ($var18 => o(function (s_6) {
        return _Array("array", s_6);
      }($var18)))((0, _state.arrayTree)($var19)))((arg00__1 = _m.TimeModule.ms(3000), function (a_6) {
        return (0, _m.at)(arg00__1, a_6);
      })($var20));
    })((0, _a.pith)($var21)))(function (a_7) {
      ($var23 => ($var22 => a_7(function (s_7) {
        return _Number(0, s_7);
      }($var22)))((0, _m.now)($var23)))(function (_arg2_1) {
        return _arg2_1 == null ? 42 : (0, _Option.getValue)(_arg2_1) + 1;
      });
    });

    ($var27 => ($var26 => {
      var arg00__2;
      return ($var25 => ($var24 => o(function (s_8) {
        return _Array("array", s_8);
      }($var24)))((0, _state.arrayTree)($var25)))((arg00__2 = _m.TimeModule.ms(3000), function (a_9) {
        return (0, _m.at)(arg00__2, a_9);
      })($var26));
    })((0, _a.pith)($var27)))(function (a_10) {
      ($var29 => ($var28 => a_10(function (s_9) {
        return _Number(0, s_9);
      }($var28)))((0, _m.now)($var29)))(function (_arg3_1) {
        return _arg3_1 == null ? 0 : (0, _Option.getValue)(_arg3_1) + 1;
      });
    });
  })));
  (0, _m.drain)(rez), void 0;
  return __exports;
}({});

const Dom = exports.Dom = function (__exports) {
  const elementAP = __exports.elementAP = function (tag) {
    return (0, _pnode.ap)(function () {
      return document.createElement(tag);
    }, function (n) {
      return n.nodeName === tag;
    });
  };

  const createElm = __exports.createElm = (0, _CurriedLambda2.default)($var32 => ($var30 => $var31 => (0, _pnode.pnode)($var30, $var31))(elementAP($var32)));
  const Div = __exports.Div = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("DIV"));
  const A = __exports.A = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("A"));
  const Button = __exports.Button = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("BUTTON"));
  const Span = __exports.Span = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("SPAN"));
  const H1 = __exports.H1 = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("H1"));
  const H2 = __exports.H2 = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("H2"));
  const H3 = __exports.H3 = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("H3"));

  const _Text = __exports.Text = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(_pnode.pnode)((0, _pnode.ap)(function () {
    return document.createTextNode("");
  }, function (n) {
    return n.nodeName === "#text";
  })));

  const intS = __exports.intS = (0, _m.multicast)((0, _m.skip)(1, (0, _m.scan)(function (c, _arg1) {
    return c + 1;
  }, 0, (0, _m.periodic)(_m.TimeModule.ms(10)))));

  const counter = __exports.counter = function (d) {
    return ($var35 => ($var34 => {
      var arg00_;
      return ($var33 => Div((0, _pnode.tree)($var33)))((arg00_ = _m.TimeModule.ms(0), function (a) {
        return (0, _m.at)(arg00_, a);
      })($var34));
    })((0, _a.pith)($var35)))(function (o) {
      ($var39 => ($var38 => {
        var arg00__1;
        return ($var37 => ($var36 => o(Button($var36)))((0, _pnode.tree)($var37)))((arg00__1 = _m.TimeModule.ms(0), function (a_1) {
          return (0, _m.at)(arg00__1, a_1);
        })($var38));
      })((0, _a.pith)($var39)))(function (o_1) {
        ($var43 => ($var42 => {
          var arg00__2;
          return ($var41 => ($var40 => o_1(Span($var40)))((0, _pnode.tree)($var41)))((arg00__2 = _m.TimeModule.ms(0), function (a_2) {
            return (0, _m.at)(arg00__2, a_2);
          })($var42));
        })((0, _a.pith)($var43)))(function (o_2) {
          ($var45 => {
            var arg00__3;
            return ($var44 => o_2(_Text($var44)))((arg00__3 = _m.TimeModule.ms(0), function (a_3) {
              return (0, _m.at)(arg00__3, a_3);
            })($var45));
          })(function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var49 => ($var48 => {
        var arg00__4;
        return ($var47 => ($var46 => o(Button($var46)))((0, _pnode.tree)($var47)))((arg00__4 = _m.TimeModule.ms(0), function (a_4) {
          return (0, _m.at)(arg00__4, a_4);
        })($var48));
      })((0, _a.pith)($var49)))(function (o_3) {
        ($var53 => ($var52 => {
          var arg00__5;
          return ($var51 => ($var50 => o_3(Span($var50)))((0, _pnode.tree)($var51)))((arg00__5 = _m.TimeModule.ms(0), function (a_5) {
            return (0, _m.at)(arg00__5, a_5);
          })($var52));
        })((0, _a.pith)($var53)))(function (o_4) {
          ($var55 => {
            var arg00__6;
            return ($var54 => o_4(_Text($var54)))((arg00__6 = _m.TimeModule.ms(0), function (a_6) {
              return (0, _m.at)(arg00__6, a_6);
            })($var55));
          })(function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var59 => ($var58 => {
        var arg00__7;
        return ($var57 => ($var56 => o(H3($var56)))((0, _pnode.tree)($var57)))((arg00__7 = _m.TimeModule.ms(0), function (a_7) {
          return (0, _m.at)(arg00__7, a_7);
        })($var58));
      })((0, _a.pith)($var59)))(function (o_5) {
        ($var63 => {
          var f_6;
          return ($var60 => o_5(_Text($var60)))((f_6 = function (i, text_2) {
            text_2.textContent = i.toString();
          }, function (arg10_) {
            return (0, _m.map)($var61 => $var62 => {
              f_6($var61, $var62);
            }, arg10_);
          })($var63));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = (0, _m.scan)(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var65 => ($var64 => (0, _pnode.tree)((0, _m.now)($var64)))((0, _a.pith)($var65)))(function (o) {
    o(counter(3));
  }));
  (0, _m.drain)(rez_1), void 0;
  return __exports;
}({});