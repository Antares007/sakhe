"use strict";

var _show = require("./show.old");

var _Util = require("./fable-core/Util");

console.log("hello");

_show.Dom.run();

console.log((0, _Util.equals)("1", "1"));
console.log((0, _Util.equals)("1", "2"));
console.log((0, _Util.equals)("1", null));
console.log((0, _Util.equals)(null, null));