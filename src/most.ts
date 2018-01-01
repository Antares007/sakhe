import {Stream} from '@most/types'
import {map, now, switchLatest} from '@most/core'
import {tree as aTree} from './a'

export interface Pith<A> {
  (put: (a: Stream<A>) => void): void
}
export interface Bark<A, B> {
  (pith: $<Pith<A>>): Stream<B>
}
export const ring = <O, A>(
  pmap: (o: O) => Pith<A>
): ((o: $<O>) => $<Pith<A>>) => o => (isStream(o) ? map(pmap, o) : pmap(o))

export const tree = <A, B = A>(
  deltac: (as: Stream<A>[]) => Stream<B>
): Bark<A, B> => pith =>
  isStream(pith) ? switchLatest(map(aTree(deltac), pith)) : aTree(deltac)(pith)

export type $<T> = T | Stream<T>
export function to$<T>(a: $<T>): Stream<T> {
  return isStream(a) ? a : now(a)
}
export function isStream<T>(x: any): x is Stream<T> {
  return x && typeof x.run === 'function'
}
