import { FSharpRef, declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { equals, compare } from "../fable-core.2.0.0-beta-003/Util";
export const Timeline$002EIdRef = declare(function Timeline$002EIdRef(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Timeline$002ESortedArray$00601 = declare(function Timeline$002ESortedArray$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Timeline$002ESlot$00602 = declare(function Timeline$002ESlot$00602(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Timeline$002ET = declare(function Timeline$002ET(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Timeline$002ESortedArray$$$empty() {
  return new Timeline$002ESortedArray$00601(0, "SortedArray", []);
}
export function Timeline$002ESortedArray$$$init(a) {
  const arr = [];
  arr.push(a);
  return new Timeline$002ESortedArray$00601(0, "SortedArray", arr);
}
export function Timeline$$$empty() {
  var tupledArg$$1;
  const tupledArg = [(tupledArg$$1 = [Timeline$002ESortedArray$$$empty(), new Map([])], new Timeline$002ESlot$00602(0, "Slot", tupledArg$$1[0], tupledArg$$1[1])), new FSharpRef(0)];
  return new Timeline$002ET(0, "Timeline", tupledArg[0], tupledArg[1]);
}
export function Timeline$$$nextArrival(_arg1) {
  var array, map, arr$$1, b, arr$$2;
  const slot = _arg1.fields[0];

  if ((array = slot.fields[0].fields[0], array.length) === 0) {
    const f = Number.POSITIVE_INFINITY;

    if (!(f >= 0)) {
      debugger;
    }

    return Math.floor(f);
  } else {
    return (map = slot.fields[1], (arr$$1 = slot.fields[0], (b = (arr$$2 = arr$$1.fields[0], (!(0 <= 0 ? 0 < arr$$2.length : false) ? (() => {
      debugger;
    })() : null, arr$$2[0])), [b, null])))[0];
  }
}
export function Timeline$$$add(time, task, _arg1$$4) {
  const tslot = _arg1$$4.fields[0];
  const id = _arg1$$4.fields[1];
  let i$$2;
  const array$$1 = tslot.fields[0];
  const array$$2 = array$$1.fields[0];

  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if (compare(array$$2[m], time) > 0) {
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

  i$$2 = go(0, array$$2.length);

  const insertAfter = function insertAfter(i$$3) {
    let slot$$1;
    const tupledArg$$2 = [Timeline$002ESortedArray$$$empty(), new Map([])];
    slot$$1 = new Timeline$002ESlot$00602(0, "Slot", tupledArg$$2[0], tupledArg$$2[1]);
    const id$$1 = id.contents | 0;
    const taskMap = slot$$1.fields[1];
    const ids = slot$$1.fields[0];
    const arr$$3 = ids.fields[0];

    if (!(0 === arr$$3.length ? true : arr$$3[arr$$3.length - 1] <= id$$1)) {
      debugger;
    }

    arr$$3.push(id$$1);
    taskMap.set(id$$1, task);
    const map$$1 = tslot.fields[1];
    const array$$3 = tslot.fields[0];
    const arr$$4 = array$$3.fields[0];

    if (!(-1 <= i$$3 ? i$$3 < arr$$4.length : false)) {
      debugger;
    }

    if (!(i$$3 === -1 ? true : compare(arr$$4[i$$3], time) <= 0)) {
      debugger;
    }

    if (!(i$$3 === arr$$4.length - 1 ? true : compare(arr$$4[i$$3 + 1], time) > 0)) {
      debugger;
    }

    arr$$4.splice(i$$3 + 1, 0, time);
    map$$1.set(time, slot$$1);
  };

  if (i$$2 === -1) {
    insertAfter(i$$2);
  } else {
    let patternInput;
    const map$$2 = tslot.fields[1];
    const arr$$5 = tslot.fields[0];
    let b$$2;
    const arr$$6 = arr$$5.fields[0];

    if (!(0 <= i$$2 ? i$$2 < arr$$6.length : false)) {
      debugger;
    }

    b$$2 = arr$$6[i$$2];
    patternInput = [b$$2, null];

    if (equals(patternInput[0], time)) {
      const id$$2 = id.contents | 0;
      const taskMap$$1 = patternInput[1].fields[1];
      const ids$$1 = patternInput[1].fields[0];
      const arr$$7 = ids$$1.fields[0];

      if (!(0 === arr$$7.length ? true : arr$$7[arr$$7.length - 1] <= id$$2)) {
        debugger;
      }

      arr$$7.push(id$$2);
      taskMap$$1.set(id$$2, task);
    } else {
      insertAfter(i$$2);
    }
  }

  id.contents = id.contents + 1;
}