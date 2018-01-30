// @flow
import type {Stream} from '@most/types'
import {newStream} from '@most/core'
import {disposeBoth, disposeWith} from '@most/disposable'
import rvnodeTree, {type Pith as RVNodePith, toVNode} from './rvnode0'
import M from '../m'

declare var window: {
  requestAnimationFrame(() => void): mixed,
  cancelAnimationFrame(mixed): void
}

export default function<T: Element> (
  element: T
): (pith: RVNodePith<T>) => Stream<void> {
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
