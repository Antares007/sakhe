const debug = require('debug')
const {sync} = require('most-subject')
const vnodeBark = require('../barks/vnode')
const stateBark = require('../barks/state')
const {absurdo, absurda} = stateBark
const {Cons, nil} = require('../list')
const id = a => a
const apiRing = require('../rings/api')

const svnodeBark =
(spmap = apiRing, vpmap = apiRing) =>
(stateCb, initState, absurd, sel, data, path = nil) =>
svpith =>
vnodeBark(id)(sel, data, path)(
  stateBark(
    p => (enter, sselect) => spmap(p)(enter, Object.assign({}, sselect, {vpath: path}))
  )(initState, absurd)((enter, sselect) => {
    const proxy$ = sync()
    const next = key => childState => proxy$.next(
      s => Object.assign(absurd(), s, {[key]: childState})
    )
    const chieldRing = pith => (put, select) => {
      const snode = absurd => (spmap, vpmap) => (key, sel, dta = {}) => pith => {
        const data = select.$(dta).map(d => Object.assign({path, key}, d))
        const childPath = Cons(key, path)
        put.vnode(
          sselect.path([key]).take(1).map(childInitState =>
            svnodeBark(
              spmap, vpmap
            )(
              next(key), childInitState, absurd, sel, data, childPath
            )(
              pith
            )
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
      sselect.$(svpith(enter, sselect))
        .map(p => chieldRing(vpmap(p)))
        .map(pith => s => {
          s.pith = pith
          return s
        })
    )
  })
  .tap((o => a => {
    if (o === a) return
    o = a
    const b = Object.assign(absurd(), a)
    delete b.pith
    debug('state:' + path.toString())(b)
    stateCb(b)
  })(initState))
  .map(s => s.pith)
  .filter(pith => typeof pith !== 'undefined')
  .skipRepeats()
)

module.exports = svnodeBark

// const addActionRing = pith => (put, select) => {
//   pith(Object.assign({}, put, {
//     node: (pmap = id) => put.node(p => addActionRing(pmap(p))),
//     onode: (spmap, vpmap = id) => put.onode(spmap, p => addActionRing(vpmap(p))),
//     anode: (spmap, vpmap = id) => put.anode(spmap, p => addActionRing(vpmap(p)))
//   }), Object.assign({}, select, {
//     aa: true
//   }))
// }
// const logRing = pith => (...args) => {
//   console.log(args)
//   pith(...args)
// }
// svnodeBark(p => apiRing(logRing(p)), p => apiRing(logRing(p)))(
//   state => {
//     // console.log(JSON.stringify(state))
//   },
//   {},
//   absurdo,
//   'h1',
//   {},
//   nil
// )(
//   (state, sselect) => {
//     state.val('a', s => 'b')
//     return (put, vselect) => {
//       put.node('h2', put => put.node('h2', (put, s) => {
//         put.text('hello.')
//         put.onode('zmuki1', 'h3', {}, (state, sselect) => {
//           state.val('a', s => 'b')
//           return (put, vselect) => {
//             put.node('h4', put => put.node('h4', put => put.text('hello')))
//             put.node('h4', put => put.node('h4', (put, s) => {
//               put.text('hello')
//             }))
//           }
//         })
//       }))
//       put.onode('zmuki2', 'h3', {}, (state, sselect) => {
//         state.val('a', s => 'b')
//         return (put, vselect) => {
//           put.node('h4', put => put.text('hello'))
//         }
//       })
//     }
//   }
// )
// // .tap(x => x.log())
//   .drain()
