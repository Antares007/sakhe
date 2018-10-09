"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler$$$delay = Scheduler$$$delay;
exports.Scheduler$$$now = Scheduler$$$now;
exports.Scheduler$$$Of = Scheduler$$$Of;
exports.Of = Of;
exports.merge = merge;
exports.unit = exports.O$00601 = exports.T$00601 = void 0;

var _Types = require("./fable-core.2.0.3/Types");

var _time = require("./time");

var _pith = require("./pith");

var _scheduler = require("./scheduler");

var _abo = require("./abo");

var _disposable = require("./disposable");

var _o = require("./o");

const T$00601 = (0, _Types.declare)(function T$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00601 = T$00601;
const O$00601 = (0, _Types.declare)(function O$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.O$00601 = O$00601;

function Scheduler$$$delay(d, f) {
  const tupledArg = [(0, _time.DelayModule$$$return$0027)(d), (0, _scheduler.return$0027)(function (i) {
    return (0, _pith.return$0027)(function (o) {
      f(i, o);
    });
  })];
  return new _scheduler.O$00601(1, "Delay", tupledArg[0], tupledArg[1]);
}

function Scheduler$$$now(f$$3) {
  return new _scheduler.O$00601(0, "Now", (0, _scheduler.return$0027)(function (i$$1) {
    return (0, _pith.return$0027)(function (o$$1) {
      f$$3(i$$1, o$$1);
    });
  }));
}

function Scheduler$$$Of(f$$6) {
  return (0, _scheduler.return$0027)(function (i$$2) {
    return (0, _pith.return$0027)(function (o$$2) {
      f$$6(i$$2, o$$2);
    });
  });
}

function Of(f$$9) {
  return new T$00601(0, "Stream", (0, _abo.return$0027)(function (run) {
    return (0, _pith.return$0027)(function (sinkO) {
      return f$$9(run, sinkO);
    });
  }));
}

const unit = Of(function (run$$1, s) {
  return run$$1(Scheduler$$$Of(function (_arg2, o$$3) {
    o$$3(Scheduler$$$delay(0, function (t, _arg1) {
      try {
        s(new O$00601(0, "Event", t, null));
        s(new O$00601(1, "End", t));
      } catch (err) {
        s(new O$00601(2, "Error", t, err));
      }
    }));
  }));
});
exports.unit = unit;

function merge(_arg2$$1, _arg1$$1) {
  const a$$2 = _arg2$$1.fields[0];
  const b$$2 = _arg1$$1.fields[0];
  return Of(function (run$$2, s$$1) {
    let disposable = _disposable.empty;
    let endCount = 0;
    const so = (0, _o.proxy)(function (_arg3) {
      switch (_arg3.tag) {
        case 2:
          {
            const b$$3 = _arg3.fields[1];
            const a$$3 = _arg3.fields[0];
            disposable.Dispose();
            s$$1(new O$00601(2, "Error", a$$3, b$$3));
            break;
          }

        case 0:
          {
            const t$$2 = _arg3.fields[0];
            const a$$4 = _arg3.fields[1];
            s$$1(new O$00601(0, "Event", t$$2, a$$4));
            break;
          }

        default:
          {
            const t$$1 = _arg3.fields[0];
            endCount = endCount + 1;

            if (endCount === 2) {
              s$$1(new O$00601(1, "End", t$$1));
            }
          }
      }
    });
    const da = (0, _pith.run)(so, (0, _abo.run)(run$$2, a$$2));
    const db = (0, _pith.run)(so, (0, _abo.run)(run$$2, b$$2));
    disposable = (0, _disposable.append)(da, db);
    return disposable;
  });
}