// @flow
import type {Stream} from '@most/types'
import {map, switchLatest as sw} from '@most/core'
import aTree from './a0'

export type Pith<A> = (ray: {put(Stream<A>): number}) => void

export default function tree<A, B> (
  deltac: (Stream<A>[]) => Stream<B>
): (Pith<A> | Stream<Pith<A>>) => Stream<B> {
  const ring = aTree(deltac)
  return pith => (typeof pith === 'function' ? ring(pith) : sw(map(ring, pith)))
}
