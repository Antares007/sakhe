module.exports = key => {
  const item = window.localStorage.getItem(key) || void 0
  var initState = item && JSON.parse(item)
  const proxy$ = {
    next: r => {
      const newState = r(initState)
      window.localStorage.setItem(key, JSON.stringify(newState))
      return newState
    }
  }
  return [initState, proxy$]
}
