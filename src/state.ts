import {Stream, Sink, Scheduler} from '@most/types'
import {disposeWith, disposeOnce} from '@most/disposable'
import {newDefaultScheduler} from '@most/scheduler'
import {findIndex, remove, append} from '@most/prelude'
import {
  now, mergeArray, map, runEffects, tap, scan,
  skip, newStream, periodic, constant, delay,
  propagateEventTask, MulticastSource, skipRepeats
} from '@most/core'
import {hold} from './hold'
import {R, Absurd, bark as rBark, This as rThis, Pith, Pith$, Ring} from './r'

const isStream = <T>(x: any): x is Stream<T> => x && typeof x.run === 'function'

export type This<A> = {
  extend: {
    [K in keyof A]: <B extends A[K]> (absurdB: Absurd<B>) =>
                    (pith: Pith$<This<B>>) => void
  }
  reduce: {
    [K in keyof A]: (r: Stream<R<A[K]>>) => void
  }
  onChange: Stream<A>
}

const ring = <A>(state$: Stream<A>) => (pith: Pith<This<A>>) => function () {
  pith.call({
    extend: new Proxy({}, {
      get: <K extends keyof A>(_: any, key: K) => new Proxy(() => {}, {
        apply: <B extends A[K]>(_1: any, _2: any, [absurdB]: [Absurd<B>]) =>
          this.node(key, absurdB)(ring(map(a => <B>a[key], state$)))
      })
    }) as This<A>['extend'],
    reduce: new Proxy({}, {
      get: (_, key: any) => new Proxy(() => {}, {
        apply: (_1, _2, [r]) => this.leaf(key, r)
      })
    }) as This<A>['reduce'],
    onChange: skipRepeats(state$)
  })
} as Pith<rThis<A>>

const bark =
<A> (absurdA: Absurd<A>) =>
(pith: Pith$<This<A>>) => {
  var next: ((v: A) => void) | undefined
  const state$ = hold(newStream<A>((sink, scheduler) => {
    next = (v) => sink.event(scheduler.currentTime(), v)
    return disposeWith(() => { next = undefined }, void 0)
  }))
  return (
    skip(1,
    tap(x => next && next(x),
    scan((s, r) => r(s), absurdA(),
    rBark(absurdA)<This<A>>(p => ring(state$)(p))(pith))))
  )
}




const inc = (s: number) => s + 1
const aInit = () => ({leaf: 0, node: {a: -100}})
const d = 1000
var inc$ = (i: number) => delay(d * i, constant(inc, periodic(d * 3)))

const state$ = bark(aInit)(function () {
  this.extend.node(() => ({a: 0, b: 0}))(function () {
    this.reduce.a(inc$(0))
    this.reduce.b(inc$(1))
  })
  this.reduce.leaf(inc$(2))
})

runEffects(
  tap(x => console.log(JSON.stringify(x)), state$),
  newDefaultScheduler()
)
