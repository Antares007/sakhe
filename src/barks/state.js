const m = require('most')
const $ = require('../$')
const Bark = require('./bark')
const {async: subject, hold} = require('most-subject')
const id = a => a
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const c = (ft, k) => r => o => Object.assign(ft(), o, {[k]: r(o && o[k])})
const ABark = (pmap = id) => (ft = () => ({})) => Bark(
  pith => function (m) {
    pmap(pith)(
      pmap => key => pith => m(ABark(pmap)(_ => ({}))(pith).map(c(ft, key))),
      pmap => key => pith => m(ABark(pmap)(_ => ([]))(pith).map(c(ft, key))),
      (key, r) => m($(r).map(c(ft, key)))
    )
  }
)(m.mergeArray)

const stateRing = state$ => pith => {
  const select = (state$, key) =>
    state$.filter(s => typeof s !== 'undefined' && s !== null).map(s => s[key])
  return (obj, arr, val) => pith(
    (pmap = id) => key => obj(compose(stateRing(select(state$, key)), pmap))(key),
    (pmap = id) => key => arr(compose(stateRing(select(state$, key)), pmap))(key),
    val,
    selectors => selectors.reduce(select, state$)
      .filter(s => typeof s !== 'undefined')
      .skipRepeats()
  )
}

const ReducerBark =
  (pmap = require('../rings/s-ring')) =>
  (initState = {}, ft = _ => ({})) =>
  (pith) => {
    const state$ = hold(1, subject())
    return ABark(compose(stateRing(state$), pmap))(ft)(pith)
      .scan((s, r) => r(s), ft()).skip(1)
      .tap(state$.next.bind(state$))
      .flatMapEnd(() => { state$.complete(); return m.empty() })
      .multicast()
  }

module.exports = { ReducerBark }

if (require.main === module) {
  ReducerBark()()(s => {
    s.obj('a')(s => {
      s.obj('a')(s => {
        s('key', s => 'value')
      })
    })
    s.arr('array')(s => s(2, s => 42))
    s.arr('array')(s => {
      s(1, s => 41)
      s(2, s => s - 1)
    })
    s.select(['a', 'a', 'key']).tap(x => console.log(x)).drain()
    s.select(['array', 2]).tap(x => console.log(x)).drain()
  })
  .take(10)
  .drain()
}
