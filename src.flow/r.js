// @flow
import type {Stream} from '@most/types'
import {mergeArray, map, now, runEffects, scan, tap} from '@most/core'
import type {$} from './most'
import {tree as mostTree, to$} from './most'
import {newDefaultScheduler} from '@most/scheduler'

export interface Absurd<T> {
  (): T;
}

export interface RState<T> {
  (state: T): T;
}

export interface Pith<A: Object> {
  (state: {
    extend<Key: $Keys<A>, B: $Subtype<$ElementType<A, Key>>>(
      key: Key,
      absurdB: Absurd<B>
    ): (pith: $<Pith<B>>) => void,
    val<Key: $Keys<A>>(key: Key, r: Stream<RState<$ElementType<A, Key>>>): void
  }): void;
}

export interface Bark<A> {
  (pith: $<Pith<A>>): Stream<RState<A>>;
}
export const tree = <A: Object>(absurdA: Absurd<A>): Bark<A> => pith => {
  return mostTree(mergeArray)(
    map(
      pith => put => {
        pith({
          extend: (key, absurdB) => oPith =>
            put(
              map(
                r => a => {
                  const ak = a[key]
                  const bk = r(Object.assign(absurdB(), ak))
                  if (ak === bk) return a
                  return Object.assign(absurdA(), a, {[key]: bk})
                },
                tree(absurdB)(oPith)
              )
            ),
          val: (key, r) =>
            put(
              map(
                r => a => {
                  const ak = a[key]
                  const bk = r(ak)
                  if (ak === bk) return a
                  return Object.assign(absurdA(), a, {[key]: bk})
                },
                r
              )
            )
        })
      },
      to$(pith)
    )
  )
}
var abs = () => ({a: 42, b: {o: ''}})
var rez = tree(abs)(put => {
  put.val('a', now(n => n + 1))
  put.extend('b', () => ({o: 'otar', t: 1}))(put => {
    put.val('o', now(s => s + ' bolkvadze'))
  })
})

runEffects(
  tap(console.log.bind(console), scan((s, r) => r(s), abs(), rez)),
  newDefaultScheduler()
)
