"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTaskIO = testTaskIO;
exports.d = exports.rez = exports.see = exports.t2 = exports.t1 = void 0;

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _taskIo = require("./task-io");

var _Date = require("./fable-core.2.0.0-beta-004/Date");

const t1 = (0, _taskIo.return$0027)(function (i, o) {
  const matchValue = i();

  if (matchValue.tag === 1) {
    const err = matchValue.fields[1];
    const a$$1 = matchValue.fields[0] | 0;
    return a$$1 | 0;
  } else {
    const a = matchValue.fields[0] | 0;
    o((0, _disposable.return$0027)(function () {
      (0, _String.toConsole)((0, _String.printf)("d"));
    }));
    return a | 0;
  }
});
exports.t1 = t1;

const t2 = (() => {
  var l$$1, r$$1;
  const l = t1;
  const r = t1;
  return l$$1 = l, (r$$1 = r, function (i$$1) {
    return function (o$$1) {
      return l$$1(i$$1)(o$$1) + r$$1(i$$1)(o$$1);
    };
  });
})();

exports.t2 = t2;
const see = (0, _taskIo.run)(function () {
  return 1;
}, t2);
exports.see = see;
(0, _String.toConsole)((0, _String.printf)("see: %A"))([see[0], see[1]]);

(function () {
  const f$$2 = see[1];
  f$$2();
})();

function testTaskIO(now, d$$1) {
  return (0, _taskIo.run)(now, (0, _taskIo.return$0027)(function (i$$2, o$$2) {
    const matchValue$$1 = i$$2();

    if (matchValue$$1.tag === 1) {
      const err$$1 = matchValue$$1.fields[1];
      const a$$3 = matchValue$$1.fields[0];
      o$$2((0, _disposable.return$0027)(function () {
        (0, _String.toConsole)((0, _String.printf)("dispose(%d) 3"))(d$$1);
      }));
      (0, _String.toConsole)((0, _String.printf)("Exn(%d): %A %A"))(d$$1)(a$$3)(err$$1);
      return 2;
    } else {
      const a$$2 = matchValue$$1.fields[0];
      o$$2((0, _disposable.return$0027)(function () {
        (0, _String.toConsole)((0, _String.printf)("dispose(%d) 0"))(d$$1);
      }));
      (0, _String.toConsole)((0, _String.printf)("run(%d): %A"))(d$$1)(a$$2);
      o$$2((0, _disposable.return$0027)(function () {
        (0, _String.toConsole)((0, _String.printf)("dispose(%d) 1"))(d$$1);
      }));
      let rez$$2;

      if (d$$1 > 0) {
        const patternInput = testTaskIO(function () {
          return (0, _Date.now)();
        }, d$$1 - 1);
        o$$2(patternInput[1]);
        rez$$2 = patternInput[0];
      } else {
        rez$$2 = 0;
      }

      return 1 + rez$$2 | 0;
    }
  }));
}

const patternInput$004041 = testTaskIO(function () {
  return (0, _Date.now)();
}, 3);
const rez = patternInput$004041[0];
exports.rez = rez;
const d = patternInput$004041[1];
exports.d = d;
(0, _String.toConsole)((0, _String.printf)("rez: %A"))(rez);

(function () {
  const f$$7 = d;
  f$$7();
})();