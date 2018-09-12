"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performanceClock = void 0;

var _time = require("./time");

var _clock = require("./clock");

const performanceClock = (() => {
  const tf = function tf() {
    return (0, _time.return$0027)(Math.floor(performance.now()));
  };

  const offset = (0, _time.OffsetModule$$$return$0027)(0);
  return (0, _clock.return$0027)(tf, offset);
})();

exports.performanceClock = performanceClock;