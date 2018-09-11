"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduler = scheduler;
exports.timer = void 0;

var _Util = require("../fable-core.2.0.0-beta-004/Util");

var _time = require("./time");

var _timer = require("./timer");

var _scheduler = require("./scheduler");

function clock() {
  const runAt = new _Util.Lazy(function () {
    return Math.floor(performance.now());
  });
  return (0, _time.ClockModule$$$return$0027)(function () {
    const prev = runAt.Value;
    return (0, _time.return$0027)(Math.floor(performance.now()) - prev);
  });
}

const timer = (0, _timer.return$0027)(setTimeout, clearTimeout);
exports.timer = timer;

function scheduler() {
  return (0, _scheduler.return$0027)(timer, clock());
}