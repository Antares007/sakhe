import * as scheduler$$1 from "@most/scheduler";
import * as core from "@most/core";
export const Disposable$$$empty = {
  dispose() {}

};
export function Disposable$$$return$0027(f) {
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
export function Disposable$$$append(l, r) {
  return Disposable$$$return$0027(function () {
    l.dispose();
    r.dispose();
  });
}
const Extensions$$$scheduler = scheduler$$1;
export const Extensions$$$defaultScheduler = Extensions$$$scheduler.newDefaultScheduler();
export const Extensions$$$S = core;
export function IExports$002Edrain$$Z57BFC98E(S, s) {
  return S.runEffects(s, Extensions$$$defaultScheduler);
}
export function IObservable$00601$002Eget_toStream(o) {
  return Extensions$$$S.newStream(function (sink, scheduler) {
    let lastTasks = Disposable$$$empty;

    const asap = function asap(task) {
      lastTasks = Disposable$$$append(lastTasks, scheduler.scheduleTask(0, 0, -1, task));
    };

    const subscription = o.Subscribe({
      OnNext(e) {
        asap(Extensions$$$S.propagateEventTask(e, sink));
      },

      OnCompleted() {
        asap(Extensions$$$S.propagateEndTask(sink));
      },

      OnError(error) {
        const error$$1 = new Error(error.message);
        asap(Extensions$$$S.propagateErrorTask(error$$1, sink));
      }

    });
    return Disposable$$$return$0027(function () {
      subscription.Dispose();
      lastTasks.dispose();
    });
  });
}