// @flow
/* eslint-disable no-unused-vars */

import {now, periodic, map} from '@most/core'
import type {Pith as RVNodePith} from '../vtree/rvnode'
import Counter2 from '../piths/counter2'
import M from '../m'

import selementTree from './selement'

const elm = document.getElementById('root-node')
if (elm == null) throw new Error('cant find root-node')

const abs = () => ({count: 0})

const rez = selementTree(abs, abs(), elm)((s, onAction, onChange) => {
  s.val(
    'count',
    M.of(onAction)
      .filter(x => x.action === 'p' || x.action === 'm')
      .map(x => s => (s + x.action === 'p' ? +1 : -1))
      .valueOf()
  )
  return put => {
    put.node('div', {}, '0')((put, on) => {
      put.node('button', {on: {click: 'p'}})(put => put.text('+'))
      put.node('button', {on: {click: 'm'}})(put => put.text('-'))
      put.text(map(x => String(x.count), onChange))
    })
    put.node('div', {}, '1')(map(x => Counter2(x.count), onChange))
  }
})

M.of(rez)
  .tap(s => global.console.log(JSON.stringify(s)))
  .drain()
