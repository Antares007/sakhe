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

var _option = require("./option");

const T = (0, _Types.declare)(function Sakhe_Scheduler_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T = T;

function T$reflection() {
  return (0, _Reflection.union)("Sakhe.Scheduler.T", [], T, () => [["Local", [(0, _Reflection.lambda)(_Reflection.obj, (0, _pith.T$00602$reflection)(O$reflection(), _Reflection.unit))]]]);
}

const O = (0, _Types.declare)(function Sakhe_Scheduler_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function O$reflection() {
  return (0, _Reflection.union)("Sakhe.Scheduler.O", [], O, () => [["Now", [T$reflection()]], ["Delay", [_Reflection.obj, T$reflection()]]]);
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

function Private$$$map(canceled, offset, _arg1) {
  const io = _arg1.fields[0];
  return new T(0, "Local", function (now) {
    return canceled.contents ? (0, _pith.empty)() : (0, _pith.pmap)(function (p, o) {
      p(function (_arg2) {
        if (_arg2.tag === 1) {
          const io$$2 = _arg2.fields[1];
          const delay$$1 = _arg2.fields[0];
          o(new O(1, "Delay", delay$$1, Private$$$map(canceled, offset, io$$2)));
        } else {
          const io$$1 = _arg2.fields[0];
          o(new O(0, "Now", Private$$$map(canceled, offset, io$$1)));
        }
      });
    }, io(now + offset));
  });
}

function Private$$$mappend(_arg2$$1, _arg1$$1) {
  const l = _arg2$$1.fields[0];
  const r = _arg1$$1.fields[0];
  return new T(0, "Local", function (t) {
    return (0, _pith.mappend)(function (arg00$0040, arg10$0040$$1) {
      (0, _unit.mappend)(null, null);
    }, l(t), r(t));
  });
}

function Private$$$runAllNows(now$$1, _arg1$$2) {
  const io$$3 = _arg1$$2.fields[0];
  return (0, _pith.return$0027)(function (o$0027) {
    const ring = function ring(p$$1, o$$1) {
      p$$1(function (_arg2$$2) {
        if (_arg2$$2.tag === 1) {
          const io$$5 = _arg2$$2.fields[1];
          const delay$$2 = _arg2$$2.fields[0];
          o$$1([delay$$2 + now$$1, io$$5]);
        } else {
          const io$$4 = _arg2$$2.fields[0].fields[0];
          (0, _pith.run)(o$0027, (0, _pith.pmap)(ring, io$$4(now$$1)));
        }
      });
    };

    (0, _pith.run)(o$0027, (0, _pith.pmap)(ring, io$$3(now$$1)));
  });
}

function run(tf, timer) {
  let nextRun = null;
  let timerd = _disposable.empty;

  const schedule = function schedule(_arg1$$3) {
    var tl, nr;

    if (_arg1$$3 != null) {
      const timeline = _arg1$$3;
      (0, _String.toConsole)((0, _String.printf)("<-"));
      const patternInput = (0, _timeline.getBounds)(timeline);

      if (nextRun != null) {
        if (tl = nextRun[1], (nr = nextRun[0], (0, _Util.compare)(nr, patternInput[0]) > 0)) {
          nextRun = [patternInput[0], (0, _timeline.mappend)(Private$$$mappend, nextRun[1], timeline)];
          timerd.Dispose();
          timerd = timer((0, _time.DelayModule$$$fromTo)(tf(), patternInput[0]), onTimer);
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
        nextRun = [patternInput[0], timeline];
        timerd = timer((0, _time.DelayModule$$$fromTo)(tf(), patternInput[0]), onTimer);
      }
    }
  };

  const onTimer = function onTimer() {
    (0, _String.toConsole)((0, _String.printf)("->"));
    const patternInput$$1 = nextRun;
    nextRun = null;
    let p$$2 = (0, _pith.empty)();
    const r$$1 = (0, _pith.run)(function (tupledArg) {
      p$$2 = (0, _pith.mappend)(function (arg00$0040$$3, arg10$0040$$7) {
        (0, _unit.mappend)(null, null);
      }, p$$2, Private$$$runAllNows(tupledArg[0], tupledArg[1]));
    }, (0, _timeline.runTo)(tf(), patternInput$$1[1]));
    const l$$1 = (0, _timeline.fromPith)(Private$$$mappend, p$$2);
    schedule((0, _option.mappend)(function (l$$2, r$$2) {
      return (0, _timeline.mappend)(Private$$$mappend, l$$2, r$$2);
    }, l$$1, r$$1));
  };

  return function (io$$7) {
    const canceled$$1 = new _Types.FSharpRef(false);
    const now$$2 = tf();
    const io$$8 = Private$$$map(canceled$$1, _time.zero - now$$2, io$$7);
    schedule((0, _timeline.fromPith)(Private$$$mappend, Private$$$runAllNows(now$$2, io$$8)));
    return (0, _disposable.return$0027)(function () {
      canceled$$1.contents = true;
    });
  };
}