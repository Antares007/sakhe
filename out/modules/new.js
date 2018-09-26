"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.TimeLine$$$return$0027 = TimeLine$$$return$0027;
exports.TimeLine$$$nextArrival = TimeLine$$$nextArrival;
exports.run = run;
exports.rez = exports.see = exports.TimeLine$002ET$00602 = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

var _o = require("./o");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _Map = require("./fable-core.2.0.0-beta-005/Map");

var _Seq = require("./fable-core.2.0.0-beta-005/Seq");

var _Array = require("./fable-core.2.0.0-beta-005/Array");

var _Option = require("./fable-core.2.0.0-beta-005/Option");

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.0-beta-005/String");

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

function mappend(l, r) {
  return (0, _io.return$0027)(function (i, o) {
    const o$$1 = (0, _o.proxy)(o);
    (0, _io.run)(i, o$$1, l);
    return (0, _io.run)(i, o$$1, r);
  });
}

const TimeLine$002ET$00602 = (0, _Types.declare)(function TimeLine$002ET$00602(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TimeLine$002ET$00602 = TimeLine$002ET$00602;

function TimeLine$$$return$0027(map) {
  return new TimeLine$002ET$00602(0, "TimeLine", [(0, _Array.ofSeq)((0, _Seq.sortWith)(_Util.compare, (0, _Seq.map)(function mapping(tuple) {
    return tuple[0];
  }, (0, _Map.toSeq)(map))), Array), map]);
}

function TimeLine$$$mergea(l$$1, r$$1) {
  const ll = l$$1.length | 0;
  const rl = r$$1.length | 0;

  if (ll === 0) {
    return r$$1;
  } else if (rl === 0) {
    return l$$1;
  } else {
    const rezl = (0, _Util.max)(_Util.comparePrimitives, ll, rl) | 0;
    return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
      return (0, _Seq.collect)(function (i$$1) {
        var r$$2, l$$2, r$$5, l$$5;
        const matchValue = [i$$1 < ll ? (0, _Option.some)(l$$1[i$$1]) : null, i$$1 < rl ? (0, _Option.some)(r$$1[i$$1]) : null];

        if (matchValue[0] != null) {
          if (matchValue[1] != null) {
            if (r$$2 = (0, _Option.value)(matchValue[1]), (l$$2 = (0, _Option.value)(matchValue[0]), (0, _Util.compare)(l$$2, r$$2) < 0)) {
              const l$$4 = (0, _Option.value)(matchValue[0]);
              const r$$4 = (0, _Option.value)(matchValue[1]);
              return (0, _Seq.append)((0, _Seq.singleton)(l$$4), (0, _Seq.delay)(function () {
                return (0, _Seq.singleton)(r$$4);
              }));
            } else {
              var $target$$11, l$$6, r$$6;

              if (matchValue[0] != null) {
                if (matchValue[1] != null) {
                  if (r$$5 = (0, _Option.value)(matchValue[1]), (l$$5 = (0, _Option.value)(matchValue[0]), (0, _Util.compare)(l$$5, r$$5) > 0)) {
                    $target$$11 = 0;
                    l$$6 = (0, _Option.value)(matchValue[0]);
                    r$$6 = (0, _Option.value)(matchValue[1]);
                  } else {
                    $target$$11 = 1;
                  }
                } else {
                  $target$$11 = 1;
                }
              } else {
                $target$$11 = 1;
              }

              switch ($target$$11) {
                case 0:
                  {
                    return (0, _Seq.append)((0, _Seq.singleton)(r$$6), (0, _Seq.delay)(function () {
                      return (0, _Seq.singleton)(l$$6);
                    }));
                  }

                case 1:
                  {
                    var $target$$12, l$$7;

                    if (matchValue[0] != null) {
                      if (matchValue[1] != null) {
                        $target$$12 = 0;
                        l$$7 = (0, _Option.value)(matchValue[0]);
                      } else {
                        $target$$12 = 1;
                      }
                    } else {
                      $target$$12 = 1;
                    }

                    switch ($target$$12) {
                      case 0:
                        {
                          return (0, _Seq.singleton)(l$$7);
                        }

                      case 1:
                        {
                          throw new _Types.MatchFailureException("C:/code/sakhe/core/new.fs", 47, 22);
                        }
                    }
                  }
              }
            }
          } else {
            const l$$3 = (0, _Option.value)(matchValue[0]);
            return (0, _Seq.singleton)(l$$3);
          }
        } else if (matchValue[1] != null) {
          const r$$3 = (0, _Option.value)(matchValue[1]);
          return (0, _Seq.singleton)(r$$3);
        } else {
          return (0, _Seq.empty)();
        }
      }, (0, _Seq.rangeNumber)(0, 1, rezl - 1));
    }), Array);
  }
}

function TimeLine$$$nextArrival(_arg1) {
  const a = _arg1.fields[0][0];
  return (0, _Array.tryHead)(a);
}

function TimeLine$$$findAppendPosition(a$$1, array) {
  const go = function go(l$$8, r$$7) {
    go: while (true) {
      if (l$$8 < r$$7) {
        const m = ~~((l$$8 + r$$7) / 2) | 0;

        if ((0, _Util.compare)(array[m], a$$1) > 0) {
          l$$8 = l$$8;
          r$$7 = m;
          continue go;
        } else {
          l$$8 = m + 1;
          r$$7 = r$$7;
          continue go;
        }
      } else {
        return l$$8 - 1 | 0;
      }
    }
  };

  return go(0, array.length) | 0;
}

function run(now, _arg1$$1) {
  const io = _arg1$$1;
  const o$$2 = (0, _o.return$0027)(function f$$6(map$$1, tupledArg) {
    var matchValue$$1, l$$9;
    return (matchValue$$1 = (0, _Map.tryFind)(tupledArg[0], map$$1), matchValue$$1 == null ? function (table$$2) {
      return (0, _Map.add)(tupledArg[0], tupledArg[1], table$$2);
    } : (l$$9 = matchValue$$1, function (table$$1) {
      return (0, _Map.add)(tupledArg[0], l$$9 + tupledArg[1], table$$1);
    }))(map$$1);
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));

  const go$$1 = function go$$1(io$$1) {
    (0, _io.run)(now, o$$2, (0, _io.pmap)((0, _Util.uncurry)(2, ring))(io$$1));
  };

  const ring = function ring(p) {
    return function (o$$3) {
      p(function (_arg2) {
        if (_arg2.tag === 1) {
          const io$$3 = _arg2.fields[1];
          const delay$$1 = _arg2.fields[0];
          const now$$1 = delay$$1 + now;
          o$$3([now$$1, (0, _io.contraMap)(function g() {
            return now$$1;
          }, io$$3)]);
        } else {
          const io$$2 = _arg2.fields[0];
          go$$1(io$$2);
        }
      });
    };
  };

  go$$1(io);
  return TimeLine$$$return$0027((0, _o.T$00602$$get_Value)(o$$2));
}

const see = return$0027(function (t, o$$4) {
  o$$4(OModule$$$delay(0, function (t$$1, o$$5) {
    o$$5(OModule$$$delay(10, function (t$$2, o$$6) {}));
  }));
  o$$4(OModule$$$now(function (t$$3, o$$7) {
    o$$7(OModule$$$delay(11, function (t$$4, o$$8) {}));
  }));
});
exports.see = see;

function setTask(delay$$5, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay$$5));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function tf() {
  return (0, _time.return$0027)(performance.now());
}

const rez = run(_time.zero, see);
exports.rez = rez;
(0, _String.toConsole)((0, _String.printf)("%A"))(rez);