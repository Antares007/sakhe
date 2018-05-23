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

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _state = require("./state");

var _pnode = require("./pnode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const scheduler = exports.scheduler = scheduler_1.newDefaultScheduler();

function drain(s) {
  core.runEffects(s, scheduler), void 0;
}

const State = exports.State = function (__exports) {
  const init = __exports.init = function (a, a2b, maybe_a) {
    if (maybe_a == null) {
      return a2b(a);
    } else {
      return a2b((0, _Option.getValue)(maybe_a));
    }
  };

  const now = __exports.now = function () {
    return (0, _CurriedLambda2.default)(core.now.bind(core));
  };

  const constant = __exports.constant = function () {
    return (0, _CurriedLambda2.default)(core.constant.bind(core));
  };

  const at = __exports.at = function () {
    return (0, _CurriedLambda2.default)(core.at.bind(core));
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
  const rez = __exports.rez = core.tap(console.log.bind(console), core.scan(function (s, r) {
    return r(s);
  }, {}, ($var1 => (0, _state.objectTree)(at()(0)($var1)))(function (o) {
    ($var3 => ($var2 => o(function (s_1) {
      return _Number("a", s_1);
    }($var2)))(now()($var3)))(function (_arg1) {
      return 1;
    });

    ($var5 => ($var4 => o(function (s_2) {
      return _Object("b", s_2);
    }($var4)))(now()($var5)))(function (_arg2) {
      return {
        k: 42
      };
    });

    ($var8 => ($var7 => ($var6 => o(function (s_3) {
      return _Object("b", s_3);
    }($var6)))((0, _state.objectTree)($var7)))(now()($var8)))(function (o_1) {
      ($var10 => ($var9 => o_1(function (s_4) {
        return _Number("k", s_4);
      }($var9)))(now()($var10)))(function (_arg1_1) {
        return _arg1_1 == null ? 0 : (0, _Option.getValue)(_arg1_1) + 1;
      });
    });

    ($var12 => ($var11 => o(function (s_5) {
      return _Object("array", s_5);
    }($var11)))(now()($var12)))(function (_arg3) {
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

    ($var15 => ($var14 => ($var13 => o(function (s_6) {
      return _Array("array", s_6);
    }($var13)))((0, _state.arrayTree)($var14)))(at()(3000)($var15)))(function (a) {
      ($var17 => ($var16 => a(function (s_7) {
        return _Number(0, s_7);
      }($var16)))(now()($var17)))(function (_arg2_1) {
        return _arg2_1 == null ? 1 : (0, _Option.getValue)(_arg2_1) + 1;
      });
    });

    ($var20 => ($var19 => ($var18 => o(function (s_8) {
      return _Array("array", s_8);
    }($var18)))((0, _state.arrayTree)($var19)))(at()(3000)($var20)))(function (a_1) {
      ($var22 => ($var21 => a_1(function (s_9) {
        return _Number(0, s_9);
      }($var21)))(now()($var22)))(function (_arg3_1) {
        return _arg3_1 == null ? 0 : (0, _Option.getValue)(_arg3_1) + 1;
      });
    });
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