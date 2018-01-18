// @flow
// /* eslint-disable no-unused-vars */
import {now} from '@most/core'
import M from '../m'
import tree from './element'
import Counter1 from '../piths/counter1'
import Counter2 from '../piths/counter2'

const elm = global.document.getElementById('root-node')
if (!elm) throw new Error()

const rez = tree(elm)((put, on) => {
  put.node('div')(put => {
    put.node('button', {on: {click: 'a'}})(put => put.text('a'))
    put.node('button', {on: {click: 'b'}})(put => put.text('b'))
    put.node('button', {on: {click: 'o'}})(put => put.text('o'))
  })
  put.node('div')(put =>
    put.node('div')(put =>
      put.node('div')(put =>
        put.node('div')(put => {
          put.text('aaa')
          put.put(
            'div',
            'k',
            now(vnode => {
              global.console.log('called')
              return vnode
            })
          )
        })
      )
    )
  )
  put.node('div', {}, 'key')(
    M.of(on)
      .filter(x => typeof x.action === 'string')
      .map(x => {
        if (x.action === 'a') return Counter1(0)
        if (x.action === 'b') return Counter1(1)
        return Counter2(2)
      })
      .startWith(put => put.node('h1')(put => put.text('select')))
      .tap(pith => global.console.timeStamp(pith.toString()))
      .valueOf()
  )
})

M.of(rez).drain()
