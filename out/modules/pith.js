"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.unbox = unbox;
exports.empty = empty;
exports.mappend = mappend;
exports.extend2 = extend2;
exports.extend3 = extend3;
exports.extend4 = extend4;
exports.run = run;
exports.filter = filter;
exports.filterMap = filterMap;
exports.map = map;
exports.pmap = pmap;
exports.bind = bind;
exports.T$00602 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _Option = require("./fable-core.2.0.0-beta-005/Option");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

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

function extend2(mappend$$2, _arg2$$1, _arg1$$2) {
  const l$$1 = _arg2$$1.fields[0];
  const r$$1 = _arg1$$2.fields[0];
  return new T$00602(0, "Pith", function (o$$2) {
    return mappend$$2(l$$1(function (_arg3) {
      if (null) {
        const a$$1 = _arg3;
        o$$2(a$$1);
      } else {
        const a = _arg3;
        o$$2(a);
      }
    }), r$$1(function ($arg$$1) {
      o$$2($arg$$1);
    }));
  });
}

function extend3(mappend$$3, _arg2$$2, _arg1$$3) {
  const l$$2 = _arg2$$2.fields[0];
  const r$$2 = _arg1$$3.fields[0];
  return new T$00602(0, "Pith", function (o$$3) {
    return mappend$$3(l$$2(function (_arg3$$1) {
      if (null) {
        const a$$3 = _arg3$$1;
        o$$3(a$$3);
      } else if (null) {
        const a$$4 = _arg3$$1;
        o$$3(a$$4);
      } else {
        const a$$2 = _arg3$$1;
        o$$3(a$$2);
      }
    }), r$$2(function ($arg$$2) {
      o$$3($arg$$2);
    }));
  });
}

function extend4(mappend$$4, _arg2$$3, _arg1$$4) {
  const l$$3 = _arg2$$3.fields[0];
  const r$$3 = _arg1$$4.fields[0];
  return new T$00602(0, "Pith", function (o$$4) {
    return mappend$$4(l$$3(function (_arg3$$2) {
      if (null) {
        const a$$6 = _arg3$$2;
        o$$4(a$$6);
      } else if (null) {
        const a$$7 = _arg3$$2;
        o$$4(a$$7);
      } else if (null) {
        const a$$8 = _arg3$$2;
        o$$4(a$$8);
      } else {
        const a$$5 = _arg3$$2;
        o$$4(a$$5);
      }
    }), r$$3(function ($arg$$3) {
      o$$4($arg$$3);
    }));
  });
}

function run(o$$5, _arg1$$5) {
  const p$$1 = _arg1$$5.fields[0];
  return p$$1(function (a$$9) {
    const put = o$$5.fields[0][0];
    put(a$$9);
  });
}

function filter(f$$1, _arg1$$7) {
  const p$$2 = _arg1$$7.fields[0];
  return new T$00602(0, "Pith", function (o$$6) {
    return p$$2(function (a$$11) {
      if (f$$1(a$$11)) {
        o$$6(a$$11);
      }
    });
  });
}

function filterMap(f$$2, _arg1$$8) {
  const p$$3 = _arg1$$8.fields[0];
  return new T$00602(0, "Pith", function (o$$7) {
    return p$$3(function (a$$12) {
      const matchValue = f$$2(a$$12);

      if (matchValue != null) {
        const a$$13 = (0, _Option.value)(matchValue);
        o$$7(a$$13);
      }
    });
  });
}

function map(f$$3, _arg1$$9) {
  const p$$4 = _arg1$$9.fields[0];
  return new T$00602(0, "Pith", function ($arg$$4) {
    return f$$3(p$$4($arg$$4));
  });
}

function pmap(f$$4, _arg1$$10) {
  const p$$5 = _arg1$$10.fields[0];
  return new T$00602(0, "Pith", (0, _Util.partialApply)(1, f$$4, [p$$5]));
}

function bind(f$$5, _arg1$$11) {
  const p$$6 = _arg1$$11.fields[0];
  return new T$00602(0, "Pith", function (o$$8) {
    const a$$14 = p$$6(o$$8);
    const p$$7 = f$$5(a$$14).fields[0];
    return p$$7(o$$8);
  });
}