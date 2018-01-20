// @flow
// /* eslint-disable no-unused-vars */
import {disposeWith} from '@most/disposable'
import {now, newStream} from '@most/core'
import M from '../m'
import tree from './element'
import type {Pith} from '../vtree/rvnode'
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
  put.ref(
    now(vnode => {
      global.console.log('ref', vnode)
      return vnode
    })
  )
  put.put(
    'button',
    'k',
    newStream((sink, scheduler) => {
      sink.event(scheduler.currentTime(), vnode => {
        global.console.log(1, vnode)
        vnode.node.addEventListener('click', (e: MouseEvent) => {
          global.console.log('click', e)
        })
        vnode.node.innerHTML = 'hi'
        return vnode
      })
      return disposeWith(() => {
        global.console.log('hmmm')
      }, null)
    })
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
  put.node('div')(C())
})

M.of(rez).drain()

function C(): Pith {
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
