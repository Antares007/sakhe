import {
  runEffects,
  tap,
  map,
  constant,
  combine,
  take,
  scan,
  startWith,
  filter,
  skip,
  skipRepeats,
  skipRepeatsWith,
  switchLatest,
  merge,
  continueWith,
  delay,
  multicast,
  debounce
} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'

export default class M {
  constructor ($) {
    this.$ = $
  }
  debounce (n) {
    return new M(debounce(n, this.$))
  }
  multicast () {
    return new M(multicast(this.$))
  }
  static of (a) {
    return new M(a)
  }
  static switchLatest (m) {
    return new M(switchLatest(m.map(x => x.valueOf()).valueOf()))
  }
  constant (b) {
    return new M(constant(b, this.$))
  }
  scan (f, b) {
    return new M(scan(f, b, this.$))
  }
  map (f) {
    return new M(map(f, this.$))
  }
  combine (fn, b$) {
    return new M(combine(fn, this.$, b$))
  }
  reduce (f, initState) {
    let s = initState
    const rez = tap(ns => {
      s = ns
    }, scan((s, a) => f(s, a), initState, this.$))
    return runEffects(rez, newDefaultScheduler()).then(() => s)
  }
  continueWith (f) {
    return new M(continueWith(f, this.$))
  }
  delay (n) {
    return new M(delay(n, this.$))
  }
  startWith (value) {
    return new M(startWith(value, this.$))
  }
  merge (b$) {
    return new M(merge(this.$, b$))
  }
  take (n) {
    return new M(take(n, this.$))
  }
  tap (f) {
    return new M(tap(f, this.$))
  }
  filter (p) {
    return new M(filter(p, this.$))
  }
  skip (n) {
    return new M(skip(n, this.$))
  }
  skipRepeats () {
    return new M(skipRepeats(this.$))
  }
  skipRepeatsWith (f) {
    return new M(skipRepeatsWith(f, this.$))
  }
  drain () {
    return runEffects(this.$, newDefaultScheduler())
  }
  valueOf () {
    return this.$
  }
}
