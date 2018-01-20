const PatchBark = require('../src.old/barks/patch')

PatchBark()(
  document.getElementById('root-node'),
  ...require('./initState')('todo')
)(TodoApp()).drain()

function TodoApp () {
  return (enter, sselect) => {
    const submit = sselect.action$.filter(x => x.action === submit)
    const input = sselect.action$.filter(x => x.action === input)
    enter.val('state', s => s || {text: '', items: []})
    enter.val(
      'state',
      submit.tap(x => x.event.preventDefault()).constant(s => {
        if (!s.text) return s
        return {text: '', items: s.items.concat([{text: s.text}])}
      })
    )
    enter.val(
      'state',
      input
        .map(x => x.event.target.value)
        .map(text => ({items}) => ({text: text.trim(), items}))
    )
    return sselect
      .path(['state'])
      .filter(Boolean)
      .map(({text, items}) => (put, select) => {
        put.node('h3', put => put.text('TODO'))
        put.node('ul', put => {
          for (var item of items) {
            put.node('li', put => put.text(item.text))
          }
        })
        put.node('form', {on: {submit}}, put => {
          put.node('input', {on: {input}, props: {value: text}}, put => {})
          put.node('button', put => put.text('Add #' + (items.length + 1)))
        })
      })
  }
}
