const aTree = deltac => pith => {
  const as = []
  const push = a => as.push(a)
  const pull = () => as.pop()
  pith({push, pull})
  return deltac(as)
}

module.exports = aTree

// var i = 0
// const step = v => `(${v})_${i++}`
// function pmap (pith) {
//   return ({push, pull}) => {
//     pith({push: a => push(step(a)), pull})
//   }
// }
// const rez = aTree(a => a.join(', '))(pmap(pmap(({push, pull}) => {
//   push('a')
//   push(aTree(a => a.join(', '))(pmap(pmap(({push, pull}) => {
//     push('a')
//     push('b')
//     push('o')
//   }))))
//   push('b')
//   push('o')
// })))
// console.log(rez)
