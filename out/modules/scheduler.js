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

var _Types = require("./fable-core.2.0.10/Types");

var _abo = require("./abo");

var _time = require("./time");

var _pith = require("./pith");

var _unit = require("./unit");

var _o = require("./o");

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.10/String");

var _timeline = require("./timeline");

var _Util = require("./fable-core.2.0.10/Util");

var _Option = require("./fable-core.2.0.10/Option");

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

function Private$$$pair(a, b) {
  return [a, b];
}

function Private$$$ring(offset, canceled, p, o) {
  p(function (_arg1) {
    if (_arg1.tag === 1) {
      const io$$2 = _arg1.fields[1];
      const delay$$2 = _arg1.fields[0];
      const $arg$$8 = Private$$$pair(delay$$2, Private$$$map(offset, canceled, io$$2));
      o(new O$00601(1, "Delay", $arg$$8[0], $arg$$8[1]));
    } else {
      const io = _arg1.fields[0];
      o(new O$00601(0, "Now", Private$$$map(offset, canceled, io)));
    }
  });
}

function Private$$$map(offset$$1, canceled$$1, io$$4) {
  return new Private$002EOriginT(0, "OriginT", (0, _abo.return$0027)(function (now) {
    var i;

    if (canceled$$1.contents) {
      return (0, _pith.empty)();
    } else {
      if (io$$4.tag === 1) {
        const io$$6 = io$$4.fields[0];
        return (0, _pith.pmap)(function f$$11(p$$2, o$$2) {
          Private$$$ring(_time.zero - now, canceled$$1, p$$2, o$$2);
        }, (0, _abo.run)(now, io$$6));
      } else {
        const io$$5 = io$$4.fields[0];
        return (0, _pith.pmap)(function f$$10(p$$1, o$$1) {
          Private$$$ring(offset$$1, canceled$$1, p$$1, o$$1);
        }, (i = [now + offset$$1, offset$$1], function (arg10$0040$$1) {
          return (0, _abo.run)(i, arg10$0040$$1);
        })(io$$5));
      }
    }
  }));
}

function Private$$$mappend(_arg2, _arg1$$1) {
  const l = _arg2.fields[0];
  const r = _arg1$$1.fields[0];
  return new Private$002EOriginT(0, "OriginT", (0, _abo.mappend)(function (arg00$0040, arg10$0040$$4) {
    (0, _unit.mappend)(null, null);
  }, l, r));
}

function Private$$$runAllNows(now$$1, _arg1$$2) {
  const io$$7 = _arg1$$2.fields[0];
  return (0, _pith.return$0027)(function (o$$3) {
    const o$0027 = (0, _o.proxy)(o$$3);

    const ring = function ring(p$$3, o$$4) {
      p$$3(function (_arg2$$1) {
        if (_arg2$$1.tag === 1) {
          const io$$9 = _arg2$$1.fields[1];
          const delay$$3 = _arg2$$1.fields[0];
          o$$4([delay$$3 + now$$1, io$$9]);
        } else {
          const io$$8 = _arg2$$1.fields[0].fields[0];
          (0, _pith.run)(o$0027, (0, _abo.run)(now$$1, (0, _abo.pmap)(ring, io$$8)));
        }
      });
    };

    (0, _pith.run)(o$0027, (0, _abo.run)(now$$1, (0, _abo.pmap)(ring, io$$7)));
  });
}

function run(tf, timer) {
  let nextRun = null;
  let timerd = _disposable.empty;

  const delay$$4 = function delay$$4(timeline) {
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
        const o$$5 = (0, _o.return$0027)(function (arg10$0040$$13, arg20$0040) {
          return (0, _pith.mappend)(function (arg00$0040$$3, arg10$0040$$14) {
            (0, _unit.mappend)(null, null);
          }, arg10$0040$$13, arg20$0040);
        }, (0, _pith.empty)());
        (0, _pith.run)(o$$5, (0, _pith.omap)(function (tupledArg$$1) {
          return Private$$$runAllNows(tupledArg$$1[0], tupledArg$$1[1]);
        }, (0, _timeline.toPith)(l$$2)));
        return (0, _timeline.fromPith)(Private$$$mappend, (0, _o.T$00602$$get_Value)(o$$5));
      });
      const matchValue = (0, _option.mappend)(function (arg10$0040$$18, arg20$0040$$1) {
        return (0, _timeline.mappend)(Private$$$mappend, arg10$0040$$18, arg20$0040$$1);
      }, l$$3, patternInput$$1[1]);

      if (matchValue != null) {
        const timeline$$1 = matchValue;
        delay$$4(timeline$$1);
      }
    });
  };

  return function (io$$10) {
    const canceled$$2 = new _Types.FSharpRef(false);
    const now$$3 = tf();
    const io$$11 = Private$$$map(_time.zero - now$$3, canceled$$2, io$$10);
    const timeline$$2 = (0, _timeline.fromPith)(Private$$$mappend, Private$$$runAllNows(now$$3, io$$11));

    if (timeline$$2 != null) {
      const timeline$$3 = timeline$$2;
      delay$$4(timeline$$3);
    }

    return (0, _disposable.return$0027)(function () {
      canceled$$2.contents = true;
    });
  };
}