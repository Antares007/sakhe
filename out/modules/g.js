"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.G = undefined;
exports.ring = ring;
exports.tree = tree;

var _Symbol2 = require("./fable-core/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("./fable-core/Util");

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _Seq = require("./fable-core/Seq");

var _s = require("./s");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class G {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }

  [_Symbol3.default.reflection]() {
    return {
      type: "Sakhe.G.G",
      interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
      cases: [["A", (0, _Util.GenericParam)("a")], ["B", (0, _Util.GenericParam)("b")], ["AB", (0, _Util.GenericParam)("a"), (0, _Util.GenericParam)("b")]]
    };
  }

  Equals(other) {
    return this === other || this.tag === other.tag && (0, _Util.equals)(this.data, other.data);
  }

  CompareTo(other) {
    return (0, _Util.compareUnions)(this, other) | 0;
  }

}

exports.G = G;
(0, _Symbol2.setType)("Sakhe.G.G", G);

function ring(_arg1) {
  let abList = new _List2.default();

  _arg1(function (prv) {
    abList = new _List2.default(prv, abList);
  });

  const patternInput = (0, _Seq.fold)(function (tupledArg, _arg2) {
    return _arg2.tag === 1 ? [tupledArg[0], function (o) {
      o(_arg2.data);
      tupledArg[1](o);
    }] : _arg2.tag === 2 ? [function (o_1) {
      o_1(_arg2.data[0]);
      tupledArg[0](o_1);
    }, function (o_2) {
      o_2(_arg2.data[1]);
      tupledArg[1](o_2);
    }] : [function (o_3) {
      o_3(_arg2.data);
      tupledArg[0](o_3);
    }, tupledArg[1]];
  }, [function (value) {
    value, void 0;
  }, function (value_1) {
    value_1, void 0;
  }], abList);
  return [patternInput[0], patternInput[1]];
}

function tree(aTree, bTree, pith) {
  const abPS = _s.S.multicast(_s.S.map(ring, pith));

  const aPS = _s.S.map(function (tuple) {
    return tuple[0];
  }, abPS);

  const bPS = _s.S.map(function (tuple_1) {
    return tuple_1[1];
  }, abPS);

  return [aTree(aPS), bTree(bPS)];
}