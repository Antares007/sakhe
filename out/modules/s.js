"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S = exports.TimeModule = undefined;

var _core = require("@most/core");

var core_1 = _interopRequireWildcard(_core);

var _scheduler = require("@most/scheduler");

var scheduler_2 = _interopRequireWildcard(_scheduler);

var _disposable = require("@most/disposable");

var disposable_1 = _interopRequireWildcard(_disposable);

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _a = require("./a");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const TimeModule = exports.TimeModule = function (__exports) {
  const ms = __exports.ms = function (ms_1) {
    return ms_1;
  };

  return __exports;
}({});

const S = exports.S = function (__exports) {
  const core = core_1;
  const scheduler = scheduler_2;
  const disposable = disposable_1;

  const empty = __exports.empty = function () {
    return core.empty();
  };

  const now = __exports.now = function (a) {
    return core.now(a);
  };

  const at = __exports.at = function (_arg1, a) {
    return core.at(_arg1, a);
  };

  const map = __exports.map = function (f, _arg1) {
    return core.map(f, _arg1);
  };

  const switchLatest = __exports.switchLatest = function (_arg1) {
    return ($var1 => function (arg0) {
      return arg0;
    }(core.switchLatest.bind(core)($var1)))(core.map(function (_arg1_1) {
      return _arg1_1;
    }, _arg1));
  };

  const combine = __exports.combine = function (f, _arg2, _arg1) {
    return core.combine(f, _arg2, _arg1);
  };

  const merge = __exports.merge = function (_arg2, _arg1) {
    return core.merge(_arg2, _arg1);
  };

  const konst = __exports.konst = function (a, _arg1) {
    return core.constant(a, _arg1);
  };

  const constant = __exports.constant = function () {
    return (0, _CurriedLambda2.default)(konst);
  };

  const scan = __exports.scan = function (f, state, _arg1) {
    return core.scan(f, state, _arg1);
  };

  const tap = __exports.tap = function (f, _arg1) {
    return core.tap(f, _arg1);
  };

  const periodic = __exports.periodic = function (_arg1) {
    return core.periodic(_arg1);
  };

  const skip = __exports.skip = function (n, _arg1) {
    return core.skip(n, _arg1);
  };

  const multicast = __exports.multicast = function (_arg1) {
    return core.multicast(_arg1);
  };

  const startWith = __exports.startWith = function (a, _arg1) {
    return core.startWith(a, _arg1);
  };

  const sample = __exports.sample = function (_arg2, _arg1) {
    return core.sample(_arg1, _arg2);
  };

  const tree = __exports.tree = function (deltac, mpith) {
    return switchLatest(map(function (arg10_) {
      return _a.A.tree(deltac, arg10_);
    }, mpith));
  };

  const defScheduler = scheduler.newDefaultScheduler();

  const drain = __exports.drain = function (_arg1) {
    return core.runEffects(_arg1, defScheduler);
  };

  const animationFrame = __exports.animationFrame = core.newStream(function (sink, scheduler_1) {
    let handle = 0;

    const step = function (t) {
      console.timeStamp("step");
      sink.event(scheduler_1.currentTime(), t);
      handle = window.requestAnimationFrame(step);
    };

    handle = window.requestAnimationFrame(step);

    const dispose = function (_arg1) {
      window.cancelAnimationFrame(handle);
    };

    return disposable.disposeWith(dispose, null);
  });
  return __exports;
}({});