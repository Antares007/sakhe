"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTimer = setTimer;
exports.defaultTimer = void 0;

var _time = require("./time");

var _task = require("./task");

var _disposable = require("./disposable");

function return$0027(set, clear) {
  return function (task) {
    return function (delay) {
      const delay$$1 = (0, _time.DelayModule$$$unbox)(delay) | 0;
      const patternInput = (0, _task.Cancelable$$$extend)(task);

      if (0 === delay$$1) {
        Promise.resolve(patternInput[0]).then(function (a) {
          return function (arg10$0040) {
            return (0, _task.run)(a, arg10$0040);
          };
        });
        return patternInput[1];
      } else {
        const handle = set(function () {
          (function (arg10$0040$$1) {
            return (0, _task.run)(patternInput[0], arg10$0040$$1);
          });
        }, delay$$1);
        return (0, _disposable.append)((0, _disposable.return$0027)(function () {
          clear(handle);
        }), patternInput[1]);
      }
    };
  };
}

const defaultTimer = return$0027(setTimeout, clearTimeout);
exports.defaultTimer = defaultTimer;

function setTimer(task$$2, time, _arg1) {
  const set$$1 = _arg1;
  return set$$1(task$$2)(time);
}