"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;
exports.tf = tf;

var _disposable = require("./disposable");

function timer(delay, task) {
  if (delay <= 0) {
    let canceled = false;
    Promise.resolve(task).then(function (t) {
      if (!canceled) {
        t();
      }
    });
    return (0, _disposable.return$0027)(function () {
      canceled = true;
    });
  } else {
    const token = setTimeout(task, ~~delay);
    return (0, _disposable.return$0027)(function () {
      clearTimeout(token);
    });
  }
}

function tf() {
  return Math.floor(performance.now());
}