import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { append as append$$1 } from "./disposable";
export const On$00601 = declare(function On$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const T$00601 = declare(function T$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function return$0027(f) {
  return new T$00601(0, "T", f);
}
export function map(f$$1, _arg1) {
  const g = _arg1.fields[0];
  return new T$00601(0, "T", function (_arg2) {
    if (_arg2.tag === 1) {
      const err = _arg2.fields[1];
      const a$$1 = _arg2.fields[0];
      return g(new On$00601(1, "Exn", f$$1(a$$1), err));
    } else {
      const a = _arg2.fields[0];
      return g(new On$00601(0, "Run", f$$1(a)));
    }
  });
}
export function run(_arg1$$1) {
  const g$$1 = _arg1$$1.fields[0];

  try {
    return g$$1(new On$00601(0, "Run", null));
  } catch (err$$1) {
    return g$$1(new On$00601(1, "Exn", null, err$$1));
  }
}
export function append(l, r) {
  return new T$00601(0, "T", function (_arg1$$2) {
    var r$$1, l$$1, d, d$$1;

    if (_arg1$$2.tag === 1) {
      return null;
    } else {
      const matchValue = [run(l), run(r)];
      return matchValue[0] != null ? matchValue[1] != null ? (r$$1 = matchValue[1], l$$1 = matchValue[0], append$$1(l$$1, r$$1)) : (d = matchValue[0], d) : matchValue[1] != null ? (d$$1 = matchValue[1], d$$1) : null;
    }
  });
}
export function deferRun(t) {
  return Promise.resolve(t).then(run);
}