import {scan, skipRepeats, skip} from '@most/core'

import rTree from './rstate'

export default function tree(absurdA, initState) {
  return pith => {
    const rez = rTree(absurdA)(pith)
    return skip(
      1,
      skipRepeats(
        scan((s, r) => r(s), initState != null ? initState : absurdA(), rez)
      )
    )
  }
}
