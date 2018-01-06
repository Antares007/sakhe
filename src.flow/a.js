// @flow
export interface Pith<A> {
  (ray: (a: A) => void): void;
}
export interface Bark<A, B> {
  (pith: Pith<A>): B;
}
export default function tree<B, A>(deltaC: (as: Array<A>) => B): Bark<A, B> {
  return function bark(pith) {
    const as: Array<A> = []
    pith(a => {
      as.push(a)
    })
    return deltaC(as)
  }
}
