"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = exports.State2 = exports.State = exports.scheduler = undefined;
exports.drain = drain;

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _state2 = require("./state2");

var _p = require("./p");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const scheduler = exports.scheduler = scheduler_1.newDefaultScheduler();

function drain(s) {
  core.runEffects(s, scheduler), void 0;
}

const State = exports.State = function (__exports) {
  const init = __exports.init = function (iv, r, _arg1) {
    if (_arg1 == null) {
      return r(iv);
    } else {
      return r((0, _Option.getValue)(_arg1));
    }
  };

  const rez = __exports.rez = core.tap(console.log.bind(console), core.scan(function (s, r) {
    return r(s);
  }, {}, ($var1 => (0, _state.oTree)(core.now($var1)))(function (o) {
    ($var5 => ($var2 => {
      var objectArg;
      return (objectArg = o("key1"), objectArg.JNumber.bind(objectArg))(core.now.bind(core)($var2));
    })(($var3 => $var4 => function (r_1, _arg1) {
      return init(1, r_1, _arg1);
    }($var3, $var4))($var5)))(function (s_1) {
      return s_1 + 1;
    });

    ($var6 => {
      var objectArg_1;
      return (objectArg_1 = o("key2"), objectArg_1.JObject.bind(objectArg_1))(core.now.bind(core)($var6));
    })(function (o_1) {
      ($var10 => ($var7 => {
        var objectArg_2;
        return (objectArg_2 = o_1("key1"), objectArg_2.JNumber.bind(objectArg_2))(core.now.bind(core)($var7));
      })(($var8 => $var9 => function (r_2, _arg1_1) {
        return init(0, r_2, _arg1_1);
      }($var8, $var9))($var10)))(function (f) {
        return f + 1;
      });

      ($var14 => ($var11 => {
        var objectArg_3;
        return (objectArg_3 = o_1("key1"), objectArg_3.JNumber.bind(objectArg_3))(core.now.bind(core)($var11));
      })(($var12 => $var13 => function (r_3, _arg1_2) {
        return init(0, r_3, _arg1_2);
      }($var12, $var13))($var14)))(function (f_1) {
        return f_1 + 1;
      });
    });

    ($var15 => {
      var objectArg_4;
      return (objectArg_4 = o("key3"), objectArg_4.JArray.bind(objectArg_4))(core.now.bind(core)($var15));
    })(function (o_2) {
      ($var19 => ($var16 => o_2.JString.bind(o_2)(core.now.bind(core)($var16)))(($var17 => $var18 => function (r_4, _arg1_3) {
        return init("a", r_4, _arg1_3);
      }($var17, $var18))($var19)))(function (s_2) {
        return s_2 + s_2;
      });

      ($var23 => ($var20 => o_2.JString.bind(o_2)(core.now.bind(core)($var20)))(($var21 => $var22 => function (r_5, _arg1_4) {
        return init("b", r_5, _arg1_4);
      }($var21, $var22))($var23)))(function (s_3) {
        return s_3 + s_3;
      });

      ($var27 => ($var24 => o_2.JString.bind(o_2)(core.now.bind(core)($var24)))(($var25 => $var26 => function (r_6, _arg1_5) {
        return init("o", r_6, _arg1_5);
      }($var25, $var26))($var27)))(function (s_4) {
        return s_4 + s_4;
      });
    });
  })));
  return __exports;
}({});

const State2 = exports.State2 = function (__exports) {
  const init_1 = __exports.init = function (iv, r, _arg1) {
    if (_arg1 == null) {
      return r(iv);
    } else {
      return r((0, _Option.getValue)(_arg1));
    }
  };

  const rez_1 = __exports.rez = core.tap(console.log.bind(console), core.scan(function (s, r) {
    return r(s);
  }, {}, ($var28 => (0, _state2.oTree)(core.now($var28)))(function (o) {
    o(["k1", new _state2.RValue(1, ($var31 => core.now.bind(core)(($var29 => $var30 => function (r_1, _arg1) {
      return init_1(1, r_1, _arg1);
    }($var29, $var30))($var31)))(function (s_1) {
      return s_1 + 1;
    }))]);
    o(["k2", new _state2.RValue(3, core.now(function (o_1) {
      o_1(["k2.1", new _state2.RValue(1, ($var34 => core.now.bind(core)(($var32 => $var33 => function (r_2, _arg1_1) {
        return init_1(2, r_2, _arg1_1);
      }($var32, $var33))($var34)))(function (s_2) {
        return s_2 + 1;
      }))]);
      o_1(["k2.2", new _state2.RValue(1, ($var37 => core.now.bind(core)(($var35 => $var36 => function (r_3, _arg1_2) {
        return init_1(3, r_3, _arg1_2);
      }($var35, $var36))($var37)))(function (s_3) {
        return s_3 + 1;
      }))]);
      o_1(["k2.3", new _state2.RValue(3, core.now(function (o_2) {
        o_2(["k2.3.1", new _state2.RValue(1, ($var40 => core.now.bind(core)(($var38 => $var39 => function (r_4, _arg1_3) {
          return init_1(4, r_4, _arg1_3);
        }($var38, $var39))($var40)))(function (s_4) {
          return s_4 + 1;
        }))]);
      }))]);
    }))]);
    o(["k3", new _state2.RValue(4, core.now(function (o_3) {
      o_3([0, new _state2.RValue(1, ($var43 => core.now.bind(core)(($var41 => $var42 => function (r_5, _arg1_4) {
        return init_1(2, r_5, _arg1_4);
      }($var41, $var42))($var43)))(function (s_5) {
        return s_5 + 1;
      }))]);
      o_3([1, new _state2.RValue(1, ($var46 => core.now.bind(core)(($var44 => $var45 => function (r_6, _arg1_5) {
        return init_1(3, r_6, _arg1_5);
      }($var44, $var45))($var46)))(function (s_6) {
        return s_6 + 1;
      }))]);
      o_3([2, new _state2.RValue(3, core.now(function (o_4) {
        o_4(["k2.3.1", new _state2.RValue(1, ($var49 => core.now.bind(core)(($var47 => $var48 => function (r_7, _arg1_6) {
          return init_1(4, r_7, _arg1_6);
        }($var47, $var48))($var49)))(function (s_7) {
          return s_7 + 1;
        }))]);
      }))]);
    }))]);
  })));
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

  const Div = __exports.Div = function (pith) {
    return new _p.Dom(0, [elementAP("DIV"), (0, _p.tree)(pith)]);
  };

  const A = __exports.A = function (pith) {
    return new _p.Dom(0, [elementAP("A"), (0, _p.tree)(pith)]);
  };

  const Button = __exports.Button = function (pith) {
    return new _p.Dom(0, [elementAP("BUTTON"), (0, _p.tree)(pith)]);
  };

  const Span = __exports.Span = function (pith) {
    return new _p.Dom(0, [elementAP("SPAN"), (0, _p.tree)(pith)]);
  };

  const H1 = __exports.H1 = function (pith) {
    return new _p.Dom(0, [elementAP("H1"), (0, _p.tree)(pith)]);
  };

  const H2 = __exports.H2 = function (pith) {
    return new _p.Dom(0, [elementAP("H2"), (0, _p.tree)(pith)]);
  };

  const H3 = __exports.H3 = function (pith) {
    return new _p.Dom(0, [elementAP("H3"), (0, _p.tree)(pith)]);
  };

  const _Text = __exports.Text = function (p) {
    return new _p.Dom(1, [[function () {
      return document.createTextNode("");
    }, function (n) {
      return n.nodeName === "#text";
    }], p]);
  };

  const op_LessLessBar = __exports.op_LessLessBar = function (a, b) {
    return a(core.now(b));
  };

  const intS = __exports.intS = core.multicast(core.skip(1, core.scan(function (c, _arg1) {
    return c + 1;
  }, 0, core.periodic(10))));

  const counter = __exports.counter = function (d) {
    return op_LessLessBar(Div, function (o) {
      op_LessLessBar($var50 => o(Button($var50)), function (o_1) {
        op_LessLessBar($var51 => o_1(Span($var51)), function (o_2) {
          op_LessLessBar($var52 => o_2(_Text($var52)), function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });
      op_LessLessBar($var53 => o(Button($var53)), function (o_3) {
        op_LessLessBar($var54 => o_3(Span($var54)), function (o_4) {
          op_LessLessBar($var55 => o_4(_Text($var55)), function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });
      op_LessLessBar($var56 => o(H3($var56)), function (o_5) {
        ($var60 => {
          var arg00_;
          return ($var57 => o_5(_Text($var57)))((arg00_ = function (i, text_2) {
            text_2.textContent = i.toString();
          }, function (arg10_) {
            return core.map($var58 => $var59 => {
              arg00_($var58, $var59);
            }, arg10_);
          })($var60));
        })(intS);
      });
    });
  };

  const rez_2 = __exports.rez = core.scan(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var61 => (0, _p.tree)(core.now($var61)))(function (o) {
    o(counter(3));
  }));
  drain(rez_2);
  return __exports;
}({});