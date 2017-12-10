import {Stream} from '@most/types'
import {
  runEffects,
  tap,
  map,
  constant,
  take,
  scan,
  startWith,
  filter,
  skip,
  skipRepeats,
  skipRepeatsWith
} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'

export const chain = <A>($: Stream<A>) => ({
  constant: <B>(b: B) => chain(constant(b, $)),
  scan: <B>(f: (b: B, a: A) => B, b: B) => chain(scan(f, b, $)),
  map: <B>(f: (a: A) => B) => chain(map<A, B>(f, $)),
  reduce: <S>(f: (s: S, a: A) => S, initState: S): Promise<S> =>
    chain($)
      .scan((s, a) => {
        initState = f(s, a)
        return initState
      }, initState)
      .drain()
      .then(() => initState),
  startWith: (value: A) => chain(startWith(value, $)),
  take: (n: number) => chain(take(n, $)),
  tap: (f: (a: A) => any) => chain(tap(f, $)),
  filter: (p: (a: A) => boolean) => chain(filter(p, $)),
  skip: (n: number) => chain(skip(1, $)),
  skipRepeats: () => chain(skipRepeats($)),
  skipRepeatsWith: (f: (l: A, r: A) => boolean) => chain(skipRepeatsWith(f, $)),
  drain: () => runEffects($, newDefaultScheduler()),
  valueOf: () => $
})
