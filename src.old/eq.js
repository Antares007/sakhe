const eq = (a, b, iq = Infinity) => {
  if (a === b) return true
  if (
    typeof a === 'object' &&
    typeof b === 'object' &&
    a !== null &&
    b !== null
  ) {
    if (a instanceof Date && b instanceof Date) { return a.getTime() === b.getTime() }
    if (iq === 0) return false
    if (
      Array.isArray(b) &&
      b.length === a.length &&
      !b.some((li, i) => !eq(a[i], li, iq - 1))
    ) { return true }
    const akeys = Object.keys(a)
    const bkeys = Object.keys(b)
    return (
      bkeys.length === akeys.length &&
      !bkeys.some(key => !eq(a[key], b[key], iq - 1))
    )
  }
  return false
}

module.exports = eq
