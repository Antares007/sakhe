"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineExpr = exports.Severity = exports.CompilerOptions = void 0;

var _Types = require("../fable-core.2.0.3/Types");

const CompilerOptions = (0, _Types.declare)(function CompilerOptions(arg1, arg2, arg3) {
  this.typedArrays = arg1;
  this.clampByteArrays = arg2;
  this.verbose = arg3;
}, _Types.Record);
exports.CompilerOptions = CompilerOptions;
const Severity = (0, _Types.declare)(function Severity(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Severity = Severity;
const InlineExpr = (0, _Types.declare)(function InlineExpr(arg1, arg2, arg3) {
  this.Args = arg1;
  this.Body = arg2;
  this.FileName = arg3;
}, _Types.Record);
exports.InlineExpr = InlineExpr;