import {Pith, tree as rvnodeTree} from './vtree2'
import {Data} from './types'
import {$} from '../most'
import {chain} from '../chain'
import {requestAnimationFrames} from 'most-request-animation-frame'
import {scan, map} from '@most/core'
import {toVNode} from './to-vnode'

const tree = (element: Element, data?: Data) => (pith: $<Pith>) => {
  return scan(
    (t, r) => r(t, e => console.info(e)),
    toVNode(element),
    rvnodeTree<any>(element.tagName.toLowerCase(), data)(pith)
  )
}
var rez = tree(document.getElementById('root-node')!)(Counter2(2))

chain(rez).drain()

function Counter2(d = 0): Pith {
  return (put, on) => {
    const pi2 = Math.PI * 2
    const cycle$ = chain(requestAnimationFrames()).scan(
      i => (i >= pi2 ? 0 : i + 0.15),
      0
    )
    const sum$ = chain(on)
      .map(x => x.action)
      .scan((sum, v) => sum + v, 0)
    // const r = 10
    put.node('div', {style: {padding: '5px 10px', textAlign: 'center'}})(
      put => {
        put.node(
          'button',
          map<number, Data>(
            i => ({
              on: {click: +1},
              style: {
                position: 'relative',
                outlineStyle: 'none',
                borderRadius: Math.abs(Math.floor(Math.sin(i) * 20)) + 'px',
                // left: Math.floor(Math.sin(i) * r) + 'px',
                // top: Math.floor(Math.cos(i) * r) + 'px',
                backgroundColor: `rgb(${100 +
                  d * 20 +
                  Math.floor(30 * Math.sin(i))}, ${100 +
                  d * 20 +
                  Math.floor(30 * Math.cos(i))}, 255)`
              }
            }),
            cycle$.valueOf()
          )
        )(put => {
          put.node('span', {})(put => put.text('+'))
          if (d > 0) put.node('div', {})(Counter2(d - 1))
        })
        put.node(
          'button',
          map<number, Data>(
            i => ({
              on: {click: -1},
              style: {
                position: 'relative',
                outlineStyle: 'none',
                borderRadius: Math.abs(Math.floor(Math.cos(i) * 20)) + 'px',
                // left: Math.floor(Math.cos(i) * r) + 'px',
                // top: Math.floor(Math.sin(i) * r) + 'px',
                backgroundColor: `rgb(255, ${100 +
                  d * 20 +
                  Math.floor(30 * Math.sin(i))}, ${100 +
                  d * 20 +
                  Math.floor(30 * Math.cos(i))})`
              }
            }),
            cycle$.valueOf()
          )
        )(put => {
          put.node('span', {})(put => put.text('-'))
          if (d > 0) put.node('div', {})(Counter2(d - 1))
        })
        put.node('h3', {})(put =>
          put.text(sum$.map(n => n.toString()).valueOf())
        )
      }
    )
  }
}
