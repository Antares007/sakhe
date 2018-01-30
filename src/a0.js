export default function tree (deltaC) {
  return pith => {
    const as = []
    pith({put: a => as.push(a)})
    return deltaC(as)
  }
}
