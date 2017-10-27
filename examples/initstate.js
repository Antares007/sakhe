module.exports = key => {
  const item = window.localStorage.getItem(key) || void 0
  var initState = item && JSON.parse(item)
  const stateCb = newState => {
    window.localStorage.setItem(key, JSON.stringify(newState, null, '  '))
    return newState
  }
  return [initState, stateCb]
}
