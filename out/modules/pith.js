"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.empty = empty;
exports.run = run;
exports.filter = filter;
exports.filterMap = filterMap;
exports.map = map;
exports.pmap = pmap;
exports.bind = bind;

var _Option = require("./fable-core.2.0.0-beta-005/Option");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

function return$0027(f) {
  return f;
}

function empty() {
  return function (o) {};
}

function run(o$$1, _arg1) {
  const p = _arg1;
  return p(function (a) {
    o$$1[0](a);
  });
}

function filter(f$$1, _arg1$$2) {
  const p$$1 = _arg1$$2;
  return function (o$$2) {
    return p$$1(function (a$$2) {
      if (f$$1(a$$2)) {
        o$$2(a$$2);
      }
    });
  };
}

function filterMap(f$$2, _arg1$$3) {
  const p$$2 = _arg1$$3;
  return function (o$$3) {
    return p$$2(function (a$$3) {
      const matchValue = f$$2(a$$3);

      if (matchValue != null) {
        const a$$4 = (0, _Option.value)(matchValue);
        o$$3(a$$4);
      }
    });
  };
}

function map(f$$3, _arg1$$4) {
  const p$$3 = _arg1$$4;
  return function ($arg$$1) {
    return f$$3(p$$3($arg$$1));
  };
}

function pmap(f$$4, _arg1$$5) {
  const p$$4 = _arg1$$5;
  return (0, _Util.partialApply)(1, f$$4, [p$$4]);
}

function bind(f$$5, _arg1$$6) {
  const p$$5 = _arg1$$6;
  return function (o$$4) {
    const a$$5 = p$$5(o$$4);
    const p$$6 = f$$5(a$$5);
    return p$$6(o$$4);
  };
}