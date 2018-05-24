"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = exports.State = exports.scheduler = undefined;
exports.drain = drain;
exports.now = now;
exports.constant = constant;
exports.at = at;

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _pnode = require("./pnode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const scheduler = exports.scheduler = scheduler_1.newDefaultScheduler();

function drain(s) {
  core.runEffects(s, scheduler), void 0;
}

function now() {
  return (0, _CurriedLambda2.default)(core.now.bind(core));
}

function constant() {
  return (0, _CurriedLambda2.default)(core.constant.bind(core));
}

function at() {
  return (0, _CurriedLambda2.default)(core.at.bind(core));
}

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
        return _arg2_1 == null ? 42 : (0, _Option.getValue)(_arg2_1) + 1;
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

  const intS = __exports.intS = core.multicast(core.skip(1, core.scan(function (c, _arg1) {
    return c + 1;
  }, 0, core.periodic(10))));

  const counter = __exports.counter = function (d) {
    return ($var24 => ($var23 => Div((0, _pnode.tree)($var23)))(at()(0)($var24)))(function (o) {
      ($var27 => ($var26 => ($var25 => o(Button($var25)))((0, _pnode.tree)($var26)))(at()(0)($var27)))(function (o_1) {
        ($var30 => ($var29 => ($var28 => o_1(Span($var28)))((0, _pnode.tree)($var29)))(at()(0)($var30)))(function (o_2) {
          ($var32 => ($var31 => o_2(_Text($var31)))(at()(0)($var32)))(function (text) {
            text.textContent = "+";
          });
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var35 => ($var34 => ($var33 => o(Button($var33)))((0, _pnode.tree)($var34)))(at()(0)($var35)))(function (o_3) {
        ($var38 => ($var37 => ($var36 => o_3(Span($var36)))((0, _pnode.tree)($var37)))(at()(0)($var38)))(function (o_4) {
          ($var40 => ($var39 => o_4(_Text($var39)))(at()(0)($var40)))(function (text_1) {
            text_1.textContent = "-";
          });
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var43 => ($var42 => ($var41 => o(H3($var41)))((0, _pnode.tree)($var42)))(at()(0)($var43)))(function (o_5) {
        ($var47 => {
          var arg00_;
          return ($var44 => o_5(_Text($var44)))((arg00_ = function (i, text_2) {
            text_2.textContent = i.toString();
          }, function (arg10_) {
            return core.map($var45 => $var46 => {
              arg00_($var45, $var46);
            }, arg10_);
          })($var47));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = core.scan(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var48 => (0, _pnode.tree)(core.now($var48)))(function (o) {
    o(counter(3));
  }));
  drain(rez_1);
  return __exports;
}({});