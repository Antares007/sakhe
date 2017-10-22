const debug = require('debug')
const {sync} = require('most-subject')
const vnodeBark = require('../barks/vnode')
const {ReducerBark} = require('../barks/state')
const {Cons} = require('../list')
const id = a => a
const apiRing = require('../rings/api')
const rchain = (absurd, k) => r => a => {
  const ak = a && a[k]
  const bk = r(ak)
  if (ak === bk) return a
  return Object.assign(absurd(), a, {[k]: bk})
}
const rmap = (proxy$, f = id) => ({next: r => proxy$.next(s => f(r)(s))})

const addActionRing = action$ => pith => (put, select) =>
  pith(Object.assign({}, put, {
    node: (pmap = id) => put.node(p => addActionRing(action$)(pmap(p)))
  }), Object.assign({}, select, {
    action$: action$.filter(x => x.vnode.data.path.endsWith(select.path))
  }))

const svnodeBark =
(select, initState, rproxy$ = {next: id}, absurd) =>
(pmap = id, spmap = apiRing) =>
(sel, dta, key) =>
svpith => {
  const ringPath = select.path
  const data = select.$(dta).map(d => Object.assign({}, d, {path: ringPath, key}))
  const path = Cons(key, ringPath)
  const action$ = select.action$.filter(x => x.vnode.data.path.endsWith(path))
  const vselect = Object.assign({}, select, { path, action$ })

  return vnodeBark(addActionRing(action$))(sel, data, path)(
    ReducerBark(spmap)(initState, absurd)((enter, sselect) => {
      const stateProxy$ = sync()
      enter.put(stateProxy$)

      const chieldRing = pith => (put, select) => {
        const snode = absurd => (pmap = id, spmap) => (sel, dta, key) => svpith => {
          put.vnode(
            sselect.path([key]).take(1).map(initState =>
              svnodeBark(
                select, initState, rmap(stateProxy$, rchain(absurd, key)), absurd
              )(pmap, spmap)(sel, dta, key)(svpith)
            ).switchLatest()
          )
        }
        return pith(
          Object.assign({}, put, {
            node: (pmap = id) => put.node(p => chieldRing(pmap(p))),
            onode: snode(_ => ({})),
            anode: snode(_ => ([]))
          }),
          select
        )
      }
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
      rproxy$.next(() => b)
    })(initState))
    .map(s => s.pith)
    .filter(pith => typeof pith !== 'undefined')
    .skipRepeats()
  )
}

const sRing = (initState, stateCb) => pith => (put, select) => {
  var state = initState
  const next$ = {
    next: r => {
      state = r(state)
      stateCb(state)
    }
  }
  const snode = absurd => (pmap, spmap) => (sel, dta, key) => svpith =>
    put.vnode(
      svnodeBark(
        select, initState && initState[key], rmap(next$, rchain(absurd, key)), absurd
      )(pmap, spmap)(sel, dta, key)(svpith)
    )
  return pith(
    Object.assign({}, put, {
      onode: snode(() => ({})),
      anode: snode(() => ([]))
    }),
    select
  )
}

module.exports = sRing
