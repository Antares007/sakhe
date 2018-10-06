"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromPith = fromPith;
exports.toPith = toPith;
exports.nextArrival = nextArrival;
exports.takeUntil = takeUntil;
exports.mappend = mappend;
exports.T$00602 = void 0;

var _Types = require("./fable-core.2.0.3/Types");

var _Map = require("./fable-core.2.0.3/Map");

var _Option = require("./fable-core.2.0.3/Option");

var _Util = require("./fable-core.2.0.3/Util");

var _o = require("./o");

var _pith = require("./pith");

var _Seq = require("./fable-core.2.0.3/Seq");

var _Array = require("./fable-core.2.0.3/Array");

const T$00602 = (0, _Types.declare)(function T$00602(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00602 = T$00602;

function fromPith(mappend$$1, f) {
  const o$$1 = (0, _o.return$0027)(function (m, tupledArg) {
    const matchValue = (0, _Map.tryFind)(tupledArg[0], m);

    if (matchValue != null) {
      const o = (0, _Option.value)(matchValue);
      return (0, _Map.add)(tupledArg[0], mappend$$1(o, tupledArg[1]), m);
    } else {
      return (0, _Map.add)(tupledArg[0], tupledArg[1], m);
    }
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));
  (0, _pith.run)(o$$1, f);
  const line = (0, _Array.ofSeq)((0, _Seq.sortWith)(_Util.compare, (0, _Seq.map)(function mapping(tuple) {
    return tuple[0];
  }, (0, _Map.toSeq)((0, _o.T$00602$$get_Value)(o$$1)))), Array);

  if (line.length === 0) {
    return null;
  } else {
    return new T$00602(0, "TimeLine", [line, (0, _o.T$00602$$get_Value)(o$$1)]);
  }
}

function toPith(_arg1) {
  const map = _arg1.fields[0][1];
  const line$$1 = _arg1.fields[0][0];
  return (0, _pith.return$0027)(function (o$$2) {
    line$$1.forEach(function (a$$1) {
      o$$2([a$$1, (0, _Map.FSharpMap$$get_Item$$2B595)(map, a$$1)]);
    });
  });
}

function nextArrival(_arg1$$1) {
  const line$$2 = _arg1$$1.fields[0][0];
  return line$$2[0];
}

function findAppendPosition(a$$2, sortedArray) {
  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m$$1 = ~~((l + r) / 2) | 0;

        if ((0, _Util.compare)(sortedArray[m$$1], a$$2) > 0) {
          l = l;
          r = m$$1;
          continue go;
        } else {
          l = m$$1 + 1;
          r = r;
          continue go;
        }
      } else {
        return l - 1 | 0;
      }
    }
  };

  return go(0, sortedArray.length) | 0;
}

function takeUntil(now, tl) {
  var i;
  const map$$1 = tl.fields[0][1];
  const line$$3 = tl.fields[0][0];
  const matchValue$$1 = findAppendPosition(now, line$$3) | 0;

  if (matchValue$$1 === -1) {
    return [null, tl];
  } else if (i = matchValue$$1 | 0, i === line$$3.length - 1) {
    const i$$1 = matchValue$$1 | 0;
    return [tl, null];
  } else {
    const i$$2 = matchValue$$1 | 0;
    const iplus1 = i$$2 + 1 | 0;
    return [new T$00602(0, "TimeLine", [(0, _Array.take)(iplus1, line$$3, Array), (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$1(a$$3) {
      return [a$$3, (0, _Map.FSharpMap$$get_Item$$2B595)(map$$1, a$$3)];
    }, (0, _Seq.take)(iplus1, line$$3)), {
      Compare: _Util.compare
    })]), new T$00602(0, "TimeLine", [(0, _Array.skip)(iplus1, line$$3, Array), (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$2(a$$4) {
      return [a$$4, (0, _Map.FSharpMap$$get_Item$$2B595)(map$$1, a$$4)];
    }, (0, _Seq.skip)(iplus1, line$$3)), {
      Compare: _Util.compare
    })])];
  }
}

function mergea(l$$1, r$$1) {
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    const lLen = l$$1.length | 0;
    const rLen = r$$1.length | 0;
    let i$$3 = 0;
    let j = 0;
    return (0, _Seq.append)((0, _Seq.enumerateWhile)(function () {
      return i$$3 < lLen ? j < rLen : false;
    }, (0, _Seq.delay)(function () {
      const li = l$$1[i$$3];
      const ri = r$$1[j];
      return (0, _Util.compare)(li, ri) < 0 ? (0, _Seq.append)((0, _Seq.singleton)(li), (0, _Seq.delay)(function () {
        i$$3 = i$$3 + 1;
        return (0, _Seq.empty)();
      })) : (0, _Util.compare)(li, ri) > 0 ? (0, _Seq.append)((0, _Seq.singleton)(ri), (0, _Seq.delay)(function () {
        j = j + 1;
        return (0, _Seq.empty)();
      })) : (0, _Seq.append)((0, _Seq.singleton)(li), (0, _Seq.delay)(function () {
        i$$3 = i$$3 + 1;
        j = j + 1;
        return (0, _Seq.empty)();
      }));
    })), (0, _Seq.delay)(function () {
      return (0, _Seq.append)((0, _Seq.enumerateWhile)(function () {
        return i$$3 < lLen;
      }, (0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Seq.singleton)(l$$1[i$$3]), (0, _Seq.delay)(function () {
          i$$3 = i$$3 + 1;
          return (0, _Seq.empty)();
        }));
      })), (0, _Seq.delay)(function () {
        return (0, _Seq.enumerateWhile)(function () {
          return j < rLen;
        }, (0, _Seq.delay)(function () {
          return (0, _Seq.append)((0, _Seq.singleton)(r$$1[j]), (0, _Seq.delay)(function () {
            j = j + 1;
            return (0, _Seq.empty)();
          }));
        }));
      }));
    }));
  }), Array);
}

function mergem(mappend$$2, l$$2, r$$2) {
  return (0, _Map.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.map)(function mapping$$3(tupledArg$$1) {
      const matchValue$$2 = (0, _Map.tryFind)(tupledArg$$1[0], r$$2);

      if (matchValue$$2 != null) {
        const rv = (0, _Option.value)(matchValue$$2);
        return [tupledArg$$1[0], mappend$$2(tupledArg$$1[1], rv)];
      } else {
        return [tupledArg$$1[0], tupledArg$$1[1]];
      }
    }, (0, _Map.toSeq)(l$$2)), (0, _Seq.delay)(function () {
      return (0, _Seq.filter)(function predicate(tupledArg$$2) {
        return !(0, _Map.containsKey)(tupledArg$$2[0], l$$2);
      }, (0, _Map.toSeq)(r$$2));
    }));
  }), {
    Compare: _Util.compare
  });
}

function mappend(mappend$$3, _arg2, _arg1$$3) {
  const lm = _arg2.fields[0][1];
  const la = _arg2.fields[0][0];
  const rm = _arg1$$3.fields[0][1];
  const ra = _arg1$$3.fields[0][0];
  return new T$00602(0, "TimeLine", [mergea(la, ra), mergem(mappend$$3, lm, rm)]);
}