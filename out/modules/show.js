"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pair = pair;
exports.onClick = exports.d = exports.s = exports.run = exports.local = void 0;

var _scheduler = require("./scheduler");

var _pith = require("./pith");

var _String = require("./fable-library.2.1.7/String");

var _default = require("./default");

var _stream = require("./stream");

var _disposable = require("./disposable");

var _Util = require("./fable-library.2.1.7/Util");

function pair(a, b) {
  return [a, b];
}

const local = new _scheduler.O(0, "Local", function (t) {
  return new _pith.Pith$00602(0, "P", function (o) {
    (0, _String.toConsole)((0, _String.printf)("Local: %A"))(t);
    o(new _scheduler.O(1, "Origin", function (t$$1) {
      return new _pith.Pith$00602(0, "P", function (o$$1) {
        (0, _String.toConsole)((0, _String.printf)("Origin: %A"))(t$$1);
        const $arg$$2 = pair(100, function (t$$2) {
          return new _pith.Pith$00602(0, "P", function (o$$2) {
            (0, _String.toConsole)((0, _String.printf)("Delay 100.: %A"))(t$$2);
          });
        });
        o$$1(new _scheduler.O(2, "Delay", $arg$$2[0], $arg$$2[1]));
        o$$1(new _scheduler.O(0, "Local", function (t$$3) {
          return new _pith.Pith$00602(0, "P", function (o$$3) {
            (0, _String.toConsole)((0, _String.printf)("Local2: %A"))(t$$3);
          });
        }));
      });
    }));
    const $arg$$5 = pair(200, function (t$$4) {
      return new _pith.Pith$00602(0, "P", function (o$$4) {
        (0, _String.toConsole)((0, _String.printf)("Delay 200.: %A"))(t$$4);
      });
    });
    o(new _scheduler.O(2, "Delay", $arg$$5[0], $arg$$5[1]));
  });
});
exports.local = local;
const run = (0, _scheduler.run)(function () {
  return (0, _default.tf)();
}, _default.timer);
exports.run = run;
const s = (0, _stream.merge)((0, _stream.periodic)(1000, "a"), (0, _stream.periodic)(2000, "b"));
exports.s = s;
const d = (0, _Util.createAtom)(_disposable.empty);
exports.d = d;
const onClick = (0, _stream.map)(function f$$2(e$$1) {
  return "clientX:" + e$$1.clientX.toString() + " clientY:" + e$$1.clientY.toString();
}, (0, _stream.map)(function f$$1(e) {
  return e;
}, (0, _stream.merge)((0, _stream.tap)(function f(_arg1) {
  d().Dispose();
}, (0, _stream.on)("click", window)), (0, _stream.on)("mousemove", window))));
exports.onClick = onClick;
d((0, _stream.run)(run, function (arg10$$5) {
  (0, _String.toConsole)((0, _String.printf)("%A"))(arg10$$5);
}, (0, _stream.merge)(onClick, s)));