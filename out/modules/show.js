"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printClock = printClock;
exports.schedule = schedule;
exports.scheduler = exports.localClock = exports.performanceClock = void 0;

var _default = require("./s/default");

var _clock = require("./s/clock");

var _String = require("./fable-core.2.0.0-beta-004/String");

var _scheduler = require("./s/scheduler");

var _task = require("./s/task");

var _s = require("./s");

var _time = require("./s/time");

const performanceClock = _default.performanceClock;
exports.performanceClock = performanceClock;
const localClock = (0, _clock.localClock)(performanceClock);
exports.localClock = localClock;

function printClock(name, clock) {
  const time = (0, _clock.localTime)(clock);
  const offset = (0, _clock.offset)(clock);
  (0, _String.toConsole)((0, _String.printf)("%s: %A %A"))(name)(time)(offset.Value);
}

printClock("performanceClock", performanceClock);
printClock("localClock", localClock);
const scheduler = (0, _scheduler.return$0027)(performanceClock);
exports.scheduler = scheduler;

function schedule(delay, period, scheduler$$1, task) {
  return (0, _scheduler.schedule)(delay, period, (0, _task.return$0027)(task), scheduler$$1);
}

schedule((0, _time.DelayModule$$$return$0027)(_s.a), null, scheduler, function (_arg1) {
  if (_arg1.tag === 1) {
    return null;
  } else {
    const t = _arg1.fields[0][0];
    const cs = _arg1.fields[0][1];
    (0, _String.toConsole)((0, _String.printf)("run: %A"))(t);
    return schedule((0, _time.DelayModule$$$return$0027)(10), null, scheduler, function (_arg2) {
      if (_arg2.tag === 1) {
        return null;
      } else {
        const t$$1 = _arg2.fields[0][0];
        const cs$$1 = _arg2.fields[0][1];
        (0, _String.toConsole)((0, _String.printf)("run: %A"))(t$$1);
        return schedule((0, _time.DelayModule$$$return$0027)(10), null, scheduler, function (_arg3) {
          if (_arg3.tag === 1) {
            return null;
          } else {
            const t$$2 = _arg3.fields[0][0];
            const cs$$2 = _arg3.fields[0][1];
            (0, _String.toConsole)((0, _String.printf)("run: %A"))(t$$2);
            return schedule((0, _time.DelayModule$$$return$0027)(10), null, scheduler, function (_arg4) {
              if (_arg4.tag === 1) {
                return null;
              } else {
                const t$$3 = _arg4.fields[0][0];
                const cs$$3 = _arg4.fields[0][1];
                (0, _String.toConsole)((0, _String.printf)("run: %A"))(t$$3);
                return null;
              }
            });
          }
        });
      }
    });
  }
});