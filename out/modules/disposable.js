"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnonymousDisposable$$$$002Ector$$3A5B6456 = AnonymousDisposable$$$$002Ector$$3A5B6456;
exports.SettableDisposable$$$$002Ector = SettableDisposable$$$$002Ector;
exports.SettableDisposable$$Set$$Z5A296901 = SettableDisposable$$Set$$Z5A296901;
exports.return$0027 = return$0027;
exports.append = append;
exports.appendArray = appendArray;
exports.empty = exports.SettableDisposable = exports.AnonymousDisposable = void 0;

var _Types = require("./fable-core.2.0.0-beta-005/Types");

const AnonymousDisposable = (0, _Types.declare)(function AnonymousDisposable(f) {
  const $this$$1 = this;
  $this$$1.f = f;
  $this$$1.disposed = false;
});
exports.AnonymousDisposable = AnonymousDisposable;

function AnonymousDisposable$$$$002Ector$$3A5B6456(f) {
  return this != null ? AnonymousDisposable.call(this, f) : new AnonymousDisposable(f);
}

AnonymousDisposable.prototype.Dispose = function () {
  const __ = this;

  if (__.disposed) {} else {
    __.disposed = true;

    __.f();
  }
};

const SettableDisposable = (0, _Types.declare)(function SettableDisposable() {
  const $this$$2 = this;
  $this$$2.disposed = false;
  $this$$2.disposable = null;
});
exports.SettableDisposable = SettableDisposable;

function SettableDisposable$$$$002Ector() {
  return this != null ? SettableDisposable.call(this) : new SettableDisposable();
}

function SettableDisposable$$Set$$Z5A296901(__$$1, d) {
  if (__$$1.disposed) {
    d.Dispose();
  } else {
    if (__$$1.disposable != null) {
      __$$1.disposable.Dispose();
    }

    __$$1.disposable = d;
  }
}

SettableDisposable.prototype.Dispose = function () {
  const __$$2 = this;

  if (__$$2.disposed) {} else {
    __$$2.disposed = true;

    if (__$$2.disposable != null) {
      __$$2.disposable.Dispose();
    }
  }
};

const empty = AnonymousDisposable$$$$002Ector$$3A5B6456(function () {});
exports.empty = empty;

function return$0027(f$$1) {
  return AnonymousDisposable$$$$002Ector$$3A5B6456(f$$1);
}

function append(l, r) {
  return return$0027(function () {
    l.Dispose();
    r.Dispose();
  });
}

function appendArray(disposables) {
  return return$0027(function () {
    const to$0027 = disposables.length - 1 | 0;

    for (let i = 0; i <= to$0027; i++) {
      disposables[i].Dispose();
    }
  });
}