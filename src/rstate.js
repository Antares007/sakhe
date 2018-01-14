import {map, mergeArray} from '@most/core'

import {tree as mostTree, to$} from './most'

export default function tree(absurdA) {
  return pith =>
    mostTree(xs =>
      map(r => Object.assign(r, {type: 'rstate'}), mergeArray(xs))
    )(
      map(
        pith => put => {
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
        },
        to$(pith)
      )
    )
}
