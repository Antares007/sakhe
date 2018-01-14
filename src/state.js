import {scan, skipRepeats, skip, tap, map, filter} from '@most/core'
import {hold} from '@most/hold'
import subject from './subject'
import rTree from './rstate'
import {to$} from './most'

const ring = onChangeA => pith => put => {
  pith(
    {
      ...put,
      extend: (key, absurdB) => pith => {
        const bKeysLenght = Object.keys(absurdB()).length
        const onChangeB = filter(
          ak =>
            typeof ak !== 'undefined' && Object.keys(ak).length === bKeysLenght,
          map(a => a[key], onChangeA)
        )
        put.extend(key, absurdB)(map(ring(onChangeB), to$(pith)))
      },
    },
    onChangeA
  )
}
export default function tree(absurdA, initState) {
  return pith => {
    const proxy = subject(true)
    const rez = rTree(absurdA)(map(ring(hold(proxy.stream)), to$(pith)))
    return skip(
      1,
      tap(s => {
        proxy.event(s)
      }, skipRepeats(scan((s, r) => r(s), initState != null ? initState : absurdA(), rez)))
    )
  }
}
