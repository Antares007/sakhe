"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.setTimer = setTimer;

var _time = require("./time");

var _task = require("./task");

var _disposable = require("./disposable");

function return$0027(set, clear) {
  return function (task) {
    return function (delay) {
      const delay$$1 = (0, _time.DelayModule$$$value)(delay) | 0;
      const patternInput = (0, _task.Cancelable$$$extend)(task);

      if (0 === delay$$1) {
        Promise.resolve(patternInput[0]).then(_task.run);
        return patternInput[1];
      } else {
        const handle = set(function () {
          (0, _task.run)(patternInput[0]);
        }, delay$$1);
        return (0, _disposable.append)(patternInput[1], (0, _disposable.return$0027)(function () {
          clear(handle);
        }));
      }
    };
  };
}

function setTimer(task$$2, time, _arg1) {
  const set$$1 = _arg1;
  return set$$1(task$$2)(time);
}