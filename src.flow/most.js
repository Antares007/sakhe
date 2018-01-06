// @flow
import type {Stream} from '@most/types'
import {map, now, switchLatest} from '@most/core'
import aTree from './a'

export type $<T> = T | Stream<T>

// $FlowFixMe
export function to$<T>(x: any): Stream<T> {
  if (typeof x === 'object' && x !== null && typeof x.run === 'function') {
    // $FlowFixMe
    return (x: any)
  }
  // $FlowFixMe
  return now((x: any))
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
