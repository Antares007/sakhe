"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduler = exports.rez = undefined;
exports.chain = chain;
exports.absurdObj = absurdObj;
exports.absurdArray = absurdArray;
exports.oTree = oTree;
exports.aTree = aTree;
exports.init = init;

var _Option = require("./fable-core/Option");

var _core = require("@most/core");

var core = _interopRequireWildcard(_core);

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Seq = require("./fable-core/Seq");

var _m = require("./m");

var _scheduler = require("@most/scheduler");

var scheduler_1 = _interopRequireWildcard(_scheduler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function chain(key, absurd, prove, r, o) {
  if (o == null) {
    return Object.assign(absurd(), absurd(), {
      [key]: r(null)
    });
  } else {
    const x = (0, _Option.getValue)(o)[key];
    return Object.assign(absurd(), (0, _Option.getValue)(o), {
      [key]: r(prove(x) ? (0, _Option.makeSome)(x) : null)
    });
  }
}

function absurdObj() {
  return {};
}

function absurdArray() {
  return [];
}

function oTree(pith) {
  const ring = function (pith_1, o) {
    pith_1(function (key) {
      return {
        JString(r) {
          o(core.map($var1 => $var2 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "string", (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var1, $var2);
          }, r));
        },

        JNumber(r) {
          o(core.map($var3 => $var4 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "number", (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var3, $var4);
          }, r));
        },

        JBool(r) {
          o(core.map($var5 => $var6 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "boolean", (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var5, $var6);
          }, r));
        },

        JObject(r) {
          o(core.map($var7 => $var8 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "object" && arg00_ != null, (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var7, $var8);
          }, oTree(r)));
        },

        JArray(r) {
          o(core.map($var9 => $var10 => {
            var prove;
            return (prove = arg00_ => Array.isArray(arg00_), (r_1, o_1) => chain(key, () => absurdObj(), prove, r_1, o_1))($var9, $var10);
          }, aTree(r)));
        },

        [_Symbol3.default.reflection]() {
          return {
            interfaces: ["Sakhe.State.IJValueRay"]
          };
        }

      };
    });
  };

  const deltac = function (list) {
    return (0, _Seq.fold)(core.merge.bind(core), core.empty(), list);
  };

  return (0, _m.tree)(deltac, core.map($var11 => $var12 => {
    ring($var11, $var12);
  }, pith));
}

function aTree(pith) {
  const ring = function (pith_1, o) {
    let c = 0;

    const cpp = function () {
      const index = c | 0;
      c = c + 1 | 0;
      return index | 0;
    };

    pith_1({
      JString(r) {
        (key => {
          o(core.map($var13 => $var14 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "string", (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var13, $var14);
          }, r));
        })(cpp());
      },

      JNumber(r) {
        (key => {
          o(core.map($var15 => $var16 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "number", (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var15, $var16);
          }, r));
        })(cpp());
      },

      JBool(r) {
        (key => {
          o(core.map($var17 => $var18 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "boolean", (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var17, $var18);
          }, r));
        })(cpp());
      },

      JObject(r) {
        (key => {
          o(core.map($var19 => $var20 => {
            var prove;
            return (prove = arg00_ => typeof arg00_ === "object" && arg00_ != null, (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var19, $var20);
          }, oTree(r)));
        })(cpp());
      },

      JArray(r) {
        (key => {
          o(core.map($var21 => $var22 => {
            var prove;
            return (prove = arg00_ => Array.isArray(arg00_), (r_1, o_1) => chain(key, () => absurdArray(), prove, r_1, o_1))($var21, $var22);
          }, aTree(r)));
        })(cpp());
      },

      [_Symbol3.default.reflection]() {
        return {
          interfaces: ["Sakhe.State.IJValueRay"]
        };
      }

    });
  };

  const deltac = function (list) {
    return (0, _Seq.fold)(core.merge.bind(core), core.empty(), list);
  };

  return (0, _m.tree)(deltac, core.map($var23 => $var24 => {
    ring($var23, $var24);
  }, pith));
}

function init(iv, r, _arg1) {
  if (_arg1 == null) {
    return r(iv);
  } else {
    return r((0, _Option.getValue)(_arg1));
  }
}

const rez = exports.rez = ($var25 => oTree(core.now($var25)))(function (o) {
  ($var29 => ($var26 => {
    var objectArg;
    return (objectArg = o("key1"), objectArg.JNumber.bind(objectArg))(core.now.bind(core)($var26));
  })(($var27 => $var28 => function (r, _arg1) {
    return init(1, r, _arg1);
  }($var27, $var28))($var29)))(function (s) {
    return s + 1;
  });

  ($var30 => {
    var objectArg_1;
    return (objectArg_1 = o("key2"), objectArg_1.JObject.bind(objectArg_1))(core.now.bind(core)($var30));
  })(function (o_1) {
    ($var34 => ($var31 => {
      var objectArg_2;
      return (objectArg_2 = o_1("key1"), objectArg_2.JNumber.bind(objectArg_2))(core.now.bind(core)($var31));
    })(($var32 => $var33 => function (r_1, _arg1_1) {
      return init(0, r_1, _arg1_1);
    }($var32, $var33))($var34)))(function (f) {
      return f + 1;
    });

    ($var38 => ($var35 => {
      var objectArg_3;
      return (objectArg_3 = o_1("key1"), objectArg_3.JNumber.bind(objectArg_3))(core.now.bind(core)($var35));
    })(($var36 => $var37 => function (r_2, _arg1_2) {
      return init(0, r_2, _arg1_2);
    }($var36, $var37))($var38)))(function (f_1) {
      return f_1 + 1;
    });
  });

  ($var39 => {
    var objectArg_4;
    return (objectArg_4 = o("key3"), objectArg_4.JArray.bind(objectArg_4))(core.now.bind(core)($var39));
  })(function (o_2) {
    ($var43 => ($var40 => o_2.JString.bind(o_2)(core.now.bind(core)($var40)))(($var41 => $var42 => function (r_3, _arg1_3) {
      return init("a", r_3, _arg1_3);
    }($var41, $var42))($var43)))(function (s_1) {
      return s_1 + s_1;
    });

    ($var47 => ($var44 => o_2.JString.bind(o_2)(core.now.bind(core)($var44)))(($var45 => $var46 => function (r_4, _arg1_4) {
      return init("b", r_4, _arg1_4);
    }($var45, $var46))($var47)))(function (s_2) {
      return s_2 + s_2;
    });

    ($var51 => ($var48 => o_2.JString.bind(o_2)(core.now.bind(core)($var48)))(($var49 => $var50 => function (r_5, _arg1_5) {
      return init("o", r_5, _arg1_5);
    }($var49, $var50))($var51)))(function (s_3) {
      return s_3 + s_3;
    });
  });
});

const scheduler = exports.scheduler = scheduler_1.newDefaultScheduler();
core.runEffects(core.tap(console.log.bind(console), core.scan(function (s, r) {
  return r(s);
}, absurdObj(), rez)), scheduler), void 0;