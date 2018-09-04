import { equals } from "../fable-core.2.0.0-beta-003/Util";
import { declare } from "../fable-core.2.0.0-beta-003/Types";
export function findAppendPosition(time, a) {
  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if (a[m][1] > time) {
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

  return go(0, a.length) | 0;
}
export function insertByTime(ttime, t, timeslots) {
  var ts, i, ts$$1;
  const stime = Math.floor(ttime);
  const matchValue = findAppendPosition(stime, timeslots) | 0;

  if (matchValue === -1) {
    timeslots.splice(0, 0, (ts = [], (ts.push([t, ttime]), [ts, stime])));
  } else if (i = matchValue | 0, timeslots[i][1] !== stime) {
    const i$$1 = matchValue | 0;
    timeslots.splice(i$$1 + 1, 0, (ts$$1 = [], (ts$$1.push([t, ttime]), [ts$$1, stime])));
  } else {
    const i$$2 = matchValue | 0;
    const ts$$2 = timeslots[i$$2][0];
    ts$$2.splice(findAppendPosition(ttime, ts$$2) + 1, 0, [t, ttime]);
  }
}
export function removeByTime(ttime$$3, t$$3, timeslots$$1) {
  const stime$$3 = Math.floor(ttime$$3);
  const i$$3 = findAppendPosition(stime$$3, timeslots$$1) | 0;

  if (i$$3 < 0) {
    return false;
  } else {
    const patternInput = timeslots$$1[i$$3];

    if (patternInput[1] !== stime$$3) {
      return false;
    } else {
      const go$$1 = function go$$1(i$$4) {
        go$$1: while (true) {
          if (i$$4 < 0) {
            return null;
          } else {
            const patternInput$$1 = patternInput[0][i$$4];

            if (patternInput$$1[1] !== ttime$$3) {
              return null;
            } else if (equals(patternInput$$1[0], t$$3)) {
              return i$$4;
            } else {
              i$$4 = i$$4 - 1;
              continue go$$1;
            }
          }
        }
      };

      const matchValue$$1 = go$$1(findAppendPosition(ttime$$3, patternInput[0]));

      if (matchValue$$1 == null) {
        return false;
      } else {
        const i$$5 = matchValue$$1 | 0;
        patternInput[0].splice(i$$5, 1);
        return true;
      }
    }
  }
}
export function runReadyTasks(runTask, tasks, timeslots$$2) {
  throw new Error("na");
}
export const Timeline = declare(function Timeline() {
  const $this$$1 = this;
  $this$$1.timeSlots = [];
});
export function Timeline$$$$002Ector() {
  return this != null ? Timeline.call(this) : new Timeline();
}
export function Timeline$$nextArrival(this$) {
  if (this$.timeSlots.length === 0) {
    return Number.POSITIVE_INFINITY;
  } else {
    return this$.timeSlots[0][1];
  }
}
export function Timeline$$isEmpty(__) {
  return __.timeSlots.length === 0;
}
export function Timeline$$add$$Z385C3EDD(__$$1, st) {
  insertByTime(st.time, st, __$$1.timeSlots);
}
export function Timeline$$remove$$Z385C3EDD(__$$2, st$$1) {
  return removeByTime(st$$1.time, st$$1, __$$2.timeSlots);
}
export function Timeline$$runTasks(__$$3, time$$1, runTask$$1) {
  const matchValue$$2 = findAppendPosition(Math.floor(time$$1), __$$3.timeSlots) | 0;

  if (matchValue$$2 === -1) {} else {
    const i$$6 = matchValue$$2 | 0;
    const slots = __$$3.timeSlots;
    __$$3.timeSlots = slots.slice(i$$6 + 1);

    for (let j = 0; j <= i$$6; j++) {
      runReadyTasks(runTask$$1, slots[j][0], __$$3.timeSlots);
    }
  }
}