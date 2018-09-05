import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
import { append } from "./disposable";
export const Action$00601 = declare(function Action$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Task$$$runTask(task) {
  try {
    task.run();
  } catch (err) {
    task.error(err);
  }
}
export function Task$$$defer(task$$1) {
  return Promise.resolve(task$$1).then(Task$$$runTask);
}
export const Task$002ET$00601 = declare(function Task$002ET$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Task$$$return$0027(f) {
  return new Task$002ET$00601(0, "T", f);
}
export function Task$$$map(f$$1, _arg1) {
  const g = _arg1.fields[0];
  return new Task$002ET$00601(0, "T", function (_arg2) {
    if (_arg2.tag === 1) {
      const err$$1 = _arg2.fields[1];
      const a$$1 = _arg2.fields[0];
      return g(new Action$00601(1, "Exn", f$$1(a$$1), err$$1));
    } else {
      const a = _arg2.fields[0];
      return g(new Action$00601(0, "Run", f$$1(a)));
    }
  });
}
export function Task$$$run(_arg1$$1) {
  const g$$1 = _arg1$$1.fields[0];

  try {
    return g$$1(new Action$00601(0, "Run", null));
  } catch (err$$2) {
    return g$$1(new Action$00601(1, "Exn", null, err$$2));
  }
}
export function Task$$$append(l, r) {
  return new Task$002ET$00601(0, "T", function (_arg1$$2) {
    var r$$1, l$$1, d, d$$1;

    if (_arg1$$2.tag === 1) {
      return null;
    } else {
      const matchValue = [Task$$$run(l), Task$$$run(r)];
      return matchValue[0] != null ? matchValue[1] != null ? (r$$1 = matchValue[1], l$$1 = matchValue[0], append(l$$1, r$$1)) : (d = matchValue[0], d) : matchValue[1] != null ? (d$$1 = matchValue[1], d$$1) : null;
    }
  });
}
export function Task$$$deferRun(t) {
  return Promise.resolve(t).then(Task$$$run);
}