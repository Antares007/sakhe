import {tap, scan, skipRepeats, skip, map, filter} from '@most/core'

import rTree from './r'
import {to$} from './most'
import stateProxy from './stateProxy'

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
