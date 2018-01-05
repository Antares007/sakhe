// @flow
import type {Stream} from '@most/types'
import {map, now, switchLatest, mergeArray} from '@most/core'
import {tree as aTree} from './a'

export type $<T> = T | Stream<T>
export function to$<T>(x: any): Stream<T> {
  if (typeof x === 'object' && x !== null && typeof x.run === 'function') {
    return (x: any)
  } else {
    return now((x: any))
  }
}
export interface Pith<A> {
  (put: (a: Stream<A>) => void): void;
}
export interface Bark<A, B> {
  (pith: $<Pith<A>>): Stream<B>;
}

export const tree = <A, B>(
  deltac: (as: Stream<A>[]) => Stream<B>
): Bark<A, B> => pith => switchLatest(map(aTree(deltac), to$(pith)))
