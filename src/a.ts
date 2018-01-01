import {compose} from '@most/prelude'
export interface Pith<A> {
  (ray: (a: A) => void): void
}
export interface Bark<A, B = A> {
  (pith: Pith<A>): B
}
export const ring = <O, A>(pmap: (o: O) => Pith<A>): ((o: O) => Pith<A>) => o =>
  pmap(o)

export function tree<B, A = B>(deltaC: (as: Array<A>) => B): Bark<A, B> {
  return function bark(pith) {
    const as: Array<A> = []
    pith(a => as.push(a))
    return deltaC(as)
  }
}

// const bark: Bark<string> = tree<string>(as => as.join('\n'))
// var ii = 0
// const pith: Pith<string> = ring<number, string>(p => put => {
//   ii++
//   if (ii > 3) return
//   for (var i = 0; i < p; i++) {
//     put(i.toString())
//     put(bark(pith))
//   }
// })(5)
// var a: string = bark(pith)
// console.log(a)
