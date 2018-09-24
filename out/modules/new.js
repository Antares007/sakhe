"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.OModule$$$run = OModule$$$run;
exports.OModule$$$delay = OModule$$$delay;
exports.OModule$$$periodic = OModule$$$periodic;
exports.OModule$$$dispose = OModule$$$dispose;
exports.run = run;
exports.ORay$$$$002Ector$$78C95C46 = ORay$$$$002Ector$$78C95C46;
exports.ORay$$$Api$$38DBA04A = ORay$$$Api$$38DBA04A;
exports.ORay$$Run$$38DBA04A = ORay$$Run$$38DBA04A;
exports.ORay$$Delay = ORay$$Delay;
exports.ORay$$Periodic = ORay$$Periodic;
exports.ORay$$Dispose$$Z5A296901 = ORay$$Dispose$$Z5A296901;
exports.rez = exports.see = exports.ORay = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

var _o = require("./o");

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.0-beta-005/String");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return (0, _io.return$0027)(f);
}

function OModule$$$run(f$$2) {
  return new O(0, "Run", return$0027(f$$2));
}

function OModule$$$delay(delay, f$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function OModule$$$periodic(delay$$1, f$$5) {
  return new O(3, "Periodic", (0, _time.DelayModule$$$return$0027)(delay$$1), return$0027(f$$5));
}

function OModule$$$dispose(d) {
  return new O(2, "Dispose", d);
}

function run(now, _arg1) {
  const io = _arg1;
  const o = (0, _o.return$0027)(function (l, a) {
    return (0, _Types.L)(a, l);
  }, (0, _Types.L)());

  const go = function go(now$$1, o$$1, io$$1) {
    (0, _io.run)(now$$1, (0, _o.filter)(function f$$6(_arg2) {
      if (_arg2.tag === 0) {
        const io$$2 = _arg2.fields[0];
        go(now$$1, o$$1, io$$2);
        return false;
      } else {
        return true;
      }
    }, o$$1), io$$1);
  };

  go(now, o, io);
  return (0, _o.T$00602$$get_Value)(o);
}

const ORay = (0, _Types.declare)(function ORay(o$$2) {
  const $this$$3 = this;
  $this$$3.o = o$$2;
});
exports.ORay = ORay;

function ORay$$$$002Ector$$78C95C46(o$$2) {
  return this != null ? ORay.call(this, o$$2) : new ORay(o$$2);
}

function ORay$$$Api$$38DBA04A(f$$7) {
  return return$0027(function (now$$2, o$$3) {
    f$$7(now$$2, ORay$$$$002Ector$$78C95C46(o$$3));
  });
}

function ORay$$Run$$38DBA04A(__, f$$9) {
  __.o(new O(0, "Run", ORay$$$Api$$38DBA04A(f$$9)));
}

function ORay$$Delay(__$$1, delay$$2, f$$10) {
  __$$1.o(new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay$$2), ORay$$$Api$$38DBA04A(f$$10)));
}

function ORay$$Periodic(__$$2, delay$$3, f$$11) {
  __$$2.o(new O(3, "Periodic", (0, _time.DelayModule$$$return$0027)(delay$$3), ORay$$$Api$$38DBA04A(f$$11)));
}

function ORay$$Dispose$$Z5A296901(__$$3, d$$1) {
  __$$3.o(new O(2, "Dispose", d$$1));
}

const see = ORay$$$Api$$38DBA04A(function (now$$3, o$$4) {
  ORay$$Run$$38DBA04A(o$$4, function (now$$4, o$$5) {
    ORay$$Delay(o$$5, 1, function (now$$5, o$$6) {
      ORay$$Dispose$$Z5A296901(o$$6, _disposable.empty);
    });
    ORay$$Run$$38DBA04A(o$$5, function (now$$6, o$$7) {
      ORay$$Delay(o$$7, 2, function (now$$7, o$$8) {
        ORay$$Dispose$$Z5A296901(o$$8, _disposable.empty);
      });
      ORay$$Run$$38DBA04A(o$$7, function (now$$8, o$$9) {
        ORay$$Delay(o$$9, 3, function (now$$9, o$$10) {
          ORay$$Dispose$$Z5A296901(o$$10, _disposable.empty);
        });
        ORay$$Run$$38DBA04A(o$$9, function (now$$10, o$$11) {
          ORay$$Delay(o$$11, 4, function (now$$11, o$$12) {
            ORay$$Dispose$$Z5A296901(o$$12, _disposable.empty);
          });
        });
      });
    });
  });
  ORay$$Delay(o$$4, 5, function (now$$12, o$$13) {
    ORay$$Periodic(o$$13, 6, function (now$$13, o$$14) {
      ORay$$Dispose$$Z5A296901(o$$14, _disposable.empty);
    });
  });
});
exports.see = see;
const rez = run(_time.zero, see);
exports.rez = rez;
(0, _String.toConsole)((0, _String.printf)("%A"))(rez);