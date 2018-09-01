"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsDisposable$$$create = JsDisposable$$$create;

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const S$$$core = core;

function JsDisposable$$$create(f) {
  let disposed = false;
  return {
    dispose() {
      if (!disposed) {
        disposed = true;
        f();
      }
    }

  };
}