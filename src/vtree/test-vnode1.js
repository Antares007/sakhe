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
  never,
  startWith
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

// const count = () =>
//   M.of(periodic(1000))
//     .scan(a => a + 1, 0)
//     .map(i => i % 3)
//     .valueOf()

const rez = tree(elm)(dom => {
  const proxy = new MulticastSource(never())
  dom.node('button', btn(0))
  dom.node('button', btn(1))
  dom.node('button', btn(2))
  dom.node('button', btn(3))

  function btn<T: HTMLElement>(a: number): R<VNode<T>> {
    return r(dom => {
      dom.put(
        ref((v, scheduler) => {
          v.node.innerText = a + ''
          const listener = (e: MouseEvent) => {
            proxy.event(scheduler.currentTime(), a)
          }
          v.node.addEventListener('click', listener)
          return () => v.node.removeEventListener('click', listener)
        })
      )
    })
  }
  dom.text(map(i => v => (v.node.textContent = i), startWith(0, proxy)))
  dom.node(
    'div',
    r(
      map(i => {
        if (i === 0) return Counter(1)
        if (i === 1) return Counter2(1)
        return Counter(i)
      }, startWith(0, proxy))
    )
  )
})

M.of(rez)
  // .until(M.of(now(1)).delay(3000).$)
  .drain()

function Counter2<T: HTMLElement>(d = 0): Pith<T> {
  return dom => {
    const proxy = new MulticastSource(never())
    const sum = M.of(proxy)
      .scan((c, a) => c + a, 0)
      .map(String).$
    dom.node(
      'div',
      r(dom => {
        dom.node('button', button(1))
        dom.node('button', button(-1))
        dom.put(
          ref(({node: {style}}) => {
            style.padding = '5px 10px'
            style.textAlign = 'center'
          })
        )
      })
    )
    dom.node('h3', r(dom => dom.text(textContent(sum))))

    function button<T: HTMLElement>(action: 1 | -1 = 1): R<VNode<T>> {
      return r(dom => {
        if (d > 0) dom.node('div', r(Counter2(d - 1)))
        dom.put(
          ref(({node}, scheduler) => {
            node.className = action > 0 ? 'increment' : 'decriment'
            const span = document.createElement('span')
            span.innerHTML = `<b>${action > 0 ? '+' : '-'}</b>`
            node.insertBefore(span, node.children[0])
            const listener = (e: MouseEvent) =>
              proxy.event(scheduler.currentTime(), action)
            node.addEventListener('click', listener)
            return () => {
              node.removeEventListener('click', listener)
              node.removeChild(span)
            }
          })
        )
      })
    }
  }
}

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
        dom.node('button', button(1))
        dom.node('button', button(-1))
        dom.put(
          ref(({node: {style}}) => {
            style.padding = '5px 10px'
            style.textAlign = 'center'
          })
        )
      })
    )
    dom.node('h3', r(dom => dom.text(textContent(sum))))

    function button<T: HTMLElement>(action: 1 | -1 = 1): R<VNode<T>> {
      const [wave1, wave2] =
        action > 0 ? [Math.sin, Math.cos] : [Math.cos, Math.sin]
      return r(dom => {
        dom.put(
          ref(({node}, scheduler) => {
            const {style} = node
            style.position = 'relative'
            style.outline = 'none'

            node.className = action > 0 ? 'increment' : 'decriment'
            const span = document.createElement('span')
            span.innerHTML = `<b>${action > 0 ? '+' : '-'}</b>`
            node.insertBefore(span, node.children[0])

            const listener = (e: MouseEvent) => {
              proxy.event(scheduler.currentTime(), action)
            }
            node.addEventListener('click', listener)
            return () => {
              node.removeEventListener('click', listener)
              node.removeChild(span)
            }
          })
        )
        dom.put(
          map(
            i => ({node: {style}}) => {
              style.borderRadius = `${Math.abs(Math.floor(wave1(i) * 20))}px`
              style.left = `${Math.floor(wave1(i) * radius)}px`
              style.top = `${Math.floor(wave2(i) * radius)}px`
              const c1 = 100 + d * 20 + Math.floor(30 * wave1(i))
              const c2 = 100 + d * 20 + Math.floor(30 * wave2(i))
              style.backgroundColor =
                action > 0 ? `rgb(${c1}, ${c2}, 255)` : `rgb(255, ${c1}, ${c2})`
            },
            cycle$
          )
        )
        if (d > 0) dom.node('div', r(Counter(d - 1)))
      })
    }
  }
}

function ref<T>(cf: (VNode<T>, Scheduler) => (() => void) | void): R<VNode<T>> {
  return newStream((sink, scheduler) => {
    const patchedVNodes = new Map()
    return disposeBoth(
      asap(
        propagateEventTask(v => {
          if (patchedVNodes.has(v)) return
          patchedVNodes.set(v, cf(v, scheduler))
        }, sink),
        scheduler
      ),
      disposeWith(() => patchedVNodes.forEach(d => d && d()), null)
    )
  })
}

function textContent<T: VText | VComment>(s: string | Stream<string>): R<T> {
  return map(
    data => v => {
      if (v.data === data) return
      v.data = data
      v.node.textContent = data
    },
    typeof s === 'string' ? now(s) : s
  )
}
