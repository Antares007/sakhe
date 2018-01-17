import {hold} from '@most/hold'
import {filter, map, never, propagateEventTask, newStream} from '@most/core'
import {asap} from '@most/scheduler'
import toVNode from '../vtree/to-vnode'
import M from '../m'
import svnodeTree from './rsvnode'
import {pmap} from '../pmap'

export default function tree(absurd, initState, element, data) {
  const vRing = onChangeA => pith => put =>
    pith({
      ...put,
      snode: (key, absurdB, tag, data) => pith => {
        const bKeysLenght = Object.keys(absurdB()).length
        const onChangeB = filter(
          ak =>
            typeof ak !== 'undefined' && Object.keys(ak).length >= bKeysLenght,
          map(a => a[key], onChangeA)
        )
        put.snode(key, absurdB, tag, data)(pmap(sRing(onChangeB), pith))
      },
    })
  const sRing = onChangeA => pith => (state, on) =>
    pmap(vRing(onChangeA), pith(state, on, onChangeA))

  return pith => {
    const proxy = hold(never())
    let requestId
    let vnode = toVNode(element)
    const cb = () => {}
    let patch
    const frame = () => {
      vnode = patch(vnode, cb)
      requestId = undefined
    }

    return newStream((sink, scheduler) =>
      M.of(
        svnodeTree(absurd, element.tagName.toLowerCase(), data)(
          pmap(sRing(proxy), pith)
        )
      )
        .scan((s, r) => {
          if (r.type === 'rvnode') {
            patch = r
            if (typeof requestId === 'undefined') {
              requestId = global.window.requestAnimationFrame(frame)
            }
            return s
          }
          return r(s)
        }, initState)
        .skipRepeats()
        .tap(s => {
          asap(propagateEventTask(s, proxy), scheduler)
        })
        .skip(1)
        .valueOf()
        .run(sink, scheduler)
    )
  }
}
