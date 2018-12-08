"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = see;
exports.timer = timer;
exports.tf = tf;
exports.run = exports.d = void 0;

var _disposable = require("./disposable");

var _pith = require("./pith");

var _String = require("./fable-library.2.1.3/String");

var _scheduler = require("./scheduler");

var _time = require("./time");

var _Util = require("./fable-library.2.1.3/Util");

const d = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.d = d;

function see(n) {
  return (0, _scheduler.return$0027)(function (t) {
    return new _pith.Pith$00602(0, "P", function (o) {
      const delay$$1 = function delay$$1(label, delay, f$$1) {
        return (0, _scheduler.OModule$$$delay)(delay, function (now) {
          return new _pith.Pith$00602(0, "P", function (o$$1) {
            (0, _String.toConsole)((0, _String.printf)("now(%A) %s"))(now)(label);
            f$$1(now, o$$1);
          });
        });
      };

      if (n < 3) {
        o(new _scheduler.O(1, "Delay", (0, _time.DelayModule$$$return$0027)(100), see(n + 1)));
      }

      const tree = function tree(l) {
        return (0, _scheduler.OModule$$$now)(function (now$$1) {
          return new _pith.Pith$00602(0, "P", function (o$$2) {
            for (let i = 1; i <= 1; i++) {
              o$$2(delay$$1((0, _String.toText)((0, _String.printf)("%s %d"))(l)(i), 100, function (now$$2, o$$3) {
                for (let j = 1; j <= 2; j++) {
                  o$$3(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d"))(l)(i)(j), 200, function (now$$3, o$$4) {
                    for (let k = 1; k <= 3; k++) {
                      o$$4(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d.%d"))(l)(i)(j)(k), 300, function (now$$4, o$$5) {}));
                    }
                  }));
                }
              }));
            }
          });
        });
      };

      o(delay$$1("A", 10, function (now$$5, o$$6) {
        o$$6(delay$$1("B", 10, function (now$$6, o$$7) {
          o$$7(delay$$1("C", 10, function (now$$7, o$$8) {
            o$$8(tree("Ta"));
          }));
        }));
      }));
      o(tree("Ta"));
    });
  });
}

function timer(delay$$2, task) {
  if ((0, _Util.equals)(delay$$2, _time.DelayModule$$$zero)) {
    let canceled = false;
    Promise.resolve(task).then(function (t$$1) {
      if (!canceled) {
        t$$1();
      }
    });
    return (0, _disposable.return$0027)(function () {
      canceled = true;
    });
  } else {
    const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay$$2));
    return (0, _disposable.return$0027)(function () {
      clearTimeout(token);
    });
  }
}

function tf() {
  return (0, _time.return$0027)(Math.floor(performance.now()));
}

const run = (0, _scheduler.run)(function () {
  return tf();
}, timer);
exports.run = run;
(0, _disposable.SettableDisposable$$Set$$Z5A296901)(d, run(see(0)));