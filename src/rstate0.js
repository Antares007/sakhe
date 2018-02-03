import {map, mergeArray} from '@most/core'

import mostTree from './most0'
const hasOwnProperty = Object.prototype.hasOwnProperty

export default function tree (pith) {
  const ring = pith => put => {
    pith({
      ...put,
      extend (key, b, r) {
        const bkeys = Object.keys(b)
        put.put(
          map(
            r => a => {
              const ak = a[key]
              const bk = r(
                bkeys.some(bkey => !hasOwnProperty.call(ak, bkey))
                  ? {...b, ...ak}
                  : ak
              )
              if (ak === bk) return a
              return {...a, [key]: bk}
            },
            r
          )
        )
      },
      val (key, r) {
        put.put(
          map(
            r => a => {
              const ak = a[key]
              const bk = r(ak)
              if (ak === bk) return a
              return {...a, [key]: bk}
            },
            r
          )
        )
      }
    })
  }
  return mostTree(mergeArray)(
    typeof pith === 'function' ? ring(pith) : map(ring, pith)
  )
}
