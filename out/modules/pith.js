"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith$00602$reflection = Pith$00602$reflection;
exports.P$$$return$0027 = P$$$return$0027;
exports.P$$$empty = P$$$empty;
exports.P$$$mappend = P$$$mappend;
exports.P$$$run = P$$$run;
exports.P$$$filter = P$$$filter;
exports.P$$$map = P$$$map;
exports.P$$$fmap = P$$$fmap;
exports.P$$$omap = P$$$omap;
exports.P$$$pmap = P$$$pmap;
exports.P$$$bind = P$$$bind;
exports.Pith$00602 = void 0;

var _Types = require("./fable-library.2.1.7/Types");

var _Reflection = require("./fable-library.2.1.7/Reflection");

var _Util = require("./fable-library.2.1.7/Util");

const Pith$00602 = (0, _Types.declare)(function Sakhe_Pith(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Pith$00602 = Pith$00602;

function Pith$00602$reflection($gen$$5, $gen$$6) {
  return (0, _Reflection.union)("Sakhe.Pith`2", [$gen$$5, $gen$$6], Pith$00602, () => [["P", [(0, _Reflection.lambda)((0, _Reflection.lambda)($gen$$5, _Reflection.unit), $gen$$6)]]]);
}

function P$$$return$0027(f) {
  return new Pith$00602(0, "P", f);
}

function P$$$empty() {
  return new Pith$00602(0, "P", function (o) {});
}

function P$$$mappend(mappend, _arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return new Pith$00602(0, "P", function (o$$1) {
    return mappend(l(o$$1), r(o$$1));
  });
}

function P$$$run(o$$2, _arg1$$1) {
  const p = _arg1$$1.fields[0];
  return p(o$$2);
}

function P$$$filter(f$$1, _arg1$$2) {
  const p$$1 = _arg1$$2.fields[0];
  return new Pith$00602(0, "P", function (o$$3) {
    return p$$1(function (a) {
      if (f$$1(a)) {
        o$$3(a);
      }
    });
  });
}

function P$$$map(g, f$$2, _arg1$$3) {
  const p$$2 = _arg1$$3.fields[0];
  return new Pith$00602(0, "P", function ($arg$$2) {
    return f$$2(p$$2(function ($arg$$1) {
      $arg$$2(g($arg$$1));
    }));
  });
}

function P$$$fmap(f$$3, _arg1$$4) {
  const p$$3 = _arg1$$4.fields[0];
  return new Pith$00602(0, "P", function ($arg$$3) {
    return f$$3(p$$3($arg$$3));
  });
}

function P$$$omap(f$$4, _arg1$$5) {
  const p$$4 = _arg1$$5.fields[0];
  return new Pith$00602(0, "P", function (o$$5) {
    return p$$4(function ($arg$$4) {
      o$$5(f$$4($arg$$4));
    });
  });
}

function P$$$pmap(f$$5, _arg1$$6) {
  const p$$5 = _arg1$$6.fields[0];
  return new Pith$00602(0, "P", (0, _Util.partialApply)(1, f$$5, [p$$5]));
}

function P$$$bind(f$$6, _arg1$$7) {
  const p$$6 = _arg1$$7.fields[0];
  return new Pith$00602(0, "P", function (o$$6) {
    const a$$1 = p$$6(o$$6);
    const p$$7 = f$$6(a$$1).fields[0];
    return p$$7(o$$6);
  });
}