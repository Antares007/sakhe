// @flow
export default function tree<A, B> (
  deltaC: (A[]) => B
): (({put(A): number}) => void) => B {
  return pith => {
    const as = []
    pith({put: a => as.push(a)})
    return deltaC(as)
  }
}
