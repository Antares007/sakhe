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
    return [function () {
      return document.createElement(tag);
    }, function (n) {
      return n.nodeName === tag;
    }];
  };

  const Div = __exports.Div = function (r) {
    return new _pnode.PNode(0, [elementAP("DIV"), r]);
  };

  const A = __exports.A = function (r) {
    return new _pnode.PNode(0, [elementAP("A"), r]);
  };

  const Button = __exports.Button = function (r) {
    return new _pnode.PNode(0, [elementAP("BUTTON"), r]);
  };

  const Span = __exports.Span = function (r) {
    return new _pnode.PNode(0, [elementAP("SPAN"), r]);
  };

  const H1 = __exports.H1 = function (r) {
    return new _pnode.PNode(0, [elementAP("H1"), r]);
  };

  const H2 = __exports.H2 = function (r) {
    return new _pnode.PNode(0, [elementAP("H2"), r]);
  };

  const H3 = __exports.H3 = function (r) {
    return new _pnode.PNode(0, [elementAP("H3"), r]);
  };

  const _Text = __exports.Text = function (p) {
    return new _pnode.PNode(0, [[function () {
      return document.createTextNode("");
    }, function (n) {
      return n.nodeName === "#text";
    }], p]);
  };

  const intS = __exports.intS = (0, _m.multicast)((0, _m.skip)(1, (0, _m.scan)(function (c, _arg1) {
    return c + 1;
  }, 0, (0, _m.periodic)(_m.TimeModule.ms(10)))));

  const counter = __exports.counter = function (d) {
    return ($var32 => ($var31 => {
      var arg00_;
      return ($var30 => Div((0, _pnode.tree)($var30)))((arg00_ = _m.TimeModule.ms(0), function (a) {
        return (0, _m.at)(arg00_, a);
      })($var31));
    })((0, _a.pith)($var32)))(function (o) {
      ($var36 => ($var35 => {
        var arg00__1;
        return ($var34 => ($var33 => o(Button($var33)))((0, _pnode.tree)($var34)))((arg00__1 = _m.TimeModule.ms(0), function (a_1) {
          return (0, _m.at)(arg00__1, a_1);
        })($var35));
      })((0, _a.pith)($var36)))(function (o_1) {
        ($var40 => ($var39 => {
          var arg00__2;
          return ($var38 => ($var37 => o_1(Span($var37)))((0, _pnode.tree)($var38)))((arg00__2 = _m.TimeModule.ms(0), function (a_2) {
            return (0, _m.at)(arg00__2, a_2);
          })($var39));
        })((0, _a.pith)($var40)))(function (o_2) {
          ($var42 => {
            var arg00__3;
            return ($var41 => o_2(_Text($var41)))((arg00__3 = _m.TimeModule.ms(0), function (a_3) {
              return (0, _m.at)(arg00__3, a_3);
            })($var42));
          })(function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var46 => ($var45 => {
        var arg00__4;
        return ($var44 => ($var43 => o(Button($var43)))((0, _pnode.tree)($var44)))((arg00__4 = _m.TimeModule.ms(0), function (a_4) {
          return (0, _m.at)(arg00__4, a_4);
        })($var45));
      })((0, _a.pith)($var46)))(function (o_3) {
        ($var50 => ($var49 => {
          var arg00__5;
          return ($var48 => ($var47 => o_3(Span($var47)))((0, _pnode.tree)($var48)))((arg00__5 = _m.TimeModule.ms(0), function (a_5) {
            return (0, _m.at)(arg00__5, a_5);
          })($var49));
        })((0, _a.pith)($var50)))(function (o_4) {
          ($var52 => {
            var arg00__6;
            return ($var51 => o_4(_Text($var51)))((arg00__6 = _m.TimeModule.ms(0), function (a_6) {
              return (0, _m.at)(arg00__6, a_6);
            })($var52));
          })(function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var56 => ($var55 => {
        var arg00__7;
        return ($var54 => ($var53 => o(H3($var53)))((0, _pnode.tree)($var54)))((arg00__7 = _m.TimeModule.ms(0), function (a_7) {
          return (0, _m.at)(arg00__7, a_7);
        })($var55));
      })((0, _a.pith)($var56)))(function (o_5) {
        ($var60 => {
          var f_6;
          return ($var57 => o_5(_Text($var57)))((f_6 = function (i, text_2) {
            text_2.textContent = i.toString();
          }, function (arg10_) {
            return (0, _m.map)($var58 => $var59 => {
              f_6($var58, $var59);
            }, arg10_);
          })($var60));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = (0, _m.scan)(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var62 => ($var61 => (0, _pnode.tree)((0, _m.now)($var61)))((0, _a.pith)($var62)))(function (o) {
    o(counter(3));
  }));
  (0, _m.drain)(rez_1), void 0;
  return __exports;
}({});