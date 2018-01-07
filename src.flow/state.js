import {
  tap,
  scan,
  skipRepeats,
  skip,
  map,
  newStream,
  propagateEventTask,
  filter,
} from '@most/core'
import {disposeWith, disposeNone, disposeOnce} from '@most/disposable'
import {asap} from '@most/scheduler'

import rTree from './r'
import {to$} from './most'
import hold from './hold'

export default function tree(absurdA, initState) {
  return pith => {
    let disposable = disposeNone()
    let next
    const onChange = hold(
      newStream((sink, scheduler) => {
        next = a => {
          disposable.dispose()
          disposable = asap(propagateEventTask(a, sink), scheduler)
        }
        return disposeOnce(
          disposeWith(() => {
            next = undefined
            disposable.dispose()
            disposable = disposeNone()
          }, undefined)
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
                  const bKeysLenght = Object.keys(absurdB()).length
                  const onChangeB = filter(
                    ak =>
                      typeof ak !== 'undefined' &&
                      Object.keys(ak).length === bKeysLenght,
                    map(
                      a =>
                        typeof a === 'object' && a !== null
                          ? a[key]
                          : undefined,
                      onChange
                    )
                  )
                  put.extend(key, absurdB)(ring(onChangeB)(pith))
                },
                val: put.val,
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
        if (next) next(a)
      }, skipRepeats(scan((s, r) => r(s), initState != null ? initState : absurdA(), rez)))
    )
  }
}
