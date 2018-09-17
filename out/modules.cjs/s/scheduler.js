;require._modules["/s\scheduler.js"] = (function() { var __filename = "/s\scheduler.js"; var __dirname = "/s"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /s\scheduler.js  == */ var __module__ = function() { 
 import { equals, compare } from "../fable-core.2.0.0-beta-004/Util";
import { map as map$$1, Cancelable$$$extend as Cancelable$0024$0024$0024extend, return$0027 as return$00240027, run, appendArray, append } from "./task";
import { map } from "../fable-core.2.0.0-beta-004/Seq";
import { ofSeq } from "../fable-core.2.0.0-beta-004/Array";
import { FSharpRef } from "../fable-core.2.0.0-beta-004/Types";
import { now as now$$1 } from "./clock";
import { add as add$$1, DelayModule$$$fromTo as DelayModule$0024$0024$0024fromTo } from "./time";
import { setTimer } from "./timer";
import { return$0027 as return$00240027$$1, empty } from "./disposable";

function TimelineModule$$$findAppendPosition(a, array) {
  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if (compare(array[m][0], a) > 0) {
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

  if (equals(array$$1.length, 0)) {
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

    if (equals(patternInput[0], time)) {
      array$$2[i] = [patternInput[0], append(patternInput[1], task)];
    } else {
      v$$1 = [time, task], array$$2.splice(i + 1, 0, v$$1);
    }
  }
}

function TimelineModule$$$removeTasks(time$$1, _arg1$$2) {
  const array$$3 = _arg1$$2;
  return appendArray(ofSeq(map(function mapping(tuple) {
    return tuple[1];
  }, array$$3.splice(0, TimelineModule$$$findAppendPosition(time$$1, array$$3) + 1)), Array));
}

export function return$0027(timer, clock) {
  return [new FSharpRef(null), timer, clock, TimelineModule$$$empty()];
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

    if (compare(nextArrival$$1, matchValue[1][0]) >= 0) {} else {
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
  const task$$1 = return$00240027(function (_arg1$$4) {
    if (_arg1$$4.tag === 1) {
      const err = _arg1$$4.fields[1];

      if (!false) {
        debugger;
      }

      throw err;
    } else {
      const s$$3 = _arg1$$4.fields[0][1];
      ref$$1.contents = null;
      run(TimelineModule$$$removeTasks(now$$1(clock$$1), timeline$$1));
      scheduleNextRun(scheduler$$1);
      return null;
    }
  });
  const delay = DelayModule$0024$0024$0024fromTo(now$$1(clock$$1), nextArrival$$2);
  return setTimer(task$$1, delay, timer$$1);
}

function add(time$$2, period, task$$2, cancelRef, scheduler$$2) {
  const timeline$$2 = scheduler$$2[3];
  let task$$3;

  if (period == null) {
    task$$3 = task$$2;
  } else {
    const period$$1 = period;
    task$$3 = append(task$$2, return$00240027(function (_arg1$$5) {
      if (_arg1$$5.tag === 1) {
        if (!false) {
          debugger;
        }

        return null;
      } else {
        const time$$3 = _arg1$$5.fields[0][0];
        const time$$4 = add$$1(time$$3, period$$1);
        add(time$$4, period$$1, task$$2, cancelRef, scheduler$$2);
        return null;
      }
    }));
  }

  const patternInput$$1 = Cancelable$0024$0024$0024extend(task$$3);
  const task$$5 = map$$1(function f$$3() {
    return time$$2;
  }, patternInput$$1[0]);
  const f$$4 = cancelRef.contents;
  f$$4();
  cancelRef.contents = patternInput$$1[1];
  TimelineModule$$$add(time$$2, task$$5, timeline$$2);
}

export function schedule(delay$$1, period$$2, task$$6, scheduler$$3) {
  const clock$$2 = scheduler$$3[2];
  const now = now$$1(clock$$2);
  let time$$5;

  if (delay$$1 != null) {
    const delay$$2 = delay$$1;
    time$$5 = add$$1(now, delay$$2);
  } else {
    time$$5 = now;
  }

  const cancelRef$$1 = new FSharpRef(empty);
  add(time$$5, period$$2, task$$6, cancelRef$$1, scheduler$$3);
  scheduleNextRun(scheduler$$3);
  return return$00240027$$1(function () {
    const f$$6 = cancelRef$$1.contents;
    f$$6();
  });
} 
 }; /* ==  End source for module /s\scheduler.js  == */ return module; }());;