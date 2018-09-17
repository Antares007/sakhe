"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.z = z;
exports.testTaskIO = testTaskIO;
exports.d = exports.rez = exports.d1 = exports.r = void 0;

var _taskIo = require("./task-io");

var _pith = require("./pith");

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _Date = require("./fable-core.2.0.0-beta-004/Date");

function z(i, f) {
  return (0, _taskIo.run)(i, function (i$$1) {
    return (0, _taskIo.return$0027)(f, i$$1);
  });
}

const patternInput$004010$002D30 = z((0, _pith.I$$$Of)(1), function (o, _arg1) {
  if (_arg1.tag === 1) {
    const err$$1 = _arg1.fields[1];
    const a$$3 = _arg1.fields[0] | 0;
    return a$$3 | 0;
  } else {
    const a = _arg1.fields[0] | 0;
    const patternInput = z((0, _pith.I$$$Of)(2), function (o$$1, _arg2) {
      if (_arg2.tag === 1) {
        const err = _arg2.fields[1];
        const a$$2 = _arg2.fields[0] | 0;
        return a$$2 | 0;
      } else {
        const a$$1 = _arg2.fields[0] | 0;
        o$$1((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("ddd!!!"));
        }));
        return a$$1 | 0;
      }
    });
    o(patternInput[1]);
    throw new Error("a");
    return patternInput[0] + a | 0;
  }
});
const r = patternInput$004010$002D30[0];
exports.r = r;
const d1 = patternInput$004010$002D30[1];
exports.d1 = d1;
(0, _String.toConsole)((0, _String.printf)("%d"))(r);

(function () {
  const f$$5 = d1;
  f$$5();
})();

function testTaskIO(now, d$$2) {
  return (0, _taskIo.run)(now, function (i$$4) {
    return (0, _taskIo.return$0027)(function (o$$2, _arg1$$2) {
      if (_arg1$$2.tag === 1) {
        const err$$2 = _arg1$$2.fields[1];
        const a$$5 = _arg1$$2.fields[0];
        o$$2((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 3"))(d$$2);
        }));
        (0, _String.toConsole)((0, _String.printf)("Exn(%d): %A %A"))(d$$2)(a$$5)(err$$2);
        return 2;
      } else {
        const a$$4 = _arg1$$2.fields[0];
        o$$2((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 0"))(d$$2);
        }));
        (0, _String.toConsole)((0, _String.printf)("run(%d): %A"))(d$$2)(a$$4);
        o$$2((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 1"))(d$$2);
        }));
        let rez$$3;

        if (d$$2 > 0) {
          const patternInput$$1 = testTaskIO((0, _pith.I$$$Of)((0, _Date.now)()), d$$2 - 1);
          o$$2(patternInput$$1[1]);
          rez$$3 = patternInput$$1[0];
        } else {
          rez$$3 = 0;
        }

        throw new Error((0, _String.toText)((0, _String.printf)("hmm(%d)"))(d$$2));
        return 1 + rez$$3 | 0;
      }
    }, i$$4);
  });
}

const patternInput$004044$002D31 = testTaskIO((0, _pith.I$$$Of)((0, _Date.now)()), 3);
const rez = patternInput$004044$002D31[0];
exports.rez = rez;
const d = patternInput$004044$002D31[1];
exports.d = d;
(0, _String.toConsole)((0, _String.printf)("rez: %A"))(rez);

(function () {
  const f$$10 = d;
  f$$10();
})();