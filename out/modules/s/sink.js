import { declare, Union } from "../fable-core.2.0.0-beta-003/Types";
export const On$00601 = declare(function On$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const T$00601 = declare(function T$00601(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function return$0027(f) {
  return new T$00601(0, "Sink", f);
}
export function map(f$$1, _arg1) {
  const g = _arg1.fields[0];
  return new T$00601(0, "Sink", function (_arg2) {
    switch (_arg2.tag) {
      case 1:
        {
          const t$$1 = _arg2.fields[0];
          g(new On$00601(1, "End", t$$1));
          break;
        }

      case 2:
        {
          const t$$2 = _arg2.fields[0];
          const err = _arg2.fields[1];
          g(new On$00601(2, "Error", t$$2, err));
          break;
        }

      default:
        {
          const t = _arg2.fields[0];
          const a = _arg2.fields[1];
          const $arg$$1 = [t, f$$1(a)];
          g(new On$00601(0, "Event", $arg$$1[0], $arg$$1[1]));
        }
    }
  });
}
export function event(t$$3, a$$1, _arg1$$1) {
  const g$$1 = _arg1$$1.fields[0];
  g$$1(new On$00601(0, "Event", t$$3, a$$1));
}
export function end$0027(t$$4, _arg1$$2) {
  const g$$2 = _arg1$$2.fields[0];
  g$$2(new On$00601(1, "End", t$$4));
}
export function error(t$$5, err$$1, _arg1$$3) {
  const g$$3 = _arg1$$3.fields[0];
  g$$3(new On$00601(2, "Error", t$$5, err$$1));
}