"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$00602$reflection = T$00602$reflection;
exports.fromPith = fromPith;
exports.toPith = toPith;
exports.getBounds = getBounds;
exports.mappend = mappend;
exports.runTo = runTo;
exports.T$00602 = void 0;

var _Types = require("./fable-library.2.1.8/Types");

var _Reflection = require("./fable-library.2.1.8/Reflection");

var _Util = require("./fable-library.2.1.8/Util");

var _Map = require("./fable-library.2.1.8/Map");

var _Option = require("./fable-library.2.1.8/Option");

var _pith = require("./pith");

var _Seq = require("./fable-library.2.1.8/Seq");

var _Array = require("./fable-library.2.1.8/Array");

var _unit = require("./unit");

const T$00602 = (0, _Types.declare)(function Sakhe_TimeLine_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00602 = T$00602;

function T$00602$reflection($gen$$6, $gen$$7) {
  return (0, _Reflection.union)("Sakhe.TimeLine.T`2", [$gen$$6, $gen$$7], T$00602, () => [["T", [(0, _Reflection.array)((0, _Reflection.tuple)($gen$$6, $gen$$7))]], ["LR", [T$00602$reflection($gen$$6, $gen$$7), T$00602$reflection($gen$$6, $gen$$7)]]]);
}

function fromPith(mappend$$1, f) {
  var projection;
  let s = (0, _Map.empty)({
    Compare: _Util.compare
  });
  (0, _pith.P$$$run)(function (tupledArg) {
    const matchValue = (0, _Map.tryFind)(tupledArg[0], s);

    if (matchValue != null) {
      const o$$1 = (0, _Option.value)(matchValue);
      s = (0, _Map.add)(tupledArg[0], mappend$$1(o$$1, tupledArg[1]), s);
    } else {
      s = (0, _Map.add)(tupledArg[0], tupledArg[1], s);
    }
  }, f);
  const line = (0, _Array.ofSeq)((projection = function projection(tuple) {
    return tuple[0];
  }, function (source) {
    return (0, _Seq.sortWith)(function ($x$$3, $y$$4) {
      return (0, _Util.compare)(projection($x$$3), projection($y$$4));
    }, source);
  })((0, _Map.toSeq)(s)), Array);

  if (line.length === 0) {
    return null;
  } else {
    return new T$00602(0, "T", line);
  }
}

function toPith(_arg1) {
  if (_arg1.tag === 1) {
    const r = _arg1.fields[1];
    const l = _arg1.fields[0];
    return (0, _pith.P$$$mappend)(function (arg00$0040, arg10$0040$$1) {
      (0, _unit.mappend)(null, null);
    }, toPith(l), toPith(r));
  } else {
    const a$$1 = _arg1.fields[0];
    return (0, _pith.P$$$return$0027)(function (o$$2) {
      a$$1.forEach(o$$2);
    });
  }
}

function getBounds(_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    const r$$1 = _arg1$$1.fields[1];
    const l$$1 = _arg1$$1.fields[0];
    return [getBounds(l$$1)[0], getBounds(r$$1)[1]];
  } else {
    const a$$2 = _arg1$$1.fields[0];
    return [a$$2[0][0], a$$2[a$$2.length - 1][0]];
  }
}

function mappend(mappend$$2, l$$2, r$$2) {
  const patternInput = getBounds(l$$2);
  const patternInput$$1 = getBounds(r$$2);

  if ((0, _Util.compare)(patternInput[1], patternInput$$1[0]) < 0) {
    return new T$00602(1, "LR", l$$2, r$$2);
  } else if ((0, _Util.compare)(patternInput$$1[1], patternInput[0]) < 0) {
    return new T$00602(1, "LR", r$$2, l$$2);
  } else {
    const p = (0, _pith.P$$$mappend)(function (arg00$0040$$1, arg10$0040$$2) {
      (0, _unit.mappend)(null, null);
    }, toPith(l$$2), toPith(r$$2));
    const o$$3 = fromPith(mappend$$2, p);
    return o$$3;
  }
}

function runTo(now, tl) {
  return (0, _pith.P$$$return$0027)(function (o$$4) {
    if (tl.tag === 1) {
      const r$$3 = tl.fields[1];
      const l$$3 = tl.fields[0];
      const matchValue$$1 = (0, _pith.P$$$run)(o$$4, runTo(now, l$$3));

      if (matchValue$$1 != null) {
        const tl$$1 = matchValue$$1;
        return new T$00602(1, "LR", tl$$1, r$$3);
      } else {
        return (0, _pith.P$$$run)(o$$4, runTo(now, r$$3));
      }
    } else {
      const a$$3 = tl.fields[0];

      if ((0, _Util.compare)(now, a$$3[0][0]) < 0) {
        return new T$00602(0, "T", a$$3);
      } else {
        (0, _Seq.iterate)(o$$4, (0, _Seq.takeWhile)(function predicate(tupledArg$$1) {
          return (0, _Util.compare)(tupledArg$$1[0], now) <= 0;
        }, a$$3));
        return (0, _Util.compare)(a$$3[a$$3.length - 1][0], now) <= 0 ? null : new T$00602(0, "T", (0, _Array.ofSeq)((0, _Seq.skipWhile)(function predicate$$1(tupledArg$$2) {
          return (0, _Util.compare)(tupledArg$$2[0], now) <= 0;
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

        if ((0, _Util.compare)(sortedArray[m], a$$6) > 0) {
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