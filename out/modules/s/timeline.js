import { equals, compare } from "../fable-core.2.0.0-beta-003/Util";
import { empty as empty$$1, append } from "./task";
import { fold } from "../fable-core.2.0.0-beta-003/Seq";

function findAppendPosition(a, array) {
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

export function empty() {
  return [];
}
export function nextArrival(_arg1) {
  const array$$1 = _arg1;

  if (array$$1.length === 0) {
    return null;
  } else {
    return array$$1[0][0];
  }
}
export function add(time, task, _arg1$$1) {
  const array$$2 = _arg1$$1;
  const i = findAppendPosition(time, array$$2) | 0;

  if (i === -1) {
    array$$2.splice(0, 0, [time, task]);
  } else {
    const patternInput = array$$2[i];

    if (equals(patternInput[0], time)) {
      array$$2[i] = [patternInput[0], append(patternInput[1], task)];
    } else {
      array$$2.splice(i + 1, 0, [time, task]);
    }
  }
}
export function removeTasks(time$$1, _arg1$$2) {
  const array$$3 = _arg1$$2;
  return fold(function folder(acc, tupledArg) {
    return append(acc, tupledArg[1]);
  }, empty$$1(), array$$3.splice(0, findAppendPosition(time$$1, array$$3) + 1));
}