const m = require('most')
const watch$ = require('./watch$')
const {join: pathJoin} = require('path')

const eq = require('../src/eq')
const PatchBark = require('../src/barks/patch')
const cssRing = require('../src/rings/css')
const apiRing = require('../src/rings/api')
const sRing = require('../src/rings/s')

const mapError = err => m.of(put => {
  put.node('div', {style: {color: 'red'}}, put => put.text(err.message))
})

const Folder = path => (put, select) => {
  const change$ = watch$(path)
    .skipRepeatsWith(eq)
    .multicast()
  const opAction$ = select.action$
    .filter(x => x.action[0] === path)
    .map(x => x.action.slice(1))
  put.onode('ul', { style: { listStyleType: 'none' } }, path, (enter, sselect, vselect) => {
    enter.val('@', opAction$.map(([name, isOpen]) => s =>
      Object.assign({}, s, {[name]: isOpen})
    ).startWith(s => s || {}))
    return change$.map(dir => put => {
      for (let name in dir) {
        let stat = dir[name]
        let epath = pathJoin(path, name)
        let actClose = [path, name, false]
        let actOpen_ = [path, name, true]
        const isOpen$ = sselect.path(['@', name])
        put.node('li', {key: name}, (put, select) => {
          if (stat.isDirectory()) {
            put.node('div', isOpen$.map(op => (
                op
                ? put => {
                  put.node('button', {on: {click: actClose}}, put => put.text('- ' + name))
                  put.node('div', {}, Folder(epath))
                }
                : put => put.node('button', {on: {click: actOpen_}}, put => put.text('+ ' + name))
              ))
            )
          } else {
            put.text(name)
          }
        })
      }
    }).flatMapError(mapError)
  })
}

const stateRing = sRing(...(require('./initstate')('folder')))

PatchBark(
  p => cssRing(stateRing(apiRing(p)))
)(
  document.getElementById('root-node')
)(
  Folder('/')
  // Folder(pathJoin(__dirname, '..'))
).drain()
