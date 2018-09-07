import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { compare } from "../fable-core.2.0.0-beta-003/Util";
import { append } from "./task";
export const Timeline$002ET = declare(function Timeline$002ET(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);

function Timeline$$$findAppendPosition(time, a) {
  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if (compare(a[m][0], time) > 0) {
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

export function Timeline$$$empty() {
  return new Timeline$002ET(0, "Timeline", []);
}
export function Timeline$$$nextArrival(_arg1) {
  const timeline = _arg1.fields[0];

  if (timeline.length === 0) {
    const f = Number.POSITIVE_INFINITY;

    if (!(f >= 0)) {
      debugger;
    }

    return Math.floor(f);
  } else {
    return timeline[0][0];
  }
}
export function Timeline$$$add(time$$1, task, _arg1$$1) {
  const timeline$$1 = _arg1$$1.fields[0];
  const i = Timeline$$$findAppendPosition(time$$1, timeline$$1) | 0;

  if (i === -1) {
    timeline$$1.splice(0, 0, [time$$1, task]);
  } else {
    const patternInput = timeline$$1[i];

    if (compare(patternInput[0], time$$1) < 0) {
      timeline$$1[i] = [time$$1, append(patternInput[1], task)];
    } else {
      timeline$$1.splice(i + 1, 0, [time$$1, task]);
    }
  }
}
export function Timeline$$$removeTasks(time$$2, _arg1$$2) {
  const timeline$$2 = _arg1$$2.fields[0];
  const tasks = timeline$$2.splice(0, Timeline$$$findAppendPosition(time$$2, timeline$$2) + 1);
  const length = tasks.length | 0;

  if (length === 0) {
    return null;
  } else {
    const patternInput$$1 = tasks[0];

    if (length === 1) {
      return patternInput$$1[1];
    } else {
      const go$$1 = function go$$1(i$$1, acc) {
        go$$1: while (true) {
          if (i$$1 >= length) {
            return acc;
          } else {
            const $var$$1 = i$$1 + 1;
            acc = append(acc, timeline$$2[i$$1][1]);
            i$$1 = $var$$1;
            continue go$$1;
          }
        }
      };

      return go$$1(1, patternInput$$1[1]);
    }
  }
}