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

var _time = require("./s/time");

var _io = require("./io");

var _pith = require("./pith");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function setTask(delay, task) {
  let disposable = _disposable.empty;
  const delay$$1 = (0, _time.DelayModule$$$unbox)(delay) | 0;
  const token = setTimeout(function () {
    const o = (0, _io.O$$$return$0027)();
    (0, _io.run)(o, null, task);
    disposable = (0, _pith.O$00602$$get_Value)(o);
  }, delay$$1);
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
    const f$$1 = disposable;
    f$$1();
  });
}

function run(now, delay$$2, io) {
  const t = (0, _time.add)(delay$$2, now);

  const io$$3 = function io$$3(i) {
    var err;
    return (0, _pith.Pith$$$map)(function f$$2(_arg1$$1) {
      switch (_arg1$$1.tag) {
        case 1:
          {
            const d = _arg1$$1.fields[0];
            return d;
          }

        case 2:
          {
            const io$$2 = _arg1$$1.fields[1];
            const delay$$3 = _arg1$$1.fields[0];
            return run(t, delay$$3, io$$2);
          }

        default:
          {
            const io$$1 = _arg1$$1.fields[0];
            return run(t, (0, _time.DelayModule$$$return$0027)(0), io$$1);
          }
      }
    }, function g() {}, io(i.tag === 1 ? (err = i.fields[1], new _io.I$00601(1, "Catch", t, err)) : new _io.I$00601(0, "Try", t)));
  };

  return setTask(delay$$2, io$$3);
}

function OModule$$$delay(d$$1, io$$4) {
  return new O(2, "Delay", (0, _time.DelayModule$$$return$0027)(d$$1), function (i$$1) {
    return (0, _io.return$0027)(io$$4, i$$1);
  });
}

function OModule$$$run(io$$5) {
  return new O(0, "Run", function (i$$2) {
    return (0, _io.return$0027)(io$$5, i$$2);
  });
}

function OModule$$$dispose(d$$2) {
  return new O(1, "Dispose", d$$2);
}