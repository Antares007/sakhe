"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappend = mappend;
exports.return$0027 = return$0027;
exports.empty = empty;
exports.map = map;
exports.run = run;
exports.run2 = run2;
exports.contraMap = contraMap;
exports.pmap = pmap;
exports.bind = bind;
exports.T$00603 = void 0;

var _Types = require("./fable-core.2.0.3/Types");

var _pith = require("./pith");

var _Util = require("./fable-core.2.0.3/Util");

var _o = require("./o");

const T$00603 = (0, _Types.declare)(function T$00603(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00603 = T$00603;

function mappend(mappend$$1, _arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return new T$00603(0, "Abo", function (i) {
    return (0, _pith.mappend)(mappend$$1, l(i), r(i));
  });
}

function return$0027(f) {
  return new T$00603(0, "Abo", function ($arg$$1) {
    return (0, _pith.return$0027)((0, _Util.partialApply)(1, f, [$arg$$1]));
  });
}

function empty() {
  return new T$00603(0, "Abo", function (_arg1$$1) {
    return (0, _pith.empty)();
  });
}

function map(f$$2, _arg1$$2) {
  const io = _arg1$$2.fields[0];
  return new T$00603(0, "Abo", function ($arg$$2) {
    return f$$2(io($arg$$2));
  });
}

function run(i$$1, o, _arg1$$3) {
  const io$$1 = _arg1$$3.fields[0];
  return (0, _pith.run)(o, io$$1(i$$1));
}

function run2(i$$2, _arg1$$4) {
  const io$$2 = _arg1$$4.fields[0];
  return io$$2(i$$2);
}

function contraMap(g, io$$3) {
  return return$0027(function (i$$3, o$$1) {
    return run(g(i$$3), (0, _o.proxy)(o$$1), io$$3);
  });
}

function pmap(f$$4, _arg1$$5) {
  const io$$4 = _arg1$$5.fields[0];
  return new T$00603(0, "Abo", function (i$$4) {
    return (0, _pith.pmap)(f$$4, io$$4(i$$4));
  });
}

function bind(g$$1, _arg1$$6) {
  const io$$5 = _arg1$$6.fields[0];
  return new T$00603(0, "Abo", function (i$$5) {
    const p = io$$5(i$$5);
    const io$$6 = g$$1(p).fields[0];
    return io$$6(i$$5);
  });
}