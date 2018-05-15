"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;

function tree(deltac, pith) {
  let lst = [];
  const put = lst.push.bind(lst);
  pith(put);
  return deltac(Array.from(lst));
}