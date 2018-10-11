"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow32 = pow32;
exports.leastBounding2Power = leastBounding2Power;
exports.toInt = toInt;
exports.ofInt32 = ofInt32;
exports.mpow = mpow;
exports.mpowL = mpowL;
exports.m2PowNthRoot = m2PowNthRoot;
exports.minv = minv;
exports.computeFFT = computeFFT;
exports.computFftInPlace = computFftInPlace;
exports.computeInverseFftInPlace = computeInverseFftInPlace;
exports.computeFftPaddedPolynomialProduct = computeFftPaddedPolynomialProduct;
exports.padTo = padTo;
exports.computeFftPolynomialProduct = computeFftPolynomialProduct;
exports.maxFp = exports.twoPowerTable = exports.maxTwoPower = exports.mtwo = exports.mone = exports.mzero = exports.p64 = exports.p = exports.maxBitsInsideFp = exports.primeP = exports.w = exports.g = exports.m = exports.k = void 0;

var _Long = require("../fable-core.2.0.3/Long");

var _Seq = require("../fable-core.2.0.3/Seq");

function pow32(x, n) {
  if (n === 0) {
    return 1;
  } else if (n % 2 === 0) {
    return pow32(x * x, ~~(n / 2));
  } else {
    return x * pow32(x * x, ~~(n / 2));
  }
}

function leastBounding2Power(b) {
  const findBounding2Power = b_1 => tp => i => {
    if (b_1 <= tp) {
      return [tp, i];
    } else {
      return findBounding2Power(b_1)(tp * 2)(i + 1);
    }
  };

  return findBounding2Power(b)(1)(0);
}

const k = 27;
exports.k = k;
const m = 15;
exports.m = m;
const g = 31;
exports.g = g;
const w = 440564289;
exports.w = w;
const primeP = (0, _Long.fromBits)(2013265921, 0, false);
exports.primeP = primeP;
const maxBitsInsideFp = 30;
exports.maxBitsInsideFp = maxBitsInsideFp;
const p = 2013265921;
exports.p = p;
const p64 = (0, _Long.fromBits)(2013265921, 0, true);
exports.p64 = p64;

function toInt(x) {
  return ~~x;
}

function ofInt32(x) {
  return x >>> 0;
}

const mzero = 0;
exports.mzero = mzero;
const mone = 1;
exports.mone = mone;
const mtwo = 2;
exports.mtwo = mtwo;

function mpow(x, n) {
  if (n === 0) {
    return mone;
  } else if (n % 2 === 0) {
    return mpow((0, _Long.fromNumber)(x, true).mul((0, _Long.fromNumber)(x, true)).mod(p64).toNumber() >>> 0, ~~(n / 2));
  } else {
    return (0, _Long.fromNumber)(x, true).mul((0, _Long.fromNumber)(mpow((0, _Long.fromNumber)(x, true).mul((0, _Long.fromNumber)(x, true)).mod(p64).toNumber() >>> 0, ~~(n / 2)), true)).mod(p64).toNumber() >>> 0;
  }
}

function mpowL(x, n) {
  if (n.Equals((0, _Long.fromBits)(0, 0, false))) {
    return mone;
  } else if (n.mod((0, _Long.fromBits)(2, 0, false)).Equals((0, _Long.fromBits)(0, 0, false))) {
    return mpowL((0, _Long.fromNumber)(x, true).mul((0, _Long.fromNumber)(x, true)).mod(p64).toNumber() >>> 0, n.div((0, _Long.fromBits)(2, 0, false)));
  } else {
    return (0, _Long.fromNumber)(x, true).mul((0, _Long.fromNumber)(mpowL((0, _Long.fromNumber)(x, true).mul((0, _Long.fromNumber)(x, true)).mod(p64).toNumber() >>> 0, n.div((0, _Long.fromBits)(2, 0, false))), true)).mod(p64).toNumber() >>> 0;
  }
}

function m2PowNthRoot(n) {
  return mpow(w >>> 0, pow32(2, k - n));
}

function minv(x) {
  return mpowL(x, primeP.sub((0, _Long.fromBits)(2, 0, false)));
}

function computeFFT(lambda, mu, n, w_1, u, res, offset) {
  if (n === 1) {
    res[offset] = u[mu];
  } else {
    const halfN = ~~(n / 2);
    const ww = (0, _Long.fromNumber)(w_1, true).mul((0, _Long.fromNumber)(w_1, true)).mod(p64).toNumber() >>> 0;
    const offsetHalfN = offset + halfN;
    computeFFT(lambda * 2, mu, halfN, ww, u, res, offset);
    computeFFT(lambda * 2, lambda + mu, halfN, ww, u, res, offsetHalfN);
    let wj = mone;

    for (let j = 0; j <= halfN - 1; j++) {
      const even = res[offset + j];
      const odd = res[offsetHalfN + j];
      res[offset + j] = (even + ((0, _Long.fromNumber)(wj, true).mul((0, _Long.fromNumber)(odd, true)).mod(p64).toNumber() >>> 0)) % p;
      res[offsetHalfN + j] = (even + p - ((0, _Long.fromNumber)(wj, true).mul((0, _Long.fromNumber)(odd, true)).mod(p64).toNumber() >>> 0)) % p;
      wj = (0, _Long.fromNumber)(w_1, true).mul((0, _Long.fromNumber)(wj, true)).mod(p64).toNumber() >>> 0;
    }
  }
}

function computFftInPlace(n, w_1, u) {
  const lambda = 1;
  const mu = 0;
  const res = Uint32Array.from((0, _Seq.replicate)(n, mzero));
  const offset = 0;
  computeFFT(lambda, mu, n, w_1, u, res, offset);
  return res;
}

function computeInverseFftInPlace(n, w_1, uT) {
  const bigKInv = minv(n >>> 0);
  return computFftInPlace(n, minv(w_1), uT).map(y => (0, _Long.fromNumber)(bigKInv, true).mul((0, _Long.fromNumber)(y, true)).mod(p64).toNumber() >>> 0);
}

const maxTwoPower = 29;
exports.maxTwoPower = maxTwoPower;
const twoPowerTable = Int32Array.from((0, _Seq.initialize)(maxTwoPower - 1, i => pow32(2, i)));
exports.twoPowerTable = twoPowerTable;

function computeFftPaddedPolynomialProduct(bigK, k_1, u, v) {
  const w_1 = m2PowNthRoot(k_1);
  const uT = computFftInPlace(bigK, w_1, u);
  const vT = computFftInPlace(bigK, w_1, v);
  const rT = Uint32Array.from((0, _Seq.initialize)(bigK, i => (0, _Long.fromNumber)(uT[i], true).mul((0, _Long.fromNumber)(vT[i], true)).mod(p64).toNumber() >>> 0));
  const r = computeInverseFftInPlace(bigK, w_1, rT);
  return r;
}

function padTo(n, u) {
  const uBound = u.length;
  return Uint32Array.from((0, _Seq.initialize)(n, i => {
    if (i < uBound) {
      return ofInt32(u[i]);
    } else {
      return mzero;
    }
  }));
}

function computeFftPolynomialProduct(degu, u, degv, v) {
  const deguv = degu + degv;
  const bound = deguv + 1;
  const patternInput = leastBounding2Power(bound);
  const w_1 = m2PowNthRoot(patternInput[1]);
  const u_1 = padTo(patternInput[0], u);
  const v_1 = padTo(patternInput[0], v);
  const uT = computFftInPlace(patternInput[0], w_1, u_1);
  const vT = computFftInPlace(patternInput[0], w_1, v_1);
  const rT = Uint32Array.from((0, _Seq.initialize)(patternInput[0], i => (0, _Long.fromNumber)(uT[i], true).mul((0, _Long.fromNumber)(vT[i], true)).mod(p64).toNumber() >>> 0));
  const r = computeInverseFftInPlace(patternInput[0], w_1, rT);
  return Int32Array.from((0, _Seq.map)(x => toInt(x), r));
}

const maxFp = (p + p - mone) % p;
exports.maxFp = maxFp;