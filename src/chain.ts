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
  startWith: (value: A) => chain(startWith(value, $)),
  take: (n: number) => chain(take(n, $)),
  tap: (f: (a: A) => any) => chain(tap(f, $)),
  scan: <B>(f: (b: B, a: A) => B, b: B) => chain(scan(f, b, $)),
  map: <B>(f: (a: A) => B) => chain(map<A, B>(f, $)),
  filter: (p: (a: A) => boolean) => chain(filter(p, $)),
  skip: (n: number) => chain(skip(1, $)),
  skipRepeats: () => chain(skipRepeats($)),
  skipRepeatsWith: (f: (l: A, r: A) => boolean) => chain(skipRepeatsWith(f, $)),
  reduce: <S>(f: (s: S, a: A) => S, initState: S): Promise<S> => {
    var state = initState
    return chain($)
      .scan(f, initState)
      .tap(s => {
        state = s
      })
      .drain()
      .then(() => state)
  },
  drain: () => runEffects($, newDefaultScheduler()),
  valueOf: () => $
})
