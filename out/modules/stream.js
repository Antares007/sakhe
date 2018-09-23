"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S2$$$return$0027 = S2$$$return$0027;
exports.S2$$$run = S2$$$run;
exports.S2$$$now = S2$$$now;
exports.S2$$$periodic = S2$$$periodic;
exports.Stream$$$return$0027 = Stream$$$return$0027;
exports.Stream$$$run = Stream$$$run;
exports.Stream$$$now = Stream$$$now;
exports.Stream$$$periodic = Stream$$$periodic;
exports.Stream$002ET$00601 = exports.S2$002ET$00601 = exports.S2$002EI$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _pith = require("./pith");

var _o = require("./o");

var _disposable = require("./disposable");

var _time = require("./time");

var _sink = require("./sink");

var _timeIo = require("./time-io");

const S2$002EI$00601 = (0, _Types.declare)(function S2$002EI$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.S2$002EI$00601 = S2$002EI$00601;
const S2$002ET$00601 = (0, _Types.declare)(function S2$002ET$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.S2$002ET$00601 = S2$002ET$00601;

function S2$$$return$0027(f) {
  return new S2$002ET$00601(0, "Stream", (0, _pith.return$0027)(function (s) {
    return (0, _io.return$0027)(function (i, o) {
      f(s, i, function (arg00) {
        o(arg00);
      });
    });
  }));
}

function S2$$$run(now, sink, _arg1) {
  const pith = _arg1.fields[0];
  const o$$1 = (0, _o.return$0027)(function (unitVar0, a) {
    sink(a);
  }, null);
  const io = (0, _pith.run)(o$$1, pith);
  const o2 = (0, _o.return$0027)(_disposable.append, _disposable.empty);

  try {
    (0, _io.run)(now, o2, io);
  } catch (err) {
    try {
      (0, _o.T$00602$$get_Value)(o2).Dispose();
    } catch (matchValue) {}

    sink(new S2$002EI$00601(2, "Error", now, err));
  }

  return (0, _o.T$00602$$get_Value)(o2);
}

function S2$$$now(a$$1) {
  return S2$$$return$0027(function (sink$$1, time, o$$2) {
    sink$$1(new S2$002EI$00601(0, "Event", time, a$$1));
    sink$$1(new S2$002EI$00601(1, "End", time));
  });
}

function S2$$$periodic(period) {
  return S2$$$return$0027(function (sink$$2, now$$1, o$$3) {
    const d1 = (0, _disposable.SettableDisposable$$$$002Ector)();
    const d2 = (0, _disposable.SettableDisposable$$$$002Ector)();
    o$$3(d1);
    o$$3(d2);

    const send = function send(now$$2) {
      sink$$2(new S2$002EI$00601(0, "Event", now$$2, null));
      const token = setTimeout(function () {}, (0, _time.DelayModule$$$unbox)(period));
      (0, _disposable.SettableDisposable$$Set$$Z5A296901)(d1, (0, _disposable.return$0027)(function () {
        clearTimeout(token);
      }));
    };

    send(now$$1);
  });
}

const Stream$002ET$00601 = (0, _Types.declare)(function Stream$002ET$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Stream$002ET$00601 = Stream$002ET$00601;

function Stream$$$return$0027(f$$6) {
  return new Stream$002ET$00601(0, "Stream", f$$6);
}

function Stream$$$run(_arg1$$1, sink$$3) {
  const s$$1 = _arg1$$1.fields[0];
  return s$$1(sink$$3);
}

function Stream$$$now(a$$2) {
  return new Stream$002ET$00601(0, "Stream", function (sink$$4) {
    return (0, _timeIo.return$0027)(function (i$$1, o$$4) {
      if (i$$1.tag === 0) {
        const now$$3 = i$$1.fields[0];
        (0, _sink.Send$$$event)(now$$3, a$$2, sink$$4);
        (0, _sink.Send$$$end$0027)(now$$3, sink$$4);
      } else {
        throw new Error("never");
      }
    });
  });
}

function Stream$$$periodic(period$$1) {
  const io$$1 = function io$$1(sink$$5) {
    return (0, _timeIo.return$0027)(function (i$$2, o$$5) {
      if (i$$2.tag === 0) {
        const now$$4 = i$$2.fields[0];
        (0, _sink.Send$$$event)(now$$4, null, sink$$5);
        o$$5((0, _timeIo.OModule$$$delay)(period$$1, io$$1(sink$$5)));
      } else {
        throw new Error("never");
      }
    });
  };

  return new Stream$002ET$00601(0, "Stream", io$$1);
}