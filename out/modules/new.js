"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.O$$$Now = O$$$Now;
exports.O$$$delay = O$$$delay;
exports.O$$$periodic = O$$$periodic;
exports.see = exports.O$00601 = exports.TryCatch = exports.On$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _io = require("./io");

var _pith = require("./pith");

var _time = require("./time");

var _disposable = require("./disposable");

const On$00601 = (0, _Types.declare)(function On$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.On$00601 = On$00601;
const TryCatch = (0, _Types.declare)(function TryCatch(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TryCatch = TryCatch;
const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function return$0027(f) {
  return (0, _pith.return$0027)(function ($arg$$2) {
    return (0, _io.return$0027)((0, _Util.uncurry)(2, (0, _Util.partialApply)(2, f, [$arg$$2])));
  });
}

function O$$$Now(f$$3) {
  return new O$00601(0, "Now", return$0027(f$$3));
}

function O$$$delay(delay, f$$5) {
  return new O$00601(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$5));
}

function O$$$periodic(delay$$1, f$$6) {
  return new O$00601(2, "Periodic", (0, _time.DelayModule$$$return$0027)(delay$$1), return$0027(f$$6));
}

const see = return$0027(function (sink, now, o) {
  return (0, _io.return$0027)(function (i, o$$1) {
    if (i.tag === 1) {
      const err = i.fields[0];
      sink(new On$00601(2, "Error", now, err));
    } else {
      o$$1(_disposable.empty);
      sink(new On$00601(0, "Event", now, 1));
    }
  });
});
exports.see = see;