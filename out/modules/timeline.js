"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.return$0027 = return$0027;
exports.value = value;
exports.nextArrival = nextArrival;
exports.takeUntil = takeUntil;
exports.mappend = mappend;
exports.T$00603 = void 0;

var _Types = require("./fable-core.2.0.1/Types");

var _Map = require("./fable-core.2.0.1/Map");

var _Util = require("./fable-core.2.0.1/Util");

var _o = require("./o");

var _abo = require("./abo");

var _Seq = require("./fable-core.2.0.1/Seq");

var _List = require("./fable-core.2.0.1/List");

const T$00603 = (0, _Types.declare)(function T$00603(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.T$00603 = T$00603;

function return$0027(f) {
  var projection;
  const o$$1 = (0, _o.return$0027)(function (m, tupledArg) {
    const matchValue = (0, _Map.tryFind)(tupledArg[0][0], m);

    if (matchValue != null) {
      const o = matchValue;
      return (0, _Map.add)(tupledArg[0][0], (0, _Types.L)([tupledArg[0][1], tupledArg[1]], o), m);
    } else {
      return (0, _Map.add)(tupledArg[0][0], (0, _Types.L)([tupledArg[0][1], tupledArg[1]], (0, _Types.L)()), m);
    }
  }, (0, _Map.empty)({
    Compare: _Util.compare
  }));
  (0, _abo.run)(null, o$$1, f);

  if ((0, _Map.FSharpMap$$get_Count)((0, _o.T$00602$$get_Value)(o$$1)) === 0) {
    return null;
  } else {
    return new T$00603(0, "TimeLine", (0, _Seq.fold)(function folder(l, a$$1) {
      return (0, _Types.L)(a$$1, l);
    }, (0, _Types.L)(), (projection = function projection(tuple) {
      return tuple[0];
    }, function (source$$1) {
      return (0, _Seq.sortWith)(function ($x$$5, $y$$6) {
        return (0, _Util.compare)(projection($x$$5), projection($y$$6));
      }, source$$1);
    })((0, _Map.toSeq)((0, _o.T$00602$$get_Value)(o$$1)))));
  }
}

function value(_arg1$$1) {
  const l$$1 = _arg1$$1.fields[0];
  return (0, _abo.return$0027)((0, _Util.uncurry)(2, function () {
    let pith = function pith(value$$3) {
      value$$3;
    };

    (0, _List.iterate)(function (tupledArg$$1) {
      (0, _List.iterate)(function (tupledArg$$2) {
        const oldPith = pith;

        pith = function (o$$2) {
          o$$2([[tupledArg$$1[0], tupledArg$$2[0]], tupledArg$$2[1]]);
          oldPith(o$$2);
        };
      }, tupledArg$$1[1]);
    }, l$$1);
    return pith;
  }));
}

function nextArrival(_arg1$$2) {
  const tl = _arg1$$2.fields[0];
  return (0, _List.last)(tl)[0];
}

function takeUntil(now, tl$$1) {
  const abo = value(tl$$1);
  const o$$5 = (0, _o.return$0027)(function (tupledArg$$3, abc) {
    return (0, _Util.compare)(abc[0][0], now) < 0 ? [function (o$$3) {
      tupledArg$$3[0](o$$3);
      o$$3(abc);
    }, tupledArg$$3[1]] : [tupledArg$$3[0], function (o$$4) {
      tupledArg$$3[1](o$$4);
      o$$4(abc);
    }];
  }, [function (value$$4) {
    value$$4;
  }, function (value$$5) {
    value$$5;
  }]);
  (0, _abo.run)(null, o$$5, abo);
  const patternInput = (0, _o.T$00602$$get_Value)(o$$5);
  const l$$3 = return$0027((0, _abo.return$0027)((0, _Util.uncurry)(2, function () {
    return patternInput[0];
  })));
  const r = return$0027((0, _abo.return$0027)((0, _Util.uncurry)(2, function () {
    return patternInput[1];
  })));
  return [l$$3, r];
}

function mappend(_arg2, _arg1$$3) {
  const l$$4 = _arg2.fields[0];
  const r$$1 = _arg1$$3.fields[0];

  const go = function go(o$$6, l$$5, r$$2) {
    go: while (true) {
      const matchValue$$1 = [l$$5, r$$2];

      if (matchValue$$1[0].tail != null) {
        if (matchValue$$1[1].tail != null) {
          if ((0, _Util.compare)(matchValue$$1[0].head[0], matchValue$$1[1].head[0]) < 0) {
            o$$6 = (0, _Types.L)(matchValue$$1[1].head, (0, _Types.L)(matchValue$$1[0].head, o$$6));
            l$$5 = matchValue$$1[0].tail;
            r$$2 = matchValue$$1[1].tail;
            continue go;
          } else if ((0, _Util.compare)(matchValue$$1[0].head[0], matchValue$$1[1].head[0]) > 0) {
            o$$6 = (0, _Types.L)(matchValue$$1[0].head, (0, _Types.L)(matchValue$$1[1].head, o$$6));
            l$$5 = matchValue$$1[0].tail;
            r$$2 = matchValue$$1[1].tail;
            continue go;
          } else {
            o$$6 = (0, _Types.L)([matchValue$$1[0].head[0], (0, _List.append)(matchValue$$1[0].head[1], matchValue$$1[1].head[1])], o$$6);
            l$$5 = matchValue$$1[0].tail;
            r$$2 = matchValue$$1[1].tail;
            continue go;
          }
        } else {
          return (0, _List.append)(o$$6, matchValue$$1[0]);
        }
      } else if (matchValue$$1[1].tail == null) {
        return o$$6;
      } else {
        return (0, _List.append)(o$$6, matchValue$$1[1]);
      }
    }
  };

  return new T$00603(0, "TimeLine", go((0, _Types.L)(), l$$4, r$$1));
}