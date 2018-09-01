"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.as2_ = exports.as_ = exports.s2 = undefined;

var _s = require("./most/s");

const s2 = exports.s2 = _s.S$$$core.newStream(function run(sink, scheduler) {
  sink.event(scheduler.currentTime(), 1);
  return (0, _s.JsDisposable$$$create)(function () {});
});

const as_ = exports.as_ = _s.S$$$core.slice(0, 1, _s.S$$$core.now("a"));

const as2_ = exports.as2_ = _s.S$$$core.take(1, _s.S$$$core.skip(1, _s.S$$$core.map(function f(a$$2) {
  return a$$2 + "";
}, _s.S$$$core.now("a"))));