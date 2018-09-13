"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith$$$return$0027 = Pith$$$return$0027;
exports.Pith$$$empty = Pith$$$empty;
exports.Pith$$$filter = Pith$$$filter;
exports.Pith$$$map = Pith$$$map;
exports.Pith$$$mapi = Pith$$$mapi;
exports.Pith$$$append = Pith$$$append;
exports.Pith$$$concat = Pith$$$concat;
exports.Pith$$$fold = Pith$$$fold;
exports.Pith$$$toList = Pith$$$toList;
exports.Pith$$$tree = Pith$$$tree;
exports.Pith$002EPithBuilder$$$$002Ector = Pith$002EPithBuilder$$$$002Ector;
exports.Pith$002EPithBuilder$$Return$$Z625F9F7B = Pith$002EPithBuilder$$Return$$Z625F9F7B;
exports.Pith$002EPithBuilder$$ReturnFrom$$2F6C066B = Pith$002EPithBuilder$$ReturnFrom$$2F6C066B;
exports.Pith$$$p = exports.Pith$002EPithBuilder = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

function Pith$$$return$0027(p) {
  return p;
}

function Pith$$$empty() {
  return function (value) {
    value;
  };
}

function Pith$$$filter(f, _arg1) {
  const p$$1 = _arg1;
  return function (o) {
    p$$1(function (a) {
      if (f(a)) {
        o(a);
      }
    });
  };
}

function Pith$$$map(f$$1, _arg1$$1) {
  const p$$2 = _arg1$$1;
  return function (o$$1) {
    p$$2(function ($arg$$1) {
      o$$1(f$$1($arg$$1));
    });
  };
}

function Pith$$$mapi(f$$2, p$$3) {
  let c = 0;
  return Pith$$$map(function (a$$1) {
    const index = c | 0;
    c = c + 1;
    return f$$2(index, a$$1);
  }, p$$3);
}

function Pith$$$append(_arg2, _arg1$$2) {
  const f$$3 = _arg2;
  const s = _arg1$$2;
  return function (o$$2) {
    f$$3(o$$2);
    s(o$$2);
  };
}

function Pith$$$concat(_arg1$$3) {
  const p$$4 = _arg1$$3;
  let pith = Pith$$$empty();
  p$$4(function (p$$5) {
    pith = Pith$$$append(pith, p$$5);
  });
  return pith;
}

function Pith$$$fold(f$$4, s$$1, _arg1$$4) {
  const pith$$1 = _arg1$$4;
  let state = s$$1;
  pith$$1(function (a$$2) {
    state = f$$4(state, a$$2);
  });
  return state;
}

function Pith$$$toList(_arg1$$5) {
  const pith$$2 = _arg1$$5;
  let list = (0, _Types.L)();
  pith$$2(function (a$$3) {
    list = (0, _Types.L)(a$$3, list);
  });
  return list;
}

function Pith$$$tree(deltaC, pith$$3) {
  return deltaC(Pith$$$toList(pith$$3));
}

const Pith$002EPithBuilder = (0, _Types.declare)(function Pith$002EPithBuilder() {});
exports.Pith$002EPithBuilder = Pith$002EPithBuilder;

function Pith$002EPithBuilder$$$$002Ector() {
  return this != null ? Pith$002EPithBuilder.call(this) : new Pith$002EPithBuilder();
}

function Pith$002EPithBuilder$$Return$$Z625F9F7B(__, a$$4) {
  return Pith$$$return$0027(a$$4);
}

function Pith$002EPithBuilder$$ReturnFrom$$2F6C066B(__$$1, a$$5) {
  return a$$5;
}

const Pith$$$p = Pith$002EPithBuilder$$$$002Ector();
exports.Pith$$$p = Pith$$$p;