import {Stream} from '@most/types'
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
  delay
} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'

export const chain = <A>($: Stream<A>) => ({
  constant: <B>(b: B) => chain(constant(b, $)),
  scan: <B>(f: (b: B, a: A) => B, b: B) => chain(scan(f, b, $)),
  map: <B>(f: (a: A) => B) => chain(map<A, B>(f, $)),
  combine: <B, R>(fn: (a: A, b: B) => R, b$: Stream<B>) =>
    chain(combine(fn, $, b$)),
  reduce: <S>(f: (s: S, a: A) => S, initState: S): Promise<S> =>
    chain($)
      .scan((s, a) => {
        initState = f(s, a)
        return initState
      }, initState)
      .drain()
      .then(() => initState),
  delay: (n: number) => chain(delay(n, $)),
  startWith: (value: A) => chain(startWith(value, $)),
  merge: (b$: Stream<A>) => chain(merge($, b$)),
  take: (n: number) => chain(take(n, $)),
  tap: (f: (a: A) => any) => chain(tap(f, $)),
  filter: (p: (a: A) => boolean) => chain(filter(p, $)),
  skip: (n: number) => chain(skip(n, $)),
  skipRepeats: () => chain(skipRepeats($)),
  skipRepeatsWith: (f: (l: A, r: A) => boolean) => chain(skipRepeatsWith(f, $)),
  drain: () => runEffects($, newDefaultScheduler()),
  pairwise: (initial: A) =>
    chain(
      loop(
        (prev, current) => ({seed: current, value: [prev, current]}),
        initial,
        $
      )
    ),
  valueOf: () => $
})
