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
import {Pith} from './atree'
import {Pith$, ring} from './most'
import {R, Absurd, bark as rBark, Ray as rRay} from './r'
export {R}
export interface Ray<A> {
  extend: <B extends A[K], K extends keyof A>(
    key: K,
    absurdB: Absurd<B>
  ) => (pith: Pith$<Ray<B>>) => void
  reduce: <K extends keyof A>(key: K, r: Stream<R<A[K]>>) => void
  onChange: Stream<A>
}

const sring = <A>(state$: Stream<A>) =>
  ring<Ray<A>, rRay<A>>(pith => put => {
    pith({
      extend: <B extends A[K], K extends keyof A>(
        key: K,
        absurdB: Absurd<B>
      ) => (pith: Pith$<Ray<B>>) => {
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
      reduce: <K extends keyof A>(key: K, r: Stream<R<A[K]>>) =>
        put.reduce(key, r),
      onChange: state$
    })
  })

export const bark = <A>(absurdA: Absurd<A>, initState?: A) => (
  pith: Pith$<Ray<A>>
) => {
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

// extend: new Proxy({}, {
//   get: <K extends keyof A>(_: any, key: K) => new Proxy(() => {}, {
//     apply: <B extends A[K]>(_1: any, _2: any, [absurdB]: [Absurd<B>]) =>
//       (pith: Pith$<Ray<B>>) =>
//       put.node(key, absurdB)(sring(map(a => <B>a[key], state$))(pith))
//   })
// }) as Ray<A>['extend'],
// reduce: new Proxy({}, {
//   get: (_, key: any) => new Proxy(() => {}, {
//     apply: (_1, _2, [r]) => put.leaf(key, r)
//   })
// }) as Ray<A>['reduce'],
