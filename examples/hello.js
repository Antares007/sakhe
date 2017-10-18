const PatchBark = require('../src/barks/patch')
const m = require('most')

const Folder = () => (put, select) => {
  put.text(m.never().startWith('hello'))
  put.node('h1', (put) => {
    put.text(m.of(' world'))
  })
}

PatchBark()(
  document.getElementById('root-node')
)(
  Folder()
)
