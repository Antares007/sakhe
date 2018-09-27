"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.see = exports.TimeLine$002ET = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _Map = require("./fable-core.2.0.0-beta-005/Map");

var _Seq = require("./fable-core.2.0.0-beta-005/Seq");

var _Array = require("./fable-core.2.0.0-beta-005/Array");

var _Option = require("./fable-core.2.0.0-beta-005/Option");

var _o = require("./o");

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

const TimeLine$002ET = (0, _Types.declare)(function TimeLine$002ET(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TimeLine$002ET = TimeLine$002ET;

function TimeLine$$$return$0027(map) {
  return new TimeLine$002ET(0, "TimeLine", [(0, _Array.ofSeq)((0, _Seq.sortWith)(_Util.compare, (0, _Seq.map)(function mapping(tuple) {
    return tuple[0];
  }, (0, _Map.toSeq)(map))), Array), map]);
}

function TimeLine$$$mergea(l, r) {
  const ll = l.length | 0;
  const rl = r.length | 0;

  if (ll === 0) {
    return r;
  } else if (rl === 0) {
    return l;
  } else {
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
              var $target$$11, l$$5, r$$5;

              if (matchValue[0] != null) {
                if (matchValue[1] != null) {
                  if (r$$4 = (0, _Option.value)(matchValue[1]), (l$$4 = (0, _Option.value)(matchValue[0]), (0, _Util.compare)(l$$4, r$$4) > 0)) {
                    $target$$11 = 0;
                    l$$5 = (0, _Option.value)(matchValue[0]);
                    r$$5 = (0, _Option.value)(matchValue[1]);
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
                    return (0, _Seq.append)((0, _Seq.singleton)(r$$5), (0, _Seq.delay)(function () {
                      return (0, _Seq.singleton)(l$$5);
                    }));
                  }

                case 1:
                  {
                    var $target$$12, l$$6;

                    if (matchValue[0] != null) {
                      if (matchValue[1] != null) {
                        $target$$12 = 0;
                        l$$6 = (0, _Option.value)(matchValue[0]);
                      } else {
                        $target$$12 = 1;
                      }
                    } else {
                      $target$$12 = 1;
                    }

                    switch ($target$$12) {
                      case 0:
                        {
                          return (0, _Seq.singleton)(l$$6);
                        }

                      case 1:
                        {
                          throw new _Types.MatchFailureException("C:/code/sakhe/core/new.fs", 40, 22);
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
}

function TimeLine$$$findAppendPosition(a, array) {
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

function TimeLine$$$add(time, io) {
  return (0, _io.contraMap)(function g() {
    return time;
  }, io);
}

function TimeLine$$$toFlatTimeLineIORing(io$$2) {
  return (0, _io.return$0027)(function (now, o) {
    const o$$1 = (0, _o.proxy)(o);

    const go$$1 = function go$$1(io$$3) {
      (0, _io.run)(now, o$$1, (0, _io.pmap)((0, _Util.uncurry)(2, ring))(io$$3));
    };

    const ring = function ring(p) {
      return function (o$$2) {
        p(function (_arg1) {
          if (_arg1.tag === 1) {
            const io$$5 = _arg1.fields[1];
            const delay$$1 = _arg1.fields[0];
            o$$2([delay$$1 + now, io$$5]);
          } else {
            const io$$4 = _arg1.fields[0];
            go$$1(io$$4);
          }
        });
      };
    };

    go$$1(io$$2);
  });
}

function TimeLine$$$runFlatTimeLineIO(now$$1, io$$6) {
  const o$$3 = (0, _o.return$0027)(function f$$6(map$$1, tupledArg) {
    var matchValue$$1, l$$8;
    return (matchValue$$1 = (0, _Map.tryFind)(tupledArg[0], map$$1), matchValue$$1 == null ? function (table$$2) {
      return (0, _Map.add)(tupledArg[0], tupledArg[1], table$$2);
    } : (l$$8 = matchValue$$1, function (table$$1) {
      return (0, _Map.add)(tupledArg[0], l$$8 + tupledArg[1], table$$1);
    }))(map$$1);
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));
  (0, _io.run)(now$$1, o$$3, io$$6);
  return TimeLine$$$return$0027((0, _o.T$00602$$get_Value)(o$$3));
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