import {Stream} from '@most/types'
import {map, switchLatest} from '@most/core'
import {Pith, bark as aBark} from './atree'
export {Pith}

export type Pith$<Ray> = Pith<Ray> | Stream<Pith<Ray>>
export type Ray<A> = (a: Stream<A>) => void

export const ring = <A, B>(pmap: (p: Pith<A>) => Pith<B>) => (
  pith: Pith$<A>
): Pith$<B> => (typeof pith === 'function' ? pmap(pith) : map(pmap, pith))

export const bark = <A>(deltac: (as: Stream<A>[]) => Stream<A>) => (
  pith: Pith$<Ray<A>>
): Stream<A> =>
  typeof pith === 'function'
    ? aBark(deltac)(pith)
    : switchLatest(map(aBark(deltac), pith))

// function $ (x) {
//   return (
//     x instanceof m.Stream
//       ? x
//       : x && typeof x === 'object' && Object.keys(x).some(key => x[key] instanceof m.Stream)
//         ? m.combineArray(function () {
//           return Object.keys(x).reduce((s, key, i) => {
//             s[key] = arguments[i]
//             return s
//           }, {})
//         }, Object.keys(x).map(key => $(x[key])))
//         : m.of(x)
//   )
// }
