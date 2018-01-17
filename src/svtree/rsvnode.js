import {map, merge, filter, MulticastSource, never, newStream} from '@most/core'
import rvnodeTree from '../vtree/rvnode'
import rstateTree from '../rstate'
import {pmap, toStream} from '../pmap'

export default function tree(absurdA, tag, data) {
  return sPith => {
    // const vpithSubject = subject()
    const rStateProxy = new MulticastSource(never())
    const putStateProxy = new MulticastSource(never())
    const actionProxy = new MulticastSource(never())

    const vRing = vpith => (put, on) => {
      vpith(
        {
          ...put,
          node: (tag, data, key) => pith => {
            put.node(tag, data, key)(pmap(vRing, pith))
          },
          snode: (key, absurdB, tag, data) => pith => {
            put.put(
              tag,
              key,
              newStream((sink, scheduler) =>
                filter(r => {
                  if (r.type === 'rvnode') return true
                  putStateProxy.event(a => {
                    const ak = a[key]
                    const bk = r(Object.assign(absurdB(), ak))
                    if (ak === bk) return a
                    return Object.assign(absurdA(), a, {[key]: bk})
                  })
                  return false
                }, tree(absurdB, tag, data)(pith)).run(sink, scheduler)
              )
            )
          },
        },
        on
      )
    }

    return merge(
      rStateProxy,
      newStream((sink, scheduler) =>
        map(
          r => {
            const rvnode = function rvnode(vnode, cb) {
              return r(vnode, e => {
                actionProxy.event(scheduler.currentTime(), e)
                cb(e)
              })
            }
            rvnode.type = 'rvnode'
            return rvnode
          },
          rvnodeTree(tag, data)(
            filter(
              rStateOrPith => {
                if (rStateOrPith.isPith) return true
                rStateProxy.event(scheduler.currentTime(), rStateOrPith)
                return false
              },
              rstateTree(absurdA)(s => {
                s.put(putStateProxy)
                s.put(
                  map(vPith => {
                    vPith.isPith = true
                    return vPith
                  }, toStream(pmap(vRing, sPith(s, actionProxy))))
                )
              })
            )
          )
        ).run(sink, scheduler)
      )
    )
  }
}
