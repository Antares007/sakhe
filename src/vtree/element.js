import {newStream} from '@most/core'
import {disposeBoth, disposeWith} from '@most/disposable'
import rvnodeTree from './rvnode'
import toVNode from './to-vnode'
import M from '../m'

export default function (element, data) {
  return pith => {
    let requestId
    let vnode = toVNode(element)
    const cb = () => {}
    let patch
    const frame = () => {
      patch(vnode, cb)
      requestId = undefined
    }
    const $ = M.of(rvnodeTree(element.tagName.toLowerCase(), data)(pith))
      .tap(r => {
        patch = r
        if (typeof requestId === 'undefined') {
          requestId = window.requestAnimationFrame(frame)
        }
      })
      .filter(x => false)
      .multicast()
      .valueOf()
    return newStream((sink, scheduler) =>
      disposeBoth(
        $.run(sink, scheduler),
        disposeWith(() => {
          window.cancelAnimationFrame(requestId)
        }, null)
      )
    )
  }
}
