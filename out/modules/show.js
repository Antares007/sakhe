"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.u = u;

var _state = require("./state");

var _update = require("./update");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _String = require("./fable-core/String");

var _s = require("./s");

var _pith = require("./pith");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function u(l) {
  return function (builder_) {
    return (0, _state.Of)(new _update.UpdateMonad(0, s_5 => {
      const patternInput_15 = new _update.UpdateMonad(0, _arg1_5 => [_state.StateUpdate.Unit, null]).data(s_5);

      const patternInput_16 = ($var5 => (arg00__4 => (0, _state.valueOf)(arg00__4))(function () {
        return (0, _state.Of)(new _update.UpdateMonad(0, s_4 => {
          const patternInput_12 = (0, _state.get)().data.data(s_4);

          const patternInput_13 = ($var4 => (arg00__3 => (0, _state.valueOf)(arg00__3))(function (_arg1) {
            return (0, _state.Of)(new _update.UpdateMonad(0, s_3 => {
              const patternInput_9 = (_arg1.tail != null ? (0, _state.Of)(new _update.UpdateMonad(0, s => {
                const patternInput = (0, _state.set)(new _List2.default(_arg1.head + 1, _arg1)).data.data(s);

                const patternInput_1 = ($var1 => (arg00_ => (0, _state.valueOf)(arg00_))(function () {
                  return (0, _state.Of)(new _update.UpdateMonad(0, _arg1_1 => [_state.StateUpdate.Unit, null]));
                }($var1)))(patternInput[1]);

                const patternInput_2 = patternInput_1.data(_state.StateUpdate.Apply(s, patternInput[0]));
                return [_state.StateUpdate.Combine(patternInput[0], patternInput_2[0]), patternInput_2[1]];
              })) : (0, _state.Of)(new _update.UpdateMonad(0, s_1 => {
                const patternInput_3 = (0, _state.set)((0, _List.ofArray)([1])).data.data(s_1);

                const patternInput_4 = ($var2 => (arg00__1 => (0, _state.valueOf)(arg00__1))(function () {
                  return (0, _state.Of)(new _update.UpdateMonad(0, _arg1_2 => [_state.StateUpdate.Unit, null]));
                }($var2)))(patternInput_3[1]);

                const patternInput_5 = patternInput_4.data(_state.StateUpdate.Apply(s_1, patternInput_3[0]));
                return [_state.StateUpdate.Combine(patternInput_3[0], patternInput_5[0]), patternInput_5[1]];
              }))).data.data(s_3);

              const patternInput_10 = (() => (0, _state.Of)(new _update.UpdateMonad(0, s_2 => {
                const patternInput_6 = new _update.UpdateMonad(0, _arg1_4 => [_state.StateUpdate.Unit, null]).data(s_2);

                const patternInput_7 = ($var3 => (arg00__2 => (0, _state.valueOf)(arg00__2))(function () {
                  return (0, _state.Of)(new _update.UpdateMonad(0, _arg1_3 => [_state.StateUpdate.Unit, l + (0, _String.toText)((0, _String.printf)("%A"))(_arg1)]));
                }($var3)))();

                const patternInput_8 = patternInput_7.data(_state.StateUpdate.Apply(s_2, patternInput_6[0]));
                return [_state.StateUpdate.Combine(patternInput_6[0], patternInput_8[0]), patternInput_8[1]];
              })).data)();

              const patternInput_11 = patternInput_10.data(_state.StateUpdate.Apply(s_3, patternInput_9[0]));
              return [_state.StateUpdate.Combine(patternInput_9[0], patternInput_11[0]), patternInput_11[1]];
            }));
          }($var4)))(patternInput_12[1]);

          const patternInput_14 = patternInput_13.data(_state.StateUpdate.Apply(s_4, patternInput_12[0]));
          return [_state.StateUpdate.Combine(patternInput_12[0], patternInput_14[0]), patternInput_14[1]];
        }));
      }($var5)))();

      const patternInput_17 = patternInput_16.data(_state.StateUpdate.Apply(s_5, patternInput_15[0]));
      return [_state.StateUpdate.Combine(patternInput_15[0], patternInput_17[0]), patternInput_17[1]];
    }));
  }(_state.state);
}

_s.S.drain(_s.S.tap((0, _String.toConsole)((0, _String.printf)("s: %A")), _s.S.scan(function (s, m) {
  const patternInput = (0, _state.setRun)(s, m);
  (0, _String.toConsole)((0, _String.printf)("a: %A"))(patternInput[1]);

  const patternInput_1 = _state.StateUpdate.Apply(new _state.StateState(0, s), patternInput[0]);

  return patternInput_1.data;
}, new _List2.default(), (() => {
  var f;

  const combine = function (a_1, b_1) {
    return function (builder__5) {
      return new _update.UpdateMonad(0, s_3 => {
        const patternInput_8 = new _update.UpdateMonad(0, _arg1_2 => [_state.StateUpdate.Unit, null]).data(s_3);

        const patternInput_9 = function () {
          return new _update.UpdateMonad(0, s_2 => {
            const patternInput_5 = b_1.data(s_2);

            const patternInput_6 = function (_arg1) {
              return new _update.UpdateMonad(0, s_1 => {
                const patternInput_2 = a_1.data(s_1);

                const patternInput_3 = function (_arg2) {
                  return new _update.UpdateMonad(0, _arg1_1 => [_state.StateUpdate.Unit, function (a, b) {
                    return a + "/" + b;
                  }(_arg2, _arg1)]);
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
  };

  return _s.S.map(_state.Of, (0, _update.tree)(combine, _s.S.map(_state.valueOf, function (builder_) {
    return builder_.Delay(function () {
      return builder_.Yield(u("I"));
    });
  }(_s.S.stream)), _s.S.map((f = function (o_1) {
    return _s.S.map(_state.valueOf, o_1);
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
  }(_s.S.stream))));
})()))), void 0;