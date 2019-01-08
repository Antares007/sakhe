"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pair = pair;
exports.sc = exports.onClick = exports.d = exports.s = void 0;

var _stream = require("./stream");

var _disposable = require("./disposable");

var _Util = require("./fable-library.2.1.8/Util");

var _default = require("./default");

var _String = require("./fable-library.2.1.8/String");

function pair(a, b) {
  return [a, b];
}

const s = (0, _stream.merge)((0, _stream.periodic)(1000, "a"), (0, _stream.periodic)(2000, "b"));
exports.s = s;
const d = (0, _Util.createAtom)(_disposable.empty);
exports.d = d;
const onClick = (0, _stream.map)(function f$$2(e$$1) {
  return "clientX:" + e$$1.clientX.toString() + " clientY:" + e$$1.clientY.toString();
}, (0, _stream.map)(function f$$1(e) {
  return e;
}, (0, _stream.merge)((0, _stream.tap)(function f(_arg1) {
  d().Dispose();
}, (0, _stream.on)("click", window)), (0, _stream.on)("mousemove", window))));
exports.onClick = onClick;
const sc = (0, _stream.combineArray)([(0, _stream.at)(3, "a"), (0, _stream.at)(2, "b"), (0, _stream.at)(1, "c")]);
exports.sc = sc;
d((0, _stream.run)(_default.scheduler, function (arg10) {
  (0, _String.toConsole)((0, _String.printf)("%A"))(arg10);
}, (0, _stream.merge)(onClick, s)));