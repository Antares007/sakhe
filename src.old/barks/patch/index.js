const svnodeBark = require('../svnode')
const m = require('most')
const id = a => a
const {sync} = require('most-subject')
const toVnode = require('snabbdom/tovnode').default
const {init} = require('snabbdom')
const createActionModule = require('./action-module')
const defaultModules = [
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/props').default,
  require('snabbdom/modules/style').default,
  require('snabbdom/modules/attributes').default
]
const apiRing = require('../../rings/api')

const PatchBark = (spmap = apiRing, vpmap = apiRing) => (
  elm,
  initState = {},
  stateCb = () => void 0
) => pith => {
  const rootVnode = toVnode(elm)
  const action$ = sync()
  const frame$ = sync()
  const patchVnode = init([
    ...defaultModules,
    createActionModule(function (event) {
      const action = this.data.on[event.type]
      action$.next({vnode: this, action, event})
    })
  ])

  const sPithRing = pith => (state, select) => {
    pith(
      state,
      Object.assign({}, select, {
        action$: action$.filter(x => x.vnode.path.endsWith(select.vpath))
      })
    )
  }
  const vPithRing = pith => (put, select) => {
    const snode = nodet => (spmap = id, vpmap = id) => (key, sel, data) => {
      return nodet(p => sPithRing(spmap(p)), p => vPithRing(vpmap(p)))(
        key,
        sel,
        data
      )
    }
    pith(
      Object.assign({}, put, {
        node: (pmap = id) => put.node(p => vPithRing(pmap(p))),
        onode: snode(put.onode),
        anode: snode(put.anode)
      }),
      Object.assign({}, select, {
        action$: action$.filter(x => x.vnode.path.endsWith(select.path)),
        frame$
      })
    )
  }

  var newVnode = rootVnode
  var oldVnode = rootVnode
  var requestId
  const frame = timestamp => {
    frame$.next(timestamp)
    if (oldVnode !== newVnode) {
      oldVnode = patchVnode(oldVnode, newVnode)
      requestId = window.requestAnimationFrame(frame)
    } else {
      requestId = void 0
    }
  }

  return svnodeBark(p => sPithRing(spmap(p)), p => vPithRing(vpmap(p)))(
    stateCb,
    initState,
    () => ({}),
    rootVnode.sel,
    rootVnode.data
  )(pith)
    .tap(vnode => {
      newVnode = vnode
      if (typeof requestId !== 'undefined') return
      requestId = window.requestAnimationFrame(frame)
    })
    .flatMapEnd(() => {
      window.cancelAnimationFrame(requestId)
      patchVnode(oldVnode, rootVnode)
      return m.empty()
    })
}

module.exports = PatchBark
