// @flow
/* eslint-disable */
import {now} from '@most/core'
import Counter2 from '../piths/counter2'
import M from '../m'

import selementTree from './selement'

const elm = document.getElementById('root-node')
if (elm == null) throw new Error('cant find root-node')

const abs = () => ({count: 0, b: {}})

const rez = selementTree(abs, abs(), elm)((s, onAction, onChange) => {
  s.val(
    'count',
    M.of(onAction)
      .filter(x => x.action === 'p' || x.action === 'm')
      .map(x => s => s + (x.action === 'p' ? +1 : -1))
      .valueOf()
  )
  return put => {
    put.node('div', {}, '0')((put, on) => {
      // put.snode('b', () => ({a: 42, b: {}}), 'div')((s, a, c) => {
      //   s.val('a', now(s => s + 1))
      //   return put => put.text('aa')
      // })
      put.node('button', {on: {click: 'p'}})(put => put.text('+'))
      put.node('button', {on: {click: 'm'}})(put => put.text('-'))
      put.text(
        M.of(onChange)
          .map(x => String(x.count))
          .valueOf()
      )
    })
    // put.text(
    //   M.of(onAction)
    //     .filter(x => x.action === 'p' || x.action === 'm')
    //     .map(x => (x.action === 'p' ? +1 : -1))
    //     .scan((a, x) => a + x, 0)
    //     .map(String)
    //     .valueOf()
    // )
    //
    // put.node('div')(put => {
    //   if (typeof put.snode === 'function') {
    //     put.snode('b', () => ({a: 42, b: {}}), 'div')((s, a, c) => {
    //       s.val('a', now(s => s + 1))
    //       return put => put.text('aa')
    //     })
    //   }
    // })
    put.node('div', {}, '1')(
      M.of(onChange)
        .map(x => {
          console.log(x)
          return Counter2(x.count)
        })
        .valueOf()
    )
  }
})

M.of(rez)
  .tap(s => global.console.log(JSON.stringify(s)))
  .drain()
