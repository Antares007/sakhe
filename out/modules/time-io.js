"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$dispose = OModule$$$dispose;
exports.CancellationException = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _disposable = require("./s/disposable");

var _io = require("./io");

var _pith = require("./pith");

var _time = require("./s/time");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;
const CancellationException = (0, _Types.declare)(function CancellationException() {}, _Types.FSharpException);
exports.CancellationException = CancellationException;

function cancelable(io) {
  let disposable = _disposable.empty;
  let canceled = false;

  const cancel = function cancel() {
    canceled = true;
    (0, _disposable.T$$Dispose)(disposable);
  };

  const io$$1 = function io$$1(i) {
    return (0, _io.return$0027)(function (o, _arg1) {
      if (_arg1.tag === 1) {
        const err = _arg1.fields[1];
        throw err;
      } else {
        if (canceled) {} else {
          const mapO = function mapO(d) {
            if (!canceled) {
              return d;
            } else {
              const f$$1 = d;
              f$$1();
              throw new CancellationException();
            }
          };

          const ohole = (0, _io.O$$$return$0027)();
          (0, _io.run)(ohole, null, function (_arg2) {
            return _arg2.tag === 1 ? _arg2.fields[1] instanceof CancellationException ? (0, _pith.Pith$$$empty)() : (0, _pith.Pith$$$map)(mapO, function g$$1() {}, io(_arg2)) : (0, _pith.Pith$$$map)(mapO, function g() {}, io(_arg2));
          });
          disposable = (0, _pith.O$00602$$get_Value)(ohole);

          if (canceled) {
            cancel();
          } else {
            o(disposable);
          }
        }
      }
    }, i);
  };

  return [io$$1, (0, _disposable.return$0027)(cancel)];
}

function setTask(delay, task) {
  let disposable$$1 = _disposable.empty;
  const delay$$1 = (0, _time.DelayModule$$$unbox)(delay) | 0;
  const token = setTimeout(function () {
    const o$$1 = (0, _io.O$$$return$0027)();
    const patternInput = cancelable(task);
    (0, _io.run)(o$$1, null, patternInput[0]);
    disposable$$1 = patternInput[1];
  }, delay$$1);
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
    const f$$3 = disposable$$1;
    f$$3();
  });
}

function run(now, delay$$2, io$$2) {
  const now$$1 = (0, _time.add)(delay$$2, now);

  const see = function see(i$$3) {
    return io$$2((0, _io.I$$$map)(function f$$4() {
      return now$$1;
    }, i$$3));
  };

  const o$$3 = (0, _pith.O$$$return$0027)(function (ref, a) {
    return (0, _Types.L)(a, ref);
  }, (0, _Types.L)())(function (arg10$0040) {
    return (0, _pith.O$$$contraMap)(function (_arg1$$4) {
      if (_arg1$$4.tag === 0) {
        const io$$3 = _arg1$$4.fields[0];

        const o$$2 = function o$$2(i$$4) {
          return io$$3((0, _io.I$$$map)(function f$$5() {
            return now$$1;
          }, i$$4));
        };

        return [now$$1, o$$2];
      } else {
        throw new _Types.MatchFailureException("C:/code/sakhecore/core/time-io.fs", 57, 69);
      }
    }, arg10$0040);
  });

  const io$$6 = function io$$6(i$$5) {
    return (0, _pith.Pith$$$map)(function f$$7(_arg2$$1) {
      switch (_arg2$$1.tag) {
        case 1:
          {
            const d$$1 = _arg2$$1.fields[0];
            return d$$1;
          }

        case 2:
          {
            const io$$5 = _arg2$$1.fields[1];
            const delay$$3 = _arg2$$1.fields[0];
            return run(now$$1, delay$$3, io$$5);
          }

        default:
          {
            const io$$4 = _arg2$$1.fields[0];
            return run(now$$1, _time.DelayModule$$$zero, io$$4);
          }
      }
    }, function g$$3() {}, io$$2((0, _io.I$$$map)(function f$$6() {
      return now$$1;
    }, i$$5)));
  };

  return setTask(delay$$2, io$$6);
}

function OModule$$$delay(d$$2, io$$7) {
  return new O(2, "Delay", (0, _time.DelayModule$$$return$0027)(d$$2), function (i$$6) {
    return (0, _io.return$0027)(io$$7, i$$6);
  });
}

function OModule$$$run(io$$8) {
  return new O(0, "Run", function (i$$7) {
    return (0, _io.return$0027)(io$$8, i$$7);
  });
}

function OModule$$$dispose(d$$3) {
  return new O(1, "Dispose", d$$3);
}