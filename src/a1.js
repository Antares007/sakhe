// @flow
export type Ray<A> = A => void
export type Pith<A> = (Ray<A>) => void

export default function tree<A, B> (deltaC: (A[]) => B): (Pith<A>) => B {
  return pith => {
    const as = []
    pith(a => {
      as.push(a)
    })
    return deltaC(as)
  }
}
