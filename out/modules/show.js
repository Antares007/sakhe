"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTaskIO = testTaskIO;
exports.d = exports.rez = void 0;

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _Date = require("./fable-core.2.0.0-beta-004/Date");

var _pith = require("./pith");

var _io = require("./io");

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
        throw new Error((0, _String.toText)((0, _String.printf)("hmm2(%d)"))(d$$1));
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
          const patternInput = testTaskIO((0, _pith.I$$$Of)((0, _Date.now)()), d$$1 - 1);
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

const patternInput$004026$002D53 = testTaskIO((0, _pith.I$$$Of)((0, _Date.now)()), 3);
const rez = patternInput$004026$002D53[0];
exports.rez = rez;
const d = patternInput$004026$002D53[1];
exports.d = d;
(0, _String.toConsole)((0, _String.printf)("rez: %A"))(rez);

(function () {
  const f$$4 = d;
  f$$4();
})();