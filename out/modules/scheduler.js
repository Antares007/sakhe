"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.O$$$now = O$$$now;
exports.O$$$nowOrigin = O$$$nowOrigin;
exports.O$$$delay = O$$$delay;
exports.O$$$delayOrigin = O$$$delayOrigin;
exports.ring = ring;
exports.map = map;
exports.mappend = mappend;
exports.run = run;
exports.OriginT = exports.O$00601 = exports.T = void 0;

var _Types = require("./fable-core.2.0.3/Types");

var _abo = require("./abo");

var _time = require("./time");

var _o = require("./o");

var _unit = require("./unit");

var _timeline = require("./timeline");

var _disposable = require("./disposable");

var _Util = require("./fable-core.2.0.3/Util");

var _String = require("./fable-core.2.0.3/String");

var _option = require("./option");

var _Option = require("./fable-core.2.0.3/Option");

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

const OriginT = (0, _Types.declare)(function OriginT(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.OriginT = OriginT;

function ring(offset, p, o) {
  p(function (_arg1) {
    if (_arg1.tag === 1) {
      const io$$1 = _arg1.fields[1];
      const delay$$2 = _arg1.fields[0];
      const $arg$$7 = [delay$$2, map(offset, io$$1)];
      o(new O$00601(1, "Delay", $arg$$7[0], $arg$$7[1]));
    } else {
      const io = _arg1.fields[0];
      o(new O$00601(0, "Now", map(offset, io)));
    }
  });
}

function map(offset$$1, _arg2) {
  if (_arg2.tag === 1) {
    const io$$4 = _arg2.fields[0];
    return new OriginT(0, "OriginT", (0, _abo.return$0027)(function (now$$1, o$$2) {
      (0, _abo.run)(now$$1, (0, _o.proxy)(o$$2), (0, _abo.pmap)(function (p$$2, o$$3) {
        ring(_time.zero - now$$1, p$$2, o$$3);
      }, io$$4));
    }));
  } else {
    const io$$2 = _arg2.fields[0];
    return new OriginT(0, "OriginT", (0, _abo.pmap)(function f$$9(p$$1, o$$1) {
      ring(offset$$1, p$$1, o$$1);
    }, (0, _abo.contraMap)(function g(now) {
      return [now + offset$$1, offset$$1];
    }, io$$2)));
  }
}

function mappend(_arg2$$1, _arg1$$1) {
  const l = _arg2$$1.fields[0];
  const r = _arg1$$1.fields[0];
  return new OriginT(0, "OriginT", (0, _abo.mappend)(function (arg00$0040, arg10$0040$$1) {
    (0, _unit.mappend)(null, null);
  }, l, r));
}

function runAllNows(now$$2, _arg1$$2) {
  const io$$5 = _arg1$$2.fields[0];
  return (0, _timeline.return$0027)(mappend, (0, _abo.return$0027)(function (unitVar0, o$$4) {
    const o$0027 = (0, _o.proxy)(o$$4);

    const ring$$1 = function ring$$1(p$$3, o$$5) {
      p$$3(function (_arg2$$2) {
        if (_arg2$$2.tag === 1) {
          const io$$7 = _arg2$$2.fields[1];
          const delay$$3 = _arg2$$2.fields[0];
          o$$5([delay$$3 + now$$2, io$$7]);
        } else {
          const io$$6 = _arg2$$2.fields[0].fields[0];
          (0, _abo.run)(now$$2, o$0027, (0, _abo.pmap)(ring$$1, io$$6));
        }
      });
    };

    (0, _abo.run)(now$$2, o$0027, (0, _abo.pmap)(ring$$1, io$$5));
  }));
}

function run(tf, timer) {
  let nextRun = null;
  const settable = (0, _disposable.SettableDisposable$$$$002Ector)();

  const delay$$4 = function delay$$4(nextArrival, timeline) {
    var tl, nr, tl$$2, nr$$2;
    nextRun = nextRun != null ? (tl = nextRun[1], (nr = nextRun[0], (0, _Util.compare)(nr, nextArrival) <= 0)) ? [nextRun[0], (0, _timeline.mappend)(mappend, nextRun[1], timeline)] : nextRun != null ? (tl$$2 = nextRun[1], (nr$$2 = nextRun[0], [nextArrival, (0, _timeline.mappend)(mappend, tl$$2, timeline)])) : (() => {
      throw new _Types.MatchFailureException("C:/code/sakhe/core/scheduler.fs", 63, 18);
    })() : [nextArrival, timeline];
    (0, _String.toConsole)((0, _String.printf)("<-"));
    (0, _disposable.SettableDisposable$$Set$$Z5A296901)(settable, timer((0, _time.DelayModule$$$fromTo)(tf(), nextArrival), function () {
      (0, _String.toConsole)((0, _String.printf)("->"));
      const patternInput = nextRun;
      nextRun = null;
      const patternInput$$1 = (0, _timeline.takeUntil)(tf(), patternInput[1]);
      const l$$4 = (0, _Option.defaultArg)(patternInput$$1[0], null, function (l$$2) {
        const o$$6 = (0, _o.contraMap)(function (tupledArg$$1) {
          return runAllNows(tupledArg$$1[0], tupledArg$$1[1]);
        }, (0, _o.return$0027)(function (l$$3, r$$2) {
          return (0, _option.mappend)(function mappend$$1(arg10$0040$$7, arg20$0040$$1) {
            return (0, _timeline.mappend)(mappend, arg10$0040$$7, arg20$0040$$1);
          }, l$$3, r$$2);
        }, null));
        (0, _abo.run)(null, o$$6, (0, _timeline.value)(l$$2));
        return (0, _o.T$00602$$get_Value)(o$$6);
      });
      const matchValue = (0, _option.mappend)(function (arg10$0040$$9, arg20$0040$$2) {
        return (0, _timeline.mappend)(mappend, arg10$0040$$9, arg20$0040$$2);
      }, l$$4, patternInput$$1[1]);

      if (matchValue != null) {
        const timeline$$1 = matchValue;
        const nextArrival$$1 = (0, _timeline.nextArrival)(timeline$$1);
        delay$$4(nextArrival$$1, timeline$$1);
      }
    }));
  };

  return function (io$$8) {
    const now$$4 = tf();
    const io$$9 = map(_time.zero - now$$4, io$$8);
    const timeline$$2 = runAllNows(now$$4, io$$9);

    if (timeline$$2 != null) {
      const timeline$$3 = timeline$$2;
      const nextArrival$$2 = (0, _timeline.nextArrival)(timeline$$3);
      delay$$4(nextArrival$$2, timeline$$3);
    }

    return settable;
  };
}