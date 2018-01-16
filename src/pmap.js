import {map, now} from '@most/core'

export const pmap = (ring, pith) =>
  typeof pith === 'function' ? ring(pith) : map(ring, pith)

export const toStream = x =>
  x != null && typeof x.run === 'function' ? x : now(x)
