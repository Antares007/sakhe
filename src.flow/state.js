import {tap, scan, skipRepeats, skip, map, filter} from '@most/core'

import rTree from './r'
import {to$} from './most'
import stateProxy from './stateProxy'

export default function tree(absurdA, initState) {
  return pith => {
    const [next, proxy] = stateProxy()
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
        })(proxy),
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
