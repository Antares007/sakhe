import {map, mergeArray} from '@most/core'

import mostTree from './most'
import {pmap} from './pmap'

export const mapRb2Ra = (key, absurdA, absurdB) => r => a => {
  const ak = a[key]
  const bk = r(Object.assign(absurdB(), ak))
  if (ak === bk) return a
  return Object.assign(absurdA(), a, {[key]: bk})
}

export const mapRak2Ra = (key, absurdA) => r => a => {
  const ak = a[key]
  const bk = r(ak)
  if (ak === bk) return a
  return Object.assign(absurdA(), a, {[key]: bk})
}

export default function tree (absurdA) {
  const ring = pith => put => {
    pith({
      ...put,
      extend: (key, absurdB) => oPith =>
        put.put(map(mapRb2Ra(key, absurdA, absurdB), tree(absurdB)(oPith))),
      val: (key, r) => put.put(map(mapRak2Ra(key, absurdA), r))
    })
  }
  return pith => mostTree(mergeArray)(pmap(ring, pith))
}
