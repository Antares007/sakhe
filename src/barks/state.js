const m = require('most')
const {async, hold} = require('most-subject')
const mostBark = require('./most')
const apiRing = require('../rings/api')
const id = a => a

const c = (absurd, key) => r => a => {
  const ak = a && a[key]
  const bk = r(ak)
  if (ak === bk) return a
  const b = Object.assign(absurd(), a, {[key]: bk})
  return b
}

const absurda = () => ([])
const absurdo = () => ({})

const aBark = (pmap = id) => (absurd = absurdo) =>
mostBark(pith => ({put}, select, ...rays) => {
  const s = absurdt => pmap => key => pith =>
    put(aBark(pmap)(absurdt)(pith).map(c(absurd, key)))
  const v = (key, r) =>
    put(select.$(r).map(c(absurd, key)))
  pmap(pith)({ val: v, obj: s(absurdo), arr: s(absurda), put }, select, ...rays)
})(m.mergeArray)

const stateRing = state$ => pith => {
  const selectKey = ($, key) => $.map(s => s[key])
  const s = absurdt => (pmap = id) => key =>
    absurdt(pith => stateRing(selectKey(state$, key))(pmap(pith)))(key)
  return (absurd, select) => {
    pith(Object.assign({}, absurd, {
      obj: s(absurd.obj),
      arr: s(absurd.arr)
    }),
    Object.assign({}, select, {
      path: selectors => selectors.reduce(selectKey, state$).skipRepeats()
    }))
  }
}

const stateBark =
(pmap = apiRing) =>
(initState = {}, absurd = absurdo) =>
(pith) => {
  const state$ = hold(1, async())
  return aBark(p => stateRing(state$)(pmap(p)))(absurd)(pith)
    .scan((s, r) => r(s), initState)
    .tap(state$.next.bind(state$))
    .skip(1)
    .flatMapEnd(() => { state$.complete(); return m.empty() })
}

module.exports = Object.assign(stateBark, {absurdo, absurda})

// ReducerBark()({}, absurdo)((absurd, select) => {
//   absurd.val('a', m.of(s => 'b'))
//   absurd.obj('o', absurd => {
//     absurd.val('a', s => 'b')
//   })
//   absurd.arr('arr', (absurd, select) => {
//     absurd.val(1, s => 42)
//   })
//   // absurd.put(select.$(s => 41))
// }).tap(x => console.log(x))
//   .drain()
