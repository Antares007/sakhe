// @flow
import type {Stream} from '@most/types'
import {map, tap} from '@most/core'

import type {VNode, Data} from './types'
import type {Pith, RVNode} from './rvnode'
import type {$} from '../most'
import rvnodeTree from './rvnode'
import toVNode from './to-vnode'

export default function(element: Element, data?: Data) {
  return (pith: $<Pith>): Stream<VNode> => {
    let requestId: ?number
    let vnode = toVNode(element)
    const cb = () => {}
    let patch: RVNode
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
