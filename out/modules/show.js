"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sch = sch;
exports.task = task;
exports.delay = delay;
exports.now2 = now2;
exports.see = exports.d = exports.http = exports.fs = exports.scheduler = exports.localClock = exports.performanceClock = void 0;

var _scheduler = require("./s/scheduler");

var _default = require("./s/default");

var _clock = require("./s/clock");

var _String = require("./fable-core.2.0.0-beta-004/String");

var _disposable = require("./s/disposable");

var _task = require("./s/task");

var _time = require("./s/time");

var fs$$1 = _interopRequireWildcard(require("fs"));

var http$$1 = _interopRequireWildcard(require("http"));

var _sink = require("./s/sink");

var _stream = require("./s/stream");

var _Types = require("./fable-core.2.0.0-beta-004/Types");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function sch(delay$$1) {
  return function (period) {
    return function (task$$1) {
      return function (scheduler$$1) {
        return (0, _scheduler.schedule)(delay$$1, period, task$$1, scheduler$$1);
      };
    };
  };
}

const performanceClock = _default.performanceClock;
exports.performanceClock = performanceClock;
const localClock = (0, _clock.localClock)(performanceClock);
exports.localClock = localClock;
const scheduler = (0, _scheduler.map)(function f(c) {
  return performanceClock;
}, (0, _scheduler.return$0027)(performanceClock));
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

const fs = fs$$1;
exports.fs = fs;
const http = http$$1;
exports.http = http;

function now2(a) {
  return (0, _stream.fromTask2)(null, null, function (sink, scheduler$$2, _arg1$$1) {
    if (_arg1$$1.tag === 1) {
      if (_arg1$$1.fields[1] instanceof _task.Cancelable$002EException) {
        (0, _String.toConsole)((0, _String.printf)("yay"));
        (0, _sink.Send$$$event)(_arg1$$1.fields[0][0], 666, sink);
        return null;
      } else {
        (0, _sink.Send$$$error)(_arg1$$1.fields[0][0], _arg1$$1.fields[1], sink);
        return null;
      }
    } else {
      (0, _sink.Send$$$event)(_arg1$$1.fields[0][0], a, sink);
      (0, _String.toConsole)((0, _String.printf)("yess"));
      (0, _task.Cancelable$$$ifCanceledThenRaiseCancellationException)(_arg1$$1.fields[0][1]);
      (0, _String.toConsole)((0, _String.printf)("noooooo"));
      (0, _sink.Send$$$end$0027)(_arg1$$1.fields[0][0], sink);
      return null;
    }
  });
}

const d = new _Types.FSharpRef(_disposable.empty);
exports.d = d;
const see = (0, _stream.run)(scheduler, (0, _sink.return$0027)(function (_arg1$$2) {
  switch (_arg1$$2.tag) {
    case 1:
      {
        const t$$6 = _arg1$$2.fields[0];
        (0, _String.toConsole)((0, _String.printf)("End at %A"))(t$$6);
        break;
      }

    case 2:
      {
        const t$$7 = _arg1$$2.fields[0];
        const err$$2 = _arg1$$2.fields[1];
        (0, _String.toConsole)((0, _String.printf)("Error %A at %A"))(err$$2)(t$$7);
        break;
      }

    default:
      {
        const t$$5 = _arg1$$2.fields[0];
        const e = _arg1$$2.fields[1] | 0;
        (0, _String.toConsole)((0, _String.printf)("Event %A at %A"))(e)(t$$5);
      }
  }
}), (0, _stream.mergeArray)([(0, _stream.map)(function f$$5() {
  return 13;
}, (0, _stream.periodic)(delay(13000))), now2(42), (0, _stream.map)(function f$$6() {
  return 2;
}, (0, _stream.periodic)(delay(2000))), (0, _stream.map)(function f$$7() {
  return 3;
}, (0, _stream.periodic)(delay(3000))), (0, _stream.map)(function f$$8() {
  return 5;
}, (0, _stream.periodic)(delay(5000))), (0, _stream.map)(function f$$9() {
  return 8;
}, (0, _stream.periodic)(delay(8000)))]));
exports.see = see;
d.contents = see;
window.d = see;