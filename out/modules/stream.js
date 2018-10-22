"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler$$$delay = Scheduler$$$delay;
exports.Scheduler$$$now = Scheduler$$$now;
exports.Scheduler$$$Of = Scheduler$$$Of;
exports.timer = timer;
exports.tf = tf;
exports.run = run;
exports.Of = Of;
exports.empty = empty;
exports.map = map;
exports.merge = merge;
exports.join = join;
exports.bind = bind;
exports.mappend = mappend;
exports.unit = exports.O$00601 = exports.T$00601 = void 0;

var _Types = require("./fable-core.2.0.6/Types");

var _time = require("./time");

var _pith = require("./pith");

var _scheduler = require("./scheduler");

var _Util = require("./fable-core.2.0.6/Util");

var _disposable = require("./disposable");

var _abo = require("./abo");

var _o = require("./o");

var _Map = require("./fable-core.2.0.6/Map");

const T$00601 = (0, _Types.declare)(function T$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00601 = T$00601;
const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function Scheduler$$$delay(d, f) {
  const tupledArg = [(0, _time.DelayModule$$$return$0027)(d), (0, _scheduler.return$0027)(function (i) {
    return (0, _pith.return$0027)(function (o) {
      f(i, o);
    });
  })];
  return new _scheduler.O$00601(1, "Delay", tupledArg[0], tupledArg[1]);
}

function Scheduler$$$now(f$$3) {
  return new _scheduler.O$00601(0, "Now", (0, _scheduler.return$0027)(function (i$$1) {
    return (0, _pith.return$0027)(function (o$$1) {
      f$$3(i$$1, o$$1);
    });
  }));
}

function Scheduler$$$Of(f$$6) {
  return (0, _scheduler.return$0027)(function (i$$2) {
    return (0, _pith.return$0027)(function (o$$2) {
      f$$6(i$$2, o$$2);
    });
  });
}

function timer(delay, task) {
  if ((0, _Util.equals)(delay, _time.DelayModule$$$zero)) {
    let canceled = false;
    Promise.resolve(task).then(function (t) {
      if (!canceled) {
        t();
      }
    });
    return (0, _disposable.return$0027)(function () {
      canceled = true;
    });
  } else {
    const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay));
    return (0, _disposable.return$0027)(function () {
      clearTimeout(token);
    });
  }
}

function tf() {
  return (0, _time.return$0027)(Math.floor(performance.now()));
}

function run(_arg1) {
  const io = _arg1.fields[0];
  return (0, _abo.run)((0, _scheduler.run)(function () {
    return tf();
  }, timer), io);
}

function Of(f$$10) {
  return new T$00601(0, "Stream", (0, _abo.return$0027)(function (run$$1) {
    return (0, _pith.return$0027)(function (sinkO) {
      return f$$10(run$$1, sinkO);
    });
  }));
}

const unit = new T$00601(0, "Stream", (0, _abo.return$0027)(function (run$$2) {
  return (0, _pith.return$0027)(function (s) {
    return run$$2(Scheduler$$$Of(function (_arg2, o$$3) {
      o$$3(Scheduler$$$delay(0, function (t$$2, _arg1$$1) {
        try {
          s(new O$00601(0, "Event", t$$2, null));
          s(new O$00601(1, "End", t$$2));
        } catch (err) {
          s(new O$00601(2, "Error", t$$2, err));
        }
      }));
    }));
  });
}));
exports.unit = unit;

function empty() {
  return new T$00601(0, "Stream", (0, _abo.return$0027)(function (run$$3) {
    return (0, _pith.return$0027)(function (s$$1) {
      return _disposable.empty;
    });
  }));
}

function map(f$$19, _arg1$$2) {
  const io$$1 = _arg1$$2.fields[0];
  return new T$00601(0, "Stream", (0, _abo.return$0027)(function (run$$4) {
    return (0, _pith.return$0027)(function (s$$2) {
      const so = (0, _o.proxy)(function (_arg2$$1) {
        switch (_arg2$$1.tag) {
          case 1:
            {
              const t$$4 = _arg2$$1.fields[0];
              s$$2(new O$00601(1, "End", t$$4));
              break;
            }

          case 2:
            {
              const t$$5 = _arg2$$1.fields[0];
              const err$$1 = _arg2$$1.fields[1];
              s$$2(new O$00601(2, "Error", t$$5, err$$1));
              break;
            }

          default:
            {
              const t$$3 = _arg2$$1.fields[0];
              const a$$2 = _arg2$$1.fields[1];
              const $arg$$10 = [t$$3, f$$19(a$$2)];
              s$$2(new O$00601(0, "Event", $arg$$10[0], $arg$$10[1]));
            }
        }
      });
      return (0, _pith.run)(so, (0, _abo.run)(run$$4, io$$1));
    });
  }));
}

function merge(_arg2$$2, _arg1$$3) {
  const a$$3 = _arg2$$2.fields[0];
  const b$$2 = _arg1$$3.fields[0];
  return new T$00601(0, "Stream", (0, _abo.return$0027)(function (run$$5) {
    return (0, _pith.return$0027)(function (s$$3) {
      let disposable = _disposable.empty;
      let endCount = 0;
      const so$$1 = (0, _o.proxy)(function (_arg3) {
        switch (_arg3.tag) {
          case 2:
            {
              const b$$3 = _arg3.fields[1];
              const a$$4 = _arg3.fields[0];
              disposable.Dispose();
              s$$3(new O$00601(2, "Error", a$$4, b$$3));
              break;
            }

          case 0:
            {
              const t$$7 = _arg3.fields[0];
              const a$$5 = _arg3.fields[1];
              s$$3(new O$00601(0, "Event", t$$7, a$$5));
              break;
            }

          default:
            {
              const t$$6 = _arg3.fields[0];
              endCount = endCount + 1;

              if (endCount === 2) {
                s$$3(new O$00601(1, "End", t$$6));
              }
            }
        }
      });
      const da = (0, _pith.run)(so$$1, (0, _abo.run)(run$$5, a$$3));
      const db = (0, _pith.run)(so$$1, (0, _abo.run)(run$$5, b$$2));
      disposable = (0, _disposable.append)(da, db);
      return disposable;
    });
  }));
}

function join(_arg1$$4) {
  const ioOfStreams = _arg1$$4.fields[0];
  return new T$00601(0, "Stream", (0, _abo.return$0027)(function (run$$6) {
    return (0, _pith.return$0027)(function (s$$4) {
      let i$$3 = 1;
      const index = 0;
      let map$$1 = (0, _Map.empty)({
        Compare: _Util.comparePrimitives
      });
      const disposable$$1 = (0, _disposable.return$0027)(function () {
        (0, _Map.iterate)(function (_arg1$$5, d$$2) {
          d$$2.Dispose();
        }, map$$1);
      });

      const end$0027 = function end$0027(t$$8, index$$1) {
        map$$1 = (0, _Map.remove)(index$$1, map$$1);

        if (map$$1.Equals((0, _Map.empty)({
          Compare: _Util.comparePrimitives
        }))) {
          s$$4(new O$00601(1, "End", t$$8));
        }
      };

      const error$0027 = function error$0027(t$$9, err$$2) {
        disposable$$1.Dispose();
        s$$4(new O$00601(2, "Error", t$$9, err$$2));
      };

      const so$$3 = (0, _o.proxy)(function (_arg2$$3) {
        switch (_arg2$$3.tag) {
          case 1:
            {
              const t$$10 = _arg2$$3.fields[0];
              end$0027(t$$10, index);
              break;
            }

          case 2:
            {
              const t$$11 = _arg2$$3.fields[0];
              const err$$4 = _arg2$$3.fields[1];
              error$0027(t$$11, err$$4);
              break;
            }

          default:
            {
              const ot = _arg2$$3.fields[0][0];
              const offset = _arg2$$3.fields[0][1];
              const io$$2 = _arg2$$3.fields[1].fields[0];
              const index$$2 = i$$3 | 0;
              i$$3 = i$$3 + 1;
              const so$$2 = (0, _o.proxy)(function (_arg3$$1) {
                switch (_arg3$$1.tag) {
                  case 1:
                    {
                      const it$$1 = _arg3$$1.fields[0][0];
                      end$0027([ot + it$$1, offset], index$$2);
                      break;
                    }

                  case 2:
                    {
                      const it$$2 = _arg3$$1.fields[0][0];
                      const err$$3 = _arg3$$1.fields[1];
                      error$0027([ot + it$$2, offset], err$$3);
                      break;
                    }

                  default:
                    {
                      const it = _arg3$$1.fields[0][0];
                      const a$$6 = _arg3$$1.fields[1];
                      const $arg$$24 = [[ot + it, offset], a$$6];
                      s$$4(new O$00601(0, "Event", $arg$$24[0], $arg$$24[1]));
                    }
                }
              });
              map$$1 = (0, _Map.add)(index$$2, (0, _pith.run)(so$$2, (0, _abo.run)(run$$6, io$$2)), map$$1);
            }
        }
      });
      map$$1 = (0, _Map.add)(index, (0, _pith.run)(so$$3, (0, _abo.run)(run$$6, ioOfStreams)), map$$1);
      return disposable$$1;
    });
  }));
}

function bind(f$$27, io$$3) {
  return join(map(f$$27, io$$3));
}

function mappend(_arg2$$4, _arg1$$6) {
  const l = _arg2$$4.fields[0];
  const r = _arg1$$6.fields[0];
  return new T$00601(0, "Stream", (0, _abo.return$0027)(function (run$$7) {
    return (0, _pith.return$0027)(function (s$$5) {
      let disposable$$2 = _disposable.empty;
      const so$$5 = (0, _o.proxy)(function (_arg3$$2) {
        switch (_arg3$$2.tag) {
          case 2:
            {
              const t$$13 = _arg3$$2.fields[0];
              const err$$5 = _arg3$$2.fields[1];
              disposable$$2.Dispose();
              s$$5(new O$00601(2, "Error", t$$13, err$$5));
              break;
            }

          case 1:
            {
              const ot$$1 = _arg3$$2.fields[0][0];
              const offset$$1 = _arg3$$2.fields[0][1];
              const so$$4 = (0, _o.proxy)(function (_arg4) {
                switch (_arg4.tag) {
                  case 2:
                    {
                      const it$$4 = _arg4.fields[0][0];
                      const err$$6 = _arg4.fields[1];
                      disposable$$2.Dispose();
                      const $arg$$30 = [[ot$$1 + it$$4, offset$$1], err$$6];
                      s$$5(new O$00601(2, "Error", $arg$$30[0], $arg$$30[1]));
                      break;
                    }

                  case 1:
                    {
                      const it$$5 = _arg4.fields[0][0];
                      s$$5(new O$00601(1, "End", [ot$$1 + it$$5, offset$$1]));
                      break;
                    }

                  default:
                    {
                      const it$$3 = _arg4.fields[0][0];
                      const a$$8 = _arg4.fields[1];
                      const $arg$$29 = [[ot$$1 + it$$3, offset$$1], a$$8];
                      s$$5(new O$00601(0, "Event", $arg$$29[0], $arg$$29[1]));
                    }
                }
              });
              disposable$$2 = (0, _pith.run)(so$$4, (0, _abo.run)(run$$7, r));
              break;
            }

          default:
            {
              const t$$12 = _arg3$$2.fields[0];
              const a$$7 = _arg3$$2.fields[1];
              s$$5(new O$00601(0, "Event", t$$12, a$$7));
            }
        }
      });
      disposable$$2 = (0, _pith.run)(so$$5, (0, _abo.run)(run$$7, l));
      return disposable$$2;
    });
  }));
}