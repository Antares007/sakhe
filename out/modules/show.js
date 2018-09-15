"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTaskIO = testTaskIO;
exports.d = exports.rez = exports.a = void 0;

var _io = require("./io");

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _Date = require("./fable-core.2.0.0-beta-004/Date");

var _Util = require("./fable-core.2.0.0-beta-004/Util");

var _taskIo = require("./task-io");

const a = (0, _io.IO$$$return$0027)(function (unitVar0, o) {
  o(1);
});
exports.a = a;

function testTaskIO(now, d$$1) {
  return (0, _taskIo.run)(now, (0, _taskIo.return$0027)((0, _Util.uncurry)(2, function (_arg1) {
    if (_arg1.tag === 1) {
      const err = _arg1.fields[1];
      const a$$2 = _arg1.fields[0];
      return function (o$$2) {
        o$$2((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 3"))(d$$1);
        }));
        (0, _String.toConsole)((0, _String.printf)("Exn(%d): %A %A"))(d$$1)(a$$2)(err);
        return 2;
      };
    } else {
      const a$$1 = _arg1.fields[0];
      return function (o$$1) {
        o$$1((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 0"))(d$$1);
        }));
        (0, _String.toConsole)((0, _String.printf)("run(%d): %A"))(d$$1)(a$$1);
        o$$1((0, _disposable.return$0027)(function () {
          (0, _String.toConsole)((0, _String.printf)("dispose(%d) 1"))(d$$1);
        }));
        let rez$$2;

        if (d$$1 > 0) {
          const patternInput = testTaskIO((0, _Date.now)(), d$$1 - 1);
          o$$1(patternInput[1]);
          rez$$2 = patternInput[0];
        } else {
          rez$$2 = 0;
        }

        throw new Error((0, _String.toText)((0, _String.printf)("hmm(%d)"))(d$$1));
        return 1 + rez$$2 | 0;
      };
    }
  })));
}

const patternInput$004028$002D27 = testTaskIO((0, _Date.now)(), 3);
const rez = patternInput$004028$002D27[0];
exports.rez = rez;
const d = patternInput$004028$002D27[1];
exports.d = d;
(0, _String.toConsole)((0, _String.printf)("rez: %A"))(rez);

(function () {
  const f$$5 = d;
  f$$5();
})();