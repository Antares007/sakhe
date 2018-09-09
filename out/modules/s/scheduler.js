import { FSharpRef } from "../fable-core.2.0.0-beta-004/Types";
import { add as add$$2, removeTasks, nextArrival as nextArrival$$3, empty } from "./timeline";
import { compare } from "../fable-core.2.0.0-beta-004/Util";
import { now as now$$1 } from "./clock";
import { map, Cancelable$$$extend as Cancelable$0024$0024$0024extend, append, return$0027 as return$00240027, run } from "./task";
import { add as add$$1, DelayModule$$$fromTo as DelayModule$0024$0024$0024fromTo } from "./time";
import { setTimer } from "./timer";
import { return$0027 as return$00240027$$1, empty as empty$$1 } from "./disposable";
export function return$0027(timer, clock) {
  return [new FSharpRef(null), timer, clock, empty()];
}

function scheduleNextRun(scheduler) {
  const timeline = scheduler[3];
  const ref = scheduler[0];
  const matchValue = [nextArrival$$3(timeline), ref.contents];

  if (matchValue[0] != null) {
    if (matchValue[1] != null) {
      const nextArrival$$1 = matchValue[0];

      if (compare(matchValue[1][0], nextArrival$$1) < 0) {
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
  const task = return$00240027(function (_arg1$$2) {
    if (_arg1$$2.tag === 1) {
      const err = _arg1$$2.fields[1];

      if (!false) {
        debugger;
      }

      throw err;
    } else {
      const s = _arg1$$2.fields[0][1];
      run(removeTasks(now$$1(clock$$1), timeline$$1));
      scheduleNextRun(scheduler$$1);
      return null;
    }
  });
  const delay = DelayModule$0024$0024$0024fromTo(now$$1(clock$$1), nextArrival$$2);
  return setTimer(task, delay, timer$$1);
}

function add(time, period, task$$1, cancelRef, scheduler$$2) {
  const timeline$$2 = scheduler$$2[3];
  let task$$2;

  if (period != null) {
    const period$$1 = period;
    const readd = return$00240027(function (_arg1$$3) {
      if (_arg1$$3.tag === 1) {
        if (!false) {
          debugger;
        }

        return null;
      } else {
        const time$$1 = _arg1$$3.fields[0][0];
        const time$$2 = add$$1(time$$1, period$$1);
        add(time$$2, period$$1, task$$1, cancelRef, scheduler$$2);
        return null;
      }
    });
    task$$2 = append(task$$1, readd);
  } else {
    task$$2 = task$$1;
  }

  const patternInput = Cancelable$0024$0024$0024extend(task$$2);
  const task$$4 = map(function f$$4() {
    return time;
  }, patternInput[0]);
  const f$$5 = cancelRef.contents;
  f$$5();
  cancelRef.contents = patternInput[1];
  add$$2(time, task$$4, timeline$$2);
}

export function schedule(delay$$1, period$$2, task$$5, scheduler$$3) {
  const clock$$2 = scheduler$$3[2];
  const now = now$$1(clock$$2);
  let time$$3;

  if (delay$$1 != null) {
    const delay$$2 = delay$$1;
    time$$3 = add$$1(now, delay$$2);
  } else {
    time$$3 = now;
  }

  const cancelRef$$1 = new FSharpRef(empty$$1);
  add(time$$3, period$$2, task$$5, cancelRef$$1, scheduler$$3);
  scheduleNextRun(scheduler$$3);
  return return$00240027$$1(function () {
    const f$$7 = cancelRef$$1.contents;
    f$$7();
  });
}