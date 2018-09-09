"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.map = map;
exports.filter = filter;
exports.filterMap = filterMap;
exports.skipRepeats = skipRepeats;
exports.combineArray = combineArray;
exports.mergeArray = mergeArray;
exports.empty = empty;
exports.never = never;
exports.now = now;
exports.at = at;
exports.periodic = periodic;
exports.throwError = throwError;
exports.T$00601 = void 0;

var _Types = require("../fable-core.2.0.0-beta-004/Types");

var _sink = require("./sink");

var _Array = require("../fable-core.2.0.0-beta-004/Array");

var _disposable = require("./disposable");

var _task = require("./task");

var _scheduler = require("./scheduler");

const T$00601 = (0, _Types.declare)(function T$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00601 = T$00601;

function return$0027(f) {
  return new T$00601(0, "Stream", function (tupledArg) {
    return f(tupledArg[0], tupledArg[1]);
  });
}

function run(scheduler$$1, sink$$1, _arg1) {
  const f$$1 = _arg1.fields[0];
  return f$$1([sink$$1, scheduler$$1]);
}

function map(f$$2, source) {
  return new T$00601(0, "Stream", function (tupledArg$$1) {
    return run(tupledArg$$1[1], (0, _sink.map)(f$$2, tupledArg$$1[0]), source);
  });
}

function filter(p, source$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$2) {
    return run(tupledArg$$2[1], (0, _sink.filter)(p, tupledArg$$2[0]), source$$1);
  });
}

function filterMap(f$$3, p$$1, source$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$3) {
    return run(tupledArg$$3[1], (0, _sink.filterMap)(f$$3, p$$1, tupledArg$$3[0]), source$$2);
  });
}

function skipRepeats(eq, source$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$4) {
    return run(tupledArg$$4[1], (0, _sink.skipRepeats)(eq, tupledArg$$4[0]), source$$3);
  });
}

function combineArray(sources) {
  return new T$00601(0, "Stream", function (tupledArg$$5) {
    return (0, _disposable.appendArray)((0, _Array.mapIndexed)(function mapping(i, sink$$11) {
      return run(tupledArg$$5[1], sink$$11, sources[i]);
    }, (0, _sink.combineArray)(sources.length, tupledArg$$5[0]), Array));
  });
}

function mergeArray(sources$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$6) {
    return (0, _disposable.appendArray)((0, _Array.mapIndexed)(function mapping$$1(i$$1, sink$$13) {
      return run(tupledArg$$6[1], sink$$13, sources$$2[i$$1]);
    }, (0, _sink.mergeArray)(sources$$2.length, tupledArg$$6[0]), Array));
  });
}

function empty() {
  return new T$00601(0, "Stream", function (tupledArg$$7) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$1) {
      if (_arg1$$1.tag === 1) {
        const t$$1 = _arg1$$1.fields[0][0];
        const err = _arg1$$1.fields[1];
        (0, _sink.Send$$$error)(t$$1, err, tupledArg$$7[0]);
        return null;
      } else {
        const t = _arg1$$1.fields[0][0];
        const s = _arg1$$1.fields[0][1];
        (0, _sink.Send$$$end$0027)(t, tupledArg$$7[0]);
        return null;
      }
    }), tupledArg$$7[1]);
  });
}

function never() {
  return new T$00601(0, "Stream", function (tupledArg$$8) {
    return _disposable.empty;
  });
}

function now(a) {
  return new T$00601(0, "Stream", function (tupledArg$$9) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$3) {
      if (_arg1$$3.tag === 1) {
        const t$$3 = _arg1$$3.fields[0][0];
        const err$$1 = _arg1$$3.fields[1];
        (0, _sink.Send$$$error)(t$$3, err$$1, tupledArg$$9[0]);
        return null;
      } else {
        const t$$2 = _arg1$$3.fields[0][0];
        const s$$1 = _arg1$$3.fields[0][1];
        (0, _sink.Send$$$event)(t$$2, a, tupledArg$$9[0]);
        (0, _sink.Send$$$end$0027)(t$$2, tupledArg$$9[0]);
        return null;
      }
    }), tupledArg$$9[1]);
  });
}

function at(delay$$2, a$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$10) {
    return (0, _scheduler.schedule)(delay$$2, null, (0, _task.return$0027)(function (_arg1$$4) {
      if (_arg1$$4.tag === 1) {
        const t$$5 = _arg1$$4.fields[0][0];
        const err$$2 = _arg1$$4.fields[1];
        (0, _sink.Send$$$error)(t$$5, err$$2, tupledArg$$10[0]);
        return null;
      } else {
        const t$$4 = _arg1$$4.fields[0][0];
        const s$$2 = _arg1$$4.fields[0][1];
        (0, _sink.Send$$$event)(t$$4, a$$1, tupledArg$$10[0]);
        (0, _sink.Send$$$end$0027)(t$$4, tupledArg$$10[0]);
        return null;
      }
    }), tupledArg$$10[1]);
  });
}

function periodic(period$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$11) {
    return (0, _scheduler.schedule)(null, period$$3, (0, _task.return$0027)(function (_arg1$$5) {
      if (_arg1$$5.tag === 1) {
        const t$$7 = _arg1$$5.fields[0][0];
        const err$$3 = _arg1$$5.fields[1];
        (0, _sink.Send$$$error)(t$$7, err$$3, tupledArg$$11[0]);
        return null;
      } else {
        const t$$6 = _arg1$$5.fields[0][0];
        const s$$3 = _arg1$$5.fields[0][1];
        (0, _sink.Send$$$event)(t$$6, null, tupledArg$$11[0]);
        return null;
      }
    }), tupledArg$$11[1]);
  });
}

function throwError(err$$4) {
  return new T$00601(0, "Stream", function (tupledArg$$12) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$6) {
      if (_arg1$$6.tag === 1) {
        const t$$9 = _arg1$$6.fields[0][0];
        const err$$5 = _arg1$$6.fields[1];
        throw err$$5;
        return null;
      } else {
        const t$$8 = _arg1$$6.fields[0][0];
        const s$$4 = _arg1$$6.fields[0][1];
        (0, _sink.Send$$$error)(t$$8, err$$4, tupledArg$$12[0]);
        return null;
      }
    }), tupledArg$$12[1]);
  });
}