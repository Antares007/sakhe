"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssignmentOperator = exports.LogicalOperator = exports.BinaryOperator = exports.UpdateOperator = exports.UnaryOperator = exports.RegexFlag = exports.NumberKind = void 0;

var _Types = require("../fable-core.2.0.3/Types");

const NumberKind = (0, _Types.declare)(function NumberKind(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.NumberKind = NumberKind;
const RegexFlag = (0, _Types.declare)(function RegexFlag(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.RegexFlag = RegexFlag;
const UnaryOperator = (0, _Types.declare)(function UnaryOperator(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.UnaryOperator = UnaryOperator;
const UpdateOperator = (0, _Types.declare)(function UpdateOperator(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.UpdateOperator = UpdateOperator;
const BinaryOperator = (0, _Types.declare)(function BinaryOperator(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.BinaryOperator = BinaryOperator;
const LogicalOperator = (0, _Types.declare)(function LogicalOperator(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.LogicalOperator = LogicalOperator;
const AssignmentOperator = (0, _Types.declare)(function AssignmentOperator(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.AssignmentOperator = AssignmentOperator;