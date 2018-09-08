import { equals, compare } from "../fable-core.2.0.0-beta-003/Util";
import { fold, map as map$$4 } from "../fable-core.2.0.0-beta-003/Seq";
import { ofSeq } from "../fable-core.2.0.0-beta-003/Array";
import { FSharpRef } from "../fable-core.2.0.0-beta-003/Types";
import { return$0027 as return$00240027 } from "./time";
import { return$0027 as return$00240027$$1 } from "./disposable";
import { empty as empty$$1, append } from "./task";
export function SortedArray$$$empty() {
  return [];
}
export function SortedArray$$$init(a) {
  const arr = [];
  arr.push(a);
  return arr;
}
export function SortedArray$$$findAppendPosition(a$$1, _arg1) {
  const array = _arg1;

  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if (compare(array[m], a$$1) > 0) {
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
export function SortedArray$$$readIndex(i, _arg1$$1) {
  const arr$$1 = _arg1$$1;

  if (!(0 <= i ? i < arr$$1.length : false)) {
    debugger;
  }

  return arr$$1[i];
}
export function SortedArray$$$splice(start, end, _arg1$$2) {
  const array$$1 = _arg1$$2;

  if (!(start <= end)) {
    debugger;
  }

  if (!(0 <= start)) {
    debugger;
  }

  if (!(end <= array$$1.length - start)) {
    debugger;
  }

  return array$$1.splice(start, end);
}
export function SortedArray$$$append(a$$2, _arg1$$3) {
  const arr$$2 = _arg1$$3;

  if (!(0 === arr$$2.length ? true : compare(arr$$2[arr$$2.length - 1], a$$2) <= 0)) {
    debugger;
  }

  arr$$2.push(a$$2);
}
export function SortedArray$$$insertAfter(i$$1, a$$3, _arg1$$4) {
  const arr$$3 = _arg1$$4;

  if (!(-1 <= i$$1 ? i$$1 < arr$$3.length : false)) {
    debugger;
  }

  if (!(i$$1 === -1 ? true : compare(arr$$3[i$$1], a$$3) <= 0)) {
    debugger;
  }

  if (!(i$$1 === arr$$3.length - 1 ? true : compare(arr$$3[i$$1 + 1], a$$3) > 0)) {
    debugger;
  }

  arr$$3.splice(i$$1 + 1, 0, a$$3);
}
export function SortedArray$$$length(_arg1$$5) {
  const array$$2 = _arg1$$5;
  return array$$2.length | 0;
}
export function Slot$$$empty() {
  return [SortedArray$$$empty(), new Map([])];
}
export function Slot$$$length(_arg1$$6) {
  return SortedArray$$$length(_arg1$$6[0]);
}
export function Slot$$$findAppendPosition(a$$4, _arg1$$7) {
  return SortedArray$$$findAppendPosition(a$$4, _arg1$$7[0]);
}
export function Slot$$$insertAfter(i$$2, a$$5, b, _arg1$$8) {
  SortedArray$$$insertAfter(i$$2, a$$5, _arg1$$8[0]);

  _arg1$$8[1].set(a$$5, b);
}
export function Slot$$$readIndex(i$$3, _arg1$$9) {
  const key = SortedArray$$$readIndex(i$$3, _arg1$$9[0]);
  return [key, _arg1$$9[1].get(key)];
}
export function Slot$$$append(id, task, _arg1$$10) {
  SortedArray$$$append(id, _arg1$$10[0]);

  _arg1$$10[1].set(id, task);
}
export function Slot$$$splice(start$$1, end$$1, _arg1$$11) {
  const keys = SortedArray$$$splice(start$$1, end$$1, _arg1$$11[0]);
  return ofSeq(map$$4(function mapping(key$$1) {
    const item = _arg1$$11[1].get(key$$1);

    _arg1$$11[1].delete(key$$1);

    return [key$$1, item];
  }, keys), Array);
}
export function empty() {
  return [Slot$$$empty(), new FSharpRef(0)];
}
export function isEmpty(_arg1$$12) {
  return Slot$$$length(_arg1$$12[0]) === 0;
}
export function nextArrival(_arg1$$13) {
  if (Slot$$$length(_arg1$$13[0]) === 0) {
    return return$00240027(Number.POSITIVE_INFINITY);
  } else {
    return Slot$$$readIndex(0, _arg1$$13[0])[0];
  }
}
export function add(time, task$$1, _arg1$$14) {
  const id$$1 = _arg1$$14[1].contents | 0;
  _arg1$$14[1].contents = id$$1 + 1;

  const insertTask = function insertTask(taskSlot) {
    Slot$$$append(id$$1, task$$1, taskSlot);
    return return$00240027$$1(function () {
      Slot$$$splice(Slot$$$findAppendPosition(id$$1, taskSlot), 1, taskSlot);
    });
  };

  const insertTime = function insertTime(i$$4) {
    const taskSlot$$1 = Slot$$$empty();
    Slot$$$insertAfter(i$$4, time, taskSlot$$1, _arg1$$14[0]);
    return taskSlot$$1;
  };

  const i$$5 = Slot$$$findAppendPosition(time, _arg1$$14[0]) | 0;

  if (i$$5 === -1) {
    return insertTask(insertTime(i$$5));
  } else {
    const patternInput = Slot$$$readIndex(i$$5, _arg1$$14[0]);

    if (equals(patternInput[0], time)) {
      return insertTask(patternInput[1]);
    } else {
      return insertTask(insertTime(i$$5));
    }
  }
}
export function removeTasks(time$$1, _arg1$$15) {
  return fold(function folder(task$$2, tupledArg) {
    return append(task$$2, fold(function (task$$3, id$$2) {
      return append(task$$3, tupledArg[1][1].get(id$$2));
    }, empty$$1(), tupledArg[1][0]));
  }, empty$$1(), Slot$$$splice(0, Slot$$$findAppendPosition(time$$1, _arg1$$15[0]) + 1, _arg1$$15[0]));
}