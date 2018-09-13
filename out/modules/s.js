"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;
exports.rez = exports.a = void 0;

var _io = require("./io");

const a = 42;
exports.a = a;

function test(_arg1) {
  if (_arg1.tag === 1) {
    const err = _arg1.fields[1];
    return function (o$$1) {
      o$$1(null);
    };
  } else {
    return function (o) {
      o(null);
    };
  }
}

const rez = (0, _io.run)(test);
exports.rez = rez;