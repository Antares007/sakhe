"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T$00602$$get_Value = T$00602$$get_Value;
exports.get = get;
exports.put = put;
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

function get(_arg1) {
  const get$$2 = _arg1.fields[0][1];
  return get$$2();
}

function put(a, _arg1$$1) {
  const put$$1 = _arg1$$1.fields[0][0];
  put$$1(a);
}

function return$0027(f, ua) {
  let a$$1 = ua;
  return new T$00602(0, "O", [function (b) {
    a$$1 = f(a$$1, b);
  }, function () {
    return a$$1;
  }]);
}

function proxy(p) {
  return new T$00602(0, "O", [p, function () {}]);
}

function map(f$$1, _arg1$$2) {
  const put$$2 = _arg1$$2.fields[0][0];
  const get$$3 = _arg1$$2.fields[0][1];
  return new T$00602(0, "O", [put$$2, function () {
    return f$$1(get$$3());
  }]);
}

function filter(f$$2, _arg1$$3) {
  const put$$3 = _arg1$$3.fields[0][0];
  const get$$4 = _arg1$$3.fields[0][1];
  return new T$00602(0, "O", [function (a$$2) {
    if (f$$2(a$$2)) {
      put$$3(a$$2);
    }
  }, get$$4]);
}

function contraMap(g, _arg1$$4) {
  const put$$4 = _arg1$$4.fields[0][0];
  const get$$5 = _arg1$$4.fields[0][1];
  return new T$00602(0, "O", [function ($arg$$2) {
    put$$4(g($arg$$2));
  }, get$$5]);
}