import { declare } from "./fable-library.2.1.0-beta-006/Types";
import { type } from "./fable-library.2.1.0-beta-006/Reflection";
export const AnonymousDisposable = declare(function Sakhe_Disposable_AnonymousDisposable(f) {
  const $this$$1 = this;
  $this$$1.f = f;
  $this$$1.disposed = false;
});
export function AnonymousDisposable$reflection() {
  return type("Sakhe.Disposable.AnonymousDisposable");
}
export function AnonymousDisposable$$$$002Ector$$3A5B6456(f) {
  return this != null ? AnonymousDisposable.call(this, f) : new AnonymousDisposable(f);
}

AnonymousDisposable.prototype.Dispose = function () {
  const __ = this;

  if (__.disposed) {} else {
    __.disposed = true;

    __.f();
  }
};

export const SettableDisposable = declare(function Sakhe_Disposable_SettableDisposable() {
  const $this$$2 = this;
  $this$$2.disposed = false;
  $this$$2.setted = null;
});
export function SettableDisposable$reflection() {
  return type("Sakhe.Disposable.SettableDisposable");
}
export function SettableDisposable$$$$002Ector() {
  return this != null ? SettableDisposable.call(this) : new SettableDisposable();
}
export function SettableDisposable$$Set$$Z5A296901(__$$1, d) {
  if (__$$1.disposed) {
    d.Dispose();
  } else {
    if (__$$1.setted != null) {
      __$$1.setted.Dispose();
    }

    __$$1.setted = d;
  }
}

SettableDisposable.prototype.Dispose = function () {
  const __$$2 = this;

  if (__$$2.disposed) {} else {
    __$$2.disposed = true;

    if (__$$2.setted != null) {
      __$$2.setted.Dispose();
    }
  }
};

export const empty = AnonymousDisposable$$$$002Ector$$3A5B6456(function () {});
export function return$0027(f$$1) {
  return AnonymousDisposable$$$$002Ector$$3A5B6456(f$$1);
}
export function append(l, r) {
  return return$0027(function () {
    l.Dispose();
    r.Dispose();
  });
}
export function appendArray(disposables) {
  return return$0027(function () {
    const to$0027 = disposables.length - 1 | 0;

    for (let i = 0; i <= to$0027; i++) {
      disposables[i].Dispose();
    }
  });
}