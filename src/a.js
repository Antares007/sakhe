export default function tree (deltaC) {
  return pith => {
    const as = []
    pith(a => as.push(a))
    return deltaC(as)
  }
}
