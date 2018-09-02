import { toConsole, printf } from "./fable-core.2.0.0-beta-003/String";
import { IExports$002Edrain$$Z57BFC98E as IExports$0024002Edrain$0024$0024Z57BFC98E, S } from "./most";
IExports$0024002Edrain$0024$0024Z57BFC98E(S, S.takeWhile(function (y$$2) {
  return 0 < y$$2;
}, S.tap(function (arg10$$5) {
  toConsole(printf("%d"))(arg10$$5);
}, S.tap(function (arg00$$4) {
  console.log(arg00$$4);
}, S.map(function (y$$1) {
  return 10 - y$$1;
}, S.scan(function (x, y) {
  return x + y;
}, 0, S.constant(1, S.periodic(1000))))))));