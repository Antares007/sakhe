// @flow
import {periodic, map} from '@most/core'
import M from '../m'
import type {Pith} from './rvnode'
import tree from './element'

const elm = global.document.getElementById('root-node')
if (elm) {
  const rez = tree(elm)(Counter2(3))
  M.of(rez).drain()
}

function Counter2(d = 0): Pith {
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
    put.node('div', {style: {padding: '5px 10px', textAlign: 'center'}})(
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
                left: `${Math.floor(Math.sin(i) * r)}px`,
                top: `${Math.floor(Math.cos(i) * r)}px`,
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
                left: `${Math.floor(Math.cos(i) * r)}px`,
                top: `${Math.floor(Math.sin(i) * r)}px`,
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
