"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is_ = exports.as_ = undefined;

var _core = require("@most/core");

var core$$1 = _interopRequireWildcard(_core);

var _disposable = require("@most/disposable");

var disposable = _interopRequireWildcard(_disposable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("hello");
console.log("end!");
console.log("aaaaaaa");
const core = core$$1;
const dispose = disposable;
const as_ = exports.as_ = core.now("a");
const is_ = exports.is_ = core.now(3);
core.zip(function (a, b) {
  return [a, b];
}, as_, is_);