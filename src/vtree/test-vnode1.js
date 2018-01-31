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
    const cycle$ = M.of(periodic(1000 / 60))
      .scan(i => (i >= pi2 ? 0 : i + 0.15), 0)
      .multicast().$
    const proxy = new MulticastSource(never())
    const sum = M.of(proxy)
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
        button(dom, 1)
        button(dom, -1)
      })
    )
    dom.node('h3', r(dom => dom.text(textContent(sum))))

    function button(dom, action: 1 | -1 = 1) {
      const [wave1, wave2] =
        action > 0 ? [Math.sin, Math.cos] : [Math.cos, Math.sin]

      dom.node(
        'button',
        r(dom => {
          dom.put(
            constant(({node}, scheduler) => {
              const {style} = node
              node.textContent = action > 0 ? '+' : '-'
              node.className = action > 0 ? 'increment' : 'decriment'
              style.position = 'relative'
              style.outline = 'none'
              const listener = (e: MouseEvent) => {
                proxy.event(scheduler.currentTime(), action)
              }
              node.addEventListener('click', listener)
              return () => node.removeEventListener('click', listener)
            })
          )
          dom.put(
            map(
              i => ({node: {style}}) => {
                style.borderRadius = `${Math.abs(Math.floor(wave1(i) * 20))}px`
                style.left = `${Math.floor(wave1(i) * radius)}px`
                style.top = `${Math.floor(wave2(i) * radius)}px`
                style.backgroundColor =
                  action > 0
                    ? `rgb(${100 + d * 20 + Math.floor(30 * wave1(i))}, ${100 +
                        d * 20 +
                        Math.floor(30 * wave2(i))}, 255)`
                    : `rgb(255, ${100 +
                        d * 20 +
                        Math.floor(30 * wave1(i))}, ${100 +
                        d * 20 +
                        Math.floor(30 * wave2(i))})`
              },
              cycle$
            )
          )
          if (d > 0) dom.node('div', r(Counter(d - 1)))
        })
      )
    }

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
  }
}
