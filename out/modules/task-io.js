"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.TryCatch$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _disposable = require("./disposable");

var _o = require("./o");

const TryCatch$00601 = (0, _Types.declare)(function TryCatch$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TryCatch$00601 = TryCatch$00601;

function return$0027(f) {
  return (0, _io.return$0027)(f);
}

function run(a, _arg1) {
  const io = _arg1;
  const o = (0, _o.return$0027)(_disposable.append, _disposable.empty);

  try {
    (0, _io.run)(new TryCatch$00601(0, "Try", a), o, io);
  } catch (err) {
    try {
      (0, _io.run)(new TryCatch$00601(1, "Catch", a, err), o, io);
    } catch (err$$1) {
      try {
        (0, _o.T$00602$$get_Value)(o).Dispose();
      } catch (err$$2) {}

      throw err$$1;
    }
  }

  return (0, _o.T$00602$$get_Value)(o);
}