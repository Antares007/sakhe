import {map, tap} from '@most/core'
import rvnodeTree from './rvnode'
import toVNode from './to-vnode'

export default function (element, data) {
  return pith => {
    let requestId
    let vnode = toVNode(element)
    const cb = () => {}
    let patch
    const frame = () => {
      vnode = patch(vnode, cb)
      requestId = undefined
    }
    return map(
      () => vnode,
      tap(r => {
        patch = r
        if (typeof requestId === 'undefined') {
          requestId = global.window.requestAnimationFrame(frame)
        }
      }, rvnodeTree(element.tagName.toLowerCase(), data)(pith))
    )
  }
}
