const PatchBark = require('../src/barks/patch')
const m = require('most')

const Folder = () => (put, select) => {
  put.text(m.never().startWith('hello'))
  put.text(' world')
}

PatchBark()(
  document.getElementById('root-node')
)(
  Folder()
)
