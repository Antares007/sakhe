"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patches = exports.rootNode = exports.rez = exports.intS = exports.Text = exports.text = exports.button = exports.div = exports.span = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.a = undefined;
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

var _Option = require("./fable-core/Option");

var _m = require("./m");

var _new = require("./new");

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _most = require("./most");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mkAbsurdProve(create, prove) {
  return [create, function (n) {
    return prove(n) ? (0, _Option.makeSome)(n) : null;
  }];
}

function elm(ap_0, ap_1, pith) {
  var ap = [ap_0, ap_1];
  return [ap, pith];
}

function chr(ap_0, ap_1, pith) {
  var ap = [ap_0, ap_1];
  return [ap, pith];
}

var a = exports.a = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("a".toUpperCase());

var h1 = exports.h1 = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("h1".toUpperCase());

var h2 = exports.h2 = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("h2".toUpperCase());

var h3 = exports.h3 = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("h3".toUpperCase());

var h4 = exports.h4 = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("h4".toUpperCase());

var span = exports.span = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("span".toUpperCase());

var div = exports.div = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("div".toUpperCase());

var button = exports.button = function (tag) {
  return [function () {
    return document.createElement(tag);
  }, function (n) {
    return n && n.nodeName === tag ? n : null;
  }];
}("button".toUpperCase());

var text = exports.text = mkAbsurdProve(function () {
  return document.createTextNode("");
}, function (node) {
  return node.nodeName === "#text";
});

function H1(f) {
  var arg00_ = h1[0];
  var arg01_ = h1[1];
  return elm(arg00_, arg01_, f);
}

function H2(f) {
  var arg00_ = h2[0];
  var arg01_ = h2[1];
  return elm(arg00_, arg01_, f);
}

function H3(f) {
  var arg00_ = h3[0];
  var arg01_ = h3[1];
  return elm(arg00_, arg01_, f);
}

function Span(f) {
  var arg00_ = span[0];
  var arg01_ = span[1];
  return elm(arg00_, arg01_, f);
}

function Div(f) {
  var arg00_ = div[0];
  var arg01_ = div[1];
  return elm(arg00_, arg01_, f);
}

function Button(f) {
  var arg00_ = button[0];
  var arg01_ = button[1];
  return elm(arg00_, arg01_, f);
}

function _Text(f) {
  var arg00_ = text[0];
  var arg01_ = text[1];
  return chr(arg00_, arg01_, f);
}

exports.Text = _Text;

function op_ColonEquals(a_1, b) {
  return a_1(_m.most.merge(_m.most.now(b))(_m.most.never()));
}

var intS = exports.intS = _m.most.scan(function (c, _arg1) {
  return c + 1;
})(0)(_m.most.periodic(10));

function counter(d, o) {
  op_ColonEquals(function ($var1) {
    return function (tupledArg) {
      o.Node(tupledArg[0], tupledArg[1]);
    }(Div($var1));
  }, function (o_1) {
    op_ColonEquals(o_1.Patch.bind(o_1), function (d_1) {
      d_1.style.padding = "5px 10px";
      d_1.style.textAlign = "center";
    });
    op_ColonEquals(function ($var2) {
      return function (tupledArg_1) {
        o_1.Node(tupledArg_1[0], tupledArg_1[1]);
      }(Button($var2));
    }, function (o_2) {
      var d_2;
      op_ColonEquals(function ($var3) {
        return function (tupledArg_2) {
          o_2.Node(tupledArg_2[0], tupledArg_2[1]);
        }(Span($var3));
      }, function (o_3) {
        op_ColonEquals(function ($var4) {
          return function (tupledArg_3) {
            o_3.Leaf(tupledArg_3[0], tupledArg_3[1]);
          }(_Text($var4));
        }, function (text_1) {
          text_1.textContent = "+";
        });
      });

      if (d > 0) {
        op_ColonEquals(function ($var5) {
          return function (tupledArg_4) {
            o_2.Node(tupledArg_4[0], tupledArg_4[1]);
          }(Div($var5));
        }, (d_2 = d - 1 | 0, function (o_4) {
          counter(d_2, o_4);
        }));
      }
    });
    op_ColonEquals(function ($var6) {
      return function (tupledArg_5) {
        o_1.Node(tupledArg_5[0], tupledArg_5[1]);
      }(Button($var6));
    }, function (o_5) {
      var d_3;
      op_ColonEquals(function ($var7) {
        return function (tupledArg_6) {
          o_5.Node(tupledArg_6[0], tupledArg_6[1]);
        }(Span($var7));
      }, function (o_6) {
        op_ColonEquals(function ($var8) {
          return function (tupledArg_7) {
            o_6.Leaf(tupledArg_7[0], tupledArg_7[1]);
          }(_Text($var8));
        }, function (text_2) {
          text_2.textContent = "-";
        });
      });

      if (d > 0) {
        op_ColonEquals(function ($var9) {
          return function (tupledArg_8) {
            o_5.Node(tupledArg_8[0], tupledArg_8[1]);
          }(Div($var9));
        }, (d_3 = d - 1 | 0, function (o_7) {
          counter(d_3, o_7);
        }));
      }
    });
    op_ColonEquals(function ($var10) {
      return function (tupledArg_9) {
        o_1.Node(tupledArg_9[0], tupledArg_9[1]);
      }(H3($var10));
    }, function (o_8) {
      (function ($var11) {
        return function (tupledArg_10) {
          o_8.Leaf(tupledArg_10[0], tupledArg_10[1]);
        }(_Text($var11));
      })(_m.most.map(function ($var12) {
        return function ($var13) {
          (function (i, text_3) {
            text_3.textContent = i.toString();
          })($var12, $var13);
        };
      })(intS));
    });
  });
}

var rez = exports.rez = op_ColonEquals(_new.tree, function (o) {
  counter(4, o);
});
var rootNode = exports.rootNode = document.getElementById.bind(document)("root-node");

var patches = exports.patches = _m.most.until(_m.most.skip(1)(_m.most.periodic(3000)))(_m.most.scan(function (n, p) {
  p(n);
  return n;
})(rootNode)(rez));

function sink() {
  return _defineProperty({
    event: function event(time, value) {},
    end: function end(time) {
      console.info(time, "|");
    },
    error: function error(time, err) {
      console.error(time, err);
    }
  }, _Symbol3.default.reflection, function () {
    return {
      interfaces: ["Most.Sink"]
    };
  });
}

_m.most.runEffects(patches, _most.SchedulerModule.require.newDefaultScheduler()), void 0;
