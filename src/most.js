import {map, now, switchLatest} from '@most/core'
import aTree from './a'

export function to$(x) {
  if (typeof x === 'object' && x !== null && typeof x.run === 'function') {
    return x
  }
  return now(x)
}

export function tree(deltac) {
  return pith => switchLatest(map(aTree(deltac), to$(pith)))
}
