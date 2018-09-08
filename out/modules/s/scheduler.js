import { FSharpRef } from "../fable-core.2.0.0-beta-003/Types";
import { add as add$$2, removeTasks, nextArrival as nextArrival$$2, isEmpty, empty } from "./timeline";
import { empty as empty$$1, append as append$$1, return$0027 as return$00240027$$1, dispose } from "./disposable";
import { compare } from "../fable-core.2.0.0-beta-003/Util";
import { now as now$$1 } from "./clock";
import { map, Cancelable$$$extend as Cancelable$0024$0024$0024extend, append, return$0027 as return$00240027, run } from "./task";
import { add as add$$1, DelayModule$$$fromTo as DelayModule$0024$0024$0024fromTo } from "./time";
import { setTimer } from "./timer";
export function return$0027(timer, clock) {
  return [new FSharpRef(null), timer, clock, empty()];
}

function scheduleNextRun(scheduler) {
  var scheduledNextArrival, nextRun;
  const timeline = scheduler[3];
  const ref = scheduler[0];

  if (isEmpty(timeline)) {} else {
    const nextArrival = nextArrival$$2(timeline);
    const matchValue = ref.contents;
    var $target$$1, nextRun$$1, scheduledNextArrival$$1;

    if (matchValue != null) {
      if (scheduledNextArrival = matchValue[0], (nextRun = matchValue[1], compare(scheduledNextArrival, nextArrival) < 0)) {
        $target$$1 = 0;
        nextRun$$1 = matchValue[1];
        scheduledNextArrival$$1 = matchValue[0];
      } else {
        $target$$1 = 1;
      }
    } else {
      $target$$1 = 1;
    }

    switch ($target$$1) {
      case 0:
        {
          dispose(nextRun$$1);
          ref.contents = [nextArrival, setNextRun(nextArrival, scheduler)];
          break;
        }

      case 1:
        {
          if (matchValue != null) {} else {
            ref.contents = [nextArrival, setNextRun(nextArrival, scheduler)];
          }

          break;
        }
    }
  }
}

function setNextRun(nextArrival$$1, scheduler$$1) {
  const timer$$1 = scheduler$$1[1];
  const timeline$$1 = scheduler$$1[3];
  const clock$$1 = scheduler$$1[2];
  const task = return$00240027(function (_arg1) {
    if (_arg1.tag === 1) {
      const err = _arg1.fields[1];
      throw err;
    } else {
      const s = _arg1.fields[0][1];
      run(removeTasks(now$$1(clock$$1), timeline$$1));
      scheduleNextRun(scheduler$$1);
      return null;
    }
  });
  const delay = DelayModule$0024$0024$0024fromTo(now$$1(clock$$1), nextArrival$$1);
  return setTimer(task, delay, timer$$1);
}

function reschedule(scheduler$$2) {
  const timeline$$2 = scheduler$$2[3];
  const ref$$1 = scheduler$$2[0];

  if (isEmpty(timeline$$2)) {
    const matchValue$$1 = ref$$1.contents;

    if (matchValue$$1 != null) {
      const d = matchValue$$1[1];
      dispose(d);
      ref$$1.contents = null;
    }
  } else {
    scheduleNextRun(scheduler$$2);
  }
}

function add(time, period, task$$1, taskD, removeD, scheduler$$3) {
  const timeline$$3 = scheduler$$3[3];
  let task$$2;

  if (period != null) {
    const period$$1 = period;
    const readd = return$00240027(function (_arg1$$1) {
      if (_arg1$$1.tag === 1) {
        return null;
      } else {
        const time$$1 = _arg1$$1.fields[0][0];
        const time$$2 = add$$1(time$$1, period$$1);
        add(time$$2, period$$1, task$$1, taskD, removeD, scheduler$$3);
        return null;
      }
    });
    task$$2 = append(task$$1, readd);
  } else {
    task$$2 = task$$1;
  }

  const patternInput = Cancelable$0024$0024$0024extend(task$$2);
  const task$$4 = map(function f$$2() {
    return time;
  }, patternInput[0]);
  dispose(taskD.contents);
  taskD.contents = patternInput[1];
  removeD.contents = append$$1(add$$2(time, task$$4, timeline$$3), return$00240027$$1(function () {
    reschedule(scheduler$$3);
  }));
}

export function schedule(delay$$1, period$$2, task$$5, scheduler$$4) {
  const clock$$2 = scheduler$$4[2];
  const now = now$$1(clock$$2);
  let time$$3;

  if (delay$$1 != null) {
    const delay$$2 = delay$$1;
    time$$3 = add$$1(now, delay$$2);
  } else {
    time$$3 = now;
  }

  const removeD$$1 = new FSharpRef(empty$$1);
  const taskD$$1 = new FSharpRef(empty$$1);
  add(time$$3, period$$2, task$$5, taskD$$1, removeD$$1, scheduler$$4);
  scheduleNextRun(scheduler$$4);
  return return$00240027$$1(function () {
    dispose(taskD$$1.contents);
    dispose(removeD$$1.contents);
  });
}