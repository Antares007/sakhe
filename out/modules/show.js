import Event$ from "./fable-core.2.0.0-beta-003/Event";
import { IObservable$00601$002Eget_toStream as IObservable$002400601$0024002Eget_toStream, Extensions$$$S as Extensions$0024$0024$0024S, Extensions$$$defaultScheduler as Extensions$0024$0024$0024defaultScheduler } from "./most";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
export const e = new Event$();
export function drain(sink, s) {
  return Extensions$0024$0024$0024S.run(sink, Extensions$0024$0024$0024defaultScheduler, s);
}
console.log("trigger");
export const disposable = drain({
  event(t, e$$1) {
    toConsole(printf("event: %f %d"))(t)(e$$1);
  },

  end(t$$1) {
    toConsole(printf("end: %f"))(t$$1);
  },

  error(t$$2, error) {
    toConsole(printf("end: %f %A"))(t$$2)(error);
  }

}, Extensions$0024$0024$0024S.tap(function (arg10$$2) {
  toConsole(printf("tap: %d"))(arg10$$2);
}, IObservable$002400601$0024002Eget_toStream(e.Publish)));
e.Trigger(42);
console.log("triggered");