// @flow
import {now} from '@most/core'
import M from '../m'

import selementTree from './selement'

const elm = document.getElementById('root-node')
if (elm == null) throw new Error('cant find root-node')

const abs = () => ({a: 42, b: {}})

const rez = selementTree(abs, abs(), elm)(s => {
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

M.of(rez)
  .tap(s => global.console.log(JSON.stringify(s)))
  .drain()
