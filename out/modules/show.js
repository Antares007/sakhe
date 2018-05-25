"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = exports.Dom = exports.State = undefined;

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _stream = require("./stream");

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

  const rez = __exports.rez = _stream.S.tap(console.log.bind(console), _stream.S.scan(_state.R.apply.bind(_state.R), {}, ($var2 => ($var1 => (0, _state.oTree)(_stream.S.at(_stream.TimeModule.ms(0), $var1)))(function (arg0) {
    return arg0;
  }($var2)))(function (o) {
    ($var6 => ($var5 => {
      var arg00_;
      return ($var4 => ($var3 => o(function (s_1) {
        return _Object("achiko", s_1);
      }($var3)))((0, _state.oTree)($var4)))((arg00_ = _stream.TimeModule.ms(3000), function (a) {
        return _stream.S.at(arg00_, a);
      })($var5));
    })(function (arg0_1) {
      return arg0_1;
    }($var6)))(function (o_1) {
      ($var9 => ($var8 => {
        var arg00__1;
        return ($var7 => o_1(function (s_2) {
          return _Number("age", s_2);
        }($var7)))((arg00__1 = _stream.TimeModule.ms(3000), function (a_1) {
          return _stream.S.at(arg00__1, a_1);
        })($var8));
      })(_state.R.update.bind(_state.R)($var9)))(function (_arg1) {
        return _arg1 == null ? 0 : (0, _Option.getValue)(_arg1) + 1;
      });
    });
  })));

  _stream.S.drain(rez), void 0;
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

  const intS = __exports.intS = _stream.S.multicast(_stream.S.skip(1, _stream.S.scan(function (c, _arg1) {
    return c + 1;
  }, 0, _stream.S.periodic(_stream.TimeModule.ms(10)))));

  const statTree = __exports.statTree = function (t, p) {
    return ($var17 => ($var16 => ($var15 => t((0, _pnode.tree)($var15)))(_stream.S.now.bind(_stream.S)($var16)))(function (arg0) {
      return arg0;
    }($var17)))(p);
  };

  const div = __exports.div = (0, _CurriedLambda2.default)(function (p) {
    return statTree(Div, p);
  });
  const btn = __exports.btn = (0, _CurriedLambda2.default)(function (p) {
    return statTree(Button, p);
  });
  const span = __exports.span = (0, _CurriedLambda2.default)(function (p) {
    return statTree(Span, p);
  });
  const h3 = __exports.h3 = (0, _CurriedLambda2.default)(function (p) {
    return statTree(H3, p);
  });

  const text = __exports.text = function (s) {
    return ($var19 => ($var18 => {
      var arg00_;
      return _Text((arg00_ = _stream.TimeModule.ms(0), function (a) {
        return _stream.S.at(arg00_, a);
      })($var18));
    })(_patch.Patch.once.bind(_patch.Patch)($var19)))(function (text_1) {
      text_1.textContent = s;
    });
  };

  const counter = __exports.counter = function (d) {
    return div(function (o) {
      ($var20 => o(btn($var20)))(function (o_1) {
        ($var21 => o_1(span($var21)))(function (o_2) {
          ($var22 => o_2(text($var22)))("+");
        });

        if (d > 0) {
          o_1(counter(d - 1));
        }
      });

      ($var23 => o(btn($var23)))(function (o_3) {
        ($var24 => o_3(span($var24)))(function (o_4) {
          ($var25 => o_4(text($var25)))("-");
        });

        if (d > 0) {
          o_3(counter(d - 1));
        }
      });

      ($var26 => o(h3($var26)))(function (o_5) {
        ($var28 => {
          var f;
          return ($var27 => o_5(_Text($var27)))((f = function (i) {
            return _patch.Patch.once(function (text_1) {
              text_1.textContent = i.toString();
            });
          }, function (arg10_) {
            return _stream.S.map(f, arg10_);
          })($var28));
        })(intS);
      });
    });
  };

  const rez_1 = __exports.rez = _stream.S.scan(_patch.Patch.apply.bind(_patch.Patch), document.getElementById("root-node"), ($var30 => ($var29 => (0, _pnode.tree)(_stream.S.now($var29)))(function (arg0) {
    return arg0;
  }($var30)))(function (o) {
    o(counter(3));
  }));

  _stream.S.drain(rez_1), void 0;
  return __exports;
}({});

const Test = exports.Test = function (__exports) {
  const a = __exports.a = _stream.S.now(1);

  _stream.S.drain((() => {
    const f = function (n, arg10_) {
      _patch.Patch.apply(null, arg10_);
    };

    return function (arg20_) {
      return _stream.S.scan(f, null, arg20_);
    };
  })()(($var32 => ($var31 => _patch.Patch.tree(_stream.S.now($var31)))(function (arg0) {
    return arg0;
  }($var32)))(function (o) {
    ($var34 => ($var33 => o(_stream.S.now.bind(_stream.S)($var33)))(_patch.Patch.each.bind(_patch.Patch)($var34)))(function () {
      console.log("start patching...");
    });

    ($var37 => ($var36 => ($var35 => o(_patch.Patch.tree.bind(_patch.Patch)($var35)))(_stream.S.now.bind(_stream.S)($var36)))(function (arg0_1) {
      return arg0_1;
    }($var37)))(function (o_1) {
      o_1(_stream.S.map(function (i) {
        return _patch.Patch.once(function () {
          console.log("p", i);
        });
      }, _stream.S.scan(function (x, y) {
        return x + y;
      }, 0, _stream.S.konst(1, _stream.S.periodic(_stream.TimeModule.ms(1000))))));

      ($var39 => ($var38 => o_1(_stream.S.now.bind(_stream.S)($var38)))(_patch.Patch.once.bind(_patch.Patch)($var39)))(function () {
        console.log("___");
      });
    });

    ($var41 => ($var40 => o(_stream.S.now.bind(_stream.S)($var40)))(_patch.Patch.each.bind(_patch.Patch)($var41)))(function () {
      console.log("...end patching");
    });
  }))), void 0;
  return __exports;
}({});