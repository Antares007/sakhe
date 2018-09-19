"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$dispose = OModule$$$dispose;
exports.CancellationException = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _time = require("./s/time");

var _disposable = require("./s/disposable");

var _pith = require("./pith");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _io = require("./io");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;
const CancellationException = (0, _Types.declare)(function CancellationException() {}, _Types.FSharpException);
exports.CancellationException = CancellationException;

function setTask(delay, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function run(now, delay$$1, io) {
  const now$$1 = (0, _time.add)(delay$$1, now);
  const clearTimeOut = setTask(delay$$1, function () {
    const o = (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);
    (0, _io.IO$$$run)(o, now$$1, function (i) {
      return function (o$$1) {
        const foldO = function foldO(d, _arg1) {
          switch (_arg1.tag) {
            case 1:
              {
                const d$$1 = _arg1.fields[0];
                return d$$1;
              }

            case 2:
              {
                const io$$3 = _arg1.fields[1];
                const delay$$2 = _arg1.fields[0];
                return run(now$$1, delay$$2, io$$3);
              }

            default:
              {
                const io$$2 = _arg1.fields[0];
                return run(now$$1, _time.DelayModule$$$zero, io$$2);
              }
          }
        };

        const o2 = (0, _pith.O$$$return$0027)(function (list, a) {
          return (0, _Types.L)(a, list);
        }, (0, _Types.L)());
        (0, _pith.Pith$$$run)(o2, io(i));
        o$$1((0, _List.fold)(foldO, _disposable.empty, (0, _pith.O$00602$$get_Value)(o2)));
      };
    });
  });
  return clearTimeOut;
}

function OModule$$$delay(d$$2, io$$4) {
  return new O(2, "Delay", (0, _time.DelayModule$$$return$0027)(d$$2), function (i$$1) {
    return (0, _io.IO$$$return$0027)(io$$4, i$$1);
  });
}

function OModule$$$run(io$$5) {
  return new O(0, "Run", function (i$$2) {
    return (0, _io.IO$$$return$0027)(io$$5, i$$2);
  });
}

function OModule$$$dispose(d$$3) {
  return new O(1, "Dispose", d$$3);
}