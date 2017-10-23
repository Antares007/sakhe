const apiRing = require('../src/rings/api')
const sRing = require('../src/rings/s')
const PatchBark = require('../src/barks/patch')
const showHideRing = require('../src/rings/show-hide')

const Counter = (key = 'Counter') => (put, select) => {
  put.onode('div.counter', {}, key, (enter, sselect, vselect) => {
    enter.val('count', vselect.action$
      .filter(x => typeof x.action === 'number')
      .map(x => s => s + x.action)
      .startWith(s => s || 0)
    )
    return showHideRing(put => {
      put.node('button', {on: {click: +1}}, put => {
        put.text('+')
        put.node('div', {}, Counter(key + '/+'))
      })
      put.node('button', {on: {click: -1}}, put => {
        put.text('-')
        put.node('div', {}, Counter(key + '/-'))
      })
      put.text(sselect.path(['count']).map(n => n + ''))
    })
  })
}

PatchBark(
  p => sRing(...(require('./initstate')('svnode')))(apiRing(p))
)(
  document.getElementById('root-node')
)(
  Counter()
)
