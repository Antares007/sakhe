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
  const rez = __exports.rez = (0, _m.tap)(console.log.bind(console), (0, _m.scan)(_state.R.apply.bind(_state.R), {}, ($var5 => ($var4 => (0, _state.oTree)(($var3 => ($var1 => $var2 => (0, _m.at)($var1, $var2))(_m.TimeModule.ms.bind(_m.TimeModule)($var3)))(0)($var4)))(_a.Pith.Of.bind(_a.Pith)($var5)))(function (o) {
    ($var7 => ($var6 => o(function (s_1) {
      return _Number("a", s_1);
    }($var6)))((0, _m.now)($var7)))(_state.R.set(1));

    ($var9 => ($var8 => o(function (s_2) {
      return _Object("b", s_2);
    }($var8)))((0, _m.now)($var9)))(_state.R.set({
      k: 42
    }));

    ($var13 => ($var12 => ($var11 => ($var10 => o(function (s_3) {
      return _Object("b", s_3);
    }($var10)))((0, _state.oTree)($var11)))((0, _m.now)($var12)))(_a.Pith.Of.bind(_a.Pith)($var13)))(function (o_1) {
      ($var16 => ($var15 => ($var14 => o_1(function (s_4) {
        return _Number("k", s_4);
      }($var14)))((0, _m.now)($var15)))(_state.R.update.bind(_state.R)($var16)))(function (_arg1) {
        return _arg1 == null ? 0 : (0, _Option.getValue)(_arg1) + 1;
      });
    });

    ($var19 => ($var18 => ($var17 => o(function (s_5) {
      return _Object("array", s_5);
    }($var17)))((0, _m.now)($var18)))(_state.R.update.bind(_state.R)($var19)))(function (_arg1_1) {
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

    ($var23 => ($var22 => {
      var arg00__1;
      return ($var21 => ($var20 => o(function (s_6) {
        return _Array("array", s_6);
      }($var20)))((0, _state.aTree)($var21)))((arg00__1 = _m.TimeModule.ms(3000), function (a_8) {
        return (0, _m.at)(arg00__1, a_8);
      })($var22));
    })(_a.Pith.Of.bind(_a.Pith)($var23)))(function (a_10) {
      ($var26 => ($var25 => ($var24 => a_10(function (s_7) {
        return _Number(0, s_7);
      }($var24)))((0, _m.now)($var25)))(_state.R.update.bind(_state.R)($var26)))(function (_arg2) {
        return _arg2 == null ? 42 : (0, _Option.getValue)(_arg2) + 1;
      });
    });

    ($var30 => ($var29 => {
      var arg00__2;
      return ($var28 => ($var27 => o(function (s_8) {
        return _Array("array", s_8);
      }($var27)))((0, _state.aTree)($var28)))((arg00__2 = _m.TimeModule.ms(3000), function (a_12) {
        return (0, _m.at)(arg00__2, a_12);
      })($var29));
    })(_a.Pith.Of.bind(_a.Pith)($var30)))(function (a_14) {
      ($var33 => ($var32 => ($var31 => a_14(function (s_9) {
        return _Number(0, s_9);
      }($var31)))((0, _m.now)($var32)))(_state.R.update.bind(_state.R)($var33)))(function (_arg3) {
        return _arg3 == null ? 0 : (0, _Option.getValue)(_arg3) + 1;
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

  const createElm = __exports.createElm = (0, _CurriedLambda2.default)($var36 => ($var34 => $var35 => pnode($var34, $var35))(elementAP($var36)));
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
    return ($var39 => ($var38 => {
      var arg00_;
      return ($var37 => Div((0, _pnode.tree)($var37)))((arg00_ = _m.TimeModule.ms(0), function (a) {
        return (0, _m.at)(arg00_, a);
      })($var38));
    })(_a.Pith.Of.bind(_a.Pith)($var39)))(function (o) {
      ($var43 => ($var42 => {
        var arg00__1;
        return ($var41 => ($var40 => o(Button($var40)))((0, _pnode.tree)($var41)))((arg00__1 = _m.TimeModule.ms(0), function (a_2) {
          return (0, _m.at)(arg00__1, a_2);
        })($var42));
      })(_a.Pith.Of.bind(_a.Pith)($var43)))(function (o_1) {
        ($var47 => ($var46 => {
          var arg00__2;
          return ($var45 => ($var44 => o_1(Span($var44)))((0, _pnode.tree)($var45)))((arg00__2 = _m.TimeModule.ms(0), function (a_4) {
            return (0, _m.at)(arg00__2, a_4);
          })($var46));
        })(_a.Pith.Of.bind(_a.Pith)($var47)))(function (o_2) {
          ($var50 => ($var49 => {
            var arg00__3;
            return ($var48 => o_2(_Text($var48)))((arg00__3 = _m.TimeModule.ms(0), function (a_6) {
              return (0, _m.at)(arg00__3, a_6);
            })($var49));
          })(_pnode.Patch.once.bind(_pnode.Patch)($var50)))(function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var54 => ($var53 => {
        var arg00__4;
        return ($var52 => ($var51 => o(Button($var51)))((0, _pnode.tree)($var52)))((arg00__4 = _m.TimeModule.ms(0), function (a_7) {
          return (0, _m.at)(arg00__4, a_7);
        })($var53));
      })(_a.Pith.Of.bind(_a.Pith)($var54)))(function (o_3) {
        ($var58 => ($var57 => {
          var arg00__5;
          return ($var56 => ($var55 => o_3(Span($var55)))((0, _pnode.tree)($var56)))((arg00__5 = _m.TimeModule.ms(0), function (a_9) {
            return (0, _m.at)(arg00__5, a_9);
          })($var57));
        })(_a.Pith.Of.bind(_a.Pith)($var58)))(function (o_4) {
          ($var61 => ($var60 => {
            var arg00__6;
            return ($var59 => o_4(_Text($var59)))((arg00__6 = _m.TimeModule.ms(0), function (a_11) {
              return (0, _m.at)(arg00__6, a_11);
            })($var60));
          })(_pnode.Patch.once.bind(_pnode.Patch)($var61)))(function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var65 => ($var64 => {
        var arg00__7;
        return ($var63 => ($var62 => o(H3($var62)))((0, _pnode.tree)($var63)))((arg00__7 = _m.TimeModule.ms(0), function (a_12) {
          return (0, _m.at)(arg00__7, a_12);
        })($var64));
      })(_a.Pith.Of.bind(_a.Pith)($var65)))(function (o_5) {
        ($var67 => {
          var f_2;
          return ($var66 => o_5(_Text($var66)))((f_2 = function (i) {
            return _pnode.Patch.once(function (text_2) {
              text_2.textContent = i.toString();
            });
          }, function (arg10_) {
            return (0, _m.map)(f_2, arg10_);
          })($var67));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = (0, _m.scan)(_pnode.Patch.apply.bind(_pnode.Patch), document.getElementById("root-node"), ($var69 => ($var68 => (0, _pnode.tree)((0, _m.now)($var68)))(_a.Pith.Of.bind(_a.Pith)($var69)))(function (o) {
    o(counter(3));
  }));
  (0, _m.drain)(rez_1), void 0;
  return __exports;
}({});