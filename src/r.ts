import {Stream} from '@most/types'
import { mergeArray, map, now } from '@most/core'
import {Pith, Pith$, Ring, bark as mBark} from './most'
export {Pith, Pith$, Ring}

const id = <T>(a: T): T => a

export type Absurd<T> = () => T

export type R<T> = (state: T) => T

export type This<A> = {
  node: <B extends A[K], K extends keyof A> (key: K, absurdB: Absurd<B>) =>
        <That> (pmap: Ring<That, This<B>>) =>
        (pith: Pith$<That>) => void
  leaf: <K extends keyof A> (key: K, r: Stream<R<A[K]>>) => void
}

export const bark =
<A> (absurdA: Absurd<A>) =>
<That> (pmap: Ring<That, This<A>>) =>
mBark<R<A>>(mergeArray)<That>(pith => function () {
  pmap(pith).call({
    node: <B extends A[K], K extends keyof A> (key: K, absurdB: Absurd<B>) =>
          <That> (pmap: Ring<That, This<B>>) =>
          (pith: Pith$<That>) =>
      this.put(
        map((r): R<A> => a => {
          const ak = <B>a[key]
          const typeofB = typeof ak
          const bk = (
            typeofB === "object" || typeofB === "function"
            ? r(Object.assign(absurdB(), ak))
            : r(ak)
          )
          if (ak === bk) return a
          return Object.assign(absurdA(), a, {[<any>key]: bk})
        }, bark(absurdB)<That>(pmap)(pith))
      ),
    leaf: <K extends keyof A> (key: K, r: Stream<R<A[K]>>) =>
      this.put(map((r): R<A> => a => {
        const ak = a[key]
        const bk = r(ak)
        if (ak === bk) return a
        return Object.assign(absurdA(), a, {[<any>key]: bk})
      }, r))
  })
})
