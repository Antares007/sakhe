"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.contraMap = contraMap;
exports.mappend = mappend;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.mappendTimeLine = mappendTimeLine;
exports.timeStamp = timeStamp;
exports.run = run;
exports.O = exports.T = void 0;

var _Types = require("./fable-core.2.0.1/Types");

var _abo = require("./abo");

var _unit = require("./unit");

var _time = require("./time");

var _o = require("./o");

var _Map = require("./fable-core.2.0.1/Map");

var _Util = require("./fable-core.2.0.1/Util");

var _timeline = require("./timeline");

var _option = require("./option");

var _Seq = require("./fable-core.2.0.1/Seq");

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.1/String");

const T = (0, _Types.declare)(function T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T = T;
const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return new T(0, "Scheduler", (0, _abo.return$0027)(f));
}

function contraMap(g, _arg1) {
  const abo = _arg1.fields[0];
  return new T(0, "Scheduler", (0, _abo.contraMap)(g, abo));
}

function mappend(_arg2, _arg1$$1) {
  const l = _arg2.fields[0];
  const r = _arg1$$1.fields[0];
  return new T(0, "Scheduler", (0, _abo.mappend)(function (arg00$0040, arg10$0040) {
    (0, _unit.mappend)(null, null);
  }, l, r));
}

function OModule$$$now(f$$2) {
  return new O(0, "Now", return$0027(f$$2));
}

function OModule$$$delay(delay, f$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function toTimeLineIO(now, offset, _arg1$$2) {
  const io = _arg1$$2.fields[0];
  return (0, _abo.return$0027)(function (unitVar0, o) {
    const o$0027 = (0, _o.proxy)(o);

    const ring = function ring(p, o$$1) {
      p(function (_arg2$$1) {
        if (_arg2$$1.tag === 1) {
          const io$$2 = _arg2$$1.fields[1].fields[0];
          const delay$$1 = _arg2$$1.fields[0];
          o$$1([delay$$1 + (now - offset), return$0027(function (tupledArg, o$$2) {
            (0, _abo.run)([tupledArg[0] - tupledArg[1] + offset, offset], (0, _o.proxy)(o$$2), io$$2);
          })]);
        } else {
          const io$$1 = _arg2$$1.fields[0].fields[0];
          (0, _abo.run)([now, offset], o$0027, (0, _abo.pmap)(ring)(io$$1));
        }
      });
    };

    (0, _abo.run)([now, offset], o$0027, (0, _abo.pmap)(ring)(io));
  });
}

function runTimeLineIO(io$$3) {
  const o$$3 = (0, _o.return$0027)(function (map, tupledArg$$1) {
    var matchValue, l$$1;
    return (matchValue = (0, _Map.tryFind)(tupledArg$$1[0], map), matchValue == null ? function (table$$1) {
      return (0, _Map.add)(tupledArg$$1[0], tupledArg$$1[1], table$$1);
    } : (l$$1 = matchValue, function (table) {
      return (0, _Map.add)(tupledArg$$1[0], mappend(l$$1, tupledArg$$1[1]), table);
    }))(map);
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));
  (0, _abo.run)(null, o$$3, io$$3);
  return (0, _timeline.return$0027)((0, _o.T$00602$$get_Value)(o$$3));
}

function mappendTimeLine(l$$2, r$$2) {
  return function (arg10$0040$$3) {
    return function (arg20$0040$$1) {
      return (0, _timeline.mappend)(function mappend$$1(arg10$0040$$1, arg20$0040) {
        return (0, _abo.mappend)(function (arg00$0040$$1, arg10$0040$$2) {
          (0, _unit.mappend)(null, null);
        }, arg10$0040$$1, arg20$0040);
      }, arg10$0040$$3, arg20$0040$$1);
    };
  };
}

function runTo(now$$1, l$$3) {
  const patternInput = (0, _timeline.takeUntil)(now$$1, l$$3);
  const r$$4 = (0, _Seq.fold)(function folder(l$$5, r$$3) {
    return (0, _option.mappend)(function mappend$$2(arg10$0040$$4, arg20$0040$$2) {
      return (0, _timeline.mappend)(mappend, arg10$0040$$4, arg20$0040$$2);
    }, l$$5, r$$3);
  }, null, (0, _Seq.map)(function mapping(tupledArg$$2) {
    return runTimeLineIO(toTimeLineIO(tupledArg$$2[0], (0, _time.OffsetModule$$$return$0027)(0), tupledArg$$2[1]));
  }, patternInput[0]));
  return (0, _option.mappend)(function (arg10$0040$$6, arg20$0040$$3) {
    return (0, _timeline.mappend)(mappend, arg10$0040$$6, arg20$0040$$3);
  }, patternInput[1], r$$4);
}

function timeStamp(s$$1) {
  console.timeStamp(s$$1);
  console.log(s$$1);
}

function run(tf, timer) {
  let timeline = null;
  let nextRun = null;
  let nextRunDisposable = _disposable.empty;
  const settable = (0, _disposable.SettableDisposable$$$$002Ector)();

  const scheduleNextRun = function scheduleNextRun() {
    var timeline$$1, nr;
    const matchValue$$1 = [nextRun, timeline];

    if (matchValue$$1[0] != null) {
      if (matchValue$$1[1] != null) {
        if (timeline$$1 = matchValue$$1[1], (nr = matchValue$$1[0], (0, _Util.compare)(nr, (0, _timeline.nextArrival)(timeline$$1)) <= 0)) {
          const nr$$1 = matchValue$$1[0];
          const timeline$$3 = matchValue$$1[1];
        } else {
          var $target$$14, nr$$2, timeline$$4;

          if (matchValue$$1[0] != null) {
            if (matchValue$$1[1] != null) {
              $target$$14 = 0;
              nr$$2 = matchValue$$1[0];
              timeline$$4 = matchValue$$1[1];
            } else {
              $target$$14 = 1;
            }
          } else {
            $target$$14 = 1;
          }

          switch ($target$$14) {
            case 0:
              {
                const now$$3 = tf();
                const delay$$3 = (0, _time.DelayModule$$$fromTo)(now$$3, (0, _timeline.nextArrival)(timeline$$4));
                setTimeout(delay$$3)(timeline$$4);
                break;
              }

            case 1:
              {
                throw new _Types.MatchFailureException("C:/code/sakhe/core/scheduler.fs", 72, 14);
                break;
              }
          }
        }
      } else {
        const nextRun$$1 = matchValue$$1[0];
      }
    } else if (matchValue$$1[1] != null) {
      const timeline$$2 = matchValue$$1[1];
      const now$$2 = tf();
      const delay$$2 = (0, _time.DelayModule$$$fromTo)(now$$2, (0, _timeline.nextArrival)(timeline$$2));
      setTimeout(delay$$2)(timeline$$2);
    }
  };

  const setTimeout = function setTimeout(delay$$4) {
    return function (tl) {
      const now$$4 = tf();
      timeStamp((0, _String.toText)((0, _String.printf)("setTimeOut %A"))(now$$4));
      nextRun = now$$4;
      (0, _disposable.SettableDisposable$$Set$$Z5A296901)(settable, timer(delay$$4, function () {
        var tupledArg$$3;
        timeStamp((tupledArg$$3 = [tf(), nextRun], (0, _String.toText)((0, _String.printf)("timeOut %A"))([tupledArg$$3[0], tupledArg$$3[1]])));
        nextRun = null;
        const now$$5 = tf();
        timeline = runTo(now$$5, tl);
        scheduleNextRun();
      }));
    };
  };

  return function (now$$6) {
    return function (io$$6) {
      const offSet = now$$6 - tf();

      const mappend$$4 = function mappend$$4(l$$6, r$$5) {
        return (0, _option.mappend)(function mappend$$3(arg10$0040$$8, arg20$0040$$4) {
          return (0, _timeline.mappend)(mappend, arg10$0040$$8, arg20$0040$$4);
        }, l$$6, r$$5);
      };

      timeline = mappend$$4(timeline, runTimeLineIO(toTimeLineIO(now$$6, offSet, io$$6)));
      scheduleNextRun();
      return settable;
    };
  };
}