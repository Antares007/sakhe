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
exports.empty = empty;
exports.map = map;
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

function T$00601$reflection($gen$$13) {
  return (0, _Reflection.union)("Sakhe.Stream.T`1", [$gen$$13], T$00601, () => [["Stream", [(0, _Reflection.lambda)((0, _Reflection.lambda)((0, _scheduler.O$reflection)(), (0, _Reflection.type)("System.IDisposable")), (0, _pith.Pith$00602$reflection)(O$00601$reflection($gen$$13), (0, _Reflection.type)("System.IDisposable")))]]]);
}

const O$00601 = (0, _Types.declare)(function Sakhe_Stream_O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function O$00601$reflection($gen$$14) {
  return (0, _Reflection.union)("Sakhe.Stream.O`1", [$gen$$14], O$00601, () => [["Event", [_Reflection.float64, $gen$$14]], ["End", [_Reflection.float64]], ["Error", [_Reflection.float64, (0, _Reflection.type)("System.Exception")]]]);
}

function run(run$$1, o, _arg1) {
  const io = _arg1.fields[0];
  return (0, _pith.P$$$run)(o, io(run$$1));
}

function pair(a, b) {
  return [a, b];
}

function at(a$$1, b$$1) {
  return new T$00601(0, "Stream", function (run$$2) {
    return new _pith.Pith$00602(0, "P", function (o$$1) {
      const $arg$$1 = pair(b$$1, function (t) {
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
  return at(a$$2, 0);
}

function empty() {
  return new T$00601(0, "Stream", function (run$$3) {
    return new _pith.Pith$00602(0, "P", function (s) {
      return _disposable.empty;
    });
  });
}

function map(f, _arg1$$2) {
  const io$$1 = _arg1$$2.fields[0];
  return new T$00601(0, "Stream", function (run$$4) {
    return new _pith.Pith$00602(0, "P", function (o$$2) {
      return (0, _pith.P$$$run)(function (_arg2) {
        switch (_arg2.tag) {
          case 1:
            {
              const t$$2 = _arg2.fields[0];
              o$$2(new O$00601(1, "End", t$$2));
              break;
            }

          case 2:
            {
              const t$$3 = _arg2.fields[0];
              const err$$1 = _arg2.fields[1];
              o$$2(new O$00601(2, "Error", t$$3, err$$1));
              break;
            }

          default:
            {
              const t$$1 = _arg2.fields[0];
              const a$$3 = _arg2.fields[1];
              const $arg$$3 = [t$$1, f(a$$3)];
              o$$2(new O$00601(0, "Event", $arg$$3[0], $arg$$3[1]));
            }
        }
      }, io$$1(run$$4));
    });
  });
}

function merge(_arg2$$1, _arg1$$3) {
  const a$$4 = _arg2$$1.fields[0];
  const b$$3 = _arg1$$3.fields[0];
  return new T$00601(0, "Stream", function (run$$5) {
    return new _pith.Pith$00602(0, "P", function (o$$4) {
      const map$$1 = new Map([]);
      const disposable = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key) {
          map$$1.get(key).Dispose();
        }, map$$1.keys());
      });

      const o$0027 = function o$0027(k, _arg3) {
        switch (_arg3.tag) {
          case 1:
            {
              const t$$5 = _arg3.fields[0];
              map$$1.delete(k);

              if (map$$1.size === 0) {
                o$$4(new O$00601(1, "End", t$$5));
              }

              break;
            }

          case 2:
            {
              const b$$4 = _arg3.fields[1];
              const a$$6 = _arg3.fields[0];
              disposable.Dispose();
              o$$4(new O$00601(2, "Error", a$$6, b$$4));
              break;
            }

          default:
            {
              const t$$4 = _arg3.fields[0];
              const a$$5 = _arg3.fields[1];
              o$$4(new O$00601(0, "Event", t$$4, a$$5));
            }
        }
      };

      map$$1.set(0, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027, [0]), a$$4(run$$5)));
      map$$1.set(1, (0, _pith.P$$$run)((0, _Util.partialApply)(1, o$0027, [1]), b$$3(run$$5)));
      return disposable;
    });
  });
}

function join(_arg1$$4) {
  const io$$2 = _arg1$$4.fields[0];
  return new T$00601(0, "Stream", function (run$$6) {
    return new _pith.Pith$00602(0, "P", function (o$$5) {
      let i = 0;
      const map$$2 = new Map([]);
      const disposable$$1 = (0, _disposable.return$0027)(function () {
        (0, _Seq.iterate)(function (key$$1) {
          map$$2.get(key$$1).Dispose();
        }, map$$2.keys());
      });

      const end$0027 = function end$0027(t$$6, index) {
        map$$2.delete(index);

        if (map$$2.size === 0) {
          o$$5(new O$00601(1, "End", t$$6));
        }
      };

      const error$0027 = function error$0027(t$$7, err$$2) {
        disposable$$1.Dispose();
        o$$5(new O$00601(2, "Error", t$$7, err$$2));
      };

      const index$$1 = i | 0;
      i = i + 1;
      const d$$1 = (0, _pith.P$$$run)(function (_arg2$$2) {
        switch (_arg2$$2.tag) {
          case 1:
            {
              const t$$9 = _arg2$$2.fields[0];
              end$0027(t$$9, index$$1);
              break;
            }

          case 2:
            {
              const t$$10 = _arg2$$2.fields[0];
              const err$$4 = _arg2$$2.fields[1];
              error$0027(t$$10, err$$4);
              break;
            }

          default:
            {
              const t$$8 = _arg2$$2.fields[0];
              const io$$3 = _arg2$$2.fields[1].fields[0];
              const index$$2 = i | 0;
              i = i + 1;
              const d = (0, _pith.P$$$run)(function (_arg3$$1) {
                switch (_arg3$$1.tag) {
                  case 1:
                    {
                      const t$0027$$1 = _arg3$$1.fields[0];
                      end$0027(t$$8 + t$0027$$1, index$$2);
                      break;
                    }

                  case 2:
                    {
                      const t$0027$$2 = _arg3$$1.fields[0];
                      const err$$3 = _arg3$$1.fields[1];
                      error$0027(t$$8 + t$0027$$2, err$$3);
                      break;
                    }

                  default:
                    {
                      const t$0027 = _arg3$$1.fields[0];
                      const a$$7 = _arg3$$1.fields[1];
                      const $arg$$11 = [t$$8 + t$0027, a$$7];
                      o$$5(new O$00601(0, "Event", $arg$$11[0], $arg$$11[1]));
                    }
                }
              }, io$$3(run$$6));
              map$$2.set(index$$2, d);
            }
        }
      }, io$$2(run$$6));
      map$$2.set(index$$1, d$$1);
      return disposable$$1;
    });
  });
}

function bind(f$$3, io$$4) {
  return join(map(f$$3, io$$4));
}