"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Completion = exports.Range$ = exports.Error$ = void 0;

var _Types = require("./fable-core.2.0.3/Types");

const Error$ = (0, _Types.declare)(function Error$(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.FileName = arg1;
  this.StartLineAlternate = arg2 | 0;
  this.StartColumn = arg3 | 0;
  this.EndLineAlternate = arg4 | 0;
  this.EndColumn = arg5 | 0;
  this.Message = arg6;
  this.IsWarning = arg7;
}, _Types.Record);
exports.Error$ = Error$;
const Range$ = (0, _Types.declare)(function Range$(arg1, arg2, arg3, arg4) {
  this.StartLine = arg1 | 0;
  this.StartColumn = arg2 | 0;
  this.EndLine = arg3 | 0;
  this.EndColumn = arg4 | 0;
}, _Types.Record);
exports.Range$ = Range$;
const Completion = (0, _Types.declare)(function Completion(arg1, arg2) {
  this.Name = arg1;
  this.Glyph = arg2;
}, _Types.Record);
exports.Completion = Completion;