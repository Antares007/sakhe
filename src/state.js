import {
  scan,
  skipRepeats,
  skip,
  tap,
  map,
  never,
  propagateEventTask,
  newStream
} from '@most/core'
import {asap} from '@most/scheduler'
import {hold} from '@most/hold'
import rTree from './rstate'
import {pmap} from './pmap'
import pipe from './pipe'

export const selectB = (key, absurdB, onChangeA) => {
  const b = absurdB()
  const bKeysLenght = Object.keys(b).length
  return map(a => {
    const ak = a[key]
    if (typeof ak === 'undefined') {
      return b
    }
    if (Object.keys(ak).length < bKeysLenght) {
      return Object.assign({}, b, ak)
    }
    return ak
  }, onChangeA)
}

const ring = onChangeA => pith => put => {
  pith(
    {
      ...put,
      extend: (key, absurdB) => pith => {
        put.extend(key, absurdB)(
          pmap(ring(selectB(key, absurdB, onChangeA)), pith)
        )
      }
    },
    onChangeA
  )
}

export default function tree (absurdA, initState) {
  return pith => {
    const proxy = hold(never())
    const sendOnChange = s =>
      newStream((sink, scheduler) =>
        tap(s => asap(propagateEventTask(s, proxy), scheduler), s).run(
          sink,
          scheduler
        )
      )
    return pipe(
      scan((s, r) => r(s), initState != null ? initState : absurdA()),
      skipRepeats,
      sendOnChange,
      skip(1)
    )(rTree(absurdA)(pmap(ring(proxy), pith)))
  }
}
