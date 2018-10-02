"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = see;
exports.timer = timer;
exports.tf = tf;
exports.d = void 0;

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.1/String");

var _Seq = require("./fable-core.2.0.1/Seq");

var _scheduler = require("./scheduler");

var _time = require("./time");

const d = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.d = d;

function see(n) {
  return (0, _scheduler.return$0027)(function (t, o) {
    const delay$$1 = function delay$$1(label, delay, f$$1) {
      return (0, _scheduler.OModule$$$delay)(delay, function (tupledArg, o$$1) {
        (0, _String.toConsole)((0, _String.printf)("now(%A) %s"))([tupledArg[0], tupledArg[1]])(label);
        f$$1(tupledArg[0], o$$1);
        (0, _Seq.sum)((0, _Seq.delay)(function () {
          return (0, _Seq.map)(function (i) {
            return i;
          }, (0, _Seq.rangeNumber)(0, 1, 100000));
        }), {
          GetZero() {
            return 0;
          },

          Add($x$$1, $y$$2) {
            return $x$$1 + $y$$2;
          }

        });
      });
    };

    if (n < 3) {
      o(new _scheduler.O(1, "Delay", (0, _time.DelayModule$$$return$0027)(1000), see(n + 1)));
    }

    const tree = function tree(l) {
      return (0, _scheduler.OModule$$$now)(function (now$$1, o$$2) {
        for (let i$$1 = 1; i$$1 <= 1; i$$1++) {
          o$$2(delay$$1((0, _String.toText)((0, _String.printf)("%s %d"))(l)(i$$1), 1000, function (now$$2, o$$3) {
            for (let j = 1; j <= 2; j++) {
              o$$3(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d"))(l)(i$$1)(j), 1000, function (now$$3, o$$4) {
                for (let k = 1; k <= 3; k++) {
                  o$$4(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d.%d"))(l)(i$$1)(j)(k), 1000, function (now$$4, o$$5) {}));
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
}, timer)(_time.zero)(see(0)));