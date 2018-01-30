// @flow
/* eslint-disable */
import type {Stream, Scheduler} from '@most/types'
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
import r, {type Pith, type VNode, type R} from '../vtree/rvnode0'

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
      dom.node(
        'button',
        'p',
        constant(v => {
          v.node.innerText = '+'
          v.node.className = 'increment'
        })
      )
      dom.node(
        'button',
        'm',
        constant(v => {
          v.node.innerText = '-'
          v.node.className = 'decriment'
        })
      )
    })
  )

  dom.text(now(vtext => (vtext.node.textContent = 'hello world!')))

  const sum = M.of(on('click'))
    .map(e => {
      if (e.target instanceof HTMLButtonElement) return e.target
    })
    .filter(Boolean)
    .map(b => (b && b.className === 'increment' ? +1 : -1))
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

  function constant<T>(
    cf: (VNode<T>, Scheduler) => (() => void) | void
  ): Stream<R<VNode<T>>> {
    return newStream((sink, scheduler) => {
      function f(v): mixed {
        if (f.patchedNodes.has(v)) return
        const d = cf(v, scheduler)
        f.patchedNodes.set(v, d)
      }
      f.patchedNodes = new Map()
      return disposeBoth(
        asap(propagateEventTask(f, sink), scheduler),
        disposeWith(() => {
          f.patchedNodes.forEach(d => d && d())
          f.patchedNodes.clear()
        }, null)
      )
    })
  }

  function on(type: string): Stream<MouseEvent> {
    const proxy = new MulticastSource(never())
    dom.put(
      constant((v, scheduler) => {
        const listener = (e: Event) => proxy.event(scheduler.currentTime(), e)
        v.node.addEventListener(type, listener)
        return () => v.node.removeEventListener(type, listener)
      })
    )
    return proxy
  }
})

M.of(rez)
  // .until(M.of(now(1)).delay(3000).$)
  .drain()
