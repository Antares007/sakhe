"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$00603$reflection = T$00603$reflection;
exports.mappend = mappend;
exports.return$0027 = return$0027;
exports.empty = empty;
exports.map = map;
exports.run = run;
exports.contraMap = contraMap;
exports.pmap = pmap;
exports.bind = bind;
exports.T$00603 = void 0;

var _Types = require("./fable-library.2.1.2/Types");

var _pith = require("./pith");

var _Reflection = require("./fable-library.2.1.2/Reflection");

const T$00603 = (0, _Types.declare)(function Sakhe_Abo_T(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00603 = T$00603;

function T$00603$reflection($gen$$2, $gen$$3, $gen$$4) {
  return (0, _Reflection.union)("Sakhe.Abo.T`3", [$gen$$2, $gen$$3, $gen$$4], T$00603, () => [["Abo", [(0, _Reflection.lambda)($gen$$2, (0, _pith.T$00602$reflection)($gen$$4, $gen$$3))]]]);
}

function mappend(mappend$$1, _arg2, _arg1) {
  const l = _arg2.fields[0];
  const r = _arg1.fields[0];
  return new T$00603(0, "Abo", function (i) {
    return (0, _pith.mappend)(mappend$$1, l(i), r(i));
  });
}

function return$0027(f) {
  return new T$00603(0, "Abo", f);
}

function empty() {
  return new T$00603(0, "Abo", function (_arg1$$1) {
    return (0, _pith.empty)();
  });
}

function map(f$$1, _arg1$$2) {
  const io = _arg1$$2.fields[0];
  return new T$00603(0, "Abo", function ($arg$$1) {
    return f$$1(io($arg$$1));
  });
}

function run(i$$1, _arg1$$3) {
  const io$$1 = _arg1$$3.fields[0];
  return io$$1(i$$1);
}

function contraMap(g, io$$2) {
  return new T$00603(0, "Abo", function (i$$2) {
    return run(g(i$$2), io$$2);
  });
}

function pmap(f$$2, _arg1$$4) {
  const io$$3 = _arg1$$4.fields[0];
  return new T$00603(0, "Abo", function (i$$3) {
    return (0, _pith.pmap)(f$$2, io$$3(i$$3));
  });
}

function bind(g$$1, _arg1$$5) {
  const io$$4 = _arg1$$5.fields[0];
  return new T$00603(0, "Abo", function (i$$4) {
    const p = io$$4(i$$4);
    const io$$5 = g$$1(p).fields[0];
    return io$$5(i$$4);
  });
}