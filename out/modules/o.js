"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$00602$$get_Value = T$00602$$get_Value;
exports.return$0027 = return$0027;
exports.proxy = proxy;
exports.map = map;
exports.filter = filter;
exports.contraMap = contraMap;
exports.T$00602 = void 0;

var _Types = require("./fable-core.2.0.0/Types");

const T$00602 = (0, _Types.declare)(function T$00602(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00602 = T$00602;

function T$00602$$get_Value(o) {
  const get$$1 = o.fields[0][1];
  return get$$1();
}

function return$0027(f, ua) {
  let a = ua;
  return new T$00602(0, "O", [function (b) {
    a = f(a, b);
  }, function () {
    return a;
  }]);
}

function proxy(p) {
  return new T$00602(0, "O", [p, function () {}]);
}

function map(f$$1, _arg1) {
  const put$$1 = _arg1.fields[0][0];
  const get$$2 = _arg1.fields[0][1];
  return new T$00602(0, "O", [put$$1, function () {
    return f$$1(get$$2());
  }]);
}

function filter(f$$2, _arg1$$1) {
  const put$$2 = _arg1$$1.fields[0][0];
  const get$$3 = _arg1$$1.fields[0][1];
  return new T$00602(0, "O", [function (a$$1) {
    if (f$$2(a$$1)) {
      put$$2(a$$1);
    }
  }, get$$3]);
}

function contraMap(g, _arg1$$2) {
  const put$$3 = _arg1$$2.fields[0][0];
  const get$$4 = _arg1$$2.fields[0][1];
  return new T$00602(0, "O", [function ($arg$$2) {
    put$$3(g($arg$$2));
  }, get$$4]);
}