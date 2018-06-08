"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pith = undefined;

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _Seq = require("./fable-core/Seq");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _String = require("./fable-core/String");

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
      _arg1(function (oa) {
        const patternInput = f(oa);
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

  const see = __exports.see = tree((() => {
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
  }))));
  (0, _String.toConsole)((0, _String.printf)("rez: %A"))(see);
  return __exports;
}({});