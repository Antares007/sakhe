"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.schedule = schedule;

var _Types = require("../fable-core.2.0.0-beta-004/Types");

var _timeline = require("./timeline");

var _Util = require("../fable-core.2.0.0-beta-004/Util");

var _clock = require("./clock");

var _task = require("./task");

var _time = require("./time");

var _timer = require("./timer");

var _disposable = require("./disposable");

function return$0027(timer, clock) {
  return [new _Types.FSharpRef(null), timer, clock, (0, _timeline.empty)()];
}

function scheduleNextRun(scheduler) {
  const timeline = scheduler[3];
  const ref = scheduler[0];
  const matchValue = [(0, _timeline.nextArrival)(timeline), ref.contents];

  if (matchValue[0] != null) {
    if (matchValue[1] != null) {
      const nextArrival$$1 = matchValue[0];

      if ((0, _Util.compare)(matchValue[1][0], nextArrival$$1) < 0) {
        const f$$1 = matchValue[1][1];
        f$$1();
        ref.contents = [nextArrival$$1, setNextRun(nextArrival$$1, scheduler)];
      }
    } else {
      const nextArrival = matchValue[0];
      ref.contents = [nextArrival, setNextRun(nextArrival, scheduler)];
    }
  } else if (matchValue[1] != null) {
    if (!false) {
      debugger;
    }

    const f = matchValue[1][1];
    f();
    ref.contents = null;
  }
}

function setNextRun(nextArrival$$2, scheduler$$1) {
  const timer$$1 = scheduler$$1[1];
  const timeline$$1 = scheduler$$1[3];
  const clock$$1 = scheduler$$1[2];
  const task = (0, _task.return$0027)(function (_arg1$$2) {
    if (_arg1$$2.tag === 1) {
      const err = _arg1$$2.fields[1];

      if (!false) {
        debugger;
      }

      throw err;
    } else {
      const s = _arg1$$2.fields[0][1];
      (0, _task.run)((0, _timeline.removeTasks)((0, _clock.now)(clock$$1), timeline$$1));
      scheduleNextRun(scheduler$$1);
      return null;
    }
  });
  const delay = (0, _time.DelayModule$$$fromTo)((0, _clock.now)(clock$$1), nextArrival$$2);
  return (0, _timer.setTimer)(task, delay, timer$$1);
}

function add(time, period, task$$1, cancelRef, scheduler$$2) {
  const timeline$$2 = scheduler$$2[3];
  let task$$2;

  if (period != null) {
    const period$$1 = period;
    const readd = (0, _task.return$0027)(function (_arg1$$3) {
      if (_arg1$$3.tag === 1) {
        if (!false) {
          debugger;
        }

        return null;
      } else {
        const time$$1 = _arg1$$3.fields[0][0];
        const time$$2 = (0, _time.add)(time$$1, period$$1);
        add(time$$2, period$$1, task$$1, cancelRef, scheduler$$2);
        return null;
      }
    });
    task$$2 = (0, _task.append)(task$$1, readd);
  } else {
    task$$2 = task$$1;
  }

  const patternInput = (0, _task.Cancelable$$$extend)(task$$2);
  const task$$4 = (0, _task.map)(function f$$4() {
    return time;
  }, patternInput[0]);
  const f$$5 = cancelRef.contents;
  f$$5();
  cancelRef.contents = patternInput[1];
  (0, _timeline.add)(time, task$$4, timeline$$2);
}

function schedule(delay$$1, period$$2, task$$5, scheduler$$3) {
  const clock$$2 = scheduler$$3[2];
  const now = (0, _clock.now)(clock$$2);
  let time$$3;

  if (delay$$1 != null) {
    const delay$$2 = delay$$1;
    time$$3 = (0, _time.add)(now, delay$$2);
  } else {
    time$$3 = now;
  }

  const cancelRef$$1 = new _Types.FSharpRef(_disposable.empty);
  add(time$$3, period$$2, task$$5, cancelRef$$1, scheduler$$3);
  scheduleNextRun(scheduler$$3);
  return (0, _disposable.return$0027)(function () {
    const f$$7 = cancelRef$$1.contents;
    f$$7();
  });
}