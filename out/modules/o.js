"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$00602$$get_Value = T$00602$$get_Value;
exports.T$00602$$Put$$2B595 = T$00602$$Put$$2B595;
exports.return$0027 = return$0027;
exports.map = map;
exports.contraMap = contraMap;

function T$00602$$get_Value(o) {
  const get$$1 = o[1];
  return get$$1();
}

function T$00602$$Put$$2B595(o$$1, a) {
  const put$$1 = o$$1[0];
  put$$1(a);
}

function return$0027(f, ua) {
  let a$$1 = ua;
  return [function (b) {
    a$$1 = f(a$$1, b);
  }, function () {
    return a$$1;
  }];
}

function map(f$$1, _arg1) {
  return [_arg1[0], function () {
    return f$$1(_arg1[1]());
  }];
}

function contraMap(g, _arg1$$1) {
  return [function ($arg$$2) {
    _arg1$$1[0](g($arg$$2));
  }, _arg1$$1[1]];
}