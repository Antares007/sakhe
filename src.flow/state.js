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
  propagateEventTask,
  filter
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
const tree = <A: Object>(
  absurdA: Absurd<A>,
  initState?: A
): Bark<A> => pith => {
  var disposable = disposeNone()
  var next: ?(a: A) => void
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
  const rez = rTree(absurdA)(
    map(
      (function ring(onChange) {
        return pith => put => {
          pith(
            {
              extend: (key, absurdB) => pith => {
                const b = absurdB()
                const bKeysLenght = Object.keys(absurdB()).length
                const onChangeB = filter(
                  ak =>
                    typeof ak !== 'undefined' &&
                    Object.keys(ak).length === bKeysLenght,
                  map(a => a[key], onChange)
                )
                put.extend(key, absurdB)(ring(onChangeB)(pith))
              },
              val: put.val
            },
            onChange
          )
        }
      })(onChange),
      to$(pith)
    )
  )
  return skip(
    1,
    tap(a => {
      next && next(a)
    }, skipRepeats(scan((s, r) => r(s), initState || absurdA(), rez)))
  )
}

var abs = () => ({a: 42, b: {o: 'otar'}})
var rez = tree(abs)((put, on) => {
  runEffects(
    tap(s => console.log(0, JSON.stringify(s)), on),
    newDefaultScheduler()
  )

  put.val('a', now(n => n + 1))
  put.extend('b', () => ({o: 'archil', t: 1}))((put, on) => {
    runEffects(
      tap(s => console.log(1, JSON.stringify(s)), on),
      newDefaultScheduler()
    )
    put.val('o', now(s => s + ' bolkvadze'))
  })
})

runEffects(tap(s => console.log(JSON.stringify(s)), rez), newDefaultScheduler())
