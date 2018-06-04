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

var _s = require("./s");

var _state = require("./state");

var _String = require("./fable-core/String");

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
      return new _update.UpdateMonad(0, s => {
        const patternInput = write(20).data(s);

        const patternInput_1 = function () {
          return new _update.UpdateMonad(0, _arg1_1 => [WriterUpdate.Unit, "world"]);
        }();

        const patternInput_2 = patternInput_1.data(WriterUpdate.Apply(s, patternInput[0]));
        return [WriterUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
      });
    }(_update.update);

    const demo4 = __exports.demo4 = function (builder_) {
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
      return new _update.UpdateMonad(0, s => {
        const patternInput = read.data(s);

        const patternInput_1 = function (_arg1) {
          return new _update.UpdateMonad(0, _arg1_1 => [ReaderUpdate.Unit, _arg1 + 1]);
        }(patternInput[1]);

        const patternInput_2 = patternInput_1.data(ReaderUpdate.Apply(s, patternInput[0]));
        return [ReaderUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
      });
    }(_update.update);

    const demo2 = __exports.demo2 = function (builder_) {
      return new _update.UpdateMonad(0, s => {
        const patternInput = demo1.data(s);

        const patternInput_1 = function (_arg1) {
          return new _update.UpdateMonad(0, _arg1_1 => [ReaderUpdate.Unit, _arg1 + 1]);
        }(patternInput[1]);

        const patternInput_2 = patternInput_1.data(ReaderUpdate.Apply(s, patternInput[0]));
        return [ReaderUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
      });
    }(_update.update);

    return __exports;
  }({});

  return __exports;
}({});

const State = exports.State = function (__exports) {
  _s.S.drain(_s.S.tap(console.log.bind(console), _s.S.map(function (m) {
    return (0, _state.setRun)(new _List2.default(), m)[1];
  }, ($var2 => ($var1 => (0, _update.tree)(function (a, b) {
    return function (builder_) {
      return new _update.UpdateMonad(0, s_1 => {
        const patternInput_3 = b.data(s_1);

        const patternInput_4 = function (_arg1) {
          return new _update.UpdateMonad(0, s => {
            const patternInput = a.data(s);

            const patternInput_1 = function (_arg2) {
              return new _update.UpdateMonad(0, _arg1_1 => [_state.StateUpdate.Unit, _arg1 + _arg2]);
            }(patternInput[1]);

            const patternInput_2 = patternInput_1.data(_state.StateUpdate.Apply(s, patternInput[0]));
            return [_state.StateUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
          });
        }(patternInput_3[1]);

        const patternInput_5 = patternInput_4.data(_state.StateUpdate.Apply(s_1, patternInput_3[0]));
        return [_state.StateUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
      });
    }(_update.update);
  }, _s.S.now(function (builder__1) {
    return new _update.UpdateMonad(0, s_2 => {
      const patternInput_6 = (0, _state.set)(new _List2.default()).data(s_2);

      const patternInput_7 = function () {
        return new _update.UpdateMonad(0, _arg1_2 => [_state.StateUpdate.Unit, ""]);
      }();

      const patternInput_8 = patternInput_7.data(_state.StateUpdate.Apply(s_2, patternInput_6[0]));
      return [_state.StateUpdate.Combine(patternInput_6[0], patternInput_8[0]), patternInput_8[1]];
    });
  }(_update.update)), _s.S.now($var1)))(function (arg0) {
    return arg0;
  }($var2)))(function (o) {
    o(function (builder__2) {
      return builder__2.Delay(function () {
        return builder__2.Yield(function (builder__3) {
          return new _update.UpdateMonad(0, s_5 => {
            const patternInput_15 = (0, _state.get)().data(s_5);

            const patternInput_16 = function (_arg4) {
              return new _update.UpdateMonad(0, s_4 => {
                const patternInput_12 = (0, _state.set)(new _List2.default(1, _arg4)).data(s_4);

                const patternInput_13 = function () {
                  return new _update.UpdateMonad(0, s_3 => {
                    const patternInput_9 = (0, _state.get)().data(s_3);

                    const patternInput_10 = function (_arg6) {
                      return new _update.UpdateMonad(0, _arg1_3 => [_state.StateUpdate.Unit, "B" + (0, _Util.toString)(_arg6)]);
                    }(patternInput_9[1]);

                    const patternInput_11 = patternInput_10.data(_state.StateUpdate.Apply(s_3, patternInput_9[0]));
                    return [_state.StateUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
                  });
                }();

                const patternInput_14 = patternInput_13.data(_state.StateUpdate.Apply(s_4, patternInput_12[0]));
                return [_state.StateUpdate.Combine(patternInput_12[0], patternInput_14[0]), patternInput_14[1]];
              });
            }(patternInput_15[1]);

            const patternInput_17 = patternInput_16.data(_state.StateUpdate.Apply(s_5, patternInput_15[0]));
            return [_state.StateUpdate.Combine(patternInput_15[0], patternInput_17[0]), patternInput_17[1]];
          });
        }(_update.update));
      });
    }(_s.S.stream));
    o(function (builder__4) {
      return builder__4.Delay(function () {
        return builder__4.Yield(function (builder__5) {
          return new _update.UpdateMonad(0, s_8 => {
            const patternInput_24 = (0, _state.get)().data(s_8);

            const patternInput_25 = function (_arg7) {
              return new _update.UpdateMonad(0, s_7 => {
                const patternInput_21 = (0, _state.set)(new _List2.default(2, _arg7)).data(s_7);

                const patternInput_22 = function () {
                  return new _update.UpdateMonad(0, s_6 => {
                    const patternInput_18 = (0, _state.get)().data(s_6);

                    const patternInput_19 = function (_arg9) {
                      return new _update.UpdateMonad(0, _arg1_4 => [_state.StateUpdate.Unit, "C" + (0, _Util.toString)(_arg9)]);
                    }(patternInput_18[1]);

                    const patternInput_20 = patternInput_19.data(_state.StateUpdate.Apply(s_6, patternInput_18[0]));
                    return [_state.StateUpdate.Combine(patternInput_18[0], patternInput_20[0]), patternInput_20[1]];
                  });
                }();

                const patternInput_23 = patternInput_22.data(_state.StateUpdate.Apply(s_7, patternInput_21[0]));
                return [_state.StateUpdate.Combine(patternInput_21[0], patternInput_23[0]), patternInput_23[1]];
              });
            }(patternInput_24[1]);

            const patternInput_26 = patternInput_25.data(_state.StateUpdate.Apply(s_8, patternInput_24[0]));
            return [_state.StateUpdate.Combine(patternInput_24[0], patternInput_26[0]), patternInput_26[1]];
          });
        }(_update.update));
      });
    }(_s.S.stream));
  })))), void 0;

  const demo5 = __exports.demo5 = function (builder__6) {
    return new _update.UpdateMonad(0, s_9 => {
      const patternInput_27 = (0, _state.set)((0, _List.ofArray)([20])).data(s_9);

      const patternInput_28 = function () {
        return new _update.UpdateMonad(0, _arg1_6 => [_state.StateUpdate.Unit, null]);
      }();

      const patternInput_29 = patternInput_28.data(_state.StateUpdate.Apply(s_9, patternInput_27[0]));
      return [_state.StateUpdate.Combine(patternInput_27[0], patternInput_29[0]), null];
    });
  }(_update.update);

  const insert = __exports.insert = function (builder__6) {
    return new _update.UpdateMonad(0, s_10 => {
      const patternInput_30 = (0, _state.get)().data(s_10);

      const patternInput_31 = function (_arg1_5) {
        return new _update.UpdateMonad(0, s_9 => {
          const patternInput_27 = (0, _state.set)(new _List2.default(10, _arg1_5)).data(s_9);

          const patternInput_28 = function () {
            return new _update.UpdateMonad(0, _arg1_6 => [_state.StateUpdate.Unit, null]);
          }();

          const patternInput_29 = patternInput_28.data(_state.StateUpdate.Apply(s_9, patternInput_27[0]));
          return [_state.StateUpdate.Combine(patternInput_27[0], patternInput_29[0]), null];
        });
      }(patternInput_30[1]);

      const patternInput_32 = patternInput_31.data(_state.StateUpdate.Apply(s_10, patternInput_30[0]));
      return [_state.StateUpdate.Combine(patternInput_30[0], patternInput_32[0]), null];
    });
  }(_update.update);

  const demo6 = __exports.demo6 = function (builder__6) {
    return new _update.UpdateMonad(0, s_13 => {
      const patternInput_39 = demo5.data(s_13);

      const patternInput_40 = function () {
        return new _update.UpdateMonad(0, s_12 => {
          const patternInput_36 = insert.data(s_12);

          const patternInput_37 = function () {
            return new _update.UpdateMonad(0, s_11 => {
              const patternInput_33 = insert.data(s_11);

              const patternInput_34 = function () {
                return new _update.UpdateMonad(0, s_10 => {
                  const patternInput_30 = insert.data(s_10);

                  const patternInput_31 = function () {
                    return new _update.UpdateMonad(0, s_9 => {
                      const patternInput_27 = (0, _state.get)().data(s_9);

                      const patternInput_28 = function (_arg5_1) {
                        return new _update.UpdateMonad(0, _arg1_6 => [_state.StateUpdate.Unit, (0, _String.toText)((0, _String.printf)("A: %A"))(_arg5_1)]);
                      }(patternInput_27[1]);

                      const patternInput_29 = patternInput_28.data(_state.StateUpdate.Apply(s_9, patternInput_27[0]));
                      return [_state.StateUpdate.Combine(patternInput_27[0], patternInput_29[0]), patternInput_29[1]];
                    });
                  }();

                  const patternInput_32 = patternInput_31.data(_state.StateUpdate.Apply(s_10, patternInput_30[0]));
                  return [_state.StateUpdate.Combine(patternInput_30[0], patternInput_32[0]), patternInput_32[1]];
                });
              }();

              const patternInput_35 = patternInput_34.data(_state.StateUpdate.Apply(s_11, patternInput_33[0]));
              return [_state.StateUpdate.Combine(patternInput_33[0], patternInput_35[0]), patternInput_35[1]];
            });
          }();

          const patternInput_38 = patternInput_37.data(_state.StateUpdate.Apply(s_12, patternInput_36[0]));
          return [_state.StateUpdate.Combine(patternInput_36[0], patternInput_38[0]), patternInput_38[1]];
        });
      }();

      const patternInput_41 = patternInput_40.data(_state.StateUpdate.Apply(s_13, patternInput_39[0]));
      return [_state.StateUpdate.Combine(patternInput_39[0], patternInput_41[0]), patternInput_41[1]];
    });
  }(_update.update);

  (() => {
    const clo1 = (0, _String.toConsole)((0, _String.printf)("%A"));
    return function (tupledArg) {
      clo1([tupledArg[0], tupledArg[1]]);
    };
  })()((0, _state.setRun)(new _List2.default(), demo6));
  return __exports;
}({});

const Stream = exports.Stream = function (__exports) {
  const s_9 = __exports.s = function (builder__6) {
    return builder__6.Delay(function () {
      return builder__6.While(function () {
        return true;
      }, builder__6.Delay(function () {
        return builder__6.Combine(builder__6.Yield(""), builder__6.Delay(function () {
          return builder__6.Combine(builder__6.Yield("<"), builder__6.Delay(function () {
            return builder__6.Combine(builder__6.For((0, _Seq.range)(1, 3), function (_arg1_5) {
              return builder__6.Bind(_s.S.at(_s.TimeModule.ms(100), null), function () {
                return builder__6.Yield(_arg1_5.toString());
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

  _s.S.drain(_s.S.tap(console.log.bind(console), _s.S.take(22, s_9))), void 0;
  return __exports;
}({});

const Disposable = exports.Disposable = function (__exports) {
  const create = __exports.create = function (f) {
    let disposed = false;
    return {
      Dispose() {
        if (!disposed) {
          disposed = true;
          f();
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