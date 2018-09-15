"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith$$$empty = Pith$$$empty;
exports.Pith$$$filter = Pith$$$filter;
exports.Pith$$$filterMap = Pith$$$filterMap;
exports.Pith$$$map = Pith$$$map;
exports.Pith$$$append = Pith$$$append;
exports.Pith$$$fold = Pith$$$fold;
exports.Pith$$$toList = Pith$$$toList;
exports.Pith$$$tree = Pith$$$tree;

var _Option = require("./fable-core.2.0.0-beta-004/Option");

var _Types = require("./fable-core.2.0.0-beta-004/Types");

function Pith$$$empty() {
  return function (value) {
    value;
  };
}

function Pith$$$filter(f, _arg1) {
  const p = _arg1;
  return function (o) {
    p(function (a) {
      if (f(a)) {
        o(a);
      }
    });
  };
}

function Pith$$$filterMap(f$$1, _arg1$$1) {
  const p$$1 = _arg1$$1;
  return function (o$$1) {
    p$$1(function (a$$1) {
      const matchValue = f$$1(a$$1);

      if (matchValue != null) {
        const a$$2 = (0, _Option.value)(matchValue);
        o$$1(a$$2);
      }
    });
  };
}

function Pith$$$map(f$$2, _arg1$$2) {
  const p$$2 = _arg1$$2;
  return function (o$$2) {
    p$$2(function ($arg$$1) {
      o$$2(f$$2($arg$$1));
    });
  };
}

function Pith$$$append(_arg2, _arg1$$3) {
  const f$$3 = _arg2;
  const s = _arg1$$3;
  return function (o$$3) {
    f$$3(o$$3);
    s(o$$3);
  };
}

function Pith$$$fold(f$$4, s$$1, _arg1$$4) {
  const pith = _arg1$$4;
  let state = s$$1;
  pith(function (a$$3) {
    state = f$$4(state, a$$3);
  });
  return state;
}

function Pith$$$toList(_arg1$$5) {
  const pith$$1 = _arg1$$5;
  let list = (0, _Types.L)();
  pith$$1(function (a$$4) {
    list = (0, _Types.L)(a$$4, list);
  });
  return list;
}

function Pith$$$tree(deltaC, pith$$2) {
  return deltaC(Pith$$$toList(pith$$2));
}