import {map, mergeArray} from '@most/core'
import {tree as mostTree, to$} from './most'

export default function tree(absurdA) {
  return pith =>
    mostTree(mergeArray)(
      map(
        pith => put => {
          pith({
            extend: (key, absurdB) => oPith =>
              put(
                map(
                  r => a => {
                    const ak =
                      typeof a === 'object' && a !== null ? a[key] : undefined
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
          })
        },
        to$(pith)
      )
    )
}
