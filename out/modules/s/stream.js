"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.fromTask = fromTask;
exports.fromTask2 = fromTask2;
exports.map = map;
exports.filter = filter;
exports.filterMap = filterMap;
exports.skipRepeats = skipRepeats;
exports.combineArray = combineArray;
exports.mergeArray = mergeArray;
exports.empty = empty;
exports.empty2 = empty2;
exports.startWith = startWith;
exports.never = never;
exports.now = now;
exports.at = at;
exports.periodic = periodic;
exports.throwError = throwError;
exports.T$00601 = void 0;

var _Types = require("../fable-core.2.0.0-beta-004/Types");

var _sink = require("./sink");

var _Util = require("../fable-core.2.0.0-beta-004/Util");

var _task = require("./task");

var _scheduler = require("./scheduler");

var _Array = require("../fable-core.2.0.0-beta-004/Array");

var _disposable = require("./disposable");

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

function fromTask(delay, period, t) {
  return new T$00601(0, "Stream", function (tupledArg$$1) {
    const s = function s(t$$1, _arg1$$1) {
      switch (_arg1$$1.tag) {
        case 1:
          {
            (0, _sink.unbox)(tupledArg$$1[0])(new _sink.On$00601(1, "End", t$$1));
            break;
          }

        case 2:
          {
            const err = _arg1$$1.fields[0];
            (0, _sink.unbox)(tupledArg$$1[0])(new _sink.On$00601(2, "Error", t$$1, err));
            break;
          }

        default:
          {
            const a = _arg1$$1.fields[0];
            (0, _sink.unbox)(tupledArg$$1[0])(new _sink.On$00601(0, "Event", t$$1, a));
          }
      }
    };

    return (0, _scheduler.schedule)(delay, period, (0, _task.map)(function f$$3(tupledArg$$2) {
      return [(0, _Util.partialApply)(1, s, [tupledArg$$2[0]]), tupledArg$$2[1]];
    }, (0, _task.return$0027)(t)), tupledArg$$1[1]);
  });
}

function fromTask2(delay$$1, period$$1, f$$4) {
  return new T$00601(0, "Stream", function (tupledArg$$3) {
    return (0, _scheduler.schedule)(delay$$1, period$$1, (0, _task.return$0027)((0, _Util.partialApply)(1, f$$4, [tupledArg$$3[0], tupledArg$$3[1]])), tupledArg$$3[1]);
  });
}

function map(f$$6, source) {
  return new T$00601(0, "Stream", function (tupledArg$$4) {
    return run(tupledArg$$4[1], (0, _sink.map)(f$$6, tupledArg$$4[0]), source);
  });
}

function filter(p, source$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$5) {
    return run(tupledArg$$5[1], (0, _sink.filter)(p, tupledArg$$5[0]), source$$1);
  });
}

function filterMap(f$$7, p$$1, source$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$6) {
    return run(tupledArg$$6[1], (0, _sink.filterMap)(f$$7, p$$1, tupledArg$$6[0]), source$$2);
  });
}

function skipRepeats(eq, source$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$7) {
    return run(tupledArg$$7[1], (0, _sink.skipRepeats)(eq, tupledArg$$7[0]), source$$3);
  });
}

function combineArray(sources) {
  return new T$00601(0, "Stream", function (tupledArg$$8) {
    return (0, _disposable.appendArray)((0, _Array.mapIndexed)(function mapping(i, sink$$13) {
      return run(tupledArg$$8[1], sink$$13, sources[i]);
    }, (0, _sink.combineArray)(sources.length, tupledArg$$8[0]), Array));
  });
}

function mergeArray(sources$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$9) {
    return (0, _disposable.appendArray)((0, _Array.mapIndexed)(function mapping$$1(i$$1, sink$$15) {
      return run(tupledArg$$9[1], sink$$15, sources$$2[i$$1]);
    }, (0, _sink.mergeArray)(sources$$2.length, tupledArg$$9[0]), Array));
  });
}

function empty() {
  return new T$00601(0, "Stream", function (tupledArg$$10) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$2) {
      if (_arg1$$2.tag === 1) {
        const t$$3 = _arg1$$2.fields[0][0];
        const err$$1 = _arg1$$2.fields[1];
        (0, _sink.Send$$$error)(t$$3, err$$1, tupledArg$$10[0]);
        return null;
      } else {
        const t$$2 = _arg1$$2.fields[0][0];
        const s$$1 = _arg1$$2.fields[0][1];
        (0, _sink.Send$$$end$0027)(t$$2, tupledArg$$10[0]);
        return null;
      }
    }), tupledArg$$10[1]);
  });
}

function empty2() {
  return fromTask2(null, null, function (s$$2, _arg1$$3, _arg1$$4) {
    if (_arg1$$4.tag === 1) {
      const t$$5 = _arg1$$4.fields[0][0];
      const err$$2 = _arg1$$4.fields[1];
      (0, _sink.Send$$$error)(t$$5, err$$2, s$$2);
      return null;
    } else {
      const t$$4 = _arg1$$4.fields[0][0];
      const cs$$1 = _arg1$$4.fields[0][1];
      (0, _sink.Send$$$end$0027)(t$$4, s$$2);
      return null;
    }
  });
}

function startWith(a$$1, source$$4) {
  return fromTask2(null, null, function (s$$3, scheduler$$13, _arg1$$5) {
    if (_arg1$$5.tag === 1) {
      const t$$7 = _arg1$$5.fields[0][0];
      const err$$3 = _arg1$$5.fields[1];
      (0, _sink.Send$$$error)(t$$7, err$$3, s$$3);
      return null;
    } else {
      const t$$6 = _arg1$$5.fields[0][0];
      const cs$$2 = _arg1$$5.fields[0][1];
      (0, _sink.Send$$$event)(t$$6, a$$1, s$$3);
      return run(scheduler$$13, s$$3, source$$4);
    }
  });
}

function never() {
  return new T$00601(0, "Stream", function (tupledArg$$11) {
    return _disposable.empty;
  });
}

function now(a$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$12) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$7) {
      if (_arg1$$7.tag === 1) {
        const t$$9 = _arg1$$7.fields[0][0];
        const err$$4 = _arg1$$7.fields[1];
        (0, _sink.Send$$$error)(t$$9, err$$4, tupledArg$$12[0]);
        return null;
      } else {
        const t$$8 = _arg1$$7.fields[0][0];
        const s$$4 = _arg1$$7.fields[0][1];
        (0, _sink.Send$$$event)(t$$8, a$$2, tupledArg$$12[0]);
        (0, _sink.Send$$$end$0027)(t$$8, tupledArg$$12[0]);
        return null;
      }
    }), tupledArg$$12[1]);
  });
}

function at(delay$$6, a$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$13) {
    return (0, _scheduler.schedule)(delay$$6, null, (0, _task.return$0027)(function (_arg1$$8) {
      if (_arg1$$8.tag === 1) {
        const t$$11 = _arg1$$8.fields[0][0];
        const err$$5 = _arg1$$8.fields[1];
        (0, _sink.Send$$$error)(t$$11, err$$5, tupledArg$$13[0]);
        return null;
      } else {
        const t$$10 = _arg1$$8.fields[0][0];
        const s$$5 = _arg1$$8.fields[0][1];
        (0, _sink.Send$$$event)(t$$10, a$$3, tupledArg$$13[0]);
        (0, _sink.Send$$$end$0027)(t$$10, tupledArg$$13[0]);
        return null;
      }
    }), tupledArg$$13[1]);
  });
}

function periodic(period$$7) {
  return new T$00601(0, "Stream", function (tupledArg$$14) {
    return (0, _scheduler.schedule)(null, period$$7, (0, _task.return$0027)(function (_arg1$$9) {
      if (_arg1$$9.tag === 1) {
        const t$$13 = _arg1$$9.fields[0][0];
        const err$$6 = _arg1$$9.fields[1];
        (0, _sink.Send$$$error)(t$$13, err$$6, tupledArg$$14[0]);
        return null;
      } else {
        const t$$12 = _arg1$$9.fields[0][0];
        const s$$6 = _arg1$$9.fields[0][1];
        (0, _sink.Send$$$event)(t$$12, null, tupledArg$$14[0]);
        return null;
      }
    }), tupledArg$$14[1]);
  });
}

function throwError(err$$7) {
  return new T$00601(0, "Stream", function (tupledArg$$15) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$10) {
      if (_arg1$$10.tag === 1) {
        const t$$15 = _arg1$$10.fields[0][0];
        const err$$8 = _arg1$$10.fields[1];
        throw err$$8;
        return null;
      } else {
        const t$$14 = _arg1$$10.fields[0][0];
        const s$$7 = _arg1$$10.fields[0][1];
        (0, _sink.Send$$$error)(t$$14, err$$7, tupledArg$$15[0]);
        return null;
      }
    }), tupledArg$$15[1]);
  });
}