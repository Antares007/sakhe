;require._modules["/s\clock.js"] = (function() { var __filename = "/s\clock.js"; var __dirname = "/s"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /s\clock.js  == */ var __module__ = function() { 
 export function return$0027(f) {
  return f;
}
export function now(_arg1) {
  const f$$1 = _arg1;
  return f$$1();
} 
 }; /* ==  End source for module /s\clock.js  == */ return module; }());;