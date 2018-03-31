// @flow
import type {Stream} from '@most/types'
import {map, switchLatest as sw} from '@most/core'
import aTree from './a1'

export type MostRay<A> = (Stream<A>) => void
export type MostPith<A> = (MostRay<A>) => void

export default function tree<A, B> (
  deltac: (Stream<A>[]) => Stream<B>
): (MostPith<A> | Stream<MostPith<A>>) => Stream<B> {
  const ring = aTree(deltac)
  return pith => (typeof pith === 'function' ? ring(pith) : sw(map(ring, pith)))
}
