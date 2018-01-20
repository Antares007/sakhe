const svnodeBark = require('./svnode')
const m = require('most')
const id = a => a
var init = require('snabbdom-to-html/init')
var modules = require('snabbdom-to-html/modules')
var toHTML = init([
  modules.class,
  modules.props,
  modules.attributes,
  modules.style
])

const apiRing = require('../rings/api')

const htmlBark = (spmap = apiRing, vpmap = apiRing) => (
  initState = {},
  stateCb = () => void 0
) => pith => {
  const sPithRing = pith => (state, select) => {
    pith(
      state,
      Object.assign({}, select, {
        action$: m.empty()
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
        action$: m.empty(),
        frame$: m.empty()
      })
    )
  }

  return svnodeBark(p => sPithRing(spmap(p)), p => vPithRing(vpmap(p)))(
    stateCb,
    initState,
    () => ({}),
    'html',
    {}
  )(pith).map(toHTML)
}

module.exports = htmlBark

// htmlBark()()(state => put => {
//   put.node('head', put => {
//     put.node('meta', {props: {charset: 'utf-8'}}, put => {})
//     put.node('link', {props: {rel: 'dns-prefetch', href: 'https://assets-cdn.github.com'}}, put => {})
//   })
//   put.node('body', put => {
//   })
// }).tap(console.log.bind(console)).drain()
