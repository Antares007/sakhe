import {Stream} from '@most/types'
import {mergeArray, map} from '@most/core'
import {ring as mostRing, tree as mostTree, $, isStream} from './most'

export interface Absurd<T> {
  (): T
}

export interface RState<T> {
  (state: T): T
}

export interface Pith<A extends object> {
  (
    state: {
      extend: <B extends A[K] & object, K extends keyof A>(
        key: K,
        absurdB: Absurd<B>
      ) => (pith: $<Pith<B>>) => void
      val: <K extends keyof A>(key: K, r: Stream<RState<A[K]>>) => void
    }
  ): void
}

export interface Bark<A extends object> {
  (pith: $<Pith<A>>): Stream<RState<A>>
}

export const ring = <B, A extends object>(
  pmap: (b: B) => Pith<A>
): ((b: $<B>) => $<Pith<A>>) => b => (isStream(b) ? map(pmap, b) : pmap(b))

const oRing = <A extends object>(absurdA: Absurd<A>) =>
  mostRing<Pith<A>, RState<A>>(pith => put => {
    const b2a = <B extends A[K] & object, K extends keyof A>(
      key: K,
      absurdB: () => B
    ) =>
      map((r: RState<B>): RState<A> => a => {
        const ak = a[key]
        const bk = r(Object.assign(absurdB(), ak))
        if (ak === bk) return a
        return Object.assign(absurdA(), a, {[<any>key]: bk})
      })
    const ak2a = <K extends keyof A>(key: K) =>
      map<RState<A[K]>, RState<A>>(r => a => {
        const ak = a[key]
        const bk = r(ak)
        if (ak === bk) return a
        return Object.assign(absurdA(), a, {[key]: bk})
      })
    pith({
      extend: (key, absurdB) => oPith =>
        put(b2a(key, absurdB)(tree(absurdB)(oPith))),
      val: (key, r) => put(ak2a(key)(r))
    })
  })

export const tree = <A extends object>(absurdA: Absurd<A>): Bark<A> => pith =>
  mostTree<RState<A>>(mergeArray)(oRing(absurdA)(pith))