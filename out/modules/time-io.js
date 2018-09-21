"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$dispose = OModule$$$dispose;
exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _time = require("./s/time");

var _disposable = require("./s/disposable");

var _Seq = require("./fable-core.2.0.0-beta-004/Seq");

var _Array = require("./fable-core.2.0.0-beta-004/Array");

var _String = require("./fable-core.2.0.0-beta-004/String");

var _Util = require("./fable-core.2.0.0-beta-004/Util");

var _Map = require("./fable-core.2.0.0-beta-004/Map");

var _io = require("./io");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return f;
}

function setTask(delay, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function run(now, _arg1) {
  const io = _arg1;
  return (0, _io.run)(now, (0, _io.return$0027)(function (i) {
    return function (o) {
      const pith = io(i);
      const array = [];
      pith(function (_arg2) {
        switch (_arg2.tag) {
          case 0:
            {
              const io$$1 = _arg2.fields[0];
              o(run(now, io$$1));
              break;
            }

          case 1:
            {
              const io$$2 = _arg2.fields[1];
              const delay$$1 = _arg2.fields[0];
              array.push([delay$$1, io$$2]);
              break;
            }

          default:
            {
              const d = _arg2.fields[0];
              o(d);
            }
        }
      });
      o((0, _Seq.fold)(function folder$$1(d$$1, tupledArg) {
        const prods = (0, _Array.ofSeq)((0, _Seq.map)(function mapping(tupledArg$$1) {
          const d$$2 = (0, _disposable.SettableDisposable$$$$002Ector)();
          return [d$$2, tupledArg$$1[1]];
        }, tupledArg[1]), Array);
        const d$$3 = (0, _Seq.fold)(_disposable.append, d$$1, (0, _Seq.map)(function mapping$$1(tuple$$2) {
          return tuple$$2[0];
        }, prods));
        (0, _String.toConsole)((0, _String.printf)("aaa set Delay: %A %A"))(now)(tupledArg[0]);
        return (0, _disposable.append)(d$$3, setTask(tupledArg[0], function () {
          const now$$1 = (0, _time.add)(tupledArg[0], now);

          for (let i$$1 = 0; i$$1 <= prods.length - 1; i$$1++) {
            const patternInput$$1 = prods[i$$1];
            (0, _disposable.SettableDisposable$$Set$$Z5A296901)(patternInput$$1[0], run(now$$1, patternInput$$1[1]));
          }
        }));
      }, _disposable.empty, (0, _Map.groupBy)(function projection(tuple$$1) {
        return tuple$$1[0];
      }, array, {
        Compare: _Util.compare
      })));
    };
  }))[1];
}

function OModule$$$delay(d$$5, io$$5) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(d$$5), io$$5);
}

function OModule$$$run(io$$6) {
  return new O(0, "Run", io$$6);
}

function OModule$$$dispose(d$$6) {
  return new O(2, "Dispose", d$$6);
}