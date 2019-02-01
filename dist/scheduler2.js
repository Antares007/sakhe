import { FSharpRef, declare, Union } from "./fable-library.2.1.0-beta-006/Types";
import { union, float64, obj } from "./fable-library.2.1.0-beta-006/Reflection";
import { mappend } from "./unit";
import { fromIO, runTo, getBounds, mappend as mappend$$1 } from "./timeline2";
import { mappend as mappend$$2 } from "./option";
import { return$0027 as return$00240027 } from "./disposable";
export const O = declare(function Sakhe_Scheduler2_O(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function O$reflection() {
  return union("Sakhe.Scheduler2.O", [], O, () => [["Local", [obj]], ["Origin", [obj]], ["Delay", [float64, obj]]]);
}

function ring(canceled, offset, io) {
  return function (o) {
    return function (now) {
      if (canceled.contents) {} else {
        io(function (_arg1) {
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
        })(now + offset);
      }
    };
  };
}

function runAllNows(now$$1, io$$4) {
  return function (oo) {
    return function () {
      const ring$$1 = function ring$$1(io$$5) {
        return function (o$$2) {
          return function (i$$1) {
            io$$5(function (_arg1$$1) {
              switch (_arg1$$1.tag) {
                case 1:
                  {
                    const io$$7 = _arg1$$1.fields[0];
                    ((pmap, io) => o => i => pmap(io)(o)(i))(ring$$1, io$$7)(oo)(now$$1);
                    break;
                  }

                case 2:
                  {
                    const io$$8 = _arg1$$1.fields[1];
                    const delay$$1 = _arg1$$1.fields[0];
                    o$$2([delay$$1 + now$$1, io$$8]);
                    break;
                  }

                default:
                  {
                    const io$$6 = _arg1$$1.fields[0];
                    ((pmap, io) => o => i => pmap(io)(o)(i))(ring$$1, io$$6)(oo)(now$$1);
                  }
              }
            }, i$$1);
          };
        };
      };

      ((pmap, io) => o => i => pmap(io)(o)(i))(ring$$1, io$$4)(oo)(now$$1);
    };
  };
}

function iomappend(l, r) {
  return ((mappend, l, r) => o => i => mappend(l(o)(i), r(o)(i)))(function (arg00$0040, arg10$0040) {
    mappend(null, null);
  }, l, r);
}

function tlmappend(l$$1, r$$1) {
  return mappend$$1(iomappend, l$$1, r$$1);
}

export function mkScheduler(tf, requestNextFrame) {
  let now$$2 = tf();
  let mainTimeline = null;

  const nextFrame = function nextFrame() {
    now$$2 = tf();

    if (mainTimeline != null) {
      const tl = mainTimeline;
      const patternInput = getBounds(tl);

      if (now$$2 >= patternInput[0]) {
        let newTlIo = o => i => {};

        const restTl = runTo(now$$2, tl)(function (tio) {
          newTlIo = iomappend(newTlIo, runAllNows(tio[0], tio[1]));
        })(null);
        const newTl = fromIO(iomappend, newTlIo);
        mainTimeline = mappend$$2(tlmappend, restTl, newTl);
      }
    }

    requestNextFrame(nextFrame);
  };

  requestNextFrame(nextFrame);
  return function (m) {
    const canceled$$1 = new FSharpRef(false);
    const offset$$1 = 0 - now$$2;
    let io$$14;

    switch (m.tag) {
      case 1:
        {
          const io$$11 = m.fields[0];
          io$$14 = ring(canceled$$1, 0, io$$11);
          break;
        }

      case 2:
        {
          const io$$12 = m.fields[1];
          const delay$$2 = m.fields[0];
          io$$14 = ring(canceled$$1, offset$$1, function (o$$4) {
            return function (t) {
              o$$4(new O(2, "Delay", delay$$2, io$$12));
            };
          });
          break;
        }

      default:
        {
          const io$$10 = m.fields[0];
          io$$14 = ring(canceled$$1, offset$$1, io$$10);
        }
    }

    const timeline = fromIO(iomappend, runAllNows(now$$2, io$$14));
    mainTimeline = mappend$$2(tlmappend, mainTimeline, timeline);
    return return$00240027(function () {
      canceled$$1.contents = true;
    });
  };
}