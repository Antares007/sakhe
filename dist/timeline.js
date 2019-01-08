import { declare, Union } from "./fable-library.2.1.0-beta-006/Types";
import { union, array, tuple as tuple$$1 } from "./fable-library.2.1.0-beta-006/Reflection";
import { compare } from "./fable-library.2.1.0-beta-006/Util";
import { toSeq, add, tryFind, empty } from "./fable-library.2.1.0-beta-006/Map";
import { value } from "./fable-library.2.1.0-beta-006/Option";
import { P$$$return$0027 as P$0024$0024$0024return$00240027, P$$$mappend as P$0024$0024$0024mappend, P$$$run as P$0024$0024$0024run } from "./pith";
import { skipWhile, iterate, takeWhile, sortWith } from "./fable-library.2.1.0-beta-006/Seq";
import { ofSeq } from "./fable-library.2.1.0-beta-006/Array";
import { mappend as mappend$$3 } from "./unit";
export const T$00602 = declare(function Sakhe_TimeLine_T(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function T$00602$reflection($gen$$6, $gen$$7) {
  return union("Sakhe.TimeLine.T`2", [$gen$$6, $gen$$7], T$00602, () => [["T", [array(tuple$$1($gen$$6, $gen$$7))]], ["LR", [T$00602$reflection($gen$$6, $gen$$7), T$00602$reflection($gen$$6, $gen$$7)]]]);
}
export function fromPith(mappend$$1, f) {
  var projection;
  let s = empty({
    Compare: compare
  });
  P$0024$0024$0024run(function (tupledArg) {
    const matchValue = tryFind(tupledArg[0], s);

    if (matchValue != null) {
      const o$$1 = value(matchValue);
      s = add(tupledArg[0], mappend$$1(o$$1, tupledArg[1]), s);
    } else {
      s = add(tupledArg[0], tupledArg[1], s);
    }
  }, f);
  const line = ofSeq((projection = function projection(tuple) {
    return tuple[0];
  }, function (source) {
    return sortWith(function ($x$$3, $y$$4) {
      return compare(projection($x$$3), projection($y$$4));
    }, source);
  })(toSeq(s)), Array);

  if (line.length === 0) {
    return null;
  } else {
    return new T$00602(0, "T", line);
  }
}
export function toPith(_arg1) {
  if (_arg1.tag === 1) {
    const r = _arg1.fields[1];
    const l = _arg1.fields[0];
    return P$0024$0024$0024mappend(function (arg00$0040, arg10$0040$$1) {
      mappend$$3(null, null);
    }, toPith(l), toPith(r));
  } else {
    const a$$1 = _arg1.fields[0];
    return P$0024$0024$0024return$00240027(function (o$$2) {
      a$$1.forEach(o$$2);
    });
  }
}
export function getBounds(_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    const r$$1 = _arg1$$1.fields[1];
    const l$$1 = _arg1$$1.fields[0];
    return [getBounds(l$$1)[0], getBounds(r$$1)[1]];
  } else {
    const a$$2 = _arg1$$1.fields[0];
    return [a$$2[0][0], a$$2[a$$2.length - 1][0]];
  }
}
export function mappend(mappend$$2, l$$2, r$$2) {
  const patternInput = getBounds(l$$2);
  const patternInput$$1 = getBounds(r$$2);

  if (compare(patternInput[1], patternInput$$1[0]) < 0) {
    return new T$00602(1, "LR", l$$2, r$$2);
  } else if (compare(patternInput$$1[1], patternInput[0]) < 0) {
    return new T$00602(1, "LR", r$$2, l$$2);
  } else {
    const p = P$0024$0024$0024mappend(function (arg00$0040$$1, arg10$0040$$2) {
      mappend$$3(null, null);
    }, toPith(l$$2), toPith(r$$2));
    const o$$3 = fromPith(mappend$$2, p);
    return o$$3;
  }
}
export function runTo(now, tl) {
  return P$0024$0024$0024return$00240027(function (o$$4) {
    if (tl.tag === 1) {
      const r$$3 = tl.fields[1];
      const l$$3 = tl.fields[0];
      const matchValue$$1 = P$0024$0024$0024run(o$$4, runTo(now, l$$3));

      if (matchValue$$1 != null) {
        const tl$$1 = matchValue$$1;
        return new T$00602(1, "LR", tl$$1, r$$3);
      } else {
        return P$0024$0024$0024run(o$$4, runTo(now, r$$3));
      }
    } else {
      const a$$3 = tl.fields[0];

      if (compare(now, a$$3[0][0]) < 0) {
        return new T$00602(0, "T", a$$3);
      } else {
        iterate(o$$4, takeWhile(function predicate(tupledArg$$1) {
          return compare(tupledArg$$1[0], now) <= 0;
        }, a$$3));
        return compare(a$$3[a$$3.length - 1][0], now) <= 0 ? null : new T$00602(0, "T", ofSeq(skipWhile(function predicate$$1(tupledArg$$2) {
          return compare(tupledArg$$2[0], now) <= 0;
        }, a$$3), Array));
      }
    }
  });
}

function findAppendPosition(a$$6, sortedArray) {
  const go = function go(l$$4, r$$4) {
    go: while (true) {
      if (l$$4 < r$$4) {
        const m = ~~((l$$4 + r$$4) / 2) | 0;

        if (compare(sortedArray[m], a$$6) > 0) {
          const $l$$4$$13 = l$$4;
          l$$4 = $l$$4$$13;
          r$$4 = m;
          continue go;
        } else {
          const $r$$4$$14 = r$$4;
          l$$4 = m + 1;
          r$$4 = $r$$4$$14;
          continue go;
        }
      } else {
        return l$$4 - 1 | 0;
      }

      break;
    }
  };

  return go(0, sortedArray.length) | 0;
}