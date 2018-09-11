"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduler = scheduler;

var _time = require("./time");

var _scheduler = require("./scheduler");

function scheduler() {
  return (0, _scheduler.return$0027)((0, _time.ClockModule$$$localClock)(_time.ClockModule$$$performanceClock));
}