"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.now = now;
exports.T$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _sink = require("./sink");

var _timeIo = require("./time-io");

const T$00601 = (0, _Types.declare)(function T$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00601 = T$00601;

function return$0027(f) {
  return new T$00601(0, "Stream", f);
}

function run(sink, _arg1) {
  const s = _arg1.fields[0];
  return s(sink);
}

function now(a) {
  return return$0027(function (sink$$1) {
    return (0, _timeIo.return$0027)(function (o, _arg1$$1) {
      if (_arg1$$1.tag === 0) {
        const now$$1 = _arg1$$1.fields[0];
        (0, _sink.Send$$$event)(now$$1, a, sink$$1);
        (0, _sink.Send$$$end$0027)(now$$1, sink$$1);
      } else {
        throw new Error("never");
      }
    });
  });
}