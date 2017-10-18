const aTree = deltac => pith => {
  const as = []
  const push = a => as.push(a)
  const pull = () => as.pop()
  pith({push, pull})
  return deltac(as)
}

module.exports = aTree
// function pmap (pith) {
//   return ({push, pull}) => {
//     pith({push: a => { push(a); push(a) }, pull})
//   }
// }
// const rez = aTree(a => a)(({push, pull}) => {
//   push(1)
//   push(aTree(a => a)(pmap(({push, pull}) => {
//     push(1)
//     push(2)
//     push(4)
//     pull()
//     push(3)
//   })))
//   push(4)
//   pull()
//   push(3)
// })
// console.log(rez)
