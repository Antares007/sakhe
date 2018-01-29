// @flow
/* eslint-disable */
import {periodic, now, map} from '@most/core'
import M from '../m'
import tree from './element0'
import rvnodeTree, {type Pith} from '../vtree/rvnode0'

const elm = document.getElementById('root-node')
if (!elm) throw new Error()

const count = () =>
  M.of(periodic(1000))
    .scan(a => a + 1, 0)
    .skip(1)
    .map(i => 'h' + i)
    .take(10)
    .continueWith(count)
    .valueOf()

const rez = tree(elm)(dom => {
  dom.node(
    'div',
    'k1',
    rvnodeTree(dom => {
      dom.node(
        'h1',
        'k1',
        map(
          str => vnode => {
            vnode.node.innerText = str
          },
          count()
        )
      )
    })
  )
  dom.text(now(vtext => (vtext.node.textContent = 'hello world!')))
})

M.of(rez).drain()
