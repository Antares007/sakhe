// @flow
/* eslint-disable no-unused-vars */
import {now, scan} from '@most/core'
import type {VNode} from '../vtree/types'
import M from '../m'
import toVNode from '../vtree/to-vnode'

import svnodeTree from './svnode'

const abs = () => ({a: 42, b: {}})
const rez = svnodeTree(abs, 'div')(s => {
  s.extend('b', () => ({a: 'archil'}))(s => {
    s.val('a', now(s => s + ' bolkvadze'))
  })
  s.val('a', now(sss => sss + 1))

  return put => {
    put.snode('b', () => ({o: 'otar'}), 'div')(s => {
      s.val('o', now(s => s + ' bolkvadze'))

      return put => {
        put.text('world!')
      }
    })
    put.text('hello')
  }
})

const elm = document.getElementById('root-node')
if (elm == null) throw new Error('cant find root-node')

const vnode = toVNode(elm)

M.of(rez)
  .scan(
    ([v, s], r) => (r.type === 'rvnode' ? [r(v, () => {}), s] : [v, r(s)]),
    [vnode, abs()]
  )
  .tap(([vnode, state]) => {
    global.console.log(vnode, state)
  })
  .drain()
