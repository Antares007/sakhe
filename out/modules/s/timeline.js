import { FSharpRef, declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { return$0027 as return$00240027 } from "./disposable";
import { equals, compare } from "../fable-core.2.0.0-beta-003/Util";
export const Timeline$002ESlot$00602 = declare(function Timeline$002ESlot$00602(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Timeline$002ET = declare(function Timeline$002ET(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Timeline$$$empty() {
  var tupledArg$$1;
  const tupledArg = [(tupledArg$$1 = [[], new Map([])], new Timeline$002ESlot$00602(0, "Slot", tupledArg$$1[0], tupledArg$$1[1])), new FSharpRef(0)];
  return new Timeline$002ET(0, "Timeline", tupledArg[0], tupledArg[1]);
}
export function Timeline$$$nextArrival(_arg1) {
  var array, map, arr, b, arr$$1;
  const slot = _arg1.fields[0];

  if ((array = slot.fields[0], array.length) === 0) {
    const f = Number.POSITIVE_INFINITY;

    if (!(f >= 0)) {
      debugger;
    }

    return Math.floor(f);
  } else {
    return (map = slot.fields[1], (arr = slot.fields[0], (b = (arr$$1 = arr, (!(0 <= 0 ? 0 < arr$$1.length : false) ? (() => {
      debugger;
    })() : null, arr$$1[0])), [b, null])))[0];
  }
}
export function Timeline$$$add(time, task, _arg1$$4) {
  const tslot = _arg1$$4.fields[0];
  const idref = _arg1$$4.fields[1];
  const id = idref.contents | 0;
  idref.contents = id + 1;

  const insertTask = function insertTask(i$$2, slot$$1) {
    const taskMap = slot$$1.fields[1];
    const ids = slot$$1.fields[0];
    const arr$$2 = ids;

    if (!(0 === arr$$2.length ? true : arr$$2[arr$$2.length - 1] <= id)) {
      debugger;
    }

    arr$$2.push(id);
    taskMap.set(id, task);
    return return$00240027(function () {
      var array$$1, array$$2, go;
      const map$$1 = slot$$1.fields[1];
      const array$$3 = slot$$1.fields[0];
      let keys;
      const array$$4 = array$$3;
      keys = array$$4.slice((array$$1 = slot$$1.fields[0], (array$$2 = array$$1, (go = function go(l, r) {
        go: while (true) {
          if (l < r) {
            const m = ~~((l + r) / 2) | 0;

            if (array$$2[m] > id) {
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
      }, go(0, array$$2.length)))), 1);
      const length = keys.length | 0;

      for (let i$$3 = 0; i$$3 <= keys.length - 1; i$$3++) {
        const key = keys[i$$3] | 0;
        map$$1.delete(key);
      }
    });
  };

  const insertTime = function insertTime(i$$4) {
    let slot$$2;
    const tupledArg$$2 = [[], new Map([])];
    slot$$2 = new Timeline$002ESlot$00602(0, "Slot", tupledArg$$2[0], tupledArg$$2[1]);
    const map$$2 = tslot.fields[1];
    const array$$5 = tslot.fields[0];
    const arr$$3 = array$$5;

    if (!(-1 <= i$$4 ? i$$4 < arr$$3.length : false)) {
      debugger;
    }

    if (!(i$$4 === -1 ? true : compare(arr$$3[i$$4], time) <= 0)) {
      debugger;
    }

    if (!(i$$4 === arr$$3.length - 1 ? true : compare(arr$$3[i$$4 + 1], time) > 0)) {
      debugger;
    }

    arr$$3.splice(i$$4 + 1, 0, time);
    map$$2.set(time, slot$$2);
    return slot$$2;
  };

  let i$$7;
  const array$$6 = tslot.fields[0];
  const array$$7 = array$$6;

  const go$$1 = function go$$1(l$$1, r$$1) {
    go$$1: while (true) {
      if (l$$1 < r$$1) {
        const m$$1 = ~~((l$$1 + r$$1) / 2) | 0;

        if (compare(array$$7[m$$1], time) > 0) {
          l$$1 = l$$1;
          r$$1 = m$$1;
          continue go$$1;
        } else {
          l$$1 = m$$1 + 1;
          r$$1 = r$$1;
          continue go$$1;
        }
      } else {
        return l$$1 - 1 | 0;
      }
    }
  };

  i$$7 = go$$1(0, array$$7.length);

  if (i$$7 === -1) {
    return insertTask(i$$7, insertTime(i$$7));
  } else {
    let patternInput;
    const map$$3 = tslot.fields[1];
    const arr$$4 = tslot.fields[0];
    let b$$2;
    const arr$$5 = arr$$4;

    if (!(0 <= i$$7 ? i$$7 < arr$$5.length : false)) {
      debugger;
    }

    b$$2 = arr$$5[i$$7];
    patternInput = [b$$2, null];

    if (equals(patternInput[0], time)) {
      return insertTask(i$$7, patternInput[1]);
    } else {
      return insertTask(i$$7, insertTime(i$$7));
    }
  }
}