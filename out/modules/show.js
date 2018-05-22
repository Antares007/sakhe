"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run1 = run1;
exports.run2 = run2;

var _dom = require("./dom2");

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

var _state2 = require("./state2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _dom.run)(), void 0;

function run1() {
  const init = function (iv, r, _arg1) {
    if (_arg1 == null) {
      return r(iv);
    } else {
      return r((0, _Option.getValue)(_arg1));
    }
  };

  const rez = ($var1 => (0, _state.oTree)(core.now($var1)))(function (o) {
    ($var5 => ($var2 => {
      var objectArg;
      return (objectArg = o("key1"), objectArg.JNumber.bind(objectArg))(core.now.bind(core)($var2));
    })(($var3 => $var4 => (0, _CurriedLambda2.default)(init)(1)($var3, $var4))($var5)))(function (s) {
      return s + 1;
    });

    ($var6 => {
      var objectArg_1;
      return (objectArg_1 = o("key2"), objectArg_1.JObject.bind(objectArg_1))(core.now.bind(core)($var6));
    })(function (o_1) {
      ($var10 => ($var7 => {
        var objectArg_2;
        return (objectArg_2 = o_1("key1"), objectArg_2.JNumber.bind(objectArg_2))(core.now.bind(core)($var7));
      })(($var8 => $var9 => (0, _CurriedLambda2.default)(init)(0)($var8, $var9))($var10)))(function (f) {
        return f + 1;
      });

      ($var14 => ($var11 => {
        var objectArg_3;
        return (objectArg_3 = o_1("key1"), objectArg_3.JNumber.bind(objectArg_3))(core.now.bind(core)($var11));
      })(($var12 => $var13 => (0, _CurriedLambda2.default)(init)(0)($var12, $var13))($var14)))(function (f_1) {
        return f_1 + 1;
      });
    });

    ($var15 => {
      var objectArg_4;
      return (objectArg_4 = o("key3"), objectArg_4.JArray.bind(objectArg_4))(core.now.bind(core)($var15));
    })(function (o_2) {
      ($var19 => ($var16 => o_2.JString.bind(o_2)(core.now.bind(core)($var16)))(($var17 => $var18 => (0, _CurriedLambda2.default)(init)("a")($var17, $var18))($var19)))(function (s_1) {
        return s_1 + s_1;
      });

      ($var23 => ($var20 => o_2.JString.bind(o_2)(core.now.bind(core)($var20)))(($var21 => $var22 => (0, _CurriedLambda2.default)(init)("b")($var21, $var22))($var23)))(function (s_2) {
        return s_2 + s_2;
      });

      ($var27 => ($var24 => o_2.JString.bind(o_2)(core.now.bind(core)($var24)))(($var25 => $var26 => (0, _CurriedLambda2.default)(init)("o")($var25, $var26))($var27)))(function (s_3) {
        return s_3 + s_3;
      });
    });
  });

  const scheduler = scheduler_1.newDefaultScheduler();
  core.runEffects(core.tap(console.log.bind(console), core.scan(function (s_4, r_1) {
    return r_1(s_4);
  }, {}, rez)), scheduler), void 0;
}

function run2() {
  const init = function (iv, r, _arg1) {
    if (_arg1 == null) {
      return r(iv);
    } else {
      return r((0, _Option.getValue)(_arg1));
    }
  };

  const rez = ($var28 => (0, _state2.oTree)(core.now($var28)))(function (o) {
    o(["k1", new _state2.RValue(1, ($var31 => core.now.bind(core)(($var29 => $var30 => (0, _CurriedLambda2.default)(init)(1)($var29, $var30))($var31)))(function (s) {
      return s + 1;
    }))]);
    o(["k2", new _state2.RValue(3, core.now(function (o_1) {
      o_1(["k2.1", new _state2.RValue(1, ($var34 => core.now.bind(core)(($var32 => $var33 => (0, _CurriedLambda2.default)(init)(2)($var32, $var33))($var34)))(function (s_1) {
        return s_1 + 1;
      }))]);
      o_1(["k2.2", new _state2.RValue(1, ($var37 => core.now.bind(core)(($var35 => $var36 => (0, _CurriedLambda2.default)(init)(3)($var35, $var36))($var37)))(function (s_2) {
        return s_2 + 1;
      }))]);
      o_1(["k2.3", new _state2.RValue(3, core.now(function (o_2) {
        o_2(["k2.3.1", new _state2.RValue(1, ($var40 => core.now.bind(core)(($var38 => $var39 => (0, _CurriedLambda2.default)(init)(4)($var38, $var39))($var40)))(function (s_3) {
          return s_3 + 1;
        }))]);
      }))]);
    }))]);
    o(["k3", new _state2.RValue(4, core.now(function (o_3) {
      o_3([0, new _state2.RValue(1, ($var43 => core.now.bind(core)(($var41 => $var42 => (0, _CurriedLambda2.default)(init)(2)($var41, $var42))($var43)))(function (s_4) {
        return s_4 + 1;
      }))]);
      o_3([1, new _state2.RValue(1, ($var46 => core.now.bind(core)(($var44 => $var45 => (0, _CurriedLambda2.default)(init)(3)($var44, $var45))($var46)))(function (s_5) {
        return s_5 + 1;
      }))]);
      o_3([2, new _state2.RValue(3, core.now(function (o_4) {
        o_4(["k2.3.1", new _state2.RValue(1, ($var49 => core.now.bind(core)(($var47 => $var48 => (0, _CurriedLambda2.default)(init)(4)($var47, $var48))($var49)))(function (s_6) {
          return s_6 + 1;
        }))]);
      }))]);
    }))]);
  });

  const scheduler = scheduler_1.newDefaultScheduler();
  core.runEffects(core.tap(console.log.bind(console), core.scan(function (s_7, r_1) {
    return r_1(s_7);
  }, {}, rez)), scheduler), void 0;
}

run2();