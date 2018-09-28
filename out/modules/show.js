"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = see;
exports.timer = timer;
exports.tf = tf;
exports.d = void 0;

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.0-beta-005/String");

var _scheduler = require("./scheduler");

var _time = require("./time");

const d = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.d = d;

function see(n) {
  return (0, _scheduler.return$0027)(function (t, o) {
    (0, _String.toConsole)((0, _String.printf)("root: %A"))(t);

    if (n === 7) {
      d.Dispose();
    }

    for (let i = 0; i <= 2; i++) {
      o((0, _scheduler.OModule$$$delay)(i * 100, function (t$$1, o$$1) {
        (0, _String.toConsole)((0, _String.printf)("%d delay %A"))(i)(t$$1);
      }));

      for (let j = 0; j <= 9; j++) {
        o((0, _scheduler.OModule$$$delay)(j * 100, function (t$$2, o$$2) {
          (0, _String.toConsole)((0, _String.printf)("%d.%d delay %A"))(i)(j)(t$$2);
        }));

        for (let k = 0; k <= 9; k++) {
          o((0, _scheduler.OModule$$$delay)(k * 100, function (t$$3, o$$3) {
            (0, _String.toConsole)((0, _String.printf)("%d.%d.%d delay %A"))(i)(j)(k)(t$$3);
          }));
        }
      }
    }
  });
}

function timer(delay$$3, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay$$3));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function tf() {
  return (0, _time.return$0027)(Math.floor(performance.now()));
}

(0, _disposable.SettableDisposable$$Set$$Z5A296901)(d, (0, _scheduler.run)(function () {
  return tf();
}, timer, see(0)));