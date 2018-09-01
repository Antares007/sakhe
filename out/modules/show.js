"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Play$$$S = undefined;
exports.IExportsCurried$002Edrain$$Z57BFC98E = IExportsCurried$002Edrain$$Z57BFC98E;

var _scheduler = require("@most/scheduler");

var scheduler = _interopRequireWildcard(_scheduler);

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Exts$$$scheduler = scheduler;
const Exts$$$defaultScheduler = Exts$$$scheduler.newDefaultScheduler();

function IExportsCurried$002Edrain$$Z57BFC98E(xs, s) {
  return xs.runEffects(s, Exts$$$defaultScheduler);
}

const Play$$$S = exports.Play$$$S = core;
IExportsCurried$002Edrain$$Z57BFC98E(Play$$$S, Play$$$S.takeWhile(function (y$$2) {
  return 0 < y$$2;
}, Play$$$S.tap(function (arg00$$5) {
  console.log(arg00$$5);
}, Play$$$S.map(function (y$$1) {
  return 10 - y$$1;
}, Play$$$S.scan(function (x, y) {
  return x + y;
}, 0, Play$$$S.constant(1, Play$$$S.periodic(1000)))))));