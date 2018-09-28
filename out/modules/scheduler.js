"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.mappend = mappend;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.timeStamp = timeStamp;
exports.run = run;
exports.O = exports.T = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _unit = require("./unit");

var _time = require("./time");

var _o = require("./o");

var _Map = require("./fable-core.2.0.0-beta-005/Map");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _timeline = require("./timeline");

var _option = require("./option");

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.0-beta-005/String");

const T = (0, _Types.declare)(function T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T = T;
const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return new T(0, "Scheduler", (0, _io.return$0027)(f));
}

function mappend(_arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return new T(0, "Scheduler", (0, _io.mappend)(function (arg00$0040, arg10$0040) {
    (0, _unit.mappend)(null, null);
  }, l, r));
}

function OModule$$$now(f$$2) {
  return new O(0, "Now", return$0027(f$$2));
}

function OModule$$$delay(delay, f$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function toFlatTimeLineIO(now, _arg1$$1) {
  const io = _arg1$$1.fields[0];
  return (0, _io.return$0027)(function (unitVar0, o) {
    const o$0027 = (0, _o.proxy)(o);

    const ring = function ring(p, o$$1) {
      p(function (_arg2$$1) {
        if (_arg2$$1.tag === 1) {
          const io$$2 = _arg2$$1.fields[1];
          const delay$$1 = _arg2$$1.fields[0];
          o$$1([delay$$1 + now, io$$2]);
        } else {
          const io$$1 = _arg2$$1.fields[0].fields[0];
          (0, _io.run)(now, o$0027, (0, _io.pmap)(ring)(io$$1));
        }
      });
    };

    (0, _io.run)(now, o$0027, (0, _io.pmap)(ring)(io));
  });
}

function runFlatTimeLineIO(io$$3) {
  const o$$2 = (0, _o.return$0027)(function (map, tupledArg) {
    var matchValue, l$$1;
    return (matchValue = (0, _Map.tryFind)(tupledArg[0], map), matchValue == null ? function (table$$1) {
      return (0, _Map.add)(tupledArg[0], tupledArg[1], table$$1);
    } : (l$$1 = matchValue, function (table) {
      return (0, _Map.add)(tupledArg[0], mappend(l$$1, tupledArg[1]), table);
    }))(map);
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));
  (0, _io.run)(null, o$$2, io$$3);
  return (0, _timeline.return$0027)((0, _o.T$00602$$get_Value)(o$$2));
}

function from(now$$1, io$$4) {
  return runFlatTimeLineIO(toFlatTimeLineIO(now$$1, io$$4));
}

function runTo(now$$2, l$$2) {
  const patternInput = (0, _timeline.foldUntil)(now$$2, function f$$7(l$$3, tupledArg$$1) {
    return (0, _io.mappend)(function (arg00$0040$$1, arg10$0040$$1) {
      (0, _unit.mappend)(null, null);
    }, l$$3, toFlatTimeLineIO(tupledArg$$1[0], tupledArg$$1[1]));
  }, (0, _io.empty)(), l$$2);
  const r$$3 = runFlatTimeLineIO(patternInput[0]);
  return (0, _option.mappend)(function (arg10$0040$$2, arg20$0040) {
    return (0, _timeline.mappend)(mappend, arg10$0040$$2, arg20$0040);
  }, patternInput[1], r$$3);
}

function timeStamp(s$$1) {
  console.timeStamp(s$$1);
}

function run(tf, timer, io$$7) {
  const now$$4 = _time.zero;
  const offSet = now$$4 - tf();
  const settable = (0, _disposable.SettableDisposable$$$$002Ector)();

  const nextRun = function nextRun(now$$5, _arg1$$2) {
    if (_arg1$$2 != null) {
      const timeline = _arg1$$2;
      timeStamp((0, _String.toText)((0, _String.printf)("setTimeOut %A"))(now$$5));
      (0, _disposable.SettableDisposable$$Set$$Z5A296901)(settable, timer((0, _time.DelayModule$$$fromTo)(now$$5, (0, _timeline.nextArrival)(timeline)), function () {
        const now$$6 = offSet + tf();
        timeStamp((0, _String.toText)((0, _String.printf)("timeOut %A"))(now$$6));
        nextRun(now$$6, runTo(now$$6, timeline));
      }));
    }
  };

  nextRun(now$$4, from(now$$4, io$$7));
  return settable;
}