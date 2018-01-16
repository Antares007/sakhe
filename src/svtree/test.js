// @flow
/* eslint-disable no-unused-vars */
import {now, scan} from '@most/core'
import type {VNode} from '../vtree/types'
import M from '../m'
import toVNode from '../vtree/to-vnode'

import svnodeTree from './rsvnode'

const abs = () => ({a: 42, b: {}})
const rez = svnodeTree(abs, 'div')(s => {
  s.extend('b', () => ({a: 'archil'}))(s => {
    s.val('a', now(s => s + ' bolkvadze'))
  })
  s.val('a', now(sss => sss + 1))

  return put => {
    put.snode('b', () => ({o: 'otar'}), 'div')(s => {
      s.val('o', now(s => s + ' bolkvadze'))

      return now(put => {
        put.text('world!')
      })
    })
    put.text('hello')
  }
})

const elm = document.getElementById('root-node')
if (elm == null) throw new Error('cant find root-node')

let requestId
let vnode = toVNode(elm)
const cb = () => {}
let patch
const frame = () => {
  vnode = patch(vnode, cb)
  requestId = undefined
}

M.of(rez)
  .scan((s, r) => {
    if (r.type === 'rvnode') {
      patch = r
      if (typeof requestId === 'undefined') {
        requestId = global.window.requestAnimationFrame(frame)
      }
      return s
    }
    return r(s)
  }, abs())
  .skipRepeats()
  .tap(s => global.console.log(JSON.stringify(s)))
  .drain()
