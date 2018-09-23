"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.bind = bind;
exports.run = run;

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _pith = require("./pith");

function return$0027(f) {
  return function ($arg$$1) {
    return (0, _Util.partialApply)(1, f, [$arg$$1]);
  };
}

function map(f$$1, _arg1) {
  const io = _arg1;
  return function (i) {
    const p = io(i);
    return (0, _Util.partialApply)(1, f$$1, [p]);
  };
}

function bind(g, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return function (i$$1) {
    const p$$1 = io$$1(i$$1);
    const io$$2 = g(p$$1);
    return io$$2(i$$1);
  };
}

function run(i$$2, o, _arg1$$2) {
  const io$$3 = _arg1$$2;
  return (0, _pith.Pith$$$run)(o, io$$3(i$$2));
}