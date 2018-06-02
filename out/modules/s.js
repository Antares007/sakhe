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

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Seq = require("./fable-core/Seq");

var _Observable = require("./fable-core/Observable");

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

  const Primitives = __exports.Primitives = function (__exports) {
    const throwError = __exports.throwError = function (err) {
      return core.throwError(err);
    };

    const defer = __exports.defer = function (f) {
      return ($var1 => function (arg0) {
        return arg0;
      }(core.newStream.bind(core)($var1)))(function (sink, scheduler_1) {
        const patternInput = f();
        return core.run(sink, scheduler_1, patternInput);
      });
    };

    const empty = __exports.empty = function () {
      return core.empty();
    };

    const never = __exports.never = function () {
      return core.never();
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
      return ($var2 => function (arg0) {
        return arg0;
      }(core.switchLatest.bind(core)($var2)))(core.map(function (_arg1_1) {
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

    const takeWhile = __exports.takeWhile = function (p, _arg1) {
      return core.takeWhile(p, _arg1);
    };

    const continueWith = __exports.continueWith = function (f, _arg1) {
      return core.continueWith(function () {
        const patternInput = f();
        return patternInput;
      }, _arg1);
    };

    const recoverWith = __exports.recoverWith = function (f, _arg1) {
      return core.recoverWith(function (err) {
        const patternInput = f(err);
        return patternInput;
      }, _arg1);
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

    const delay = __exports.delay = function (_arg2, _arg1) {
      return core.delay(_arg2, _arg1);
    };

    const chain = __exports.chain = function (f, _arg1) {
      const chain_1 = function (a) {
        const patternInput = f(a);
        return patternInput;
      };

      return core.chain(chain_1, _arg1);
    };

    const loop = __exports.loop = function (f, a, _arg1) {
      return core.loop(function (a_1, b) {
        const patternInput = f(a_1, b);
        return {
          seed: patternInput[0],
          value: patternInput[1]
        };
      }, a, _arg1);
    };

    const pairwise = __exports.pairwise = function (initial, s) {
      return loop(function (prev, curr) {
        return [curr, [prev, curr]];
      }, initial, s);
    };

    const disposeWith = __exports.disposeWith = function (d, _arg1) {
      return ($var3 => function (arg0) {
        return arg0;
      }(core.newStream.bind(core)($var3)))(function (sink, scheduler_1) {
        const ds = _arg1.run(sink, scheduler_1);

        const dispose = function (_arg2) {
          ds.dispose();
          d();
        };

        return disposable.disposeWith(dispose, null);
      });
    };

    return __exports;
  }({});

  const StreamBuilder = __exports.StreamBuilder = class StreamBuilder {
    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.S.StreamBuilder",
        properties: {}
      };
    }

    constructor() {}

    Bind(s, f) {
      return Primitives.chain(f, s);
    }

    Delay(f) {
      return Primitives.defer(f);
    }

    Combine(sa, sb) {
      return Primitives.continueWith(() => sb, sa);
    }

    Zero() {
      return Primitives.empty();
    }

    Using(res, f) {
      return Primitives.recoverWith(err => {
        res.Dispose();
        return Primitives.throwError(err);
      }, Primitives.continueWith(() => {
        res.Dispose();
        return Primitives.empty();
      }, f(res)));
    }

    For(sq, f) {
      const loop_1 = en => {
        if (en.MoveNext()) {
          return Primitives.continueWith(() => loop_1(en), f(en.get_Current));
        } else {
          return Primitives.empty();
        }
      };

      return this.Using((0, _Seq.getEnumerator)(sq), loop_1);
    }

    TryWith(s, h) {
      return Primitives.recoverWith(err => h(new Error(err.message)), s);
    }

    TryFinally(s, compensation) {
      return Primitives.recoverWith(err => {
        compensation();
        return Primitives.throwError(err);
      }, Primitives.continueWith(() => {
        compensation();
        return Primitives.empty();
      }, s));
    }

    While(guard, s) {
      const loop_1 = () => Primitives.continueWith(() => guard() ? loop_1() : Primitives.empty(), s);

      return loop_1();
    }

    Yield(a) {
      return Primitives.now(a);
    }

    YieldFrom(s) {
      return s;
    }

  };
  (0, _Symbol2.setType)("Sakhe.S.StreamBuilder", StreamBuilder);
  const stream = __exports.stream = new StreamBuilder();

  const toStream = __exports.toStream = function (e) {
    const ms_1 = new core.MulticastSource(core.never());
    return ($var4 => function (arg0) {
      return arg0;
    }(core.newStream.bind(core)($var4)))(function (sink, scheduler_1) {
      const onNext = function (v) {
        ms_1.event(scheduler_1.currentTime(), v);
      };

      const d1 = (0, _Observable.subscribe)(onNext, e.Publish);
      const d2 = ms_1.run(sink, scheduler_1);

      const dispose = function (_arg1) {
        d1.Dispose();
        d2.dispose();
      };

      return disposable.disposeWith(dispose, null);
    });
  };

  const tree = __exports.tree = function (f, s, mpith) {
    return Primitives.switchLatest(Primitives.map(function (arg20_) {
      return _a.A.tree(f, s, arg20_);
    }, mpith));
  };

  const treeCombine = __exports.treeCombine = function (f, s, pith) {
    return tree(function (arg10_, arg20_) {
      return Primitives.combine(f, arg10_, arg20_);
    }, s, pith);
  };

  const treeMerge = __exports.treeMerge = function (s, pith) {
    return tree(function (a, b) {
      return Primitives.merge(b, a);
    }, s, pith);
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