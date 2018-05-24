"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pith = pith;
exports.pmap = pmap;
exports.deltaC = deltaC;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Pith {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.A.Pith",
      interfaces: ["FSharpUnion"],
      cases: [["Pith", (0, _Util.Function)([(0, _Util.Function)([(0, _Util.GenericParam)("a"), _Util.Unit]), _Util.Unit])]]
    };
  }

}

(0, _Symbol2.setType)("Sakhe.A.Pith", Pith);

class DeltaC {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.A.DeltaC",
      interfaces: ["FSharpUnion"],
      cases: [["DeltaC", (0, _Util.Function)([(0, _Util.makeGeneric)(_List2.default, {
        T: (0, _Util.GenericParam)("a")
      }), (0, _Util.GenericParam)("b")])]]
    };
  }

}

(0, _Symbol2.setType)("Sakhe.A.DeltaC", DeltaC);

function pith(f) {
  return new Pith(0, f);
}

function pmap(f, _arg1) {
  return new Pith(0, (0, _CurriedLambda2.default)(f)(_arg1.data));
}

function deltaC(f) {
  return new DeltaC(0, f);
}

function tree(_arg2, _arg1) {
  let list = new _List2.default();

  _arg1.data(function (a) {
    list = new _List2.default(a, list);
  });

  return _arg2.data(list);
}