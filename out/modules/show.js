"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stream = exports.State = exports.Reader = exports.Writer = undefined;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _update = require("./update");

var _String = require("./fable-core/String");

var _Seq = require("./fable-core/Seq");

var _s = require("./s");

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
    const ret = __exports.ret = function (a) {
      return new _update.UpdateMonad(0, function (_arg1) {
        return [WriterUpdate.Unit, a];
      });
    };

    (() => {
      const clo1 = (0, _String.toConsole)((0, _String.printf)("a: %A"));
      return function (tupledArg) {
        clo1([tupledArg[0], tupledArg[1]]);
      };
    })()(writeRun(new _update.UpdateMonad(0, function (s_4) {
      const patternInput_6 = new _update.UpdateMonad(0, function (s_3) {
        const patternInput_3 = ret("hello").data(s_3);

        const patternInput_4 = function (s_1) {
          return new _update.UpdateMonad(0, function (s_2) {
            const patternInput = write(20).data(s_2);

            const patternInput_1 = function () {
              return ret("H ");
            }();

            const patternInput_2 = patternInput_1.data(WriterUpdate.Apply(s_2, patternInput[0]));
            return [WriterUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
          });
        }(patternInput_3[1]);

        const patternInput_5 = patternInput_4.data(WriterUpdate.Apply(s_3, patternInput_3[0]));
        return [WriterUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
      }).data(s_4);

      const patternInput_7 = function (s) {
        return new _update.UpdateMonad(0, function (_arg1) {
          return [WriterUpdate.Unit, s + " world"];
        });
      }(patternInput_6[1]);

      const patternInput_8 = patternInput_7.data(WriterUpdate.Apply(s_4, patternInput_6[0]));
      return [WriterUpdate.Combine(patternInput_6[0], patternInput_8[0]), patternInput_8[1]];
    })));

    const demo3 = __exports.demo3 = function (builder_) {
      return new _update.UpdateMonad(0, s_5 => {
        const patternInput_9 = write(20).data(s_5);

        const patternInput_10 = function () {
          return new _update.UpdateMonad(0, _arg1_3 => [WriterUpdate.Unit, "world"]);
        }();

        const patternInput_11 = patternInput_10.data(WriterUpdate.Apply(s_5, patternInput_9[0]));
        return [WriterUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
      });
    }(_update.update);

    const demo4 = __exports.demo4 = function (builder_) {
      return new _update.UpdateMonad(0, s_6 => {
        const patternInput_12 = demo3.data(s_6);

        const patternInput_13 = function (_arg1_2) {
          return new _update.UpdateMonad(0, s_5 => {
            const patternInput_9 = write(10).data(s_5);

            const patternInput_10 = function () {
              return new _update.UpdateMonad(0, _arg1_3 => [WriterUpdate.Unit, "Hello " + _arg1_2]);
            }();

            const patternInput_11 = patternInput_10.data(WriterUpdate.Apply(s_5, patternInput_9[0]));
            return [WriterUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
          });
        }(patternInput_12[1]);

        const patternInput_14 = patternInput_13.data(WriterUpdate.Apply(s_6, patternInput_12[0]));
        return [WriterUpdate.Combine(patternInput_12[0], patternInput_14[0]), patternInput_14[1]];
      });
    }(_update.update);

    (() => {
      const clo1_1 = (0, _String.toConsole)((0, _String.printf)("%A"));
      return function (tupledArg_1) {
        clo1_1([tupledArg_1[0], tupledArg_1[1]]);
      };
    })()(writeRun(demo4));
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

    static Combine(_arg1_2, _arg2) {
      return new ReaderUpdate(0);
    }

    static Apply(s_5, _arg3) {
      return s_5;
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.Reader.ReaderUpdate", ReaderUpdate);
  const read = __exports.read = new _update.UpdateMonad(0, function (s_5) {
    return [new ReaderUpdate(0), s_5];
  });

  const readRun = __exports.readRun = function (s_5, _arg1_2) {
    return _arg1_2.data(s_5)[1];
  };

  const Demo = __exports.Demo = function (__exports) {
    const demo1 = __exports.demo1 = function (builder_) {
      return new _update.UpdateMonad(0, s_5 => {
        const patternInput_9 = read.data(s_5);

        const patternInput_10 = function (_arg1_2) {
          return new _update.UpdateMonad(0, _arg1_3 => [ReaderUpdate.Unit, _arg1_2 + 1]);
        }(patternInput_9[1]);

        const patternInput_11 = patternInput_10.data(ReaderUpdate.Apply(s_5, patternInput_9[0]));
        return [ReaderUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
      });
    }(_update.update);

    const demo2 = __exports.demo2 = function (builder_) {
      return new _update.UpdateMonad(0, s_5 => {
        const patternInput_9 = demo1.data(s_5);

        const patternInput_10 = function (_arg1_2) {
          return new _update.UpdateMonad(0, _arg1_3 => [ReaderUpdate.Unit, _arg1_2 + 1]);
        }(patternInput_9[1]);

        const patternInput_11 = patternInput_10.data(ReaderUpdate.Apply(s_5, patternInput_9[0]));
        return [ReaderUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
      });
    }(_update.update);

    (0, _String.toConsole)((0, _String.printf)("%A"))(readRun(40, demo2));
    return __exports;
  }({});

  return __exports;
}({});

const State = exports.State = function (__exports) {
  const StateState = __exports.StateState = class StateState {
    constructor(tag, data) {
      this.tag = tag | 0;
      this.data = data;
    }

    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Show.State.StateState",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: [["State", (0, _Util.GenericParam)("T")]]
      };
    }

    Equals(other) {
      return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
    }

    CompareTo(other) {
      return (0, _Util.compareUnions)(this, other) | 0;
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.State.StateState", StateState);
  const StateUpdate = __exports.StateUpdate = class StateUpdate {
    constructor(tag, data) {
      this.tag = tag | 0;
      this.data = data;
    }

    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Show.State.StateUpdate",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: [["Set", (0, _Util.GenericParam)("T")], ["SetNop"]]
      };
    }

    Equals(other) {
      return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
    }

    CompareTo(other) {
      return (0, _Util.compareUnions)(this, other) | 0;
    }

    static get Unit() {
      return new StateUpdate(1);
    }

    static Combine(a, b) {
      const matchValue = [a, b];

      if (matchValue[0].tag === 0) {
        if (matchValue[1].tag === 0) {
          return new StateUpdate(0, matchValue[1].data);
        } else {
          return matchValue[0];
        }
      } else {
        return matchValue[1];
      }
    }

    static Apply(s_5, p) {
      if (p.tag === 0) {
        return new StateState(0, p.data);
      } else {
        return s_5;
      }
    }

  };
  (0, _Symbol2.setType)("Sakhe.Show.State.StateUpdate", StateUpdate);

  const set = __exports.set = function (s_5) {
    return new _update.UpdateMonad(0, function (_arg1_2) {
      return [new StateUpdate(0, s_5), null];
    });
  };

  const get = __exports.get = function () {
    return new _update.UpdateMonad(0, function (_arg1_2) {
      return [new StateUpdate(1), _arg1_2.data];
    });
  };

  const setRun = __exports.setRun = function (s_5, _arg1_2) {
    return _arg1_2.data(new StateState(0, s_5))[1];
  };

  const Demo = __exports.Demo = function (__exports) {
    const demo5 = __exports.demo5 = function (builder_) {
      return new _update.UpdateMonad(0, s_6 => {
        const patternInput_12 = get().data(s_6);

        const patternInput_13 = function (_arg1_2) {
          return new _update.UpdateMonad(0, s_5 => {
            const patternInput_9 = set(_arg1_2 + 42).data(s_5);

            const patternInput_10 = function () {
              return new _update.UpdateMonad(0, _arg1_3 => [StateUpdate.Unit, "hello"]);
            }();

            const patternInput_11 = patternInput_10.data(StateUpdate.Apply(s_5, patternInput_9[0]));
            return [StateUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
          });
        }(patternInput_12[1]);

        const patternInput_14 = patternInput_13.data(StateUpdate.Apply(s_6, patternInput_12[0]));
        return [StateUpdate.Combine(patternInput_12[0], patternInput_14[0]), patternInput_14[1]];
      });
    }(_update.update);

    const demo6 = __exports.demo6 = function (builder_) {
      return new _update.UpdateMonad(0, s_7 => {
        const patternInput_15 = set(-42).data(s_7);

        const patternInput_16 = function () {
          return new _update.UpdateMonad(0, s_6 => {
            const patternInput_12 = demo5.data(s_6);

            const patternInput_13 = function (_arg2) {
              return new _update.UpdateMonad(0, s_5 => {
                const patternInput_9 = get().data(s_5);

                const patternInput_10 = function (_arg3) {
                  return new _update.UpdateMonad(0, _arg1_3 => [StateUpdate.Unit, _arg2 + _arg3.toString()]);
                }(patternInput_9[1]);

                const patternInput_11 = patternInput_10.data(StateUpdate.Apply(s_5, patternInput_9[0]));
                return [StateUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
              });
            }(patternInput_12[1]);

            const patternInput_14 = patternInput_13.data(StateUpdate.Apply(s_6, patternInput_12[0]));
            return [StateUpdate.Combine(patternInput_12[0], patternInput_14[0]), patternInput_14[1]];
          });
        }();

        const patternInput_17 = patternInput_16.data(StateUpdate.Apply(s_7, patternInput_15[0]));
        return [StateUpdate.Combine(patternInput_15[0], patternInput_17[0]), patternInput_17[1]];
      });
    }(_update.update);

    (0, _String.toConsole)((0, _String.printf)("%A"))(setRun(0, demo6));
    return __exports;
  }({});

  return __exports;
}({});

const Stream = exports.Stream = function (__exports) {
  const s_5 = __exports.s = function (builder_) {
    return builder_.Delay(function () {
      return builder_.While(function () {
        return true;
      }, builder_.Delay(function () {
        return builder_.Combine(builder_.Yield(""), builder_.Delay(function () {
          return builder_.Combine(builder_.Yield("<"), builder_.Delay(function () {
            return builder_.Combine(builder_.For((0, _Seq.range)(0, 10), function (_arg1_2) {
              return builder_.Bind(_s.S.delay(_s.TimeModule.ms(100), _s.S.now()), function () {
                return builder_.Yield(_arg1_2.toString());
              });
            }), builder_.Delay(function () {
              return builder_.Bind(_s.S.delay(_s.TimeModule.ms(2000), _s.S.now()), function () {
                return builder_.Yield(">");
              });
            }));
          }));
        }));
      }));
    });
  }(_s.S.stream);

  _s.S.drain(_s.S.tap(console.log.bind(console), s_5)), void 0;
  return __exports;
}({});