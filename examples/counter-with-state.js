const PatchBark = require('../src/barks/patch')
const showHideRing = require('../src/rings/show-hide')

const Counter = (state, sselect) => {
  state.val(
    'count',
    sselect.action$
      .filter(x => typeof x.action === 'number')
      .map(x => s => s + x.action)
      .startWith(s => s || 0)
  )
  return showHideRing(put => {
    put.node('button', {on: {click: +1}}, put => {
      put.text('+')
      put.onode('+', 'div', {}, Counter)
    })
    put.node('button', {on: {click: -1}}, put => {
      put.text('-')
      put.onode('-', 'div', {}, Counter)
    })
    put.text(sselect.path(['count']).map(n => n + ''))
  })
}

PatchBark()(
  document.getElementById('root-node'),
  ...require('./initstate')('counter')
)(Counter).drain()
