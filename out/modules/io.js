"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.TryCatch$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _pith = require("./pith");

var _List = require("./fable-core.2.0.0-beta-004/List");

var _disposable = require("./s/disposable");

const TryCatch$00601 = (0, _Types.declare)(function TryCatch$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.TryCatch$00601 = TryCatch$00601;

function return$0027(f, i) {
  return function (o) {
    return f(o, (0, _pith.I$$$run)(i));
  };
}

function run(i$$1, io) {
  let list = (0, _Types.L)();

  const o$$1 = function o$$1(a) {
    list = (0, _Types.L)(a, list);
  };

  let rez;

  try {
    try {
      rez = (0, _pith.O$$$run)(o$$1, io((0, _pith.I$$$map)(function f$$1(arg0$$1) {
        return new TryCatch$00601(0, "Try", arg0$$1);
      }, i$$1)));
    } catch (err) {
      rez = (0, _pith.O$$$run)(o$$1, io((0, _pith.I$$$map)(function f$$2(a$$1) {
        return new TryCatch$00601(1, "Catch", a$$1, err);
      }, i$$1)));
    }
  } catch (err$$1) {
    (0, _List.iterate)(function (arg00$0040) {
      const f$$3 = arg00$0040;
      f$$3();
    }, list);
    throw err$$1;
  }

  const disposable = (0, _List.fold)(_disposable.append, _disposable.empty, list);
  return [rez, disposable];
}