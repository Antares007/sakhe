import { Time$002EDelayModule$$$fromTo as Time$0024002EDelayModule$0024$0024$0024fromTo, Time$$$delay as Time$0024$0024$0024delay, Clock$$$now as Clock$0024$0024$0024now } from "./clock";
import { return$0027 as return$00240027, map, Cancelable$$$extend as Cancelable$0024$0024$0024extend } from "./task";
import { Timeline$$$nextArrival as Timeline$0024$0024$0024nextArrival, Timeline$$$add as Timeline$0024$0024$0024add } from "./timeline";
import { compare } from "../fable-core.2.0.0-beta-003/Util";
import { dispose } from "./disposable";
import { setTimer } from "./timer";
export function schedule(delay, period, task, _arg1) {
  const now = Clock$0024$0024$0024now(_arg1[2]);
  const taskTime = Time$0024$0024$0024delay(now, delay);
  const patternInput = Cancelable$0024$0024$0024extend(task);
  const task$$2 = map(function () {
    return taskTime;
  }, patternInput[0]);
  const cancel$$1 = Timeline$0024$0024$0024add(taskTime, task$$2, _arg1[3]);
  const nextTaskTime = Timeline$0024$0024$0024nextArrival(_arg1[3]);
  const delay$$1 = Time$0024002EDelayModule$0024$0024$0024fromTo(Clock$0024$0024$0024now(_arg1[2]), nextTaskTime);
  const matchValue = _arg1[0].contents;

  if (matchValue != null) {
    const scheduledNextTaskTime = matchValue[0];
    const d = matchValue[1];

    if (compare(nextTaskTime, scheduledNextTaskTime) >= 0) {
      dispose(d);
      const task$$4 = return$00240027(function (_arg3) {
        if (_arg3.tag === 1) {
          return null;
        } else {
          const s$$1 = _arg3.fields[0][1];
          return null;
        }
      });
      _arg1[0].contents = [nextTaskTime, setTimer(task$$4, delay$$1, _arg1[1])];
    }
  } else {
    const task$$3 = return$00240027(function (_arg2) {
      if (_arg2.tag === 1) {
        return null;
      } else {
        const s = _arg2.fields[0][1];
        return null;
      }
    });
    _arg1[0].contents = [nextTaskTime, setTimer(task$$3, delay$$1, _arg1[1])];
  }

  return cancel$$1;
}