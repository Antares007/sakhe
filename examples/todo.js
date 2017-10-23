const apiRing = require('../src/rings/api')
const sRing = require('../src/rings/s')
const PatchBark = require('../src/barks/patch')
const id = a => a

PatchBark(
  p => sRing(...(require('./initstate')('todo')))(apiRing(p))
)(
  document.getElementById('root-node')
)(
  TodoApp()
).drain()

function TodoApp () {
  return put => {
    put.onode('div', {}, 'todoApp', (enter, sselect, vselect) => {
      const submit = vselect.action$.filter(x => x.action === submit)
      const input = vselect.action$.filter(x => x.action === input)
      enter.val('state', s => s || {text: '', items: []})
      enter.val('state', submit.tap(x => x.event.preventDefault())
        .constant(s => {
          if (!s.text) return s
          return ({text: '', items: s.items.concat([{text: s.text}])})
        })
      )
      enter.val('state', input.map(x => x.event.target.value)
        .map(text => ({items}) => ({ text: text.trim(), items }))
      )
      return sselect.path(['state'])
        .filter(Boolean)
        .map(({text, items}) => (put, select) => {
          put.node('h3', put => put.text('TODO'))
          put.node('ul', put => {
            for (var item of items) {
              put.node('li', put => put.text(item.text))
            }
          })
          put.node('form', {on: {submit}}, put => {
            put.node('input', {on: {input}, props: {value: text}}, id)
            put.node('button', put => put.text('Add #' + (items.length + 1)))
          })
        })
    })
  }
}
