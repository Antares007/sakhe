"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.now = now;
exports.periodic = periodic;
exports.T$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _sink = require("./sink");

var _timeIo = require("./time-io");

var _Util = require("./fable-core.2.0.0-beta-004/Util");

const T$00601 = (0, _Types.declare)(function T$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00601 = T$00601;

function return$0027(f) {
  return new T$00601(0, "Stream", f);
}

function run(_arg1, sink) {
  const s = _arg1.fields[0];
  return s(sink);
}

function now(a) {
  return new T$00601(0, "Stream", function (sink$$1) {
    return (0, _timeIo.return$0027)(function (i) {
      return function (o) {
        if (i.tag === 0) {
          const now$$1 = i.fields[0];
          (0, _sink.Send$$$event)(now$$1, a, sink$$1);
          (0, _sink.Send$$$end$0027)(now$$1, sink$$1);
        } else {
          throw new Error("never");
        }
      };
    });
  });
}

function periodic(period) {
  const io = function io(sink$$2, i$$1) {
    return function (o$$1) {
      if (i$$1.tag === 0) {
        const now$$2 = i$$1.fields[0];
        (0, _sink.Send$$$event)(now$$2, null, sink$$2);
        o$$1((0, _timeIo.OModule$$$delay)(period, (0, _Util.partialApply)(1, io, [sink$$2])));
      } else {
        throw new Error("never");
      }
    };
  };

  return new T$00601(0, "Stream", function (sink$$3) {
    return (0, _timeIo.return$0027)(function (i$$2) {
      return io(sink$$3, i$$2);
    });
  });
}