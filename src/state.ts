import {Stream, Sink, Scheduler} from '@most/types'
import {disposeWith, disposeNone} from '@most/disposable'
import {asap} from '@most/scheduler'
import {
  map,
  skipRepeats,
  newStream,
  skip,
  tap,
  scan,
  propagateEventTask,
  filter
} from '@most/core'
import {hold} from './hold'
import {$, isStream} from './most'
import {R, Absurd, tree as rBark, ring as rRing} from './r'
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

const sring = <A>(state$: Stream<A>) =>
  rRing<Pith<A>, A>(pith => put => {
    pith(
      {
        extend: <B extends A[K], K extends keyof A>(
          key: K,
          absurdB: Absurd<B>
        ) => (pith: $<Pith<B>>) => {
          const bKeysLenght = Object.keys(<any>absurdB()).length
          put.extend(key, absurdB)(
            sring(
              map(
                ak => <B>ak,
                filter(
                  ak =>
                    typeof ak !== 'undefined' &&
                    Object.keys(<any>ak).length === bKeysLenght,
                  skipRepeats(map(a => a[key], state$))
                )
              )
            )(pith)
          )
        },
        reduce: put.reduce
      },
      state$
    )
  })

export const tree = <A>(absurdA: Absurd<A>, initState?: A): Bark<A> => pith => {
  var next: ((v: A) => void) | undefined
  var disposable = disposeNone()
  const state$ = hold(
    newStream<A>((sink, scheduler) => {
      next = v => {
        disposable.dispose()
        disposable = asap(propagateEventTask(v, sink), scheduler)
      }
      return disposeWith(() => {
        next = undefined
        disposable.dispose()
        disposable = disposeNone()
      }, void 0)
    })
  )
  return skip(
    1,
    tap(
      x => next && next(x),
      skipRepeats(
        scan(
          (s, r) => r(s),
          initState || absurdA(),
          rBark(absurdA)(sring(state$)(pith))
        )
      )
    )
  )
}
