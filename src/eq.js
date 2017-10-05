const eq = (a, b) => {
  if (a === b) return true
  if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
    if (Array.isArray(b) && b.length === a.length && !b.some((li, i) => !eq(a[i], li))) return true
    const akeys = Object.keys(a)
    const bkeys = Object.keys(b)
    return bkeys.length === akeys.length && !bkeys.some(key => !eq(a[key], b[key]))
  }
  return false
}

module.exports = eq