// @flow
import type {Stream} from '@most/types'
import type {$} from './most'
import type {Pith as RPith, Absurd, RState} from './r'

import {tree as rTree} from './r'
import {to$} from './most'
import {
  now,
  empty,
  runEffects,
  tap,
  scan,
  skipRepeats,
  skip,
  map,
  newStream,
  propagateEventTask
} from '@most/core'
import {disposeWith, disposeNone, disposeOnce} from '@most/disposable'
import {newDefaultScheduler, asap} from '@most/scheduler'
import {hold} from './hold'

export interface Pith<A: Object> {
  (
    state: {
      extend<Key: $Keys<A>, B: $Subtype<$ElementType<A, Key>>>(
        key: Key,
        absurdB: Absurd<B>
      ): (pith: $<Pith<B>>) => void,
      val<Key: $Keys<A>>(
        key: Key,
        r: Stream<RState<$ElementType<A, Key>>>
      ): void
    },
    onChange: Stream<A>
  ): void;
}
export interface Bark<A> {
  (pith: $<Pith<A>>): Stream<A>;
}
export type Test = {|a: 42, b: {o: 'otar'}|}
const tree = <A: Test>(absurdA: Absurd<A>, initState?: A): Bark<A> => pith => {
  var next: ?(a: A) => void
  var disposable = disposeNone()
  const onChange = hold(
    newStream((sink, scheduler) => {
      next = a => {
        disposable.dispose()
        disposable = asap(propagateEventTask(a, sink), scheduler)
      }
      return disposeOnce(
        disposeWith(() => {
          next = void 0
          disposable.dispose()
          disposable = disposeNone()
        }, void 0)
      )
    })
  )
  return skip(
    1,
    tap(
      a => next && next(a),
      skipRepeats(
        scan(
          (s, r) => r(s),
          initState || absurdA(),
          rTree(absurdA)(
            map(
              pith => put => {
                put.val('a', now(s => s))
                pith({extend: put.extend, val: put.val}, now(absurdA()))
              },
              to$(pith)
            )
          )
        )
      )
    )
  )
}

var abs = () => ({a: 42, b: {o: 'otar'}})
var rez = rTree(abs)(put => {
  put.val('a', now(n => n + 1))
  put.extend('b', () => ({o: 'archil', t: 1}))(put => {
    put.val('o', now(s => s + ' bolkvadze'))
  })
})

runEffects(
  tap(
    s => console.log(JSON.stringify(s)),
    scan((s, r) => r(s), {a: 43, b: {o: 'otar bolkvadze', t: 1}}, rez)
  ),
  newDefaultScheduler()
)
