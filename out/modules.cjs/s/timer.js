;require._modules["/s\timer.js"] = (function() { var __filename = "/s\timer.js"; var __dirname = "/s"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /s\timer.js  == */ var __module__ = function() { 
 import { DelayModule$$$value as DelayModule$0024$0024$0024value } from "./time";
import { run, Cancelable$$$extend as Cancelable$0024$0024$0024extend } from "./task";
import { append, return$0027 as return$00240027 } from "./disposable";
export function return$0027(set, clear) {
  return function (task) {
    return function (delay) {
      const delay$$1 = DelayModule$0024$0024$0024value(delay) | 0;
      const patternInput = Cancelable$0024$0024$0024extend(task);

      if (0 === delay$$1) {
        Promise.resolve(patternInput[0]).then(run);
        return patternInput[1];
      } else {
        const handle = set(function () {
          run(patternInput[0]);
        }, delay$$1);
        return append(return$00240027(function () {
          clear(handle);
        }), patternInput[1]);
      }
    };
  };
}
export function setTimer(task$$2, time, _arg1) {
  const set$$1 = _arg1;
  return set$$1(task$$2)(time);
} 
 }; /* ==  End source for module /s\timer.js  == */ return module; }());;