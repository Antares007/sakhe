"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.mappend = mappend;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.toFlatTimeLineIO = toFlatTimeLineIO;
exports.runFlatTimeLineIO = runFlatTimeLineIO;
exports.from = from;
exports.runTo = runTo;
exports.see = see;
exports.d = exports.O = exports.T = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

var _o = require("./o");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _Map = require("./fable-core.2.0.0-beta-005/Map");

var _timeline = require("./timeline");

var _Seq = require("./fable-core.2.0.0-beta-005/Seq");

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
  return new T(0, "Scheduler", (0, _io.mappend)(function (unitVar0, unitVar1) {}, l, r));
}

function OModule$$$now(f$$2) {
  return new O(0, "Now", return$0027(f$$2));
}

function OModule$$$delay(delay, f$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function toFlatTimeLineIO(now, _arg1$$1) {
  const io = _arg1$$1.fields[0];
  return (0, _io.return$0027)(function (unitVar0$$1, o) {
    const o$$1 = (0, _o.proxy)(o);

    const go = function go(io$$1) {
      (0, _io.run)(now, o$$1, (0, _io.pmap)((0, _Util.uncurry)(2, ring))(io$$1));
    };

    const ring = function ring(p) {
      return function (o$$2) {
        p(function (_arg2$$1) {
          if (_arg2$$1.tag === 1) {
            const io$$3 = _arg2$$1.fields[1];
            const delay$$1 = _arg2$$1.fields[0];
            o$$2([delay$$1 + now, io$$3]);
          } else {
            const io$$2 = _arg2$$1.fields[0].fields[0];
            go(io$$2);
          }
        });
      };
    };

    go(io);
  });
}

function runFlatTimeLineIO(io$$4) {
  const o$$3 = (0, _o.return$0027)(function f$$6(map, tupledArg) {
    var matchValue, l$$1;
    return (matchValue = (0, _Map.tryFind)(tupledArg[0], map), matchValue == null ? function (table$$1) {
      return (0, _Map.add)(tupledArg[0], tupledArg[1], table$$1);
    } : (l$$1 = matchValue, function (table) {
      return (0, _Map.add)(tupledArg[0], mappend(l$$1, tupledArg[1]), table);
    }))(map);
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));
  (0, _io.run)(null, o$$3, io$$4);
  return (0, _timeline.return$0027)((0, _o.T$00602$$get_Value)(o$$3));
}

function from(now$$1, io$$5) {
  return runFlatTimeLineIO(toFlatTimeLineIO(now$$1, io$$5));
}

function runTo(now$$2, l$$2) {
  var lm, la, rm, ra;
  const patternInput = (0, _timeline.foldUntil)(now$$2, function f$$7(l$$3, tupledArg$$1) {
    return (0, _io.mappend)(function (unitVar0$$2, unitVar1$$1) {}, l$$3, toFlatTimeLineIO(tupledArg$$1[0], tupledArg$$1[1]));
  }, (0, _io.empty)(), l$$2);
  const r$$3 = runFlatTimeLineIO(patternInput[0]);
  const matchValue$$1 = [patternInput[1], r$$3];

  if (matchValue$$1[0] != null) {
    if (matchValue$$1[1] != null) {
      const l$$6 = matchValue$$1[0];
      const r$$5 = matchValue$$1[1];
      return lm = l$$6.fields[0][1], (la = l$$6.fields[0][0], (rm = r$$5.fields[0][1], (ra = r$$5.fields[0][0], new _timeline.T$00602(0, "TimeLine", [(0, _timeline.mergea)(la, ra), (0, _Map.ofSeq)((0, _Seq.delay)(function () {
        return (0, _Seq.append)((0, _Seq.map)(function mapping(tupledArg$$2) {
          const matchValue$$2 = (0, _Map.tryFind)(tupledArg$$2[0], rm);

          if (matchValue$$2 != null) {
            const rv = matchValue$$2;
            return [tupledArg$$2[0], mappend(tupledArg$$2[1], rv)];
          } else {
            return [tupledArg$$2[0], tupledArg$$2[1]];
          }
        }, (0, _Map.toSeq)(lm)), (0, _Seq.delay)(function () {
          return (0, _Seq.filter)(function predicate(tupledArg$$3) {
            return !(0, _Map.containsKey)(tupledArg$$3[0], lm);
          }, (0, _Map.toSeq)(rm));
        }));
      }), {
        Compare: _Util.compare
      })]))));
    } else {
      const l$$5 = matchValue$$1[0];
      return l$$5;
    }
  } else if (matchValue$$1[1] != null) {
    const r$$4 = matchValue$$1[1];
    return r$$4;
  } else {
    return null;
  }
}

const d = (0, _disposable.SettableDisposable$$$$002Ector)();
exports.d = d;

function see() {
  return return$0027(function (t, o$$4) {
    (0, _String.toConsole)((0, _String.printf)("1.now: %A"))(t);
    o$$4(OModule$$$now(function (t$$1, o$$5) {
      (0, _String.toConsole)((0, _String.printf)("2.now %A"))(t$$1);
      o$$5(OModule$$$delay(1000, function (t$$2, o$$6) {
        (0, _String.toConsole)((0, _String.printf)("3.delay 1000: %A"))(t$$2);
        d.Dispose();
        o$$6(OModule$$$delay(1000, function (t$$3, o$$7) {
          (0, _String.toConsole)((0, _String.printf)("3.1.delay 1000: %A"))(t$$3);
        }));
      }));
    }));
    o$$4(OModule$$$now(function (t$$4, o$$8) {
      (0, _String.toConsole)((0, _String.printf)("4.now: %A"))(t$$4);
      o$$8(OModule$$$delay(1000, function (t$$5, o$$9) {
        (0, _String.toConsole)((0, _String.printf)("5.delay 1000: %A"))(t$$5);
        o$$9(OModule$$$delay(1000, function (t$$6, o$$10) {
          (0, _String.toConsole)((0, _String.printf)("5.1.delay 1000: %A"))(t$$6);
        }));
      }));
    }));
  });
}

function timer(delay$$6, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay$$6));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function tf() {
  return (0, _time.return$0027)(Math.floor(performance.now()));
}

(0, _disposable.SettableDisposable$$Set$$Z5A296901)(d, (() => {
  const tf$$1 = function tf$$1() {
    return tf();
  };

  const now$$4 = _time.zero;
  const offSet = now$$4 - tf$$1();
  const settable = (0, _disposable.SettableDisposable$$$$002Ector)();

  const nextRun = function nextRun(now$$5, _arg1$$4) {
    if (_arg1$$4 != null) {
      const timeline = _arg1$$4;
      (0, _String.toConsole)((0, _String.printf)("setTimeOut %A"))(now$$5);
      (0, _disposable.SettableDisposable$$Set$$Z5A296901)(settable, function timer$$1(delay$$7) {
        return function (task$$1) {
          return timer(delay$$7, task$$1);
        };
      }((0, _time.DelayModule$$$fromTo)(now$$5, (0, _timeline.nextArrival)(timeline)))(function () {
        const now$$6 = offSet + tf$$1();
        (0, _String.toConsole)((0, _String.printf)("timeOut %A"))(now$$6);
        nextRun(now$$6, runTo(now$$6, timeline));
      }));
    }
  };

  nextRun(now$$4, from(now$$4, see()));
  return settable;
})());