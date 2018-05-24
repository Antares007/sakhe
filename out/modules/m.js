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
exports.tree = tree;
exports.drain = drain;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _a = require("./a");

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Stream {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.M.Stream",
      interfaces: ["FSharpUnion", "System.IEquatable"],
      cases: [["Stream", (0, _Util.Interface)("Most.IStream")]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

}

(0, _Symbol2.setType)("Sakhe.M.Stream", Stream);

class Time {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.M.Time",
      interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
      cases: [["Time", "number"]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

  CompareTo(other) {
    return (0, _Util.compareUnions)(this, other) | 0;
  }

}

(0, _Symbol2.setType)("Sakhe.M.Time", Time);

const TimeModule = exports.TimeModule = function (__exports) {
  const ms = __exports.ms = function (ms_1) {
    return new Time(0, ms_1);
  };

  return __exports;
}({});

function empty() {
  return new Stream(0, core.empty());
}

function now(a) {
  return new Stream(0, core.now(a));
}

function at(_arg1, a) {
  return new Stream(0, core.at(_arg1.data, a));
}

const see = exports.see = at(new Time(0, 1), at(new Time(0, 1), null));

function map(f, _arg1) {
  return new Stream(0, core.map(f, _arg1.data));
}

function switchLatest(_arg1) {
  return ($var2 => {
    var arg00_;
    return ($var1 => new Stream(0, core.switchLatest($var1)))((arg00_ = function (_arg1_1) {
      return _arg1_1.data;
    }, function (arg10_) {
      return core.map(arg00_, arg10_);
    })($var2));
  })(_arg1.data);
}

function combine(f, _arg2, _arg1) {
  return new Stream(0, core.combine(f, _arg2.data, _arg1.data));
}

function merge(_arg2, _arg1) {
  return new Stream(0, core.merge(_arg2.data, _arg1.data));
}

function constant(a, _arg1) {
  return new Stream(0, core.constant(a, _arg1.data));
}

function scan(f, state, _arg1) {
  return new Stream(0, core.scan(f, state, _arg1.data));
}

function tap(f, _arg1) {
  return new Stream(0, core.tap(f, _arg1.data));
}

function periodic(_arg1) {
  return new Stream(0, core.periodic(_arg1.data));
}

function skip(n, _arg1) {
  return new Stream(0, core.skip(n, _arg1.data));
}

function multicast(_arg1) {
  return new Stream(0, core.multicast(_arg1.data));
}

function tree(deltac, mpith) {
  return switchLatest(map(function (arg10_) {
    return (0, _a.tree)(deltac, arg10_);
  }, mpith));
}

const scheduler = scheduler_1.newDefaultScheduler();

function drain(_arg1) {
  return core.runEffects(_arg1.data, scheduler);
}