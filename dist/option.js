import { some, value } from "./fable-library.2.1.0-beta-006/Option";
export function mappend(mappend$$1, l, r) {
  const matchValue = [l, r];

  if (matchValue[0] != null) {
    if (matchValue[1] != null) {
      const l$$2 = value(matchValue[0]);
      const r$$2 = value(matchValue[1]);
      return some(mappend$$1(l$$2, r$$2));
    } else {
      const l$$1 = value(matchValue[0]);
      return some(l$$1);
    }
  } else if (matchValue[1] != null) {
    const r$$1 = value(matchValue[1]);
    return some(r$$1);
  } else {
    return null;
  }
}