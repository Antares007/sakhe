"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.see = exports.TimeModule = undefined;
exports.empty = empty;
exports.now = now;
exports.at = at;
exports.map = map;
exports.switchLatest = switchLatest;
exports.combine = combine;
exports.merge = merge;
exports.constant = constant;
exports.scan = scan;
exports.tap = tap;
exports.periodic = periodic;
exports.skip = skip;
exports.multicast = multicast;
exports.startWith = startWith;
exports.drain = drain;

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const TimeModule = exports.TimeModule = function (__exports) {
  const ms = __exports.ms = function (ms_1) {
    return ms_1;
  };

  return __exports;
}({});

function empty() {
  return core.empty();
}

function now(a) {
  return core.now(a);
}

function at(_arg1, a) {
  return core.at(_arg1, a);
}

const see = exports.see = at(1, at(1, null));

function map(f, _arg1) {
  return core.map(f, _arg1);
}

function switchLatest(_arg1) {
  return ($var2 => {
    var arg00_;
    return ($var1 => core.switchLatest($var1))((arg00_ = function (_arg1_1) {
      return _arg1_1;
    }, function (arg10_) {
      return core.map(arg00_, arg10_);
    })($var2));
  })(_arg1);
}

function combine(f, _arg2, _arg1) {
  return core.combine(f, _arg2, _arg1);
}

function merge(_arg2, _arg1) {
  return core.merge(_arg2, _arg1);
}

function constant(a, _arg1) {
  return core.constant(a, _arg1);
}

function scan(f, state, _arg1) {
  return core.scan(f, state, _arg1);
}

function tap(f, _arg1) {
  return core.tap(f, _arg1);
}

function periodic(_arg1) {
  return core.periodic(_arg1);
}

function skip(n, _arg1) {
  return core.skip(n, _arg1);
}

function multicast(_arg1) {
  return core.multicast(_arg1);
}

function startWith(a, _arg1) {
  return core.startWith(a, _arg1);
}

const scheduler = scheduler_1.newDefaultScheduler();

function drain(_arg1) {
  return core.runEffects(_arg1, scheduler);
}