"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.unbox = unbox;
exports.empty = empty;
exports.mappend = mappend;
exports.run = run;
exports.filter = filter;
exports.filterMap = filterMap;
exports.map = map;
exports.pmap = pmap;
exports.bind = bind;
exports.T$00602 = void 0;

var _Types = require("./fable-core.2.0.0/Types");

var _Option = require("./fable-core.2.0.0/Option");

var _Util = require("./fable-core.2.0.0/Util");

const T$00602 = (0, _Types.declare)(function T$00602(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00602 = T$00602;

function return$0027(f) {
  return new T$00602(0, "Pith", f);
}

function unbox(_arg1) {
  const p = _arg1.fields[0];
  return p;
}

function empty() {
  return new T$00602(0, "Pith", function (o) {});
}

function mappend(mappend$$1, _arg2, _arg1$$1) {
  const l = _arg2.fields[0];
  const r = _arg1$$1.fields[0];
  return new T$00602(0, "Pith", function (o$$1) {
    return mappend$$1(l(o$$1), r(o$$1));
  });
}

function run(o$$2, _arg1$$2) {
  const p$$1 = _arg1$$2.fields[0];
  return p$$1(function (a) {
    const put = o$$2.fields[0][0];
    put(a);
  });
}

function filter(f$$1, _arg1$$4) {
  const p$$2 = _arg1$$4.fields[0];
  return new T$00602(0, "Pith", function (o$$3) {
    return p$$2(function (a$$2) {
      if (f$$1(a$$2)) {
        o$$3(a$$2);
      }
    });
  });
}

function filterMap(f$$2, _arg1$$5) {
  const p$$3 = _arg1$$5.fields[0];
  return new T$00602(0, "Pith", function (o$$4) {
    return p$$3(function (a$$3) {
      const matchValue = f$$2(a$$3);

      if (matchValue != null) {
        const a$$4 = (0, _Option.value)(matchValue);
        o$$4(a$$4);
      }
    });
  });
}

function map(f$$3, _arg1$$6) {
  const p$$4 = _arg1$$6.fields[0];
  return new T$00602(0, "Pith", function ($arg$$1) {
    return f$$3(p$$4($arg$$1));
  });
}

function pmap(f$$4, _arg1$$7) {
  const p$$5 = _arg1$$7.fields[0];
  return new T$00602(0, "Pith", (0, _Util.partialApply)(1, f$$4, [p$$5]));
}

function bind(f$$5, _arg1$$8) {
  const p$$6 = _arg1$$8.fields[0];
  return new T$00602(0, "Pith", function (o$$5) {
    const a$$5 = p$$6(o$$5);
    const p$$7 = f$$5(a$$5).fields[0];
    return p$$7(o$$5);
  });
}