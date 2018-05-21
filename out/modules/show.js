"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduler = exports.rez = undefined;
exports.init = init;

var _dom = require("./dom2");

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _dom.run)(), void 0;

function init(iv, r, _arg1) {
  if (_arg1 == null) {
    return r(iv);
  } else {
    return r((0, _Option.getValue)(_arg1));
  }
}

const rez = exports.rez = ($var1 => (0, _state.oTree)(core.now($var1)))(function (o) {
  ($var5 => ($var2 => {
    var objectArg;
    return (objectArg = o("key1"), objectArg.JNumber.bind(objectArg))(core.now.bind(core)($var2));
  })(($var3 => $var4 => function (r, _arg1) {
    return init(1, r, _arg1);
  }($var3, $var4))($var5)))(function (s) {
    return s + 1;
  });

  ($var6 => {
    var objectArg_1;
    return (objectArg_1 = o("key2"), objectArg_1.JObject.bind(objectArg_1))(core.now.bind(core)($var6));
  })(function (o_1) {
    ($var10 => ($var7 => {
      var objectArg_2;
      return (objectArg_2 = o_1("key1"), objectArg_2.JNumber.bind(objectArg_2))(core.now.bind(core)($var7));
    })(($var8 => $var9 => function (r_1, _arg1_1) {
      return init(0, r_1, _arg1_1);
    }($var8, $var9))($var10)))(function (f) {
      return f + 1;
    });

    ($var14 => ($var11 => {
      var objectArg_3;
      return (objectArg_3 = o_1("key1"), objectArg_3.JNumber.bind(objectArg_3))(core.now.bind(core)($var11));
    })(($var12 => $var13 => function (r_2, _arg1_2) {
      return init(0, r_2, _arg1_2);
    }($var12, $var13))($var14)))(function (f_1) {
      return f_1 + 1;
    });
  });

  ($var15 => {
    var objectArg_4;
    return (objectArg_4 = o("key3"), objectArg_4.JArray.bind(objectArg_4))(core.now.bind(core)($var15));
  })(function (o_2) {
    ($var19 => ($var16 => o_2.JString.bind(o_2)(core.now.bind(core)($var16)))(($var17 => $var18 => function (r_3, _arg1_3) {
      return init("a", r_3, _arg1_3);
    }($var17, $var18))($var19)))(function (s_1) {
      return s_1 + s_1;
    });

    ($var23 => ($var20 => o_2.JString.bind(o_2)(core.now.bind(core)($var20)))(($var21 => $var22 => function (r_4, _arg1_4) {
      return init("b", r_4, _arg1_4);
    }($var21, $var22))($var23)))(function (s_2) {
      return s_2 + s_2;
    });

    ($var27 => ($var24 => o_2.JString.bind(o_2)(core.now.bind(core)($var24)))(($var25 => $var26 => function (r_5, _arg1_5) {
      return init("o", r_5, _arg1_5);
    }($var25, $var26))($var27)))(function (s_3) {
      return s_3 + s_3;
    });
  });
});

const scheduler = exports.scheduler = scheduler_1.newDefaultScheduler();
core.runEffects(core.tap(console.log.bind(console), core.scan(function (s, r) {
  return r(s);
}, (0, _state.absurdObj)(), rez)), scheduler), void 0;