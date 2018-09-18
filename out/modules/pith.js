"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.O$00602$$get_Value = O$00602$$get_Value;
exports.O$$$return$0027 = O$$$return$0027;
exports.O$$$map = O$$$map;
exports.O$$$contraMap = O$$$contraMap;
exports.Pith$$$empty = Pith$$$empty;
exports.Pith$$$run = Pith$$$run;
exports.Pith$$$filter = Pith$$$filter;
exports.Pith$$$filterMap = Pith$$$filterMap;
exports.Pith$$$map = Pith$$$map;
exports.Pith$$$bind = Pith$$$bind;

var _Option = require("./fable-core.2.0.0-beta-004/Option");

function O$00602$$get_Value(p) {
  const a = p[1];
  return a();
}

function O$$$return$0027(f, ua) {
  let a$$1 = ua;
  return [function (b) {
    a$$1 = f(a$$1, b);
  }, function () {
    return a$$1;
  }];
}

function O$$$map(f$$1, _arg1) {
  return [_arg1[0], function () {
    return f$$1(_arg1[1]());
  }];
}

function O$$$contraMap(g, _arg1$$1) {
  return [function ($arg$$2) {
    _arg1$$1[0](g($arg$$2));
  }, _arg1$$1[1]];
}

function Pith$$$empty() {
  return function (value) {
    value;
  };
}

function Pith$$$run(_arg2, _arg1$$2) {
  const p$$1 = _arg1$$2;
  return p$$1(_arg2[0]);
}

function Pith$$$filter(f$$2, _arg1$$3) {
  const p$$2 = _arg1$$3;
  return function (o) {
    return p$$2(function (a$$2) {
      if (f$$2(a$$2)) {
        o(a$$2);
      }
    });
  };
}

function Pith$$$filterMap(f$$3, _arg1$$4) {
  const p$$3 = _arg1$$4;
  return function (o$$1) {
    return p$$3(function (a$$3) {
      const matchValue = f$$3(a$$3);

      if (matchValue != null) {
        const a$$4 = (0, _Option.value)(matchValue);
        o$$1(a$$4);
      }
    });
  };
}

function Pith$$$map(f$$4, g$$1, _arg1$$5) {
  const p$$4 = _arg1$$5;
  return function (o$$2) {
    g$$1(p$$4(function ($arg$$4) {
      o$$2(f$$4($arg$$4));
    }));
  };
}

function Pith$$$bind(f$$5, _arg1$$6) {
  const p$$5 = _arg1$$6;
  return function (o$$3) {
    const a$$5 = p$$5(o$$3);
    const p$$6 = f$$5(a$$5);
    return p$$6(o$$3);
  };
}