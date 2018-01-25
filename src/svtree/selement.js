import {hold} from '@most/hold'
import {never, propagateEventTask, newStream, filter} from '@most/core'
import {asap} from '@most/scheduler'
import toVNode from '../vtree/to-vnode'
import M from '../m'
import svnodeTree from './rsvnode'
import {pmap} from '../pmap'
import {selectB} from '../state'

export default function tree (absurd, initState, element, data) {
  const vRing = onChangeA => pith => (put, on) =>
    pith(
      {
        ...put,
        node: (tag, data, key) => pith => {
          put.node(tag, data, key)(pmap(vRing(onChangeA), pith))
        },
        snode: (key, absurdB, tag, data) => pith => {
          const onChangeB = selectB(key, absurdB, onChangeA)
          put.snode(key, absurdB, tag, data)(pmap(sRing(onChangeB), pith))
        }
      },
      on
    )
  const sRing = onChangeA => pith => (state, on) =>
    pmap(vRing(onChangeA), pith(state, on, onChangeA))

  return pith => {
    const proxy = hold(never())
    let requestId
    let vnode = toVNode(element)
    const cb = () => {}
    let patch
    const frame = () => {
      patch(vnode, cb)
      requestId = undefined
    }

    return newStream((sink, scheduler) =>
      M.of(
        svnodeTree(absurd, element.tagName.toLowerCase(), data)(
          pmap(sRing(proxy), pith)
        )
      )
        .scan((s, r) => {
          if (r.type !== 'rvnode') return r(s)
          patch = r
          if (typeof requestId === 'undefined') {
            requestId = global.window.requestAnimationFrame(frame)
          }
          return s
        }, initState)
        .merge(filter(x => false, proxy))
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
