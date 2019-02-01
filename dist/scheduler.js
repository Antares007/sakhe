import { FSharpRef, declare, Union } from "./fable-library.2.1.0-beta-006/Types";
import { union, lambda, obj, float64 } from "./fable-library.2.1.0-beta-006/Reflection";
import { mappend as mappend$$1 } from "./unit";
import { P$$$run as P$0024$0024$0024run, P$$$pmap as P$0024$0024$0024pmap, P$$$empty as P$0024$0024$0024empty, P$$$mappend as P$0024$0024$0024mappend } from "./pith";
import { return$0027 as return$00240027, empty } from "./disposable";
import { fromPith, runTo, mappend as mappend$$2, getBounds } from "./timeline";
import { toConsole, printf } from "./fable-library.2.1.0-beta-006/String";
import { max, comparePrimitives } from "./fable-library.2.1.0-beta-006/Util";
import { mappend as mappend$$3 } from "./option";
export const O = declare(function Sakhe_Scheduler_O(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function O$reflection() {
  return union("Sakhe.Scheduler.O", [], O, () => [["Local", [lambda(float64, obj)]], ["Origin", [lambda(float64, obj)]], ["Delay", [float64, lambda(float64, obj)]]]);
}
export function mappend(l, r, t) {
  return P$0024$0024$0024mappend(function (arg00$0040, arg10$0040) {
    mappend$$1(null, null);
  }, l(t), r(t));
}
export function ring(canceled, offset, io, now) {
  if (canceled.contents) {
    return P$0024$0024$0024empty();
  } else {
    return P$0024$0024$0024pmap(function (p, o) {
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
export function runAllNows(now$$4, io$$4) {
  return function (o$0027) {
    const ring$$1 = function ring$$1(p$$1, o$$1) {
      p$$1(function (_arg1$$1) {
        switch (_arg1$$1.tag) {
          case 1:
            {
              const io$$6 = _arg1$$1.fields[0];
              P$0024$0024$0024run(o$0027, P$0024$0024$0024pmap(ring$$1, io$$6(now$$4)));
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
              P$0024$0024$0024run(o$0027, P$0024$0024$0024pmap(ring$$1, io$$5(now$$4)));
            }
        }
      });
    };

    P$0024$0024$0024run(o$0027, P$0024$0024$0024pmap(ring$$1, io$$4(now$$4)));
  };
}
export function run(tf, timer) {
  let nextRun = null;
  let timerd = empty;
  let now$$5 = tf();

  const schedule = function schedule(_arg1$$2) {
    var tl, nr;

    if (_arg1$$2 != null) {
      const timeline = _arg1$$2;
      const patternInput = getBounds(timeline);

      if (nextRun != null) {
        if (tl = nextRun[1], (nr = nextRun[0], nr >= patternInput[0])) {
          toConsole(printf("<- %A %A >= %A"))(now$$5)(nextRun[0])(patternInput[0]);
          nextRun = [patternInput[0], mappend$$2(function (l$$1, r$$1) {
            return function (t$$1) {
              return mappend(l$$1, r$$1, t$$1);
            };
          }, nextRun[1], timeline)];
          timerd.Dispose();
          timerd = timer(max(comparePrimitives, patternInput[0] - now$$5, 0), onTimer);
        } else {
          if (nextRun != null) {
            const tl$$2 = nextRun[1];
            const nr$$2 = nextRun[0];
            toConsole(printf("<- %A %A < %A"))(now$$5)(nr$$2)(patternInput[0]);
            nextRun = [nr$$2, mappend$$2(function (l$$2, r$$2) {
              return function (t$$2) {
                return mappend(l$$2, r$$2, t$$2);
              };
            }, tl$$2, timeline)];
          } else {
            throw new Error("The match cases were incomplete");
          }
        }
      } else {
        toConsole(printf("<- %A None"))(now$$5);
        nextRun = [patternInput[0], timeline];
        timerd = timer(max(comparePrimitives, patternInput[0] - now$$5, 0), onTimer);
      }
    }
  };

  const onTimer = function onTimer() {
    now$$5 = tf();
    const patternInput$$1 = nextRun;
    nextRun = null;
    let p$$2 = P$0024$0024$0024empty();
    const l$$3 = P$0024$0024$0024run(function (tio) {
      p$$2 = P$0024$0024$0024mappend(function (arg00$0040$$1, arg10$0040$$6) {
        mappend$$1(null, null);
      }, p$$2, runAllNows(tio[0], tio[1]));
    }, runTo(now$$5, patternInput$$1[1]));
    schedule(mappend$$3(function (l$$4, r$$3) {
      return mappend$$2(function (l$$5, r$$4) {
        return function (t$$3) {
          return mappend(l$$5, r$$4, t$$3);
        };
      }, l$$4, r$$3);
    }, l$$3, fromPith(function (l$$6, r$$5) {
      return function (t$$4) {
        return mappend(l$$6, r$$5, t$$4);
      };
    }, p$$2)));
  };

  return function (m) {
    const canceled$$1 = new FSharpRef(false);
    const offset$$3 = 0 - now$$5;
    let io$$13;

    switch (m.tag) {
      case 1:
        {
          const io$$10 = m.fields[0];

          io$$13 = function (now$$8) {
            return ring(canceled$$1, 0, io$$10, now$$8);
          };

          break;
        }

      case 2:
        {
          const io$$11 = m.fields[1];
          const delay$$2 = m.fields[0];

          io$$13 = function (now$$9) {
            return ring(canceled$$1, offset$$3, function (t$$5) {
              return function (o$$3) {
                o$$3(new O(2, "Delay", delay$$2, io$$11));
              };
            }, now$$9);
          };

          break;
        }

      default:
        {
          const io$$9 = m.fields[0];

          io$$13 = function (now$$7) {
            return ring(canceled$$1, offset$$3, io$$9, now$$7);
          };
        }
    }

    const p$$3 = runAllNows(now$$5, io$$13);
    const timeline$$1 = fromPith(function (l$$7, r$$6) {
      return function (t$$6) {
        return mappend(l$$7, r$$6, t$$6);
      };
    }, p$$3);
    schedule(timeline$$1);
    return return$00240027(function () {
      canceled$$1.contents = true;
    });
  };
}