"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = exports.State = undefined;

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _m = require("./m");

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
  const rez = __exports.rez = (0, _m.tap)(console.log.bind(console), (0, _m.scan)(function (s, _arg4) {
    return _arg4(s);
  }, {}, ($var5 => ($var4 => (0, _state.oTree)(($var3 => ($var1 => $var2 => (0, _m.at)($var1, $var2))(_m.TimeModule.ms.bind(_m.TimeModule)($var3)))(0)($var4)))(function (arg0) {
    return arg0;
  }($var5)))(function (o) {
    ($var8 => ($var7 => ($var6 => o(function (s_1) {
      return _Number("a", s_1);
    }($var6)))((0, _m.now)($var7)))(function (arg0_1) {
      return arg0_1;
    }($var8)))(function (_arg1) {
      return 1;
    });

    ($var11 => ($var10 => ($var9 => o(function (s_2) {
      return _Object("b", s_2);
    }($var9)))((0, _m.now)($var10)))(function (arg0_2) {
      return arg0_2;
    }($var11)))(function (_arg2) {
      return {
        k: 42
      };
    });

    ($var15 => ($var14 => ($var13 => ($var12 => o(function (s_3) {
      return _Object("b", s_3);
    }($var12)))((0, _state.oTree)($var13)))((0, _m.now)($var14)))(function (arg0_3) {
      return arg0_3;
    }($var15)))(function (o_1) {
      ($var18 => ($var17 => ($var16 => o_1(function (s_4) {
        return _Number("k", s_4);
      }($var16)))((0, _m.now)($var17)))(function (arg0_4) {
        return arg0_4;
      }($var18)))(function (_arg1_1) {
        return _arg1_1 == null ? 0 : (0, _Option.getValue)(_arg1_1) + 1;
      });
    });

    ($var21 => ($var20 => ($var19 => o(function (s_5) {
      return _Object("array", s_5);
    }($var19)))((0, _m.now)($var20)))(function (arg0_5) {
      return arg0_5;
    }($var21)))(function (_arg3) {
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

    ($var25 => ($var24 => {
      var arg00__1;
      return ($var23 => ($var22 => o(function (s_6) {
        return _Array("array", s_6);
      }($var22)))((0, _state.aTree)($var23)))((arg00__1 = _m.TimeModule.ms(3000), function (a_6) {
        return (0, _m.at)(arg00__1, a_6);
      })($var24));
    })(function (arg0_6) {
      return arg0_6;
    }($var25)))(function (a_7) {
      ($var28 => ($var27 => ($var26 => a_7(function (s_7) {
        return _Number(0, s_7);
      }($var26)))((0, _m.now)($var27)))(function (arg0_7) {
        return arg0_7;
      }($var28)))(function (_arg2_1) {
        return _arg2_1 == null ? 42 : (0, _Option.getValue)(_arg2_1) + 1;
      });
    });

    ($var32 => ($var31 => {
      var arg00__2;
      return ($var30 => ($var29 => o(function (s_8) {
        return _Array("array", s_8);
      }($var29)))((0, _state.aTree)($var30)))((arg00__2 = _m.TimeModule.ms(3000), function (a_9) {
        return (0, _m.at)(arg00__2, a_9);
      })($var31));
    })(function (arg0_8) {
      return arg0_8;
    }($var32)))(function (a_10) {
      ($var35 => ($var34 => ($var33 => a_10(function (s_9) {
        return _Number(0, s_9);
      }($var33)))((0, _m.now)($var34)))(function (arg0_9) {
        return arg0_9;
      }($var35)))(function (_arg3_1) {
        return _arg3_1 == null ? 0 : (0, _Option.getValue)(_arg3_1) + 1;
      });
    });
  })));
  (0, _m.drain)(rez), void 0;
  return __exports;
}({});

const Dom = exports.Dom = function (__exports) {
  const ap = __exports.ap = function (a, b) {
    return new _pnode.AP(0, [a, b]);
  };

  const pnode = __exports.pnode = function (ap_1, s) {
    return new _pnode.PNode(0, [ap_1, s]);
  };

  const elementAP = __exports.elementAP = function (tag) {
    return ap(function () {
      return document.createElement(tag);
    }, function (n) {
      return n.nodeName === tag;
    });
  };

  const createElm = __exports.createElm = (0, _CurriedLambda2.default)($var38 => ($var36 => $var37 => pnode($var36, $var37))(elementAP($var38)));
  const Div = __exports.Div = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("DIV"));
  const A = __exports.A = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("A"));
  const Button = __exports.Button = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("BUTTON"));
  const Span = __exports.Span = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("SPAN"));
  const H1 = __exports.H1 = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("H1"));
  const H2 = __exports.H2 = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("H2"));
  const H3 = __exports.H3 = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(createElm)("H3"));

  const _Text = __exports.Text = (0, _CurriedLambda2.default)((0, _CurriedLambda2.default)(pnode)(ap(function () {
    return document.createTextNode("");
  }, function (n) {
    return n.nodeName === "#text";
  })));

  const intS = __exports.intS = (0, _m.multicast)((0, _m.skip)(1, (0, _m.scan)(function (c, _arg1) {
    return c + 1;
  }, 0, (0, _m.periodic)(_m.TimeModule.ms(10)))));

  const counter = __exports.counter = function (d) {
    return ($var41 => ($var40 => {
      var arg00_;
      return ($var39 => Div((0, _pnode.tree)($var39)))((arg00_ = _m.TimeModule.ms(0), function (a) {
        return (0, _m.at)(arg00_, a);
      })($var40));
    })(function (arg0) {
      return arg0;
    }($var41)))(function (o) {
      ($var45 => ($var44 => {
        var arg00__1;
        return ($var43 => ($var42 => o(Button($var42)))((0, _pnode.tree)($var43)))((arg00__1 = _m.TimeModule.ms(0), function (a_1) {
          return (0, _m.at)(arg00__1, a_1);
        })($var44));
      })(function (arg0_1) {
        return arg0_1;
      }($var45)))(function (o_1) {
        ($var49 => ($var48 => {
          var arg00__2;
          return ($var47 => ($var46 => o_1(Span($var46)))((0, _pnode.tree)($var47)))((arg00__2 = _m.TimeModule.ms(0), function (a_2) {
            return (0, _m.at)(arg00__2, a_2);
          })($var48));
        })(function (arg0_2) {
          return arg0_2;
        }($var49)))(function (o_2) {
          ($var51 => {
            var arg00__3;
            return ($var50 => o_2(_Text($var50)))((arg00__3 = _m.TimeModule.ms(0), function (a_3) {
              return (0, _m.at)(arg00__3, a_3);
            })($var51));
          })(function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var55 => ($var54 => {
        var arg00__4;
        return ($var53 => ($var52 => o(Button($var52)))((0, _pnode.tree)($var53)))((arg00__4 = _m.TimeModule.ms(0), function (a_4) {
          return (0, _m.at)(arg00__4, a_4);
        })($var54));
      })(function (arg0_3) {
        return arg0_3;
      }($var55)))(function (o_3) {
        ($var59 => ($var58 => {
          var arg00__5;
          return ($var57 => ($var56 => o_3(Span($var56)))((0, _pnode.tree)($var57)))((arg00__5 = _m.TimeModule.ms(0), function (a_5) {
            return (0, _m.at)(arg00__5, a_5);
          })($var58));
        })(function (arg0_4) {
          return arg0_4;
        }($var59)))(function (o_4) {
          ($var61 => {
            var arg00__6;
            return ($var60 => o_4(_Text($var60)))((arg00__6 = _m.TimeModule.ms(0), function (a_6) {
              return (0, _m.at)(arg00__6, a_6);
            })($var61));
          })(function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var65 => ($var64 => {
        var arg00__7;
        return ($var63 => ($var62 => o(H3($var62)))((0, _pnode.tree)($var63)))((arg00__7 = _m.TimeModule.ms(0), function (a_7) {
          return (0, _m.at)(arg00__7, a_7);
        })($var64));
      })(function (arg0_5) {
        return arg0_5;
      }($var65)))(function (o_5) {
        ($var69 => {
          var f;
          return ($var66 => o_5(_Text($var66)))((f = function (i, text_2) {
            text_2.textContent = i.toString();
          }, function (arg10_) {
            return (0, _m.map)($var67 => $var68 => {
              f($var67, $var68);
            }, arg10_);
          })($var69));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = (0, _m.scan)(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var71 => ($var70 => (0, _pnode.tree)((0, _m.now)($var70)))(function (arg0) {
    return arg0;
  }($var71)))(function (o) {
    o(counter(3));
  }));
  (0, _m.drain)(rez_1), void 0;
  return __exports;
}({});