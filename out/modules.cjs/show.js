;require._modules["/show.js"] = (function() { var __filename = "/show.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /show.js  == */ var __module__ = function() { 
 import { schedule } from "./s/scheduler";
import { scheduler as scheduler$$2 } from "./s/default";
import { toConsole, printf } from "./fable-core.2.0.0-beta-004/String";
import { return$0027 as return$00240027 } from "./s/disposable";
import { return$0027 as return$00240027$$1 } from "./s/task";
import { DelayModule$$$return$0027 as DelayModule$0024$0024$0024return$00240027 } from "./s/time";
import { return$0027 as return$00240027$$2 } from "./s/sink";
import { run, mergeArray, now, map, periodic } from "./s/stream";
export function sch(delay$$1) {
  return function (period) {
    return function (task$$1) {
      return function (scheduler$$1) {
        return schedule(delay$$1, period, task$$1, scheduler$$1);
      };
    };
  };
}
export const scheduler = scheduler$$2();
export function task(i) {
  return return$00240027$$1(function (_arg1) {
    if (_arg1.tag === 1) {
      const t$$1 = _arg1.fields[0][0];
      const err = _arg1.fields[1];
      toConsole(printf("task %d exn at: %A with: %A"))(i)(t$$1)(err);
      return return$00240027(function () {
        toConsole(printf("task %d disposed Exn"))(i);
      });
    } else {
      const t = _arg1.fields[0][0];
      const s = _arg1.fields[0][1];
      toConsole(printf("task %d run at: %A"))(i)(t);
      return return$00240027(function () {
        toConsole(printf("task %d disposed Run"))(i);
      });
    }
  });
}
export function delay(x) {
  return DelayModule$0024$0024$0024return$00240027(x);
}
export const see = run(scheduler, return$00240027$$2(function (_arg1$$1) {
  switch (_arg1$$1.tag) {
    case 1:
      {
        const t$$3 = _arg1$$1.fields[0];
        toConsole(printf("End at %A"))(t$$3);
        break;
      }

    case 2:
      {
        const t$$4 = _arg1$$1.fields[0];
        const err$$1 = _arg1$$1.fields[1];
        toConsole(printf("Error %A at %A"))(err$$1)(t$$4);
        break;
      }

    default:
      {
        const t$$2 = _arg1$$1.fields[0];
        const e = _arg1$$1.fields[1] | 0;
        toConsole(printf("Event %A at %A"))(e)(t$$2);
      }
  }
}), mergeArray([map(function f$$3() {
  return 10000;
}, periodic(delay(10000))), now(42), map(function f$$4() {
  return 1000;
}, periodic(delay(1000))), map(function f$$5() {
  return 2000;
}, periodic(delay(2000))), map(function f$$6() {
  return 3000;
}, periodic(delay(3000)))]));
window.d = see; 
 }; /* ==  End source for module /show.js  == */ return module; }());;