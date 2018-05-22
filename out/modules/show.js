"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = exports.State2 = exports.State = exports.scheduler = undefined;
exports.drain = drain;

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Option = require("./fable-core/Option");

var _state = require("./state");

var _state2 = require("./state2");

var _p = require("./p");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const scheduler = exports.scheduler = scheduler_1.newDefaultScheduler();

function drain(s) {
  core.runEffects(s, scheduler), void 0;
}

const State = exports.State = function (__exports) {
  const init = __exports.init = function (iv, r, _arg1) {
    if (_arg1 == null) {
      return r(iv);
    } else {
      return r((0, _Option.getValue)(_arg1));
    }
  };

  const rez = __exports.rez = core.tap(console.log.bind(console), core.scan(function (s, r) {
    return r(s);
  }, {}, ($var1 => (0, _state.oTree)(core.now($var1)))(function (o) {
    ($var5 => ($var2 => {
      var objectArg;
      return (objectArg = o("key1"), objectArg.JNumber.bind(objectArg))(core.now.bind(core)($var2));
    })(($var3 => $var4 => function (r_1, _arg1) {
      return init(1, r_1, _arg1);
    }($var3, $var4))($var5)))(function (s_1) {
      return s_1 + 1;
    });

    ($var6 => {
      var objectArg_1;
      return (objectArg_1 = o("key2"), objectArg_1.JObject.bind(objectArg_1))(core.now.bind(core)($var6));
    })(function (o_1) {
      ($var10 => ($var7 => {
        var objectArg_2;
        return (objectArg_2 = o_1("key1"), objectArg_2.JNumber.bind(objectArg_2))(core.now.bind(core)($var7));
      })(($var8 => $var9 => function (r_2, _arg1_1) {
        return init(0, r_2, _arg1_1);
      }($var8, $var9))($var10)))(function (f) {
        return f + 1;
      });

      ($var14 => ($var11 => {
        var objectArg_3;
        return (objectArg_3 = o_1("key1"), objectArg_3.JNumber.bind(objectArg_3))(core.now.bind(core)($var11));
      })(($var12 => $var13 => function (r_3, _arg1_2) {
        return init(0, r_3, _arg1_2);
      }($var12, $var13))($var14)))(function (f_1) {
        return f_1 + 1;
      });
    });

    ($var15 => {
      var objectArg_4;
      return (objectArg_4 = o("key3"), objectArg_4.JArray.bind(objectArg_4))(core.now.bind(core)($var15));
    })(function (o_2) {
      ($var19 => ($var16 => o_2.JString.bind(o_2)(core.now.bind(core)($var16)))(($var17 => $var18 => function (r_4, _arg1_3) {
        return init("a", r_4, _arg1_3);
      }($var17, $var18))($var19)))(function (s_2) {
        return s_2 + s_2;
      });

      ($var23 => ($var20 => o_2.JString.bind(o_2)(core.now.bind(core)($var20)))(($var21 => $var22 => function (r_5, _arg1_4) {
        return init("b", r_5, _arg1_4);
      }($var21, $var22))($var23)))(function (s_3) {
        return s_3 + s_3;
      });

      ($var27 => ($var24 => o_2.JString.bind(o_2)(core.now.bind(core)($var24)))(($var25 => $var26 => function (r_6, _arg1_5) {
        return init("o", r_6, _arg1_5);
      }($var25, $var26))($var27)))(function (s_4) {
        return s_4 + s_4;
      });
    });
  })));
  return __exports;
}({});

const State2 = exports.State2 = function (__exports) {
  const init_1 = __exports.init = function (iv, r, _arg1) {
    if (_arg1 == null) {
      return r(iv);
    } else {
      return r((0, _Option.getValue)(_arg1));
    }
  };

  const rez_1 = __exports.rez = core.tap(console.log.bind(console), core.scan(function (s, r) {
    return r(s);
  }, {}, ($var28 => (0, _state2.oTree)(core.now($var28)))(function (o) {
    o(["k1", new _state2.RValue(1, ($var31 => core.now.bind(core)(($var29 => $var30 => function (r_1, _arg1) {
      return init_1(1, r_1, _arg1);
    }($var29, $var30))($var31)))(function (s_1) {
      return s_1 + 1;
    }))]);
    o(["k2", new _state2.RValue(3, core.now(function (o_1) {
      o_1(["k2.1", new _state2.RValue(1, ($var34 => core.now.bind(core)(($var32 => $var33 => function (r_2, _arg1_1) {
        return init_1(2, r_2, _arg1_1);
      }($var32, $var33))($var34)))(function (s_2) {
        return s_2 + 1;
      }))]);
      o_1(["k2.2", new _state2.RValue(1, ($var37 => core.now.bind(core)(($var35 => $var36 => function (r_3, _arg1_2) {
        return init_1(3, r_3, _arg1_2);
      }($var35, $var36))($var37)))(function (s_3) {
        return s_3 + 1;
      }))]);
      o_1(["k2.3", new _state2.RValue(3, core.now(function (o_2) {
        o_2(["k2.3.1", new _state2.RValue(1, ($var40 => core.now.bind(core)(($var38 => $var39 => function (r_4, _arg1_3) {
          return init_1(4, r_4, _arg1_3);
        }($var38, $var39))($var40)))(function (s_4) {
          return s_4 + 1;
        }))]);
      }))]);
    }))]);
    o(["k3", new _state2.RValue(4, core.now(function (o_3) {
      o_3([0, new _state2.RValue(1, ($var43 => core.now.bind(core)(($var41 => $var42 => function (r_5, _arg1_4) {
        return init_1(2, r_5, _arg1_4);
      }($var41, $var42))($var43)))(function (s_5) {
        return s_5 + 1;
      }))]);
      o_3([1, new _state2.RValue(1, ($var46 => core.now.bind(core)(($var44 => $var45 => function (r_6, _arg1_5) {
        return init_1(3, r_6, _arg1_5);
      }($var44, $var45))($var46)))(function (s_6) {
        return s_6 + 1;
      }))]);
      o_3([2, new _state2.RValue(3, core.now(function (o_4) {
        o_4(["k2.3.1", new _state2.RValue(1, ($var49 => core.now.bind(core)(($var47 => $var48 => function (r_7, _arg1_6) {
          return init_1(4, r_7, _arg1_6);
        }($var47, $var48))($var49)))(function (s_7) {
          return s_7 + 1;
        }))]);
      }))]);
    }))]);
  })));
  return __exports;
}({});

const Dom = exports.Dom = function (__exports) {
  const Div = __exports.Div = function (pith) {
    return new _p.Dom(0, [[function () {
      return document.createElement("div");
    }, function (n) {
      return n.nodeName === "DIV";
    }], (0, _p.tree)(pith)]);
  };

  const A = __exports.A = function (pith) {
    return new _p.Dom(0, [[function () {
      return document.createElement("a");
    }, function (n) {
      return n.nodeName === "a";
    }], (0, _p.tree)(pith)]);
  };

  const rez_2 = __exports.rez = core.scan(function (n, p) {
    p(n);
    return n;
  }, document.getElementById("root-node"), ($var50 => (0, _p.tree)(core.now($var50)))(function (o) {
    ($var52 => ($var51 => o(Div($var51)))(core.now.bind(core)($var52)))(function (o_1) {
      ($var54 => ($var53 => o_1(Div($var53)))(core.now.bind(core)($var54)))(function (value) {
        value, void 0;
      });

      ($var56 => ($var55 => o_1(A($var55)))(core.now.bind(core)($var56)))(function (value_1) {
        value_1, void 0;
      });
    });

    ($var58 => ($var57 => o(A($var57)))(core.now.bind(core)($var58)))(function (o_2) {
      ($var60 => ($var59 => o_2(Div($var59)))(core.now.bind(core)($var60)))(function (value_2) {
        value_2, void 0;
      });

      ($var62 => ($var61 => o_2(A($var61)))(core.now.bind(core)($var62)))(function (value_3) {
        value_3, void 0;
      });
    });
  }));
  drain(rez_2);
  return __exports;
}({});