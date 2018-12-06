"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$00602$reflection = T$00602$reflection;
exports.return$0027 = return$0027;
exports.empty = empty;
exports.mappend = mappend;
exports.run = run;
exports.run2 = run2;
exports.filter = filter;
exports.map = map;
exports.fmap = fmap;
exports.omap = omap;
exports.pmap = pmap;
exports.bind = bind;
exports.T$00602 = void 0;

var _Types = require("./fable-library.2.1.3/Types");

var _Reflection = require("./fable-library.2.1.3/Reflection");

var _o = require("./o");

var _Util = require("./fable-library.2.1.3/Util");

const T$00602 = (0, _Types.declare)(function Sakhe_Pith_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00602 = T$00602;

function T$00602$reflection($gen$$5, $gen$$6) {
  return (0, _Reflection.union)("Sakhe.Pith.T`2", [$gen$$5, $gen$$6], T$00602, () => [["Pith", [(0, _Reflection.lambda)((0, _Reflection.lambda)($gen$$5, _Reflection.unit), $gen$$6)]]]);
}

function return$0027(f) {
  return new T$00602(0, "Pith", f);
}

function empty() {
  return new T$00602(0, "Pith", function (o) {});
}

function mappend(mappend$$1, _arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return new T$00602(0, "Pith", function (o$$1) {
    return mappend$$1(l(o$$1), r(o$$1));
  });
}

function run(o$$2, _arg1$$1) {
  const p = _arg1$$1.fields[0];
  return p(function (a) {
    (0, _o.put)(a, o$$2);
  });
}

function run2(_arg1$$2, o$$3) {
  const p$$1 = _arg1$$2.fields[0];
  return p$$1(o$$3);
}

function filter(f$$1, _arg1$$3) {
  const p$$2 = _arg1$$3.fields[0];
  return new T$00602(0, "Pith", function (o$$4) {
    return p$$2(function (a$$1) {
      if (f$$1(a$$1)) {
        o$$4(a$$1);
      }
    });
  });
}

function map(g, f$$2, _arg1$$4) {
  const p$$3 = _arg1$$4.fields[0];
  return new T$00602(0, "Pith", function ($arg$$2) {
    return f$$2(p$$3(function ($arg$$1) {
      $arg$$2(g($arg$$1));
    }));
  });
}

function fmap(f$$3, _arg1$$5) {
  const p$$4 = _arg1$$5.fields[0];
  return new T$00602(0, "Pith", function ($arg$$3) {
    return f$$3(p$$4($arg$$3));
  });
}

function omap(f$$4, _arg1$$6) {
  const p$$5 = _arg1$$6.fields[0];
  return new T$00602(0, "Pith", function (o$$6) {
    return p$$5(function ($arg$$4) {
      o$$6(f$$4($arg$$4));
    });
  });
}

function pmap(f$$5, _arg1$$7) {
  const p$$6 = _arg1$$7.fields[0];
  return new T$00602(0, "Pith", (0, _Util.partialApply)(1, f$$5, [p$$6]));
}

function bind(f$$6, _arg1$$8) {
  const p$$7 = _arg1$$8.fields[0];
  return new T$00602(0, "Pith", function (o$$7) {
    const a$$2 = p$$7(o$$7);
    const p$$8 = f$$6(a$$2).fields[0];
    return p$$8(o$$7);
  });
}