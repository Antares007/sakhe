"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.O$00601$reflection = O$00601$reflection;
exports.run = run;
exports.pair = pair;
exports.at = at;
exports.fromArray = fromArray;
exports.now = now;
exports.on = on;
exports.periodic = periodic;
exports.empty = empty;
exports.map = map;
exports.filter = filter;
exports.fold = fold;
exports.tap = tap;
exports.take = take;
exports.merge = merge;
exports.mergeArray = mergeArray;
exports.combineArray = combineArray;
exports.join = join;
exports.bind = bind;
exports.O$00601 = void 0;

var _Types = require("./fable-library.2.1.7/Types");

var _Reflection = require("./fable-library.2.1.7/Reflection");

var _pith = require("./pith");

var _scheduler = require("./scheduler");

var _disposable = require("./disposable");

var _Seq = require("./fable-library.2.1.7/Seq");

var _Util = require("./fable-library.2.1.7/Util");

var _Array = require("./fable-library.2.1.7/Array");

var _Option = require("./fable-library.2.1.7/Option");

const O$00601 = (0, _Types.declare)(function Sakhe_Stream_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function O$00601$reflection($gen$$35) {
  return (0, _Reflection.union)("Sakhe.Stream.O`1", [$gen$$35], O$00601, () => [["Event", [_Reflection.float64, $gen$$35]], ["End", [_Reflection.float64]], ["Error", [_Reflection.float64, (0, _Reflection.type)("System.Exception")]]]);
}

function run(run$$1, o, _arg1) {
  const io = _arg1;
  return (0, _pith.P$$$run)(o, io(run$$1));
}

function pair(a, b) {
  return [a, b];
}

function at(d, a$$1) {
  return function (run$$2) {
    return function (o$$1) {
      const $arg$$1 = pair(d, function (t) {
        return function (_arg1$$1) {
          try {
            o$$1(new O$00601(0, "Event", t, a$$1));
            o$$1(new O$00601(1, "End", t));
          } catch (err) {
            o$$1(new O$00601(2, "Error", t, err));
          }
        };
      });
      return run$$2(new _scheduler.O(2, "Delay", $arg$$1[0], $arg$$1[1]));
    };
  };
}

function fromArray(arr) {
  return function (run$$3) {
    return function (o$$2) {
      const $arg$$3 = pair(0, function (t$$1) {
        return function (_arg1$$2) {
          try {
            const to$0027 = arr.length - 1 | 0;

            for (let i = 0; i <= to$0027; i++) {
              o$$2(new O$00601(0, "Event", t$$1, arr[i]));
            }

            o$$2(new O$00601(1, "End", t$$1));
          } catch (err$$1) {
            o$$2(new O$00601(2, "Error", t$$1, err$$1));
          }
        };
      });
      return run$$3(new _scheduler.O(2, "Delay", $arg$$3[0], $arg$$3[1]));
    };
  };
}

function now(a$$3) {
  return at(0, a$$3);
}

function on(event, et) {
  return function (schedule) {
    return function (o$$3) {
      let d$$1 = _disposable.empty;
      const d$0027 = schedule(new _scheduler.O(1, "Origin", function (t$0027) {
        return function (o$0027) {
          const listener = function listener(e) {
            schedule(new _scheduler.O(1, "Origin", function (t$$2) {
              return function (_arg1$$3) {
                o$$3(new O$00601(0, "Event", t$$2 - t$0027, e));
              };
            }));
          };

          et.addEventListener(event, listener);
          d$$1 = (0, _disposable.return$0027)(function () {
            et.removeEventListener(event, listener);
          });
        };
      }));
      return (0, _disposable.append)(d$0027, (0, _disposable.return$0027)(function () {
        d$$1.Dispose();
      }));
    };
  };
}

function periodic(period, a$$4) {
  return function (run$$4) {
    return function (o$$4) {
      const schedule$$1 = function schedule$$1(t$$3) {
        return function (o$0027$$1) {
          try {
            o$$4(new O$00601(0, "Event", t$$3, a$$4));
            o$0027$$1(new _scheduler.O(2, "Delay", period, schedule$$1));
          } catch (err$$2) {
            o$$4(new O$00601(2, "Error", t$$3, err$$2));
          }
        };
      };

      return run$$4(new _scheduler.O(2, "Delay", 0, schedule$$1));
    };
  };
}

function empty() {
  return function (run$$5) {
    return function (s) {
      return _disposable.empty;
    };
  };
}

function map(f$$2, _arg1$$4) {
  const io$$1 = _arg1$$4;
  return function (run$$6) {
    return function (o$$5) {
      return (0, _pith.P$$$run)(function (_arg2) {
        switch (_arg2.tag) {
          case 1:
            {
              const t$$5 = _arg2.fields[0];
              o$$5(new O$00601(1, "End", t$$5));
              break;
            }

          case 2:
            {
              const t$$6 = _arg2.fields[0];
              const err$$3 = _arg2.fields[1];
              o$$5(new O$00601(2, "Error", t$$6, err$$3));
              break;
            }

          default:
            {
              const t$$4 = _arg2.fields[0];
              const a$$5 = _arg2.fields[1];
              const $arg$$9 = [t$$4, f$$2(a$$5)];
              o$$5(new O$00601(0, "Event", $arg$$9[0], $arg$$9[1]));
            }
        }
      }, io$$1(run$$6));
    };
  };
}

function filter(f$$3, _arg1$$5) {
  const io$$2 = _arg1$$5;
  return function (run$$7) {
    return function (o$$7) {
      return (0, _pith.P$$$run)(function (_arg2$$1) {
        switch (_arg2$$1.tag) {
          case 1:
            {
              const t$$8 = _arg2$$1.fields[0];
              o$$7(new O$00601(1, "End", t$$8));
              break;
            }

          case 2:
            {
              const t$$9 = _arg2$$1.fields[0];
              const err$$4 = _arg2$$1.fields[1];
              o$$7(new O$00601(2, "Error", t$$9, err$$4));
              break;
            }

          default:
            {
              const t$$7 = _arg2$$1.fields[0];
              const a$$6 = _arg2$$1.fields[1];

              if (f$$3(a$$6)) {
                o$$7(new O$00601(0, "Event", t$$7, a$$6));
              }
            }
        }
      }, io$$2(run$$7));
    };
  };
}

function fold(f$$4, s$0027, _arg1$$6) {
  const io$$3 = _arg1$$6;
  return function (run$$8) {
    return function (o$$9) {
      let s$$1 = s$0027;
      return (0, _pith.P$$$run)(function (_arg2$$2) {
        switch (_arg2$$2.tag) {
          case 1:
            {
              const t$$11 = _arg2$$2.fields[0];
              const $arg$$15 = [t$$11, s$$1];
              o$$9(new O$00601(0, "Event", $arg$$15[0], $arg$$15[1]));
              o$$9(new O$00601(1, "End", t$$11));
              break;
            }

          case 2:
            {
              const t$$12 = _arg2$$2.fields[0];
              const err$$5 = _arg2$$2.fields[1];
              o$$9(new O$00601(2, "Error", t$$12, err$$5));
              break;
            }

          default:
            {
              const t$$10 = _arg2$$2.fields[0];
              const a$$7 = _arg2$$2.fields[1];
              s$$1 = f$$4(s$$1, a$$7);
            }
        }
      }, io$$3(run$$8));
    };
  };
}

function tap(f$$5, _arg1$$7) {
  const io$$4 = _arg1$$7;
  return function (run$$9) {
    return function (o$$11) {
      return (0, _pith.P$$$run)(function (_arg2$$3) {
        if (_arg2$$3.tag === 0) {
          const t$$13 = _arg2$$3.fields[0];
          const e$$1 = _arg2$$3;
          const a$$8 = _arg2$$3.fields[1];
          f$$5(a$$8);
          o$$11(e$$1);
        } else {
          const x = _arg2$$3;
          o$$11(x);
        }
      }, io$$4(run$$9));
    };
  };
}

function take(n, _arg1$$8) {
  const io$$5 = _arg1$$8;
  return function (run$$10) {
    return function (o$$13) {
      let i$$1 = 0;
      let d$$2 = _disposable.empty;
      d$$2 = (0, _pith.P$$$run)(function (_arg2$$4) {
        switch (_arg2$$4.tag) {
          case 1:
            {
              const t$$15 = _arg2$$4.fields[0];
              o$$13(new O$00601(1, "End", t$$15));
              break;
            }

          case 2:
            {
              const t$$16 = _arg2$$4.fields[0];
              const err$$6 = _arg2$$4.fields[1];
              o$$13(new O$00601(2, "Error", t$$16, err$$6));
              break;
            }

          default:
            {
              const t$$14 = _arg2$$4.fields[0];
              const a$$9 = _arg2$$4.fields[1];

              if (i$$1 < n) {
                o$$13(new O$00601(0, "Event", t$$14, a$$9));
              }

              i$$1 = i$$1 + 1;

              if (i$$1 === n) {
                d$$2.Dispose();
                o$$13(new O$00601(1, "End", t$$14));
              }
            }
        }
      }, io$$5(run$$10));
      return d$$2;
    };
  };
}

function merge(_arg2$$5, _arg1$$9) {
  const a$$10 = _arg2$$5;
  const b$$3 = _arg1$$9;
  return function (run$$11) {
    return function (o$$15) {
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
              const t$$18 = _arg3.fields[0];
              map$$1.delete(k);

              if (map$$1.size === 0) {
                o$$15(new O$00601(1, "End", t$$18));
              }

              break;
            }

          case 2:
            {
              const b$$4 = _arg3.fields[1];
              const a$$12 = _arg3.fields[0];
              disposable.Dispose();
              o$$15(new O$00601(2, "Error", a$$12, b$$4));
              break;
            }

          default:
            {
              const t$$17 = _arg3.fields[0];
              const a$$11 = _arg3.fields[1];
              o$$15(new O$00601(0, "Event", t$$17, a$$11));
            }
        }
      };

      map$$1.set(0, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027$$2, [0]), a$$10(run$$11)));
      map$$1.set(1, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027$$2, [1]), b$$3(run$$11)));
      return disposable;
    };
  };
}

function mergeArray(ios) {
  return function (run$$12) {
    return function (o$$16) {
      const map$$2 = new Map([]);
      const disposable$$1 = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key$$1) {
          map$$2.get(key$$1).Dispose();
        }, map$$2.keys());
      });

      const o$0027$$3 = function o$0027$$3(k$$1, _arg1$$10) {
        switch (_arg1$$10.tag) {
          case 1:
            {
              const t$$20 = _arg1$$10.fields[0];
              map$$2.delete(k$$1);

              if (map$$2.size === 0) {
                o$$16(new O$00601(1, "End", t$$20));
              }

              break;
            }

          case 2:
            {
              const b$$5 = _arg1$$10.fields[1];
              const a$$14 = _arg1$$10.fields[0];
              disposable$$1.Dispose();
              o$$16(new O$00601(2, "Error", a$$14, b$$5));
              break;
            }

          default:
            {
              const t$$19 = _arg1$$10.fields[0];
              const a$$13 = _arg1$$10.fields[1];
              o$$16(new O$00601(0, "Event", t$$19, a$$13));
            }
        }
      };

      for (let i$$2 = 0; i$$2 <= ios.length - 1; i$$2++) {
        const io$$6 = ios[i$$2];
        map$$2.set(i$$2, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027$$3, [i$$2]), io$$6(run$$12)));
      }

      return disposable$$1;
    };
  };
}

function combineArray(ios$$1) {
  return function (run$$13) {
    return function (o$$17) {
      const values = (0, _Array.map)(function mapping(_arg1$$11) {
        return null;
      }, ios$$1, Array);
      let allFired = false;
      const map$$3 = new Map([]);
      const disposable$$2 = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key$$2) {
          map$$3.get(key$$2).Dispose();
        }, map$$3.keys());
      });

      const o$0027$$4 = function o$0027$$4(k$$2, _arg1$$12) {
        switch (_arg1$$12.tag) {
          case 1:
            {
              const t$$22 = _arg1$$12.fields[0];
              map$$3.delete(k$$2);

              if (map$$3.size === 0) {
                o$$17(new O$00601(1, "End", t$$22));
              }

              break;
            }

          case 2:
            {
              const t$$23 = _arg1$$12.fields[0];
              const err$$7 = _arg1$$12.fields[1];
              disposable$$2.Dispose();
              o$$17(new O$00601(2, "Error", t$$23, err$$7));
              break;
            }

          default:
            {
              const t$$21 = _arg1$$12.fields[0];
              const a$$15 = _arg1$$12.fields[1];
              values[k$$2] = (0, _Option.some)(a$$15);

              if (!allFired) {
                allFired = !values.some(function predicate(o$$18) {
                  return o$$18 == null;
                });
              }

              if (allFired) {
                const $arg$$28 = [t$$21, (0, _Array.map)(function mapping$$1(o$$19) {
                  return (0, _Option.value)(o$$19);
                }, values, Array)];
                o$$17(new O$00601(0, "Event", $arg$$28[0], $arg$$28[1]));
              }
            }
        }
      };

      for (let i$$3 = 0; i$$3 <= ios$$1.length - 1; i$$3++) {
        const io$$7 = ios$$1[i$$3];
        map$$3.set(i$$3, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027$$4, [i$$3]), io$$7(run$$13)));
      }

      return disposable$$2;
    };
  };
}

function join(_arg1$$13) {
  const io$$8 = _arg1$$13;
  return function (run$$14) {
    return function (o$$20) {
      let i$$4 = 0;
      const map$$4 = new Map([]);
      const disposable$$3 = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key$$3) {
          map$$4.get(key$$3).Dispose();
        }, map$$4.keys());
      });

      const end$0027 = function end$0027(t$$24, index) {
        map$$4.delete(index);

        if (map$$4.size === 0) {
          o$$20(new O$00601(1, "End", t$$24));
        }
      };

      const error$0027 = function error$0027(t$$25, err$$8) {
        disposable$$3.Dispose();
        o$$20(new O$00601(2, "Error", t$$25, err$$8));
      };

      const index$$1 = i$$4 | 0;
      i$$4 = i$$4 + 1;
      const d$$4 = (0, _pith.P$$$run)(function (_arg2$$6) {
        switch (_arg2$$6.tag) {
          case 1:
            {
              const t$$27 = _arg2$$6.fields[0];
              end$0027(t$$27, index$$1);
              break;
            }

          case 2:
            {
              const t$$28 = _arg2$$6.fields[0];
              const err$$10 = _arg2$$6.fields[1];
              error$0027(t$$28, err$$10);
              break;
            }

          default:
            {
              const t$$26 = _arg2$$6.fields[0];
              const io$$9 = _arg2$$6.fields[1];
              const index$$2 = i$$4 | 0;
              i$$4 = i$$4 + 1;
              const d$$3 = (0, _pith.P$$$run)(function (_arg3$$1) {
                switch (_arg3$$1.tag) {
                  case 1:
                    {
                      const t$0027$$2 = _arg3$$1.fields[0];
                      end$0027(t$$26 + t$0027$$2, index$$2);
                      break;
                    }

                  case 2:
                    {
                      const t$0027$$3 = _arg3$$1.fields[0];
                      const err$$9 = _arg3$$1.fields[1];
                      error$0027(t$$26 + t$0027$$3, err$$9);
                      break;
                    }

                  default:
                    {
                      const t$0027$$1 = _arg3$$1.fields[0];
                      const a$$16 = _arg3$$1.fields[1];
                      const $arg$$33 = [t$$26 + t$0027$$1, a$$16];
                      o$$20(new O$00601(0, "Event", $arg$$33[0], $arg$$33[1]));
                    }
                }
              }, io$$9(run$$14));
              map$$4.set(index$$2, d$$3);
            }
        }
      }, io$$8(run$$14));
      map$$4.set(index$$1, d$$4);
      return disposable$$3;
    };
  };
}

function bind(f$$10, io$$10) {
  return join(map(f$$10, io$$10));
}