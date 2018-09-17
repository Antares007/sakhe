"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.In$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _pith = require("./pith");

var _disposable = require("./s/disposable");

var _List = require("./fable-core.2.0.0-beta-004/List");

const In$00601 = (0, _Types.declare)(function In$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.In$00601 = In$00601;

function return$0027(f, i) {
  return function (o) {
    return f(o, (0, _pith.I$$$run)(i));
  };
}

function run(a, io) {
  let list = (0, _Types.L)();

  const o$$1 = function o$$1(a$$1) {
    list = (0, _Types.L)(a$$1, list);
  };

  let rez;

  try {
    rez = (0, _pith.O$$$run)(o$$1, io((0, _pith.I$$$contraMap)(function f$$1(arg0$$1) {
      return new In$00601(0, "Run", arg0$$1);
    }, a)));
  } catch (err) {
    rez = (0, _pith.O$$$run)(o$$1, io((0, _pith.I$$$contraMap)(function f$$2(a$$2) {
      return new In$00601(1, "Exn", a$$2, err);
    }, a)));
  }

  return [rez, (0, _List.fold)(_disposable.append, _disposable.empty, list)];
}