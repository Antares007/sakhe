"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduler = scheduler;
exports.timer = void 0;

var _timer = require("./timer");

var _time = require("./time");

var _scheduler = require("./scheduler");

const timer = (0, _timer.return$0027)(setTimeout, clearTimeout);
exports.timer = timer;

function scheduler() {
  return (0, _scheduler.return$0027)(timer, (0, _time.ClockModule$$$localClock)(_time.ClockModule$$$performanceClock));
}