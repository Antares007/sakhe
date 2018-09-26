"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.empty = empty;
exports.map = map;
exports.run = run;
exports.contraMap = contraMap;
exports.pmap = pmap;
exports.bind = bind;

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _pith = require("./pith");

var _o = require("./o");

function return$0027(f) {
  return function ($arg$$1) {
    return (0, _pith.return$0027)((0, _Util.partialApply)(1, f, [$arg$$1]));
  };
}

function empty() {
  return return$0027(function (_arg2, _arg1) {});
}

function map(f$$3, _arg1$$1) {
  const io = _arg1$$1;
  return function ($arg$$2) {
    return f$$3(io($arg$$2));
  };
}

function run(i, o, _arg1$$2) {
  const io$$1 = _arg1$$2;
  return (0, _pith.run)(o, io$$1(i));
}

function contraMap(g, io$$2) {
  return return$0027(function (i$$1, o$$1) {
    return run(g(i$$1), (0, _o.proxy)(o$$1), io$$2);
  });
}

function pmap(f$$5) {
  return function (arg10$0040) {
    return map(function (arg10$0040$$1) {
      return (0, _pith.pmap)(f$$5, arg10$0040$$1);
    }, arg10$0040);
  };
}

function bind(g$$1, _arg1$$3) {
  const io$$3 = _arg1$$3;
  return function (i$$2) {
    const p = io$$3(i$$2);
    const io$$4 = g$$1(p);
    return io$$4(i$$2);
  };
}