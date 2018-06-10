"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = exports.DomUpdate = exports.DomState = undefined;
exports.see = see;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _CurriedLambda = require("./fable-core/CurriedLambda");

var _CurriedLambda2 = _interopRequireDefault(_CurriedLambda);

var _pith = require("./pith");

var _update = require("./update");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hello");

class DomState {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.Show.Play.DomState",
      interfaces: ["FSharpUnion", "System.IEquatable"],
      cases: [["Element", "string", _Util.Any], ["Text", _Util.Any], ["Comment", _Util.Any]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

}

exports.DomState = DomState;
(0, _Symbol2.setType)("Sakhe.Show.Play.DomState", DomState);

class DomUpdate {
  constructor(tag) {
    this.tag = tag | 0;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.Show.Play.DomUpdate",
      interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
      cases: [["SetNop"]]
    };
  }

  Equals(other) {
    return this.tag === other.tag;
  }

  CompareTo(other) {
    return (0, _Util.comparePrimitives)(this.tag, other.tag);
  }

  static get Unit() {
    return new DomUpdate(0);
  }

  static Combine(a, b) {
    throw new Error("ni");
  }

  static Apply(s, p) {
    throw new Error("ni");
  }

}

exports.DomUpdate = DomUpdate;
(0, _Symbol2.setType)("Sakhe.Show.Play.DomUpdate", DomUpdate);

class Tree {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.Show.Play.Tree",
      interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
      cases: [["Node", (0, _Util.GenericParam)("a")], ["Leaf", (0, _Util.GenericParam)("a")]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

  CompareTo(other) {
    return (0, _Util.compareUnions)(this, other) | 0;
  }

}

exports.Tree = Tree;
(0, _Symbol2.setType)("Sakhe.Show.Play.Tree", Tree);

function see(x) {
  return (0, _CurriedLambda2.default)(($var5 => ($var1 => $var2 => _pith.Pith.map.bind(_pith.Pith)($var1, $var2))(($var3 => $var4 => function (f_1, arg10__1) {
    return new _update.UpdateMonad(0, function (s) {
      const patternInput = arg10__1.data(s);
      return [patternInput[0], f_1(patternInput[1])];
    });
  }($var3, $var4))($var5)))(x));
}