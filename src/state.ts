import {Stream} from '@most/types'
import {disposeWith, disposeNone, disposeOnce} from '@most/disposable'
import {asap} from '@most/scheduler'
import {map, newStream, propagateEventTask} from '@most/core'
import {hold} from './hold'
import {chain} from './chain'
import {$, isStream} from './most'
import {R, Absurd, tree as rTree, ring as rRing} from './r'
export {R}

export interface Pith<A> {
  (
    ray: {
      extend: <B extends A[K], K extends keyof A>(
        key: K,
        absurdB: Absurd<B>
      ) => (pith: $<Pith<B>>) => void
      reduce: <K extends keyof A>(key: K, r: Stream<R<A[K]>>) => void
    },
    $: Stream<A>
  ): void
}

export interface Bark<A> {
  (pith: $<Pith<A>>): Stream<A>
}

export const ring = <B, A>(
  pmap: (b: B) => Pith<A>
): ((b: $<B>) => $<Pith<A>>) => b => (isStream(b) ? map(pmap, b) : pmap(b))

const sring = <A extends object>(a$: Stream<A>) =>
  rRing<Pith<A>, A>(pith => put => {
    pith(
      {
        extend: (key, absurdB) => pith => {
          const bKeysLenght = Object.keys(<any>absurdB()).length
          const b$ = chain(a$)
            .map(a => a[key])
            .filter(
              ak =>
                typeof ak !== 'undefined' &&
                Object.keys(<any>ak).length === bKeysLenght
            )
            .valueOf()
          put.extend(key, absurdB)(sring(b$)(pith))
        },
        reduce: put.val
      },
      a$
    )
  })

export const tree = <A extends object>(
  absurdA: Absurd<A>,
  initState?: A
): Bark<A> => pith => {
  var next: ((a: A) => void) | undefined
  var disposable = disposeNone()
  const a$ = hold(
    newStream<A>((sink, scheduler) => {
      next = a => {
        disposable.dispose()
        disposable = asap(propagateEventTask(a, sink), scheduler)
      }
      return disposeOnce(
        disposeWith(() => {
          next = undefined
          disposable.dispose()
          disposable = disposeNone()
        }, void 0)
      )
    })
  )
  return chain(rTree(absurdA)(sring(a$)(pith)))
    .scan((s, r) => r(s), initState || absurdA())
    .skipRepeats()
    .tap(a => next && next(a))
    .skip(1)
    .valueOf()
}
