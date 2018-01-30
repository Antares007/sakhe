// @flow
/* eslint-disable */
import type {Stream} from '@most/types'
import {
  periodic,
  now,
  map,
  newStream,
  propagateEventTask,
  MulticastSource,
  startWith,
  never
} from '@most/core'
import {disposeBoth, disposeWith} from '@most/disposable'
import {asap} from '@most/scheduler'

import M from '../m'
import tree from './element0'
import r, {type Pith} from '../vtree/rvnode0'

const coll = document.getElementsByTagName('div')
const elm = [...coll].find(e => e.id === 'root-node')
if (!elm) throw new Error()

const count = () =>
  M.of(periodic(1000))
    .scan(a => a + 1, 0)
    .skip(1)
    .map(i => 'h' + i)
    .take(10)
    .continueWith(count)
    .valueOf()

const rez = tree(elm)(dom => {
  dom.node(
    'div',
    '1',
    r(dom => {
      dom.node('button', 'p', now(v => (v.node.innerText = '+')))
      dom.node('button', 'm', now(v => (v.node.innerText = '-')))
    })
  )
  dom.text(now(vtext => (vtext.node.textContent = 'hello world!')))

  const sum = M.of(on('click'))
    .map(e => {
      if (e.target instanceof HTMLButtonElement) return e.target
      //:: throw new Error
    })
    .filter(Boolean)
    .map(b => (b && b.innerText === '+' ? +1 : -1))
    .scan((c, a) => c + a, 0)
    .map(String).$

  dom.text(
    map(
      str => vtext => {
        vtext.node.textContent = str
      },
      sum
    )
  )

  function on(type: string): Stream<MouseEvent> {
    const proxy = new MulticastSource(never())
    dom.put(
      newStream((sink, scheduler) => {
        console.log('run')
        function f(vnode, cb) {
          if (f.patchedNodes.has(vnode)) return

          const listener = (e: Event) => proxy.event(scheduler.currentTime(), e)

          vnode.node.addEventListener(type, listener)
          console.log('addEventListener')

          f.patchedNodes.set(vnode, () => {
            console.log('removeEventListener')
            vnode.node.removeEventListener(type, listener)
          })
        }
        f.patchedNodes = new Map()
        return disposeBoth(
          asap(propagateEventTask(f, sink), scheduler),
          disposeWith(() => {
            f.patchedNodes.forEach(d => d())
            f.patchedNodes.clear()
          }, null)
        )
      })
    )
    return proxy
  }
})

M.of(rez)
  // .until(M.of(now(1)).delay(3000).$)
  .drain()
