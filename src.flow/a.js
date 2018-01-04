// @flow
export interface Pith<A> {
  (ray: (a: A) => void): void;
}
export interface Bark<A, B> {
  (pith: Pith<A>): B;
}
export const ring = <O, A>(pmap: (o: O) => Pith<A>): ((o: O) => Pith<A>) => o =>
  pmap(o)

export function tree<B, A>(deltaC: (as: Array<A>) => B): Bark<A, B> {
  return function bark(pith) {
    const as: Array<A> = []
    pith(a => {
      as.push(a)
    })
    return deltaC(as)
  }
}

const rez = tree(as => as)(put => {
  put('1')
  put(1)
  put(true)
})
console.log(rez)
