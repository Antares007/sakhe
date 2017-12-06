export interface Pith<A> {
  (ray: (a: A) => void): void
}
export interface Bark<A> {
  (pith: Pith<A>): A
}
export const ring = <B, A>(pmap: (b: B) => Pith<A>): ((b: B) => Pith<A>) => b =>
  pmap(b)

export function tree<A>(deltaC: (as: Array<A>) => A): Bark<A> {
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
