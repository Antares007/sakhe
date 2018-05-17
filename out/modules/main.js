"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduler = exports.patches = exports.rootNode = exports.rez = exports.intS = exports.Text = exports.text = exports.button = exports.div = exports.span = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.a = undefined;
exports.mkAbsurdProve = mkAbsurdProve;
exports.elm = elm;
exports.chr = chr;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.Span = Span;
exports.Div = Div;
exports.Button = Button;
exports.op_ColonEquals = op_ColonEquals;
exports.counter = counter;
exports.sink = sink;
exports.combineArray = combineArray;

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _new = require("./new");

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

var _Seq = require("./fable-core/Seq");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

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

function op_ColonEquals(a_1, b) {
  return a_1(core.merge(core.now(b), core.never()));
}

const intS = exports.intS = core.scan(function (c, _arg1) {
  return c + 1;
}, 0, core.periodic(10));

function counter(d, o) {
  op_ColonEquals($var1 => function (tupledArg) {
    o.Node(tupledArg[0], tupledArg[1]);
  }(Div($var1)), function (o_1) {
    op_ColonEquals(o_1.Patch.bind(o_1), function (d_1) {
      d_1.style.padding = "5px 10px";
      d_1.style.textAlign = "center";
    });
    op_ColonEquals($var2 => function (tupledArg_1) {
      o_1.Node(tupledArg_1[0], tupledArg_1[1]);
    }(Button($var2)), function (o_2) {
      var d_2;
      op_ColonEquals($var3 => function (tupledArg_2) {
        o_2.Node(tupledArg_2[0], tupledArg_2[1]);
      }(Span($var3)), function (o_3) {
        op_ColonEquals($var4 => function (tupledArg_3) {
          o_3.Leaf(tupledArg_3[0], tupledArg_3[1]);
        }(_Text($var4)), function (text_1) {
          text_1.textContent = "+";
        });
      });

      if (d > 0) {
        op_ColonEquals($var5 => function (tupledArg_4) {
          o_2.Node(tupledArg_4[0], tupledArg_4[1]);
        }(Div($var5)), (d_2 = d - 1 | 0, function (o_4) {
          counter(d_2, o_4);
        }));
      }
    });
    op_ColonEquals($var6 => function (tupledArg_5) {
      o_1.Node(tupledArg_5[0], tupledArg_5[1]);
    }(Button($var6)), function (o_5) {
      var d_3;
      op_ColonEquals($var7 => function (tupledArg_6) {
        o_5.Node(tupledArg_6[0], tupledArg_6[1]);
      }(Span($var7)), function (o_6) {
        op_ColonEquals($var8 => function (tupledArg_7) {
          o_6.Leaf(tupledArg_7[0], tupledArg_7[1]);
        }(_Text($var8)), function (text_2) {
          text_2.textContent = "-";
        });
      });

      if (d > 0) {
        op_ColonEquals($var9 => function (tupledArg_8) {
          o_5.Node(tupledArg_8[0], tupledArg_8[1]);
        }(Div($var9)), (d_3 = d - 1 | 0, function (o_7) {
          counter(d_3, o_7);
        }));
      }
    });
    op_ColonEquals($var10 => function (tupledArg_9) {
      o_1.Node(tupledArg_9[0], tupledArg_9[1]);
    }(H3($var10)), function (o_8) {
      ($var11 => function (tupledArg_10) {
        o_8.Leaf(tupledArg_10[0], tupledArg_10[1]);
      }(_Text($var11)))(core.map($var12 => $var13 => {
        (function (i, text_3) {
          text_3.textContent = i.toString();
        })($var12, $var13);
      }, intS));
    });
  });
}

const rez = exports.rez = op_ColonEquals(_new.tree, function (o) {
  counter(3, o);
});
const rootNode = exports.rootNode = document.getElementById.bind(document)("root-node");

const patches = exports.patches = (() => {
  const arg00_ = function (n, p) {
    p(n);
    return n;
  };

  return function (arg20_) {
    return core.scan(arg00_, rootNode, arg20_);
  };
})()(core.during(core.at(1000, core.at(3000, null)), rez));

function sink() {
  return {
    event(time, value) {},

    end(time) {
      console.info(time, "|");
    },

    error(time, err) {
      console.error(time, err);
    },

    [_Symbol3.default.reflection]() {
      return {
        interfaces: ["Most.Sink"]
      };
    }

  };
}

const scheduler = exports.scheduler = scheduler_1.newDefaultScheduler();
core.runEffects(patches, scheduler), void 0;

function combineArray(f, s) {
  return function (arg10_) {
    return core.map(f, arg10_);
  }((0, _Seq.fold)(function (alS, aS) {
    return core.combine(function (aList, a_1) {
      return new _List2.default(a_1, aList);
    }, alS, aS);
  }, core.now(new _List2.default()), s));
}

(() => {
  const arg00_ = sink();
  return function (arg20_) {
    return core.run(arg00_, scheduler, arg20_);
  };
})()(core.tap(console.log.bind(console), combineArray(Int32Array.from.bind(Int32Array), (0, _List.ofArray)([core.now(1), core.now(2)])))), void 0;