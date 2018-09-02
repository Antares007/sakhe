import * as scheduler$$1 from "@most/scheduler";
import * as core from "@most/core";
export function JsDisposable$$$create(f) {
  let disposed = false;
  return {
    dispose() {
      if (!disposed) {
        disposed = true;
        f();
      }
    }

  };
}
export function SystemDisposable$$$create(f$$1) {
  let disposed$$1 = false;
  return {
    Dispose() {
      if (!disposed$$1) {
        disposed$$1 = true;
        f$$1();
      }
    }

  };
}
export function Disposable$002Eget_SystemDisposable(jsDisposable) {
  return SystemDisposable$$$create(function () {
    jsDisposable.dispose();
  });
}
export function IDisposable$002Eget_JsDisposable(systemDisposable) {
  return JsDisposable$$$create(function () {
    systemDisposable.Dispose();
  });
}
const Extensions$$$scheduler = scheduler$$1;
const Extensions$$$defaultScheduler = Extensions$$$scheduler.newDefaultScheduler();
export const Extensions$$$S = core;
export function IExports$002Edrain$$Z57BFC98E(__$$2, s) {
  return Extensions$$$S.runEffects(s, Extensions$$$defaultScheduler);
}
export function IObservable$00601$002Eget_toStream(o) {
  return Extensions$$$S.newStream(function (sink, scheduler) {
    return IDisposable$002Eget_JsDisposable(o.Subscribe({
      OnNext(e) {
        sink.event(scheduler.currentTime(), e);
      },

      OnCompleted() {
        sink.end(scheduler.currentTime());
      },

      OnError(error) {
        const error$$1 = new Error(error.message);
        sink.error(scheduler.currentTime(), error$$1);
      }

    }));
  });
}