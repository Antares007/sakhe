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
  skipRepeats: () => chain(skipRepeats($)),
  skipRepeatsWith: (f: (l: A, r: A) => boolean) => chain(skipRepeatsWith(f, $)),
  reduce: <S>(f: (s: S, a: A) => S, s: S): Promise<S> => {
    var state: S
    return runEffects(
      tap(
        s => {
          state = s
        },
        scan(
          (s, a) => {
            return s
          },
          s,
          $
        )
      ),
      newDefaultScheduler()
    ).then(() => state)
  },
  drain: () => runEffects($, newDefaultScheduler()),
  valueOf: () => $
})
