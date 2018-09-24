"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.O$$$Now = O$$$Now;
exports.O$$$delay = O$$$delay;
exports.O$$$periodic = O$$$periodic;
exports.run2 = run2;
exports.see = exports.O$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

var _disposable = require("./disposable");

var _sink = require("./sink");

var _taskIo = require("./task-io");

const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function return$0027(f) {
  return (0, _io.return$0027)(f);
}

function O$$$Now(f$$2) {
  return new O$00601(0, "Now", return$0027(f$$2));
}

function O$$$delay(delay, f$$4) {
  return new O$00601(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function O$$$periodic(delay$$1, f$$5) {
  return new O$00601(2, "Periodic", (0, _time.DelayModule$$$return$0027)(delay$$1), return$0027(f$$5));
}

function run2(o, now, _arg1) {
  const io = _arg1;
  const io$$1 = (0, _io.return$0027)(function (unitVar0, o$$1) {
    o$$1("");
    return 1;
  });
}

const see = return$0027(function (t, o$$2) {
  o$$2(new O$00601(0, "Now", return$0027(function (t$$1, o$$3) {
    return (0, _taskIo.return$0027)(function (i, o$$4) {
      if (i.tag === 0) {
        const sink$$1 = i.fields[0];
        o$$4(_disposable.empty);
        (0, _sink.Send$$$event)(t$$1, 1, sink$$1);
      } else {
        const sink = i.fields[0];
        const err = i.fields[1];
        (0, _sink.Send$$$error)(t$$1, err, sink);
      }
    });
  })));
  return (0, _taskIo.return$0027)(function (i$$1, o$$5) {
    if (i$$1.tag === 0) {
      const sink$$3 = i$$1.fields[0];
      o$$5(_disposable.empty);
      (0, _sink.Send$$$event)(t, 1, sink$$3);
    } else {
      const sink$$2 = i$$1.fields[0];
      const err$$1 = i$$1.fields[1];
      (0, _sink.Send$$$error)(t, err$$1, sink$$2);
    }
  });
});
exports.see = see;