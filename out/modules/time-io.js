"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$dispose = OModule$$$dispose;
exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./s/time");

var _disposable = require("./disposable");

var _taskIo = require("./task-io");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return (0, _io.return$0027)(f);
}

function setTask(delay, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function run(now, _arg1) {
  const io = _arg1;

  const ring = function ring(arg10$0040) {
    return (0, _io.pmap)(function (p, o) {
      p(function (_arg2) {
        switch (_arg2.tag) {
          case 0:
            {
              const io$$1 = _arg2.fields[0];
              o(run(now, io$$1));
              break;
            }

          case 1:
            {
              const io$$2 = _arg2.fields[1];
              const delay$$1 = _arg2.fields[0];
              const d$$1 = (0, _disposable.SettableDisposable$$$$002Ector)();
              o((0, _disposable.append)(d$$1, setTask(delay$$1, function () {
                const now$$1 = (0, _time.add)(delay$$1, now);
                (0, _disposable.SettableDisposable$$Set$$Z5A296901)(d$$1, run(now$$1, io$$2));
              })));
              break;
            }

          case 3:
            {
              const period = _arg2.fields[0];
              const io$$3 = _arg2.fields[1];
              break;
            }

          default:
            {
              const d = _arg2.fields[0];
              o(d);
            }
        }
      });
    }, arg10$0040);
  };

  const y = (0, _taskIo.lift)(ring(io));
  return (0, _taskIo.run)(now, y);
}

function OModule$$$delay(d$$2, io$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(d$$2), io$$4);
}

function OModule$$$run(io$$5) {
  return new O(0, "Run", io$$5);
}

function OModule$$$dispose(d$$3) {
  return new O(2, "Dispose", d$$3);
}