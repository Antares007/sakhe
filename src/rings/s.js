const debug = require('debug')
const {sync} = require('most-subject')
const vnodeBark = require('../barks/vnode')
const stateBark = require('../barks/state')
const {absurdo, absurda} = stateBark
const {Cons} = require('../list')
const id = a => a
const apiRing = require('../rings/api')

const addActionRing = action$ => pith => (put, select) =>
  pith(Object.assign({}, put, {
    node: (pmap = id) => put.node(p => addActionRing(action$)(pmap(p)))
  }), Object.assign({}, select, {
    action$: action$.filter(x => x.vnode.data.path.endsWith(select.path))
  }))

const svnodeBark =
(select, initState, stateCb, absurd) =>
(pmap = id, spmap = apiRing) =>
(sel, dta, key) =>
svpith => {
  const ringPath = select.path
  const data = select.$(dta).map(d => Object.assign({}, d, {path: ringPath, key}))
  const path = Cons(key, ringPath)
  const action$ = select.action$.filter(x => x.vnode.data.path.endsWith(path))
  const vselect = Object.assign({}, select, { path, action$ })

  return vnodeBark(addActionRing(action$))(sel, data, path)(
    stateBark(spmap)(initState, absurd)((enter, sselect) => {
      const proxy$ = sync()
      const next = key => s =>
        proxy$.next(ps => Object.assign(absurd(), ps, {[key]: s}))
      const chieldRing = pith => (put, select) => {
        const snode = absurd => (pmap = id, spmap) => (sel, dta, key) => svpith => {
          put.vnode(
            sselect.path([key]).take(1).map(initState =>
              svnodeBark(
                select, initState, next(key), absurd
              )(pmap, spmap)(sel, dta, key)(svpith)
            ).switchLatest()
          )
        }
        return pith(
          Object.assign({}, put, {
            node: (pmap = id) => put.node(p => chieldRing(pmap(p))),
            onode: snode(absurdo),
            anode: snode(absurda)
          }),
          select
        )
      }
      enter.put(proxy$)
      enter.put(
        sselect.$(svpith(enter, sselect, vselect))
          .map(p => chieldRing(pmap(p)))
          .map(pith => s => { s.pith = pith; return s })
      )
    })
    .tap((o => a => {
      if (o === a) return
      o = a
      const b = Object.assign(absurd(), a)
      delete b.pith
      debug(key + '/next')(b)
      stateCb(b)
    })(initState))
    .map(s => s.pith)
    .filter(pith => typeof pith !== 'undefined')
    .skipRepeats()
  )
}

const sRing = (initState, stateCb, absurd = absurdo) => pith => (put, select) => {
  var state = initState
  const next = key => s => {
    state = Object.assign(absurd(), state, {[key]: s})
    stateCb(state)
  }
  const snode = absurd => (pmap, spmap) => (sel, dta, key) => svpith =>
    put.vnode(
      svnodeBark(
        select, initState && initState[key], next(key), absurd
      )(pmap, spmap)(sel, dta, key)(svpith)
    )
  return pith(
    Object.assign({}, put, {
      onode: snode(absurdo),
      anode: snode(absurda)
    }),
    select
  )
}

module.exports = sRing
