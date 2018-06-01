"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reader = exports.Writer = undefined;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _update = require("./update");

var _String = require("./fable-core/String");

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
    return new _update.UpdateMonad(0, function (s) {
      return [new WriterUpdate(0, (0, _List.ofArray)([v])), null];
    });
  };

  const writeRun = __exports.writeRun = function (_arg1) {
    const patternInput = _arg1.data(new WriterState(0));

    const l = patternInput[0].data;
    return [l, patternInput[1]];
  };

  const demo3 = __exports.demo3 = function (builder_) {
    return new _update.UpdateMonad(0, s_3 => {
      const patternInput_3 = new _update.UpdateMonad(0, s_2 => [null, null]).data(s_3);

      const patternInput_4 = function () {
        return new _update.UpdateMonad(0, s_1 => {
          const patternInput = write(20).data(s_1);

          const patternInput_1 = function () {
            return new _update.UpdateMonad(0, s => [WriterUpdate.Unit, "world"]);
          }();

          const patternInput_2 = patternInput_1.data(WriterUpdate.Apply(s_1, patternInput[0]));
          return [WriterUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
        });
      }();

      const patternInput_5 = patternInput_4.data(null);
      return [null, patternInput_5[1]];
    });
  }(_update.update);

  const demo4 = __exports.demo4 = function (builder_) {
    return new _update.UpdateMonad(0, s_4 => {
      const patternInput_6 = new _update.UpdateMonad(0, s_3 => [null, null]).data(s_4);

      const patternInput_7 = function () {
        return new _update.UpdateMonad(0, s_2 => {
          const patternInput_3 = demo3.data(s_2);

          const patternInput_4 = function (_arg1) {
            return new _update.UpdateMonad(0, s_1 => {
              const patternInput = write(10).data(s_1);

              const patternInput_1 = function () {
                return new _update.UpdateMonad(0, s => [WriterUpdate.Unit, "Hello " + _arg1]);
              }();

              const patternInput_2 = patternInput_1.data(WriterUpdate.Apply(s_1, patternInput[0]));
              return [WriterUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
            });
          }(patternInput_3[1]);

          const patternInput_5 = patternInput_4.data(WriterUpdate.Apply(s_2, patternInput_3[0]));
          return [WriterUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
        });
      }();

      const patternInput_8 = patternInput_7.data(null);
      return [null, patternInput_8[1]];
    });
  }(_update.update);

  (() => {
    const clo1 = (0, _String.toConsole)((0, _String.printf)("%A"));
    return function (tupledArg) {
      clo1([tupledArg[0], tupledArg[1]]);
    };
  })()(writeRun(demo4));
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

  const demo1 = __exports.demo1 = function (builder_) {
    return new _update.UpdateMonad(0, s_3 => {
      const patternInput_3 = new _update.UpdateMonad(0, s_2 => [null, null]).data(s_3);

      const patternInput_4 = function () {
        return new _update.UpdateMonad(0, s_1 => {
          const patternInput = read.data(s_1);

          const patternInput_1 = function (_arg1) {
            return new _update.UpdateMonad(0, s => [ReaderUpdate.Unit, _arg1 + 1]);
          }(patternInput[1]);

          const patternInput_2 = patternInput_1.data(ReaderUpdate.Apply(s_1, patternInput[0]));
          return [ReaderUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
        });
      }();

      const patternInput_5 = patternInput_4.data(null);
      return [null, patternInput_5[1]];
    });
  }(_update.update);

  const demo2 = __exports.demo2 = function (builder_) {
    return new _update.UpdateMonad(0, s_3 => {
      const patternInput_3 = new _update.UpdateMonad(0, s_2 => [null, null]).data(s_3);

      const patternInput_4 = function () {
        return new _update.UpdateMonad(0, s_1 => {
          const patternInput = demo1.data(s_1);

          const patternInput_1 = function (_arg1) {
            return new _update.UpdateMonad(0, s => [ReaderUpdate.Unit, _arg1 + 1]);
          }(patternInput[1]);

          const patternInput_2 = patternInput_1.data(ReaderUpdate.Apply(s_1, patternInput[0]));
          return [ReaderUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
        });
      }();

      const patternInput_5 = patternInput_4.data(null);
      return [null, patternInput_5[1]];
    });
  }(_update.update);

  (0, _String.toConsole)((0, _String.printf)("%A"))(readRun(40, demo2));
  return __exports;
}({});