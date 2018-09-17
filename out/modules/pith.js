"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I$$$empty = I$$$empty;
exports.I$$$Of = I$$$Of;
exports.I$$$map = I$$$map;
exports.I$$$bind = I$$$bind;
exports.I$$$run = I$$$run;
exports.O$$$empty = O$$$empty;
exports.O$$$filter = O$$$filter;
exports.O$$$filterMap = O$$$filterMap;
exports.O$$$map = O$$$map;
exports.O$$$bind = O$$$bind;
exports.O$$$fold = O$$$fold;
exports.O$$$run = O$$$run;

var _Option = require("./fable-core.2.0.0-beta-004/Option");

function I$$$empty() {}

function I$$$Of(a) {
  return function () {
    return a;
  };
}

function I$$$map(f, _arg1) {
  const i = _arg1;
  return function () {
    return f(i());
  };
}

function I$$$bind(f$$1, _arg1$$1) {
  const i$$1 = _arg1$$1;
  return function () {
    const i$$2 = f$$1(i$$1());
    return i$$2();
  };
}

function I$$$run(_arg1$$2) {
  const i$$3 = _arg1$$2;
  return i$$3();
}

function O$$$empty() {
  return function (value$$1) {
    value$$1;
  };
}

function O$$$filter(f$$2, _arg1$$3) {
  const p = _arg1$$3;
  return function (o) {
    return p(function (a$$1) {
      if (f$$2(a$$1)) {
        o(a$$1);
      }
    });
  };
}

function O$$$filterMap(f$$3, _arg1$$4) {
  const p$$1 = _arg1$$4;
  return function (o$$1) {
    return p$$1(function (a$$2) {
      const matchValue = f$$3(a$$2);

      if (matchValue != null) {
        const a$$3 = (0, _Option.value)(matchValue);
        o$$1(a$$3);
      }
    });
  };
}

function O$$$map(f$$4, g, _arg1$$5) {
  const p$$2 = _arg1$$5;
  return function (o$$2) {
    g(p$$2(function ($arg$$2) {
      o$$2(f$$4($arg$$2));
    }));
  };
}

function O$$$bind(f$$5, _arg1$$6) {
  const p$$3 = _arg1$$6;
  return function (o$$3) {
    const a$$4 = p$$3(o$$3);
    const p$$4 = f$$5(a$$4);
    return p$$4(o$$3);
  };
}

function O$$$fold(f$$6, s, _arg1$$7) {
  const o$$4 = _arg1$$7;
  let state = s;
  return [state, o$$4(function (a$$5) {
    state = f$$6(state, a$$5);
  })];
}

function O$$$run(o$$5, _arg1$$8) {
  const p$$5 = _arg1$$8;
  return p$$5(o$$5);
}