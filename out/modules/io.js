"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;

var _pith = require("./pith");

function return$0027(f, i) {
  return function (o) {
    return f(o, (0, _pith.I$$$run)(i));
  };
}