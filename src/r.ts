import {Stream} from '@most/types'
import {mergeArray, map} from '@most/core'
import {ring as mostRing, tree as mostTree, $, isStream} from './most'

export type Absurd<T> = () => T
export type R<T> = (state: T) => T
export interface Pith<A> {
  (
    state: {
      extend: <B extends A[K], K extends keyof A>(
        key: K,
        absurdB: Absurd<B>
      ) => (pith: $<Pith<B>>) => void
      reduce: <K extends keyof A>(key: K, r: Stream<R<A[K]>>) => void
    }
  ): void
}
export interface Bark<A> {
  (pith: $<Pith<A>>): Stream<R<A>>
}

export const ring = <B, A>(
  pmap: (b: B) => Pith<A>
): ((b: $<B>) => $<Pith<A>>) => b =>
  isStream(b) ? map(pmap, b) : pmap(b)

export const tree = <A>(absurdA: Absurd<A>): Bark<A> => pith =>
  mostTree<R<A>>(mergeArray)(
    mostRing<Pith<A>, R<A>>(pith => put => {
      pith({
        extend: <B extends A[K], K extends keyof A>(
          key: K,
          absurdB: Absurd<B>
        ) => (pith: $<Pith<B>>) =>
          put(
            map(
              (r: R<B>): R<A> => a => {
                const ak = a && a[key]
                const typeofB = typeof ak
                const bk =
                  typeofB === 'object' || typeofB === 'function'
                    ? r(Object.assign(absurdB(), ak))
                    : r(<B>ak)
                if (ak === bk) return a
                return Object.assign(absurdA(), a, {[<any>key]: bk})
              },
              tree(absurdB)(pith)
            )
          ),
        reduce: <K extends keyof A>(key: K, r: Stream<R<A[K]>>) =>
          put(
            map(
              (r): R<A> => a => {
                const ak = a && a[key]
                const bk = r(ak)
                if (ak === bk) return a
                return Object.assign(absurdA(), a, {[key]: bk})
              },
              r
            )
          )
      })
    })(pith)
  )
