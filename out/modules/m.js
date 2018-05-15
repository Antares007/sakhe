"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _a = require("./a");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function tree(deltac, mpith) {
  return core.switchLatest(core.map(function (pith) {
    return (0, _a.tree)(deltac, pith);
  }, mpith));
}