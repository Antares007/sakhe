import { declare, Record } from "../fable-core.2.0.0-beta-003/Types";
import { Timeline$$$add as Timeline$0024$0024$0024add, Timeline$$$nextArrival as Timeline$0024$0024$0024nextArrival } from "./timeline";
import { Clock$$$now as Clock$0024$0024$0024now } from "./clock";
import { map, Cancelable$$$wrap as Cancelable$0024$0024$0024wrap } from "./task";
export const SchedulerState = declare(function SchedulerState(arg1, arg2, arg3, arg4) {
  this.scheduledRun = arg1;
  this.timer = arg2;
  this.clock = arg3;
  this.timeline = arg4;
}, Record);

function scheduleNextRun(scheduler) {
  const nextArrival = Timeline$0024$0024$0024nextArrival(scheduler.timeline);
  const matchValue = scheduler.scheduledRun;

  if (matchValue == null) {} else {
    const t = matchValue[0];
    const d = matchValue[1];
  }
}

export function schedule(delay, period, task, _arg1) {
  var f, i;
  const scheduler$$1 = _arg1;
  const now = Clock$0024$0024$0024now(scheduler$$1.clock);
  let time;

  if (delay == null) {
    time = now;
  } else {
    const f$$1 = (f = now, f) + (i = delay, i);

    if (!(f$$1 >= 0)) {
      debugger;
    }

    time = Math.floor(f$$1);
  }

  const patternInput = Cancelable$0024$0024$0024wrap(task);
  const task$$2 = map(function () {
    return time;
  }, patternInput[0]);
  Timeline$0024$0024$0024add(time, task$$2, scheduler$$1.timeline);
  scheduleNextRun(scheduler$$1);
  return patternInput[1];
}