// @flow
/* eslint-disable no-unused-vars */

import {now, periodic, map} from '@most/core'
import type {Pith as RVNodePith} from '../vtree/rvnode'
import M from '../m'

import selementTree from './selement'

const elm = document.getElementById('root-node')
if (elm == null) throw new Error('cant find root-node')

const abs = () => ({count: 0})

const rez = selementTree(abs, abs(), elm)((s, onAction, onChange) => {
  s.val(
    'count',
    M.of(onAction)
      .map(x => s => s + x.action)
      .valueOf()
  )
  return put => {
    put.node('div')((put, on) => {
      put.node('button', {on: {click: +1}})(put => put.text('+'))
      put.node('button', {on: {click: -1}})(put => put.text('-'))
      put.text(map(x => String(x.count), onChange))
    })
    put.node('div', {}, '1')(map(x => Counter2(x.count), onChange))
  }
})

M.of(rez)
  .tap(s => global.console.log(JSON.stringify(s)))
  .drain()

function Counter2(d = 0): RVNodePith {
  return (put, on) => {
    const pi2 = Math.PI * 2
    const cycle$ = M.of(periodic(20))
      .scan(i => (i >= pi2 ? 0 : i + 0.15), 0)
      .multicast()
    const sum$ = M.of(on)
      .map(x => x.action)
      .scan((sum, v) => sum + v, 0)
      .map(String)
    const r = 10
    put.node('div', {style: {padding: '5px 10px', textAlign: 'center'}}, 'k')(
      put => {
        put.node(
          'button',
          map(
            i => ({
              on: {click: +1},
              style: {
                position: 'relative',
                outlineStyle: 'none',
                borderRadius: `${Math.abs(Math.floor(Math.sin(i) * 20))}px`,
                // left: `${Math.floor(Math.sin(i) * r)}px`,
                // top: `${Math.floor(Math.cos(i) * r)}px`,
                backgroundColor: `rgb(${100 +
                  d * 20 +
                  Math.floor(30 * Math.sin(i))}, ${100 +
                  d * 20 +
                  Math.floor(30 * Math.cos(i))}, 255)`,
              },
            }),
            cycle$.valueOf()
          )
        )(put => {
          put.node('span', {})(put => put.text('+'))
          if (d > 0) put.node('div', {})(Counter2(d - 1))
        })
        put.node(
          'button',
          map(
            i => ({
              on: {click: -1},
              style: {
                position: 'relative',
                outlineStyle: 'none',
                borderRadius: `${Math.abs(Math.floor(Math.cos(i) * 20))}px`,
                // left: `${Math.floor(Math.cos(i) * r)}px`,
                // top: `${Math.floor(Math.sin(i) * r)}px`,
                backgroundColor: `rgb(255, ${100 +
                  d * 20 +
                  Math.floor(30 * Math.sin(i))}, ${100 +
                  d * 20 +
                  Math.floor(30 * Math.cos(i))})`,
              },
            }),
            cycle$.valueOf()
          )
        )(put => {
          put.node('span', {})(put => put.text('-'))
          if (d > 0) put.node('div', {})(Counter2(d - 1))
        })
        put.node('h3', {})(put => put.text(sum$.valueOf()))
      }
    )
  }
}
