const debug = require('debug')
const {sync} = require('most-subject')
const vnodeBark = require('../barks/vnode')
const stateBark = require('../barks/state')
const {absurdo, absurda} = stateBark
const {Cons, nil} = require('../list')
const id = a => a
const apiRing = require('../rings/api')

const svnodeBark = (spmap = apiRing, vpmap = apiRing) => (
  stateCb,
  initState,
  absurd,
  sel,
  data,
  path = nil
) => svpith =>
  vnodeBark(id)(sel, data, path)(
    stateBark(p => (state, sselect) =>
      spmap(p)(state, Object.assign({}, sselect, {vpath: path}))
    )(initState, absurd)((state, sselect) => {
      const proxy$ = sync()
      const next = key => childState =>
        proxy$.next(s => Object.assign(absurd(), s, {[key]: childState}))
      const chieldRing = pith => (put, select) => {
        const snode = absurd => (spmap, vpmap) => (
          key,
          sel,
          dta = {}
        ) => pith => {
          const data = select.$(dta).map(d => Object.assign({path, key}, d))
          const childPath = Cons(key, path)
          put.vnode(
            sselect
              .path([key])
              .take(1)
              .map(childInitState =>
                svnodeBark(spmap, vpmap)(
                  next(key),
                  childInitState,
                  absurd,
                  sel,
                  data,
                  childPath
                )(pith)
              )
              .switchLatest()
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
      state.put(proxy$)
      state.put(
        sselect
          .$(svpith(state, sselect))
          .map(p => chieldRing(vpmap(p)))
          .map(pith => s => {
            s.pith = pith
            return s
          })
      )
    })
      .tap(
        (o => a => {
          if (o === a) return
          o = a
          const b = Object.assign(absurd(), a)
          delete b.pith
          debug('state:' + path.toString())(b)
          stateCb(b)
        })(initState)
      )
      .map(s => s.pith)
      .filter(pith => typeof pith !== 'undefined')
      .skipRepeats()
  )

module.exports = svnodeBark

// svnodeBark()(s => console.info('state:', s), {}, absurdo, 'div')(
//   (state, sselect) => (put, vselect) => put.text('hello')
// ).tap(vnode => vnode.log()).drain()
