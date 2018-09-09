"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sch = sch;
exports.task = task;
exports.delay = delay;
exports.see = exports.scheduler = void 0;

var _scheduler = require("./s/scheduler");

var _default = require("./s/default");

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _task = require("./s/task");

var _time = require("./s/time");

var _sink = require("./s/sink");

var _stream = require("./s/stream");

function sch(delay$$1) {
  return function (period) {
    return function (task$$1) {
      return function (scheduler$$1) {
        return (0, _scheduler.schedule)(delay$$1, period, task$$1, scheduler$$1);
      };
    };
  };
}

const scheduler = (0, _default.scheduler)();
exports.scheduler = scheduler;

function task(i) {
  return (0, _task.return$0027)(function (_arg1) {
    if (_arg1.tag === 1) {
      const t$$1 = _arg1.fields[0][0];
      const err = _arg1.fields[1];
      (0, _String.toConsole)((0, _String.printf)("task %d exn at: %A with: %A"))(i)(t$$1)(err);
      return (0, _disposable.return$0027)(function () {
        (0, _String.toConsole)((0, _String.printf)("task %d disposed Exn"))(i);
      });
    } else {
      const t = _arg1.fields[0][0];
      const s = _arg1.fields[0][1];
      (0, _String.toConsole)((0, _String.printf)("task %d run at: %A"))(i)(t);
      return (0, _disposable.return$0027)(function () {
        (0, _String.toConsole)((0, _String.printf)("task %d disposed Run"))(i);
      });
    }
  });
}

function delay(x) {
  return (0, _time.DelayModule$$$return$0027)(x);
}

const see = (0, _stream.run)(scheduler, (0, _sink.return$0027)(function (_arg1$$1) {
  switch (_arg1$$1.tag) {
    case 1:
      {
        const t$$3 = _arg1$$1.fields[0];
        (0, _String.toConsole)((0, _String.printf)("End at %A"))(t$$3);
        break;
      }

    case 2:
      {
        const t$$4 = _arg1$$1.fields[0];
        const err$$1 = _arg1$$1.fields[1];
        (0, _String.toConsole)((0, _String.printf)("Error %A at %A"))(err$$1)(t$$4);
        break;
      }

    default:
      {
        const t$$2 = _arg1$$1.fields[0];
        const e = _arg1$$1.fields[1];
        (0, _String.toConsole)((0, _String.printf)("Event %A at %A"))(e)(t$$2);
      }
  }
}), (0, _stream.combineArray)([(0, _stream.periodic)(delay(1000)), (0, _stream.periodic)(delay(750)), (0, _stream.periodic)(delay(250)), (0, _stream.periodic)(delay(500))]));
exports.see = see;