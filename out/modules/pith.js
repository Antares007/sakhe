"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith$$$empty = Pith$$$empty;
exports.Pith$$$filter = Pith$$$filter;
exports.Pith$$$map = Pith$$$map;
exports.Pith$$$append = Pith$$$append;
exports.Pith$$$fold = Pith$$$fold;
exports.Pith$$$toList = Pith$$$toList;
exports.Pith$$$tree = Pith$$$tree;

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

function Pith$$$map(f$$1, _arg1$$1) {
  const p$$1 = _arg1$$1;
  return function (o$$1) {
    p$$1(function ($arg$$1) {
      o$$1(f$$1($arg$$1));
    });
  };
}

function Pith$$$append(_arg2, _arg1$$2) {
  const f$$2 = _arg2;
  const s = _arg1$$2;
  return function (o$$2) {
    f$$2(o$$2);
    s(o$$2);
  };
}

function Pith$$$fold(f$$3, s$$1, _arg1$$3) {
  const pith = _arg1$$3;
  let state = s$$1;
  pith(function (a$$1) {
    state = f$$3(state, a$$1);
  });
  return state;
}

function Pith$$$toList(_arg1$$4) {
  const pith$$1 = _arg1$$4;
  let list = (0, _Types.L)();
  pith$$1(function (a$$2) {
    list = (0, _Types.L)(a$$2, list);
  });
  return list;
}

function Pith$$$tree(deltaC, pith$$2) {
  return deltaC(Pith$$$toList(pith$$2));
}