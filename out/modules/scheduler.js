"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.contraMap = contraMap;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.run = run;
exports.O = exports.T = void 0;

var _Types = require("./fable-core.2.0.2/Types");

var _abo = require("./abo");

var _time = require("./time");

var _o = require("./o");

var _timeline = require("./timeline");

var _disposable = require("./disposable");

var _Util = require("./fable-core.2.0.2/Util");

var _String = require("./fable-core.2.0.2/String");

var _option = require("./option");

var _Option = require("./fable-core.2.0.2/Option");

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

function OModule$$$now(f$$2) {
  return new O(0, "Now", return$0027(f$$2));
}

function OModule$$$delay(delay, f$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function runAllNows(_arg1$$1, _arg2) {
  const io = _arg2.fields[0];
  return (0, _timeline.return$0027)((0, _abo.return$0027)(function (unitVar0, o) {
    const o$0027 = (0, _o.proxy)(o);

    const ring = function ring(p, o$$1) {
      p(function (_arg3) {
        if (_arg3.tag === 1) {
          const io$$2 = _arg3.fields[1];
          const delay$$1 = _arg3.fields[0];
          o$$1([[delay$$1 + _arg1$$1[0], _arg1$$1[1]], contraMap(function (tupledArg) {
            return [tupledArg[0] + tupledArg[1], tupledArg[1]];
          }, io$$2)]);
        } else {
          const io$$1 = _arg3.fields[0].fields[0];
          (0, _abo.run)([_arg1$$1[0], _arg1$$1[1]], o$0027, (0, _abo.pmap)(ring)(io$$1));
        }
      });
    };

    (0, _abo.run)([_arg1$$1[0], _arg1$$1[1]], o$0027, (0, _abo.pmap)(ring)(io));
  }));
}

function run(tf, timer) {
  let nextRun = null;
  const settable = (0, _disposable.SettableDisposable$$$$002Ector)();

  const delay$$2 = function delay$$2(nextArrival) {
    return function (timeline) {
      var tl, nr, tl$$2, nr$$2;
      nextRun = nextRun != null ? (tl = nextRun[1], (nr = nextRun[0], (0, _Util.compare)(nr, nextArrival) <= 0)) ? [nextRun[0], (0, _timeline.mappend)(nextRun[1], timeline)] : nextRun != null ? (tl$$2 = nextRun[1], (nr$$2 = nextRun[0], [nextArrival, (0, _timeline.mappend)(tl$$2, timeline)])) : (() => {
        throw new _Types.MatchFailureException("C:/code/sakhe/core/scheduler.fs", 45, 18);
      })() : [nextArrival, timeline];
      (0, _String.toConsole)((0, _String.printf)("<-"));
      (0, _disposable.SettableDisposable$$Set$$Z5A296901)(settable, timer((0, _time.DelayModule$$$fromTo)(tf(), nextArrival), function () {
        (0, _String.toConsole)((0, _String.printf)("->"));
        const patternInput = nextRun;
        nextRun = null;
        const patternInput$$1 = (0, _timeline.takeUntil)(tf(), patternInput[1]);
        const l$$3 = (0, _Option.defaultArg)(patternInput$$1[0], null, function (l$$1) {
          const o$$2 = (0, _o.contraMap)(function (tupledArg$$1) {
            return runAllNows(tupledArg$$1[0], tupledArg$$1[1]);
          }, (0, _o.return$0027)(function (l$$2, r$$1) {
            return (0, _option.mappend)(_timeline.mappend, l$$2, r$$1);
          }, null));
          (0, _abo.run)(null, o$$2, (0, _timeline.value)(l$$1));
          return (0, _o.T$00602$$get_Value)(o$$2);
        });
        add((0, _option.mappend)(_timeline.mappend, l$$3, patternInput$$1[1]));
      }));
    };
  };

  const add = function add(_arg1$$2) {
    if (_arg1$$2 != null) {
      const timeline$$1 = _arg1$$2;
      const nextArrival$$1 = (0, _timeline.nextArrival)(timeline$$1);
      delay$$2(nextArrival$$1)(timeline$$1);
    }
  };

  return function (localNow) {
    return function (io$$3) {
      const offSet = localNow - tf();
      const now$$2 = tf();
      const timeline$$2 = runAllNows([now$$2, offSet], io$$3);
      add(timeline$$2);
      return settable;
    };
  };
}