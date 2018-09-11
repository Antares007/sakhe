"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.schedule = schedule;

var _Util = require("../fable-core.2.0.0-beta-004/Util");

var _task = require("./task");

var _Seq = require("../fable-core.2.0.0-beta-004/Seq");

var _Array = require("../fable-core.2.0.0-beta-004/Array");

var _Types = require("../fable-core.2.0.0-beta-004/Types");

var _time = require("./time");

var _timer = require("./timer");

var _disposable = require("./disposable");

function TimelineModule$$$findAppendPosition(a, array) {
  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if ((0, _Util.compare)(array[m][0], a) > 0) {
          l = l;
          r = m;
          continue go;
        } else {
          l = m + 1;
          r = r;
          continue go;
        }
      } else {
        return l - 1 | 0;
      }
    }
  };

  return go(0, array.length) | 0;
}

function TimelineModule$$$empty() {
  return [];
}

function TimelineModule$$$nextArrival(_arg1) {
  const array$$1 = _arg1;

  if ((0, _Util.equals)(array$$1.length, 0)) {
    return null;
  } else {
    return array$$1[0][0];
  }
}

function TimelineModule$$$add(time, task, _arg1$$1) {
  var v, v$$1;
  const array$$2 = _arg1$$1;
  const i = TimelineModule$$$findAppendPosition(time, array$$2) | 0;

  if (i === -1) {
    v = [time, task], array$$2.splice(0, 0, v);
  } else {
    const patternInput = array$$2[i];

    if ((0, _Util.equals)(patternInput[0], time)) {
      array$$2[i] = [patternInput[0], (0, _task.append)(patternInput[1], task)];
    } else {
      v$$1 = [time, task], array$$2.splice(i + 1, 0, v$$1);
    }
  }
}

function TimelineModule$$$removeTasks(time$$1, _arg1$$2) {
  const array$$3 = _arg1$$2;
  return (0, _task.appendArray)((0, _Array.ofSeq)((0, _Seq.map)(function mapping(tuple) {
    return tuple[1];
  }, array$$3.splice(0, TimelineModule$$$findAppendPosition(time$$1, array$$3) + 1)), Array));
}

function return$0027(timer, clock) {
  return [new _Types.FSharpRef(null), timer, clock, TimelineModule$$$empty()];
}

function scheduleNextRun(scheduler) {
  const timeline = scheduler[3];
  const ref = scheduler[0];
  const matchValue = [TimelineModule$$$nextArrival(timeline), ref.contents];

  if (matchValue[0] == null) {
    if (matchValue[1] != null) {
      if (!false) {
        debugger;
      }
    }
  } else if (matchValue[1] != null) {
    const nextArrival$$1 = matchValue[0];

    if ((0, _Util.compare)(nextArrival$$1, matchValue[1][0]) >= 0) {} else {
      const f = matchValue[1][1];
      f();
      ref.contents = [nextArrival$$1, setNextRun(nextArrival$$1, scheduler)];
    }
  } else {
    const nextArrival = matchValue[0];
    ref.contents = [nextArrival, setNextRun(nextArrival, scheduler)];
  }
}

function setNextRun(nextArrival$$2, scheduler$$1) {
  const timer$$1 = scheduler$$1[1];
  const timeline$$1 = scheduler$$1[3];
  const ref$$1 = scheduler$$1[0];
  const clock$$1 = scheduler$$1[2];
  const task$$1 = (0, _task.return$0027)(function (_arg1$$4) {
    if (_arg1$$4.tag === 1) {
      const err = _arg1$$4.fields[1];

      if (!false) {
        debugger;
      }

      throw err;
    } else {
      const s$$3 = _arg1$$4.fields[0][1];
      ref$$1.contents = null;
      const now = (0, _time.PointModule$$$return$0027)((0, _time.ClockModule$$$localTime)(clock$$1));
      (0, _task.run)(TimelineModule$$$removeTasks(now, timeline$$1));
      scheduleNextRun(scheduler$$1);
      return null;
    }
  });
  const now$$1 = (0, _time.PointModule$$$return$0027)((0, _time.ClockModule$$$localTime)(clock$$1));
  const delay = (0, _time.DelayModule$$$fromTo)(now$$1, nextArrival$$2);
  return (0, _timer.setTimer)(task$$1, delay, timer$$1);
}

function add(point, period, task$$2, cancelRef, scheduler$$2) {
  const timeline$$2 = scheduler$$2[3];
  let task$$3;

  if (period == null) {
    task$$3 = task$$2;
  } else {
    const period$$1 = period;
    task$$3 = (0, _task.append)(task$$2, (0, _task.return$0027)(function (_arg1$$5) {
      if (_arg1$$5.tag === 1) {
        if (!false) {
          debugger;
        }

        return null;
      } else {
        const time$$2 = _arg1$$5.fields[0][0];
        const point$$1 = (0, _time.PointModule$$$add)(time$$2, period$$1);
        add(point$$1, period$$1, task$$2, cancelRef, scheduler$$2);
        return null;
      }
    }));
  }

  const patternInput$$1 = (0, _task.Cancelable$$$extend)(task$$3);
  const task$$5 = (0, _task.map)(function f$$3() {
    return point;
  }, patternInput$$1[0]);
  const f$$4 = cancelRef.contents;
  f$$4();
  cancelRef.contents = patternInput$$1[1];
  TimelineModule$$$add(point, task$$5, timeline$$2);
}

function schedule(delay$$1, period$$2, task$$6, scheduler$$3) {
  const clock$$2 = scheduler$$3[2];
  const now$$2 = (0, _time.ClockModule$$$localTime)(clock$$2);
  let now$$3;

  if (delay$$1 != null) {
    const delay$$2 = delay$$1;
    now$$3 = (0, _time.add)(now$$2, delay$$2);
  } else {
    now$$3 = now$$2;
  }

  const cancelRef$$1 = new _Types.FSharpRef(_disposable.empty);
  add((0, _time.PointModule$$$return$0027)(now$$3), period$$2, task$$6, cancelRef$$1, scheduler$$3);
  scheduleNextRun(scheduler$$3);
  return (0, _disposable.return$0027)(function () {
    const f$$6 = cancelRef$$1.contents;
    f$$6();
  });
}