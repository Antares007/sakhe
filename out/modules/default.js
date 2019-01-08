"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sink$00601$reflection = Sink$00601$reflection;
exports.timer = timer;
exports.tf = tf;
exports.subscribe = subscribe;
exports.scheduler = exports.Sink$00601 = void 0;

var _Types = require("./fable-library.2.1.8/Types");

var _Reflection = require("./fable-library.2.1.8/Reflection");

var _disposable = require("./disposable");

var _scheduler = require("./scheduler");

var _stream = require("./stream");

const Sink$00601 = (0, _Types.declare)(function Sakhe_Default_Sink(arg1, arg2, arg3) {
  this.next = arg1;
  this.complete = arg2;
  this.error = arg3;
}, _Types.Record);
exports.Sink$00601 = Sink$00601;

function Sink$00601$reflection($gen$$1) {
  return (0, _Reflection.record)("Sakhe.Default.Sink`1", [$gen$$1], Sink$00601, () => [["next", (0, _Reflection.lambda)($gen$$1, _Reflection.unit)], ["complete", (0, _Reflection.lambda)(_Reflection.unit, _Reflection.unit)], ["error", (0, _Reflection.lambda)((0, _Reflection.type)("System.Exception"), _Reflection.unit)]]);
}

function timer(delay, task) {
  if (delay <= 0) {
    let canceled = false;
    Promise.resolve(task).then(function (t) {
      if (!canceled) {
        t();
      }
    });
    return (0, _disposable.return$0027)(function () {
      canceled = true;
    });
  } else {
    const token = setTimeout(task, ~~delay);
    return (0, _disposable.return$0027)(function () {
      clearTimeout(token);
    });
  }
}

function tf() {
  return Math.floor(performance.now());
}

const scheduler = (0, _scheduler.run)(function () {
  return tf();
}, timer);
exports.scheduler = scheduler;

function subscribe(sink, s) {
  return (0, _stream.run)(scheduler, function (_arg1) {
    switch (_arg1.tag) {
      case 1:
        {
          const t$$2 = _arg1.fields[0];
          sink.complete();
          break;
        }

      case 2:
        {
          const t$$3 = _arg1.fields[0];
          const err = _arg1.fields[1];
          sink.error(err);
          break;
        }

      default:
        {
          const t$$1 = _arg1.fields[0];
          const a = _arg1.fields[1];
          sink.next(a);
        }
    }
  }, s);
}