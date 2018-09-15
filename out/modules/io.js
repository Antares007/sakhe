"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IO$$$return$0027 = IO$$$return$0027;
exports.IO$$$empty = IO$$$empty;
exports.IO$$$append = IO$$$append;
exports.IO$$$map = IO$$$map;
exports.IO$$$contraMap = IO$$$contraMap;
exports.IO$$$bind = IO$$$bind;
exports.IO$$$fold = IO$$$fold;
exports.IO$$$run = IO$$$run;

var _Util = require("./fable-core.2.0.0-beta-004/Util");

var _pith = require("./pith");

function IO$$$return$0027(f) {
  return function ($arg$$1) {
    return (0, _Util.partialApply)(1, f, [$arg$$1]);
  };
}

function IO$$$empty() {
  return function () {
    return function (o) {};
  };
}

function IO$$$append(_arg2, _arg1) {
  const l = _arg2;
  const r = _arg1;
  return function (i) {
    return (0, _pith.Pith$$$append)(l(i), r(i));
  };
}

function IO$$$map(f$$1, _arg1$$1) {
  const io = _arg1$$1;
  return function (i$$1) {
    return (0, _pith.Pith$$$map)(f$$1, io(i$$1));
  };
}

function IO$$$contraMap(f$$2, _arg1$$2) {
  const io$$1 = _arg1$$2;
  return function ($arg$$2) {
    return io$$1(f$$2($arg$$2));
  };
}

function IO$$$bind(f$$3, _arg1$$3) {
  const io$$2 = _arg1$$3;
  return function (i$$2) {
    const v = io$$2(i$$2);
    const io$$3 = f$$3(v);
    return io$$3(i$$2);
  };
}

function IO$$$fold(f$$4, s, _arg1$$4) {
  const io$$4 = _arg1$$4;
  return function (i$$3) {
    return (0, _pith.Pith$$$fold)(f$$4, s, io$$4(i$$3));
  };
}

function IO$$$run(f$$5, i$$4, _arg1$$5) {
  const io$$5 = _arg1$$5;
  return f$$5(io$$5(i$$4));
}