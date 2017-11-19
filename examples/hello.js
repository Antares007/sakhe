const PatchBark = require('../src.js/barks/patch')
const m = require('most')

const Folder = () => state => (put, select) => {
  put.text(m.never().startWith('hello'))
  put.node('h1', (put) => {
    put.text(m.of(' world'))
  })
}

PatchBark()(
  document.getElementById('root-node')
)(
  Folder()
).drain()
