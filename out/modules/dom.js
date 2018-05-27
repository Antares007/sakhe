"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ring = ring;
exports.tree = tree;
exports.see = see;

var _List = require("./fable-core/List");

var _List2 = _interopRequireDefault(_List);

var _Seq = require("./fable-core/Seq");

var _s = require("./s");

var _state = require("./state");

var _pnode = require("./pnode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ring(_arg1) {
  let abList = new _List2.default();

  _arg1(function (prv) {
    abList = new _List2.default(prv, abList);
  });

  const patternInput = (0, _Seq.fold)(function (tupledArg, tupledArg_1) {
    return [function (o) {
      o(tupledArg_1[0]);
      tupledArg[0](o);
    }, function (o_1) {
      o_1(tupledArg_1[1]);
      tupledArg[1](o_1);
    }];
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

function see(pith) {
  return tree(_state.aTree, _pnode.tree, pith);
}