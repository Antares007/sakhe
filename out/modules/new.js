"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.TimeLineModule$$$nextArrival = TimeLineModule$$$nextArrival;
exports.TimeLineModule$$$foldUntil = TimeLineModule$$$foldUntil;
exports.TimeLineModule$$$merge = TimeLineModule$$$merge;
exports.TimeLineModule$$$from = TimeLineModule$$$from;
exports.TimeLineModule$$$runTo = TimeLineModule$$$runTo;
exports.d = exports.see = exports.TimeLine = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _Map = require("./fable-core.2.0.0-beta-005/Map");

var _Seq = require("./fable-core.2.0.0-beta-005/Seq");

var _Array = require("./fable-core.2.0.0-beta-005/Array");

var _Option = require("./fable-core.2.0.0-beta-005/Option");

var _o = require("./o");

var _String = require("./fable-core.2.0.0-beta-005/String");

var _disposable = require("./disposable");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return (0, _io.return$0027)(f);
}

function OModule$$$now(f$$2) {
  return new O(0, "Now", return$0027(f$$2));
}

function OModule$$$delay(delay, f$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

const TimeLine = (0, _Types.declare)(function TimeLine(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TimeLine = TimeLine;

function TimeLineModule$002EPrivate$$$return$0027(timeMap) {
  const timeLine = (0, _Array.ofSeq)((0, _Seq.sortWith)(_Util.compare, (0, _Seq.map)(function mapping(tuple) {
    return tuple[0];
  }, (0, _Map.toSeq)(timeMap))), Array);

  if (timeLine.length === 0) {
    return null;
  } else {
    return new TimeLine(0, "TimeLine", [timeLine, timeMap]);
  }
}

function TimeLineModule$002EPrivate$$$mergea(l, r) {
  const ll = l.length | 0;
  const rl = r.length | 0;
  const to$0027 = (0, _Util.max)(_Util.comparePrimitives, ll, rl) - 1 | 0;
  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (i) {
      var r$$1, l$$1, r$$4, l$$4;
      const matchValue = [i < ll ? (0, _Option.some)(l[i]) : null, i < rl ? (0, _Option.some)(r[i]) : null];

      if (matchValue[0] != null) {
        if (matchValue[1] != null) {
          if (r$$1 = (0, _Option.value)(matchValue[1]), (l$$1 = (0, _Option.value)(matchValue[0]), (0, _Util.compare)(l$$1, r$$1) < 0)) {
            const l$$3 = (0, _Option.value)(matchValue[0]);
            const r$$3 = (0, _Option.value)(matchValue[1]);
            return (0, _Seq.append)((0, _Seq.singleton)(l$$3), (0, _Seq.delay)(function () {
              return (0, _Seq.singleton)(r$$3);
            }));
          } else {
            var $target$$13, l$$5, r$$5;

            if (matchValue[0] != null) {
              if (matchValue[1] != null) {
                if (r$$4 = (0, _Option.value)(matchValue[1]), (l$$4 = (0, _Option.value)(matchValue[0]), (0, _Util.compare)(l$$4, r$$4) > 0)) {
                  $target$$13 = 0;
                  l$$5 = (0, _Option.value)(matchValue[0]);
                  r$$5 = (0, _Option.value)(matchValue[1]);
                } else {
                  $target$$13 = 1;
                }
              } else {
                $target$$13 = 1;
              }
            } else {
              $target$$13 = 1;
            }

            switch ($target$$13) {
              case 0:
                {
                  return (0, _Seq.append)((0, _Seq.singleton)(r$$5), (0, _Seq.delay)(function () {
                    return (0, _Seq.singleton)(l$$5);
                  }));
                }

              case 1:
                {
                  var $target$$14, l$$6;

                  if (matchValue[0] != null) {
                    if (matchValue[1] != null) {
                      $target$$14 = 0;
                      l$$6 = (0, _Option.value)(matchValue[0]);
                    } else {
                      $target$$14 = 1;
                    }
                  } else {
                    $target$$14 = 1;
                  }

                  switch ($target$$14) {
                    case 0:
                      {
                        return (0, _Seq.singleton)(l$$6);
                      }

                    case 1:
                      {
                        throw new _Types.MatchFailureException("C:/code/sakhe/core/new.fs", 40, 26);
                      }
                  }
                }
            }
          }
        } else {
          const l$$2 = (0, _Option.value)(matchValue[0]);
          return (0, _Seq.singleton)(l$$2);
        }
      } else if (matchValue[1] != null) {
        const r$$2 = (0, _Option.value)(matchValue[1]);
        return (0, _Seq.singleton)(r$$2);
      } else {
        return (0, _Seq.empty)();
      }
    }, (0, _Seq.rangeNumber)(0, 1, to$0027));
  }), Array);
}

function TimeLineModule$002EPrivate$$$findAppendPosition(a, array) {
  const go = function go(l$$7, r$$6) {
    go: while (true) {
      if (l$$7 < r$$6) {
        const m = ~~((l$$7 + r$$6) / 2) | 0;

        if ((0, _Util.compare)(array[m], a) > 0) {
          l$$7 = l$$7;
          r$$6 = m;
          continue go;
        } else {
          l$$7 = m + 1;
          r$$6 = r$$6;
          continue go;
        }
      } else {
        return l$$7 - 1 | 0;
      }
    }
  };

  return go(0, array.length) | 0;
}

function TimeLineModule$002EPrivate$$$toFlatTimeLineIORing(now, _arg1) {
  const io = _arg1;
  return (0, _io.return$0027)(function (unitVar0, o) {
    const o$$1 = (0, _o.proxy)(o);

    const go$$1 = function go$$1(io$$1) {
      (0, _io.run)(now, o$$1, (0, _io.pmap)((0, _Util.uncurry)(2, ring))(io$$1));
    };

    const ring = function ring(p) {
      return function (o$$2) {
        p(function (_arg2) {
          if (_arg2.tag === 1) {
            const io$$3 = _arg2.fields[1];
            const delay$$1 = _arg2.fields[0];
            o$$2([delay$$1 + now, io$$3]);
          } else {
            const io$$2 = _arg2.fields[0];
            go$$1(io$$2);
          }
        });
      };
    };

    go$$1(io);
  });
}

function TimeLineModule$002EPrivate$$$runFlatTimeLineIO(io$$4) {
  const o$$3 = (0, _o.return$0027)(function f$$6(map, tupledArg) {
    var matchValue$$1, l$$8;
    return (matchValue$$1 = (0, _Map.tryFind)(tupledArg[0], map), matchValue$$1 == null ? function (table$$2) {
      return (0, _Map.add)(tupledArg[0], tupledArg[1], table$$2);
    } : (l$$8 = matchValue$$1, function (table$$1) {
      return (0, _Map.add)(tupledArg[0], l$$8 + tupledArg[1], table$$1);
    }))(map);
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));
  (0, _io.run)(null, o$$3, io$$4);
  return TimeLineModule$002EPrivate$$$return$0027((0, _o.T$00602$$get_Value)(o$$3));
}

function TimeLineModule$$$nextArrival(_arg1$$1) {
  const a$$1 = _arg1$$1.fields[0][0];
  return (0, _Array.head)(a$$1);
}

function TimeLineModule$$$foldUntil(now$$1, f$$7, s, tl) {
  const timeMap$$1 = tl.fields[0][1];
  const timeLine$$1 = tl.fields[0][0];
  const matchValue$$2 = TimeLineModule$002EPrivate$$$findAppendPosition(now$$1, timeLine$$1) | 0;

  if (matchValue$$2 === -1) {
    return [s, tl];
  } else {
    const i$$1 = matchValue$$2 | 0;
    const rl$$1 = i$$1 + 1 | 0;

    if (rl$$1 === timeLine$$1.length) {
      return [(0, _Seq.fold)(f$$7, s, (0, _Seq.take)(i$$1 + 1, timeLine$$1)), null];
    } else {
      const tl$$1 = new TimeLine(0, "TimeLine", [(0, _Array.skip)(rl$$1, timeLine$$1, Array), (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$1(now$$2) {
        return [now$$2, (0, _Map.FSharpMap$$get_Item$$2B595)(timeMap$$1, now$$2)];
      }, (0, _Seq.skip)(rl$$1, timeLine$$1)), {
        Compare: _Util.compare
      })]);
      return [s, tl$$1];
    }
  }
}

function TimeLineModule$$$merge(_arg2$$1, _arg1$$2) {
  const lm = _arg2$$1.fields[0][1];
  const la = _arg2$$1.fields[0][0];
  const rm = _arg1$$2.fields[0][1];
  const ra = _arg1$$2.fields[0][0];
  return new TimeLine(0, "TimeLine", [TimeLineModule$002EPrivate$$$mergea(la, ra), (0, _Map.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.append)((0, _Seq.map)(function mapping$$2(tupledArg$$1) {
      const matchValue$$3 = (0, _Map.tryFind)(tupledArg$$1[0], rm);

      if (matchValue$$3 != null) {
        const rv = matchValue$$3;
        return [tupledArg$$1[0], tupledArg$$1[1] + rv];
      } else {
        return [tupledArg$$1[0], tupledArg$$1[1]];
      }
    }, (0, _Map.toSeq)(lm)), (0, _Seq.delay)(function () {
      return (0, _Seq.filter)(function predicate(tupledArg$$2) {
        return !(0, _Map.containsKey)(tupledArg$$2[0], lm);
      }, (0, _Map.toSeq)(rm));
    }));
  }), {
    Compare: _Util.compare
  })]);
}

function TimeLineModule$$$from(now$$3, io$$5) {
  return TimeLineModule$002EPrivate$$$runFlatTimeLineIO(TimeLineModule$002EPrivate$$$toFlatTimeLineIORing(now$$3, io$$5));
}

function TimeLineModule$$$runTo(now$$4, timeline) {
  return null;
}

const see = return$0027(function (t, o$$4) {
  (0, _String.toConsole)((0, _String.printf)("1.now: %A"))(t);
  o$$4(OModule$$$delay(0, function (t$$1, o$$5) {
    (0, _String.toConsole)((0, _String.printf)("2.delay 0: %A"))(t$$1);
    o$$5(OModule$$$delay(1000, function (t$$2, o$$6) {
      (0, _String.toConsole)((0, _String.printf)("3.delay 1000: %A"))(t$$2);
    }));
  }));
  o$$4(OModule$$$now(function (t$$3, o$$7) {
    (0, _String.toConsole)((0, _String.printf)("4.now: %A"))(t$$3);
    o$$7(OModule$$$now(function (t$$4, o$$8) {
      (0, _String.toConsole)((0, _String.printf)("5.now: %A"))(t$$4);
    }));
    o$$7(OModule$$$delay(11, function (t$$5, o$$9) {
      (0, _String.toConsole)((0, _String.printf)("6.delay: %A"))(t$$5);
    }));
  }));
});
exports.see = see;

function timer(delay$$5, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay$$5));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function tf() {
  return (0, _time.return$0027)(Math.floor(performance.now()));
}

const d = (() => {
  const tf$$1 = function tf$$1() {
    return tf();
  };

  const now$$5 = _time.zero;
  const offSet = now$$5 - tf$$1();
  const settable = (0, _disposable.SettableDisposable$$$$002Ector)();

  const nextRun = function nextRun(now$$6, _arg1$$4) {
    if (_arg1$$4 != null) {
      const timeline$$1 = _arg1$$4;
      (0, _disposable.SettableDisposable$$Set$$Z5A296901)(settable, function timer$$1(delay$$6) {
        return function (task$$1) {
          return timer(delay$$6, task$$1);
        };
      }((0, _time.DelayModule$$$fromTo)(now$$6, TimeLineModule$$$nextArrival(timeline$$1)))(function () {
        const now$$7 = offSet + tf$$1();
        nextRun(now$$7, TimeLineModule$$$runTo(now$$7, timeline$$1));
      }));
    }
  };

  nextRun(now$$5, TimeLineModule$$$from(now$$5, see));
  return settable;
})();

exports.d = d;
d;