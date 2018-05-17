"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.text = exports.button = exports.div = exports.span = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.a = undefined;
exports.mkAbsurdProve = mkAbsurdProve;
exports.elm = elm;
exports.chr = chr;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.Span = Span;
exports.Div = Div;
exports.Button = Button;
exports.run = run;

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _new = require("./new");

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mkAbsurdProve(create, prove) {
  return [create, function (n) {
    return prove(n) ? (0, _Option.makeSome)(n) : null;
  }];
}

function elm(ap_0, ap_1, pith) {
  const ap = [ap_0, ap_1];
  return [ap, pith];
}

function chr(ap_0, ap_1, pith) {
  const ap = [ap_0, ap_1];
  return [ap, pith];
}

const a = exports.a = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("a".toUpperCase());

const h1 = exports.h1 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h1".toUpperCase());

const h2 = exports.h2 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h2".toUpperCase());

const h3 = exports.h3 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h3".toUpperCase());

const h4 = exports.h4 = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("h4".toUpperCase());

const span = exports.span = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("span".toUpperCase());

const div = exports.div = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("div".toUpperCase());

const button = exports.button = (tag => [() => document.createElement(tag), n => n && n.nodeName === tag ? n : null])("button".toUpperCase());

const text = exports.text = mkAbsurdProve(function () {
  return document.createTextNode("");
}, function (node) {
  return node.nodeName === "#text";
});

function H1(f) {
  const arg00_ = h1[0];
  const arg01_ = h1[1];
  return elm(arg00_, arg01_, f);
}

function H2(f) {
  const arg00_ = h2[0];
  const arg01_ = h2[1];
  return elm(arg00_, arg01_, f);
}

function H3(f) {
  const arg00_ = h3[0];
  const arg01_ = h3[1];
  return elm(arg00_, arg01_, f);
}

function Span(f) {
  const arg00_ = span[0];
  const arg01_ = span[1];
  return elm(arg00_, arg01_, f);
}

function Div(f) {
  const arg00_ = div[0];
  const arg01_ = div[1];
  return elm(arg00_, arg01_, f);
}

function Button(f) {
  const arg00_ = button[0];
  const arg01_ = button[1];
  return elm(arg00_, arg01_, f);
}

function _Text(f) {
  const arg00_ = text[0];
  const arg01_ = text[1];
  return chr(arg00_, arg01_, f);
}

exports.Text = _Text;

function run() {
  const intS = core.scan(function (c, _arg1) {
    return c + 1;
  }, 0, core.periodic(10));

  const counter = function (d, o) {
    ($var2 => ($var1 => function (tupledArg) {
      o.Node(tupledArg[0], tupledArg[1]);
    }(Div($var1)))(core.now.bind(core)($var2)))(function (o_1) {
      ($var3 => o_1.Patch.bind(o_1)(core.now.bind(core)($var3)))(function (d_1) {
        d_1.style.padding = "5px 10px";
        d_1.style.textAlign = "center";
      });

      ($var5 => ($var4 => function (tupledArg_1) {
        o_1.Node(tupledArg_1[0], tupledArg_1[1]);
      }(Button($var4)))(core.now.bind(core)($var5)))(function (o_2) {
        ($var7 => ($var6 => function (tupledArg_2) {
          o_2.Node(tupledArg_2[0], tupledArg_2[1]);
        }(Span($var6)))(core.now.bind(core)($var7)))(function (o_3) {
          ($var9 => ($var8 => function (tupledArg_3) {
            o_3.Leaf(tupledArg_3[0], tupledArg_3[1]);
          }(_Text($var8)))(core.now.bind(core)($var9)))(function (text_1) {
            text_1.textContent = "+";
          });
        });

        if (d > 0) {
          ($var11 => ($var10 => function (tupledArg_4) {
            o_2.Node(tupledArg_4[0], tupledArg_4[1]);
          }(Div($var10)))(core.now.bind(core)($var11)))((0, _CurriedLambda2.default)(counter)(d - 1));
        }
      });

      ($var13 => ($var12 => function (tupledArg_5) {
        o_1.Node(tupledArg_5[0], tupledArg_5[1]);
      }(Button($var12)))(core.now.bind(core)($var13)))(function (o_4) {
        ($var15 => ($var14 => function (tupledArg_6) {
          o_4.Node(tupledArg_6[0], tupledArg_6[1]);
        }(Span($var14)))(core.now.bind(core)($var15)))(function (o_5) {
          ($var17 => ($var16 => function (tupledArg_7) {
            o_5.Leaf(tupledArg_7[0], tupledArg_7[1]);
          }(_Text($var16)))(core.now.bind(core)($var17)))(function (text_2) {
            text_2.textContent = "-";
          });
        });

        if (d > 0) {
          ($var19 => ($var18 => function (tupledArg_8) {
            o_4.Node(tupledArg_8[0], tupledArg_8[1]);
          }(Div($var18)))(core.now.bind(core)($var19)))((0, _CurriedLambda2.default)(counter)(d - 1));
        }
      });

      ($var21 => ($var20 => function (tupledArg_9) {
        o_1.Node(tupledArg_9[0], tupledArg_9[1]);
      }(H3($var20)))(core.now.bind(core)($var21)))(function (o_6) {
        ($var25 => {
          var arg00__11;
          return ($var22 => function (tupledArg_10) {
            o_6.Leaf(tupledArg_10[0], tupledArg_10[1]);
          }(_Text($var22)))((arg00__11 = function (i, text_3) {
            text_3.textContent = i.toString();
          }, function (arg10_) {
            return core.map($var23 => $var24 => {
              arg00__11($var23, $var24);
            }, arg10_);
          })($var25));
        })(intS);
      });
    });
  };

  const patches = core.scan(function (n, p) {
    p(n);
    return n;
  }, document.getElementById.bind(document)("root-node"), core.during(core.at(1000, core.at(3000, null)), (0, _new.tree)(core.now((0, _CurriedLambda2.default)(counter)(3)))));
  const scheduler = scheduler_1.newDefaultScheduler();
  return core.runEffects(patches, scheduler);
}

run(), void 0;