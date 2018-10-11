"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncrementalBuilder$$$$002Ector = IncrementalBuilder$$$$002Ector;
exports.IncrementalBuilder$$IncrementUsageCount = IncrementalBuilder$$IncrementUsageCount;
exports.IncrementalBuilder$$get_IsAlive = IncrementalBuilder$$get_IsAlive;
exports.IncrementalBuilder$$$KeepBuilderAlive$$3463A03A = IncrementalBuilder$$$KeepBuilderAlive$$3463A03A;
exports.IncrementalBuilder = void 0;

var _Types = require("../fable-core.2.0.3/Types");

const IncrementalBuilder = (0, _Types.declare)(function IncrementalBuilder() {});
exports.IncrementalBuilder = IncrementalBuilder;

function IncrementalBuilder$$$$002Ector() {
  return this != null ? IncrementalBuilder.call(this) : new IncrementalBuilder();
}

function IncrementalBuilder$$IncrementUsageCount(x) {
  return {
    Dispose() {}

  };
}

function IncrementalBuilder$$get_IsAlive(x$$1) {
  return false;
}

function IncrementalBuilder$$$KeepBuilderAlive$$3463A03A(builderOpt) {
  if (builderOpt == null) {
    return {
      Dispose() {}

    };
  } else {
    const builder = builderOpt;
    return IncrementalBuilder$$IncrementUsageCount(builder);
  }
}