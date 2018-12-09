"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S$002ET$reflection = S$002ET$reflection;
exports.S$002EO$reflection = S$002EO$reflection;
exports.S$$$mappend = S$$$mappend;
exports.S$$$ring = S$$$ring;
exports.S$$$runAllNows = S$$$runAllNows;
exports.S$$$run = S$$$run;
exports.Scheduler$002ET$reflection = Scheduler$002ET$reflection;
exports.Scheduler$002EO$reflection = Scheduler$002EO$reflection;
exports.Scheduler$$$return$0027 = Scheduler$$$return$0027;
exports.Scheduler$002EOModule$$$now = Scheduler$002EOModule$$$now;
exports.Scheduler$002EOModule$$$delay = Scheduler$002EOModule$$$delay;
exports.Scheduler$$$run = Scheduler$$$run;
exports.Scheduler$002EO = exports.Scheduler$002ET = exports.S$002EO = exports.S$002ET = void 0;

var _Types = require("./fable-library.2.1.6/Types");

var _Reflection = require("./fable-library.2.1.6/Reflection");

var _pith = require("./pith");

var _unit = require("./unit");

var _disposable = require("./disposable");

var _String = require("./fable-library.2.1.6/String");

var _timeline = require("./timeline");

var _Util = require("./fable-library.2.1.6/Util");

var _option = require("./option");

var _time = require("./time");

const S$002ET = (0, _Types.declare)(function Sakhe_S_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.S$002ET = S$002ET;

function S$002ET$reflection() {
  return (0, _Reflection.union)("Sakhe.S.T", [], S$002ET, () => [["Schedule", [(0, _Reflection.lambda)(_Reflection.float64, (0, _pith.Pith$00602$reflection)(S$002EO$reflection(), _Reflection.unit))]]]);
}

const S$002EO = (0, _Types.declare)(function Sakhe_S_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.S$002EO = S$002EO;

function S$002EO$reflection() {
  return (0, _Reflection.union)("Sakhe.S.O", [], S$002EO, () => [["Local", [S$002ET$reflection()]], ["Origin", [S$002ET$reflection()]], ["Delay", [_Reflection.float64, S$002ET$reflection()]]]);
}

function S$$$mappend(_arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return new S$002ET(0, "Schedule", function (t) {
    return (0, _pith.P$$$mappend)(function (arg00$0040, arg10$0040) {
      (0, _unit.mappend)(null, null);
    }, l(t), r(t));
  });
}

function S$$$ring(canceled, offset, _arg1$$1) {
  const io = _arg1$$1.fields[0];
  return new S$002ET(0, "Schedule", function (now) {
    return canceled.contents ? (0, _pith.P$$$empty)() : (0, _pith.P$$$pmap)(function (p, o) {
      p(function (_arg2$$1) {
        switch (_arg2$$1.tag) {
          case 1:
            {
              const io$$2 = _arg2$$1.fields[0];
              o(new S$002EO(1, "Origin", S$$$ring(canceled, 0, io$$2)));
              break;
            }

          case 2:
            {
              const io$$3 = _arg2$$1.fields[1];
              const delay = _arg2$$1.fields[0];
              o(new S$002EO(2, "Delay", delay, S$$$ring(canceled, offset, io$$3)));
              break;
            }

          default:
            {
              const io$$1 = _arg2$$1.fields[0];
              o(new S$002EO(0, "Local", S$$$ring(canceled, 0 - now, io$$1)));
            }
        }
      });
    }, io(now + offset));
  });
}

function S$$$runAllNows(now$$1, _arg1$$2) {
  const io$$4 = _arg1$$2.fields[0];
  return new _pith.Pith$00602(0, "P", function (o$0027) {
    const ring = function ring(p$$1, o$$1) {
      p$$1(function (_arg2$$2) {
        switch (_arg2$$2.tag) {
          case 1:
            {
              const io$$6 = _arg2$$2.fields[0].fields[0];
              (0, _pith.P$$$run)(o$0027, (0, _pith.P$$$pmap)(ring, io$$6(now$$1)));
              break;
            }

          case 2:
            {
              const io$$7 = _arg2$$2.fields[1];
              const delay$$1 = _arg2$$2.fields[0];
              o$$1([delay$$1 + now$$1, io$$7]);
              break;
            }

          default:
            {
              const io$$5 = _arg2$$2.fields[0].fields[0];
              (0, _pith.P$$$run)(o$0027, (0, _pith.P$$$pmap)(ring, io$$5(now$$1)));
            }
        }
      });
    };

    (0, _pith.P$$$run)(o$0027, (0, _pith.P$$$pmap)(ring, io$$4(now$$1)));
  });
}

function S$$$run(tf, timer) {
  let nextRun = null;
  let timerd = _disposable.empty;

  const schedule = function schedule(_arg1$$3) {
    var tl, nr;

    if (_arg1$$3 != null) {
      const timeline = _arg1$$3;
      (0, _String.toConsole)((0, _String.printf)("<-"));
      const patternInput = (0, _timeline.getBounds)(timeline);
      const now$$2 = tf();

      if (nextRun != null) {
        if (tl = nextRun[1], (nr = nextRun[0], nr > patternInput[0])) {
          nextRun = [patternInput[0], (0, _timeline.mappend)(S$$$mappend, nextRun[1], timeline)];
          timerd.Dispose();
          timerd = timer((0, _Util.max)(_Util.comparePrimitives, patternInput[0] - now$$2, 0), onTimer);
        } else {
          if (nextRun != null) {
            const tl$$2 = nextRun[1];
            const nr$$2 = nextRun[0];
            nextRun = [nr$$2, (0, _timeline.mappend)(S$$$mappend, tl$$2, timeline)];
          } else {
            throw new Error("The match cases were incomplete");
          }
        }
      } else {
        nextRun = [patternInput[0], timeline];
        timerd = timer((0, _Util.max)(_Util.comparePrimitives, patternInput[0] - now$$2, 0), onTimer);
      }
    }
  };

  const onTimer = function onTimer() {
    (0, _String.toConsole)((0, _String.printf)("->"));
    const patternInput$$1 = nextRun;
    nextRun = null;
    let p$$2 = (0, _pith.P$$$empty)();
    const now$$3 = tf();
    const l$$1 = (0, _pith.P$$$run)(function (tio) {
      p$$2 = (0, _pith.P$$$mappend)(function (arg00$0040$$3, arg10$0040$$8) {
        (0, _unit.mappend)(null, null);
      }, p$$2, S$$$runAllNows(tio[0], tio[1]));
    }, (0, _timeline.runTo)(now$$3, patternInput$$1[1]));
    schedule((0, _option.mappend)(function (l$$2, r$$1) {
      return (0, _timeline.mappend)(S$$$mappend, l$$2, r$$1);
    }, l$$1, (0, _timeline.fromPith)(S$$$mappend, p$$2)));
  };

  return function (m) {
    const canceled$$1 = new _Types.FSharpRef(false);
    const now$$5 = tf();
    const offset$$1 = 0 - now$$5;
    let io$$11;

    switch (m.tag) {
      case 1:
        {
          const io$$9 = m.fields[0];
          io$$11 = S$$$ring(canceled$$1, 0, io$$9);
          break;
        }

      case 2:
        {
          const io$$10 = m.fields[1];
          const delay$$2 = m.fields[0];
          io$$11 = S$$$ring(canceled$$1, offset$$1, new S$002ET(0, "Schedule", function (t$$1) {
            return new _pith.Pith$00602(0, "P", function (o$$3) {
              o$$3(new S$002EO(2, "Delay", delay$$2, io$$10));
            });
          }));
          break;
        }

      default:
        {
          const io$$8 = m.fields[0];
          io$$11 = S$$$ring(canceled$$1, offset$$1, io$$8);
        }
    }

    const p$$3 = S$$$runAllNows(now$$5, io$$11);
    const timeline$$1 = (0, _timeline.fromPith)(S$$$mappend, p$$3);
    schedule(timeline$$1);
    return (0, _disposable.return$0027)(function () {
      canceled$$1.contents = true;
    });
  };
}

const Scheduler$002ET = (0, _Types.declare)(function Sakhe_Scheduler_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Scheduler$002ET = Scheduler$002ET;

function Scheduler$002ET$reflection() {
  return (0, _Reflection.union)("Sakhe.Scheduler.T", [], Scheduler$002ET, () => [["Local", [(0, _Reflection.lambda)(_Reflection.obj, (0, _pith.Pith$00602$reflection)(Scheduler$002EO$reflection(), _Reflection.unit))]]]);
}

const Scheduler$002EO = (0, _Types.declare)(function Sakhe_Scheduler_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Scheduler$002EO = Scheduler$002EO;

function Scheduler$002EO$reflection() {
  return (0, _Reflection.union)("Sakhe.Scheduler.O", [], Scheduler$002EO, () => [["Now", [Scheduler$002ET$reflection()]], ["Delay", [_Reflection.obj, Scheduler$002ET$reflection()]]]);
}

function Scheduler$$$return$0027(f$$4) {
  return new Scheduler$002ET(0, "Local", f$$4);
}

function Scheduler$002EOModule$$$now(f$$5) {
  return new Scheduler$002EO(0, "Now", Scheduler$$$return$0027(f$$5));
}

function Scheduler$002EOModule$$$delay(delay$$3, f$$7) {
  return new Scheduler$002EO(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay$$3), Scheduler$$$return$0027(f$$7));
}

function Scheduler$002EPrivate$$$map(canceled$$2, offset$$2, _arg1$$4) {
  const io$$12 = _arg1$$4.fields[0];
  return new Scheduler$002ET(0, "Local", function (now$$6) {
    return canceled$$2.contents ? (0, _pith.P$$$empty)() : (0, _pith.P$$$pmap)(function (p$$4, o$$4) {
      p$$4(function (_arg2$$3) {
        if (_arg2$$3.tag === 1) {
          const io$$14 = _arg2$$3.fields[1];
          const delay$$4 = _arg2$$3.fields[0];
          o$$4(new Scheduler$002EO(1, "Delay", delay$$4, Scheduler$002EPrivate$$$map(canceled$$2, offset$$2, io$$14)));
        } else {
          const io$$13 = _arg2$$3.fields[0];
          o$$4(new Scheduler$002EO(0, "Now", Scheduler$002EPrivate$$$map(canceled$$2, offset$$2, io$$13)));
        }
      });
    }, io$$12(now$$6 + offset$$2));
  });
}

function Scheduler$002EPrivate$$$mappend(_arg2$$4, _arg1$$5) {
  const l$$3 = _arg2$$4.fields[0];
  const r$$2 = _arg1$$5.fields[0];
  return new Scheduler$002ET(0, "Local", function (t$$2) {
    return (0, _pith.P$$$mappend)(function (arg00$0040$$7, arg10$0040$$13) {
      (0, _unit.mappend)(null, null);
    }, l$$3(t$$2), r$$2(t$$2));
  });
}

function Scheduler$002EPrivate$$$runAllNows(now$$7, _arg1$$6) {
  const io$$15 = _arg1$$6.fields[0];
  return (0, _pith.P$$$return$0027)(function (o$0027$$1) {
    const ring$$1 = function ring$$1(p$$5, o$$5) {
      p$$5(function (_arg2$$5) {
        if (_arg2$$5.tag === 1) {
          const io$$17 = _arg2$$5.fields[1];
          const delay$$5 = _arg2$$5.fields[0];
          o$$5([delay$$5 + now$$7, io$$17]);
        } else {
          const io$$16 = _arg2$$5.fields[0].fields[0];
          (0, _pith.P$$$run)(o$0027$$1, (0, _pith.P$$$pmap)(ring$$1, io$$16(now$$7)));
        }
      });
    };

    (0, _pith.P$$$run)(o$0027$$1, (0, _pith.P$$$pmap)(ring$$1, io$$15(now$$7)));
  });
}

function Scheduler$$$run(tf$$1, timer$$1) {
  let nextRun$$1 = null;
  let timerd$$1 = _disposable.empty;

  const schedule$$1 = function schedule$$1(_arg1$$7) {
    var tl$$4, nr$$4;

    if (_arg1$$7 != null) {
      const timeline$$2 = _arg1$$7;
      (0, _String.toConsole)((0, _String.printf)("<-"));
      const patternInput$$2 = (0, _timeline.getBounds)(timeline$$2);

      if (nextRun$$1 != null) {
        if (tl$$4 = nextRun$$1[1], (nr$$4 = nextRun$$1[0], (0, _Util.compare)(nr$$4, patternInput$$2[0]) > 0)) {
          nextRun$$1 = [patternInput$$2[0], (0, _timeline.mappend)(Scheduler$002EPrivate$$$mappend, nextRun$$1[1], timeline$$2)];
          timerd$$1.Dispose();
          timerd$$1 = timer$$1((0, _time.DelayModule$$$fromTo)(tf$$1(), patternInput$$2[0]), onTimer$$1);
        } else {
          if (nextRun$$1 != null) {
            const tl$$6 = nextRun$$1[1];
            const nr$$6 = nextRun$$1[0];
            nextRun$$1 = [nr$$6, (0, _timeline.mappend)(Scheduler$002EPrivate$$$mappend, tl$$6, timeline$$2)];
          } else {
            throw new Error("The match cases were incomplete");
          }
        }
      } else {
        nextRun$$1 = [patternInput$$2[0], timeline$$2];
        timerd$$1 = timer$$1((0, _time.DelayModule$$$fromTo)(tf$$1(), patternInput$$2[0]), onTimer$$1);
      }
    }
  };

  const onTimer$$1 = function onTimer$$1() {
    (0, _String.toConsole)((0, _String.printf)("->"));
    const patternInput$$3 = nextRun$$1;
    nextRun$$1 = null;
    let p$$6 = (0, _pith.P$$$empty)();
    const l$$4 = (0, _pith.P$$$run)(function (tio$$1) {
      p$$6 = (0, _pith.P$$$mappend)(function (arg00$0040$$10, arg10$0040$$19) {
        (0, _unit.mappend)(null, null);
      }, p$$6, Scheduler$002EPrivate$$$runAllNows(tio$$1[0], tio$$1[1]));
    }, (0, _timeline.runTo)(tf$$1(), patternInput$$3[1]));
    schedule$$1((0, _option.mappend)(function (l$$5, r$$3) {
      return (0, _timeline.mappend)(Scheduler$002EPrivate$$$mappend, l$$5, r$$3);
    }, l$$4, (0, _timeline.fromPith)(Scheduler$002EPrivate$$$mappend, p$$6)));
  };

  return function (io$$18) {
    const canceled$$3 = new _Types.FSharpRef(false);
    const now$$9 = tf$$1();
    const io$$19 = Scheduler$002EPrivate$$$map(canceled$$3, _time.zero - now$$9, io$$18);
    const p$$7 = Scheduler$002EPrivate$$$runAllNows(now$$9, io$$19);
    schedule$$1((0, _timeline.fromPith)(Scheduler$002EPrivate$$$mappend, p$$7));
    return (0, _disposable.return$0027)(function () {
      canceled$$3.contents = true;
    });
  };
}