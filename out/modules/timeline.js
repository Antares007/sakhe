"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.nextArrival = nextArrival;
exports.foldUntil = foldUntil;
exports.mappend = mappend;
exports.T$00602 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _Map = require("./fable-core.2.0.0-beta-005/Map");

var _Seq = require("./fable-core.2.0.0-beta-005/Seq");

var _Array = require("./fable-core.2.0.0-beta-005/Array");

var _Option = require("./fable-core.2.0.0-beta-005/Option");

const T$00602 = (0, _Types.declare)(function T$00602(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00602 = T$00602;

function return$0027(map) {
  const line = (0, _Array.ofSeq)((0, _Seq.sortWith)(_Util.compare, (0, _Seq.map)(function mapping(tuple) {
    return tuple[0];
  }, (0, _Map.toSeq)(map))), Array);

  if (line.length === 0) {
    return null;
  } else {
    return new T$00602(0, "TimeLine", [line, map]);
  }
}

function nextArrival(_arg1) {
  const a = _arg1.fields[0][0];
  return (0, _Array.head)(a);
}

function findAppendPosition(a$$1, sortedArray) {
  const go = function go(l, r) {
    go: while (true) {
      if (l < r) {
        const m = ~~((l + r) / 2) | 0;

        if ((0, _Util.compare)(sortedArray[m], a$$1) > 0) {
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

  return go(0, sortedArray.length) | 0;
}

function foldUntil(now, f, s, tl) {
  const timeMap = tl.fields[0][1];
  const timeLine = tl.fields[0][0];
  const matchValue = findAppendPosition(now, timeLine) | 0;

  if (matchValue === -1) {
    return [s, tl];
  } else {
    const i = matchValue | 0;
    const iPlus1 = i + 1 | 0;
    const tl$$1 = iPlus1 === timeLine.length ? null : new T$00602(0, "TimeLine", [(0, _Array.skip)(iPlus1, timeLine, Array), (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$1(now$$1) {
      return [now$$1, (0, _Map.FSharpMap$$get_Item$$2B595)(timeMap, now$$1)];
    }, (0, _Seq.skip)(iPlus1, timeLine)), {
      Compare: _Util.compare
    })]);
    const s$$1 = (0, _Seq.fold)(f, s, (0, _Seq.map)(function mapping$$2(now$$2) {
      return [now$$2, (0, _Map.FSharpMap$$get_Item$$2B595)(timeMap, now$$2)];
    }, (0, _Seq.take)(iPlus1, timeLine)));
    return [s$$1, tl$$1];
  }
}

function mergea(l$$1, r$$1) {
  const ll = l$$1.length | 0;
  const rl = r$$1.length | 0;
  const to$0027 = (0, _Util.max)(_Util.comparePrimitives, ll, rl) - 1 | 0;
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (i$$1) {
      var r$$2, l$$2, r$$5, l$$5;
      const matchValue$$1 = [i$$1 < ll ? (0, _Option.some)(l$$1[i$$1]) : null, i$$1 < rl ? (0, _Option.some)(r$$1[i$$1]) : null];

      if (matchValue$$1[0] != null) {
        if (matchValue$$1[1] != null) {
          if (r$$2 = (0, _Option.value)(matchValue$$1[1]), (l$$2 = (0, _Option.value)(matchValue$$1[0]), (0, _Util.compare)(l$$2, r$$2) < 0)) {
            const l$$4 = (0, _Option.value)(matchValue$$1[0]);
            const r$$4 = (0, _Option.value)(matchValue$$1[1]);
            return (0, _Seq.append)((0, _Seq.singleton)(l$$4), (0, _Seq.delay)(function () {
              return (0, _Seq.singleton)(r$$4);
            }));
          } else {
            var $target$$6, l$$6, r$$6;

            if (matchValue$$1[0] != null) {
              if (matchValue$$1[1] != null) {
                if (r$$5 = (0, _Option.value)(matchValue$$1[1]), (l$$5 = (0, _Option.value)(matchValue$$1[0]), (0, _Util.compare)(l$$5, r$$5) > 0)) {
                  $target$$6 = 0;
                  l$$6 = (0, _Option.value)(matchValue$$1[0]);
                  r$$6 = (0, _Option.value)(matchValue$$1[1]);
                } else {
                  $target$$6 = 1;
                }
              } else {
                $target$$6 = 1;
              }
            } else {
              $target$$6 = 1;
            }

            switch ($target$$6) {
              case 0:
                {
                  return (0, _Seq.append)((0, _Seq.singleton)(r$$6), (0, _Seq.delay)(function () {
                    return (0, _Seq.singleton)(l$$6);
                  }));
                }

              case 1:
                {
                  var $target$$7, l$$7;

                  if (matchValue$$1[0] != null) {
                    if (matchValue$$1[1] != null) {
                      $target$$7 = 0;
                      l$$7 = (0, _Option.value)(matchValue$$1[0]);
                    } else {
                      $target$$7 = 1;
                    }
                  } else {
                    $target$$7 = 1;
                  }

                  switch ($target$$7) {
                    case 0:
                      {
                        return (0, _Seq.singleton)(l$$7);
                      }

                    case 1:
                      {
                        throw new _Types.MatchFailureException("C:/code/sakhe/core/timeline.fs", 41, 18);
                      }
                  }
                }
            }
          }
        } else {
          const l$$3 = (0, _Option.value)(matchValue$$1[0]);
          return (0, _Seq.singleton)(l$$3);
        }
      } else if (matchValue$$1[1] != null) {
        const r$$3 = (0, _Option.value)(matchValue$$1[1]);
        return (0, _Seq.singleton)(r$$3);
      } else {
        return (0, _Seq.empty)();
      }
    }, (0, _Seq.rangeNumber)(0, 1, to$0027));
  }), Array);
}

function mergem(mappend$$1, l$$8, r$$7) {
  return (0, _Map.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.map)(function mapping$$3(tupledArg) {
      const matchValue$$2 = (0, _Map.tryFind)(tupledArg[0], r$$7);

      if (matchValue$$2 != null) {
        const rv = (0, _Option.value)(matchValue$$2);
        return [tupledArg[0], mappend$$1(tupledArg[1], rv)];
      } else {
        return [tupledArg[0], tupledArg[1]];
      }
    }, (0, _Map.toSeq)(l$$8)), (0, _Seq.delay)(function () {
      return (0, _Seq.filter)(function predicate(tupledArg$$1) {
        return !(0, _Map.containsKey)(tupledArg$$1[0], l$$8);
      }, (0, _Map.toSeq)(r$$7));
    }));
  }), {
    Compare: _Util.compare
  });
}

function mappend(mappend$$2, _arg2, _arg1$$2) {
  const lm = _arg2.fields[0][1];
  const la = _arg2.fields[0][0];
  const rm = _arg1$$2.fields[0][1];
  const ra = _arg1$$2.fields[0][0];
  return new T$00602(0, "TimeLine", [mergea(la, ra), mergem(mappend$$2, lm, rm)]);
}