import { FSharpRef } from "../fable-core.2.0.0-beta-003/Types";
import { add as add$$2, removeTasks, nextArrival as nextArrival$$2, isEmpty, empty } from "./timeline";
import { compare } from "../fable-core.2.0.0-beta-003/Util";
import { empty as empty$$1, append as append$$1, return$0027 as return$00240027$$1, dispose } from "./disposable";
import { now as now$$1 } from "./clock";
import { map, Cancelable$$$extend as Cancelable$0024$0024$0024extend, append, return$0027 as return$00240027, run } from "./task";
import { add as add$$1, DelayModule$$$fromTo as DelayModule$0024$0024$0024fromTo } from "./time";
import { setTimer } from "./timer";
export function return$0027(timer, clock) {
  return [new FSharpRef(null), timer, clock, empty()];
}

function scheduleNextRun(scheduler) {
  const timeline = scheduler[3];
  const ref = scheduler[0];

  if (isEmpty(timeline)) {} else {
    const nextArrival = nextArrival$$2(timeline);
    const nextRunRef = ref;
    const matchValue = nextRunRef.contents;

    if (matchValue != null) {
      const scheduledNextArrival = matchValue[0];
      const nextRunD = matchValue[1];

      if (compare(nextArrival, scheduledNextArrival) >= 0) {
        dispose(nextRunD);
        nextRunRef.contents = [nextArrival, setNextRun(nextArrival, scheduler)];
      }
    } else {
      nextRunRef.contents = [nextArrival, setNextRun(nextArrival, scheduler)];
    }
  }
}

function setNextRun(nextArrival$$1, scheduler$$1) {
  const timer$$1 = scheduler$$1[1];
  const timeline$$1 = scheduler$$1[3];
  const clock$$1 = scheduler$$1[2];
  return setTimer(return$00240027(function (_arg1) {
    if (_arg1.tag === 1) {
      const err = _arg1.fields[1];
      throw err;
    } else {
      const s = _arg1.fields[0][1];
      const d = run(removeTasks(now$$1(clock$$1), timeline$$1));
      d;
      scheduleNextRun(scheduler$$1);
      return null;
    }
  }), DelayModule$0024$0024$0024fromTo(now$$1(clock$$1), nextArrival$$1), timer$$1);
}

function reschedule(scheduler$$2) {
  const timeline$$2 = scheduler$$2[3];
  const nextRunRef$$1 = scheduler$$2[0];

  if (isEmpty(timeline$$2)) {
    const nextRunRef$$2 = nextRunRef$$1;
    const matchValue$$1 = nextRunRef$$2.contents;

    if (matchValue$$1 != null) {
      const d$$1 = matchValue$$1[1];
      dispose(d$$1);
      nextRunRef$$2.contents = null;
    }
  } else {
    scheduleNextRun(scheduler$$2);
  }
}

function add(time, period, task, taskD, removeD, scheduler$$3) {
  const timeline$$3 = scheduler$$3[3];
  let task$$1;

  if (period != null) {
    const period$$1 = period;
    const readd = return$00240027(function (_arg1$$1) {
      if (_arg1$$1.tag === 1) {
        return null;
      } else {
        const time$$1 = _arg1$$1.fields[0][0];
        const time$$2 = add$$1(time$$1, period$$1);
        add(time$$2, period$$1, task, taskD, removeD, scheduler$$3);
        return null;
      }
    });
    task$$1 = append(task, readd);
  } else {
    task$$1 = task;
  }

  const patternInput = Cancelable$0024$0024$0024extend(task$$1);
  const task$$3 = map(function f$$2() {
    return time;
  }, patternInput[0]);
  dispose(taskD.contents);
  taskD.contents = patternInput[1];
  removeD.contents = append$$1(add$$2(time, task$$3, timeline$$3), return$00240027$$1(function () {
    reschedule(scheduler$$3);
  }));
}

export function schedule(delay, period$$2, task$$4, scheduler$$4) {
  const clock$$2 = scheduler$$4[2];
  const now = now$$1(clock$$2);
  const time$$3 = delay == null ? now : add$$1(now, delay);
  const removeD$$1 = new FSharpRef(empty$$1);
  const taskD$$1 = new FSharpRef(empty$$1);
  add(time$$3, period$$2, task$$4, taskD$$1, removeD$$1, scheduler$$4);
  scheduleNextRun(scheduler$$4);
  return return$00240027$$1(function () {
    dispose(taskD$$1.contents);
    dispose(removeD$$1.contents);
  });
}