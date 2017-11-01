module.exports = (key) => {
  var initState
  try {
    initState = JSON.parse(window.localStorage.getItem(key)) || void 0
  } catch (err) {}
  return [
    initState,
    newState => window.localStorage.setItem(
      key,
      JSON.stringify(newState, null, '  ')
    )
  ]
}
