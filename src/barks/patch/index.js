const vnodeBark = require('../vnode')
const m = require('most')
const id = a => a
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const {sync} = require('most-subject')
const toVnode = require('snabbdom/tovnode').default
const {init} = require('snabbdom')
const createActionModule = require('./action-module')
const defaultModules = ['class', 'props', 'style', 'attributes'].map(
  name => require('snabbdom/modules/' + name).default
)

const PatchBark = (pmap = require('../../rings/api')) => (elm) => pith => {
  const rootVnode = toVnode(elm)
  const action$ = sync()
  const frame$ = sync()
  const patchVnode = init([
    ...defaultModules,
    createActionModule(function (event) {
      const action = this.data.on[event.type]
      action$.next({ vnode: this, action, event })
    })
  ])
  const addActionRing = pith => (put, select) => {
    pith(Object.assign({}, put, {
      node: (pmap = id) => put.node(p => addActionRing(pmap(p)))
    }), Object.assign({}, select, {
      action$: action$.filter(x => x.vnode.data.path.endsWith(select.path)),
      frame$
    }))
  }
  var newVnode = rootVnode
  var oldVnode = rootVnode
  var requestId
  const frame = (timestamp) => {
    frame$.next(timestamp)
    if (oldVnode !== newVnode) {
      // framesCount++
      oldVnode = patchVnode(oldVnode, newVnode)
    }
    requestId = window.requestAnimationFrame(frame)
  }
  return vnodeBark(compose(addActionRing, pmap))(rootVnode.sel, rootVnode.data)(pith)
    .tap(vnode => {
      newVnode = vnode
      if (requestId) return
      requestId = window.requestAnimationFrame(frame)
    })
    .flatMapEnd(() => {
      window.cancelAnimationFrame(requestId)
      patchVnode(oldVnode, rootVnode)
      return m.empty()
    })
}

module.exports = PatchBark
