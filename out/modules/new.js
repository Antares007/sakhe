"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.OModule$$$Delay = OModule$$$Delay;
exports.OModule$$$Run = OModule$$$Run;
exports.OModule$$$Dispose = OModule$$$Dispose;
exports.run = run;
exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _time = require("./s/time");

var _disposable = require("./s/disposable");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return f;
}

function OModule$$$Delay(a, f$$1) {
  const tupledArg = [(0, _time.DelayModule$$$return$0027)(a), return$0027(f$$1)];
  return new O(2, "Delay", tupledArg[0], tupledArg[1]);
}

function OModule$$$Run(f$$2) {
  return new O(0, "Run", return$0027(f$$2));
}

function OModule$$$Dispose(d) {
  return new O(1, "Dispose", d);
}

const setTask = 1;

function run(delay, _arg1) {
  const io = _arg1;
}

run((0, _time.DelayModule$$$return$0027)(0), return$0027(function (_arg1$$1) {
  if (_arg1$$1.tag === 1) {
    const err$$3 = _arg1$$1.fields[1];
    const a$$10 = _arg1$$1.fields[0];
    return function (o$$2) {
      throw new Error("never");
    };
  } else {
    const a$$1 = _arg1$$1.fields[0];
    return function (o) {
      o(OModule$$$Delay(100, function (_arg2) {
        if (_arg2.tag === 1) {
          const err = _arg2.fields[1];
          const a$$4 = _arg2.fields[0];
          return function (value$$1) {
            value$$1;
          };
        } else {
          const a$$3 = _arg2.fields[0];
          return function (value) {
            value;
          };
        }
      }));
      o(OModule$$$Run(function (_arg3) {
        if (_arg3.tag === 1) {
          const err$$2 = _arg3.fields[1];
          const a$$9 = _arg3.fields[0];
          return function (value$$4) {
            value$$4;
          };
        } else {
          const a$$5 = _arg3.fields[0];
          return function (o$$1) {
            o$$1(OModule$$$Delay(100, function (_arg4) {
              if (_arg4.tag === 1) {
                const err$$1 = _arg4.fields[1];
                const a$$8 = _arg4.fields[0];
                return function (value$$3) {
                  value$$3;
                };
              } else {
                const a$$7 = _arg4.fields[0];
                return function (value$$2) {
                  value$$2;
                };
              }
            }));
          };
        }
      }));
      o(OModule$$$Dispose(_disposable.empty));
    };
  }
}));