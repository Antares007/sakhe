"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = exports.State = exports.scheduler = undefined;
exports.drain = drain;

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _pnode = require("./pnode");

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
    o(["k1", new _state.RValue(1, ($var4 => core.now.bind(core)(($var2 => $var3 => function (r_1, _arg1) {
      return init(1, r_1, _arg1);
    }($var2, $var3))($var4)))(function (s_1) {
      return s_1 + 1;
    }))]);
    o(["k2", new _state.RValue(3, core.now(function (o_1) {
      o_1(["k2.1", new _state.RValue(1, ($var7 => core.now.bind(core)(($var5 => $var6 => function (r_2, _arg1_1) {
        return init(2, r_2, _arg1_1);
      }($var5, $var6))($var7)))(function (s_2) {
        return s_2 + 1;
      }))]);
      o_1(["k2.2", new _state.RValue(1, ($var10 => core.now.bind(core)(($var8 => $var9 => function (r_3, _arg1_2) {
        return init(3, r_3, _arg1_2);
      }($var8, $var9))($var10)))(function (s_3) {
        return s_3 + 1;
      }))]);
      o_1(["k2.3", new _state.RValue(3, core.now(function (o_2) {
        o_2(["k2.3.1", new _state.RValue(1, ($var13 => core.now.bind(core)(($var11 => $var12 => function (r_4, _arg1_3) {
          return init(4, r_4, _arg1_3);
        }($var11, $var12))($var13)))(function (s_4) {
          return s_4 + 1;
        }))]);
      }))]);
    }))]);
    o(["k3", new _state.RValue(4, core.now(function (o_3) {
      o_3([0, new _state.RValue(1, ($var16 => core.now.bind(core)(($var14 => $var15 => function (r_5, _arg1_4) {
        return init(2, r_5, _arg1_4);
      }($var14, $var15))($var16)))(function (s_5) {
        return s_5 + 1;
      }))]);
      o_3([1, new _state.RValue(1, ($var19 => core.now.bind(core)(($var17 => $var18 => function (r_6, _arg1_5) {
        return init(3, r_6, _arg1_5);
      }($var17, $var18))($var19)))(function (s_6) {
        return s_6 + 1;
      }))]);
      o_3([2, new _state.RValue(3, core.now(function (o_4) {
        o_4(["k2.3.1", new _state.RValue(1, ($var22 => core.now.bind(core)(($var20 => $var21 => function (r_7, _arg1_6) {
          return init(4, r_7, _arg1_6);
        }($var20, $var21))($var22)))(function (s_7) {
          return s_7 + 1;
        }))]);
      }))]);
    }))]);
  })));
  drain(rez);
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
    return new _pnode.PNode(0, [elementAP("DIV"), (0, _pnode.tree)(pith)]);
  };

  const A = __exports.A = function (pith) {
    return new _pnode.PNode(0, [elementAP("A"), (0, _pnode.tree)(pith)]);
  };

  const Button = __exports.Button = function (pith) {
    return new _pnode.PNode(0, [elementAP("BUTTON"), (0, _pnode.tree)(pith)]);
  };

  const Span = __exports.Span = function (pith) {
    return new _pnode.PNode(0, [elementAP("SPAN"), (0, _pnode.tree)(pith)]);
  };

  const H1 = __exports.H1 = function (pith) {
    return new _pnode.PNode(0, [elementAP("H1"), (0, _pnode.tree)(pith)]);
  };

  const H2 = __exports.H2 = function (pith) {
    return new _pnode.PNode(0, [elementAP("H2"), (0, _pnode.tree)(pith)]);
  };

  const H3 = __exports.H3 = function (pith) {
    return new _pnode.PNode(0, [elementAP("H3"), (0, _pnode.tree)(pith)]);
  };

  const _Text = __exports.Text = function (p) {
    return new _pnode.PNode(0, [[function () {
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
      op_LessLessBar($var23 => o(Button($var23)), function (o_1) {
        op_LessLessBar($var24 => o_1(Span($var24)), function (o_2) {
          op_LessLessBar($var25 => o_2(_Text($var25)), function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });
      op_LessLessBar($var26 => o(Button($var26)), function (o_3) {
        op_LessLessBar($var27 => o_3(Span($var27)), function (o_4) {
          op_LessLessBar($var28 => o_4(_Text($var28)), function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });
      op_LessLessBar($var29 => o(H3($var29)), function (o_5) {
        ($var33 => {
          var arg00_;
          return ($var30 => o_5(_Text($var30)))((arg00_ = function (i, text_2) {
            text_2.textContent = i.toString();
          }, function (arg10_) {
            return core.map($var31 => $var32 => {
              arg00_($var31, $var32);
            }, arg10_);
          })($var33));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = core.scan(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var34 => (0, _pnode.tree)(core.now($var34)))(function (o) {
    o(counter(3));
  }));
  drain(rez_1);
  return __exports;
}({});