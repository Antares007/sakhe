"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.O$$$run = O$$$run;
exports.O$$$dispose = O$$$dispose;
exports.return$0027 = return$0027;
exports.run = run;
exports.O$00601 = exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _disposable = require("./s/disposable");

var _pith = require("./pith");

var _List = require("./fable-core.2.0.0-beta-004/List");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;
const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function O$$$run(f) {
  return new O$00601(0, "Run", f);
}

function O$$$dispose(d) {
  return new O$00601(1, "Dispose", d);
}

function return$0027(f$$1) {
  return f$$1;
}

function run(a, _arg1) {
  const io = _arg1;
  return (0, _List.fold)(function folder(r, l) {
    if (r != null) {
      const r$$1 = r;
      return (0, _disposable.append)(l, r$$1);
    } else {
      return l;
    }
  }, null, (() => {
    try {
      return (0, _pith.Pith$$$toList)((0, _pith.Pith$$$filterMap)(function f$$2(_arg2) {
        if (_arg2.tag === 1) {
          const d$$1 = _arg2.fields[0];
          return d$$1;
        } else {
          const io$$1 = _arg2.fields[0];
          return run(a, io$$1);
        }
      }, io(new I$00601(0, "Run", a))));
    } catch (err) {
      return (0, _pith.Pith$$$toList)((0, _pith.Pith$$$filterMap)(function f$$3(_arg3) {
        if (_arg3.tag === 1) {
          const d$$2 = _arg3.fields[0];
          return d$$2;
        } else {
          const io$$2 = _arg3.fields[0];
          return run(a, io$$2);
        }
      }, io(new I$00601(1, "Exn", a, err))));
    }
  })());
}