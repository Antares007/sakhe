"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.O$00601 = exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _disposable = require("./s/disposable");

var _pith = require("./pith");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _task = require("./s/task");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;
const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function return$0027(f) {
  return f;
}

function run(a, _arg1) {
  const io = _arg1;
  return (0, _task.run)(a, (0, _task.return$0027)(function (i) {
    var err, a$$2, a$$1;
    return (0, _List.fold)(function folder(o, _arg2) {
      if (_arg2.tag === 1) {
        const a$$3 = _arg2.fields[0];

        if (o != null) {
          const o$$1 = o;
          return (0, _disposable.append)(a$$3, o$$1);
        } else {
          return a$$3;
        }
      } else {
        const io$$1 = _arg2.fields[0];
        return run(a, io$$1);
      }
    }, null, (0, _pith.Pith$$$toList)(i.tag === 1 ? (err = i.fields[1], (a$$2 = i.fields[0], io(new I$00601(1, "Exn", a$$2, err)))) : (a$$1 = i.fields[0], io(new I$00601(0, "Run", a$$1)))));
  }));
}