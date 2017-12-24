import {Stream} from '@most/types'
import {map, now, switchLatest} from '@most/core'
import {tree as aTree} from './a'

export interface Pith<A> {
  (put: (a: Stream<A>) => void): void
}
export interface Bark<A> {
  (pith: $<Pith<A>>): Stream<A>
}
export const ring = <B, A>(
  pmap: (b: B) => Pith<A>
): ((b: $<B>) => $<Pith<A>>) => b => (isStream(b) ? map(pmap, b) : pmap(b))

export const tree = <A>(
  deltac: (as: Stream<A>[]) => Stream<A>
): Bark<A> => pith =>
  isStream(pith) ? switchLatest(map(aTree(deltac), pith)) : aTree(deltac)(pith)

export type $<T> = T | Stream<T>
export function to$<T>(a: $<T>): Stream<T> {
  return isStream(a) ? a : now(a)
}
export function isStream<T>(x: any): x is Stream<T> {
  return x && typeof x.run === 'function'
}
