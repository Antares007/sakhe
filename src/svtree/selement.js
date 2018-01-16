import {hold} from '@most/hold'
import {filter, map} from '@most/core'
import toVNode from '../vtree/to-vnode'
import subject from '../subject'
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
    const proxy = subject(true)
    let requestId
    let vnode = toVNode(element)
    const cb = () => {}
    let patch
    const frame = () => {
      vnode = patch(vnode, cb)
      requestId = undefined
    }

    return M.of(
      svnodeTree(absurd, element.tagName.toLowerCase(), data)(
        pmap(sRing(hold(proxy.stream)), pith)
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
        proxy.event(s)
      })
      .skip(1)
      .valueOf()
  }
}
