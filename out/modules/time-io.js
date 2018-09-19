"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ring = ring;
exports.run = run;
exports.dalay = dalay;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$dispose = OModule$$$dispose;
exports.CancellationException = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _time = require("./s/time");

var _disposable = require("./s/disposable");

var _io = require("./io");

var _pith = require("./pith");

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

function ring(ioB) {
  const ioA = function ioA(iA) {
    return function (oA) {
      var $target$$5, now;

      if (iA.tag === 0) {
        $target$$5 = 0;
        now = iA.fields[0];
      } else {
        $target$$5 = 0;
        now = iA.fields[0];
      }

      switch ($target$$5) {
        case 0:
          {
            const fold = function fold(d, _arg1) {
              switch (_arg1.tag) {
                case 1:
                  {
                    const d2 = _arg1.fields[0];
                    return (0, _disposable.append)(d, d2);
                  }

                case 2:
                  {
                    const io$$1 = _arg1.fields[1];
                    const delay$$1 = _arg1.fields[0];
                    return (0, _disposable.append)(d, dalay(now, delay$$1, io$$1));
                  }

                default:
                  {
                    const io = _arg1.fields[0];
                    return (0, _disposable.append)(d, run(now, io));
                  }
              }
            };

            const pithB = ioB(new _io.IO$00601(0, "Try", now));
            const oB = (0, _pith.O$$$return$0027)(fold, _disposable.empty);
            const rez = (0, _pith.Pith$$$run)(oB, pithB);
            oA((0, _pith.O$00602$$get_Value)(oB));
            break;
          }
      }
    };
  };

  return ioA;
}

function run(now$$1, io$$2) {
  const o = (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);
  (0, _io.IO$$$run)(o, now$$1, ring(io$$2));
  return (0, _pith.O$00602$$get_Value)(o);
}

function dalay(now$$2, delay$$2, io$$3) {
  const now$$3 = (0, _time.add)(delay$$2, now$$2);
  let d$$1 = _disposable.empty;
  let canceled = false;

  const cancel = function cancel() {
    canceled = true;
    (0, _disposable.T$$Dispose)(d$$1);
  };

  const task$$1 = function task$$1() {
    if (canceled) {} else {
      d$$1 = run(now$$3, io$$3);

      if (canceled) {
        (0, _disposable.T$$Dispose)(d$$1);
      }
    }
  };

  const token$$1 = setTimeout(task$$1, (0, _time.DelayModule$$$unbox)(delay$$2));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token$$1);
    cancel();
  });
}

function OModule$$$delay(d$$2, io$$4) {
  return new O(2, "Delay", (0, _time.DelayModule$$$return$0027)(d$$2), function (i) {
    return (0, _io.IO$$$return$0027)(io$$4, i);
  });
}

function OModule$$$run(io$$5) {
  return new O(0, "Run", function (i$$1) {
    return (0, _io.IO$$$return$0027)(io$$5, i$$1);
  });
}

function OModule$$$dispose(d$$3) {
  return new O(1, "Dispose", d$$3);
}