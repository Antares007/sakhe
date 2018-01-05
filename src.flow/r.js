// @flow
import type {Stream} from '@most/types'
import type {$} from './most'
import {map, mergeArray, now} from '@most/core'
import {tree as mostTree, to$} from './most'

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
