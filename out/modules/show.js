"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = see;
exports.s = exports.dd = void 0;

var _disposable = require("./s/disposable");

var _String = require("./fable-core.2.0.0-beta-004/String");

var _timeIo = require("./time-io");

var _stream = require("./stream");

var _sink = require("./sink");

var _time = require("./s/time");

const dd = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.dd = dd;

function see(d) {
  return (0, _timeIo.return$0027)(function (i) {
    return function (o) {
      if (i.tag === 1) {
        const err = i.fields[1];
        const a = i.fields[0];
        o((0, _timeIo.OModule$$$delay)(1500, function (i$$2) {
          return function (o$$1) {
            if (i$$2.tag === 1) {
              const err$$1 = i$$2.fields[1];
              const a$$2 = i$$2.fields[0];
              throw err$$1;
            } else {
              const a$$1 = i$$2.fields[0];
              (0, _String.toConsole)((0, _String.printf)("|> err: %A"))(err);
              throw err;
            }
          };
        }));
        throw err;
      } else {
        const t = i.fields[0];
        (0, _String.toConsole)((0, _String.printf)("|> a(%d) %A"))(d)(t);

        for (let i$$1 = 0; i$$1 <= 10; i$$1++) {
          o((0, _timeIo.OModule$$$run)((0, _stream.run)((0, _stream.periodic)(1000), (0, _sink.return$0027)(function (arg10$$1) {
            (0, _String.toConsole)((0, _String.printf)("a:%A"))(arg10$$1);
          }))));
        }

        (0, _String.toConsole)((0, _String.printf)("<| a(%d) %A"))(d)(t);
      }
    };
  });
}

(0, _disposable.SettableDisposable$$Set$$Z5A296901)(dd, (0, _timeIo.run)(_time.zero, see(0)));
const s = (0, _stream.now)(1);
exports.s = s;