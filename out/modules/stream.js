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
exports.on = on;
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

function T$00601$reflection($gen$$23) {
  return (0, _Reflection.union)("Sakhe.Stream.T`1", [$gen$$23], T$00601, () => [["Stream", [(0, _Reflection.lambda)((0, _Reflection.lambda)((0, _scheduler.O$reflection)(), (0, _Reflection.type)("System.IDisposable")), (0, _pith.Pith$00602$reflection)(O$00601$reflection($gen$$23), (0, _Reflection.type)("System.IDisposable")))]]]);
}

const O$00601 = (0, _Types.declare)(function Sakhe_Stream_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function O$00601$reflection($gen$$24) {
  return (0, _Reflection.union)("Sakhe.Stream.O`1", [$gen$$24], O$00601, () => [["Event", [_Reflection.float64, $gen$$24]], ["End", [_Reflection.float64]], ["Error", [_Reflection.float64, (0, _Reflection.type)("System.Exception")]]]);
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

function on(event, et) {
  return new T$00601(0, "Stream", function (schedule) {
    return new _pith.Pith$00602(0, "P", function (o$$2) {
      let d$$1 = _disposable.empty;
      let d$0027;
      const $arg$$3 = pair(0, function (t$$1) {
        return new _pith.Pith$00602(0, "P", function (o$0027) {
          const listener = function listener(e) {
            schedule(new _scheduler.O(1, "Origin", function (t$$2) {
              return new _pith.Pith$00602(0, "P", function (_arg1$$2) {
                o$$2(new O$00601(0, "Event", t$$2, e));
              });
            }));
          };

          et.addEventListener(event, listener);
          d$$1 = (0, _disposable.return$0027)(function () {
            et.removeEventListener(event, listener);
          });
        });
      });
      d$0027 = schedule(new _scheduler.O(2, "Delay", $arg$$3[0], $arg$$3[1]));
      return (0, _disposable.append)(d$0027, (0, _disposable.return$0027)(function () {
        d$$1.Dispose();
      }));
    });
  });
}

function periodic(period, a$$4) {
  return new T$00601(0, "Stream", function (run$$3) {
    return new _pith.Pith$00602(0, "P", function (o$$3) {
      const schedule$$1 = function schedule$$1(t$$3) {
        return new _pith.Pith$00602(0, "P", function (o$0027$$1) {
          o$0027$$1(new _scheduler.O(1, "Origin", function (t$$4) {
            return new _pith.Pith$00602(0, "P", function (_arg1$$3) {
              try {
                o$$3(new O$00601(0, "Event", t$$4, a$$4));
                o$0027$$1(new _scheduler.O(2, "Delay", period, schedule$$1));
              } catch (err$$1) {
                o$$3(new O$00601(2, "Error", t$$4, err$$1));
              }
            });
          }));
        });
      };

      return run$$3(new _scheduler.O(2, "Delay", 0, schedule$$1));
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

function map(f$$2, _arg1$$4) {
  const io$$1 = _arg1$$4.fields[0];
  return new T$00601(0, "Stream", function (run$$5) {
    return new _pith.Pith$00602(0, "P", function (o$$4) {
      return (0, _pith.P$$$run)(function (_arg2) {
        switch (_arg2.tag) {
          case 1:
            {
              const t$$6 = _arg2.fields[0];
              o$$4(new O$00601(1, "End", t$$6));
              break;
            }

          case 2:
            {
              const t$$7 = _arg2.fields[0];
              const err$$2 = _arg2.fields[1];
              o$$4(new O$00601(2, "Error", t$$7, err$$2));
              break;
            }

          default:
            {
              const t$$5 = _arg2.fields[0];
              const a$$5 = _arg2.fields[1];
              const $arg$$9 = [t$$5, f$$2(a$$5)];
              o$$4(new O$00601(0, "Event", $arg$$9[0], $arg$$9[1]));
            }
        }
      }, io$$1(run$$5));
    });
  });
}

function take(n, _arg1$$5) {
  const io$$2 = _arg1$$5.fields[0];
  return new T$00601(0, "Stream", function (run$$6) {
    return new _pith.Pith$00602(0, "P", function (o$$6) {
      let i = 0;
      let d$$2 = _disposable.empty;
      d$$2 = (0, _pith.P$$$run)(function (_arg2$$1) {
        switch (_arg2$$1.tag) {
          case 1:
            {
              const t$$9 = _arg2$$1.fields[0];
              o$$6(new O$00601(1, "End", t$$9));
              break;
            }

          case 2:
            {
              const t$$10 = _arg2$$1.fields[0];
              const err$$3 = _arg2$$1.fields[1];
              o$$6(new O$00601(2, "Error", t$$10, err$$3));
              break;
            }

          default:
            {
              const t$$8 = _arg2$$1.fields[0];
              const a$$6 = _arg2$$1.fields[1];

              if (i < n) {
                o$$6(new O$00601(0, "Event", t$$8, a$$6));
              }

              i = i + 1;

              if (i === n) {
                d$$2.Dispose();
                o$$6(new O$00601(1, "End", t$$8));
              }
            }
        }
      }, io$$2(run$$6));
      return d$$2;
    });
  });
}

function merge(_arg2$$2, _arg1$$6) {
  const a$$7 = _arg2$$2.fields[0];
  const b$$3 = _arg1$$6.fields[0];
  return new T$00601(0, "Stream", function (run$$7) {
    return new _pith.Pith$00602(0, "P", function (o$$8) {
      const map$$1 = new Map([]);
      const disposable = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key) {
          map$$1.get(key).Dispose();
        }, map$$1.keys());
      });

      const o$0027$$2 = function o$0027$$2(k, _arg3) {
        switch (_arg3.tag) {
          case 1:
            {
              const t$$12 = _arg3.fields[0];
              map$$1.delete(k);

              if (map$$1.size === 0) {
                o$$8(new O$00601(1, "End", t$$12));
              }

              break;
            }

          case 2:
            {
              const b$$4 = _arg3.fields[1];
              const a$$9 = _arg3.fields[0];
              disposable.Dispose();
              o$$8(new O$00601(2, "Error", a$$9, b$$4));
              break;
            }

          default:
            {
              const t$$11 = _arg3.fields[0];
              const a$$8 = _arg3.fields[1];
              o$$8(new O$00601(0, "Event", t$$11, a$$8));
            }
        }
      };

      map$$1.set(0, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027$$2, [0]), a$$7(run$$7)));
      map$$1.set(1, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027$$2, [1]), b$$3(run$$7)));
      return disposable;
    });
  });
}

function join(_arg1$$7) {
  const io$$3 = _arg1$$7.fields[0];
  return new T$00601(0, "Stream", function (run$$8) {
    return new _pith.Pith$00602(0, "P", function (o$$9) {
      let i$$1 = 0;
      const map$$2 = new Map([]);
      const disposable$$1 = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key$$1) {
          map$$2.get(key$$1).Dispose();
        }, map$$2.keys());
      });

      const end$0027 = function end$0027(t$$13, index) {
        map$$2.delete(index);

        if (map$$2.size === 0) {
          o$$9(new O$00601(1, "End", t$$13));
        }
      };

      const error$0027 = function error$0027(t$$14, err$$4) {
        disposable$$1.Dispose();
        o$$9(new O$00601(2, "Error", t$$14, err$$4));
      };

      const index$$1 = i$$1 | 0;
      i$$1 = i$$1 + 1;
      const d$$4 = (0, _pith.P$$$run)(function (_arg2$$3) {
        switch (_arg2$$3.tag) {
          case 1:
            {
              const t$$16 = _arg2$$3.fields[0];
              end$0027(t$$16, index$$1);
              break;
            }

          case 2:
            {
              const t$$17 = _arg2$$3.fields[0];
              const err$$6 = _arg2$$3.fields[1];
              error$0027(t$$17, err$$6);
              break;
            }

          default:
            {
              const t$$15 = _arg2$$3.fields[0];
              const io$$4 = _arg2$$3.fields[1].fields[0];
              const index$$2 = i$$1 | 0;
              i$$1 = i$$1 + 1;
              const d$$3 = (0, _pith.P$$$run)(function (_arg3$$1) {
                switch (_arg3$$1.tag) {
                  case 1:
                    {
                      const t$0027$$1 = _arg3$$1.fields[0];
                      end$0027(t$$15 + t$0027$$1, index$$2);
                      break;
                    }

                  case 2:
                    {
                      const t$0027$$2 = _arg3$$1.fields[0];
                      const err$$5 = _arg3$$1.fields[1];
                      error$0027(t$$15 + t$0027$$2, err$$5);
                      break;
                    }

                  default:
                    {
                      const t$0027 = _arg3$$1.fields[0];
                      const a$$10 = _arg3$$1.fields[1];
                      const $arg$$21 = [t$$15 + t$0027, a$$10];
                      o$$9(new O$00601(0, "Event", $arg$$21[0], $arg$$21[1]));
                    }
                }
              }, io$$4(run$$8));
              map$$2.set(index$$2, d$$3);
            }
        }
      }, io$$3(run$$8));
      map$$2.set(index$$1, d$$4);
      return disposable$$1;
    });
  });
}

function bind(f$$5, io$$5) {
  return join(map(f$$5, io$$5));
}