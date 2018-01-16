import {map, mergeArray} from '@most/core'

import mostTree from './most'

export default function tree(absurdA) {
  const ring = pith => put => {
    pith({
      extend: (key, absurdB) => oPith =>
        put(
          map(
            r => a => {
              const ak = a[key]
              const bk = r(Object.assign(absurdB(), ak))
              if (ak === bk) return a
              return Object.assign(absurdA(), a, {[key]: bk})
            },
            tree(absurdB)(oPith)
          )
        ),
      val: (key, r) =>
        put(
          map(
            r => a => {
              const ak = a[key]
              const bk = r(ak)
              if (ak === bk) return a
              return Object.assign(absurdA(), a, {[key]: bk})
            },
            r
          )
        ),
      put,
    })
  }
  return pith =>
    map(r => {
      const rstate = function rstate(s) {
        return r(s)
      }
      rstate.type = 'rstate'
      return rstate
    }, mostTree(mergeArray)(typeof pith === 'function' ? ring(pith) : map(ring, pith)))
}
