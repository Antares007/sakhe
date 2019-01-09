import { FSharpRef, declare, Union } from "./fable-library.2.1.0-beta-006/Types";
import { union, float64, obj } from "./fable-library.2.1.0-beta-006/Reflection";
import { fromIO, mappend as mappend$$1, runTo, getBounds } from "./timeline2";
import { max, comparePrimitives, uncurry } from "./fable-library.2.1.0-beta-006/Util";
import { mappend as mappend$$2 } from "./option";
import { empty, return$0027 as return$00240027 } from "./disposable";
import { toConsole, printf } from "./fable-library.2.1.0-beta-006/String";
export const O = declare(function Sakhe_Scheduler2_O(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function O$reflection() {
  return union("Sakhe.Scheduler2.O", [], O, () => [["Local", [obj]], ["Origin", [obj]], ["Delay", [float64, obj]]]);
}
export function ring(canceled, offset, io) {
  return function (o) {
    return function (now) {
      if (canceled.contents) {} else {
        io(now + offset)(function (_arg1) {
          switch (_arg1.tag) {
            case 1:
              {
                const io$$2 = _arg1.fields[0];
                o(new O(1, "Origin", ring(canceled, 0, io$$2)));
                break;
              }

            case 2:
              {
                const io$$3 = _arg1.fields[1];
                const delay = _arg1.fields[0];
                o(new O(2, "Delay", delay, ring(canceled, offset, io$$3)));
                break;
              }

            default:
              {
                const io$$1 = _arg1.fields[0];
                o(new O(0, "Local", ring(canceled, 0 - now, io$$1)));
              }
          }
        });
      }
    };
  };
}
export function runAllNows(now$$1, io$$4) {
  return function (o$0027) {
    return function () {
      const ring$$1 = function ring$$1(io$$5) {
        return function (o$$2) {
          return function (i$$1) {
            io$$5(function (_arg1$$1) {
              var $target$$10, io$$6;

              switch (_arg1$$1.tag) {
                case 1:
                  $target$$10 = 0;
                  io$$6 = _arg1$$1.fields[0];
                  break;

                case 2:
                  $target$$10 = 1;
                  break;

                default:
                  $target$$10 = 0;
                  io$$6 = _arg1$$1.fields[0];
              }

              switch ($target$$10) {
                case 0:
                  {
                    ((pmap, io) => o => i => pmap(io)(o)(i))(ring$$1, io$$6)(now$$1)(o$0027);
                    break;
                  }

                case 1:
                  {
                    const io$$7 = _arg1$$1.fields[1];
                    const delay$$1 = _arg1$$1.fields[0];
                    o$$2([delay$$1 + now$$1, io$$7]);
                    break;
                  }
              }
            }, i$$1);
          };
        };
      };

      ((pmap, io) => o => i => pmap(io)(o)(i))(ring$$1, io$$4)(now$$1)(o$0027);
    };
  };
}
export function mappend(arg10$0040) {
  return function (arg20$0040$$1) {
    return ((mappend, l, r) => o => i => mappend(l(o)(i), r(o)(i)))(function (arg00$0040, arg10$0040$$1) {}, arg10$0040, arg20$0040$$1);
  };
}
export function mkScheduler(tf, requestNextFrame) {
  let now$$2 = tf();
  let mainTimeline = null;

  const nextFrame = function nextFrame() {
    now$$2 = tf();

    if (mainTimeline != null) {
      const tl = mainTimeline;
      const patternInput = getBounds(tl);

      if (now$$2 < patternInput[0]) {} else {
        let newTlIo = o => i => {};

        const restTl = runTo(now$$2, tl)(null)(function (tio) {
          newTlIo = ((mappend, l, r) => o => i => mappend(l(o)(i), r(o)(i)))(function (arg00$0040$$1, arg10$0040$$2) {}, newTlIo, runAllNows(tio[0], tio[1]));
        });
        mainTimeline = mappend$$2(function (l, r) {
          return mappend$$1(uncurry(2, mappend), l, r);
        }, restTl, fromIO(uncurry(2, mappend), newTlIo));
      }
    }

    requestNextFrame(nextFrame);
  };

  requestNextFrame(nextFrame);
  return function (m) {
    const canceled$$1 = new FSharpRef(false);
    const offset$$1 = 0 - now$$2;
    let io$$13;

    switch (m.tag) {
      case 1:
        {
          const io$$10 = m.fields[0];
          io$$13 = ring(canceled$$1, 0, io$$10);
          break;
        }

      case 2:
        {
          const io$$11 = m.fields[1];
          const delay$$2 = m.fields[0];
          io$$13 = ring(canceled$$1, offset$$1, function (o$$4) {
            return function (t) {
              o$$4(new O(2, "Delay", delay$$2, io$$11));
            };
          });
          break;
        }

      default:
        {
          const io$$9 = m.fields[0];
          io$$13 = ring(canceled$$1, offset$$1, io$$9);
        }
    }

    const p = runAllNows(now$$2, io$$13);
    const timeline = fromIO(uncurry(2, mappend), p);
    mainTimeline = mappend$$2(function (l$$1, r$$1) {
      return mappend$$1(uncurry(2, mappend), l$$1, r$$1);
    }, mainTimeline, timeline);
    return return$00240027(function () {
      canceled$$1.contents = true;
    });
  };
}
export function run(tf$$1, timer) {
  let nextRun = null;
  let timerd = empty;
  let now$$4 = tf$$1();

  const schedule = function schedule(_arg1$$2) {
    var tl$$1, nr;

    if (_arg1$$2 != null) {
      const timeline$$1 = _arg1$$2;
      const patternInput$$1 = getBounds(timeline$$1);

      if (nextRun != null) {
        if (tl$$1 = nextRun[1], (nr = nextRun[0], nr >= patternInput$$1[0])) {
          toConsole(printf("<- %A %A >= %A"))(now$$4)(nextRun[0])(patternInput$$1[0]);
          nextRun = [patternInput$$1[0], mappend$$1(uncurry(2, mappend), nextRun[1], timeline$$1)];
          timerd.Dispose();
          timerd = timer(max(comparePrimitives, patternInput$$1[0] - now$$4, 0), onTimer);
        } else {
          if (nextRun != null) {
            const tl$$3 = nextRun[1];
            const nr$$2 = nextRun[0];
            toConsole(printf("<- %A %A < %A"))(now$$4)(nr$$2)(patternInput$$1[0]);
            nextRun = [nr$$2, mappend$$1(uncurry(2, mappend), tl$$3, timeline$$1)];
          } else {
            throw new Error("The match cases were incomplete");
          }
        }
      } else {
        toConsole(printf("<- %A None"))(now$$4);
        nextRun = [patternInput$$1[0], timeline$$1];
        timerd = timer(max(comparePrimitives, patternInput$$1[0] - now$$4, 0), onTimer);
      }
    }
  };

  const onTimer = function onTimer() {
    now$$4 = tf$$1();
    const patternInput$$2 = nextRun;
    nextRun = null;

    let p$$1 = o => i => {};

    const l$$2 = runTo(now$$4, patternInput$$2[1])(null)(function (tio$$1) {
      p$$1 = ((mappend, l, r) => o => i => mappend(l(o)(i), r(o)(i)))(function (arg00$0040$$2, arg10$0040$$3) {}, p$$1, runAllNows(tio$$1[0], tio$$1[1]));
    });
    schedule(mappend$$2(function (l$$3, r$$2) {
      return mappend$$1(uncurry(2, mappend), l$$3, r$$2);
    }, l$$2, fromIO(uncurry(2, mappend), p$$1)));
  };

  return function (m$$1) {
    const canceled$$2 = new FSharpRef(false);
    const offset$$2 = 0 - now$$4;
    let io$$19;

    switch (m$$1.tag) {
      case 1:
        {
          const io$$16 = m$$1.fields[0];
          io$$19 = ring(canceled$$2, 0, io$$16);
          break;
        }

      case 2:
        {
          const io$$17 = m$$1.fields[1];
          const delay$$3 = m$$1.fields[0];
          io$$19 = ring(canceled$$2, offset$$2, function (o$$6) {
            return function (t$$1) {
              o$$6(new O(2, "Delay", delay$$3, io$$17));
            };
          });
          break;
        }

      default:
        {
          const io$$15 = m$$1.fields[0];
          io$$19 = ring(canceled$$2, offset$$2, io$$15);
        }
    }

    const p$$2 = runAllNows(now$$4, io$$19);
    const timeline$$2 = fromIO(uncurry(2, mappend), p$$2);
    schedule(timeline$$2);
    return return$00240027(function () {
      canceled$$2.contents = true;
    });
  };
}