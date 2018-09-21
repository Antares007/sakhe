"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$dispose = OModule$$$dispose;
exports.O = exports.T = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _time = require("./s/time");

var _disposable = require("./s/disposable");

var _io = require("./io");

const T = (0, _Types.declare)(function T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T = T;
const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return new T(0, "TimeIO", f);
}

function setTask(delay, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function run(now, _arg1) {
  const io = _arg1.fields[0];
  return (0, _io.IO$$$run)(now, function (i) {
    return function (o) {
      const pith = io(i);
      pith(function (_arg2) {
        switch (_arg2.tag) {
          case 0:
            {
              const io$$2 = _arg2.fields[0];
              o(run(now, io$$2));
              break;
            }

          case 1:
            {
              const io$$3 = _arg2.fields[1];
              const delay$$1 = _arg2.fields[0];
              const d$$1 = (0, _disposable.SettableDisposable$$$$002Ector)();
              o((0, _disposable.append)(d$$1, setTask(delay$$1, function () {
                (0, _disposable.SettableDisposable$$Set$$Z5A296901)(d$$1, run((0, _time.add)(delay$$1, now), io$$3));
              })));
              break;
            }

          default:
            {
              const d = _arg2.fields[0];
              o(d);
            }
        }
      });
    };
  })[1];
}

function OModule$$$delay(d$$2, io$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(d$$2), new T(0, "TimeIO", io$$4));
}

function OModule$$$run(io$$5) {
  return new O(0, "Run", new T(0, "TimeIO", function (i$$1) {
    return (0, _io.IO$$$return$0027)(io$$5, i$$1);
  }));
}

function OModule$$$dispose(d$$3) {
  return new O(2, "Dispose", d$$3);
}