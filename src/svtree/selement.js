import toVNode from '../vtree/to-vnode'
import M from '../m'
import svnodeTree from './rsvnode'

export default function tree(absurd, initState, element, data) {
  return pith => {
    let requestId
    let vnode = toVNode(element)
    const cb = () => {}
    let patch
    const frame = () => {
      vnode = patch(vnode, cb)
      requestId = undefined
    }

    return M.of(svnodeTree(absurd, element.tagName.toLowerCase(), data)(pith))
      .scan((s, r) => {
        if (r.type === 'rvnode') {
          patch = r
          if (typeof requestId === 'undefined') {
            requestId = global.window.requestAnimationFrame(frame)
          }
          return s
        }
        return r(s)
      }, absurd())
      .skipRepeats()
      .tap(() => {})
      .valueOf()
  }
}
