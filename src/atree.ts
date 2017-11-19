export interface Pith<T> {
  (this: T): void
  call: (thisArg: T) => void
}

export interface This<A> {
  put: (a: A) => void
}

export const bark = <A>(deltaC: (as: A[]) => A) => (pith: Pith<This<A>>) => {
  const as: A[] = []
  pith.call({
    put: (a: A) => { as.push(a) }
  })
  return deltaC(as)
}

// var rez = bark<string>(as => as.join('-'))(function () {
//   this.put('1')
//   this.put('2')
//   this.put('3')
// })
// console.log(rez)
