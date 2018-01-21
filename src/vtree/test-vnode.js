// @flow
/* eslint-disable no-unused-vars */
import {disposeWith} from '@most/disposable'
import {now, newStream, periodic} from '@most/core'
import M from '../m'
import tree from './element'
import type {Pith} from '../vtree/rvnode'
import Counter1 from '../piths/counter1'
import Counter2 from '../piths/counter2'

const elm = global.document.getElementById('root-node')
if (!elm) throw new Error()

const count = () =>
  M.of(periodic(1000))
    .scan(a => a + 1, 0)
    .skip(1)
    .map(i => 'h' + i)
    .take(10)
    .continueWith(count)
    .valueOf()

const rez = tree(elm)(Test())

M.of(rez).drain()

function Test (): Pith {
  return (put, on) => {
    put.node('div')(put => {
      put.node('button', {on: {click: 'a'}})(put => put.text('a'))
      put.node('button', {on: {click: 'b'}})(put => put.text('b'))
      put.node('button', {on: {click: 'o'}})(put => put.text('o'))
    })
    put.node('h4')(put => put.text(count()))
    put.node('div', {}, 'key')(
      M.of(on)
        .filter(x => typeof x.action === 'string')
        .map(x => {
          if (x.action === 'a') return Counter1(0)
          if (x.action === 'b') return Counter1(1)
          return Counter2(1)
        })
        .startWith(put => put.node('h1')(put => put.text('select')))
        .tap(pith => global.console.timeStamp(pith.toString()))
        .valueOf()
    )
  }
}
function C (): Pith {
  return (put, on) => {
    put.node('button', {on: {click: 'A'}})(put => {
      put.text('A')
    })
    put.text(
      M.of(on)
        .map(x => x.action)
        .startWith('')
        .valueOf()
    )
  }
}
