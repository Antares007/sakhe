"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTaskIO = testTaskIO;
exports.see = see;
exports.dd = void 0;

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _Date = require("./fable-core.2.0.0-beta-004/Date");

var _io = require("./io");

var _timeIo = require("./time-io");

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

function see(d$$2, o$$1, _arg1$$1) {
  if (_arg1$$1.tag === 1) {
    const err$$2 = _arg1$$1.fields[1];
    const a$$4 = _arg1$$1.fields[0];
    o$$1((0, _timeIo.OModule$$$delay)(1500, function (o$$4, _arg3) {
      if (_arg3.tag === 1) {
        const err$$3 = _arg3.fields[1];
        const a$$6 = _arg3.fields[0];
        throw err$$3;
      } else {
        const a$$5 = _arg3.fields[0];
        (0, _String.toConsole)((0, _String.printf)("|> err: %A"))(err$$2);
        throw err$$2;
      }
    }));
    throw err$$2;
  } else {
    const t = _arg1$$1.fields[0];
    (0, _String.toConsole)((0, _String.printf)("|> a(%d) %A"))(d$$2)(t);

    if (d$$2 < 2) {
      o$$1((0, _timeIo.OModule$$$delay)(1000, function (o$$2, _arg1$$2) {
        see(d$$2 + 1, o$$2, _arg1$$2);
      }));
    }

    throw new Error("test");

    const t$$1 = function t$$1(d2) {
      return (0, _timeIo.OModule$$$delay)(1500, function (o$$3, _arg2) {
        if (_arg2.tag === 1) {
          const err$$1 = _arg2.fields[1];
          const a$$3 = _arg2.fields[0];
        } else {
          const a$$2 = _arg2.fields[0];
          (0, _String.toConsole)((0, _String.printf)("|> b(%d.%d) %A"))(d$$2)(d2)(a$$2);

          if (d2 < 2) {
            o$$3(t$$1(d2 + 1));
          }

          (0, _String.toConsole)((0, _String.printf)("<| b(%d.%d) %A"))(d$$2)(d2)(a$$2);
        }
      });
    };

    o$$1(t$$1(0));
    (0, _String.toConsole)((0, _String.printf)("<| a(%d) %A"))(d$$2)(t$$1);
  }
}

(0, _disposable.SettableDisposable$$Set$$Z5A296901)(dd, (0, _timeIo.run)(_time.zero, new _timeIo.TimeIO(0, "TimeIO", function (i$$1) {
  return (0, _io.IO$$$return$0027)(function (o$$5, _arg1$$3) {
    see(0, o$$5, _arg1$$3);
  }, i$$1);
})));