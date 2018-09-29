"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappend = mappend;
exports.return$0027 = return$0027;
exports.empty = empty;
exports.map = map;
exports.run = run;
exports.contraMap = contraMap;
exports.pmap = pmap;
exports.bind = bind;
exports.T$00603 = void 0;

var _Types = require("./fable-core.2.0.0/Types");

var _pith = require("./pith");

var _Util = require("./fable-core.2.0.0/Util");

var _o = require("./o");

const T$00603 = (0, _Types.declare)(function T$00603(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00603 = T$00603;

function mappend(mappend$$1, _arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return new T$00603(0, "IO", function (i) {
    return (0, _pith.mappend)(mappend$$1, l(i), r(i));
  });
}

function return$0027(f) {
  return new T$00603(0, "IO", function ($arg$$1) {
    return (0, _pith.return$0027)((0, _Util.partialApply)(1, f, [$arg$$1]));
  });
}

function empty() {
  return new T$00603(0, "IO", function (_arg1$$1) {
    return (0, _pith.empty)();
  });
}

function map(f$$2, _arg1$$2) {
  const io = _arg1$$2.fields[0];
  return new T$00603(0, "IO", function ($arg$$2) {
    return f$$2(io($arg$$2));
  });
}

function run(i$$1, o, _arg1$$3) {
  const io$$1 = _arg1$$3.fields[0];
  return (0, _pith.run)(o, io$$1(i$$1));
}

function contraMap(g, io$$2) {
  return return$0027(function (i$$2, o$$1) {
    return run(g(i$$2), (0, _o.proxy)(o$$1), io$$2);
  });
}

function pmap(f$$4) {
  return function (arg10$0040) {
    return map(function (arg10$0040$$1) {
      return (0, _pith.pmap)(f$$4, arg10$0040$$1);
    }, arg10$0040);
  };
}

function bind(g$$1, _arg1$$4) {
  const io$$3 = _arg1$$4.fields[0];
  return new T$00603(0, "IO", function (i$$3) {
    const p = io$$3(i$$3);
    const io$$4 = g$$1(p).fields[0];
    return io$$4(i$$3);
  });
}