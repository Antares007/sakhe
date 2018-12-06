"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$reflection = T$reflection;
exports.O$reflection = O$reflection;
exports.return$0027 = return$0027;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.run = run;
exports.O = exports.T = void 0;

var _Types = require("./fable-library.2.1.3/Types");

var _Reflection = require("./fable-library.2.1.3/Reflection");

var _pith = require("./pith");

var _time = require("./time");

var _unit = require("./unit");

var _disposable = require("./disposable");

var _String = require("./fable-library.2.1.3/String");

var _timeline = require("./timeline");

var _Util = require("./fable-library.2.1.3/Util");

var _Option = require("./fable-library.2.1.3/Option");

var _option = require("./option");

const T = (0, _Types.declare)(function Sakhe_Scheduler1_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T = T;

function T$reflection() {
  return (0, _Reflection.union)("Sakhe.Scheduler1.T", [], T, () => [["Local", [(0, _Reflection.lambda)(_Reflection.obj, (0, _pith.T$00602$reflection)(O$reflection(), _Reflection.unit))]]]);
}

const O = (0, _Types.declare)(function Sakhe_Scheduler1_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function O$reflection() {
  return (0, _Reflection.union)("Sakhe.Scheduler1.O", [], O, () => [["Now", [T$reflection()]], ["Delay", [_Reflection.obj, T$reflection()]]]);
}

function return$0027(f) {
  return new T(0, "Local", f);
}

function OModule$$$now(f$$1) {
  return new O(0, "Now", return$0027(f$$1));
}

function OModule$$$delay(delay, f$$3) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$3));
}

function Private$$$pair(a, b) {
  return [a, b];
}

function Private$$$ring(canceled, p, o) {
  return p(function (_arg2) {
    if (_arg2.tag === 1) {
      const io$$1 = _arg2.fields[1];
      const delay$$1 = _arg2.fields[0];
      const $arg$$4 = Private$$$pair(delay$$1, Private$$$map(canceled, io$$1));
      return o(new O(1, "Delay", $arg$$4[0], $arg$$4[1]));
    } else {
      const io = _arg2.fields[0];
      return o(new O(0, "Now", Private$$$map(canceled, io)));
    }
  });
}

function Private$$$map(canceled$$1, _arg1) {
  const io$$2 = _arg1.fields[0];
  return new T(0, "Local", function (now) {
    return canceled$$1.contents ? (0, _pith.empty)() : (0, _pith.pmap)(function f$$4(p$$1, o$$1) {
      Private$$$ring(canceled$$1, p$$1, o$$1);
    }, io$$2(now));
  });
}

function Private$$$mappend(_arg2$$1, _arg1$$1) {
  const l = _arg2$$1.fields[0];
  const r = _arg1$$1.fields[0];
  return new T(0, "Local", function (t) {
    return (0, _pith.mappend)(function (arg00$0040, arg10$0040$$3) {
      (0, _unit.mappend)(null, null);
    }, l(t), r(t));
  });
}

function Private$$$runAllNows(now$$1, _arg1$$2) {
  const io$$3 = _arg1$$2.fields[0];
  return (0, _pith.return$0027)(function (o$0027) {
    const ring = function ring(p$$2, o$$2) {
      p$$2(function (_arg2$$2) {
        if (_arg2$$2.tag === 1) {
          const io$$5 = _arg2$$2.fields[1];
          const delay$$2 = _arg2$$2.fields[0];
          o$$2([delay$$2 + now$$1, io$$5]);
        } else {
          const io$$4 = _arg2$$2.fields[0].fields[0];
          (0, _pith.run2)((0, _pith.pmap)(ring, io$$4(now$$1)), o$0027);
        }
      });
    };

    (0, _pith.run2)((0, _pith.pmap)(ring, io$$3(now$$1)), o$0027);
  });
}

function run(tf, timer) {
  let nextRun = null;
  let timerd = _disposable.empty;

  const schedule = function schedule(timeline) {
    var tl, nr;
    (0, _String.toConsole)((0, _String.printf)("<-"));
    const nextArrival = (0, _timeline.nextArrival)(timeline);

    if (nextRun != null) {
      if (tl = nextRun[1], (nr = nextRun[0], (0, _Util.compare)(nr, nextArrival) > 0)) {
        nextRun = [nextArrival, (0, _timeline.mappend)(Private$$$mappend, nextRun[1], timeline)];
        setTimer(nextArrival);
      } else {
        if (nextRun != null) {
          const tl$$2 = nextRun[1];
          const nr$$2 = nextRun[0];
          nextRun = [nr$$2, (0, _timeline.mappend)(Private$$$mappend, tl$$2, timeline)];
        } else {
          throw new Error("The match cases were incomplete");
        }
      }
    } else {
      nextRun = [nextArrival, timeline];
      setTimer(nextArrival);
    }
  };

  const setTimer = function setTimer(nextArrival$$1) {
    timerd.Dispose();
    timerd = timer((0, _time.DelayModule$$$fromTo)(tf(), nextArrival$$1), function () {
      (0, _String.toConsole)((0, _String.printf)("->"));
      const patternInput = nextRun;
      nextRun = null;
      const patternInput$$1 = (0, _timeline.takeUntil)(tf(), patternInput[1]);
      const l$$3 = (0, _Option.defaultArg)(patternInput$$1[0], null, function binder(l$$2) {
        let v = (0, _pith.empty)();
        (0, _pith.run2)((0, _pith.omap)(function (tupledArg$$1) {
          return Private$$$runAllNows(tupledArg$$1[0], tupledArg$$1[1]);
        }, (0, _timeline.toPith)(l$$2)), function (p$$3) {
          v = (0, _pith.mappend)(function (arg00$0040$$5, arg10$0040$$9) {
            (0, _unit.mappend)(null, null);
          }, v, p$$3);
        });
        return (0, _timeline.fromPith)(Private$$$mappend, v);
      });
      const matchValue = (0, _option.mappend)(function (arg10$0040$$11, arg20$0040) {
        return (0, _timeline.mappend)(Private$$$mappend, arg10$0040$$11, arg20$0040);
      }, l$$3, patternInput$$1[1]);

      if (matchValue != null) {
        const timeline$$1 = matchValue;
        schedule(timeline$$1);
      }
    });
  };

  return function (io$$6) {
    const canceled$$2 = new _Types.FSharpRef(false);
    const now$$3 = tf();
    const io$$7 = Private$$$map(canceled$$2, io$$6);
    const timeline$$2 = (0, _timeline.fromPith)(Private$$$mappend, Private$$$runAllNows(now$$3, io$$7));

    if (timeline$$2 != null) {
      const timeline$$3 = timeline$$2;
      schedule(timeline$$3);
    }

    return (0, _disposable.return$0027)(function () {
      canceled$$2.contents = true;
    });
  };
}