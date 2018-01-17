import {
  scan,
  skipRepeats,
  skip,
  tap,
  map,
  filter,
  never,
  propagateEventTask,
  newStream,
} from '@most/core'
import {asap} from '@most/scheduler'
import {hold} from '@most/hold'
import rTree from './rstate'
import {pmap} from './pmap'

const ring = onChangeA => pith => put => {
  pith(
    {
      ...put,
      extend: (key, absurdB) => pith => {
        const bKeysLenght = Object.keys(absurdB()).length
        const onChangeB = filter(
          ak =>
            typeof ak !== 'undefined' && Object.keys(ak).length >= bKeysLenght,
          map(a => a[key], onChangeA)
        )

        put.extend(key, absurdB)(pmap(ring(onChangeB), pith))
      },
    },
    onChangeA
  )
}
export default function tree(absurdA, initState) {
  return pith => {
    const proxy = hold(never())
    const rez = rTree(absurdA)(pmap(ring(proxy), pith))
    return newStream((sink, scheduler) =>
      skip(
        1,
        tap(s => {
          asap(propagateEventTask(s, proxy), scheduler)
        }, skipRepeats(scan((s, r) => r(s), initState != null ? initState : absurdA(), rez)))
      ).run(sink, scheduler)
    )
  }
}
