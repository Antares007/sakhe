;require._modules["/s\sink.js"] = (function() { var __filename = "/s\sink.js"; var __dirname = "/s"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /s\sink.js  == */ var __module__ = function() { 
 import { declare, Union } from "../fable-core.2.0.0-beta-004/Types";
import { some, value } from "../fable-core.2.0.0-beta-004/Option";
import { delay, map as map$$1, rangeNumber } from "../fable-core.2.0.0-beta-004/Seq";
import { map as map$$2, ofSeq } from "../fable-core.2.0.0-beta-004/Array";
export const On$00601 = declare(function On$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Send$$$event(t, a, _arg1) {
  const g = _arg1;
  g(new On$00601(0, "Event", t, a));
}
export function Send$$$end$0027(t$$1, _arg1$$1) {
  const g$$1 = _arg1$$1;
  g$$1(new On$00601(1, "End", t$$1));
}
export function Send$$$error(t$$2, err, _arg1$$2) {
  const g$$2 = _arg1$$2;
  g$$2(new On$00601(2, "Error", t$$2, err));
}
export function return$0027(f) {
  return f;
}
export function map(f$$1, _arg1$$3) {
  const g$$3 = _arg1$$3;
  return function (_arg2) {
    switch (_arg2.tag) {
      case 1:
        {
          const t$$4 = _arg2.fields[0];
          g$$3(new On$00601(1, "End", t$$4));
          break;
        }

      case 2:
        {
          const t$$5 = _arg2.fields[0];
          const err$$1 = _arg2.fields[1];
          g$$3(new On$00601(2, "Error", t$$5, err$$1));
          break;
        }

      default:
        {
          const t$$3 = _arg2.fields[0];
          const a$$1 = _arg2.fields[1];
          const $arg$$4 = [t$$3, f$$1(a$$1)];
          g$$3(new On$00601(0, "Event", $arg$$4[0], $arg$$4[1]));
        }
    }
  };
}
export function filter(p, _arg1$$4) {
  const g$$4 = _arg1$$4;
  return function (_arg2$$1) {
    switch (_arg2$$1.tag) {
      case 1:
        {
          const t$$7 = _arg2$$1.fields[0];
          g$$4(new On$00601(1, "End", t$$7));
          break;
        }

      case 2:
        {
          const t$$8 = _arg2$$1.fields[0];
          const err$$2 = _arg2$$1.fields[1];
          g$$4(new On$00601(2, "Error", t$$8, err$$2));
          break;
        }

      default:
        {
          const t$$6 = _arg2$$1.fields[0];
          const a$$2 = _arg2$$1.fields[1];

          if (p(a$$2)) {
            g$$4(new On$00601(0, "Event", t$$6, a$$2));
          }
        }
    }
  };
}
export function filterMap(f$$2, p$$1, _arg1$$5) {
  const g$$5 = _arg1$$5;
  return function (_arg2$$2) {
    switch (_arg2$$2.tag) {
      case 1:
        {
          const t$$10 = _arg2$$2.fields[0];
          g$$5(new On$00601(1, "End", t$$10));
          break;
        }

      case 2:
        {
          const t$$11 = _arg2$$2.fields[0];
          const err$$3 = _arg2$$2.fields[1];
          g$$5(new On$00601(2, "Error", t$$11, err$$3));
          break;
        }

      default:
        {
          const t$$9 = _arg2$$2.fields[0];
          const a$$3 = _arg2$$2.fields[1];
          const b = f$$2(a$$3);

          if (p$$1(b)) {
            g$$5(new On$00601(0, "Event", t$$9, b));
          }
        }
    }
  };
}
export function skipRepeats(eq, _arg1$$6) {
  const g$$6 = _arg1$$6;
  let prev = null;
  return function (_arg2$$3) {
    switch (_arg2$$3.tag) {
      case 1:
        {
          const t$$13 = _arg2$$3.fields[0];
          g$$6(new On$00601(1, "End", t$$13));
          break;
        }

      case 2:
        {
          const t$$14 = _arg2$$3.fields[0];
          const err$$4 = _arg2$$3.fields[1];
          g$$6(new On$00601(2, "Error", t$$14, err$$4));
          break;
        }

      default:
        {
          const t$$12 = _arg2$$3.fields[0];
          const a$$4 = _arg2$$3.fields[1];

          if (prev != null) {
            const prev$$1 = value(prev);

            if (eq(prev$$1, a$$4)) {
              g$$6(new On$00601(0, "Event", t$$12, a$$4));
            }
          } else {
            g$$6(new On$00601(0, "Event", t$$12, a$$4));
          }
        }
    }
  };
}

function safeSink(o) {
  let active = true;
  return function (_arg1$$7) {
    switch (_arg1$$7.tag) {
      case 1:
        {
          const x$$1 = _arg1$$7;

          if (active) {
            o(x$$1);
          }

          active = false;
          break;
        }

      case 2:
        {
          const x$$2 = _arg1$$7;

          if (active) {
            o(x$$2);
          }

          active = false;
          break;
        }

      default:
        {
          const x = _arg1$$7;

          if (active) {
            o(x);
          }
        }
    }
  };
}

export function combineArray(qty, _arg1$$8) {
  const o$$1 = _arg1$$8;
  let endsLeft = qty | 0;
  const values = ofSeq(delay(function () {
    return map$$1(function (i) {
      return null;
    }, rangeNumber(0, 1, qty - 1));
  }), Array);
  let ready = false;
  const o$$2 = safeSink(o$$1);

  const sink = function sink(i$$1) {
    return function (_arg2$$4) {
      switch (_arg2$$4.tag) {
        case 1:
          {
            const t$$16 = _arg2$$4.fields[0];
            endsLeft = endsLeft - 1;

            if (endsLeft === 0) {
              o$$2(new On$00601(1, "End", t$$16));
            }

            break;
          }

        case 0:
          {
            const t$$17 = _arg2$$4.fields[0];
            const a$$5 = _arg2$$4.fields[1];
            values[i$$1] = some(a$$5);

            if (ready) {
              const $arg$$19 = [t$$17, map$$2(function mapping(v) {
                return value(v);
              }, values, Array)];
              o$$2(new On$00601(0, "Event", $arg$$19[0], $arg$$19[1]));
            } else {
              ready = true;
              let i$$2 = 0;

              while (i$$2 < qty ? ready : false) {
                if (values[i$$2] == null) {
                  ready = false;
                }

                i$$2 = i$$2 + 1;
              }
            }

            break;
          }

        default:
          {
            const t$$15 = _arg2$$4.fields[0];
            const err$$5 = _arg2$$4.fields[1];
            o$$2(new On$00601(2, "Error", t$$15, err$$5));
          }
      }
    };
  };

  return ofSeq(delay(function () {
    return map$$1(function (i$$3) {
      return sink(i$$3);
    }, rangeNumber(0, 1, qty - 1));
  }), Array);
}
export function mergeArray(qty$$1, _arg1$$9) {
  const o$$3 = _arg1$$9;
  let endsLeft$$1 = qty$$1 | 0;
  const o$$4 = safeSink(o$$3);

  const sink$$1 = function (_arg2$$5) {
    switch (_arg2$$5.tag) {
      case 2:
        {
          const x$$4 = _arg2$$5;
          o$$4(x$$4);
          break;
        }

      case 1:
        {
          const x$$5 = _arg2$$5;
          endsLeft$$1 = endsLeft$$1 - 1;

          if (endsLeft$$1 === 0) {
            o$$4(x$$5);
          }

          break;
        }

      default:
        {
          const x$$3 = _arg2$$5;
          o$$4(x$$3);
        }
    }
  };

  return ofSeq(delay(function () {
    return map$$1(function (i$$4) {
      return sink$$1;
    }, rangeNumber(0, 1, qty$$1 - 1));
  }), Array);
} 
 }; /* ==  End source for module /s\sink.js  == */ return module; }());;