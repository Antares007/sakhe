"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jaro = jaro;
exports.JaroWinklerDistance = JaroWinklerDistance;
exports.CalcEditDistance = CalcEditDistance;

var _Util = require("../fable-core.2.0.3/Util");

var _Array = require("../fable-core.2.0.3/Array");

function jaro(s1, s2) {
  let matchRadius;
  const minLen = (0, _Util.min)(_Util.comparePrimitives, s1.length, s2.length) | 0;
  matchRadius = ~~(minLen / 2) + minLen % 2;

  const commonChars = function commonChars(chars1, chars2) {
    var startAt, endAt, exists;
    const result = [];

    for (let i = 0; i <= chars1.length - 1; i++) {
      const c = chars1[i];

      if (startAt = (0, _Util.max)(_Util.comparePrimitives, 0, i - matchRadius) | 0, (endAt = (0, _Util.min)(_Util.comparePrimitives, i + matchRadius, chars2.length - 1) | 0, endAt - startAt < 0 ? false : (exists = function exists(index) {
        exists: while (true) {
          if (chars2[index] === c) {
            return true;
          } else if (index === endAt) {
            return false;
          } else {
            index = index + 1;
            continue exists;
          }
        }
      }, exists(startAt)))) {
        result.push(c);
      }
    }

    return result;
  };

  const c1 = commonChars(s1, s2);
  const c2 = commonChars(s2, s1);
  const c1length = (0, _Util.count)(c1);
  const c2length = (0, _Util.count)(c2);
  let transpositions;
  let mismatches = 0;

  for (let i$$1 = 0; i$$1 <= (0, _Util.min)(_Util.comparePrimitives, (0, _Util.count)(c1), (0, _Util.count)(c2)) - 1; i$$1++) {
    if (c1[i$$1] !== c2[i$$1]) {
      mismatches = mismatches + 1;
    }
  }

  transpositions = (mismatches + Math.abs(c1length - c2length)) / 2;
  const tLength = (0, _Util.max)(_Util.comparePrimitives, c1length, c2length);
  const result$$1 = (c1length / s1.length + c2length / s2.length + (tLength - transpositions) / tLength) / 3;

  if (Number.isNaN(result$$1)) {
    return 0;
  } else {
    return result$$1;
  }
}

function JaroWinklerDistance(s1$$1, s2$$1) {
  const jaroScore = jaro(s1$$1, s2$$1);
  const maxLength = (0, _Util.min)(_Util.comparePrimitives, s1$$1.length, s2$$1.length) - 1 | 0;

  const calcL = function calcL(i$$2, acc) {
    calcL: while (true) {
      if (i$$2 > maxLength ? true : s1$$1[i$$2] !== s2$$1[i$$2]) {
        return acc;
      } else {
        i$$2 = i$$2 + 1;
        acc = acc + 1;
        continue calcL;
      }
    }
  };

  const l = (0, _Util.min)(_Util.comparePrimitives, calcL(0, 0), 4);
  const p = 0.1;
  return jaroScore + l * p * (1 - jaroScore);
}

function calcDamerauLevenshtein(a, b) {
  const m = b.length + 1 | 0;
  let lastLine = (0, _Array.initialize)(m, function (x) {
    return x;
  }, Int32Array);
  let lastLastLine = new Int32Array(m);
  let actLine = new Int32Array(m);

  for (let i$$3 = 1; i$$3 <= a.length; i$$3++) {
    actLine[0] = i$$3;

    for (let j = 1; j <= b.length; j++) {
      const cost = (a[i$$3 - 1] === b[j - 1] ? 0 : 1) | 0;
      const deletion = lastLine[j] + 1 | 0;
      const insertion = actLine[j - 1] + 1 | 0;
      const substitution = lastLine[j - 1] + cost | 0;
      actLine[j] = (0, _Util.min)(_Util.comparePrimitives, substitution, (0, _Util.min)(_Util.comparePrimitives, insertion, deletion));

      if (i$$3 > 1 ? j > 1 : false) {
        if (a[i$$3 - 1] === b[j - 2] ? a[i$$3 - 2] === b[j - 1] : false) {
          const transposition = lastLastLine[j - 2] + cost | 0;
          actLine[j] = (0, _Util.min)(_Util.comparePrimitives, actLine[j], transposition);
        }
      }
    }

    const temp = lastLastLine;
    lastLastLine = lastLine;
    lastLine = actLine;
    actLine = temp;
  }

  return lastLine[b.length] | 0;
}

function CalcEditDistance(a$$1, b$$1) {
  if (a$$1.length > b$$1.length) {
    return calcDamerauLevenshtein(a$$1, b$$1) | 0;
  } else {
    return calcDamerauLevenshtein(b$$1, a$$1) | 0;
  }
}