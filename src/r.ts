import {Stream} from '@most/types'
import {mergeArray, map} from '@most/core'
import {Pith} from './atree'
import {Pith$, ring, bark as mBark, Ray as mRay} from './most'

export type Absurd<T> = () => T
export type R<T> = (state: T) => T

export type Ray<A> = {
  extend: <B extends A[K], K extends keyof A>(
    key: K,
    absurdB: Absurd<B>
  ) => (pith: Pith$<Ray<B>>) => void
  reduce: <K extends keyof A>(key: K, r: Stream<R<A[K]>>) => void
}

export const bark = <A>(absurdA: Absurd<A>) => (
  pith: Pith$<Ray<A>>
): Stream<R<A>> =>
  mBark<R<A>>(mergeArray)(
    ring<Ray<A>, mRay<R<A>>>(pith => put => {
      pith({
        extend: <B extends A[K], K extends keyof A>(
          key: K,
          absurdB: Absurd<B>
        ) => (pith: Pith$<Ray<B>>) =>
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
              bark(absurdB)(pith)
            )
          ),
        reduce: <K extends keyof A>(key: K, r: Stream<R<A[K]>>) =>
          put(
            map(
              (r): R<A> => a => {
                const ak = a && a[key]
                const bk = r(ak)
                if (ak === bk) return a
                return Object.assign(absurdA(), a, {[<any>key]: bk})
              },
              r
            )
          )
      })
    })(pith)
  )
