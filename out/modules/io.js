"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.pmap = pmap;
exports.bind = bind;
exports.run = run;

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _pith = require("./pith");

function return$0027(f) {
  return function ($arg$$1) {
    return (0, _pith.return$0027)((0, _Util.partialApply)(1, f, [$arg$$1]));
  };
}

function map(f$$2, _arg1) {
  const io = _arg1;
  return function ($arg$$2) {
    return f$$2(io($arg$$2));
  };
}

function pmap(f$$3) {
  return function (arg10$0040) {
    return map(function (arg10$0040$$1) {
      return (0, _pith.pmap)(f$$3, arg10$0040$$1);
    }, arg10$0040);
  };
}

function bind(g, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return function (i) {
    const p = io$$1(i);
    const io$$2 = g(p);
    return io$$2(i);
  };
}

function run(i$$1, o, _arg1$$2) {
  const io$$3 = _arg1$$2;
  return (0, _pith.run)(o, io$$3(i$$1));
}