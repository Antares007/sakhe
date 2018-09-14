"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IO$$$empty = IO$$$empty;
exports.IO$$$append = IO$$$append;
exports.IO$$$map = IO$$$map;
exports.IO$$$fold = IO$$$fold;
exports.IO$$$run = IO$$$run;

var _pith = require("./pith");

function IO$$$empty() {
  return function () {
    return function (o) {};
  };
}

function IO$$$append(_arg2, _arg1) {
  const o$$1 = _arg2;
  const a = _arg1;
  return function (i) {
    return (0, _pith.Pith$$$append)(o$$1(i), a(i));
  };
}

function IO$$$map(g, f, _arg1$$1) {
  const io = _arg1$$1;
  return function (i$$1) {
    return (0, _pith.Pith$$$map)(f, io(g(i$$1)));
  };
}

function IO$$$fold(f$$1, s, _arg1$$2) {
  const io$$1 = _arg1$$2;
  return function (i$$2) {
    return (0, _pith.Pith$$$fold)(f$$1, s, io$$1(i$$2));
  };
}

function IO$$$run(_arg1$$3) {
  const io$$2 = _arg1$$3;
  return io$$2();
}