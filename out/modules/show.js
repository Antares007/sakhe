"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTaskIO = testTaskIO;
exports.see = see;
exports.s = exports.dd = void 0;

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _Date = require("./fable-core.2.0.0-beta-004/Date");

var _io = require("./io");

var _timeIo = require("./time-io");

var _stream = require("./stream");

var _sink = require("./sink");

var _time = require("./s/time");

function testTaskIO(now, d) {
  return (0, _io.IO$$$run)(now, function (i) {
    return (0, _io.IO$$$return$0027)(function (o, _arg1) {
      if (_arg1.tag === 1) {
        const err = _arg1.fields[1];
        const a$$1 = _arg1.fields[0];
        o((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 3"))(d);
        }));
        (0, _String.toConsole)((0, _String.printf)("Exn(%d): %A %A"))(d)(a$$1)(err);
        return 2;
      } else {
        const a = _arg1.fields[0];
        o((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 0"))(d);
        }));
        (0, _String.toConsole)((0, _String.printf)("run(%d): %A"))(d)(a);
        o((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 1"))(d);
        }));
        let rez$$1;

        if (d > 0) {
          const patternInput = testTaskIO((0, _Date.now)(), d - 1);
          o(patternInput[1]);
          rez$$1 = patternInput[0];
        } else {
          rez$$1 = 0;
        }

        throw new Error((0, _String.toText)((0, _String.printf)("hmm(%d)"))(d));
        return 1 + rez$$1 | 0;
      }
    }, i);
  });
}

const dd = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.dd = dd;

function see(d$$2, i$$1) {
  return function (o$$1) {
    if (i$$1.tag === 1) {
      const err$$1 = i$$1.fields[1];
      const a$$2 = i$$1.fields[0];
      o$$1((0, _timeIo.OModule$$$delay)(1500, function (i$$2) {
        return function (o$$2) {
          if (i$$2.tag === 1) {
            const err$$2 = i$$2.fields[1];
            const a$$4 = i$$2.fields[0];
            throw err$$2;
          } else {
            const a$$3 = i$$2.fields[0];
            (0, _String.toConsole)((0, _String.printf)("|> err: %A"))(err$$1);
            throw err$$1;
          }
        };
      }));
      throw err$$1;
    } else {
      const t = i$$1.fields[0];
      (0, _String.toConsole)((0, _String.printf)("|> a(%d) %A"))(d$$2)(t);
      const see$$1 = (0, _stream.periodic)(1000);
      const io$$1 = (0, _stream.run)(see$$1, (0, _sink.return$0027)(function (_arg1$$1) {
        if (_arg1$$1.tag === 0) {
          const t$$1 = _arg1$$1.fields[0];
          (0, _String.toConsole)((0, _String.printf)("%A"))(t$$1);
        }
      }));
      o$$1((0, _timeIo.OModule$$$dispose)((0, _timeIo.run)(t, io$$1)));
      (0, _String.toConsole)((0, _String.printf)("<| a(%d) %A"))(d$$2)(t);
    }
  };
}

(0, _disposable.SettableDisposable$$Set$$Z5A296901)(dd, (0, _timeIo.run)(_time.zero, (0, _timeIo.return$0027)(function (i$$3) {
  return see(0, i$$3);
})));
const s = (0, _stream.now)(1);
exports.s = s;