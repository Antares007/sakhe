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
    const delay$$1 = function delay$$1(label, delay, f$$1) {
      return (0, _scheduler.OModule$$$delay)(delay, function (now, o$$1) {
        (0, _String.toConsole)((0, _String.printf)("now(%A) %s"))(now)(label);
        f$$1(now, o$$1);
      });
    };

    const tree = function tree(l) {
      return (0, _scheduler.OModule$$$now)(function (now$$1, o$$2) {
        for (let i = 1; i <= 2; i++) {
          o$$2(delay$$1((0, _String.toText)((0, _String.printf)("%s %d"))(l)(i), 10, function (now$$2, o$$3) {
            for (let j = 1; j <= 3; j++) {
              o$$3(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d"))(l)(i)(j), 10, function (now$$3, o$$4) {
                for (let k = 1; k <= 3; k++) {
                  o$$4(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d.%d"))(l)(i)(j)(k), 10, function (now$$4, o$$5) {}));
                }
              }));
            }
          }));
        }
      });
    };

    o(delay$$1("A", 10, function (now$$5, o$$6) {
      o$$6(delay$$1("B", 10, function (now$$6, o$$7) {
        o$$7(delay$$1("C", 10, function (now$$7, o$$8) {
          o$$8(tree("Tb"));
        }));
      }));
    }));
    o(tree("Ta"));
  });
}

function timer(delay$$2, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay$$2));
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