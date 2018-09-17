"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.O$$$empty = O$$$empty;
exports.O$$$filter = O$$$filter;
exports.O$$$filterMap = O$$$filterMap;
exports.O$$$map = O$$$map;
exports.O$$$bind = O$$$bind;
exports.O$$$fold = O$$$fold;
exports.O$$$run = O$$$run;

var _Option = require("./fable-core.2.0.0-beta-004/Option");

function O$$$empty() {
  return function (value) {
    value;
  };
}

function O$$$filter(f, _arg1) {
  const p = _arg1;
  return function (o) {
    return p(function (a) {
      if (f(a)) {
        o(a);
      }
    });
  };
}

function O$$$filterMap(f$$1, _arg1$$1) {
  const p$$1 = _arg1$$1;
  return function (o$$1) {
    return p$$1(function (a$$1) {
      const matchValue = f$$1(a$$1);

      if (matchValue != null) {
        const a$$2 = (0, _Option.value)(matchValue);
        o$$1(a$$2);
      }
    });
  };
}

function O$$$map(f$$2, g, _arg1$$2) {
  const p$$2 = _arg1$$2;
  return function (o$$2) {
    g(p$$2(function ($arg$$2) {
      o$$2(f$$2($arg$$2));
    }));
  };
}

function O$$$bind(f$$3, _arg1$$3) {
  const p$$3 = _arg1$$3;
  return function (o$$3) {
    const a$$3 = p$$3(o$$3);
    const p$$4 = f$$3(a$$3);
    return p$$4(o$$3);
  };
}

function O$$$fold(f$$4, s, _arg1$$4) {
  const o$$4 = _arg1$$4;
  let state = s;
  return [state, o$$4(function (a$$4) {
    state = f$$4(state, a$$4);
  })];
}

function O$$$run(o$$5, _arg1$$5) {
  const p$$5 = _arg1$$5;
  return p$$5(o$$5);
}