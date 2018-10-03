"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.O$$$event = O$$$event;
exports.O$$$end$0027 = O$$$end$0027;
exports.O$$$error = O$$$error;
exports.Send$$$event = Send$$$event;
exports.Send$$$end$0027 = Send$$$end$0027;
exports.Send$$$error = Send$$$error;
exports.return$0027 = return$0027;
exports.unbox = unbox;
exports.map = map;
exports.filter = filter;
exports.filterMap = filterMap;
exports.skipRepeats = skipRepeats;
exports.combineArray = combineArray;
exports.mergeArray = mergeArray;
exports.On$00601 = void 0;

var _Types = require("./fable-core.2.0.2/Types");

var _Option = require("./fable-core.2.0.2/Option");

var _Seq = require("./fable-core.2.0.2/Seq");

var _Array = require("./fable-core.2.0.2/Array");

const On$00601 = (0, _Types.declare)(function On$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.On$00601 = On$00601;

function O$$$event(t, a) {
  return new On$00601(0, "Event", t, a);
}

function O$$$end$0027(t$$1) {
  return new On$00601(1, "End", t$$1);
}

function O$$$error(t$$2, err) {
  return new On$00601(2, "Error", t$$2, err);
}

function Send$$$event(t$$3, a$$1, _arg1) {
  const g = _arg1;
  g(new On$00601(0, "Event", t$$3, a$$1));
}

function Send$$$end$0027(t$$4, _arg1$$1) {
  const g$$1 = _arg1$$1;
  g$$1(new On$00601(1, "End", t$$4));
}

function Send$$$error(t$$5, err$$1, _arg1$$2) {
  const g$$2 = _arg1$$2;
  g$$2(new On$00601(2, "Error", t$$5, err$$1));
}

function return$0027(f) {
  return f;
}

function unbox(_arg1$$3) {
  const v = _arg1$$3;
  return v;
}

function map(f$$1, _arg1$$4) {
  const g$$3 = _arg1$$4;
  return function (_arg2) {
    switch (_arg2.tag) {
      case 1:
        {
          const t$$7 = _arg2.fields[0];
          g$$3(new On$00601(1, "End", t$$7));
          break;
        }

      case 2:
        {
          const t$$8 = _arg2.fields[0];
          const err$$2 = _arg2.fields[1];
          g$$3(new On$00601(2, "Error", t$$8, err$$2));
          break;
        }

      default:
        {
          const t$$6 = _arg2.fields[0];
          const a$$2 = _arg2.fields[1];
          const $arg$$4 = [t$$6, f$$1(a$$2)];
          g$$3(new On$00601(0, "Event", $arg$$4[0], $arg$$4[1]));
        }
    }
  };
}

function filter(p, _arg1$$5) {
  const g$$4 = _arg1$$5;
  return function (_arg2$$1) {
    switch (_arg2$$1.tag) {
      case 1:
        {
          const t$$10 = _arg2$$1.fields[0];
          g$$4(new On$00601(1, "End", t$$10));
          break;
        }

      case 2:
        {
          const t$$11 = _arg2$$1.fields[0];
          const err$$3 = _arg2$$1.fields[1];
          g$$4(new On$00601(2, "Error", t$$11, err$$3));
          break;
        }

      default:
        {
          const t$$9 = _arg2$$1.fields[0];
          const a$$3 = _arg2$$1.fields[1];

          if (p(a$$3)) {
            g$$4(new On$00601(0, "Event", t$$9, a$$3));
          }
        }
    }
  };
}

function filterMap(f$$2, p$$1, _arg1$$6) {
  const g$$5 = _arg1$$6;
  return function (_arg2$$2) {
    switch (_arg2$$2.tag) {
      case 1:
        {
          const t$$13 = _arg2$$2.fields[0];
          g$$5(new On$00601(1, "End", t$$13));
          break;
        }

      case 2:
        {
          const t$$14 = _arg2$$2.fields[0];
          const err$$4 = _arg2$$2.fields[1];
          g$$5(new On$00601(2, "Error", t$$14, err$$4));
          break;
        }

      default:
        {
          const t$$12 = _arg2$$2.fields[0];
          const a$$4 = _arg2$$2.fields[1];
          const b = f$$2(a$$4);

          if (p$$1(b)) {
            g$$5(new On$00601(0, "Event", t$$12, b));
          }
        }
    }
  };
}

function skipRepeats(eq, _arg1$$7) {
  const g$$6 = _arg1$$7;
  let prev = null;
  return function (_arg2$$3) {
    switch (_arg2$$3.tag) {
      case 1:
        {
          const t$$16 = _arg2$$3.fields[0];
          g$$6(new On$00601(1, "End", t$$16));
          break;
        }

      case 2:
        {
          const t$$17 = _arg2$$3.fields[0];
          const err$$5 = _arg2$$3.fields[1];
          g$$6(new On$00601(2, "Error", t$$17, err$$5));
          break;
        }

      default:
        {
          const t$$15 = _arg2$$3.fields[0];
          const a$$5 = _arg2$$3.fields[1];

          if (prev != null) {
            const prev$$1 = (0, _Option.value)(prev);

            if (eq(prev$$1, a$$5)) {
              g$$6(new On$00601(0, "Event", t$$15, a$$5));
            }
          } else {
            g$$6(new On$00601(0, "Event", t$$15, a$$5));
          }
        }
    }
  };
}

function safeSink(o) {
  let active = true;
  return function (_arg1$$8) {
    switch (_arg1$$8.tag) {
      case 1:
        {
          const x$$1 = _arg1$$8;

          if (active) {
            o(x$$1);
          }

          active = false;
          break;
        }

      case 2:
        {
          const x$$2 = _arg1$$8;

          if (active) {
            o(x$$2);
          }

          active = false;
          break;
        }

      default:
        {
          const x = _arg1$$8;

          if (active) {
            o(x);
          }
        }
    }
  };
}

function combineArray(qty, _arg1$$9) {
  const o$$1 = _arg1$$9;
  let endsLeft = qty | 0;
  const values = (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i) {
      return null;
    }, (0, _Seq.rangeNumber)(0, 1, qty - 1));
  }), Array);
  let ready = false;
  const o$$2 = safeSink(o$$1);

  const sink = function sink(i$$1) {
    return function (_arg2$$4) {
      switch (_arg2$$4.tag) {
        case 1:
          {
            const t$$19 = _arg2$$4.fields[0];
            endsLeft = endsLeft - 1;

            if (endsLeft === 0) {
              o$$2(new On$00601(1, "End", t$$19));
            }

            break;
          }

        case 0:
          {
            const t$$20 = _arg2$$4.fields[0];
            const a$$6 = _arg2$$4.fields[1];
            values[i$$1] = (0, _Option.some)(a$$6);

            if (ready) {
              const $arg$$19 = [t$$20, (0, _Array.map)(function mapping(v$$1) {
                return (0, _Option.value)(v$$1);
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
            const t$$18 = _arg2$$4.fields[0];
            const err$$6 = _arg2$$4.fields[1];
            o$$2(new On$00601(2, "Error", t$$18, err$$6));
          }
      }
    };
  };

  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i$$3) {
      return sink(i$$3);
    }, (0, _Seq.rangeNumber)(0, 1, qty - 1));
  }), Array);
}

function mergeArray(qty$$1, _arg1$$10) {
  const o$$3 = _arg1$$10;
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

  return (0, _Array.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.map)(function (i$$4) {
      return sink$$1;
    }, (0, _Seq.rangeNumber)(0, 1, qty$$1 - 1));
  }), Array);
}