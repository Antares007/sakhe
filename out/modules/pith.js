"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith = undefined;

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _String = require("./fable-core/String");

var _Seq = require("./fable-core/Seq");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pith = exports.Pith = function (__exports) {
  const return_ = __exports["return'"] = function (p) {
    return p;
  };

  const map = __exports.map = function (f, _arg1) {
    return function (o) {
      _arg1($var1 => o(f($var1)));
    };
  };

  const bind = __exports.bind = function (f, _arg1) {
    return function (ob) {
      _arg1(function (a) {
        const patternInput = f(a);
        patternInput(ob);
      });
    };
  };

  const fish = __exports.fish = function (f, g, a) {
    return function (oc) {
      const patternInput = f(a);
      patternInput(function (b) {
        const patternInput_1 = g(b);
        patternInput_1(oc);
      });
    };
  };

  const tree = __exports.tree = function (deltaC, _arg1) {
    let list = new _List2.default();

    _arg1(function (a) {
      list = new _List2.default(a, list);
    });

    return deltaC(list);
  };

  const PithBuilder = __exports.PithBuilder = class PithBuilder {
    [_Symbol3.default.reflection]() {
      return {
        type: "Sakhe.Pith.PithBuilder",
        properties: {}
      };
    }

    constructor() {}

  };
  (0, _Symbol2.setType)("Sakhe.Pith.PithBuilder", PithBuilder);
  const p = __exports.p = new PithBuilder();
  (0, _String.toConsole)((0, _String.printf)("rez: %A"))(tree((() => {
    const folder = function (x, y) {
      return x + y;
    };

    return function (list) {
      return (0, _Seq.fold)(folder, "", list);
    };
  })(), (0, _CurriedLambda2.default)(bind)(function (a) {
    return return_(function (o) {
      o("A" + a.toString());
      o("B" + a.toString());
      o("O" + a.toString());
    });
  })(map(function (y_1) {
    return 1 + y_1;
  }, return_(function (o_1) {
    o_1(0);
    o_1(1);
    o_1(2);
  })))));

  const p0 = __exports.p0 = function (builder_) {
    return return_(function (o_2) {
      o_2(0);
      o_2(1);
      o_2(2);
    });
  }(p);

  const patternInput_58 = function (builder_) {
    return bind(function (_arg1) {
      const str = (_arg1 + 1).toString();

      return return_(function (o_2) {
        o_2("A" + str);
        o_2("B" + str);
        o_2("O" + str);
      });
    }, p0);
  }(p);

  const p1 = __exports.p1 = (0, _CurriedLambda2.default)(patternInput_58);
  p1((0, _String.toConsole)((0, _String.printf)("%A")));
  return __exports;
}({});