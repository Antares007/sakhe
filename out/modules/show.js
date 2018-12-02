"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = see;
exports.timer = timer;
exports.tf = tf;
exports.disposable = exports.o = exports.run = exports.d = void 0;

var _disposable = require("./disposable");

var _String = require("./fable-library.2.1.2/String");

var _pith = require("./pith");

var _scheduler = require("./scheduler");

var _time = require("./time");

var _Util = require("./fable-library.2.1.2/Util");

var _o = require("./o");

var _stream = require("./stream");

const d = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.d = d;

function see(n) {
  return (0, _scheduler.return$0027)(function (t) {
    return (0, _pith.return$0027)(function (o$$1) {
      const delay$$1 = function delay$$1(label, delay, f$$2) {
        return (0, _scheduler.O$$$delay)(delay, function (tupledArg) {
          return (0, _pith.return$0027)(function (o$$2) {
            (0, _String.toConsole)((0, _String.printf)("now(%A) %s"))([tupledArg[0], tupledArg[1]])(label);
            f$$2(tupledArg[0], o$$2);
          });
        });
      };

      o$$1((0, _scheduler.O$$$nowOrigin)(function (now$$1) {
        return (0, _pith.return$0027)(function (o$$3) {
          (0, _String.toConsole)((0, _String.printf)("Origin ------> %A"))(now$$1);
        });
      }));

      if (n < 3) {
        o$$1(new _scheduler.O$00601(1, "Delay", (0, _time.DelayModule$$$return$0027)(100), see(n + 1)));
      }

      const tree = function tree(l) {
        return (0, _scheduler.O$$$now)(function (now$$2) {
          return (0, _pith.return$0027)(function (o$$4) {
            for (let i = 1; i <= 1; i++) {
              o$$4(delay$$1((0, _String.toText)((0, _String.printf)("%s %d"))(l)(i), 100, function (now$$3, o$$5) {
                for (let j = 1; j <= 2; j++) {
                  o$$5(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d"))(l)(i)(j), 200, function (now$$4, o$$6) {
                    for (let k = 1; k <= 3; k++) {
                      o$$6(delay$$1((0, _String.toText)((0, _String.printf)("%s %d.%d.%d"))(l)(i)(j)(k), 300, function (now$$5, o$$7) {}));
                    }
                  }));
                }
              }));
            }
          });
        });
      };

      o$$1(delay$$1("A", 10, function (now$$6, o$$8) {
        o$$8(delay$$1("B", 10, function (now$$7, o$$9) {
          o$$9(delay$$1("C", 10, function (now$$8, o$$10) {
            o$$10(tree("Ta"));
          }));
        }));
      }));
      o$$1(tree("Ta"));
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
const o = (0, _o.contraMap)(function g(x) {
  (0, _String.toConsole)((0, _String.printf)("%A"))(x);
  return x;
}, (0, _o.makeListO)());
exports.o = o;
const disposable = (0, _stream.run)(o, _stream.unit);
exports.disposable = disposable;