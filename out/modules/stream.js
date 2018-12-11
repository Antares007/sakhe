"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$00601$reflection = T$00601$reflection;
exports.O$00601$reflection = O$00601$reflection;
exports.run = run;
exports.pair = pair;
exports.at = at;
exports.now = now;
exports.periodic = periodic;
exports.empty = empty;
exports.map = map;
exports.take = take;
exports.merge = merge;
exports.join = join;
exports.bind = bind;
exports.O$00601 = exports.T$00601 = void 0;

var _Types = require("./fable-library.2.1.7/Types");

var _scheduler = require("./scheduler");

var _Reflection = require("./fable-library.2.1.7/Reflection");

var _pith = require("./pith");

var _disposable = require("./disposable");

var _Seq = require("./fable-library.2.1.7/Seq");

var _Util = require("./fable-library.2.1.7/Util");

const T$00601 = (0, _Types.declare)(function Sakhe_Stream_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00601 = T$00601;

function T$00601$reflection($gen$$20) {
  return (0, _Reflection.union)("Sakhe.Stream.T`1", [$gen$$20], T$00601, () => [["Stream", [(0, _Reflection.lambda)((0, _Reflection.lambda)((0, _scheduler.O$reflection)(), (0, _Reflection.type)("System.IDisposable")), (0, _pith.Pith$00602$reflection)(O$00601$reflection($gen$$20), (0, _Reflection.type)("System.IDisposable")))]]]);
}

const O$00601 = (0, _Types.declare)(function Sakhe_Stream_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function O$00601$reflection($gen$$21) {
  return (0, _Reflection.union)("Sakhe.Stream.O`1", [$gen$$21], O$00601, () => [["Event", [_Reflection.float64, $gen$$21]], ["End", [_Reflection.float64]], ["Error", [_Reflection.float64, (0, _Reflection.type)("System.Exception")]]]);
}

function run(run$$1, o, _arg1) {
  const io = _arg1.fields[0];
  return (0, _pith.P$$$run)(o, io(run$$1));
}

function pair(a, b) {
  return [a, b];
}

function at(d, a$$1) {
  return new T$00601(0, "Stream", function (run$$2) {
    return new _pith.Pith$00602(0, "P", function (o$$1) {
      const $arg$$1 = pair(d, function (t) {
        return new _pith.Pith$00602(0, "P", function (_arg1$$1) {
          try {
            o$$1(new O$00601(0, "Event", t, a$$1));
            o$$1(new O$00601(1, "End", t));
          } catch (err) {
            o$$1(new O$00601(2, "Error", t, err));
          }
        });
      });
      return run$$2(new _scheduler.O(2, "Delay", $arg$$1[0], $arg$$1[1]));
    });
  });
}

function now(a$$2) {
  return at(0, a$$2);
}

function periodic(period, a$$3) {
  return new T$00601(0, "Stream", function (run$$3) {
    return new _pith.Pith$00602(0, "P", function (o$$2) {
      const schedule = function schedule(t$$1) {
        return new _pith.Pith$00602(0, "P", function (o$0027) {
          o$0027(new _scheduler.O(1, "Origin", function (t$$2) {
            return new _pith.Pith$00602(0, "P", function (_arg1$$2) {
              try {
                o$$2(new O$00601(0, "Event", t$$2, a$$3));
                o$0027(new _scheduler.O(2, "Delay", period, schedule));
              } catch (err$$1) {
                o$$2(new O$00601(2, "Error", t$$2, err$$1));
              }
            });
          }));
        });
      };

      return run$$3(new _scheduler.O(2, "Delay", 0, schedule));
    });
  });
}

function empty() {
  return new T$00601(0, "Stream", function (run$$4) {
    return new _pith.Pith$00602(0, "P", function (s) {
      return _disposable.empty;
    });
  });
}

function map(f, _arg1$$3) {
  const io$$1 = _arg1$$3.fields[0];
  return new T$00601(0, "Stream", function (run$$5) {
    return new _pith.Pith$00602(0, "P", function (o$$3) {
      return (0, _pith.P$$$run)(function (_arg2) {
        switch (_arg2.tag) {
          case 1:
            {
              const t$$4 = _arg2.fields[0];
              o$$3(new O$00601(1, "End", t$$4));
              break;
            }

          case 2:
            {
              const t$$5 = _arg2.fields[0];
              const err$$2 = _arg2.fields[1];
              o$$3(new O$00601(2, "Error", t$$5, err$$2));
              break;
            }

          default:
            {
              const t$$3 = _arg2.fields[0];
              const a$$4 = _arg2.fields[1];
              const $arg$$6 = [t$$3, f(a$$4)];
              o$$3(new O$00601(0, "Event", $arg$$6[0], $arg$$6[1]));
            }
        }
      }, io$$1(run$$5));
    });
  });
}

function take(n, _arg1$$4) {
  const io$$2 = _arg1$$4.fields[0];
  return new T$00601(0, "Stream", function (run$$6) {
    return new _pith.Pith$00602(0, "P", function (o$$5) {
      let i = 0;
      let d$$1 = _disposable.empty;
      d$$1 = (0, _pith.P$$$run)(function (_arg2$$1) {
        switch (_arg2$$1.tag) {
          case 1:
            {
              const t$$7 = _arg2$$1.fields[0];
              o$$5(new O$00601(1, "End", t$$7));
              break;
            }

          case 2:
            {
              const t$$8 = _arg2$$1.fields[0];
              const err$$3 = _arg2$$1.fields[1];
              o$$5(new O$00601(2, "Error", t$$8, err$$3));
              break;
            }

          default:
            {
              const t$$6 = _arg2$$1.fields[0];
              const a$$5 = _arg2$$1.fields[1];

              if (i < n) {
                o$$5(new O$00601(0, "Event", t$$6, a$$5));
              }

              i = i + 1;

              if (i === n) {
                d$$1.Dispose();
                o$$5(new O$00601(1, "End", t$$6));
              }
            }
        }
      }, io$$2(run$$6));
      return d$$1;
    });
  });
}

function merge(_arg2$$2, _arg1$$5) {
  const a$$6 = _arg2$$2.fields[0];
  const b$$2 = _arg1$$5.fields[0];
  return new T$00601(0, "Stream", function (run$$7) {
    return new _pith.Pith$00602(0, "P", function (o$$7) {
      const map$$1 = new Map([]);
      const disposable = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key) {
          map$$1.get(key).Dispose();
        }, map$$1.keys());
      });

      const o$0027$$1 = function o$0027$$1(k, _arg3) {
        switch (_arg3.tag) {
          case 1:
            {
              const t$$10 = _arg3.fields[0];
              map$$1.delete(k);

              if (map$$1.size === 0) {
                o$$7(new O$00601(1, "End", t$$10));
              }

              break;
            }

          case 2:
            {
              const b$$3 = _arg3.fields[1];
              const a$$8 = _arg3.fields[0];
              disposable.Dispose();
              o$$7(new O$00601(2, "Error", a$$8, b$$3));
              break;
            }

          default:
            {
              const t$$9 = _arg3.fields[0];
              const a$$7 = _arg3.fields[1];
              o$$7(new O$00601(0, "Event", t$$9, a$$7));
            }
        }
      };

      const ioa = a$$6(run$$7);
      const oa = (0, _Util.partialApply)(1, o$0027$$1, [0]);
      const iob = b$$2(run$$7);
      const ob = (0, _Util.partialApply)(1, o$0027$$1, [1]);
      map$$1.set(0, (0, _pith.P$$$run)(oa, ioa));
      map$$1.set(1, (0, _pith.P$$$run)(ob, iob));
      return disposable;
    });
  });
}

function join(_arg1$$6) {
  const io$$3 = _arg1$$6.fields[0];
  return new T$00601(0, "Stream", function (run$$8) {
    return new _pith.Pith$00602(0, "P", function (o$$8) {
      let i$$1 = 0;
      const map$$2 = new Map([]);
      const disposable$$1 = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key$$1) {
          map$$2.get(key$$1).Dispose();
        }, map$$2.keys());
      });

      const end$0027 = function end$0027(t$$11, index) {
        map$$2.delete(index);

        if (map$$2.size === 0) {
          o$$8(new O$00601(1, "End", t$$11));
        }
      };

      const error$0027 = function error$0027(t$$12, err$$4) {
        disposable$$1.Dispose();
        o$$8(new O$00601(2, "Error", t$$12, err$$4));
      };

      const index$$1 = i$$1 | 0;
      i$$1 = i$$1 + 1;
      const d$$3 = (0, _pith.P$$$run)(function (_arg2$$3) {
        switch (_arg2$$3.tag) {
          case 1:
            {
              const t$$14 = _arg2$$3.fields[0];
              end$0027(t$$14, index$$1);
              break;
            }

          case 2:
            {
              const t$$15 = _arg2$$3.fields[0];
              const err$$6 = _arg2$$3.fields[1];
              error$0027(t$$15, err$$6);
              break;
            }

          default:
            {
              const t$$13 = _arg2$$3.fields[0];
              const io$$4 = _arg2$$3.fields[1].fields[0];
              const index$$2 = i$$1 | 0;
              i$$1 = i$$1 + 1;
              const d$$2 = (0, _pith.P$$$run)(function (_arg3$$1) {
                switch (_arg3$$1.tag) {
                  case 1:
                    {
                      const t$0027$$1 = _arg3$$1.fields[0];
                      end$0027(t$$13 + t$0027$$1, index$$2);
                      break;
                    }

                  case 2:
                    {
                      const t$0027$$2 = _arg3$$1.fields[0];
                      const err$$5 = _arg3$$1.fields[1];
                      error$0027(t$$13 + t$0027$$2, err$$5);
                      break;
                    }

                  default:
                    {
                      const t$0027 = _arg3$$1.fields[0];
                      const a$$9 = _arg3$$1.fields[1];
                      const $arg$$18 = [t$$13 + t$0027, a$$9];
                      o$$8(new O$00601(0, "Event", $arg$$18[0], $arg$$18[1]));
                    }
                }
              }, io$$4(run$$8));
              map$$2.set(index$$2, d$$2);
            }
        }
      }, io$$3(run$$8));
      map$$2.set(index$$1, d$$3);
      return disposable$$1;
    });
  });
}

function bind(f$$3, io$$5) {
  return join(map(f$$3, io$$5));
}