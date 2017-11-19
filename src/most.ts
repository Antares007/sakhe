import {Stream} from '@most/types';
import {map, switchLatest} from '@most/core'
import {Pith, bark as aBark} from './atree'
export {Pith}


export type Pith$<That> = Pith<That> | Stream<Pith<That>>
export type Ring<That, This> = (p: Pith<That>) => Pith<This>

export interface This<A> {
  put: (a: Stream<A>) => void
}

export const isStream = <T>(x: any): x is Stream<T> => x && typeof x.run === 'function'

export const bark =
<A> (deltac: (as: Stream<A>[]) => Stream<A>) =>
<That> (pmap: Ring<That, This<A>>) =>
(pith: Pith$<That>) =>  {
  const run = (pith: Pith<That>) => aBark(deltac)(function () {
    pmap(pith).call({
      put: a => this.put(a)
    })
  })
  return isStream(pith) ? switchLatest(map(run, pith)) : run(pith)
}

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
