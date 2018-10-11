"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventSource$$$$002Ector = EventSource$$$$002Ector;
exports.EventSource$$IsEnabled = EventSource$$IsEnabled;
exports.EventSource$$WriteEvent$$Z37302880 = EventSource$$WriteEvent$$Z37302880;
exports.EventSource$$WriteEvent$$570F6C9B = EventSource$$WriteEvent$$570F6C9B;
exports.FSharpCompilerEventSource$$$$002Ector = FSharpCompilerEventSource$$$$002Ector;
exports.FSharpCompilerEventSource$$$get_Instance = FSharpCompilerEventSource$$$get_Instance;
exports.FSharpCompilerEventSource$$Log$$Z7961FD96 = FSharpCompilerEventSource$$Log$$Z7961FD96;
exports.FSharpCompilerEventSource$$LogMessage$$Z3332FE0F = FSharpCompilerEventSource$$LogMessage$$Z3332FE0F;
exports.FSharpCompilerEventSource$$BlockStart$$Z7961FD96 = FSharpCompilerEventSource$$BlockStart$$Z7961FD96;
exports.FSharpCompilerEventSource$$BlockStop$$Z7961FD96 = FSharpCompilerEventSource$$BlockStop$$Z7961FD96;
exports.FSharpCompilerEventSource$$BlockMessageStart$$Z3332FE0F = FSharpCompilerEventSource$$BlockMessageStart$$Z3332FE0F;
exports.FSharpCompilerEventSource$$BlockMessageStop$$Z3332FE0F = FSharpCompilerEventSource$$BlockMessageStop$$Z3332FE0F;
exports.Logger$$$Log = Logger$$$Log;
exports.Logger$$$LogMessage = Logger$$$LogMessage;
exports.Logger$$$LogBlockStart = Logger$$$LogBlockStart;
exports.Logger$$$LogBlockStop = Logger$$$LogBlockStop;
exports.Logger$$$LogBlockMessageStart = Logger$$$LogBlockMessageStart;
exports.Logger$$$LogBlockMessageStop = Logger$$$LogBlockMessageStop;
exports.Logger$$$LogBlock = Logger$$$LogBlock;
exports.Logger$$$LogBlockMessage = Logger$$$LogBlockMessage;
exports.FSharpCompilerEventSource = exports.LogCompilerFunctionId = exports.EventSource = void 0;

var _Types = require("../fable-core.2.0.3/Types");

const EventSource = (0, _Types.declare)(function EventSource() {});
exports.EventSource = EventSource;

function EventSource$$$$002Ector() {
  return this != null ? EventSource.call(this) : new EventSource();
}

function EventSource$$IsEnabled(this$) {
  return false;
}

function EventSource$$WriteEvent$$Z37302880(this$$$1, _eventId, _arg1) {}

function EventSource$$WriteEvent$$570F6C9B(this$$$2, _eventId$$1, _arg1$$1, _arg2) {}

const LogCompilerFunctionId = (0, _Types.declare)(function LogCompilerFunctionId(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.value__ = arg1 | 0;
  this.Service_ParseAndCheckFileInProject = arg2;
  this.Service_CheckOneFile = arg3;
  this.Service_IncrementalBuildersCache_BuildingNewCache = arg4;
  this.Service_IncrementalBuildersCache_GettingCache = arg5;
  this.CompileOps_TypeCheckOneInputAndFinishEventually = arg6;
}, _Types.Record);
exports.LogCompilerFunctionId = LogCompilerFunctionId;
const FSharpCompilerEventSource = (0, _Types.declare)(function FSharpCompilerEventSource() {
  const $this$$2 = this;
  EventSource$$$$002Ector.call($this$$2);
}, EventSource);
exports.FSharpCompilerEventSource = FSharpCompilerEventSource;

function FSharpCompilerEventSource$$$$002Ector() {
  return this != null ? FSharpCompilerEventSource.call(this) : new FSharpCompilerEventSource();
}

(function FSharpCompilerEventSource$$$$002Ecctor() {
  FSharpCompilerEventSource.instance = FSharpCompilerEventSource$$$$002Ector();
})();

function FSharpCompilerEventSource$$$get_Instance() {
  return FSharpCompilerEventSource.instance;
}

function FSharpCompilerEventSource$$Log$$Z7961FD96(this$$$3, functionId) {
  if (EventSource$$IsEnabled(this$$$3)) {
    EventSource$$WriteEvent$$Z37302880(this$$$3, 1, functionId);
  }
}

function FSharpCompilerEventSource$$LogMessage$$Z3332FE0F(this$$$4, message, functionId$$1) {
  if (EventSource$$IsEnabled(this$$$4)) {
    EventSource$$WriteEvent$$570F6C9B(this$$$4, 2, message, functionId$$1);
  }
}

function FSharpCompilerEventSource$$BlockStart$$Z7961FD96(this$$$5, functionId$$2) {
  if (EventSource$$IsEnabled(this$$$5)) {
    EventSource$$WriteEvent$$Z37302880(this$$$5, 3, functionId$$2);
  }
}

function FSharpCompilerEventSource$$BlockStop$$Z7961FD96(this$$$6, functionId$$3) {
  if (EventSource$$IsEnabled(this$$$6)) {
    EventSource$$WriteEvent$$Z37302880(this$$$6, 4, functionId$$3);
  }
}

function FSharpCompilerEventSource$$BlockMessageStart$$Z3332FE0F(this$$$7, message$$1, functionId$$4) {
  if (EventSource$$IsEnabled(this$$$7)) {
    EventSource$$WriteEvent$$570F6C9B(this$$$7, 5, message$$1, functionId$$4);
  }
}

function FSharpCompilerEventSource$$BlockMessageStop$$Z3332FE0F(this$$$8, message$$2, functionId$$5) {
  if (EventSource$$IsEnabled(this$$$8)) {
    EventSource$$WriteEvent$$570F6C9B(this$$$8, 6, message$$2, functionId$$5);
  }
}

function Logger$$$Log(functionId$$6) {
  FSharpCompilerEventSource$$Log$$Z7961FD96(FSharpCompilerEventSource$$$get_Instance(), functionId$$6);
}

function Logger$$$LogMessage(message$$3, functionId$$7) {
  FSharpCompilerEventSource$$LogMessage$$Z3332FE0F(FSharpCompilerEventSource$$$get_Instance(), message$$3, functionId$$7);
}

function Logger$$$LogBlockStart(functionId$$8) {
  FSharpCompilerEventSource$$BlockStart$$Z7961FD96(FSharpCompilerEventSource$$$get_Instance(), functionId$$8);
}

function Logger$$$LogBlockStop(functionId$$9) {
  FSharpCompilerEventSource$$BlockStop$$Z7961FD96(FSharpCompilerEventSource$$$get_Instance(), functionId$$9);
}

function Logger$$$LogBlockMessageStart(message$$4, functionId$$10) {
  FSharpCompilerEventSource$$BlockMessageStart$$Z3332FE0F(FSharpCompilerEventSource$$$get_Instance(), message$$4, functionId$$10);
}

function Logger$$$LogBlockMessageStop(message$$5, functionId$$11) {
  FSharpCompilerEventSource$$BlockMessageStop$$Z3332FE0F(FSharpCompilerEventSource$$$get_Instance(), message$$5, functionId$$11);
}

function Logger$$$LogBlock(functionId$$12) {
  FSharpCompilerEventSource$$BlockStart$$Z7961FD96(FSharpCompilerEventSource$$$get_Instance(), functionId$$12);
  return {
    Dispose() {
      FSharpCompilerEventSource$$BlockStop$$Z7961FD96(FSharpCompilerEventSource$$$get_Instance(), functionId$$12);
    }

  };
}

function Logger$$$LogBlockMessage(message$$6, functionId$$13) {
  FSharpCompilerEventSource$$BlockMessageStart$$Z3332FE0F(FSharpCompilerEventSource$$$get_Instance(), message$$6, functionId$$13);
  return {
    Dispose() {
      FSharpCompilerEventSource$$BlockMessageStop$$Z3332FE0F(FSharpCompilerEventSource$$$get_Instance(), message$$6, functionId$$13);
    }

  };
}