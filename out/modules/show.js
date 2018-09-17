"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTaskIO = testTaskIO;
exports.see = see;
exports.dd = exports.d = exports.rez = void 0;

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _Date = require("./fable-core.2.0.0-beta-004/Date");

var _io = require("./io");

var _timeIo = require("./time-io");

var _time = require("./s/time");

function testTaskIO(now, d$$1) {
  return (0, _io.run)(now, function (i) {
    return (0, _io.return$0027)(function (o, _arg1) {
      if (_arg1.tag === 1) {
        const err = _arg1.fields[1];
        const a$$1 = _arg1.fields[0];
        o((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 3"))(d$$1);
        }));
        (0, _String.toConsole)((0, _String.printf)("Exn(%d): %A %A"))(d$$1)(a$$1)(err);
        return 2;
      } else {
        const a = _arg1.fields[0];
        o((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 0"))(d$$1);
        }));
        (0, _String.toConsole)((0, _String.printf)("run(%d): %A"))(d$$1)(a);
        o((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 1"))(d$$1);
        }));
        let rez$$2;

        if (d$$1 > 0) {
          const patternInput = testTaskIO((0, _Date.now)(), d$$1 - 1);
          o(patternInput[1]);
          rez$$2 = patternInput[0];
        } else {
          rez$$2 = 0;
        }

        throw new Error((0, _String.toText)((0, _String.printf)("hmm(%d)"))(d$$1));
        return 1 + rez$$2 | 0;
      }
    }, i);
  });
}

const patternInput$004026$002D13 = testTaskIO((0, _Date.now)(), 0);
const rez = patternInput$004026$002D13[0];
exports.rez = rez;
const d = patternInput$004026$002D13[1];
exports.d = d;
(0, _String.toConsole)((0, _String.printf)("rez: %A"))(rez);

(function () {
  const f$$4 = d;
  f$$4();
})();

function see(d$$3, o$$1, _arg1$$2) {
  if (_arg1$$2.tag === 1) {
    const err$$2 = _arg1$$2.fields[1];
    const a$$4 = _arg1$$2.fields[0];
  } else {
    const t = _arg1$$2.fields[0];
    (0, _String.toConsole)((0, _String.printf)("1(%d) %A"))(d$$3)(t);

    if (d$$3 > 0) {
      o$$1((0, _timeIo.OModule$$$delay)(1000, function (o$$2, _arg1$$3) {
        see(d$$3 - 1, o$$2, _arg1$$3);
      }));
    }

    const t$$1 = function t$$1(d$$6) {
      return (0, _timeIo.OModule$$$delay)(10, function (o$$3, _arg2) {
        if (_arg2.tag === 1) {
          const err$$1 = _arg2.fields[1];
          const a$$3 = _arg2.fields[0];
        } else {
          const a$$2 = _arg2.fields[0];
          (0, _String.toConsole)((0, _String.printf)("2 %A"))(a$$2);

          if (d$$6 > 0) {
            o$$3(t$$1(d$$6 - 1));
          }
        }
      });
    };

    o$$1(t$$1(9));
  }
}

const dd = (0, _timeIo.run)((0, _time.return$0027)(0), (0, _time.DelayModule$$$return$0027)(1000), function (i$$1) {
  return (0, _io.return$0027)(function (o$$4, _arg1$$4) {
    see(3, o$$4, _arg1$$4);
  }, i$$1);
});
exports.dd = dd;