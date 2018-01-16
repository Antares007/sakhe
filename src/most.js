import {map, switchLatest as sw} from '@most/core'
import aTree from './a'

export default function tree(deltac) {
  const ring = aTree(deltac)
  return pith => (typeof pith === 'function' ? ring(pith) : sw(map(ring, pith)))
}
