// @flow
import type {Stream} from '@most/types'
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
  loop,
  merge,
  continueWith,
  delay
} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'

export class MStream<A> {
  $: Stream<A>
  constructor($: Stream<A>) {
    this.$ = $
  }
  constant<B>(b: B): MStream<B> {
    return new MStream(constant(b, this.$))
  }
  scan<B>(f: (b: B, a: A) => B, b: B): MStream<B> {
    return new MStream(scan(f, b, this.$))
  }
  map<B>(f: (a: A) => B): MStream<B> {
    return new MStream(map(f, this.$))
  }
  combine<B, R>(fn: (a: A, b: B) => R, b$: Stream<B>): MStream<R> {
    return new MStream(combine(fn, this.$, b$))
  }
  reduce<S>(f: (s: S, a: A) => S, initState: S): Promise<S> {
    var s = initState
    var rez = tap(ns => {
      s = ns
    }, scan((s, a) => f(s, a), initState, this.$))
    return runEffects(rez, newDefaultScheduler()).then(() => s)
  }
  continueWith(f: () => Stream<A>): MStream<A> {
    return new MStream(continueWith(f, this.$))
  }
  delay(n: number): MStream<A> {
    return new MStream(delay(n, this.$))
  }
  startWith(value: A): MStream<A> {
    return new MStream(startWith(value, this.$))
  }
  merge(b$: Stream<A>): MStream<A> {
    return new MStream(merge(this.$, b$))
  }
  take(n: number): MStream<A> {
    return new MStream(take(n, this.$))
  }
  tap(f: (a: A) => mixed): MStream<A> {
    return new MStream(tap(f, this.$))
  }
  filter(p: (a: A) => boolean): MStream<A> {
    return new MStream(filter(p, this.$))
  }
  skip(n: number): MStream<A> {
    return new MStream(skip(n, this.$))
  }
  skipRepeats(): MStream<A> {
    return new MStream(skipRepeats(this.$))
  }
  skipRepeatsWith(f: (l: A, r: A) => boolean): MStream<A> {
    return new MStream(skipRepeatsWith(f, this.$))
  }
  drain() {
    return runEffects(this.$, newDefaultScheduler())
  }
  valueOf() {
    return this.$
  }
}
