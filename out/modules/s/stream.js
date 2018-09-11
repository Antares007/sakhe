"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.run = run;
exports.withLocalTime = withLocalTime;
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

var _scheduler = require("./scheduler");

var _time = require("./time");

var _disposable = require("./disposable");

var _sink = require("./sink");

var _Util = require("../fable-core.2.0.0-beta-004/Util");

var _task = require("./task");

var _Array = require("../fable-core.2.0.0-beta-004/Array");

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

function withLocalTime(t, upStream) {
  return new T$00601(0, "Stream", function (tupledArg$$1) {
    const downClock = (0, _scheduler.getClock)(tupledArg$$1[1]);
    const upprClock = (0, _time.ClockModule$$$localClock)(downClock);
    return _disposable.empty;
  });
}

function fromTask(delay, period, t$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$2) {
    const s = function s(t$$2, _arg1$$1) {
      switch (_arg1$$1.tag) {
        case 1:
          {
            (0, _sink.unbox)(tupledArg$$2[0])(new _sink.On$00601(1, "End", t$$2));
            break;
          }

        case 2:
          {
            const err = _arg1$$1.fields[0];
            (0, _sink.unbox)(tupledArg$$2[0])(new _sink.On$00601(2, "Error", t$$2, err));
            break;
          }

        default:
          {
            const a = _arg1$$1.fields[0];
            (0, _sink.unbox)(tupledArg$$2[0])(new _sink.On$00601(0, "Event", t$$2, a));
          }
      }
    };

    return (0, _scheduler.schedule)(delay, period, (0, _task.map)(function f$$3(tupledArg$$3) {
      return [(0, _Util.partialApply)(1, s, [tupledArg$$3[0]]), tupledArg$$3[1]];
    }, (0, _task.return$0027)(t$$1)), tupledArg$$2[1]);
  });
}

function fromTask2(delay$$1, period$$1, f$$4) {
  return new T$00601(0, "Stream", function (tupledArg$$4) {
    return (0, _scheduler.schedule)(delay$$1, period$$1, (0, _task.return$0027)((0, _Util.partialApply)(1, f$$4, [tupledArg$$4[0], tupledArg$$4[1]])), tupledArg$$4[1]);
  });
}

function map(f$$6, source) {
  return new T$00601(0, "Stream", function (tupledArg$$5) {
    return run(tupledArg$$5[1], (0, _sink.map)(f$$6, tupledArg$$5[0]), source);
  });
}

function filter(p, source$$1) {
  return new T$00601(0, "Stream", function (tupledArg$$6) {
    return run(tupledArg$$6[1], (0, _sink.filter)(p, tupledArg$$6[0]), source$$1);
  });
}

function filterMap(f$$7, p$$1, source$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$7) {
    return run(tupledArg$$7[1], (0, _sink.filterMap)(f$$7, p$$1, tupledArg$$7[0]), source$$2);
  });
}

function skipRepeats(eq, source$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$8) {
    return run(tupledArg$$8[1], (0, _sink.skipRepeats)(eq, tupledArg$$8[0]), source$$3);
  });
}

function combineArray(sources) {
  return new T$00601(0, "Stream", function (tupledArg$$9) {
    return (0, _disposable.appendArray)((0, _Array.mapIndexed)(function mapping(i, sink$$13) {
      return run(tupledArg$$9[1], sink$$13, sources[i]);
    }, (0, _sink.combineArray)(sources.length, tupledArg$$9[0]), Array));
  });
}

function mergeArray(sources$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$10) {
    return (0, _disposable.appendArray)((0, _Array.mapIndexed)(function mapping$$1(i$$1, sink$$15) {
      return run(tupledArg$$10[1], sink$$15, sources$$2[i$$1]);
    }, (0, _sink.mergeArray)(sources$$2.length, tupledArg$$10[0]), Array));
  });
}

function empty() {
  return new T$00601(0, "Stream", function (tupledArg$$11) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$2) {
      if (_arg1$$2.tag === 1) {
        const t$$4 = _arg1$$2.fields[0][0];
        const err$$1 = _arg1$$2.fields[1];
        (0, _sink.Send$$$error)(t$$4, err$$1, tupledArg$$11[0]);
        return null;
      } else {
        const t$$3 = _arg1$$2.fields[0][0];
        const s$$1 = _arg1$$2.fields[0][1];
        (0, _sink.Send$$$end$0027)(t$$3, tupledArg$$11[0]);
        return null;
      }
    }), tupledArg$$11[1]);
  });
}

function empty2() {
  return fromTask2(null, null, function (s$$2, _arg1$$3, _arg1$$4) {
    if (_arg1$$4.tag === 1) {
      const t$$6 = _arg1$$4.fields[0][0];
      const err$$2 = _arg1$$4.fields[1];
      (0, _sink.Send$$$error)(t$$6, err$$2, s$$2);
      return null;
    } else {
      const t$$5 = _arg1$$4.fields[0][0];
      const cs$$1 = _arg1$$4.fields[0][1];
      (0, _sink.Send$$$end$0027)(t$$5, s$$2);
      return null;
    }
  });
}

function startWith(a$$1, source$$4) {
  return fromTask2(null, null, function (s$$3, scheduler$$13, _arg1$$5) {
    if (_arg1$$5.tag === 1) {
      const t$$8 = _arg1$$5.fields[0][0];
      const err$$3 = _arg1$$5.fields[1];
      (0, _sink.Send$$$error)(t$$8, err$$3, s$$3);
      return null;
    } else {
      const t$$7 = _arg1$$5.fields[0][0];
      const cs$$2 = _arg1$$5.fields[0][1];
      (0, _sink.Send$$$event)(t$$7, a$$1, s$$3);
      return run(scheduler$$13, s$$3, source$$4);
    }
  });
}

function never() {
  return new T$00601(0, "Stream", function (tupledArg$$12) {
    return _disposable.empty;
  });
}

function now(a$$2) {
  return new T$00601(0, "Stream", function (tupledArg$$13) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$7) {
      if (_arg1$$7.tag === 1) {
        const t$$10 = _arg1$$7.fields[0][0];
        const err$$4 = _arg1$$7.fields[1];
        (0, _sink.Send$$$error)(t$$10, err$$4, tupledArg$$13[0]);
        return null;
      } else {
        const t$$9 = _arg1$$7.fields[0][0];
        const s$$4 = _arg1$$7.fields[0][1];
        (0, _sink.Send$$$event)(t$$9, a$$2, tupledArg$$13[0]);
        (0, _sink.Send$$$end$0027)(t$$9, tupledArg$$13[0]);
        return null;
      }
    }), tupledArg$$13[1]);
  });
}

function at(delay$$6, a$$3) {
  return new T$00601(0, "Stream", function (tupledArg$$14) {
    return (0, _scheduler.schedule)(delay$$6, null, (0, _task.return$0027)(function (_arg1$$8) {
      if (_arg1$$8.tag === 1) {
        const t$$12 = _arg1$$8.fields[0][0];
        const err$$5 = _arg1$$8.fields[1];
        (0, _sink.Send$$$error)(t$$12, err$$5, tupledArg$$14[0]);
        return null;
      } else {
        const t$$11 = _arg1$$8.fields[0][0];
        const s$$5 = _arg1$$8.fields[0][1];
        (0, _sink.Send$$$event)(t$$11, a$$3, tupledArg$$14[0]);
        (0, _sink.Send$$$end$0027)(t$$11, tupledArg$$14[0]);
        return null;
      }
    }), tupledArg$$14[1]);
  });
}

function periodic(period$$7) {
  return new T$00601(0, "Stream", function (tupledArg$$15) {
    return (0, _scheduler.schedule)(null, period$$7, (0, _task.return$0027)(function (_arg1$$9) {
      if (_arg1$$9.tag === 1) {
        const t$$14 = _arg1$$9.fields[0][0];
        const err$$6 = _arg1$$9.fields[1];
        (0, _sink.Send$$$error)(t$$14, err$$6, tupledArg$$15[0]);
        return null;
      } else {
        const t$$13 = _arg1$$9.fields[0][0];
        const s$$6 = _arg1$$9.fields[0][1];
        (0, _sink.Send$$$event)(t$$13, null, tupledArg$$15[0]);
        return null;
      }
    }), tupledArg$$15[1]);
  });
}

function throwError(err$$7) {
  return new T$00601(0, "Stream", function (tupledArg$$16) {
    return (0, _scheduler.schedule)(null, null, (0, _task.return$0027)(function (_arg1$$10) {
      if (_arg1$$10.tag === 1) {
        const t$$16 = _arg1$$10.fields[0][0];
        const err$$8 = _arg1$$10.fields[1];
        throw err$$8;
        return null;
      } else {
        const t$$15 = _arg1$$10.fields[0][0];
        const s$$7 = _arg1$$10.fields[0][1];
        (0, _sink.Send$$$error)(t$$15, err$$7, tupledArg$$16[0]);
        return null;
      }
    }), tupledArg$$16[1]);
  });
}