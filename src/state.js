import {scan, skipRepeats, skip, tap, map, filter} from '@most/core'
import {hold} from '@most/hold'
import rTree from './rstate'
import subject from './subject'

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
        const thisRing = ring(onChangeB)

        put.extend(key, absurdB)(
          typeof pith === 'function' ? thisRing(pith) : map(thisRing, pith)
        )
      },
    },
    onChangeA
  )
}
export default function tree(absurdA, initState) {
  return pith => {
    const proxy = subject(true)
    const thisRing = ring(hold(proxy.stream))
    const rez = rTree(absurdA)(
      typeof pith === 'function' ? thisRing(pith) : map(thisRing, pith)
    )
    return skip(
      1,
      tap(s => {
        proxy.event(s)
      }, skipRepeats(scan((s, r) => r(s), initState != null ? initState : absurdA(), rez)))
    )
  }
}
