"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.OModule$$$now = OModule$$$now;
exports.OModule$$$delay = OModule$$$delay;
exports.run = run;
exports.run2 = run2;
exports.rez = exports.see = exports.O = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _time = require("./time");

var _o = require("./o");

var _Map = require("./fable-core.2.0.0-beta-005/Map");

var _Util = require("./fable-core.2.0.0-beta-005/Util");

var _Seq = require("./fable-core.2.0.0-beta-005/Seq");

var _disposable = require("./disposable");

var _String = require("./fable-core.2.0.0-beta-005/String");

const O = (0, _Types.declare)(function O(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O = O;

function return$0027(f) {
  return (0, _io.return$0027)(f);
}

function OModule$$$now(f$$2) {
  return new O(0, "Now", return$0027(f$$2));
}

function OModule$$$delay(delay, f$$4) {
  return new O(1, "Delay", (0, _time.DelayModule$$$return$0027)(delay), return$0027(f$$4));
}

function mappend(l, r) {
  return (0, _io.return$0027)(function (i, o) {
    const o$$1 = (0, _o.proxy)(o);
    (0, _io.run)(i, o$$1, l);
    return (0, _io.run)(i, o$$1, r);
  });
}

function run(now, _arg1) {
  var projection;
  const io = _arg1;
  const o$$2 = (0, _o.return$0027)(function f$$6(map, tupledArg) {
    var matchValue, io2;
    return (matchValue = (0, _Map.tryFind)(tupledArg[0], map), matchValue == null ? function (table$$1) {
      return (0, _Map.add)(tupledArg[0], tupledArg[1], table$$1);
    } : (io2 = matchValue, function (table) {
      return (0, _Map.add)(tupledArg[0], mappend(tupledArg[1], io2), table);
    }))(map);
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));

  const go = function go(io$$2) {
    (0, _io.run)(now, o$$2, (0, _io.pmap)((0, _Util.uncurry)(2, ring))(io$$2));
  };

  const ring = function ring(p) {
    return function (o$$3) {
      p(function (_arg2) {
        if (_arg2.tag === 1) {
          const io$$4 = _arg2.fields[1];
          const delay$$2 = _arg2.fields[0];

          if ((0, _Util.equals)(delay$$2, _time.DelayModule$$$zero)) {
            go(io$$4);
          } else {
            o$$3([(0, _time.add)(delay$$2, now), io$$4]);
          }
        } else {
          const io$$3 = _arg2.fields[0];
          go(io$$3);
        }
      });
    };
  };

  go(io);
  return Array.from((projection = function projection(tuple) {
    return tuple[0];
  }, function (source) {
    return (0, _Seq.sortWith)(function (x, y) {
      return (0, _Util.compare)(projection(x), projection(y));
    }, source);
  })((0, _Map.toSeq)((0, _o.T$00602$$get_Value)(o$$2))));
}

function setTask(delay$$3, task) {
  const token = setTimeout(task, (0, _time.DelayModule$$$unbox)(delay$$3));
  return (0, _disposable.return$0027)(function () {
    clearTimeout(token);
  });
}

function run2(now$$1, io$$5) {
  const timeline = run(now$$1, io$$5);

  if ((0, _Util.equals)(timeline.length, 0)) {
    return _disposable.empty;
  } else {
    const patternInput = timeline.splice(0, 1)[0];
    const delay$$4 = (0, _time.DelayModule$$$fromTo)(now$$1, patternInput[0]);
    return setTask(delay$$4, function () {});
  }
}

const see = return$0027(function (t, o$$4) {
  o$$4(OModule$$$delay(0, function (t$$1, o$$5) {
    o$$5(OModule$$$delay(10, function (t$$2, o$$6) {}));
  }));
  o$$4(OModule$$$now(function (t$$3, o$$7) {
    o$$7(OModule$$$delay(11, function (t$$4, o$$8) {}));
  }));
});
exports.see = see;
const rez = run(_time.zero, see);
exports.rez = rez;
(0, _String.toConsole)((0, _String.printf)("%A"))(rez);