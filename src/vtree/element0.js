// @flow
import type {Stream} from '@most/types'
import {newStream} from '@most/core'
import {disposeBoth, disposeWith} from '@most/disposable'
import rvnodeTree, {type Pith as RVNodePith} from './rvnode0'
import toVNode from './to-vnode'
import M from '../m'

declare var window: {
  requestAnimationFrame(() => void): mixed,
  cancelAnimationFrame(mixed): void
}

export default function (element: Element): (pith: RVNodePith) => Stream<void> {
  return pith => {
    let requestId
    let vnode = toVNode(element)
    let patch
    const frame = () => {
      patch(vnode)
      requestId = undefined
    }
    const $ = M.of(rvnodeTree(pith))
      .tap(r => {
        patch = r
        if (typeof requestId === 'undefined') {
          requestId = window.requestAnimationFrame(frame)
        }
      })
      .constant(undefined)
      .filter(Boolean)
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
