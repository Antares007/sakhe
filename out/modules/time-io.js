"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$dispose = OModule$$$dispose;
exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _disposable = require("./s/disposable");

var _io = require("./io");

var _time = require("./s/time");

var _pith = require("./pith");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

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
          disposable = (0, _io.run)(null, io)[1];

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
    const patternInput = cancelable(task);
    (0, _io.run)(null, patternInput[0]);
    disposable$$1 = patternInput[1];
  }, delay$$1);
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
    const f$$2 = disposable$$1;
    f$$2();
  });
}

function run(now, delay$$2, io$$2) {
  const t = (0, _time.add)(delay$$2, now);

  const io$$5 = function io$$5(i$$1) {
    var err$$1;
    return (0, _pith.O$$$map)(function f$$3(_arg1$$2) {
      switch (_arg1$$2.tag) {
        case 1:
          {
            const d$$1 = _arg1$$2.fields[0];
            return d$$1;
          }

        case 2:
          {
            const io$$4 = _arg1$$2.fields[1];
            const delay$$3 = _arg1$$2.fields[0];
            return run(t, delay$$3, io$$4);
          }

        default:
          {
            const io$$3 = _arg1$$2.fields[0];
            return run(t, (0, _time.DelayModule$$$return$0027)(0), io$$3);
          }
      }
    }, function g() {}, io$$2(i$$1.tag === 1 ? (err$$1 = i$$1.fields[1], new _io.I$00601(1, "Catch", t, err$$1)) : new _io.I$00601(0, "Try", t)));
  };

  return setTask(delay$$2, io$$5);
}

function OModule$$$delay(d$$2, io$$6) {
  return new O(2, "Delay", (0, _time.DelayModule$$$return$0027)(d$$2), function (i$$2) {
    return (0, _io.return$0027)(io$$6, i$$2);
  });
}

function OModule$$$run(io$$7) {
  return new O(0, "Run", function (i$$3) {
    return (0, _io.return$0027)(io$$7, i$$3);
  });
}

function OModule$$$dispose(d$$3) {
  return new O(1, "Dispose", d$$3);
}