"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.UpdateBuilder = exports.UpdateMonad = undefined;
exports.sTree = sTree;
exports.see2 = see2;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _a = require("./a");

var _s = require("./s");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateMonad {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Update.UpdateMonad",
      interfaces: ["FSharpUnion"],
      cases: [["UM", (0, _Util.Function)([(0, _Util.GenericParam)("s"), (0, _Util.Tuple)([(0, _Util.GenericParam)("u"), (0, _Util.GenericParam)("a")])])]]
    };
  }

}

exports.UpdateMonad = UpdateMonad;
(0, _Symbol2.setType)("Update.UpdateMonad", UpdateMonad);

function sTree() {
  var f_1;
  return (0, _CurriedLambda2.default)((f_1 = _a.A.tree.bind(_a.A), function (arg10_) {
    return _s.S.map($var1 => (0, _CurriedLambda2.default)(f_1)($var1), arg10_);
  }));
}

function see2() {
  return sTree()(_s.S.now((0, _CurriedLambda2.default)(function (a, _arg1) {
    return a;
  })));
}

see2(), void 0;

class UpdateBuilder {
  [_Symbol3.default.reflection]() {
    return {
      type: "Update.UpdateBuilder",
      properties: {}
    };
  }

  constructor() {}

}

exports.UpdateBuilder = UpdateBuilder;
(0, _Symbol2.setType)("Update.UpdateBuilder", UpdateBuilder);
const update = exports.update = new UpdateBuilder();