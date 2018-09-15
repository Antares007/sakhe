"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.schedule = schedule;

var _Util = require("../fable-core.2.0.0-beta-004/Util");

var _task = require("./task");

var _Seq = require("../fable-core.2.0.0-beta-004/Seq");

var _Array = require("../fable-core.2.0.0-beta-004/Array");

var _clock = require("./clock");

var _Types = require("../fable-core.2.0.0-beta-004/Types");

var _timer = require("./timer");

var _time = require("./time");

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

function return$0027(originClock) {
  const localClock = (0, _clock.localClock)(originClock);
  return [new _Types.FSharpRef(null), _timer.defaultTimer, localClock, TimelineModule$$$empty(), null];
}

function map(f, _arg1$$3) {
  return [_arg1$$3[0], _arg1$$3[1], _arg1$$3[2], _arg1$$3[3], f(_arg1$$3[4])];
}

function scheduleNextRun(scheduler, nextRun) {
  const netRunRef = scheduler[0];

  if (nextRun != null) {
    const nextRun$$1 = nextRun;
    const matchValue = netRunRef.contents;

    if (matchValue != null) {
      const nextRun$$2 = matchValue[0];
      const cancel = matchValue[1];

      if ((0, _Util.compare)(nextRun$$2, nextRun$$2) <= 0) {} else {
        const f$$1 = cancel;
        f$$1();
        setTimer(scheduler, nextRun$$2);
      }
    } else {
      setTimer(scheduler, nextRun$$1);
    }
  }
}

function setTimer(scheduler$$1, point) {
  const timer$$1 = scheduler$$1[1];
  const timeline$$1 = scheduler$$1[3];
  const netRunRef$$1 = scheduler$$1[0];
  const clock = scheduler$$1[2];
  const now = (0, _clock.localTime)(clock);
  const delay = (0, _time.DelayModule$$$fromTo)(now, point);
  const task$$1 = (0, _task.return$0027)(function (_arg1$$5) {
    if (_arg1$$5.tag === 1) {
      const err = _arg1$$5.fields[1];

      if (!false) {
        debugger;
      }

      throw err;
    } else {
      const s$$3 = _arg1$$5.fields[0][1];
      netRunRef$$1.contents = null;
      const now$$1 = (0, _clock.localTime)(clock);

      (function (arg10$0040) {
        return (0, _task.run)(TimelineModule$$$removeTasks(now$$1, timeline$$1), arg10$0040);
      });

      const point$$1 = TimelineModule$$$nextArrival(timeline$$1);
      scheduleNextRun(scheduler$$1, point$$1);
      return null;
    }
  });
  netRunRef$$1.contents = [point, (0, _timer.setTimer)(task$$1, delay, timer$$1)];
}

function add(localNow, relNow, period, task$$2, cancelRef, scheduler$$2) {
  const timeline$$2 = scheduler$$2[3];
  let task$$3;

  if (period == null) {
    task$$3 = task$$2;
  } else {
    const period$$1 = period;
    task$$3 = (0, _task.append)(task$$2, (0, _task.return$0027)(function (_arg1$$6) {
      if (_arg1$$6.tag === 1) {
        if (!false) {
          debugger;
        }

        return null;
      } else {
        const localNow$$1 = (0, _time.add)(period$$1, localNow);
        const relNow$$1 = (0, _time.add)(period$$1, relNow);
        add(localNow$$1, relNow$$1, period$$1, task$$2, cancelRef, scheduler$$2);
        return null;
      }
    }));
  }

  const patternInput$$1 = (0, _task.Cancelable$$$extend)(task$$3);
  const task$$5 = (0, _task.contraMap)(function f$$4() {
    return relNow;
  }, patternInput$$1[0]);
  const f$$5 = cancelRef.contents;
  f$$5();
  cancelRef.contents = patternInput$$1[1];
  TimelineModule$$$add(localNow, task$$5, timeline$$2);
}

function localTimes(_arg1$$8) {
  if (_arg1$$8[4] != null) {
    const relClock$$1 = _arg1$$8[4];
    const localNow$$2 = (0, _clock.localTime)(_arg1$$8[2]);
    const relNow$$2 = (0, _clock.localTime)(relClock$$1);
    return [localNow$$2, relNow$$2];
  } else {
    const t = (0, _clock.localTime)(_arg1$$8[2]);
    return [t, t];
  }
}

function schedule(delay$$1, period$$2, task$$6, scheduler$$3) {
  const netRunRef$$2 = scheduler$$3[0];
  const localClock$$3 = scheduler$$3[2];
  const patternInput$$2 = localTimes(scheduler$$3);
  let patternInput$$3;

  if (delay$$1 != null) {
    const delay$$2 = delay$$1;
    patternInput$$3 = [(0, _time.add)(delay$$2, patternInput$$2[0]), (0, _time.add)(delay$$2, patternInput$$2[1])];
  } else {
    patternInput$$3 = [patternInput$$2[0], patternInput$$2[0]];
  }

  const cancelRef$$1 = new _Types.FSharpRef(_disposable.empty);
  add(patternInput$$3[0], patternInput$$3[1], period$$2, task$$6, cancelRef$$1, scheduler$$3);
  scheduleNextRun(scheduler$$3, patternInput$$3[0]);
  return (0, _disposable.return$0027)(function () {
    const f$$7 = cancelRef$$1.contents;
    f$$7();
  });
}