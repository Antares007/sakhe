"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pair = pair;
exports.d = exports.run = exports.local = void 0;

var _scheduler = require("./scheduler");

var _pith = require("./pith");

var _String = require("./fable-library.2.1.6/String");

var _default = require("./default");

function pair(a, b) {
  return [a, b];
}

const local = new _scheduler.S$002EO(0, "Local", new _scheduler.S$002ET(0, "Schedule", function (t) {
  return new _pith.Pith$00602(0, "P", function (o) {
    (0, _String.toConsole)((0, _String.printf)("Local: %A"))(t);
    o(new _scheduler.S$002EO(1, "Origin", new _scheduler.S$002ET(0, "Schedule", function (t$$1) {
      return new _pith.Pith$00602(0, "P", function (o$$1) {
        (0, _String.toConsole)((0, _String.printf)("Origin: %A"))(t$$1);
        const $arg$$4 = pair(100, new _scheduler.S$002ET(0, "Schedule", function (t$$2) {
          return new _pith.Pith$00602(0, "P", function (o$$2) {
            (0, _String.toConsole)((0, _String.printf)("Delay 100.: %A"))(t$$2);
          });
        }));
        o$$1(new _scheduler.S$002EO(2, "Delay", $arg$$4[0], $arg$$4[1]));
      });
    })));
    const $arg$$7 = pair(200, new _scheduler.S$002ET(0, "Schedule", function (t$$3) {
      return new _pith.Pith$00602(0, "P", function (o$$3) {
        (0, _String.toConsole)((0, _String.printf)("Delay 200.: %A"))(t$$3);
      });
    }));
    o(new _scheduler.S$002EO(2, "Delay", $arg$$7[0], $arg$$7[1]));
  });
}));
exports.local = local;
const run = (0, _scheduler.S$$$run)(function () {
  return (0, _default.tf)();
}, _default.timer);
exports.run = run;
const d = run(local);
exports.d = d;