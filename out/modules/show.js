import Event$ from "./fable-core.2.0.0-beta-003/Event";
import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { IExports$002Edrain$$Z57BFC98E as IExports$0024002Edrain$0024$0024Z57BFC98E, Extensions$$$S as Extensions$0024$0024$0024S, IObservable$00601$002Eget_toStream as IObservable$002400601$0024002Eget_toStream } from "./most";
export const e = new Event$();
IExports$0024002Edrain$0024$0024Z57BFC98E(Extensions$0024$0024$0024S, Extensions$0024$0024$0024S.tap(function (arg10$$1) {
  toConsole(printf("%d"))(arg10$$1);
}, IObservable$002400601$0024002Eget_toStream(e.Publish)));
e.Trigger(42);
IExports$0024002Edrain$0024$0024Z57BFC98E(Extensions$0024$0024$0024S, Extensions$0024$0024$0024S.takeWhile(function (y$$2) {
  return 0 < y$$2;
}, Extensions$0024$0024$0024S.tap(function (arg10$$7) {
  toConsole(printf("%d"))(arg10$$7);
}, Extensions$0024$0024$0024S.tap(function (arg00$$6) {
  console.log(arg00$$6);
}, Extensions$0024$0024$0024S.map(function (y$$1) {
  return 10 - y$$1;
}, Extensions$0024$0024$0024S.scan(function (x, y) {
  return x + y;
}, 0, Extensions$0024$0024$0024S.constant(1, Extensions$0024$0024$0024S.periodic(1000))))))));