;require._modules["/s\disposable.js"] = (function() { var __filename = "/s\disposable.js"; var __dirname = "/s"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /s\disposable.js  == */ var __module__ = function() { 
 export function empty() {}
export function return$0027(f) {
  let disposed = false;
  return function () {
    if (!disposed) {
      disposed = true;
      f();
    }
  };
}
export function append(_arg2, _arg1) {
  const l = _arg2;
  const r = _arg1;
  return return$0027(function () {
    l();
    r();
  });
}
export function appendArray(disposables) {
  return return$0027(function () {
    const to$0027 = disposables.length - 1 | 0;

    for (let i = 0; i <= to$0027; i++) {
      const f$$2 = disposables[i];
      f$$2();
    }
  });
} 
 }; /* ==  End source for module /s\disposable.js  == */ return module; }());;