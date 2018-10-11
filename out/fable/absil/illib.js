"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.op_GreaterGreaterGreaterAmp = op_GreaterGreaterGreaterAmp;
exports.notlazy = notlazy;
exports.InlineDelayInit$00601$$$$002Ector$$9CB17FF = InlineDelayInit$00601$$$$002Ector$$9CB17FF;
exports.InlineDelayInit$00601$$get_Value = InlineDelayInit$00601$$get_Value;
exports.foldOn = foldOn;
exports.notFound = notFound;
exports.Order$$$orderBy = Order$$$orderBy;
exports.Order$$$orderOn = Order$$$orderOn;
exports.Order$$$toFunction = Order$$$toFunction;
exports.Array$$$mapq = Array$$$mapq;
exports.Array$$$lengthsEqAndForall2 = Array$$$lengthsEqAndForall2;
exports.Array$$$order = Array$$$order;
exports.Array$$$existsOne = Array$$$existsOne;
exports.Array$$$existsTrue = Array$$$existsTrue;
exports.Array$$$findFirstIndexWhereTrue = Array$$$findFirstIndexWhereTrue;
exports.Array$$$revInPlace = Array$$$revInPlace;
exports.Array$$$mapAsync = Array$$$mapAsync;
exports.Array$$$replace = Array$$$replace;
exports.Array$$$heads = Array$$$heads;
exports.Array$$$startsWith = Array$$$startsWith;
exports.Array$$$endsWith = Array$$$endsWith;
exports.Option$$$mapFold = Option$$$mapFold;
exports.Option$$$attempt = Option$$$attempt;
exports.List$$$sortWithOrder = List$$$sortWithOrder;
exports.List$$$splitAfter = List$$$splitAfter;
exports.List$$$existsi = List$$$existsi;
exports.List$$$existsTrue = List$$$existsTrue;
exports.List$$$lengthsEqAndForall2 = List$$$lengthsEqAndForall2;
exports.List$$$findi = List$$$findi;
exports.List$$$drop = List$$$drop;
exports.List$$$splitChoose = List$$$splitChoose;
exports.List$$$checkq = List$$$checkq;
exports.List$$$mapq = List$$$mapq;
exports.List$$$frontAndBack = List$$$frontAndBack;
exports.List$$$tryRemove = List$$$tryRemove;
exports.List$$$headAndTail = List$$$headAndTail;
exports.List$$$zip4 = List$$$zip4;
exports.List$$$unzip4 = List$$$unzip4;
exports.List$$$iter3 = List$$$iter3;
exports.List$$$takeUntil = List$$$takeUntil;
exports.List$$$order = List$$$order;
exports.List$002EFrontAndBack$$$$007CNonEmpty$007CEmpty$007C = List$002EFrontAndBack$$$$007CNonEmpty$007CEmpty$007C;
exports.List$$$range = List$$$range;
exports.List$$$indexNotFound = List$$$indexNotFound;
exports.List$$$assoc = List$$$assoc;
exports.List$$$memAssoc = List$$$memAssoc;
exports.List$$$memq = List$$$memq;
exports.List$$$mapNth = List$$$mapNth;
exports.List$$$count = List$$$count;
exports.List$$$mapHeadTail = List$$$mapHeadTail;
exports.List$$$collectFold = List$$$collectFold;
exports.List$$$collect2 = List$$$collect2;
exports.List$$$toArraySquared = List$$$toArraySquared;
exports.List$$$iterSquared = List$$$iterSquared;
exports.List$$$collectSquared = List$$$collectSquared;
exports.List$$$mapSquared = List$$$mapSquared;
exports.List$$$mapFoldSquared = List$$$mapFoldSquared;
exports.List$$$forallSquared = List$$$forallSquared;
exports.List$$$mapiSquared = List$$$mapiSquared;
exports.List$$$existsSquared = List$$$existsSquared;
exports.List$$$mapiFoldSquared = List$$$mapiFoldSquared;
exports.ValueOption$00601$$get_IsSome = ValueOption$00601$$get_IsSome;
exports.ValueOption$00601$$get_IsNone = ValueOption$00601$$get_IsNone;
exports.ValueOption$00601$$get_Value = ValueOption$00601$$get_Value;
exports.String$$$indexNotFound = String$$$indexNotFound;
exports.String$$$make = String$$$make;
exports.String$$$get = String$$$get;
exports.String$$$sub = String$$$sub;
exports.String$$$index = String$$$index;
exports.String$$$rindex = String$$$rindex;
exports.String$$$contains = String$$$contains;
exports.String$$$lowercase = String$$$lowercase;
exports.String$$$uppercase = String$$$uppercase;
exports.String$$$isUpper = String$$$isUpper;
exports.String$$$capitalize = String$$$capitalize;
exports.String$$$uncapitalize = String$$$uncapitalize;
exports.String$$$dropPrefix = String$$$dropPrefix;
exports.String$$$dropSuffix = String$$$dropSuffix;
exports.String$$$lowerCaseFirstChar = String$$$lowerCaseFirstChar;
exports.String$$$extractTrailingIndex = String$$$extractTrailingIndex;
exports.String$$$trim = String$$$trim;
exports.String$$$split = String$$$split;
exports.String$$$$007CStartsWith$007C_$007C = String$$$$007CStartsWith$007C_$007C;
exports.String$$$$007CContains$007C_$007C = String$$$$007CContains$007C_$007C;
exports.DictionaryExtensions$$$$002Ector = DictionaryExtensions$$$$002Ector;
exports.Lazy$$$force = Lazy$$$force;
exports.CompilationThreadToken$$$$002Ector = CompilationThreadToken$$$$002Ector;
exports.RequireCompilationThread = RequireCompilationThread;
exports.DoesNotRequireCompilerThreadTokenAndCouldPossiblyBeMadeConcurrent = DoesNotRequireCompilerThreadTokenAndCouldPossiblyBeMadeConcurrent;
exports.AssumeCompilationThreadWithoutEvidence = AssumeCompilationThreadWithoutEvidence;
exports.AnyCallerThreadToken$$$$002Ector = AnyCallerThreadToken$$$$002Ector;
exports.AssumeAnyCallerThreadWithoutEvidence = AssumeAnyCallerThreadWithoutEvidence;
exports.AssumeLockWithoutEvidence = AssumeLockWithoutEvidence;
exports.getHole = getHole;
exports.Map$$$tryFindMulti = Map$$$tryFindMulti;
exports.ResultOrExceptionModule$$$success = ResultOrExceptionModule$$$success;
exports.ResultOrExceptionModule$$$raze = ResultOrExceptionModule$$$raze;
exports.ResultOrExceptionModule$$$op_BarQmarkGreater = ResultOrExceptionModule$$$op_BarQmarkGreater;
exports.ResultOrExceptionModule$$$ForceRaise = ResultOrExceptionModule$$$ForceRaise;
exports.ResultOrExceptionModule$$$otherwise = ResultOrExceptionModule$$$otherwise;
exports.CancellableModule$$$run = CancellableModule$$$run;
exports.CancellableModule$$$bind = CancellableModule$$$bind;
exports.CancellableModule$$$map = CancellableModule$$$map;
exports.CancellableModule$$$ret = CancellableModule$$$ret;
exports.CancellableModule$$$fold = CancellableModule$$$fold;
exports.CancellableModule$$$each = CancellableModule$$$each;
exports.CancellableModule$$$delay = CancellableModule$$$delay;
exports.CancellableModule$$$runWithoutCancellation = CancellableModule$$$runWithoutCancellation;
exports.CancellableModule$$$token = CancellableModule$$$token;
exports.CancellableModule$$$canceled = CancellableModule$$$canceled;
exports.CancellableModule$$$tryFinally = CancellableModule$$$tryFinally;
exports.CancellableModule$$$tryWith = CancellableModule$$$tryWith;
exports.CancellableBuilder$$$$002Ector = CancellableBuilder$$$$002Ector;
exports.CancellableBuilder$$Bind$$81B0433 = CancellableBuilder$$Bind$$81B0433;
exports.CancellableBuilder$$Return$$1505 = CancellableBuilder$$Return$$1505;
exports.CancellableBuilder$$ReturnFrom$$1505 = CancellableBuilder$$ReturnFrom$$1505;
exports.CancellableBuilder$$Combine$$Z370E1C61 = CancellableBuilder$$Combine$$Z370E1C61;
exports.CancellableBuilder$$TryWith$$36E21CF = CancellableBuilder$$TryWith$$36E21CF;
exports.CancellableBuilder$$Using$$Z52E1FC8A = CancellableBuilder$$Using$$Z52E1FC8A;
exports.CancellableBuilder$$TryFinally$$Z60A3294A = CancellableBuilder$$TryFinally$$Z60A3294A;
exports.CancellableBuilder$$Delay$$1F7AD5CA = CancellableBuilder$$Delay$$1F7AD5CA;
exports.CancellableBuilder$$Zero = CancellableBuilder$$Zero;
exports.EventuallyModule$$$box = EventuallyModule$$$box;
exports.EventuallyModule$$$forceWhile = EventuallyModule$$$forceWhile;
exports.EventuallyModule$$$force = EventuallyModule$$$force;
exports.EventuallyModule$$$bind = EventuallyModule$$$bind;
exports.EventuallyModule$$$fold = EventuallyModule$$$fold;
exports.EventuallyModule$$$catch = EventuallyModule$$$catch;
exports.EventuallyModule$$$delay = EventuallyModule$$$delay;
exports.EventuallyModule$$$tryFinally = EventuallyModule$$$tryFinally;
exports.EventuallyModule$$$tryWith = EventuallyModule$$$tryWith;
exports.EventuallyBuilder$$$$002Ector = EventuallyBuilder$$$$002Ector;
exports.EventuallyBuilder$$Bind$$11F6F5F3 = EventuallyBuilder$$Bind$$11F6F5F3;
exports.EventuallyBuilder$$Return$$1505 = EventuallyBuilder$$Return$$1505;
exports.EventuallyBuilder$$ReturnFrom$$1505 = EventuallyBuilder$$ReturnFrom$$1505;
exports.EventuallyBuilder$$Combine$$7DDFD27F = EventuallyBuilder$$Combine$$7DDFD27F;
exports.EventuallyBuilder$$TryWith$$2B3CF8F = EventuallyBuilder$$TryWith$$2B3CF8F;
exports.EventuallyBuilder$$TryFinally$$Z23B895E9 = EventuallyBuilder$$TryFinally$$Z23B895E9;
exports.EventuallyBuilder$$Delay$$5AC0008B = EventuallyBuilder$$Delay$$5AC0008B;
exports.EventuallyBuilder$$Zero = EventuallyBuilder$$Zero;
exports.UniqueStampGenerator$00601$$$$002Ector = UniqueStampGenerator$00601$$$$002Ector;
exports.UniqueStampGenerator$00601$$Encode$$2B595 = UniqueStampGenerator$00601$$Encode$$2B595;
exports.UniqueStampGenerator$00601$$get_Table = UniqueStampGenerator$00601$$get_Table;
exports.MemoizationTable$00602$$$$002Ector$$Z1CDD427E = MemoizationTable$00602$$$$002Ector$$Z1CDD427E;
exports.MemoizationTable$00602$$Apply$$2B595 = MemoizationTable$00602$$Apply$$2B595;
exports.LazyWithContextFailure$$$$002Ector$$229D3F39 = LazyWithContextFailure$$$$002Ector$$229D3F39;
exports.LazyWithContextFailure$$get_Exception = LazyWithContextFailure$$get_Exception;
exports.LazyWithContextFailure$$$get_Undefined = LazyWithContextFailure$$$get_Undefined;
exports.LazyWithContext$00602$$$Create$$4F384A61 = LazyWithContext$00602$$$Create$$4F384A61;
exports.LazyWithContext$00602$$$NotLazy$$2B595 = LazyWithContext$00602$$$NotLazy$$2B595;
exports.LazyWithContext$00602$$get_IsDelayed = LazyWithContext$00602$$get_IsDelayed;
exports.LazyWithContext$00602$$get_IsForced = LazyWithContext$00602$$get_IsForced;
exports.LazyWithContext$00602$$Force$$2B594 = LazyWithContext$00602$$Force$$2B594;
exports.LazyWithContext$00602$$UnsynchronizedForce$$2B594 = LazyWithContext$00602$$UnsynchronizedForce$$2B594;
exports.Tables$$$memoize = Tables$$$memoize;
exports.IPartialEqualityComparer$$$On = IPartialEqualityComparer$$$On;
exports.IPartialEqualityComparer$$$partialDistinctBy = IPartialEqualityComparer$$$partialDistinctBy;
exports.NameMapModule$$$empty = NameMapModule$$$empty;
exports.NameMapModule$$$range = NameMapModule$$$range;
exports.NameMapModule$$$foldBack = NameMapModule$$$foldBack;
exports.NameMapModule$$$forall = NameMapModule$$$forall;
exports.NameMapModule$$$exists = NameMapModule$$$exists;
exports.NameMapModule$$$ofKeyedList = NameMapModule$$$ofKeyedList;
exports.NameMapModule$$$ofList = NameMapModule$$$ofList;
exports.NameMapModule$$$ofSeq = NameMapModule$$$ofSeq;
exports.NameMapModule$$$toList = NameMapModule$$$toList;
exports.NameMapModule$$$layer = NameMapModule$$$layer;
exports.NameMapModule$$$layerAdditive = NameMapModule$$$layerAdditive;
exports.NameMapModule$$$union = NameMapModule$$$union;
exports.NameMapModule$$$subfold2 = NameMapModule$$$subfold2;
exports.NameMapModule$$$suball2 = NameMapModule$$$suball2;
exports.NameMapModule$$$mapFold = NameMapModule$$$mapFold;
exports.NameMapModule$$$foldBackRange = NameMapModule$$$foldBackRange;
exports.NameMapModule$$$filterRange = NameMapModule$$$filterRange;
exports.NameMapModule$$$mapFilter = NameMapModule$$$mapFilter;
exports.NameMapModule$$$map = NameMapModule$$$map;
exports.NameMapModule$$$iter = NameMapModule$$$iter;
exports.NameMapModule$$$partition = NameMapModule$$$partition;
exports.NameMapModule$$$mem = NameMapModule$$$mem;
exports.NameMapModule$$$find = NameMapModule$$$find;
exports.NameMapModule$$$tryFind = NameMapModule$$$tryFind;
exports.NameMapModule$$$add = NameMapModule$$$add;
exports.NameMapModule$$$isEmpty = NameMapModule$$$isEmpty;
exports.NameMapModule$$$existsInRange = NameMapModule$$$existsInRange;
exports.NameMapModule$$$tryFindInRange = NameMapModule$$$tryFindInRange;
exports.NameMultiMapModule$$$existsInRange = NameMultiMapModule$$$existsInRange;
exports.NameMultiMapModule$$$find = NameMultiMapModule$$$find;
exports.NameMultiMapModule$$$add = NameMultiMapModule$$$add;
exports.NameMultiMapModule$$$range = NameMultiMapModule$$$range;
exports.NameMultiMapModule$$$rangeReversingEachBucket = NameMultiMapModule$$$rangeReversingEachBucket;
exports.NameMultiMapModule$$$chooseRange = NameMultiMapModule$$$chooseRange;
exports.NameMultiMapModule$$$map = NameMultiMapModule$$$map;
exports.NameMultiMapModule$$$empty = NameMultiMapModule$$$empty;
exports.NameMultiMapModule$$$initBy = NameMultiMapModule$$$initBy;
exports.NameMultiMapModule$$$ofList = NameMultiMapModule$$$ofList;
exports.MultiMapModule$$$existsInRange = MultiMapModule$$$existsInRange;
exports.MultiMapModule$$$find = MultiMapModule$$$find;
exports.MultiMapModule$$$add = MultiMapModule$$$add;
exports.MultiMapModule$$$range = MultiMapModule$$$range;
exports.MultiMapModule$$$empty = MultiMapModule$$$empty;
exports.MultiMapModule$$$initBy = MultiMapModule$$$initBy;
exports.Map$00602$002Eget_Empty$002EStatic = Map$00602$002Eget_Empty$002EStatic;
exports.Map$00602$002ETryGetValue$$1505 = Map$00602$002ETryGetValue$$1505;
exports.Map$00602$002Eget_Values = Map$00602$002Eget_Values;
exports.Map$00602$002EAddAndMarkAsCollapsible$$3209D872 = Map$00602$002EAddAndMarkAsCollapsible$$3209D872;
exports.Map$00602$002ELinearTryModifyThenLaterFlatten$$Z723919C0 = Map$00602$002ELinearTryModifyThenLaterFlatten$$Z723919C0;
exports.Map$00602$002EMarkAsCollapsible = Map$00602$002EMarkAsCollapsible;
exports.LayeredMultiMap$00602$$$$002Ector$$Z69A679EB = LayeredMultiMap$00602$$$$002Ector$$Z69A679EB;
exports.LayeredMultiMap$00602$$Add$$5BDDA1 = LayeredMultiMap$00602$$Add$$5BDDA1;
exports.LayeredMultiMap$00602$$get_Item$$2B595 = LayeredMultiMap$00602$$get_Item$$2B595;
exports.LayeredMultiMap$00602$$AddAndMarkAsCollapsible$$Z1EDC52D = LayeredMultiMap$00602$$AddAndMarkAsCollapsible$$Z1EDC52D;
exports.LayeredMultiMap$00602$$MarkAsCollapsible = LayeredMultiMap$00602$$MarkAsCollapsible;
exports.LayeredMultiMap$00602$$TryFind$$2B595 = LayeredMultiMap$00602$$TryFind$$2B595;
exports.LayeredMultiMap$00602$$get_Values = LayeredMultiMap$00602$$get_Values;
exports.LayeredMultiMap$00602$$$get_Empty = LayeredMultiMap$00602$$$get_Empty;
exports.Shim$002EDefaultFileSystem$$$$002Ector = Shim$002EDefaultFileSystem$$$$002Ector;
exports.Shim$$$FileSystem = exports.Shim$002EDefaultFileSystem = exports.LayeredMultiMap$00602 = exports.LazyWithContext$00602 = exports.LazyWithContextFailure = exports.UndefinedException = exports.MemoizationTable$00602 = exports.UniqueStampGenerator$00601 = exports.eventually = exports.EventuallyBuilder = exports.EventuallyModule$$$token = exports.Eventually$00601 = exports.cancellable = exports.CancellableBuilder = exports.Cancellable$00601 = exports.ValueOrCancelled$00601 = exports.ResultOrException$00601 = exports.AnyCallerThreadToken = exports.CompilationThreadToken = exports.DictionaryExtensions = exports.String$$$order = exports.ValueOption$00601 = exports.InlineDelayInit$00601 = void 0;

var _Util = require("../fable-core.2.0.3/Util");

var _Types = require("../fable-core.2.0.3/Types");

var _Array = require("../fable-core.2.0.3/Array");

var _AsyncBuilder = require("../fable-core.2.0.3/AsyncBuilder");

var _Seq = require("../fable-core.2.0.3/Seq");

var _Option = require("../fable-core.2.0.3/Option");

var _List = require("../fable-core.2.0.3/List");

var _FSharp = require("../fable-core.2.0.3/FSharp.Core");

var _Char = require("../fable-core.2.0.3/Char");

var _String = require("../fable-core.2.0.3/String");

var _Int = require("../fable-core.2.0.3/Int32");

var _Map = require("../fable-core.2.0.3/Map");

var _Async = require("../fable-core.2.0.3/Async");

var _FSharp2 = require("../fable-core.2.0.3/FSharp.Collections");

var _adapters = require("../fcs-fable/adapters");

function op_GreaterGreaterGreaterAmp(x, n) {
  return ~~(x >>> 0 >>> n);
}

function notlazy(v) {
  return (0, _Util.lazyFromValue)(v);
}

const InlineDelayInit$00601 = (0, _Types.declare)(function InlineDelayInit$00601(f) {
  const $this$$1 = this;
  $this$$1.store = new _Util.Lazy(function () {
    return f();
  });
});
exports.InlineDelayInit$00601 = InlineDelayInit$00601;

function InlineDelayInit$00601$$$$002Ector$$9CB17FF(f) {
  return this != null ? InlineDelayInit$00601.call(this, f) : new InlineDelayInit$00601(f);
}

function InlineDelayInit$00601$$get_Value(x$$1) {
  return x$$1.store.Value;
}

function foldOn(p, f$$1, z, x$$2) {
  return f$$1(z, p(x$$2));
}

function notFound() {
  throw new Error();
}

function Order$$$orderBy(p$$1) {
  return {
    Compare(x$$3, xx) {
      return (0, _Util.compare)(p$$1(x$$3), p$$1(xx));
    }

  };
}

function Order$$$orderOn(p$$2, pxOrder) {
  return {
    Compare(x$$4, xx$$1) {
      return pxOrder.Compare(p$$2(x$$4), p$$2(xx$$1));
    }

  };
}

function Order$$$toFunction(pxOrder$$1, x$$5, y) {
  return pxOrder$$1.Compare(x$$5, y);
}

function Array$$$mapq(f$$2, inp) {
  if (!(0, _Array.equalsWith)(_Util.compare, inp, null) ? inp.length === 0 : false) {
    return inp;
  } else {
    const res = (0, _Array.map)(f$$2, inp, Array);
    const len = inp.length | 0;
    let eq = true;
    let i = 0;

    while (eq ? i < len : false) {
      if (!(inp[i] === res[i])) {
        eq = false;
      }

      i = i + 1;
    }

    if (eq) {
      return inp;
    } else {
      return res;
    }
  }
}

function Array$$$lengthsEqAndForall2(p$$3, l1, l2) {
  if (l1.length === l2.length) {
    return (0, _Array.forAll2)(p$$3, l1, l2);
  } else {
    return false;
  }
}

function Array$$$order(eltOrder) {
  return {
    Compare(xs, ys) {
      const c = (0, _Util.comparePrimitives)(xs.length, ys.length) | 0;

      if (c !== 0) {
        return c | 0;
      } else {
        const loop = function loop(i$$1) {
          loop: while (true) {
            if (i$$1 >= xs.length) {
              return 0;
            } else {
              const c$$1 = eltOrder.Compare(xs[i$$1], ys[i$$1]) | 0;

              if (c$$1 !== 0) {
                return c$$1 | 0;
              } else {
                i$$1 = i$$1 + 1;
                continue loop;
              }
            }
          }
        };

        return loop(0) | 0;
      }
    }

  };
}

function Array$$$existsOne(p$$4, l) {
  const forallFrom = function forallFrom($arg$$96, $arg$$97, $arg$$98) {
    forallFrom: while (true) {
      const p$$5 = $arg$$96,
            l$$1 = $arg$$97,
            n$$1 = $arg$$98;

      if (n$$1 >= l$$1.length) {
        return true;
      } else if (p$$5(l$$1[n$$1])) {
        $arg$$96 = p$$5;
        $arg$$97 = l$$1;
        $arg$$98 = n$$1 + 1;
        continue forallFrom;
      } else {
        return false;
      }
    }
  };

  const loop$$1 = function loop$$1($arg$$99, $arg$$100, $arg$$101) {
    loop$$1: while (true) {
      const p$$6 = $arg$$99,
            l$$2 = $arg$$100,
            n$$2 = $arg$$101;

      if (n$$2 < l$$2.length) {
        if (p$$6(l$$2[n$$2])) {
          return forallFrom(function (x$$7) {
            return !p$$6(x$$7);
          }, l$$2, n$$2 + 1);
        } else {
          $arg$$99 = p$$6;
          $arg$$100 = l$$2;
          $arg$$101 = n$$2 + 1;
          continue loop$$1;
        }
      } else {
        return false;
      }
    }
  };

  return loop$$1(p$$4, l, 0);
}

function Array$$$existsTrue(arr) {
  const loop$$2 = function loop$$2(n$$3) {
    loop$$2: while (true) {
      if (n$$3 < arr.length) {
        if (arr[n$$3]) {
          return true;
        } else {
          n$$3 = n$$3 + 1;
          continue loop$$2;
        }
      } else {
        return false;
      }
    }
  };

  return loop$$2(0);
}

function Array$$$findFirstIndexWhereTrue(arr$$1, p$$7) {
  const look = function look(lo, hi) {
    look: while (true) {
      if (lo === hi) {
        return lo | 0;
      } else {
        const i$$2 = ~~((lo + hi) / 2) | 0;

        if (p$$7(arr$$1[i$$2])) {
          if (i$$2 === 0) {
            return i$$2 | 0;
          } else if (p$$7(arr$$1[i$$2 - 1])) {
            lo = lo;
            hi = i$$2;
            continue look;
          } else {
            return i$$2 | 0;
          }
        } else {
          lo = i$$2 + 1;
          hi = hi;
          continue look;
        }
      }
    }
  };

  return look(0, arr$$1.length) | 0;
}

function Array$$$revInPlace(array) {
  if (array.length === 0) {} else {
    const patternInput = [array.length - 1, ~~(array.length / 2) - 1];

    for (let idx = 0; idx <= patternInput[1]; idx++) {
      const t1 = array[idx];
      const t2 = array[patternInput[0] - idx];
      array[idx] = t2;
      array[patternInput[0] - idx] = t1;
    }
  }
}

function Array$$$mapAsync(mapping, array$$1) {
  const len$$1 = array$$1.length | 0;
  const result = (0, _Array.fill)(new Array(len$$1), 0, len$$1, null);
  const builder$0040 = _AsyncBuilder.singleton;
  return builder$0040.Delay(function () {
    return builder$0040.Combine(builder$0040.For((0, _Seq.rangeNumber)(0, 1, len$$1 - 1), function (_arg1) {
      const i$$3 = _arg1 | 0;
      return builder$0040.Bind(mapping(array$$1[i$$3]), function (_arg2) {
        const mappedValue = _arg2;
        result[i$$3] = mappedValue;
        return builder$0040.Zero();
      });
    }), builder$0040.Delay(function () {
      return builder$0040.Return(result);
    }));
  });
}

function Array$$$replace(index, value, array$$2) {
  if (index >= array$$2.length) {
    throw new Error("index");
  }

  const res$$1 = (0, _Array.copy)(array$$2, Array);
  res$$1[index] = value;
  return res$$1;
}

function Array$$$heads(array$$3) {
  const res$$2 = (0, _Array.fill)(new Array(array$$3.length), 0, array$$3.length, null);

  for (let i$$4 = array$$3.length - 1; i$$4 >= 0; i$$4--) {
    res$$2[i$$4] = array$$3.slice(0, i$$4 + 1);
  }

  return res$$2;
}

function Array$$$startsWith(prefix, whole) {
  if (prefix == null ? true : whole == null) {
    return false;
  } else if (prefix.length === 0) {
    return true;
  } else if (prefix.length > whole.length) {
    return false;
  } else if (prefix.length === whole.length) {
    const matchValue = [prefix, whole];
    var $target$$106;

    if ((0, _Array.equalsWith)(_Util.compare, matchValue[0], null)) {
      if ((0, _Array.equalsWith)(_Util.compare, matchValue[1], null)) {
        $target$$106 = 0;
      } else if (!(0, _Array.equalsWith)(_Util.compare, matchValue[0], null) ? matchValue[0].length === 0 : false) {
        if (!(0, _Array.equalsWith)(_Util.compare, matchValue[1], null) ? matchValue[1].length === 0 : false) {
          $target$$106 = 1;
        } else {
          $target$$106 = 2;
        }
      } else {
        $target$$106 = 2;
      }
    } else if (!(0, _Array.equalsWith)(_Util.compare, matchValue[0], null) ? matchValue[0].length === 0 : false) {
      if (!(0, _Array.equalsWith)(_Util.compare, matchValue[1], null) ? matchValue[1].length === 0 : false) {
        $target$$106 = 1;
      } else if ((0, _Array.equalsWith)(_Util.compare, matchValue[1], null)) {
        $target$$106 = 2;
      } else if (prefix.length !== whole.length) {
        $target$$106 = 3;
      } else {
        $target$$106 = 4;
      }
    } else if ((0, _Array.equalsWith)(_Util.compare, matchValue[1], null)) {
      $target$$106 = 2;
    } else if (prefix.length !== whole.length) {
      $target$$106 = 3;
    } else {
      $target$$106 = 4;
    }

    switch ($target$$106) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          return false;
        }

      case 3:
        {
          return false;
        }

      case 4:
        {
          let break$0027 = false;
          let i$$5 = 0;
          let result$$1 = true;

          while (i$$5 < prefix.length ? !break$0027 : false) {
            if (!(0, _Util.equals)(prefix[i$$5], whole[i$$5])) {
              break$0027 = true;
              result$$1 = false;
            }

            i$$5 = i$$5 + 1;
          }

          return result$$1;
        }
    }
  } else {
    const loop$$3 = function loop$$3(subidx, idx$$1) {
      loop$$3: while (true) {
        if (subidx === prefix.length) {
          return true;
        } else if ((0, _Util.equals)(prefix[subidx], whole[idx$$1])) {
          subidx = subidx + 1;
          idx$$1 = idx$$1 + 1;
          continue loop$$3;
        } else {
          return false;
        }
      }
    };

    return loop$$3(0, 0);
  }
}

function Array$$$endsWith(suffix, whole$$1) {
  if (suffix == null ? true : whole$$1 == null) {
    return false;
  } else if (suffix.length === 0) {
    return true;
  } else if (suffix.length > whole$$1.length) {
    return false;
  } else if (suffix.length === whole$$1.length) {
    const matchValue$$1 = [suffix, whole$$1];
    var $target$$107;

    if ((0, _Array.equalsWith)(_Util.compare, matchValue$$1[0], null)) {
      if ((0, _Array.equalsWith)(_Util.compare, matchValue$$1[1], null)) {
        $target$$107 = 0;
      } else if (!(0, _Array.equalsWith)(_Util.compare, matchValue$$1[0], null) ? matchValue$$1[0].length === 0 : false) {
        if (!(0, _Array.equalsWith)(_Util.compare, matchValue$$1[1], null) ? matchValue$$1[1].length === 0 : false) {
          $target$$107 = 1;
        } else {
          $target$$107 = 2;
        }
      } else {
        $target$$107 = 2;
      }
    } else if (!(0, _Array.equalsWith)(_Util.compare, matchValue$$1[0], null) ? matchValue$$1[0].length === 0 : false) {
      if (!(0, _Array.equalsWith)(_Util.compare, matchValue$$1[1], null) ? matchValue$$1[1].length === 0 : false) {
        $target$$107 = 1;
      } else if ((0, _Array.equalsWith)(_Util.compare, matchValue$$1[1], null)) {
        $target$$107 = 2;
      } else if (suffix.length !== whole$$1.length) {
        $target$$107 = 3;
      } else {
        $target$$107 = 4;
      }
    } else if ((0, _Array.equalsWith)(_Util.compare, matchValue$$1[1], null)) {
      $target$$107 = 2;
    } else if (suffix.length !== whole$$1.length) {
      $target$$107 = 3;
    } else {
      $target$$107 = 4;
    }

    switch ($target$$107) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return true;
        }

      case 2:
        {
          return false;
        }

      case 3:
        {
          return false;
        }

      case 4:
        {
          let break$0027$$1 = false;
          let i$$6 = 0;
          let result$$2 = true;

          while (i$$6 < suffix.length ? !break$0027$$1 : false) {
            if (!(0, _Util.equals)(suffix[i$$6], whole$$1[i$$6])) {
              break$0027$$1 = true;
              result$$2 = false;
            }

            i$$6 = i$$6 + 1;
          }

          return result$$2;
        }
    }
  } else {
    const loop$$4 = function loop$$4(subidx$$1, idx$$2) {
      loop$$4: while (true) {
        if (subidx$$1 === suffix.length) {
          return true;
        } else if ((0, _Util.equals)(suffix[subidx$$1], whole$$1[idx$$2])) {
          subidx$$1 = subidx$$1 + 1;
          idx$$2 = idx$$2 + 1;
          continue loop$$4;
        } else {
          return false;
        }
      }
    };

    return loop$$4(0, whole$$1.length - suffix.length);
  }
}

function Option$$$mapFold(f$$3, s, opt) {
  if (opt != null) {
    const x$$8 = (0, _Option.value)(opt);
    const patternInput$$1 = f$$3(s, x$$8);
    return [(0, _Option.some)(patternInput$$1[0]), patternInput$$1[1]];
  } else {
    return [null, s];
  }
}

function Option$$$attempt(f$$4) {
  try {
    return (0, _Option.some)(f$$4());
  } catch (matchValue$$2) {
    return null;
  }
}

function List$$$sortWithOrder(c$$2, elements) {
  return (0, _List.sortWith)(function (x$$9, y$$2) {
    return Order$$$toFunction(c$$2, x$$9, y$$2);
  }, elements);
}

function List$$$splitAfter(n$$4, l$$3) {
  const split_after_acc = function split_after_acc(n$$5, l1$$1, l2$$1) {
    split_after_acc: while (true) {
      if (n$$5 <= 0) {
        return [(0, _List.reverse)(l1$$1), l2$$1];
      } else {
        n$$5 = n$$5 - 1;
        l1$$1 = (0, _Types.L)((0, _List.head)(l2$$1), l1$$1);
        l2$$1 = (0, _List.tail)(l2$$1);
        continue split_after_acc;
      }
    }
  };

  return split_after_acc(n$$4, (0, _Types.L)(), l$$3);
}

function List$$$existsi(f$$5, xs$$3) {
  const loop$$5 = function loop$$5(i$$7, xs$$4) {
    loop$$5: while (true) {
      if (xs$$4.tail != null) {
        const t = xs$$4.tail;
        const h = xs$$4.head;

        if (f$$5(i$$7, h)) {
          return true;
        } else {
          i$$7 = i$$7 + 1;
          xs$$4 = t;
          continue loop$$5;
        }
      } else {
        return false;
      }
    }
  };

  return loop$$5(0, xs$$3);
}

function List$$$existsTrue(xs$$5) {
  const loop$$6 = function loop$$6(i$$8, xs$$6) {
    loop$$6: while (true) {
      if (xs$$6.tail != null) {
        const t$$1 = xs$$6.tail;
        const h$$1 = xs$$6.head;

        if (h$$1) {
          return true;
        } else {
          i$$8 = i$$8 + 1;
          xs$$6 = t$$1;
          continue loop$$6;
        }
      } else {
        return false;
      }
    }
  };

  return loop$$6(0, xs$$5);
}

function List$$$lengthsEqAndForall2(p$$8, l1$$2, l2$$2) {
  if ((0, _List.length)(l1$$2) === (0, _List.length)(l2$$2)) {
    return (0, _List.forAll2)(p$$8, l1$$2, l2$$2);
  } else {
    return false;
  }
}

function List$$$findi($arg$$117, $arg$$118, $arg$$119) {
  List$$$findi: while (true) {
    const n$$6 = $arg$$117,
          f$$6 = $arg$$118,
          l$$4 = $arg$$119;

    if (l$$4.tail != null) {
      const t$$2 = l$$4.tail;
      const h$$2 = l$$4.head;

      if (f$$6(h$$2)) {
        return [h$$2, n$$6];
      } else {
        $arg$$117 = n$$6 + 1;
        $arg$$118 = f$$6;
        $arg$$119 = t$$2;
        continue List$$$findi;
      }
    } else {
      return null;
    }
  }
}

function List$$$drop(n$$7, l$$5) {
  List$$$drop: while (true) {
    if (l$$5.tail != null) {
      const xs$$7 = l$$5.tail;

      if (n$$7 === 0) {
        return l$$5;
      } else {
        n$$7 = n$$7 - 1;
        l$$5 = xs$$7;
        continue List$$$drop;
      }
    } else {
      return (0, _Types.L)();
    }
  }
}

function List$$$splitChoose(select, l$$6) {
  const ch = function ch(acc1, acc2, l$$7) {
    ch: while (true) {
      if (l$$7.tail != null) {
        const xs$$8 = l$$7.tail;
        const x$$10 = l$$7.head;
        const matchValue$$3 = select(x$$10);

        if (matchValue$$3.tag === 1) {
          const sx$$1 = matchValue$$3.fields[0];
          acc1 = acc1;
          acc2 = (0, _Types.L)(sx$$1, acc2);
          l$$7 = xs$$8;
          continue ch;
        } else {
          const sx = matchValue$$3.fields[0];
          acc1 = (0, _Types.L)(sx, acc1);
          acc2 = acc2;
          l$$7 = xs$$8;
          continue ch;
        }
      } else {
        return [(0, _List.reverse)(acc1), (0, _List.reverse)(acc2)];
      }
    }
  };

  return ch((0, _Types.L)(), (0, _Types.L)(), l$$6);
}

function List$$$checkq(l1$$3, l2$$3) {
  List$$$checkq: while (true) {
    const matchValue$$4 = [l1$$3, l2$$3];
    var $target$$122, h1, h2, t1$$1, t2$$1;

    if (matchValue$$4[0].tail != null) {
      if (matchValue$$4[1].tail != null) {
        $target$$122 = 0;
        h1 = matchValue$$4[0].head;
        h2 = matchValue$$4[1].head;
        t1$$1 = matchValue$$4[0].tail;
        t2$$1 = matchValue$$4[1].tail;
      } else {
        $target$$122 = 1;
      }
    } else {
      $target$$122 = 1;
    }

    switch ($target$$122) {
      case 0:
        {
          if (h1 === h2) {
            l1$$3 = t1$$1;
            l2$$3 = t2$$1;
            continue List$$$checkq;
          } else {
            return false;
          }
        }

      case 1:
        {
          return true;
        }
    }
  }
}

function List$$$mapq(f$$7, inp$$1) {
  if (inp$$1.tail != null) {
    if (inp$$1.tail.tail != null) {
      if (inp$$1.tail.tail.tail != null) {
        if (inp$$1.tail.tail.tail.tail == null) {
          const h2a$$2 = f$$7(inp$$1.head);
          const h2b$$1 = f$$7(inp$$1.tail.head);
          const h2c = f$$7(inp$$1.tail.tail.head);

          if ((inp$$1.head === h2a$$2 ? inp$$1.tail.head === h2b$$1 : false) ? inp$$1.tail.tail.head === h2c : false) {
            return inp$$1;
          } else {
            return (0, _Types.L)(h2a$$2, (0, _Types.L)(h2b$$1, (0, _Types.L)(h2c, (0, _Types.L)())));
          }
        } else {
          const res$$3 = (0, _List.map)(f$$7, inp$$1);

          if (List$$$checkq(inp$$1, res$$3)) {
            return inp$$1;
          } else {
            return res$$3;
          }
        }
      } else {
        const h2a$$1 = f$$7(inp$$1.head);
        const h2b = f$$7(inp$$1.tail.head);

        if (inp$$1.head === h2a$$1 ? inp$$1.tail.head === h2b : false) {
          return inp$$1;
        } else {
          return (0, _Types.L)(h2a$$1, (0, _Types.L)(h2b, (0, _Types.L)()));
        }
      }
    } else {
      const h2a = f$$7(inp$$1.head);

      if (inp$$1.head === h2a) {
        return inp$$1;
      } else {
        return (0, _Types.L)(h2a, (0, _Types.L)());
      }
    }
  } else {
    return inp$$1;
  }
}

function List$$$frontAndBack(l$$8) {
  const loop$$7 = function loop$$7(acc, l$$9) {
    loop$$7: while (true) {
      if (l$$9.tail != null) {
        if (l$$9.tail.tail == null) {
          return [(0, _List.reverse)(acc), l$$9.head];
        } else {
          acc = (0, _Types.L)(l$$9.head, acc);
          l$$9 = l$$9.tail;
          continue loop$$7;
        }
      } else {
        throw new Error("empty list" + "\\nParameter name: " + "l");
      }
    }
  };

  return loop$$7((0, _Types.L)(), l$$8);
}

function List$$$tryRemove(f$$8, inp$$2) {
  const loop$$8 = function loop$$8(acc$$1, l$$10) {
    loop$$8: while (true) {
      if (l$$10.tail != null) {
        const t$$4 = l$$10.tail;
        const h$$5 = l$$10.head;

        if (f$$8(h$$5)) {
          return [h$$5, (0, _List.append)((0, _List.reverse)(acc$$1), t$$4)];
        } else {
          acc$$1 = (0, _Types.L)(h$$5, acc$$1);
          l$$10 = t$$4;
          continue loop$$8;
        }
      } else {
        return null;
      }
    }
  };

  return loop$$8((0, _Types.L)(), inp$$2);
}

function List$$$headAndTail(l$$11) {
  if (l$$11.tail != null) {
    const t$$5 = l$$11.tail;
    const h$$6 = l$$11.head;
    return [h$$6, t$$5];
  } else {
    throw new Error("List.headAndTail");
  }
}

function List$$$zip4(l1$$4, l2$$4, l3, l4) {
  return (0, _List.map)(function mapping$$1(tupledArg) {
    return [tupledArg[0], tupledArg[1][0], tupledArg[1][1], tupledArg[1][2]];
  }, (0, _List.zip)(l1$$4, (0, _List.zip3)(l2$$4, l3, l4)));
}

function List$$$unzip4(l$$12) {
  const patternInput$$2 = (0, _List.unzip3)((0, _List.map)(function (tupledArg$$1) {
    return [tupledArg$$1[0], tupledArg$$1[1], [tupledArg$$1[2], tupledArg$$1[3]]];
  }, l$$12));
  const patternInput$$3 = (0, _List.unzip)(patternInput$$2[2]);
  return [patternInput$$2[0], patternInput$$2[1], patternInput$$3[0], patternInput$$3[1]];
}

function List$$$iter3(f$$9, l1$$5, l2$$5, l3$$1) {
  const matchValue$$5 = [l1$$5, l2$$5, l3$$1];
  var $target$$131, h1$$1, h2$$1, h3, t1$$2, t2$$2, t3;

  if (matchValue$$5[0].tail == null) {
    if (matchValue$$5[1].tail == null) {
      if (matchValue$$5[2].tail == null) {
        $target$$131 = 1;
      } else {
        $target$$131 = 2;
      }
    } else {
      $target$$131 = 2;
    }
  } else if (matchValue$$5[1].tail != null) {
    if (matchValue$$5[2].tail != null) {
      $target$$131 = 0;
      h1$$1 = matchValue$$5[0].head;
      h2$$1 = matchValue$$5[1].head;
      h3 = matchValue$$5[2].head;
      t1$$2 = matchValue$$5[0].tail;
      t2$$2 = matchValue$$5[1].tail;
      t3 = matchValue$$5[2].tail;
    } else {
      $target$$131 = 2;
    }
  } else {
    $target$$131 = 2;
  }

  switch ($target$$131) {
    case 0:
      {
        f$$9(h1$$1, h2$$1, h3);
        List$$$iter3(f$$9, t1$$2, t2$$2, t3);
        break;
      }

    case 2:
      {
        throw new Error("iter3");
        break;
      }
  }
}

function List$$$takeUntil(p$$9, l$$13) {
  const loop$$9 = function loop$$9(acc$$2, l$$14) {
    loop$$9: while (true) {
      if (l$$14.tail != null) {
        const xs$$9 = l$$14.tail;
        const x$$19 = l$$14.head;

        if (p$$9(x$$19)) {
          return [(0, _List.reverse)(acc$$2), l$$14];
        } else {
          acc$$2 = (0, _Types.L)(x$$19, acc$$2);
          l$$14 = xs$$9;
          continue loop$$9;
        }
      } else {
        return [(0, _List.reverse)(acc$$2), (0, _Types.L)()];
      }
    }
  };

  return loop$$9((0, _Types.L)(), l$$13);
}

function List$$$order(eltOrder$$1) {
  return {
    Compare(xs$$10, ys$$3) {
      const loop$$10 = function loop$$10(xs$$11, ys$$4) {
        loop$$10: while (true) {
          const matchValue$$6 = [xs$$11, ys$$4];

          if (matchValue$$6[0].tail != null) {
            if (matchValue$$6[1].tail != null) {
              const cxy = eltOrder$$1.Compare(matchValue$$6[0].head, matchValue$$6[1].head) | 0;

              if (cxy === 0) {
                xs$$11 = matchValue$$6[0].tail;
                ys$$4 = matchValue$$6[1].tail;
                continue loop$$10;
              } else {
                return cxy | 0;
              }
            } else {
              return 1;
            }
          } else if (matchValue$$6[1].tail == null) {
            return 0;
          } else {
            return -1 | 0;
          }
        }
      };

      return loop$$10(xs$$10, ys$$3) | 0;
    }

  };
}

function List$002EFrontAndBack$$$$007CNonEmpty$007CEmpty$007C(l$$15) {
  if (l$$15.tail == null) {
    return new _Option.Choice(1, "Choice2Of2", null);
  } else {
    return new _Option.Choice(0, "Choice1Of2", List$$$frontAndBack(l$$15));
  }
}

function List$$$range(n$$8, m) {
  return (0, _List.ofSeq)((0, _Seq.rangeNumber)(n$$8, 1, m));
}

function List$$$indexNotFound() {
  throw new Error("An index satisfying the predicate was not found in the collection");
}

function List$$$assoc(x$$21, l$$16) {
  List$$$assoc: while (true) {
    if (l$$16.tail != null) {
      const t$$6 = l$$16.tail;
      const r = l$$16.head[1];
      const h$$7 = l$$16.head[0];

      if ((0, _Util.equals)(x$$21, h$$7)) {
        return r;
      } else {
        x$$21 = x$$21;
        l$$16 = t$$6;
        continue List$$$assoc;
      }
    } else {
      return List$$$indexNotFound();
    }
  }
}

function List$$$memAssoc(x$$22, l$$17) {
  List$$$memAssoc: while (true) {
    if (l$$17.tail != null) {
      const t$$7 = l$$17.tail;
      const h$$8 = l$$17.head[0];

      if ((0, _Util.equals)(x$$22, h$$8)) {
        return true;
      } else {
        x$$22 = x$$22;
        l$$17 = t$$7;
        continue List$$$memAssoc;
      }
    } else {
      return false;
    }
  }
}

function List$$$memq(x$$23, l$$18) {
  List$$$memq: while (true) {
    if (l$$18.tail != null) {
      const t$$8 = l$$18.tail;
      const h$$9 = l$$18.head;

      if (x$$23 === h$$9) {
        return true;
      } else {
        x$$23 = x$$23;
        l$$18 = t$$8;
        continue List$$$memq;
      }
    } else {
      return false;
    }
  }
}

function List$$$mapNth(n$$9, f$$10, xs$$13) {
  const mn = function mn(i$$9, _arg1$$2) {
    if (_arg1$$2.tail != null) {
      const xs$$14 = _arg1$$2.tail;
      const x$$24 = _arg1$$2.head;

      if (i$$9 === n$$9) {
        return (0, _Types.L)(f$$10(x$$24), xs$$14);
      } else {
        return (0, _Types.L)(x$$24, mn(i$$9 + 1, xs$$14));
      }
    } else {
      return (0, _Types.L)();
    }
  };

  return mn(0, xs$$13);
}

function List$$$count(pred, xs$$15) {
  return (0, _List.fold)(function (n$$10, x$$25) {
    return pred(x$$25) ? n$$10 + 1 : n$$10;
  }, 0, xs$$15);
}

function List$$$mapHeadTail(fhead, ftail, _arg1$$3) {
  if (_arg1$$3.tail != null) {
    if (_arg1$$3.tail.tail == null) {
      return (0, _Types.L)(fhead(_arg1$$3.head), (0, _Types.L)());
    } else {
      return (0, _Types.L)(fhead(_arg1$$3.head), (0, _List.map)(ftail, _arg1$$3.tail));
    }
  } else {
    return (0, _Types.L)();
  }
}

function List$$$collectFold(f$$11, s$$1, l$$19) {
  const patternInput$$4 = (0, _List.mapFold)(f$$11, s$$1, l$$19);
  return [(0, _List.concat)(patternInput$$4[0]), patternInput$$4[1]];
}

function List$$$collect2(f$$12, xs$$17, ys$$6) {
  return (0, _List.concat)((0, _List.map2)(f$$12, xs$$17, ys$$6));
}

function List$$$toArraySquared(xss) {
  return (0, _Array.ofList)((0, _List.map)(function mapping$$2(list$$1) {
    return (0, _Array.ofList)(list$$1, Array);
  }, xss), Array);
}

function List$$$iterSquared(f$$13, xss$$1) {
  (0, _List.iterate)(function action(list$$4) {
    (0, _List.iterate)(f$$13, list$$4);
  }, xss$$1);
}

function List$$$collectSquared(f$$14, xss$$2) {
  return (0, _List.collect)(function mapping$$3(list$$6) {
    return (0, _List.collect)(f$$14, list$$6);
  }, xss$$2);
}

function List$$$mapSquared(f$$15, xss$$3) {
  return (0, _List.map)(function mapping$$4(list$$8) {
    return (0, _List.map)(f$$15, list$$8);
  }, xss$$3);
}

function List$$$mapFoldSquared(f$$16, z$$2, xss$$4) {
  return (0, _List.mapFold)(function (state, list$$10) {
    return (0, _List.mapFold)(f$$16, state, list$$10);
  }, z$$2, xss$$4);
}

function List$$$forallSquared(f$$17, xss$$5) {
  return (0, _List.forAll)(function predicate(list$$11) {
    return (0, _List.forAll)(f$$17, list$$11);
  }, xss$$5);
}

function List$$$mapiSquared(f$$18, xss$$6) {
  return (0, _List.mapIndexed)(function mapping$$6(i$$10, xs$$18) {
    return (0, _List.mapIndexed)(function mapping$$5(j, x$$28) {
      return f$$18(i$$10, j, x$$28);
    }, xs$$18);
  }, xss$$6);
}

function List$$$existsSquared(f$$19, xss$$7) {
  return (0, _List.exists)(function predicate$$2(xs$$19) {
    return (0, _List.exists)(function predicate$$1(x$$29) {
      return f$$19(x$$29);
    }, xs$$19);
  }, xss$$7);
}

function List$$$mapiFoldSquared(f$$20, z$$3, xss$$8) {
  return List$$$mapFoldSquared(f$$20, z$$3, List$$$mapiSquared(function f$$21(i$$11, j$$1, x$$30) {
    return [i$$11, j$$1, x$$30];
  }, xss$$8));
}

const ValueOption$00601 = (0, _Types.declare)(function ValueOption$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValueOption$00601 = ValueOption$00601;

function ValueOption$00601$$get_IsSome(x$$31) {
  if (x$$31.tag === 1) {
    return false;
  } else {
    return true;
  }
}

function ValueOption$00601$$get_IsNone(x$$32) {
  if (x$$32.tag === 1) {
    return true;
  } else {
    return false;
  }
}

function ValueOption$00601$$get_Value(x$$33) {
  if (x$$33.tag === 1) {
    throw new Error("ValueOption.Value: value is None");
  } else {
    const r$$1 = x$$33.fields[0];
    return r$$1;
  }
}

function String$$$indexNotFound() {
  throw new Error("An index for the character was not found in the string");
}

function String$$$make(n$$11, c$$4) {
  return Array(n$$11 + 1).join(c$$4);
}

function String$$$get(str, i$$12) {
  return str[i$$12];
}

function String$$$sub(s$$3, start, len$$2) {
  return s$$3.substr(start, len$$2);
}

function String$$$index(s$$4, c$$5) {
  const r$$2 = s$$4.indexOf(c$$5) | 0;

  if (r$$2 === -1) {
    return String$$$indexNotFound() | 0;
  } else {
    return r$$2 | 0;
  }
}

function String$$$rindex(s$$5, c$$6) {
  const r$$3 = s$$5.lastIndexOf(c$$6) | 0;

  if (r$$3 === -1) {
    return String$$$indexNotFound() | 0;
  } else {
    return r$$3 | 0;
  }
}

function String$$$contains(s$$6, c$$7) {
  return s$$6.indexOf(c$$7) !== -1;
}

const String$$$order = (0, _FSharp.LanguagePrimitives$$$FastGenericComparer)();
exports.String$$$order = String$$$order;

function String$$$lowercase(s$$7) {
  return s$$7.toLowerCase();
}

function String$$$uppercase(s$$8) {
  return s$$8.toUpperCase();
}

function String$$$isUpper(s$$9) {
  if (s$$9.length >= 1 ? (0, _Char.isUpper)(s$$9[0]) : false) {
    return !(0, _Char.isLower)(s$$9[0]);
  } else {
    return false;
  }
}

function String$$$capitalize(s$$10) {
  if (s$$10.length === 0) {
    return s$$10;
  } else {
    return String$$$uppercase(s$$10.slice(0, 0 + 1)) + s$$10.slice(1, s$$10.length - 1 + 1);
  }
}

function String$$$uncapitalize(s$$11) {
  if (s$$11.length === 0) {
    return s$$11;
  } else {
    return String$$$lowercase(s$$11.slice(0, 0 + 1)) + s$$11.slice(1, s$$11.length - 1 + 1);
  }
}

function String$$$dropPrefix(s$$12, t$$9) {
  return s$$12.slice(t$$9.length, s$$12.length - 1 + 1);
}

function String$$$dropSuffix(s$$13, t$$10) {
  return s$$13.slice(0, s$$13.length - t$$10.length - 1 + 1);
}

function String$$$lowerCaseFirstChar(str$$1) {
  if ((0, _String.isNullOrEmpty)(str$$1) ? true : (0, _Char.isLower)(str$$1[0])) {
    return str$$1;
  } else {
    const strArr = str$$1.split("");
    const matchValue$$10 = (0, _Array.tryHead)(strArr);

    if (matchValue$$10 != null) {
      const c$$8 = matchValue$$10;
      strArr[0] = c$$8.toLocaleLowerCase();
      return strArr.join("");
    } else {
      return str$$1;
    }
  }
}

function String$$$extractTrailingIndex(str$$3) {
  if (str$$3 === null) {
    return [null, null];
  } else {
    const charr = str$$3.split("");
    Array$$$revInPlace(charr);
    const digits = (0, _Array.takeWhile)(_Char.isDigit, charr, Array);
    Array$$$revInPlace(digits);

    const _arg1$$4 = digits.join("");

    if (_arg1$$4 === "") {
      return [str$$3, null];
    } else {
      const index$$3 = _arg1$$4;
      return [str$$3.substr(0, str$$3.length - index$$3.length), (0, _Int.parse)(index$$3)];
    }
  }
}

function String$$$trim(value$$1) {
  if (value$$1 == null) {
    return null;
  } else {
    return value$$1.trim();
  }
}

function String$$$split(options, separator, value$$2) {
  if (value$$2 == null) {
    return null;
  } else {
    return (0, _String.split)(value$$2, separator, null, options);
  }
}

function String$$$$007CStartsWith$007C_$007C(pattern, value$$3) {
  if ((0, _String.isNullOrWhiteSpace)(value$$3)) {
    return null;
  } else if ((0, _String.startsWith)(value$$3, pattern, 4)) {
    return (0, _Option.some)(null);
  } else {
    return null;
  }
}

function String$$$$007CContains$007C_$007C(pattern$$1, value$$5) {
  if ((0, _String.isNullOrWhiteSpace)(value$$5)) {
    return null;
  } else if (value$$5.indexOf(pattern$$1) >= 0) {
    return (0, _Option.some)(null);
  } else {
    return null;
  }
}

const DictionaryExtensions = (0, _Types.declare)(function DictionaryExtensions() {});
exports.DictionaryExtensions = DictionaryExtensions;

function DictionaryExtensions$$$$002Ector() {
  return this != null ? DictionaryExtensions.call(this) : new DictionaryExtensions();
}

function Lazy$$$force(x$$35) {
  return x$$35.Value;
}

const CompilationThreadToken = (0, _Types.declare)(function CompilationThreadToken() {});
exports.CompilationThreadToken = CompilationThreadToken;

function CompilationThreadToken$$$$002Ector() {
  return this != null ? CompilationThreadToken.call(this) : new CompilationThreadToken();
}

function RequireCompilationThread(_ctok) {}

function DoesNotRequireCompilerThreadTokenAndCouldPossiblyBeMadeConcurrent(_ctok$$1) {}

function AssumeCompilationThreadWithoutEvidence() {
  return null;
}

const AnyCallerThreadToken = (0, _Types.declare)(function AnyCallerThreadToken() {});
exports.AnyCallerThreadToken = AnyCallerThreadToken;

function AnyCallerThreadToken$$$$002Ector() {
  return this != null ? AnyCallerThreadToken.call(this) : new AnyCallerThreadToken();
}

function AssumeAnyCallerThreadWithoutEvidence() {
  return null;
}

function AssumeLockWithoutEvidence() {
  return null;
}

function getHole(r$$4) {
  const matchValue$$11 = r$$4.contents;

  if (matchValue$$11 != null) {
    const x$$36 = (0, _Option.value)(matchValue$$11);
    return x$$36;
  } else {
    throw new Error("getHole");
  }
}

function Map$$$tryFindMulti(k, map) {
  const matchValue$$12 = (0, _Map.tryFind)(k, map);

  if (matchValue$$12 == null) {
    return (0, _Types.L)();
  } else {
    const res$$4 = matchValue$$12;
    return res$$4;
  }
}

const ResultOrException$00601 = (0, _Types.declare)(function ResultOrException$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ResultOrException$00601 = ResultOrException$00601;

function ResultOrExceptionModule$$$success(a$$1) {
  return new ResultOrException$00601(0, "Result", a$$1);
}

function ResultOrExceptionModule$$$raze(b$$1) {
  return new ResultOrException$00601(1, "Exception", b$$1);
}

function ResultOrExceptionModule$$$op_BarQmarkGreater(res$$5, f$$22) {
  if (res$$5.tag === 1) {
    const err = res$$5.fields[0];
    return new ResultOrException$00601(1, "Exception", err);
  } else {
    const x$$37 = res$$5.fields[0];
    return new ResultOrException$00601(0, "Result", f$$22(x$$37));
  }
}

function ResultOrExceptionModule$$$ForceRaise(res$$6) {
  if (res$$6.tag === 1) {
    const err$$1 = res$$6.fields[0];
    throw err$$1;
  } else {
    const x$$38 = res$$6.fields[0];
    return x$$38;
  }
}

function ResultOrExceptionModule$$$otherwise(f$$23, x$$39) {
  if (x$$39.tag === 1) {
    const _err = x$$39.fields[0];
    return f$$23();
  } else {
    const x$$40 = x$$39.fields[0];
    return ResultOrExceptionModule$$$success(x$$40);
  }
}

const ValueOrCancelled$00601 = (0, _Types.declare)(function ValueOrCancelled$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.ValueOrCancelled$00601 = ValueOrCancelled$00601;
const Cancellable$00601 = (0, _Types.declare)(function Cancellable$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Cancellable$00601 = Cancellable$00601;

function CancellableModule$$$run(ct, _arg1$$5) {
  const oper = _arg1$$5.fields[0];

  if ((0, _Async.isCancellationRequested)(ct)) {
    return new ValueOrCancelled$00601(1, "Cancelled", new Error(ct));
  } else {
    return oper(ct);
  }
}

function CancellableModule$$$bind(f$$24, comp1) {
  return new Cancellable$00601(0, "Cancellable", function (ct$$1) {
    const matchValue$$13 = CancellableModule$$$run(ct$$1, comp1);

    if (matchValue$$13.tag === 1) {
      const err1 = matchValue$$13.fields[0];
      return new ValueOrCancelled$00601(1, "Cancelled", err1);
    } else {
      const v1 = matchValue$$13.fields[0];
      return CancellableModule$$$run(ct$$1, f$$24(v1));
    }
  });
}

function CancellableModule$$$map(f$$25, oper$$1) {
  return new Cancellable$00601(0, "Cancellable", function (ct$$2) {
    const matchValue$$14 = CancellableModule$$$run(ct$$2, oper$$1);

    if (matchValue$$14.tag === 1) {
      const err$$2 = matchValue$$14.fields[0];
      return new ValueOrCancelled$00601(1, "Cancelled", err$$2);
    } else {
      const res$$7 = matchValue$$14.fields[0];
      return new ValueOrCancelled$00601(0, "Value", f$$25(res$$7));
    }
  });
}

function CancellableModule$$$ret(x$$41) {
  return new Cancellable$00601(0, "Cancellable", function (_arg1$$6) {
    return new ValueOrCancelled$00601(0, "Value", x$$41);
  });
}

function CancellableModule$$$fold(f$$26, acc$$3, seq) {
  return new Cancellable$00601(0, "Cancellable", function (ct$$3) {
    return (0, _Seq.fold)(function folder(acc$$4, x$$42) {
      if (acc$$4.tag === 0) {
        const accv = acc$$4.fields[0];
        return CancellableModule$$$run(ct$$3, f$$26(accv, x$$42));
      } else {
        const res$$8 = acc$$4;
        return res$$8;
      }
    }, new ValueOrCancelled$00601(0, "Value", acc$$3), seq);
  });
}

function CancellableModule$$$each(f$$27, seq$$1) {
  return new Cancellable$00601(0, "Cancellable", function (ct$$4) {
    const _arg1$$7 = (0, _Seq.fold)(function folder$$1(acc$$5, x$$43) {
      if (acc$$5.tag === 0) {
        const acc$$6 = acc$$5.fields[0];
        const matchValue$$15 = CancellableModule$$$run(ct$$4, f$$27(x$$43));

        if (matchValue$$15.tag === 1) {
          const err1$$1 = matchValue$$15.fields[0];
          return new ValueOrCancelled$00601(1, "Cancelled", err1$$1);
        } else {
          const x2$$1 = matchValue$$15.fields[0];
          return new ValueOrCancelled$00601(0, "Value", (0, _Types.L)(x2$$1, acc$$6));
        }
      } else {
        const canc = acc$$5;
        return canc;
      }
    }, new ValueOrCancelled$00601(0, "Value", (0, _Types.L)()), seq$$1);

    if (_arg1$$7.tag === 0) {
      const acc$$7 = _arg1$$7.fields[0];
      return new ValueOrCancelled$00601(0, "Value", (0, _List.reverse)(acc$$7));
    } else {
      const canc$$1 = _arg1$$7;
      return canc$$1;
    }
  });
}

function CancellableModule$$$delay(f$$28) {
  return new Cancellable$00601(0, "Cancellable", function (ct$$5) {
    const g = f$$28().fields[0];
    return g(ct$$5);
  });
}

function CancellableModule$$$runWithoutCancellation(comp) {
  const res$$9 = CancellableModule$$$run(null, comp);

  if (res$$9.tag === 0) {
    const r$$5 = res$$9.fields[0];
    return r$$5;
  } else {
    throw new Error("unexpected cancellation");
  }
}

function CancellableModule$$$token() {
  return new Cancellable$00601(0, "Cancellable", function (ct$$6) {
    return new ValueOrCancelled$00601(0, "Value", ct$$6);
  });
}

function CancellableModule$$$canceled() {
  return new Cancellable$00601(0, "Cancellable", function (ct$$7) {
    return new ValueOrCancelled$00601(1, "Cancelled", new Error(ct$$7));
  });
}

function CancellableModule$$$catch(_arg1$$8) {
  const e = _arg1$$8.fields[0];
  return new Cancellable$00601(0, "Cancellable", function (ct$$8) {
    try {
      const matchValue$$16 = e(ct$$8);

      if (matchValue$$16.tag === 1) {
        const e$$1 = matchValue$$16.fields[0];
        return new ValueOrCancelled$00601(1, "Cancelled", e$$1);
      } else {
        const r$$6 = matchValue$$16.fields[0];
        return new ValueOrCancelled$00601(0, "Value", new _Option.Choice(0, "Choice1Of2", r$$6));
      }
    } catch (err$$3) {
      return new ValueOrCancelled$00601(0, "Value", new _Option.Choice(1, "Choice2Of2", err$$3));
    }
  });
}

function CancellableModule$$$tryFinally(e$$2, compensation) {
  return CancellableModule$$$bind(function f$$29(res$$10) {
    compensation();

    if (res$$10.tag === 1) {
      const err$$4 = res$$10.fields[0];
      throw err$$4;
    } else {
      const r$$7 = res$$10.fields[0];
      return CancellableModule$$$ret(r$$7);
    }
  }, CancellableModule$$$catch(e$$2));
}

function CancellableModule$$$tryWith(e$$3, handler) {
  return CancellableModule$$$bind(function f$$30(res$$11) {
    if (res$$11.tag === 1) {
      const err$$5 = res$$11.fields[0];
      return handler(err$$5);
    } else {
      const r$$8 = res$$11.fields[0];
      return CancellableModule$$$ret(r$$8);
    }
  }, CancellableModule$$$catch(e$$3));
}

const CancellableBuilder = (0, _Types.declare)(function CancellableBuilder() {});
exports.CancellableBuilder = CancellableBuilder;

function CancellableBuilder$$$$002Ector() {
  return this != null ? CancellableBuilder.call(this) : new CancellableBuilder();
}

function CancellableBuilder$$Bind$$81B0433(x$$44, e$$4, k$$1) {
  return CancellableModule$$$bind(k$$1, e$$4);
}

function CancellableBuilder$$Return$$1505(x$$45, v$$1) {
  return CancellableModule$$$ret(v$$1);
}

function CancellableBuilder$$ReturnFrom$$1505(x$$46, v$$2) {
  return v$$2;
}

function CancellableBuilder$$Combine$$Z370E1C61(x$$47, e1, e2) {
  return CancellableModule$$$bind(function f$$31() {
    return e2;
  }, e1);
}

function CancellableBuilder$$TryWith$$36E21CF(x$$48, e$$5, handler$$1) {
  return CancellableModule$$$tryWith(e$$5, handler$$1);
}

function CancellableBuilder$$Using$$Z52E1FC8A(x$$49, resource, e$$6) {
  return CancellableModule$$$tryFinally(e$$6(resource), function () {
    resource.Dispose();
  });
}

function CancellableBuilder$$TryFinally$$Z60A3294A(x$$50, e$$7, compensation$$1) {
  return CancellableModule$$$tryFinally(e$$7, compensation$$1);
}

function CancellableBuilder$$Delay$$1F7AD5CA(x$$51, f$$32) {
  return CancellableModule$$$delay(f$$32);
}

function CancellableBuilder$$Zero(x$$52) {
  return CancellableModule$$$ret();
}

const cancellable = CancellableBuilder$$$$002Ector();
exports.cancellable = cancellable;
const Eventually$00601 = (0, _Types.declare)(function Eventually$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Eventually$00601 = Eventually$00601;

function EventuallyModule$$$box(e$$8) {
  if (e$$8.tag === 1) {
    const work = e$$8.fields[0];
    return new Eventually$00601(1, "NotYetDone", function (ctok) {
      return EventuallyModule$$$box(work(ctok));
    });
  } else {
    const x$$53 = e$$8.fields[0];
    return new Eventually$00601(0, "Done", x$$53);
  }
}

function EventuallyModule$$$forceWhile($arg$$198, $arg$$199, $arg$$200) {
  EventuallyModule$$$forceWhile: while (true) {
    const ctok$$1 = $arg$$198,
          check = $arg$$199,
          e$$9 = $arg$$200;

    if (e$$9.tag === 1) {
      const work$$1 = e$$9.fields[0];

      if (!check()) {
        return null;
      } else {
        $arg$$198 = ctok$$1;
        $arg$$199 = check;
        $arg$$200 = work$$1(ctok$$1);
        continue EventuallyModule$$$forceWhile;
      }
    } else {
      const x$$54 = e$$9.fields[0];
      return (0, _Option.some)(x$$54);
    }
  }
}

function EventuallyModule$$$force(ctok$$2, e$$10) {
  return (0, _Option.value)(EventuallyModule$$$forceWhile(ctok$$2, function () {
    return true;
  }, e$$10));
}

function EventuallyModule$$$bind(k$$2, e$$11) {
  if (e$$11.tag === 1) {
    const work$$2 = e$$11.fields[0];
    return new Eventually$00601(1, "NotYetDone", function (ctok$$3) {
      return EventuallyModule$$$bind(k$$2, work$$2(ctok$$3));
    });
  } else {
    const x$$55 = e$$11.fields[0];
    return k$$2(x$$55);
  }
}

function EventuallyModule$$$fold(f$$33, acc$$8, seq$$2) {
  return (0, _Seq.fold)(function folder$$2(acc$$9, x$$56) {
    return EventuallyModule$$$bind(function k$$3(acc$$10) {
      return f$$33(acc$$10, x$$56);
    }, acc$$9);
  }, new Eventually$00601(0, "Done", acc$$8), seq$$2);
}

function EventuallyModule$$$catch(e$$13) {
  if (e$$13.tag === 1) {
    const work$$3 = e$$13.fields[0];
    return new Eventually$00601(1, "NotYetDone", function (ctok$$4) {
      let res$$12;

      try {
        res$$12 = new ResultOrException$00601(0, "Result", work$$3(ctok$$4));
      } catch (e$$14) {
        res$$12 = new ResultOrException$00601(1, "Exception", e$$14);
      }

      if (res$$12.tag === 1) {
        const e$$15 = res$$12.fields[0];
        return new Eventually$00601(0, "Done", new ResultOrException$00601(1, "Exception", e$$15));
      } else {
        const cont = res$$12.fields[0];
        return EventuallyModule$$$catch(cont);
      }
    });
  } else {
    const x$$57 = e$$13.fields[0];
    return new Eventually$00601(0, "Done", new ResultOrException$00601(0, "Result", x$$57));
  }
}

function EventuallyModule$$$delay(f$$34) {
  return new Eventually$00601(1, "NotYetDone", function (_ctok$$2) {
    return f$$34();
  });
}

function EventuallyModule$$$tryFinally(e$$16, compensation$$2) {
  return EventuallyModule$$$bind(function k$$4(res$$13) {
    compensation$$2();

    if (res$$13.tag === 1) {
      const e$$17 = res$$13.fields[0];
      throw e$$17;
    } else {
      const v$$3 = res$$13.fields[0];
      return new Eventually$00601(0, "Done", v$$3);
    }
  }, EventuallyModule$$$catch(e$$16));
}

function EventuallyModule$$$tryWith(e$$19, handler$$2) {
  return EventuallyModule$$$bind(function k$$5(_arg1$$9) {
    if (_arg1$$9.tag === 1) {
      const e$$20 = _arg1$$9.fields[0];
      return handler$$2(e$$20);
    } else {
      const v$$4 = _arg1$$9.fields[0];
      return new Eventually$00601(0, "Done", v$$4);
    }
  }, EventuallyModule$$$catch(e$$19));
}

const EventuallyModule$$$token = new Eventually$00601(1, "NotYetDone", function (ctok$$5) {
  return new Eventually$00601(0, "Done", ctok$$5);
});
exports.EventuallyModule$$$token = EventuallyModule$$$token;
const EventuallyBuilder = (0, _Types.declare)(function EventuallyBuilder() {});
exports.EventuallyBuilder = EventuallyBuilder;

function EventuallyBuilder$$$$002Ector() {
  return this != null ? EventuallyBuilder.call(this) : new EventuallyBuilder();
}

function EventuallyBuilder$$Bind$$11F6F5F3(x$$58, e$$22, k$$6) {
  return EventuallyModule$$$bind(k$$6, e$$22);
}

function EventuallyBuilder$$Return$$1505(x$$59, v$$5) {
  return new Eventually$00601(0, "Done", v$$5);
}

function EventuallyBuilder$$ReturnFrom$$1505(x$$60, v$$6) {
  return v$$6;
}

function EventuallyBuilder$$Combine$$7DDFD27F(x$$61, e1$$1, e2$$1) {
  return EventuallyModule$$$bind(function k$$7() {
    return e2$$1;
  }, e1$$1);
}

function EventuallyBuilder$$TryWith$$2B3CF8F(x$$62, e$$24, handler$$3) {
  return EventuallyModule$$$tryWith(e$$24, handler$$3);
}

function EventuallyBuilder$$TryFinally$$Z23B895E9(x$$63, e$$25, compensation$$3) {
  return EventuallyModule$$$tryFinally(e$$25, compensation$$3);
}

function EventuallyBuilder$$Delay$$5AC0008B(x$$64, f$$35) {
  return EventuallyModule$$$delay(f$$35);
}

function EventuallyBuilder$$Zero(x$$65) {
  return new Eventually$00601(0, "Done", null);
}

const eventually = EventuallyBuilder$$$$002Ector();
exports.eventually = eventually;
const UniqueStampGenerator$00601 = (0, _Types.declare)(function UniqueStampGenerator$00601() {
  const $this$$41 = this;
  $this$$41.encodeTab = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)()));
  $this$$41.nItems = 0;
});
exports.UniqueStampGenerator$00601 = UniqueStampGenerator$00601;

function UniqueStampGenerator$00601$$$$002Ector() {
  return this != null ? UniqueStampGenerator$00601.call(this) : new UniqueStampGenerator$00601();
}

function UniqueStampGenerator$00601$$Encode$$2B595(this$, str$$4) {
  return UniqueStampGenerator$00601$$encode$$2B595(this$, str$$4);
}

function UniqueStampGenerator$00601$$get_Table(this$$$1) {
  return this$$$1.encodeTab.keys();
}

function UniqueStampGenerator$00601$$encode$$2B595(this$$$2, str$$5) {
  const matchValue$$17 = (0, _Util.tryGetValue)(this$$$2.encodeTab, str$$5, 0);

  if (matchValue$$17[0]) {
    return matchValue$$17[1] | 0;
  } else {
    const idx$$4 = this$$$2.nItems | 0;
    this$$$2.encodeTab.set(str$$5, idx$$4);
    this$$$2.nItems = this$$$2.nItems + 1;
    return idx$$4 | 0;
  }
}

const MemoizationTable$00602 = (0, _Types.declare)(function MemoizationTable$00602(compute, keyComparer, canMemoize) {
  const $this$$42 = this;
  $this$$42.compute = compute;
  $this$$42.canMemoize = canMemoize;
  $this$$42.table = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(keyComparer));
});
exports.MemoizationTable$00602 = MemoizationTable$00602;

function MemoizationTable$00602$$$$002Ector$$Z1CDD427E(compute, keyComparer, canMemoize) {
  return this != null ? MemoizationTable$00602.call(this, compute, keyComparer, canMemoize) : new MemoizationTable$00602(compute, keyComparer, canMemoize);
}

function MemoizationTable$00602$$Apply$$2B595(t$$11, x$$66) {
  var f$$36;

  if (t$$11.canMemoize != null ? (f$$36 = t$$11.canMemoize, f$$36(x$$66)) : true) {
    const patternInput$$6 = (0, _Util.tryGetValue)(t$$11.table, x$$66, null);

    if (patternInput$$6[0]) {
      return patternInput$$6[1];
    } else {
      const res$$15 = t$$11.compute(x$$66);
      t$$11.table.set(x$$66, res$$15);
      return res$$15;
    }
  } else {
    return t$$11.compute(x$$66);
  }
}

const UndefinedException = (0, _Types.declare)(function UndefinedException() {}, _Types.FSharpException);
exports.UndefinedException = UndefinedException;
const LazyWithContextFailure = (0, _Types.declare)(function LazyWithContextFailure(exn) {
  const $this$$43 = this;
  $this$$43.exn = exn;
});
exports.LazyWithContextFailure = LazyWithContextFailure;

function LazyWithContextFailure$$$$002Ector$$229D3F39(exn) {
  return this != null ? LazyWithContextFailure.call(this, exn) : new LazyWithContextFailure(exn);
}

(function LazyWithContextFailure$$$$002Ecctor() {
  LazyWithContextFailure.undefined = LazyWithContextFailure$$$$002Ector$$229D3F39(new UndefinedException());
})();

function LazyWithContextFailure$$get_Exception(x$$67) {
  return x$$67.exn;
}

function LazyWithContextFailure$$$get_Undefined() {
  return LazyWithContextFailure.undefined;
}

const LazyWithContext$00602 = (0, _Types.declare)(function LazyWithContext$00602(arg1, arg2, arg3) {
  this.value = arg1;
  this.funcOrException = arg2;
  this.findOriginalException = arg3;
}, _Types.Record);
exports.LazyWithContext$00602 = LazyWithContext$00602;

function LazyWithContext$00602$$$Create$$4F384A61(f$$37, findOriginalException) {
  return new LazyWithContext$00602(null, f$$37, findOriginalException);
}

function LazyWithContext$00602$$$NotLazy$$2B595(x$$68) {
  return new LazyWithContext$00602(x$$68, null, function (x$$69) {
    return x$$69;
  });
}

function LazyWithContext$00602$$get_IsDelayed(x$$70) {
  const matchValue$$19 = x$$70.funcOrException;

  if ((0, _Util.equals)(matchValue$$19, null)) {
    return false;
  } else if (matchValue$$19 instanceof LazyWithContextFailure) {
    return false;
  } else {
    return true;
  }
}

function LazyWithContext$00602$$get_IsForced(x$$71) {
  if ((0, _Util.equals)(x$$71.funcOrException, null)) {
    return true;
  } else {
    return false;
  }
}

function LazyWithContext$00602$$Force$$2B594(x$$72, ctxt) {
  if ((0, _Util.equals)(x$$72.funcOrException, null)) {
    return x$$72.value;
  } else {
    return LazyWithContext$00602$$UnsynchronizedForce$$2B594(x$$72, ctxt);
  }
}

function LazyWithContext$00602$$UnsynchronizedForce$$2B594(x$$73, ctxt$$1) {
  const matchValue$$22 = x$$73.funcOrException;

  if ((0, _Util.equals)(matchValue$$22, null)) {
    return x$$73.value;
  } else if (matchValue$$22 instanceof LazyWithContextFailure) {
    throw x$$73.findOriginalException(LazyWithContextFailure$$get_Exception(matchValue$$22));
  } else if (typeof matchValue$$22 === "function") {
    x$$73.funcOrException = LazyWithContextFailure$$$get_Undefined();

    try {
      const res$$17 = matchValue$$22(ctxt$$1);
      x$$73.value = res$$17;
      x$$73.funcOrException = null;
      return res$$17;
    } catch (e$$26) {
      x$$73.funcOrException = LazyWithContextFailure$$$$002Ector$$229D3F39(e$$26);
      throw e$$26;
    }
  } else {
    throw new Error("unreachable");
  }
}

function Tables$$$memoize(f$$39) {
  const t$$12 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)((0, _FSharp2.HashIdentity$$$Structural)()));
  return function (x$$74) {
    const patternInput$$7 = (0, _Util.tryGetValue)(t$$12, x$$74, null);

    if (patternInput$$7[0]) {
      return patternInput$$7[1];
    } else {
      const res$$19 = f$$39(x$$74);
      t$$12.set(x$$74, res$$19);
      return res$$19;
    }
  };
}

function IPartialEqualityComparer$$$On(f$$40, c$$9) {
  return {
    InEqualityRelation(x$$75) {
      return c$$9.InEqualityRelation(f$$40(x$$75));
    },

    Equals(x$$76, y$$12) {
      return c$$9.Equals(f$$40(x$$76), f$$40(y$$12));
    },

    GetHashCode(x$$77) {
      return c$$9.GetHashCode(f$$40(x$$77));
    }

  };
}

const IPartialEqualityComparer$002EWrapType$00601 = (0, _Types.declare)(function IPartialEqualityComparer$002EWrapType$00601(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);

function IPartialEqualityComparer$$$partialDistinctBy(per, seq$$3) {
  const wper = {
    InEqualityRelation(_arg1$$10) {
      const x$$78 = _arg1$$10.fields[0];
      return per.InEqualityRelation(x$$78);
    },

    Equals(_arg2$$1, _arg3) {
      const x$$79 = _arg2$$1.fields[0];
      const y$$13 = _arg3.fields[0];
      return per.Equals(x$$79, y$$13);
    },

    GetHashCode(_arg4) {
      const x$$80 = _arg4.fields[0];
      return per.GetHashCode(x$$80) | 0;
    }

  };
  const dict = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(wper));
  return (0, _List.filter)(function predicate$$3(v$$7) {
    const key = new IPartialEqualityComparer$002EWrapType$00601(0, "Wrap", v$$7);

    if (per.InEqualityRelation(v$$7)) {
      if (dict.has(key)) {
        return false;
      } else {
        dict.set(key, null);
        return true;
      }
    } else {
      return true;
    }
  }, seq$$3);
}

function NameMapModule$$$empty() {
  return (0, _Map.empty)({
    Compare: _Util.compare
  });
}

function NameMapModule$$$range(m$$1) {
  return (0, _List.reverse)((0, _Map.foldBack)(function (_arg1$$11, x$$81, sofar) {
    return (0, _Types.L)(x$$81, sofar);
  }, m$$1, (0, _Types.L)()));
}

function NameMapModule$$$foldBack(f$$41, m$$2, z$$4) {
  return (0, _Map.foldBack)(f$$41, m$$2, z$$4);
}

function NameMapModule$$$forall(f$$42, m$$3) {
  return (0, _Map.foldBack)(function (x$$82, y$$14, sofar$$1) {
    return sofar$$1 ? f$$42(x$$82, y$$14) : false;
  }, m$$3, true);
}

function NameMapModule$$$exists(f$$43, m$$4) {
  return (0, _Map.foldBack)(function (x$$83, y$$15, sofar$$2) {
    return sofar$$2 ? true : f$$43(x$$83, y$$15);
  }, m$$4, false);
}

function NameMapModule$$$ofKeyedList(f$$44, l$$21) {
  return (0, _List.foldBack)(function (x$$84, acc$$11) {
    return (0, _Map.add)(f$$44(x$$84), x$$84, acc$$11);
  }, l$$21, (0, _Map.empty)({
    Compare: _Util.compare
  }));
}

function NameMapModule$$$ofList(l$$22) {
  return (0, _Map.ofList)(l$$22, {
    Compare: _Util.comparePrimitives
  });
}

function NameMapModule$$$ofSeq(l$$23) {
  return (0, _Map.ofSeq)(l$$23, {
    Compare: _Util.comparePrimitives
  });
}

function NameMapModule$$$toList(l$$24) {
  return (0, _Map.toList)(l$$24);
}

function NameMapModule$$$layer(m1, m2) {
  return (0, _Map.foldBack)(_Map.add, m1, m2);
}

function NameMapModule$$$layerAdditive(addf, m1$$1, m2$$1) {
  return (0, _Map.foldBack)(function (x$$85, y$$16, sofar$$3) {
    return (0, _Map.add)(x$$85, addf(Map$$$tryFindMulti(x$$85, sofar$$3), y$$16), sofar$$3);
  }, m1$$1, m2$$1);
}

function NameMapModule$$$union(unionf, ms) {
  return (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$7(tupledArg$$2) {
    return [tupledArg$$2[0], unionf((0, _Seq.map)(function (_arg2$$2) {
      const activePatternResult11288 = _arg2$$2;
      return activePatternResult11288[1];
    }, tupledArg$$2[1]))];
  }, (0, _Map.groupBy)(function projection(_arg1$$12) {
    const activePatternResult11286 = _arg1$$12;
    return activePatternResult11286[0];
  }, (0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (m$$5) {
      return m$$5;
    }, ms);
  }), {
    Compare: _Util.comparePrimitives
  })), {
    Compare: _Util.comparePrimitives
  });
}

function NameMapModule$$$subfold2(errf, f$$45, m1$$2, m2$$2, acc$$12) {
  return (0, _Map.foldBack)(function (n$$12, x2$$2, acc$$13) {
    try {
      return f$$45(n$$12, (0, _Map.find)(n$$12, m1$$2), x2$$2, acc$$13);
    } catch (matchValue$$23) {
      if (false) {
        return errf(n$$12, x2$$2);
      } else {
        throw matchValue$$23;
      }
    }
  }, m2$$2, acc$$12);
}

function NameMapModule$$$suball2(errf$$1, p$$10, m1$$3, m2$$3) {
  return NameMapModule$$$subfold2(errf$$1, function (_arg1$$13, x1$$1, x2$$3, acc$$14) {
    return p$$10(x1$$1, x2$$3) ? acc$$14 : false;
  }, m1$$3, m2$$3, true);
}

function NameMapModule$$$mapFold(f$$46, s$$14, l$$25) {
  return (0, _Map.foldBack)(function (x$$86, y$$17, tupledArg$$3) {
    const patternInput$$8 = f$$46(tupledArg$$3[1], x$$86, y$$17);
    return [(0, _Map.add)(x$$86, patternInput$$8[0], tupledArg$$3[0]), patternInput$$8[1]];
  }, l$$25, [(0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }), s$$14]);
}

function NameMapModule$$$foldBackRange(f$$47, l$$26, acc$$15) {
  return (0, _Map.foldBack)(function (_arg1$$14, y$$18, acc$$16) {
    return f$$47(y$$18, acc$$16);
  }, l$$26, acc$$15);
}

function NameMapModule$$$filterRange(f$$48, l$$27) {
  return (0, _Map.foldBack)(function (x$$87, y$$19, acc$$17) {
    return f$$48(y$$19) ? (0, _Map.add)(x$$87, y$$19, acc$$17) : acc$$17;
  }, l$$27, (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }));
}

function NameMapModule$$$mapFilter(f$$49, l$$28) {
  return (0, _Map.foldBack)(function (x$$88, y$$20, acc$$18) {
    const matchValue$$24 = f$$49(y$$20);

    if (matchValue$$24 != null) {
      const y$0027$$1 = (0, _Option.value)(matchValue$$24);
      return (0, _Map.add)(x$$88, y$0027$$1, acc$$18);
    } else {
      return acc$$18;
    }
  }, l$$28, (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  }));
}

function NameMapModule$$$map(f$$50, l$$29) {
  return (0, _Map.map)(function (_arg1$$15, x$$89) {
    return f$$50(x$$89);
  }, l$$29);
}

function NameMapModule$$$iter(f$$51, l$$30) {
  (0, _Map.iterate)(function (_k$$1, v$$9) {
    f$$51(v$$9);
  }, l$$30);
}

function NameMapModule$$$partition(f$$52, l$$31) {
  return [(0, _Map.filter)(function (_arg1$$16, x$$90) {
    return f$$52(x$$90);
  }, l$$31), (0, _Map.filter)(function (_arg2$$3, x$$91) {
    return !f$$52(x$$91);
  }, l$$31)];
}

function NameMapModule$$$mem(v$$10, m$$6) {
  return (0, _Map.containsKey)(v$$10, m$$6);
}

function NameMapModule$$$find(v$$11, m$$7) {
  return (0, _Map.find)(v$$11, m$$7);
}

function NameMapModule$$$tryFind(v$$12, m$$8) {
  return (0, _Map.tryFind)(v$$12, m$$8);
}

function NameMapModule$$$add(v$$13, x$$92, m$$9) {
  return (0, _Map.add)(v$$13, x$$92, m$$9);
}

function NameMapModule$$$isEmpty(m$$10) {
  return (0, _Map.isEmpty)(m$$10);
}

function NameMapModule$$$existsInRange(p$$11, m$$11) {
  return (0, _Map.foldBack)(function (_arg1$$17, y$$21, acc$$19) {
    return acc$$19 ? true : p$$11(y$$21);
  }, m$$11, false);
}

function NameMapModule$$$tryFindInRange(p$$12, m$$12) {
  return (0, _Map.foldBack)(function (_arg1$$18, y$$22, acc$$20) {
    return acc$$20 == null ? p$$12(y$$22) ? (0, _Option.some)(y$$22) : null : acc$$20;
  }, m$$12, null);
}

function NameMultiMapModule$$$existsInRange(f$$53, m$$13) {
  return NameMapModule$$$exists(function (_arg1$$19, l$$32) {
    return (0, _List.exists)(f$$53, l$$32);
  }, m$$13);
}

function NameMultiMapModule$$$find(v$$14, m$$14) {
  const matchValue$$25 = (0, _Map.tryFind)(v$$14, m$$14);

  if (matchValue$$25 != null) {
    const r$$9 = matchValue$$25;
    return r$$9;
  } else {
    return (0, _Types.L)();
  }
}

function NameMultiMapModule$$$add(v$$15, x$$93, m$$15) {
  return NameMapModule$$$add(v$$15, (0, _Types.L)(x$$93, NameMultiMapModule$$$find(v$$15, m$$15)), m$$15);
}

function NameMultiMapModule$$$range(m$$16) {
  return (0, _Map.foldBack)(function (_arg1$$20, x$$94, sofar$$4) {
    return (0, _List.append)(x$$94, sofar$$4);
  }, m$$16, (0, _Types.L)());
}

function NameMultiMapModule$$$rangeReversingEachBucket(m$$17) {
  return (0, _Map.foldBack)(function (_arg1$$21, x$$95, sofar$$5) {
    return (0, _List.append)((0, _List.reverse)(x$$95), sofar$$5);
  }, m$$17, (0, _Types.L)());
}

function NameMultiMapModule$$$chooseRange(f$$54, m$$18) {
  return (0, _Map.foldBack)(function (_arg1$$22, x$$96, sofar$$6) {
    return (0, _List.append)((0, _List.choose)(f$$54, x$$96), sofar$$6);
  }, m$$18, (0, _Types.L)());
}

function NameMultiMapModule$$$map(f$$55, m$$19) {
  return NameMapModule$$$map(function (list$$18) {
    return (0, _List.map)(f$$55, list$$18);
  }, m$$19);
}

function NameMultiMapModule$$$empty() {
  return (0, _Map.empty)({
    Compare: _Util.comparePrimitives
  });
}

function NameMultiMapModule$$$initBy(f$$56, xs$$20) {
  return (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$8(tupledArg$$4) {
    return [tupledArg$$4[0], (0, _List.ofSeq)(tupledArg$$4[1])];
  }, (0, _Map.groupBy)(f$$56, xs$$20, {
    Compare: _Util.comparePrimitives
  })), {
    Compare: _Util.comparePrimitives
  });
}

function NameMultiMapModule$$$ofList(xs$$21) {
  return (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$9(tupledArg$$5) {
    return [tupledArg$$5[0], (0, _List.ofSeq)((0, _Seq.map)(function (tuple$$1) {
      return tuple$$1[1];
    }, tupledArg$$5[1]))];
  }, (0, _Map.groupBy)(function projection$$1(tuple) {
    return tuple[0];
  }, xs$$21, {
    Compare: _Util.comparePrimitives
  })), {
    Compare: _Util.comparePrimitives
  });
}

function MultiMapModule$$$existsInRange(f$$57, m$$20) {
  return (0, _Map.exists)(function (_arg1$$23, l$$33) {
    return (0, _List.exists)(f$$57, l$$33);
  }, m$$20);
}

function MultiMapModule$$$find(v$$18, m$$21) {
  const matchValue$$26 = (0, _Map.tryFind)(v$$18, m$$21);

  if (matchValue$$26 != null) {
    const r$$10 = matchValue$$26;
    return r$$10;
  } else {
    return (0, _Types.L)();
  }
}

function MultiMapModule$$$add(v$$19, x$$97, m$$22) {
  return (0, _Map.add)(v$$19, (0, _Types.L)(x$$97, MultiMapModule$$$find(v$$19, m$$22)), m$$22);
}

function MultiMapModule$$$range(m$$23) {
  return (0, _Map.foldBack)(function (_arg1$$24, x$$98, sofar$$7) {
    return (0, _List.append)(x$$98, sofar$$7);
  }, m$$23, (0, _Types.L)());
}

function MultiMapModule$$$empty() {
  return (0, _Map.empty)({
    Compare: _Util.compare
  });
}

function MultiMapModule$$$initBy(f$$58, xs$$22) {
  return (0, _Map.ofSeq)((0, _Seq.map)(function mapping$$10(tupledArg$$6) {
    return [tupledArg$$6[0], (0, _List.ofSeq)(tupledArg$$6[1])];
  }, (0, _Map.groupBy)(f$$58, xs$$22, {
    Compare: _Util.compare
  })), {
    Compare: _Util.compare
  });
}

function Map$00602$002Eget_Empty$002EStatic() {
  return (0, _Map.empty)({
    Compare: _Util.compare
  });
}

function Map$00602$002ETryGetValue$$1505(m$$24, key$$2) {
  const matchValue$$27 = (0, _Map.FSharpMap$$TryFind$$2B595)(m$$24, key$$2);

  if (matchValue$$27 != null) {
    const r$$11 = (0, _Option.value)(matchValue$$27);
    return [true, r$$11];
  } else {
    return [false, null];
  }
}

function Map$00602$002Eget_Values(x$$99) {
  return (0, _List.ofSeq)((0, _Seq.delay)(function () {
    return (0, _Seq.collect)(function (matchValue$$28) {
      const activePatternResult11449 = matchValue$$28;
      return (0, _Seq.singleton)(activePatternResult11449[1]);
    }, x$$99);
  }));
}

function Map$00602$002EAddAndMarkAsCollapsible$$3209D872(x$$100, kvs) {
  return (0, _Array.fold)(function folder$$3(x$$101, _arg1$$25) {
    const activePatternResult11454 = _arg1$$25;
    return (0, _Map.FSharpMap$$Add$$5BDDA1)(x$$101, activePatternResult11454[0], activePatternResult11454[1]);
  }, x$$100, kvs);
}

function Map$00602$002ELinearTryModifyThenLaterFlatten$$Z723919C0(x$$102, key$$3, f$$59) {
  return (0, _Map.FSharpMap$$Add$$5BDDA1)(x$$102, key$$3, f$$59((0, _Map.FSharpMap$$TryFind$$2B595)(x$$102, key$$3)));
}

function Map$00602$002EMarkAsCollapsible(x$$103) {
  return x$$103;
}

const LayeredMultiMap$00602 = (0, _Types.declare)(function LayeredMultiMap$00602(contents) {
  const $this$$80 = this;
  $this$$80.contents = contents;
});
exports.LayeredMultiMap$00602 = LayeredMultiMap$00602;

function LayeredMultiMap$00602$$$$002Ector$$Z69A679EB(contents) {
  return this != null ? LayeredMultiMap$00602.call(this, contents) : new LayeredMultiMap$00602(contents);
}

function LayeredMultiMap$00602$$Add$$5BDDA1(x$$104, k$$14, v$$23) {
  return LayeredMultiMap$00602$$$$002Ector$$Z69A679EB((0, _Map.FSharpMap$$Add$$5BDDA1)(x$$104.contents, k$$14, (0, _Types.L)(v$$23, LayeredMultiMap$00602$$get_Item$$2B595(x$$104, k$$14))));
}

function LayeredMultiMap$00602$$get_Item$$2B595(x$$105, k$$15) {
  const matchValue$$29 = (0, _Map.FSharpMap$$TryFind$$2B595)(x$$105.contents, k$$15);

  if (matchValue$$29 != null) {
    const l$$34 = matchValue$$29;
    return l$$34;
  } else {
    return (0, _Types.L)();
  }
}

function LayeredMultiMap$00602$$AddAndMarkAsCollapsible$$Z1EDC52D(x$$106, kvs$$1) {
  const x$$108 = (0, _Array.fold)(function folder$$4(x$$107, _arg2$$4) {
    const activePatternResult11473 = _arg2$$4;
    return LayeredMultiMap$00602$$Add$$5BDDA1(x$$107, activePatternResult11473[0], activePatternResult11473[1]);
  }, x$$106, kvs$$1);
  return LayeredMultiMap$00602$$MarkAsCollapsible(x$$108);
}

function LayeredMultiMap$00602$$MarkAsCollapsible(x$$109) {
  return LayeredMultiMap$00602$$$$002Ector$$Z69A679EB(Map$00602$002EMarkAsCollapsible(x$$109.contents));
}

function LayeredMultiMap$00602$$TryFind$$2B595(x$$110, k$$17) {
  return (0, _Map.FSharpMap$$TryFind$$2B595)(x$$110.contents, k$$17);
}

function LayeredMultiMap$00602$$get_Values(x$$111) {
  return (0, _List.concat)(Map$00602$002Eget_Values(x$$111.contents));
}

function LayeredMultiMap$00602$$$get_Empty() {
  return LayeredMultiMap$00602$$$$002Ector$$Z69A679EB(Map$00602$002Eget_Empty$002EStatic());
}

const Shim$002EDefaultFileSystem = (0, _Types.declare)(function Shim$002EDefaultFileSystem() {});
exports.Shim$002EDefaultFileSystem = Shim$002EDefaultFileSystem;

function Shim$002EDefaultFileSystem$$$$002Ector() {
  return this != null ? Shim$002EDefaultFileSystem.call(this) : new Shim$002EDefaultFileSystem();
}

Shim$002EDefaultFileSystem.prototype.GetFullPathShim = function (fileName) {
  return (0, _adapters.System$002EIO$002EPath$$$GetFullPath)(fileName);
};

Shim$002EDefaultFileSystem.prototype.IsPathRootedShim = function (path) {
  return (0, _adapters.System$002EIO$002EPath$$$IsPathRooted)(path);
};

Shim$002EDefaultFileSystem.prototype.IsInvalidPathShim = function (path$$1) {
  const isInvalidPath = function isInvalidPath(p$$13) {
    if ((0, _String.isNullOrEmpty)(p$$13)) {
      return true;
    } else {
      return (0, _String.indexOfAny)(p$$13, (0, _adapters.System$002EIO$002EPath$$$GetInvalidPathChars)()) !== -1;
    }
  };

  const isInvalidFilename = function isInvalidFilename(p$$14) {
    if ((0, _String.isNullOrEmpty)(p$$14)) {
      return true;
    } else {
      return (0, _String.indexOfAny)(p$$14, (0, _adapters.System$002EIO$002EPath$$$GetInvalidFileNameChars)()) !== -1;
    }
  };

  const isInvalidDirectory = function isInvalidDirectory(d$$1) {
    if (d$$1 === null) {
      return true;
    } else {
      return (0, _String.indexOfAny)(d$$1, (0, _adapters.System$002EIO$002EPath$$$GetInvalidPathChars)()) !== -1;
    }
  };

  if (isInvalidPath(path$$1)) {
    return true;
  } else {
    const directory = (0, _adapters.System$002EIO$002EPath$$$GetDirectoryName)(path$$1);
    const filename = (0, _adapters.System$002EIO$002EPath$$$GetFileName)(path$$1);
    return isInvalidDirectory(directory) ? true : isInvalidFilename(filename);
  }
};

const Shim$$$FileSystem = (0, _Util.createAtom)(Shim$002EDefaultFileSystem$$$$002Ector());
exports.Shim$$$FileSystem = Shim$$$FileSystem;