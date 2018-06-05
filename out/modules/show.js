"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disposable = exports.Stream = exports.State = exports.Reader = exports.Writer = undefined;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _update = require("./update");

var _state = require("./state");

var _String = require("./fable-core/String");

var _s = require("./s");

var _pith = require("./pith");

var _Seq = require("./fable-core/Seq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Writer = exports.Writer = function (__exports) {
  const WriterState = __exports.WriterState = class WriterState {
    constructor(tag) {
      this.tag = tag | 0;
    }

    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Show.Writer.WriterState",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: [["NoState"]]
      };
    }

    Equals(other) {
      return this.tag === other.tag;
    }

    CompareTo(other) {
      return (0, _Util.comparePrimitives)(this.tag, other.tag);
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.Writer.WriterState", WriterState);
  const WriterUpdate = __exports.WriterUpdate = class WriterUpdate {
    constructor(tag, data) {
      this.tag = tag | 0;
      this.data = data;
    }

    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Show.Writer.WriterUpdate",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: [["Log", (0, _Util.makeGeneric)(_List2.default, {
          T: (0, _Util.GenericParam)("TLog")
        })]]
      };
    }

    Equals(other) {
      return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
    }

    CompareTo(other) {
      return (0, _Util.compareUnions)(this, other) | 0;
    }

    static get Unit() {
      return new WriterUpdate(0, new _List2.default());
    }

    static Combine(_arg1, _arg2) {
      return new WriterUpdate(0, (0, _List.append)(_arg1.data, _arg2.data));
    }

    static Apply(_arg3, _arg4) {
      return new WriterState(0);
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.Writer.WriterUpdate", WriterUpdate);

  const write = __exports.write = function (v) {
    return new _update.UpdateMonad(0, function (_arg1) {
      return [new WriterUpdate(0, (0, _List.ofArray)([v])), null];
    });
  };

  const writeRun = __exports.writeRun = function (_arg1) {
    const patternInput = _arg1.data(new WriterState(0));

    const l = patternInput[0].data;
    return [l, patternInput[1]];
  };

  const Demo = __exports.Demo = function (__exports) {
    const demo3 = __exports.demo3 = function (builder_) {
      return new _update.UpdateMonad(0, s_1 => {
        const patternInput_3 = new _update.UpdateMonad(0, _arg1_2 => [WriterUpdate.Unit, null]).data(s_1);

        const patternInput_4 = function () {
          return new _update.UpdateMonad(0, s => {
            const patternInput = write(20).data(s);

            const patternInput_1 = function () {
              return new _update.UpdateMonad(0, _arg1_1 => [WriterUpdate.Unit, "world"]);
            }();

            const patternInput_2 = patternInput_1.data(WriterUpdate.Apply(s, patternInput[0]));
            return [WriterUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
          });
        }();

        const patternInput_5 = patternInput_4.data(WriterUpdate.Apply(s_1, patternInput_3[0]));
        return [WriterUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
      });
    }(_update.update);

    const demo4 = __exports.demo4 = function (builder_) {
      return new _update.UpdateMonad(0, s_2 => {
        const patternInput_6 = new _update.UpdateMonad(0, _arg1_2 => [WriterUpdate.Unit, null]).data(s_2);

        const patternInput_7 = function () {
          return new _update.UpdateMonad(0, s_1 => {
            const patternInput_3 = demo3.data(s_1);

            const patternInput_4 = function (_arg1) {
              return new _update.UpdateMonad(0, s => {
                const patternInput = write(10).data(s);

                const patternInput_1 = function () {
                  return new _update.UpdateMonad(0, _arg1_1 => [WriterUpdate.Unit, "Hello " + _arg1]);
                }();

                const patternInput_2 = patternInput_1.data(WriterUpdate.Apply(s, patternInput[0]));
                return [WriterUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
              });
            }(patternInput_3[1]);

            const patternInput_5 = patternInput_4.data(WriterUpdate.Apply(s_1, patternInput_3[0]));
            return [WriterUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
          });
        }();

        const patternInput_8 = patternInput_7.data(WriterUpdate.Apply(s_2, patternInput_6[0]));
        return [WriterUpdate.Combine(patternInput_6[0], patternInput_8[0]), patternInput_8[1]];
      });
    }(_update.update);

    return __exports;
  }({});

  return __exports;
}({});

const Reader = exports.Reader = function (__exports) {
  const ReaderUpdate = __exports.ReaderUpdate = class ReaderUpdate {
    constructor(tag) {
      this.tag = tag | 0;
    }

    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Show.Reader.ReaderUpdate",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: [["NoUpdate"]]
      };
    }

    Equals(other) {
      return this.tag === other.tag;
    }

    CompareTo(other) {
      return (0, _Util.comparePrimitives)(this.tag, other.tag);
    }

    static get Unit() {
      return new ReaderUpdate(0);
    }

    static Combine(_arg1, _arg2) {
      return new ReaderUpdate(0);
    }

    static Apply(s, _arg3) {
      return s;
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.Reader.ReaderUpdate", ReaderUpdate);
  const read = __exports.read = new _update.UpdateMonad(0, function (s) {
    return [new ReaderUpdate(0), s];
  });

  const readRun = __exports.readRun = function (s, _arg1) {
    return _arg1.data(s)[1];
  };

  const Demo = __exports.Demo = function (__exports) {
    const demo1 = __exports.demo1 = function (builder_) {
      return new _update.UpdateMonad(0, s_1 => {
        const patternInput_3 = new _update.UpdateMonad(0, _arg1_2 => [ReaderUpdate.Unit, null]).data(s_1);

        const patternInput_4 = function () {
          return new _update.UpdateMonad(0, s => {
            const patternInput = read.data(s);

            const patternInput_1 = function (_arg1) {
              return new _update.UpdateMonad(0, _arg1_1 => [ReaderUpdate.Unit, _arg1 + 1]);
            }(patternInput[1]);

            const patternInput_2 = patternInput_1.data(ReaderUpdate.Apply(s, patternInput[0]));
            return [ReaderUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
          });
        }();

        const patternInput_5 = patternInput_4.data(ReaderUpdate.Apply(s_1, patternInput_3[0]));
        return [ReaderUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
      });
    }(_update.update);

    const demo2 = __exports.demo2 = function (builder_) {
      return new _update.UpdateMonad(0, s_1 => {
        const patternInput_3 = new _update.UpdateMonad(0, _arg1_2 => [ReaderUpdate.Unit, null]).data(s_1);

        const patternInput_4 = function () {
          return new _update.UpdateMonad(0, s => {
            const patternInput = demo1.data(s);

            const patternInput_1 = function (_arg1) {
              return new _update.UpdateMonad(0, _arg1_1 => [ReaderUpdate.Unit, _arg1 + 1]);
            }(patternInput[1]);

            const patternInput_2 = patternInput_1.data(ReaderUpdate.Apply(s, patternInput[0]));
            return [ReaderUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
          });
        }();

        const patternInput_5 = patternInput_4.data(ReaderUpdate.Apply(s_1, patternInput_3[0]));
        return [ReaderUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
      });
    }(_update.update);

    return __exports;
  }({});

  return __exports;
}({});

const State = exports.State = function (__exports) {
  const u = __exports.u = function (l) {
    return function (builder_) {
      return new _state.M(0, new _update.UpdateMonad(0, s_5 => {
        const patternInput_20 = new _update.UpdateMonad(0, _arg1_5 => [_state.StateUpdate.Unit, null]).data(s_5);

        const patternInput_21 = (() => {
          const patternInput_19 = function () {
            return new _state.M(0, new _update.UpdateMonad(0, s_4 => {
              const patternInput_16 = (0, _state.get)().data.data(s_4);

              const patternInput_17 = (a_3 => {
                const patternInput_15 = function (_arg1) {
                  return new _state.M(0, new _update.UpdateMonad(0, s_3 => {
                    const patternInput_12 = (_arg1.tail != null ? new _state.M(0, new _update.UpdateMonad(0, s => {
                      const patternInput_1 = (0, _state.set)(new _List2.default(_arg1.head + 1, _arg1)).data.data(s);

                      const patternInput_2 = (a => {
                        const patternInput = function () {
                          return new _state.M(0, new _update.UpdateMonad(0, _arg1_1 => [_state.StateUpdate.Unit, null]));
                        }(a);

                        return patternInput.data;
                      })(patternInput_1[1]);

                      const patternInput_3 = patternInput_2.data(_state.StateUpdate.Apply(s, patternInput_1[0]));
                      return [_state.StateUpdate.Combine(patternInput_1[0], patternInput_3[0]), patternInput_3[1]];
                    })) : new _state.M(0, new _update.UpdateMonad(0, s_1 => {
                      const patternInput_5 = (0, _state.set)((0, _List.ofArray)([1])).data.data(s_1);

                      const patternInput_6 = (a_1 => {
                        const patternInput_4 = function () {
                          return new _state.M(0, new _update.UpdateMonad(0, _arg1_2 => [_state.StateUpdate.Unit, null]));
                        }(a_1);

                        return patternInput_4.data;
                      })(patternInput_5[1]);

                      const patternInput_7 = patternInput_6.data(_state.StateUpdate.Apply(s_1, patternInput_5[0]));
                      return [_state.StateUpdate.Combine(patternInput_5[0], patternInput_7[0]), patternInput_7[1]];
                    }))).data.data(s_3);

                    const patternInput_13 = (() => new _state.M(0, new _update.UpdateMonad(0, s_2 => {
                      const patternInput_9 = new _update.UpdateMonad(0, _arg1_4 => [_state.StateUpdate.Unit, null]).data(s_2);

                      const patternInput_10 = (() => {
                        const patternInput_8 = function () {
                          return new _state.M(0, new _update.UpdateMonad(0, _arg1_3 => [_state.StateUpdate.Unit, l + (0, _String.toText)((0, _String.printf)("%A"))(_arg1)]));
                        }();

                        return patternInput_8.data;
                      })();

                      const patternInput_11 = patternInput_10.data(_state.StateUpdate.Apply(s_2, patternInput_9[0]));
                      return [_state.StateUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
                    })).data)();

                    const patternInput_14 = patternInput_13.data(_state.StateUpdate.Apply(s_3, patternInput_12[0]));
                    return [_state.StateUpdate.Combine(patternInput_12[0], patternInput_14[0]), patternInput_14[1]];
                  }));
                }(a_3);

                return patternInput_15.data;
              })(patternInput_16[1]);

              const patternInput_18 = patternInput_17.data(_state.StateUpdate.Apply(s_4, patternInput_16[0]));
              return [_state.StateUpdate.Combine(patternInput_16[0], patternInput_18[0]), patternInput_18[1]];
            }));
          }();

          return patternInput_19.data;
        })();

        const patternInput_22 = patternInput_21.data(_state.StateUpdate.Apply(s_5, patternInput_20[0]));
        return [_state.StateUpdate.Combine(patternInput_20[0], patternInput_22[0]), patternInput_22[1]];
      }));
    }(_state.state);
  };

  _s.S.drain(_s.S.tap((0, _String.toConsole)((0, _String.printf)("s: %A")), _s.S.scan(function (s, m) {
    const patternInput = (0, _state.setRun)(s, m);
    (0, _String.toConsole)((0, _String.printf)("a: %A"))(patternInput[1]);

    const patternInput_1 = _state.StateUpdate.Apply(new _state.StateState(0, s), patternInput[0]);

    return patternInput_1.data;
  }, new _List2.default(), (() => {
    var f;

    const i = _s.S.map(function (_arg1) {
      return _arg1.data;
    }, function (builder_) {
      return builder_.Delay(function () {
        return builder_.Yield(u("I"));
      });
    }(_s.S.stream));

    const p = _s.S.map((f = function (o_1) {
      return _s.S.map(function (_arg2) {
        return _arg2.data;
      }, o_1);
    }, function (arg10_) {
      return _pith.Pith.map(f, arg10_);
    }), function (builder__1) {
      return builder__1.Delay(function () {
        return builder__1.Yield(function (o) {
          o(function (builder__2) {
            return builder__2.Delay(function () {
              return builder__2.Yield(u("A"));
            });
          }(_s.S.stream));
          o(function (builder__3) {
            return builder__3.Delay(function () {
              return builder__3.Yield(u("B"));
            });
          }(_s.S.stream));
          o(function (builder__4) {
            return builder__4.Delay(function () {
              return builder__4.Yield(u("C"));
            });
          }(_s.S.stream));
        });
      });
    }(_s.S.stream));

    return _s.S.map(function (arg0) {
      return new _state.M(0, arg0);
    }, (0, _update.tree)(function (a_1, b_1) {
      return function (builder__5) {
        return new _update.UpdateMonad(0, s_3 => {
          const patternInput_8 = new _update.UpdateMonad(0, _arg1_3 => [_state.StateUpdate.Unit, null]).data(s_3);

          const patternInput_9 = function () {
            return new _update.UpdateMonad(0, s_2 => {
              const patternInput_5 = b_1.data(s_2);

              const patternInput_6 = function (_arg1_1) {
                return new _update.UpdateMonad(0, s_1 => {
                  const patternInput_2 = a_1.data(s_1);

                  const patternInput_3 = function (_arg2_1) {
                    return new _update.UpdateMonad(0, _arg1_2 => [_state.StateUpdate.Unit, function (a, b) {
                      return a + "/" + b;
                    }(_arg2_1, _arg1_1)]);
                  }(patternInput_2[1]);

                  const patternInput_4 = patternInput_3.data(_state.StateUpdate.Apply(s_1, patternInput_2[0]));
                  return [_state.StateUpdate.Combine(patternInput_2[0], patternInput_4[0]), patternInput_4[1]];
                });
              }(patternInput_5[1]);

              const patternInput_7 = patternInput_6.data(_state.StateUpdate.Apply(s_2, patternInput_5[0]));
              return [_state.StateUpdate.Combine(patternInput_5[0], patternInput_7[0]), patternInput_7[1]];
            });
          }();

          const patternInput_10 = patternInput_9.data(_state.StateUpdate.Apply(s_3, patternInput_8[0]));
          return [_state.StateUpdate.Combine(patternInput_8[0], patternInput_10[0]), patternInput_10[1]];
        });
      }(_update.update);
    }, i, p));
  })()))), void 0;
  return __exports;
}({});

const Stream = exports.Stream = function (__exports) {
  const s_4 = __exports.s = function (builder__6) {
    return builder__6.Delay(function () {
      return builder__6.While(function () {
        return true;
      }, builder__6.Delay(function () {
        return builder__6.Combine(builder__6.Yield(""), builder__6.Delay(function () {
          return builder__6.Combine(builder__6.Yield("<"), builder__6.Delay(function () {
            return builder__6.Combine(builder__6.For((0, _Seq.range)(1, 3), function (_arg1_4) {
              return builder__6.Bind(_s.S.at(_s.TimeModule.ms(100), null), function () {
                return builder__6.Yield(_arg1_4.toString());
              });
            }), builder__6.Delay(function () {
              return builder__6.Combine(builder__6.Yield(">"), builder__6.Delay(function () {
                return builder__6.Bind(_s.S.at(_s.TimeModule.ms(2000), null), builder__6.Zero.bind(builder__6));
              }));
            }));
          }));
        }));
      }));
    });
  }(_s.S.stream);

  _s.S.drain(_s.S.tap(console.log.bind(console), _s.S.take(22, s_4))), void 0;
  return __exports;
}({});

const Disposable = exports.Disposable = function (__exports) {
  const create = __exports.create = function (f_1) {
    let disposed = false;
    return {
      Dispose() {
        if (!disposed) {
          disposed = true;
          f_1();
        }
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["System.IDisposable"]
        };
      }

    };
  };

  return __exports;
}({});