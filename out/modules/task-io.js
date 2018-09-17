"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.see = exports.TryCatch$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _pith = require("./pith");

var _disposable = require("./s/disposable");

const TryCatch$00601 = (0, _Types.declare)(function TryCatch$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TryCatch$00601 = TryCatch$00601;

function run(i, io) {
  let list = (0, _Types.L)();

  const o = function o(a) {
    list = (0, _Types.L)(a, list);
  };

  let rez;

  try {
    try {
      rez = (0, _pith.O$$$run)(o, io((0, _pith.I$$$contraMap)(function f(arg0) {
        return new TryCatch$00601(0, "Try", arg0);
      }, i)));
    } catch (err) {
      rez = (0, _pith.O$$$run)(o, io((0, _pith.I$$$contraMap)(function f$$1(a$$1) {
        return new TryCatch$00601(1, "Catch", a$$1, err);
      }, i)));
    }
  } catch (err$$1) {
    (0, _List.iterate)(function (arg00$0040) {
      const f$$2 = arg00$0040;
      f$$2();
    }, list);
    throw err$$1;
  }

  const disposable = (0, _List.fold)(_disposable.append, _disposable.empty, list);
  return [rez, disposable];
}

const see = run((0, _pith.I$$$Of)(1), function (i$$3) {
  return function (o$$2) {
    return 1;
  };
});
exports.see = see;