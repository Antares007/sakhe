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

var _time = require("./time");

var _scheduler = require("./scheduler");

const d = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.d = d;

function see(n) {
  return (0, _scheduler.return$0027)(function (t, o) {
    (0, _String.toConsole)((0, _String.printf)("1.A: %A"))(t);

    if (n === 7) {
      d.Dispose();
    }

    o((0, _scheduler.OModule$$$now)(function (t$$1, o$$1) {
      (0, _String.toConsole)((0, _String.printf)("2.now %A"))(t$$1);
      const r = ~~Math.floor(Math.random() * 1000) | 0;
      const $arg$$2 = [(0, _time.DelayModule$$$return$0027)(r + 1000), see(n + 1)];
      o$$1(new _scheduler.O(1, "Delay", $arg$$2[0], $arg$$2[1]));
    }));
    o((0, _scheduler.OModule$$$now)(function (t$$2, o$$2) {
      (0, _String.toConsole)((0, _String.printf)("3.now: %A"))(t$$2);
      const r$$1 = ~~Math.floor(Math.random() * 1000) | 0;
      const $arg$$4 = [(0, _time.DelayModule$$$return$0027)(r$$1 + 1000), see(n + 1)];
      o$$2(new _scheduler.O(1, "Delay", $arg$$4[0], $arg$$4[1]));
    }));
  });
}

function timer(delay, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay));
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