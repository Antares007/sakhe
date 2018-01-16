import {now, map, merge, switchLatest, empty, filter} from '@most/core'
import rvnodeTree from '../vtree/rvnode'
import subject from '../subject'
import rstateTree from '../rstate'
import {pmap, toStream} from '../pmap'

export default function tree(absurdA, tag, data) {
  return svPith => {
    const vpithSubject = subject()
    const stateProxy = subject()

    const ring = vpith => put => {
      vpith({
        ...put,
        node: (tag, data, key) => pith => {
          put.node(tag, data, key)(pmap(ring, pith))
        },
        snode: (key, absurdB, tag, data) => pith => {
          put.put(
            tag,
            key,
            filter(r => {
              if (r.type === 'rvnode') return true
              stateProxy.event(a => {
                const ak = a[key]
                const bk = r(Object.assign(absurdB(), ak))
                if (ak === bk) return a
                return Object.assign(absurdA(), a, {[key]: bk})
              })
              return false
            }, tree(absurdB, tag, data)(pith))
          )
        },
      })
    }
    return merge(
      rvnodeTree(tag, data)(map(ring, switchLatest(vpithSubject.stream))),
      rstateTree(absurdA)(
        now((s, onChange) => {
          s.put(stateProxy.stream)
          const vPith = svPith(s, onChange, empty())
          vpithSubject.event(toStream(vPith))
        })
      )
    )
  }
}