"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IO$$$return$0027 = IO$$$return$0027;
exports.IO$$$empty = IO$$$empty;
exports.IO$$$map = IO$$$map;
exports.IO$$$contraMap = IO$$$contraMap;
exports.IO$$$bind = IO$$$bind;
exports.IO$$$run = IO$$$run;
exports.Pith$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-004/Types");

var _Util = require("./fable-core.2.0.0-beta-004/Util");

const Pith$00601 = (0, _Types.declare)(function Pith$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Pith$00601 = Pith$00601;

function IO$$$return$0027(f) {
  return (0, _Util.curry)(2, f);
}

function IO$$$empty() {
  return function (i) {
    return function (o) {};
  };
}

function IO$$$map(g, f$$1, _arg1) {
  const io = _arg1;
  return function (i$$1) {
    return function (o$$1) {
      return f$$1(io(i$$1)(function ($arg$$1) {
        o$$1(g($arg$$1));
      }));
    };
  };
}

function IO$$$contraMap(f$$2, _arg1$$1) {
  const io$$1 = _arg1$$1;
  return function (i$$2) {
    return function (o$$2) {
      return io$$1(function () {
        return f$$2(i$$2());
      })(o$$2);
    };
  };
}

function IO$$$bind(f$$3, _arg1$$2) {
  const io$$2 = _arg1$$2;
  return function (i$$3) {
    return function (o$$3) {
      const a = io$$2(i$$3)(o$$3);
      const io$$3 = f$$3(a);
      return io$$3(i$$3)(o$$3);
    };
  };
}

function IO$$$run(i$$4, _arg1$$3) {
  const io$$4 = _arg1$$3;
  let list = (0, _Types.L)();
  return [io$$4(i$$4)(function (a$$1) {
    list = (0, _Types.L)(a$$1, list);
  }), list];
}