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
import r, {
  type Pith,
  type VNode,
  type VText,
  type VComment,
  type R
} from '../vtree/rvnode0'

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
const rez = tree(elm)(Counter(2))
M.of(rez)
  // .until(M.of(now(1)).delay(3000).$)
  .drain()

function Counter<T: HTMLElement>(d = 0): Pith<T> {
  return dom => {
    const radius = 10
    const pi2 = Math.PI * 2
    const cycle$ = M.of(periodic(1000 / 30))
      .scan(i => (i >= pi2 ? 0 : i + 0.15), 0)
      .multicast().$
    const sum = M.of(on('click'))
      .map(e => {
        if (e.target instanceof HTMLButtonElement) return e.target
      })
      .filter(Boolean)
      .map(b => (b && b.className === 'increment' ? +1 : -1))
      .scan((c, a) => c + a, 0)
      .map(String).$

    dom.node(
      'div',
      r(dom => {
        dom.put(
          constant(({node: {style}}) => {
            style.padding = '5px 10px'
            style.textAlign = 'center'
          })
        )
        dom.node(
          'button',
          r(dom => {
            dom.put(
              constant(({node}) => {
                const {style} = node
                node.textContent = '+'
                node.className = 'increment'
                style.position = 'relative'
                style.outline = 'none'
              })
            )
            dom.put(
              map(
                i => ({node: {style}}) => {
                  style.borderRadius = `${Math.abs(
                    Math.floor(Math.sin(i) * 20)
                  )}px`
                  // style.left = `${Math.floor(Math.sin(i) * radius)}px`
                  // style.top = `${Math.floor(Math.cos(i) * radius)}px`
                  style.backgroundColor = `rgb(${100 +
                    d * 20 +
                    Math.floor(30 * Math.sin(i))}, ${100 +
                    d * 20 +
                    Math.floor(30 * Math.cos(i))}, 255)`
                },
                cycle$
              )
            )
            if (d > 0) dom.node('div', r(Counter(d - 1)))
          })
        )
        dom.node(
          'button',
          r(dom => {
            dom.put(
              constant(({node}) => {
                const {style} = node
                node.textContent = '-'
                node.className = 'decriment'
                style.position = 'relative'
                style.outline = 'none'
              })
            )

            dom.put(
              map(
                i => ({node: {style}}) => {
                  style.borderRadius = `${Math.abs(
                    Math.floor(Math.sin(i) * 20)
                  )}px`
                  // style.left = `${Math.floor(Math.cos(i) * radius)}px`
                  // style.top = `${Math.floor(Math.sin(i) * radius)}px`
                  style.backgroundColor = `rgb(255, ${100 +
                    d * 20 +
                    Math.floor(30 * Math.sin(i))}, ${100 +
                    d * 20 +
                    Math.floor(30 * Math.cos(i))})`
                },
                cycle$
              )
            )
            if (d > 0) dom.node('div', r(Counter(d - 1)))
          })
        )
      })
    )
    dom.node('h3', r(dom => dom.text(textContent(sum))))

    function textContent<T: VText | VComment>(
      s: string | Stream<string>
    ): Stream<R<T>> {
      return map(
        data => v => {
          if (v.data === data) return
          v.data = data
          v.node.textContent = data
        },
        typeof s === 'string' ? now(s) : s
      )
    }

    function constant<T>(
      cf: (VNode<T>, Scheduler) => (() => void) | void
    ): Stream<R<VNode<T>>> {
      return newStream((sink, scheduler) => {
        var ref: ?VNode<T>
        var dispose: ?() => void
        return disposeBoth(
          asap(
            propagateEventTask(v => {
              if (ref === v) return
              if (ref) throw Error('wtf!!!')
              dispose = cf(v, scheduler)
              ref = v
            }, sink),
            scheduler
          ),
          disposeWith(() => {
            dispose && dispose()
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
  }
}
