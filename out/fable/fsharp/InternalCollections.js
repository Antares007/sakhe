"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgedLookup$00603$$$$002Ector$$6CA80EF0 = AgedLookup$00603$$$$002Ector$$6CA80EF0;
exports.AgedLookup$00603$$TryPeekKeyValue$$5BDDA1 = AgedLookup$00603$$TryPeekKeyValue$$5BDDA1;
exports.AgedLookup$00603$$TryGetKeyValue$$5BDDA1 = AgedLookup$00603$$TryGetKeyValue$$5BDDA1;
exports.AgedLookup$00603$$TryGet$$5BDDA1 = AgedLookup$00603$$TryGet$$5BDDA1;
exports.AgedLookup$00603$$Put$$BD52456 = AgedLookup$00603$$Put$$BD52456;
exports.AgedLookup$00603$$Remove$$5BDDA1 = AgedLookup$00603$$Remove$$5BDDA1;
exports.AgedLookup$00603$$Clear$$2B595 = AgedLookup$00603$$Clear$$2B595;
exports.AgedLookup$00603$$Resize$$6E7F0420 = AgedLookup$00603$$Resize$$6E7F0420;
exports.MruCache$00603$$$$002Ector$$Z465B8AD = MruCache$00603$$$$002Ector$$Z465B8AD;
exports.MruCache$00603$$ContainsSimilarKey$$5BDDA1 = MruCache$00603$$ContainsSimilarKey$$5BDDA1;
exports.MruCache$00603$$TryGetAny$$5BDDA1 = MruCache$00603$$TryGetAny$$5BDDA1;
exports.MruCache$00603$$TryGet$$5BDDA1 = MruCache$00603$$TryGet$$5BDDA1;
exports.MruCache$00603$$Set$$BD52456 = MruCache$00603$$Set$$BD52456;
exports.MruCache$00603$$RemoveAnySimilar$$5BDDA1 = MruCache$00603$$RemoveAnySimilar$$5BDDA1;
exports.MruCache$00603$$Clear$$2B595 = MruCache$00603$$Clear$$2B595;
exports.MruCache$00603$$Resize$$6E7F0420 = MruCache$00603$$Resize$$6E7F0420;
exports.MruCache$00603 = exports.AgedLookup$00603 = exports.ValueStrength$00601 = void 0;

var _Types = require("../fable-core.2.0.3/Types");

var _Option = require("../fable-core.2.0.3/Option");

var _Util = require("../fable-core.2.0.3/Util");

var _List = require("../fable-core.2.0.3/List");

var _adapters = require("../fcs-fable/adapters");

var _Seq = require("../fable-core.2.0.3/Seq");

const ValueStrength$00601 = (0, _Types.declare)(function ValueStrength$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValueStrength$00601 = ValueStrength$00601;
const AgedLookup$00603 = (0, _Types.declare)(function AgedLookup$00603(keepStrongly, areSimilar, requiredToKeep, onStrongDiscard, keepMax) {
  const $this$$1 = this;
  $this$$1.areSimilar = areSimilar;
  $this$$1.onStrongDiscard = onStrongDiscard;
  $this$$1.refs = (0, _Types.L)();
  $this$$1["keepStrongly@25"] = keepStrongly;
  const keepMax$$1 = (0, _Option.defaultArg)(keepMax, 75) | 0;
  $this$$1["keepMax@36-1"] = (0, _Util.max)(_Util.comparePrimitives, $this$$1["keepStrongly@25"], keepMax$$1);
  $this$$1["requiredToKeep@37"] = (0, _Option.defaultArg)(requiredToKeep, function (_arg1) {
    return false;
  });
});
exports.AgedLookup$00603 = AgedLookup$00603;

function AgedLookup$00603$$$$002Ector$$6CA80EF0(keepStrongly, areSimilar, requiredToKeep, onStrongDiscard, keepMax) {
  return this != null ? AgedLookup$00603.call(this, keepStrongly, areSimilar, requiredToKeep, onStrongDiscard, keepMax) : new AgedLookup$00603(keepStrongly, areSimilar, requiredToKeep, onStrongDiscard, keepMax);
}

function AgedLookup$00603$$TryPeekKeyValue$$5BDDA1(al, tok, key) {
  const data = AgedLookup$00603$$FilterAndHold$$2B595(al, tok);
  return AgedLookup$00603$$TryPeekKeyValueImpl$$28597960(al, data, key);
}

function AgedLookup$00603$$TryGetKeyValue$$5BDDA1(al$$1, tok$$1, key$$1) {
  const data$$1 = AgedLookup$00603$$FilterAndHold$$2B595(al$$1, tok$$1);
  const patternInput = AgedLookup$00603$$TryGetKeyValueImpl$$28597960(al$$1, data$$1, key$$1);
  AgedLookup$00603$$AssignWithStrength$$Z4266466C(al$$1, tok$$1, patternInput[1], (0, _Types.L)());
  return patternInput[0];
}

function AgedLookup$00603$$TryGet$$5BDDA1(al$$2, tok$$2, key$$2) {
  const data$$2 = AgedLookup$00603$$FilterAndHold$$2B595(al$$2, tok$$2);
  const patternInput$$1 = AgedLookup$00603$$TryGetKeyValueImpl$$28597960(al$$2, data$$2, key$$2);
  AgedLookup$00603$$AssignWithStrength$$Z4266466C(al$$2, tok$$2, patternInput$$1[1], (0, _Types.L)());

  if (patternInput$$1[0] == null) {
    return null;
  } else {
    const value = patternInput$$1[0][1];
    return (0, _Option.some)(value);
  }
}

function AgedLookup$00603$$Put$$BD52456(al$$3, tok$$3, key$$3, value$$1) {
  const data$$3 = AgedLookup$00603$$FilterAndHold$$2B595(al$$3, tok$$3);
  const patternInput$$2 = AgedLookup$00603$$Exists$$28597960(al$$3, data$$3, key$$3) ? AgedLookup$00603$$RemoveImpl$$28597960(al$$3, data$$3, key$$3) : [data$$3, (0, _Types.L)()];
  const data$$5 = AgedLookup$00603$$Add$$50465C25(al$$3, patternInput$$2[0], key$$3, value$$1);
  AgedLookup$00603$$AssignWithStrength$$Z4266466C(al$$3, tok$$3, data$$5, patternInput$$2[1]);
}

function AgedLookup$00603$$Remove$$5BDDA1(al$$4, tok$$4, key$$4) {
  const data$$6 = AgedLookup$00603$$FilterAndHold$$2B595(al$$4, tok$$4);
  const patternInput$$3 = AgedLookup$00603$$RemoveImpl$$28597960(al$$4, data$$6, key$$4);
  AgedLookup$00603$$AssignWithStrength$$Z4266466C(al$$4, tok$$4, patternInput$$3[0], patternInput$$3[1]);
}

function AgedLookup$00603$$Clear$$2B595(al$$5, tok$$5) {
  const discards = AgedLookup$00603$$FilterAndHold$$2B595(al$$5, tok$$5);
  AgedLookup$00603$$AssignWithStrength$$Z4266466C(al$$5, tok$$5, (0, _Types.L)(), discards);
}

function AgedLookup$00603$$Resize$$6E7F0420(al$$6, tok$$6, newKeepStrongly, newKeepMax) {
  const newKeepMax$$1 = (0, _Option.defaultArg)(newKeepMax, 75) | 0;
  al$$6["keepStrongly@25"] = newKeepStrongly;
  al$$6["keepMax@36-1"] = (0, _Util.max)(_Util.comparePrimitives, newKeepStrongly, newKeepMax$$1);
  const keep = AgedLookup$00603$$FilterAndHold$$2B595(al$$6, tok$$6);
  AgedLookup$00603$$AssignWithStrength$$Z4266466C(al$$6, tok$$6, keep, (0, _Types.L)());
}

function AgedLookup$00603$$strongDiscard$$2B597(this$, x) {
  if (this$.onStrongDiscard != null) {
    const f = this$.onStrongDiscard;
    f(x);
  }
}

function AgedLookup$00603$$TryPeekKeyValueImpl$$28597960(this$$$1, data$$7, key$$5) {
  const Lookup = function Lookup(key$$6, _arg1$$1) {
    Lookup: while (true) {
      if (_arg1$$1.tail != null) {
        const value$$2 = _arg1$$1.head[1];
        const t = _arg1$$1.tail;
        const similarKey = _arg1$$1.head[0];

        if (this$$$1.areSimilar([key$$6, similarKey])) {
          return [similarKey, value$$2];
        } else {
          key$$6 = key$$6;
          _arg1$$1 = t;
          continue Lookup;
        }
      } else {
        return null;
      }
    }
  };

  return Lookup(key$$5, data$$7);
}

function AgedLookup$00603$$Exists$$28597960(this$$$2, data$$8, key$$7) {
  return AgedLookup$00603$$TryPeekKeyValueImpl$$28597960(this$$$2, data$$8, key$$7) != null;
}

function AgedLookup$00603$$Add$$50465C25(this$$$3, data$$9, key$$8, value$$3) {
  return (0, _List.append)(data$$9, (0, _Types.L)([key$$8, value$$3], (0, _Types.L)()));
}

function AgedLookup$00603$$Promote$$3388B065(this$$$4, data$$10, key$$9, value$$4) {
  return (0, _List.append)((0, _List.filter)(function predicate(tupledArg) {
    return !this$$$4.areSimilar([key$$9, tupledArg[0]]);
  }, data$$10), (0, _Types.L)([key$$9, value$$4], (0, _Types.L)()));
}

function AgedLookup$00603$$RemoveImpl$$28597960(this$$$5, data$$11, key$$10) {
  const patternInput$$4 = (0, _List.partition)(function predicate$$1(tupledArg$$1) {
    return this$$$5.areSimilar([key$$10, tupledArg$$1[0]]);
  }, data$$11);
  return [patternInput$$4[1], patternInput$$4[0]];
}

function AgedLookup$00603$$TryGetKeyValueImpl$$28597960(this$$$6, data$$12, key$$11) {
  const matchValue$$1 = AgedLookup$00603$$TryPeekKeyValueImpl$$28597960(this$$$6, data$$12, key$$11);

  if (matchValue$$1 == null) {
    return [null, data$$12];
  } else {
    const value$$5 = matchValue$$1[1];
    const similarKey$$3 = matchValue$$1[0];
    const result$$2 = matchValue$$1;
    return [result$$2, AgedLookup$00603$$Promote$$3388B065(this$$$6, data$$12, similarKey$$3, value$$5)];
  }
}

function AgedLookup$00603$$FilterAndHold$$2B595(this$$$7, tok$$7) {
  tok$$7;
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$2) {
      if (matchValue$$2[1].tag === 1) {
        const weakReference = matchValue$$2[1].fields[0];
        const matchValue$$3 = (0, _adapters.System$002EWeakReference$00601$$TryGetTarget)(weakReference);

        if (matchValue$$3[0]) {
          return (0, _Seq.singleton)([matchValue$$2[0], matchValue$$3[1]]);
        } else {
          return (0, _Seq.empty)();
        }
      } else {
        const value$$7 = matchValue$$2[1].fields[0];
        return (0, _Seq.singleton)([matchValue$$2[0], value$$7]);
      }
    }, this$$$7.refs);
  }));
}

function AgedLookup$00603$$AssignWithStrength$$Z4266466C(this$$$8, tok$$8, newdata$$4, discard1$$3) {
  const actualLength = (0, _List.length)(newdata$$4) | 0;
  const tossThreshold = (0, _Util.max)(_Util.comparePrimitives, 0, actualLength - this$$$8["keepMax@36-1"]) | 0;
  const weakThreshhold = (0, _Util.max)(_Util.comparePrimitives, 0, actualLength - this$$$8["keepStrongly@25"]) | 0;
  const newdata$$5 = (0, _List.mapIndexed)(function mapping(n, kv) {
    return [n, kv];
  }, newdata$$4);
  const patternInput$$5 = (0, _List.partition)(function predicate$$2(tupledArg$$2) {
    if (tupledArg$$2[0] >= tossThreshold) {
      return true;
    } else {
      return this$$$8["requiredToKeep@37"](tupledArg$$2[1][1]);
    }
  }, newdata$$5);
  const newdata$$7 = (0, _List.map)(function mapping$$1(tupledArg$$3) {
    let handle;

    if (tupledArg$$3[0] < weakThreshhold ? !this$$$8["requiredToKeep@37"](tupledArg$$3[1][1]) : false) {
      handle = new ValueStrength$00601(1, "Weak", (0, _adapters.System$002EWeakReference$00601$$$$002Ector$$2B595)(tupledArg$$3[1][1]));
    } else {
      handle = new ValueStrength$00601(0, "Strong", tupledArg$$3[1][1]);
    }

    return [tupledArg$$3[1][0], handle];
  }, patternInput$$5[0]);
  tok$$8;
  this$$$8.refs = newdata$$7;
  (0, _List.iterate)(function action($arg$$10) {
    AgedLookup$00603$$strongDiscard$$2B597(this$$$8, $arg$$10[1]);
  }, discard1$$3);
  (0, _List.iterate)(function action$$1($arg$$12) {
    AgedLookup$00603$$strongDiscard$$2B597(this$$$8, $arg$$12[1][1]);
  }, patternInput$$5[1]);
}

const MruCache$00603 = (0, _Types.declare)(function MruCache$00603(keepStrongly$$1, areSame, isStillValid, areSimilar$$1, requiredToKeep$$1, onStrongDiscard$$1, keepMax$$2) {
  const $this$$13 = this;
  $this$$13.areSame = areSame;
  const areSimilar$$2 = (0, _Option.defaultArg)(areSimilar$$1, $this$$13.areSame);
  $this$$13.cache = AgedLookup$00603$$$$002Ector$$6CA80EF0(keepStrongly$$1, areSimilar$$2, requiredToKeep$$1, onStrongDiscard$$1, keepMax$$2);
  $this$$13["isStillValid@173"] = (0, _Option.defaultArg)(isStillValid, function (_arg5) {
    return true;
  });
});
exports.MruCache$00603 = MruCache$00603;

function MruCache$00603$$$$002Ector$$Z465B8AD(keepStrongly$$1, areSame, isStillValid, areSimilar$$1, requiredToKeep$$1, onStrongDiscard$$1, keepMax$$2) {
  return this != null ? MruCache$00603.call(this, keepStrongly$$1, areSame, isStillValid, areSimilar$$1, requiredToKeep$$1, onStrongDiscard$$1, keepMax$$2) : new MruCache$00603(keepStrongly$$1, areSame, isStillValid, areSimilar$$1, requiredToKeep$$1, onStrongDiscard$$1, keepMax$$2);
}

function MruCache$00603$$ContainsSimilarKey$$5BDDA1(bc, tok$$9, key$$13) {
  const matchValue$$4 = AgedLookup$00603$$TryPeekKeyValue$$5BDDA1(bc.cache, tok$$9, key$$13);

  if (matchValue$$4 == null) {
    return false;
  } else {
    const _value = matchValue$$4[1];
    const _similarKey = matchValue$$4[0];
    return true;
  }
}

function MruCache$00603$$TryGetAny$$5BDDA1(bc$$1, tok$$10, key$$14) {
  const matchValue$$5 = AgedLookup$00603$$TryPeekKeyValue$$5BDDA1(bc$$1.cache, tok$$10, key$$14);

  if (matchValue$$5 == null) {
    return null;
  } else {
    const value$$9 = matchValue$$5[1];
    const similarKey$$4 = matchValue$$5[0];

    if (bc$$1.areSame([similarKey$$4, key$$14])) {
      return (0, _Option.some)(value$$9);
    } else {
      return null;
    }
  }
}

function MruCache$00603$$TryGet$$5BDDA1(bc$$2, tok$$11, key$$15) {
  const matchValue$$6 = AgedLookup$00603$$TryGetKeyValue$$5BDDA1(bc$$2.cache, tok$$11, key$$15);

  if (matchValue$$6 == null) {
    return null;
  } else {
    const value$$10 = matchValue$$6[1];
    const similarKey$$5 = matchValue$$6[0];

    if (bc$$2.areSame([similarKey$$5, key$$15]) ? bc$$2["isStillValid@173"]([key$$15, value$$10]) : false) {
      return (0, _Option.some)(value$$10);
    } else {
      return null;
    }
  }
}

function MruCache$00603$$Set$$BD52456(bc$$3, tok$$12, key$$16, value$$11) {
  AgedLookup$00603$$Put$$BD52456(bc$$3.cache, tok$$12, key$$16, value$$11);
}

function MruCache$00603$$RemoveAnySimilar$$5BDDA1(bc$$4, tok$$13, key$$17) {
  AgedLookup$00603$$Remove$$5BDDA1(bc$$4.cache, tok$$13, key$$17);
}

function MruCache$00603$$Clear$$2B595(bc$$5, tok$$14) {
  AgedLookup$00603$$Clear$$2B595(bc$$5.cache, tok$$14);
}

function MruCache$00603$$Resize$$6E7F0420(bc$$6, tok$$15, newKeepStrongly$$1, newKeepMax$$2) {
  AgedLookup$00603$$Resize$$6E7F0420(bc$$6.cache, tok$$15, newKeepStrongly$$1, newKeepMax$$2);
}