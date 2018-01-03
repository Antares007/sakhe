import {VNode} from './types'
import {Pith, tree as rvnodeTree, RVNode} from './rvnode'
import {Data} from './types'
import {$} from '../most'
import {Stream} from '@most/types'
import {map, tap} from '@most/core'
import {toVNode} from './to-vnode'

export const tree = (element: Element, data?: Data) => (
  pith: $<Pith>
): Stream<VNode> => {
  var requestId: number | undefined
  var vnode = toVNode(element)
  var cb = () => {}
  var patch: RVNode
  const frame = () => {
    vnode = patch(vnode, cb)
    requestId = void 0
  }
  return map(
    () => vnode,
    tap(r => {
      patch = r
      if (typeof requestId === 'undefined') {
        requestId = window.requestAnimationFrame(frame)
      }
    }, rvnodeTree<any>(element.tagName.toLowerCase(), data)(pith))
  )
}
