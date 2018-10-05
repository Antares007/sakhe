"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.O$$$now = O$$$now;
exports.O$$$nowOrigin = O$$$nowOrigin;
exports.O$$$delay = O$$$delay;
exports.O$$$delayOrigin = O$$$delayOrigin;
exports.run = run;
exports.O$00601 = exports.T = void 0;

var _Types = require("./fable-core.2.0.3/Types");

var _abo = require("./abo");

var _time = require("./time");

var _o = require("./o");

var _pith = require("./pith");

var _disposable = require("./disposable");

var _Util = require("./fable-core.2.0.3/Util");

var _unit = require("./unit");

var _timeline = require("./timeline");

var _String = require("./fable-core.2.0.3/String");

var _Option = require("./fable-core.2.0.3/Option");

var _option = require("./option");

const T = (0, _Types.declare)(function T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T = T;
const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function return$0027(f) {
  return new T(0, "Local", (0, _abo.return$0027)(f));
}

function O$$$now(f$$2) {
  return new O$00601(0, "Now", return$0027(f$$2));
}

function O$$$nowOrigin(f$$4) {
  return new O$00601(0, "Now", new T(1, "Origin", (0, _abo.return$0027)(f$$4)));
}

function O$$$delay(delay, f$$6) {
  return new O$00601(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$6));
}

function O$$$delayOrigin(delay$$1, f$$7) {
  return new O$00601(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay$$1), new T(1, "Origin", (0, _abo.return$0027)(f$$7)));
}

const Private$002EOriginT = (0, _Types.declare)(function Private$002EOriginT(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);

function Private$$$ring(offset, p, o) {
  p(function (_arg1) {
    if (_arg1.tag === 1) {
      const io$$1 = _arg1.fields[1];
      const delay$$2 = _arg1.fields[0];
      const $arg$$7 = [delay$$2, Private$$$map(offset, io$$1)];
      o(new O$00601(1, "Delay", $arg$$7[0], $arg$$7[1]));
    } else {
      const io = _arg1.fields[0];
      o(new O$00601(0, "Now", Private$$$map(offset, io)));
    }
  });
}

function Private$$$map(offset$$1, _arg2) {
  if (_arg2.tag === 1) {
    const io$$4 = _arg2.fields[0];
    return new Private$002EOriginT(0, "OriginT", (0, _abo.return$0027)(function (now$$1, o$$2) {
      (0, _abo.run)(now$$1, (0, _o.proxy)(o$$2), (0, _abo.pmap)(function (p$$2, o$$3) {
        Private$$$ring(_time.zero - now$$1, p$$2, o$$3);
      }, io$$4));
    }));
  } else {
    const io$$2 = _arg2.fields[0];
    return new Private$002EOriginT(0, "OriginT", (0, _abo.pmap)(function f$$9(p$$1, o$$1) {
      Private$$$ring(offset$$1, p$$1, o$$1);
    }, (0, _abo.contraMap)(function g(now) {
      return [now + offset$$1, offset$$1];
    }, io$$2)));
  }
}

function Private$$$runAllNows(now$$2, _arg1$$1) {
  const io$$5 = _arg1$$1.fields[0];
  return (0, _pith.return$0027)(function (o$$4) {
    const o$0027 = (0, _o.proxy)(o$$4);

    const ring = function ring(p$$3, o$$5) {
      p$$3(function (_arg2$$1) {
        if (_arg2$$1.tag === 1) {
          const io$$7 = _arg2$$1.fields[1];
          const delay$$3 = _arg2$$1.fields[0];
          o$$5([delay$$3 + now$$2, io$$7]);
        } else {
          const io$$6 = _arg2$$1.fields[0].fields[0];
          (0, _abo.run)(now$$2, o$0027, (0, _abo.pmap)(ring, io$$6));
        }
      });
    };

    (0, _abo.run)(now$$2, o$0027, (0, _abo.pmap)(ring, io$$5));
  });
}

function run(tf, timer) {
  let nextRun = null;
  const settable = (0, _disposable.SettableDisposable$$$$002Ector)();

  const delay$$4 = function delay$$4(now$$3, nextArrival, timeline) {
    var tl, nr, tl$$2, nr$$2;
    nextRun = nextRun != null ? (tl = nextRun[1], (nr = nextRun[0], (0, _Util.compare)(nr, nextArrival) <= 0)) ? [nextRun[0], (0, _timeline.mappend)(function (arg00$0040, arg10$0040$$2) {
      const l = arg00$0040.fields[0];
      const r = arg10$0040$$2.fields[0];
      return new Private$002EOriginT(0, "OriginT", (0, _abo.mappend)(function (arg00$0040$$1, arg10$0040$$3) {
        (0, _unit.mappend)(null, null);
      }, l, r));
    }, nextRun[1], timeline)] : nextRun != null ? (tl$$2 = nextRun[1], (nr$$2 = nextRun[0], [nextArrival, (0, _timeline.mappend)(function (arg00$0040$$2, arg10$0040$$4) {
      const l$$1 = arg00$0040$$2.fields[0];
      const r$$1 = arg10$0040$$4.fields[0];
      return new Private$002EOriginT(0, "OriginT", (0, _abo.mappend)(function (arg00$0040$$3, arg10$0040$$5) {
        (0, _unit.mappend)(null, null);
      }, l$$1, r$$1));
    }, tl$$2, timeline)])) : (() => {
      throw new _Types.MatchFailureException("C:/code/sakhe/core/scheduler.fs", 59, 18);
    })() : [nextArrival, timeline];
    (0, _String.toConsole)((0, _String.printf)("<-"));
    (0, _disposable.SettableDisposable$$Set$$Z5A296901)(settable, timer((0, _time.DelayModule$$$fromTo)(now$$3, nextArrival), function () {
      (0, _String.toConsole)((0, _String.printf)("->"));
      const now$$4 = tf();
      const patternInput = nextRun;
      nextRun = null;
      const patternInput$$1 = (0, _timeline.takeUntil)(now$$4, patternInput[1]);
      const l$$5 = (0, _Option.defaultArg)(patternInput$$1[0], null, function (l$$3) {
        const o$$6 = (0, _o.contraMap)(function (tupledArg$$1) {
          return Private$$$runAllNows(tupledArg$$1[0], tupledArg$$1[1]);
        }, (0, _o.return$0027)(function (arg10$0040$$7, arg20$0040$$1) {
          return (0, _pith.mappend)(function (arg00$0040$$4, arg10$0040$$8) {
            (0, _unit.mappend)(null, null);
          }, arg10$0040$$7, arg20$0040$$1);
        }, (0, _pith.empty)()));
        (0, _pith.run)(o$$6, (0, _timeline.toPith)(l$$3));
        return (0, _timeline.fromPith)(function (arg00$0040$$5, arg10$0040$$9) {
          const l$$4 = arg00$0040$$5.fields[0];
          const r$$3 = arg10$0040$$9.fields[0];
          return new Private$002EOriginT(0, "OriginT", (0, _abo.mappend)(function (arg00$0040$$6, arg10$0040$$10) {
            (0, _unit.mappend)(null, null);
          }, l$$4, r$$3));
        }, (0, _o.T$00602$$get_Value)(o$$6));
      });
      const matchValue = (0, _option.mappend)(function (arg10$0040$$11, arg20$0040$$2) {
        return (0, _timeline.mappend)(function (arg00$0040$$7, arg10$0040$$12) {
          const l$$6 = arg00$0040$$7.fields[0];
          const r$$4 = arg10$0040$$12.fields[0];
          return new Private$002EOriginT(0, "OriginT", (0, _abo.mappend)(function (arg00$0040$$8, arg10$0040$$13) {
            (0, _unit.mappend)(null, null);
          }, l$$6, r$$4));
        }, arg10$0040$$11, arg20$0040$$2);
      }, l$$5, patternInput$$1[1]);

      if (matchValue != null) {
        const timeline$$1 = matchValue;
        const nextArrival$$1 = (0, _timeline.nextArrival)(timeline$$1);
        delay$$4(now$$4, nextArrival$$1, timeline$$1);
      }
    }));
  };

  return function (io$$8) {
    const now$$6 = tf();
    const io$$9 = Private$$$map(_time.zero - now$$6, io$$8);
    const timeline$$2 = (0, _timeline.fromPith)(function (arg00$0040$$9, arg10$0040$$14) {
      const l$$7 = arg00$0040$$9.fields[0];
      const r$$5 = arg10$0040$$14.fields[0];
      return new Private$002EOriginT(0, "OriginT", (0, _abo.mappend)(function (arg00$0040$$10, arg10$0040$$15) {
        (0, _unit.mappend)(null, null);
      }, l$$7, r$$5));
    }, Private$$$runAllNows(now$$6, io$$9));

    if (timeline$$2 != null) {
      const timeline$$3 = timeline$$2;
      const nextArrival$$2 = (0, _timeline.nextArrival)(timeline$$3);
      delay$$4(now$$6, nextArrival$$2, timeline$$3);
    }

    return settable;
  };
}