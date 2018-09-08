import { FSharpRef, declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { equals, compare } from "../fable-core.2.0.0-beta-003/Util";
import { fold, map as map$$4 } from "../fable-core.2.0.0-beta-003/Seq";
import { ofSeq } from "../fable-core.2.0.0-beta-003/Array";
import { return$0027 as return$00240027 } from "./time";
import { return$0027 as return$00240027$$1 } from "./disposable";
import { empty, append } from "./task";
export const Timeline$002ESlot$00602 = declare(function Timeline$002ESlot$00602(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Timeline$002ET = declare(function Timeline$002ET(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Timeline$002ESortedArray$$$empty() {
  return [];
}
export function Timeline$002ESortedArray$$$init(a) {
  const arr = [];
  arr.push(a);
  return arr;
}
export function Timeline$002ESortedArray$$$findAppendPosition(a$$1, _arg1) {
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
export function Timeline$002ESortedArray$$$readIndex(i, _arg1$$1) {
  const arr$$1 = _arg1$$1;

  if (!(0 <= i ? i < arr$$1.length : false)) {
    debugger;
  }

  return arr$$1[i];
}
export function Timeline$002ESortedArray$$$splice(start, end, _arg1$$2) {
  const array$$1 = _arg1$$2;

  if (!(start <= end)) {
    debugger;
  }

  if (!(0 <= start)) {
    debugger;
  }

  if (!(end <= array$$1.length)) {
    debugger;
  }

  return array$$1.slice(start, end);
}
export function Timeline$002ESortedArray$$$append(a$$2, _arg1$$3) {
  const arr$$2 = _arg1$$3;

  if (!(0 === arr$$2.length ? true : compare(arr$$2[arr$$2.length - 1], a$$2) <= 0)) {
    debugger;
  }

  arr$$2.push(a$$2);
}
export function Timeline$002ESortedArray$$$insertAfter(i$$1, a$$3, _arg1$$4) {
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
export function Timeline$002ESortedArray$$$length(_arg1$$5) {
  const array$$2 = _arg1$$5;
  return array$$2.length | 0;
}
export function Timeline$002ESlot$$$empty() {
  const tupledArg = [Timeline$002ESortedArray$$$empty(), new Map([])];
  return new Timeline$002ESlot$00602(0, "Slot", tupledArg[0], tupledArg[1]);
}
export function Timeline$002ESlot$$$length(_arg1$$6) {
  const array$$3 = _arg1$$6.fields[0];
  return Timeline$002ESortedArray$$$length(array$$3) | 0;
}
export function Timeline$002ESlot$$$findAppendPosition(a$$4, _arg1$$7) {
  const array$$4 = _arg1$$7.fields[0];
  return Timeline$002ESortedArray$$$findAppendPosition(a$$4, array$$4) | 0;
}
export function Timeline$002ESlot$$$insertAfter(i$$2, a$$5, b, _arg1$$8) {
  const map = _arg1$$8.fields[1];
  const array$$5 = _arg1$$8.fields[0];
  Timeline$002ESortedArray$$$insertAfter(i$$2, a$$5, array$$5);
  map.set(a$$5, b);
}
export function Timeline$002ESlot$$$readIndex(i$$3, _arg1$$9) {
  const map$$1 = _arg1$$9.fields[1];
  const arr$$4 = _arg1$$9.fields[0];
  const key = Timeline$002ESortedArray$$$readIndex(i$$3, arr$$4);
  return [key, map$$1.get(key)];
}
export function Timeline$002ESlot$$$append(id, task, _arg1$$10) {
  const taskMap = _arg1$$10.fields[1];
  const ids = _arg1$$10.fields[0];
  Timeline$002ESortedArray$$$append(id, ids);
  taskMap.set(id, task);
}
export function Timeline$002ESlot$$$splice(start$$1, end$$1, _arg1$$11) {
  const map$$2 = _arg1$$11.fields[1];
  const array$$6 = _arg1$$11.fields[0];
  const keys = Timeline$002ESortedArray$$$splice(start$$1, end$$1, array$$6);
  return ofSeq(map$$4(function mapping(key$$1) {
    const item = map$$2.get(key$$1);
    map$$2.delete(key$$1);
    return [key$$1, item];
  }, keys), Array);
}
export function Timeline$$$empty() {
  const tupledArg$$1 = [Timeline$002ESlot$$$empty(), new FSharpRef(0)];
  return new Timeline$002ET(0, "Timeline", tupledArg$$1[0], tupledArg$$1[1]);
}
export function Timeline$$$isEmpty(_arg1$$12) {
  const slot = _arg1$$12.fields[0];
  return Timeline$002ESlot$$$length(slot) === 0;
}
export function Timeline$$$nextArrival(_arg1$$13) {
  const slot$$1 = _arg1$$13.fields[0];

  if (Timeline$002ESlot$$$length(slot$$1) === 0) {
    return return$00240027(Number.POSITIVE_INFINITY);
  } else {
    return Timeline$002ESlot$$$readIndex(0, slot$$1)[0];
  }
}
export function Timeline$$$add(time, task$$1, _arg1$$14) {
  const timeSlot = _arg1$$14.fields[0];
  const idref = _arg1$$14.fields[1];
  const id$$1 = idref.contents | 0;
  idref.contents = id$$1 + 1;

  const insertTask = function insertTask(taskSlot) {
    Timeline$002ESlot$$$append(id$$1, task$$1, taskSlot);
    return return$00240027$$1(function () {
      Timeline$002ESlot$$$splice(Timeline$002ESlot$$$findAppendPosition(id$$1, taskSlot), 1, taskSlot);
    });
  };

  const insertTime = function insertTime(i$$4) {
    const taskSlot$$1 = Timeline$002ESlot$$$empty();
    Timeline$002ESlot$$$insertAfter(i$$4, time, taskSlot$$1, timeSlot);
    return taskSlot$$1;
  };

  const i$$5 = Timeline$002ESlot$$$findAppendPosition(time, timeSlot) | 0;

  if (i$$5 === -1) {
    return insertTask(insertTime(i$$5));
  } else {
    const patternInput = Timeline$002ESlot$$$readIndex(i$$5, timeSlot);

    if (equals(patternInput[0], time)) {
      return insertTask(patternInput[1]);
    } else {
      return insertTask(insertTime(i$$5));
    }
  }
}
export function Timeline$$$removeTasks(time$$1, _arg1$$15) {
  const slot$$2 = _arg1$$15.fields[0];
  return fold(function folder(task$$2, tupledArg$$2) {
    const map$$3 = tupledArg$$2[1].fields[1];
    const ids$$1 = tupledArg$$2[1].fields[0];
    return append(task$$2, fold(function (task$$3, id$$2) {
      return append(task$$3, map$$3.get(id$$2));
    }, empty(), ids$$1));
  }, empty(), Timeline$002ESlot$$$splice(0, Timeline$002ESlot$$$findAppendPosition(time$$1, slot$$2) + 1, slot$$2));
}