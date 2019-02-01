import { declare, Union } from "./fable-library.2.1.0-beta-006/Types";
import { union, array, tuple } from "./fable-library.2.1.0-beta-006/Reflection";
import { mappend as mappend$$3 } from "./unit";
export const Tt$00602 = declare(function Sakhe_TimeLine2_Tt(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Tt$00602$reflection($gen$$5, $gen$$6) {
  return union("Sakhe.TimeLine2.Tt`2", [$gen$$5, $gen$$6], Tt$00602, () => [["T", [array(tuple($gen$$5, $gen$$6))]], ["LR", [Tt$00602$reflection($gen$$5, $gen$$6), Tt$00602$reflection($gen$$5, $gen$$6)]]]);
}
export function findAppendPosition(a, sortedArray) {
  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if (sortedArray[m][0] > a) {
          const $l$$7 = l;
          l = $l$$7;
          r = m;
          continue go;
        } else {
          const $r$$8 = r;
          l = m + 1;
          r = $r$$8;
          continue go;
        }
      } else {
        return l - 1 | 0;
      }

      break;
    }
  };

  return go(0, sortedArray.length) | 0;
}
export function fromIO(mappend$$1, io) {
  const line = [];
  io(function (tupledArg) {
    const matchValue = findAppendPosition(tupledArg[0], line) | 0;

    if (matchValue === -1) {
      line.push([tupledArg[0], tupledArg[1]]);
    } else {
      const n = matchValue | 0;

      if (line[n][0] === tupledArg[0]) {
        line[n] = [tupledArg[0], mappend$$1(line[n][1], tupledArg[1])];
      } else if (n === line.length) {
        line.push([tupledArg[0], tupledArg[1]]);
      } else {
        line.splice(n, 0, [tupledArg[0], tupledArg[1]]);
      }
    }
  })(null);

  if (line.length === 0) {
    return null;
  } else {
    return new Tt$00602(0, "T", line);
  }
}
export function toIO(_arg1) {
  if (_arg1.tag === 1) {
    const r$$1 = _arg1.fields[1];
    const l$$1 = _arg1.fields[0];
    return ((mappend, l, r) => o => i => mappend(l(o)(i), r(o)(i)))(function (arg00$0040, arg10$0040) {
      mappend$$3(null, null);
    }, toIO(l$$1), toIO(r$$1));
  } else {
    const a$$2 = _arg1.fields[0];
    return function (o$$1) {
      return function () {
        a$$2.forEach(o$$1);
      };
    };
  }
}
export function getBounds(_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    const r$$2 = _arg1$$1.fields[1];
    const l$$2 = _arg1$$1.fields[0];
    return [getBounds(l$$2)[0], getBounds(r$$2)[1]];
  } else {
    const a$$3 = _arg1$$1.fields[0];
    return [a$$3[0][0], a$$3[a$$3.length - 1][0]];
  }
}
export function mappend(mappend$$2, l$$3, r$$3) {
  const patternInput = getBounds(l$$3);
  const patternInput$$1 = getBounds(r$$3);

  if (patternInput[1] < patternInput$$1[0]) {
    return new Tt$00602(1, "LR", l$$3, r$$3);
  } else if (patternInput$$1[1] < patternInput[0]) {
    return new Tt$00602(1, "LR", r$$3, l$$3);
  } else {
    const p = ((mappend, l, r) => o => i => mappend(l(o)(i), r(o)(i)))(function (arg00$0040$$1, arg10$0040$$1) {
      mappend$$3(null, null);
    }, toIO(l$$3), toIO(r$$3));

    const o$$2 = fromIO(mappend$$2, p);
    return o$$2;
  }
}
export function runTo(now, tl) {
  return function (o$$3) {
    return function () {
      if (tl.tag === 1) {
        const r$$4 = tl.fields[1];
        const l$$4 = tl.fields[0];
        const matchValue$$2 = runTo(now, l$$4)(o$$3)(null);

        if (matchValue$$2 != null) {
          const tl$$1 = matchValue$$2;
          return new Tt$00602(1, "LR", tl$$1, r$$4);
        } else {
          return runTo(now, r$$4)(o$$3)(null);
        }
      } else {
        const a$$4 = tl.fields[0];
        const matchValue$$1 = findAppendPosition(now, a$$4) | 0;

        if (matchValue$$1 === -1) {
          return new Tt$00602(0, "T", a$$4);
        } else {
          const n$$1 = matchValue$$1 | 0;
          const alen = a$$4.length | 0;
          const to$0027 = ((n$$1 < alen ? a$$4[n$$1][0] === now : false) ? n$$1 : n$$1 - 1) | 0;

          for (let i = 0; i <= to$0027; i++) {
            o$$3(a$$4[i]);
          }

          if (n$$1 === alen) {
            return null;
          } else {
            const rez = [];

            for (let i$$1 = to$0027 + 1; i$$1 <= alen - 1; i$$1++) {
              rez.push(a$$4[i$$1]);
            }

            return new Tt$00602(0, "T", rez);
          }
        }
      }
    };
  };
}