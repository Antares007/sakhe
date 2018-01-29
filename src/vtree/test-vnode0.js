// @flow
/* eslint-disable */
import {
  periodic,
  now,
  merge,
  never,
  newStream,
  propagateEventTask
} from '@most/core'
import {disposeBoth, disposeWith} from '@most/disposable'
import {newDefaultScheduler, asap} from '@most/scheduler'
import M from '../m'
import tree from './element'
import type {Pith} from '../vtree/rvnode'
import Counter1 from '../piths/counter1'
import Counter2 from '../piths/counter2'

const elm = document.getElementById('root-node')
if (!elm) throw new Error()

const count = () =>
  M.of(periodic(1000))
    .scan(a => a + 1, 0)
    .skip(1)
    .map(i => 'h' + i)
    .take(10)
    .continueWith(count)
    .valueOf()

const ring = pith => pith // (put, on) => pith({...put}, on)
const rez = tree(elm)(Test())

const disposable = M.of(rez).$.run(
  {
    event: (t, e) => {},
    end: t => {},
    error: (t, err) => {}
  },
  newDefaultScheduler()
)
setTimeout(disposable.dispose.bind(disposable), 20000)

function Test() {
  return ring((put, on) => {
    function f(vnode, cb) {
      if (f.patchedNodes.has(vnode)) return

      const listener = () => console.log('patch', vnode)

      vnode.node.addEventListener('click', listener)
      console.log('addEventListener')

      f.patchedNodes.set(vnode, () => {
        console.log('removeEventListener')
        vnode.node.removeEventListener('click', listener)
      })
    }
    f.patchedNodes = new Map()
    put.put(
      newStream((sink, scheduler) => {
        console.log('sink')
        return disposeBoth(
          asap(propagateEventTask(f, sink), scheduler),
          disposeWith(() => {
            f.patchedNodes.forEach(d => d())
            f.patchedNodes.clear()
          }, null)
        )
      })
    )

    // put.text('text')
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
        .tap(pith => console.timeStamp(pith.toString()))
        .valueOf()
    )
  })
}

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
