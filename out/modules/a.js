"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;

function tree(deltac, pith) {
  var lst = [];
  var put = lst.push.bind(lst);
  pith(put);
  return deltac(Array.from(lst));
}
//# sourceMappingURL=a.js.map