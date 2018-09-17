"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.I$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _pith = require("./pith");

var _disposable = require("./s/disposable");

const I$00601 = (0, _Types.declare)(function I$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.I$00601 = I$00601;

function return$0027(f, i) {
  return function (o) {
    return f(o, i);
  };
}

function run(a, io) {
  let list = (0, _Types.L)();

  const o$$1 = function o$$1(a$$1) {
    list = (0, _Types.L)(a$$1, list);
  };

  let rez;

  try {
    try {
      rez = (0, _pith.O$$$run)(o$$1, io(new I$00601(0, "Try", a)));
    } catch (err) {
      rez = (0, _pith.O$$$run)(o$$1, io(new I$00601(1, "Catch", a, err)));
    }
  } catch (err$$1) {
    (0, _List.iterate)(function (arg00$0040) {
      const f$$1 = arg00$0040;
      f$$1();
    }, list);
    throw err$$1;
  }

  const disposable = (0, _List.fold)(_disposable.append, _disposable.empty, list);
  return [rez, disposable];
}