const m = require('most')
const {Cons, nil} = require('../list')
const mostBark = require('./most')
const apiRing = require('../rings/api')
const invalid = msg => { throw new Error('invalid ' + msg) }

class VTree {}

class VText extends VTree {
  constructor (text) {
    super()
    if (typeof text !== 'string') throw new Error('invalid text')
    this.text = text
  }
  log () {
    console.log(this.text)
  }
}

class VNode extends VTree {
  constructor (sel, data, children, path) {
    super()
    if (typeof sel !== 'string') invalid('selector')
    if (typeof data !== 'object' || data === null) invalid('data')
    if (!Array.isArray(children)) invalid('children')
    if (children.some(a => !(a instanceof VTree))) invalid('child')
    if (path !== nil && !(path instanceof Cons)) invalid('path')
    this.sel = sel
    this.data = data
    this.children = children
    this.path = path
    this.key = path === nil ? 'nil' : path.head
  }
  log () {
    const grpKey = this.sel + (
      typeof this.key !== 'undefined'
      ? '/' + this.key
      : ''
    )
    console.groupCollapsed(grpKey, this.path.toString())
    this.children.forEach(v => v.log())
    console.groupEnd(grpKey)
  }
}

const vnodeBark = (pmap = apiRing) => (sel, data = {}, path = nil) =>
mostBark(
  pith => ({put}, select) => {
    var i = 0
    put(select.$(sel))
    put(select.$(data))
    const node = pmap => (sel, data) => pith => put(
      vnodeBark(pmap)(sel, data, Cons(i++, path))(pith)
    )
    const text = text => put(select.$(text).map(text => new VText(text)))
    const vnode = vnode => put(
      select.$(vnode).map(vnode => {
        if (vnode instanceof VTree) return vnode
        throw new Error('invalid vnode')
      })
    )
    pmap(pith)(
      {node, text, vnode},
      Object.assign({}, select, {path})
    )
  }
)(
  a$s => m.combineArray(
    (s, d, ...chlds) => new VNode(s, d, chlds, path),
    a$s
  )
)

module.exports = vnodeBark

// vnodeBark()('div.a', {}, nil)((put, select) => {
//   put.node('button', {on: {click: true}}, put => {
//     put.node('button', put => {
//       put.text('hello1')
//     })
//     put.text('hello2')
//   })
//   put.vnode(vnodeBark()('div.a', {}, Cons('mount1', select.path))(put => {
//     put.node('li', put => {})
//     put.node('button', {on: {click: true}}, put => {
//       put.node('button', put => {
//         put.text('hello1')
//       })
//       put.text('hello2')
//     })
//     put.node('li', put => {})
//   }))
// }).tap(v => v.log()).drain()
