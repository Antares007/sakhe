import { now } from "./clock";
import { DelayModule$$$fromTo as DelayModule$0024$0024$0024fromTo, add } from "./time";
import { return$0027 as return$00240027, map, Cancelable$$$extend as Cancelable$0024$0024$0024extend } from "./task";
import { Timeline$$$nextArrival as Timeline$0024$0024$0024nextArrival, Timeline$$$add as Timeline$0024$0024$0024add } from "./timeline";
import { dispose, append } from "./disposable";
import { setTimer } from "./timer";
import { compare } from "../fable-core.2.0.0-beta-003/Util";
export function schedule(delay, period, task, _arg1) {
  const taskTime = add(now(_arg1[2]), delay);
  const patternInput = Cancelable$0024$0024$0024extend(task);
  const task$$2 = map(function () {
    return taskTime;
  }, patternInput[0]);
  const cancel$$1 = append(patternInput[1], Timeline$0024$0024$0024add(taskTime, task$$2, _arg1[3]));
  const nextTaskTime = Timeline$0024$0024$0024nextArrival(_arg1[3]);

  const setTaskRun = function setTaskRun() {
    const delay$$1 = DelayModule$0024$0024$0024fromTo(now(_arg1[2]), nextTaskTime);
    const task$$3 = return$00240027(function (_arg2) {
      if (_arg2.tag === 1) {
        return null;
      } else {
        const s = _arg2.fields[0][1];
        return null;
      }
    });
    return setTimer(task$$3, delay$$1, _arg1[1]);
  };

  const matchValue = _arg1[0].contents;

  if (matchValue != null) {
    const scheduledTaskRun = matchValue[1];
    const scheduledNextTaskTime = matchValue[0];

    if (compare(nextTaskTime, scheduledNextTaskTime) >= 0) {
      dispose(scheduledTaskRun);
      _arg1[0].contents = [nextTaskTime, setTaskRun()];
    }
  } else {
    _arg1[0].contents = [nextTaskTime, setTaskRun()];
  }

  return cancel$$1;
}