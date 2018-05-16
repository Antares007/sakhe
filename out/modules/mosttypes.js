"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisposableModule = exports.Core = undefined;

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _disposable = require("@most/disposable");

var disposable = _interopRequireWildcard(_disposable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const Core = exports.Core = function (__exports) {
  const require = __exports.require = core;

  return __exports;
}({});

const DisposableModule = exports.DisposableModule = function (__exports) {
  const require_1 = __exports.require = disposable;
  return __exports;
}({});