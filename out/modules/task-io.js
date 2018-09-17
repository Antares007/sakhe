"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.see = exports.TryCatch$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _pith = require("./pith");

var _disposable = require("./s/disposable");

var _List = require("./fable-core.2.0.0-beta-004/List");

const TryCatch$00601 = (0, _Types.declare)(function TryCatch$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TryCatch$00601 = TryCatch$00601;

function run(a, io) {
  let list = (0, _Types.L)();

  const o = function o(a$$1) {
    list = (0, _Types.L)(a$$1, list);
  };

  let rez;

  try {
    rez = (0, _pith.O$$$run)(o, io((0, _pith.I$$$contraMap)(function f(arg0) {
      return new TryCatch$00601(0, "Try", arg0);
    }, a)));
  } catch (err) {
    rez = (0, _pith.O$$$run)(o, io((0, _pith.I$$$contraMap)(function f$$1(a$$2) {
      return new TryCatch$00601(1, "Catch", a$$2, err);
    }, a)));
  }

  return [rez, (0, _List.fold)(_disposable.append, _disposable.empty, list)];
}

const see = run((0, _pith.I$$$Of)(1), function (i) {
  return function (o$$1) {
    return 1;
  };
});
exports.see = see;