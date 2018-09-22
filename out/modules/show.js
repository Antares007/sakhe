"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = io;
exports.d = void 0;

var _disposable = require("./s/disposable");

var _stream = require("./stream");

var _String = require("./fable-core.2.0.0-beta-005/String");

var _sink = require("./sink");

var _timeIo = require("./time-io");

var _io = require("./io");

var _time = require("./s/time");

const d = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.d = d;

function io(d$$1) {
  return (0, _timeIo.return$0027)((0, _io.return$0027)(function (i) {
    return function (o) {
      if (i.tag === 1) {
        const err = i.fields[1];
        const a = i.fields[0];
        throw err;
      } else {
        const t = i.fields[0];

        for (let i$$1 = 1; i$$1 <= 100; i$$1++) {
          o((0, _timeIo.OModule$$$run)((0, _stream.run)((0, _stream.periodic)(1000), (0, _sink.return$0027)(function (arg10) {
            (0, _String.toConsole)((0, _String.printf)("%A"))(arg10);
          }))));
        }
      }
    };
  }));
}

(0, _disposable.SettableDisposable$$Set$$Z5A296901)(d, (0, _timeIo.run)(_time.zero, io(0)));
window.d = d;