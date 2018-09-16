"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.map = map;
exports.bind = bind;
exports.run = run;
exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _Util = require("./fable-core.2.0.0-beta-004/Util");

var _io = require("./io");

var _disposable = require("./s/disposable");

var _List = require("./fable-core.2.0.0-beta-004/List");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function return$0027(f) {
  return (0, _Util.curry)(2, f);
}

function map(g, f$$1, _arg1) {
  const io = _arg1;
  return (0, _io.IO$$$map)(g, f$$1, io);
}

function bind(f$$2, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return (0, _io.IO$$$bind)(function (a) {
    const io$$2 = f$$2(a);
    return io$$2;
  }, io$$1);
}

function run(a$$1, _arg1$$2) {
  const io$$3 = _arg1$$2;
  let patternInput$$1;

  try {
    patternInput$$1 = (0, _io.IO$$$run)(function () {
      return new I$00601(0, "Run", a$$1);
    }, io$$3);
  } catch (err) {
    patternInput$$1 = (0, _io.IO$$$run)(function () {
      return new I$00601(1, "Exn", a$$1, err);
    }, io$$3);
  }

  return [patternInput$$1[0], (0, _List.fold)(_disposable.append, _disposable.empty, patternInput$$1[1])];
}