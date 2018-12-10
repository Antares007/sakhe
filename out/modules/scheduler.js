"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.O$reflection = O$reflection;
exports.mappend = mappend;
exports.ring = ring;
exports.runAllNows = runAllNows;
exports.run = run;
exports.O = void 0;

var _Types = require("./fable-library.2.1.6/Types");

var _Reflection = require("./fable-library.2.1.6/Reflection");

var _pith = require("./pith");

var _unit = require("./unit");

var _disposable = require("./disposable");

var _String = require("./fable-library.2.1.6/String");

var _timeline = require("./timeline");

var _Util = require("./fable-library.2.1.6/Util");

var _option = require("./option");

const O = (0, _Types.declare)(function Sakhe_Scheduler_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function O$reflection() {
  return (0, _Reflection.union)("Sakhe.Scheduler.O", [], O, () => [["Local", [(0, _Reflection.lambda)(_Reflection.float64, (0, _pith.Pith$00602$reflection)(O$reflection(), _Reflection.unit))]], ["Origin", [(0, _Reflection.lambda)(_Reflection.float64, (0, _pith.Pith$00602$reflection)(O$reflection(), _Reflection.unit))]], ["Delay", [_Reflection.float64, (0, _Reflection.lambda)(_Reflection.float64, (0, _pith.Pith$00602$reflection)(O$reflection(), _Reflection.unit))]]]);
}

function mappend(l, r, t) {
  return (0, _pith.P$$$mappend)(function (arg00$0040, arg10$0040) {
    (0, _unit.mappend)(null, null);
  }, l(t), r(t));
}

function ring(canceled, offset, io, now) {
  if (canceled.contents) {
    return (0, _pith.P$$$empty)();
  } else {
    return (0, _pith.P$$$pmap)(function (p, o) {
      p(function (_arg1) {
        switch (_arg1.tag) {
          case 1:
            {
              const io$$2 = _arg1.fields[0];
              o(new O(1, "Origin", function (now$$2) {
                return ring(canceled, 0, io$$2, now$$2);
              }));
              break;
            }

          case 2:
            {
              const io$$3 = _arg1.fields[1];
              const delay = _arg1.fields[0];
              o(new O(2, "Delay", delay, function (now$$3) {
                return ring(canceled, offset, io$$3, now$$3);
              }));
              break;
            }

          default:
            {
              const io$$1 = _arg1.fields[0];
              o(new O(0, "Local", function (now$$1) {
                return ring(canceled, 0 - now, io$$1, now$$1);
              }));
            }
        }
      });
    }, io(now + offset));
  }
}

function runAllNows(now$$4, io$$4) {
  return new _pith.Pith$00602(0, "P", function (o$0027) {
    const ring$$1 = function ring$$1(p$$1, o$$1) {
      p$$1(function (_arg1$$1) {
        switch (_arg1$$1.tag) {
          case 1:
            {
              const io$$6 = _arg1$$1.fields[0];
              (0, _pith.P$$$run)(o$0027, (0, _pith.P$$$pmap)(ring$$1, io$$6(now$$4)));
              break;
            }

          case 2:
            {
              const io$$7 = _arg1$$1.fields[1];
              const delay$$1 = _arg1$$1.fields[0];
              o$$1([delay$$1 + now$$4, io$$7]);
              break;
            }

          default:
            {
              const io$$5 = _arg1$$1.fields[0];
              (0, _pith.P$$$run)(o$0027, (0, _pith.P$$$pmap)(ring$$1, io$$5(now$$4)));
            }
        }
      });
    };

    (0, _pith.P$$$run)(o$0027, (0, _pith.P$$$pmap)(ring$$1, io$$4(now$$4)));
  });
}

function run(tf, timer) {
  let nextRun = null;
  let timerd = _disposable.empty;

  const schedule = function schedule(_arg1$$2) {
    var tl, nr;

    if (_arg1$$2 != null) {
      const timeline = _arg1$$2;
      (0, _String.toConsole)((0, _String.printf)("<-"));
      const patternInput = (0, _timeline.getBounds)(timeline);
      const now$$5 = tf();

      if (nextRun != null) {
        if (tl = nextRun[1], (nr = nextRun[0], nr > patternInput[0])) {
          nextRun = [patternInput[0], (0, _timeline.mappend)(function (l$$1, r$$1) {
            return function (t$$1) {
              return mappend(l$$1, r$$1, t$$1);
            };
          }, nextRun[1], timeline)];
          timerd.Dispose();
          timerd = timer((0, _Util.max)(_Util.comparePrimitives, patternInput[0] - now$$5, 0), onTimer);
        } else {
          if (nextRun != null) {
            const tl$$2 = nextRun[1];
            const nr$$2 = nextRun[0];
            nextRun = [nr$$2, (0, _timeline.mappend)(function (l$$2, r$$2) {
              return function (t$$2) {
                return mappend(l$$2, r$$2, t$$2);
              };
            }, tl$$2, timeline)];
          } else {
            throw new Error("The match cases were incomplete");
          }
        }
      } else {
        nextRun = [patternInput[0], timeline];
        timerd = timer((0, _Util.max)(_Util.comparePrimitives, patternInput[0] - now$$5, 0), onTimer);
      }
    }
  };

  const onTimer = function onTimer() {
    (0, _String.toConsole)((0, _String.printf)("->"));
    const patternInput$$1 = nextRun;
    nextRun = null;
    let p$$2 = (0, _pith.P$$$empty)();
    const now$$6 = tf();
    const l$$3 = (0, _pith.P$$$run)(function (tio) {
      p$$2 = (0, _pith.P$$$mappend)(function (arg00$0040$$1, arg10$0040$$6) {
        (0, _unit.mappend)(null, null);
      }, p$$2, runAllNows(tio[0], tio[1]));
    }, (0, _timeline.runTo)(now$$6, patternInput$$1[1]));
    schedule((0, _option.mappend)(function (l$$4, r$$3) {
      return (0, _timeline.mappend)(function (l$$5, r$$4) {
        return function (t$$3) {
          return mappend(l$$5, r$$4, t$$3);
        };
      }, l$$4, r$$3);
    }, l$$3, (0, _timeline.fromPith)(function (l$$6, r$$5) {
      return function (t$$4) {
        return mappend(l$$6, r$$5, t$$4);
      };
    }, p$$2)));
  };

  return function (m) {
    const canceled$$1 = new _Types.FSharpRef(false);
    const now$$8 = tf();
    const offset$$3 = 0 - now$$8;
    let io$$13;

    switch (m.tag) {
      case 1:
        {
          const io$$10 = m.fields[0];

          io$$13 = function (now$$10) {
            return ring(canceled$$1, 0, io$$10, now$$10);
          };

          break;
        }

      case 2:
        {
          const io$$11 = m.fields[1];
          const delay$$2 = m.fields[0];

          io$$13 = function (now$$11) {
            return ring(canceled$$1, offset$$3, function (t$$5) {
              return new _pith.Pith$00602(0, "P", function (o$$3) {
                o$$3(new O(2, "Delay", delay$$2, io$$11));
              });
            }, now$$11);
          };

          break;
        }

      default:
        {
          const io$$9 = m.fields[0];

          io$$13 = function (now$$9) {
            return ring(canceled$$1, offset$$3, io$$9, now$$9);
          };
        }
    }

    const p$$3 = runAllNows(now$$8, io$$13);
    const timeline$$1 = (0, _timeline.fromPith)(function (l$$7, r$$6) {
      return function (t$$6) {
        return mappend(l$$7, r$$6, t$$6);
      };
    }, p$$3);
    schedule(timeline$$1);
    return (0, _disposable.return$0027)(function () {
      canceled$$1.contents = true;
    });
  };
}