"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S$$$return$0027 = S$$$return$0027;
exports.S$$$run = S$$$run;
exports.S$$$see1 = S$$$see1;
exports.Stream$$$return$0027 = Stream$$$return$0027;
exports.Stream$$$run = Stream$$$run;
exports.Stream$$$now = Stream$$$now;
exports.Stream$$$periodic = Stream$$$periodic;
exports.Stream$002ET$00601 = exports.S$002ET$00601 = exports.S$002EI$00601 = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

var _io = require("./io");

var _pith = require("./pith");

var _disposable = require("./s/disposable");

var _sink = require("./sink");

var _timeIo = require("./time-io");

const S$002EI$00601 = (0, _Types.declare)(function S$002EI$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.S$002EI$00601 = S$002EI$00601;
const S$002ET$00601 = (0, _Types.declare)(function S$002ET$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.S$002ET$00601 = S$002ET$00601;

function S$$$return$0027(f) {
  return new S$002ET$00601(0, "Stream", function (s) {
    return (0, _io.return$0027)(function (i, o) {
      f(s, i, function (arg00) {
        o(arg00);
      });
    });
  });
}

function S$$$run(now, sink, _arg1) {
  const s$$1 = _arg1.fields[0];
  const o$$1 = (0, _pith.O$$$return$0027)(function (unitVar0, a) {
    sink(a);
  }, null);
  const io = (0, _pith.Pith$$$run)(o$$1, s$$1);
  const o2 = (0, _pith.O$$$return$0027)(_disposable.append, _disposable.empty);

  try {
    (0, _io.run)(now, o2, io);
  } catch (err) {
    try {
      (0, _pith.O$00602$$get_Value)(o2).Dispose();
    } catch (matchValue) {}

    sink(new S$002EI$00601(2, "Error", now, err));
  }

  return (0, _pith.O$00602$$get_Value)(o2);
}

function S$$$see1(a$$1) {
  return S$$$return$0027(function (sink$$1, time, o$$2) {
    sink$$1(new S$002EI$00601(0, "Event", time, a$$1));
    sink$$1(new S$002EI$00601(1, "End", time));
  });
}

const Stream$002ET$00601 = (0, _Types.declare)(function Stream$002ET$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Stream$002ET$00601 = Stream$002ET$00601;

function Stream$$$return$0027(f$$3) {
  return new Stream$002ET$00601(0, "Stream", f$$3);
}

function Stream$$$run(_arg1$$1, sink$$2) {
  const s$$2 = _arg1$$1.fields[0];
  return s$$2(sink$$2);
}

function Stream$$$now(a$$2) {
  return new Stream$002ET$00601(0, "Stream", function (sink$$3) {
    return (0, _timeIo.return$0027)(function (i$$1, o$$3) {
      if (i$$1.tag === 0) {
        const now$$1 = i$$1.fields[0];
        (0, _sink.Send$$$event)(now$$1, a$$2, sink$$3);
        (0, _sink.Send$$$end$0027)(now$$1, sink$$3);
      } else {
        throw new Error("never");
      }
    });
  });
}

function Stream$$$periodic(period) {
  const io$$1 = function io$$1(sink$$4) {
    return (0, _timeIo.return$0027)(function (i$$2, o$$4) {
      if (i$$2.tag === 0) {
        const now$$2 = i$$2.fields[0];
        (0, _sink.Send$$$event)(now$$2, null, sink$$4);
        o$$4((0, _timeIo.OModule$$$delay)(period, io$$1(sink$$4)));
      } else {
        throw new Error("never");
      }
    });
  };

  return new Stream$002ET$00601(0, "Stream", io$$1);
}