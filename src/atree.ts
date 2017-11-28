export type Pith<Ray> = (ray: Ray) => void
export type Ray<A> = (a: A) => void

export function bark<A>(deltaC: (as: Array<A>) => A): (p: Pith<Ray<A>>) => A {
  return function(pith) {
    const as: Array<A> = []
    pith(a => as.push(a))
    return deltaC(as)
  }
}

// var rez = bark<string>((as) => as.join('-'))(put => {
//   put('1')
//   put('2')
//   put('3')
// })
// console.log(rez)
