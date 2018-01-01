import {Pith, tree as rvnodeTree} from './vtree2'
import {Data} from './types'
import {$} from '../most'
import {chain} from '../chain'
import {periodic, scan} from '@most/core'
import {toVNode} from './to-vnode'

const Counter = (d = 4): Pith => (put, on) => {
  put.node('div')(put => {
    put.node('button', {on: {click: +1}})(put => {
      put.text('+')
      if (d > 0) put.node('div')(Counter(d - 1))
    })
    put.node('button', {on: {click: -1}})(put => {
      put.text('-')
      if (d > 0) put.node('div')(Counter(d - 1))
    })
  })
  put.text(
    chain(on)
      .map(x => x.action)
      .scan((c, a) => c + a, 0)
      .map(String)
      .valueOf()
  )
}

const tree = <Tag extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[Tag],
  data?: Data
) => (pith: $<Pith>) => {
  return scan(
    (t, r) => r(t, e => console.info(e)),
    toVNode<Tag>(element),
    rvnodeTree<Tag>(<Tag>element.tagName.toLowerCase(), data)(pith)
  )
}

var rez = tree<'div'>(<HTMLDivElement>document.getElementById('root-node')!)(
  chain(periodic(1000 / 60))
    .scan(c => c + 1, 0)
    .map(i => i % 5)
    .map(d => Counter(d))
    .valueOf()
)

chain(rez).drain()
