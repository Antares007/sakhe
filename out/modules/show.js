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

  const define = __exports.define = function (x, d) {
    return [x, d];
  };

  const rez = __exports.rez = core.tap(console.log.bind(console), core.scan(function (s, r) {
    return r(s);
  }, {}, ($var1 => (0, _state.objectTree)(at()(0)($var1)))(function (o) {
    const archil = core.merge(now()(function (_arg1) {
      return {
        age: 42
      };
    }), ($var2 => (0, _state.objectTree)(at()(3000)($var2)))(function (o_1) {
      ($var5 => ($var4 => ($var3 => o_1(function (d) {
        return define("age", d);
      }($var3)))(function (arg0) {
        return new _state.RValue(1, arg0);
      }($var4)))(at()(3000)($var5)))(function (_arg2) {
        return 1;
      });
    }));

    ($var7 => ($var6 => o(function (d_1) {
      return define("არჩილ", d_1);
    }($var6)))(function (arg0_1) {
      return new _state.RValue(3, arg0_1);
    }($var7)))(archil);
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
      op_LessLessBar($var8 => o(Button($var8)), function (o_1) {
        op_LessLessBar($var9 => o_1(Span($var9)), function (o_2) {
          op_LessLessBar($var10 => o_2(_Text($var10)), function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });
      op_LessLessBar($var11 => o(Button($var11)), function (o_3) {
        op_LessLessBar($var12 => o_3(Span($var12)), function (o_4) {
          op_LessLessBar($var13 => o_4(_Text($var13)), function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });
      op_LessLessBar($var14 => o(H3($var14)), function (o_5) {
        ($var18 => {
          var arg00_;
          return ($var15 => o_5(_Text($var15)))((arg00_ = function (i, text_2) {
            text_2.textContent = i.toString();
          }, function (arg10_) {
            return core.map($var16 => $var17 => {
              arg00_($var16, $var17);
            }, arg10_);
          })($var18));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = core.scan(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var19 => (0, _pnode.tree)(core.now($var19)))(function (o) {
    o(counter(3));
  }));
  drain(rez_1);
  return __exports;
}({});