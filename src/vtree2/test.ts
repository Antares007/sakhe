import {Pith, tree} from './vtree2'
import {chain} from '../chain'
import {toVNode} from './to-vnode'

const Counter = (d = 3) =>
  function(put, on) {
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
  } as Pith

var rez = tree('div')(Counter())

chain(rez)
  .scan(
    (t, r) => r(t, e => console.log('on', e)),
    toVNode<'div'>(document.getElementById('root-node')!)
  )
  // .tap(vnode => console.info('patch', JSON.stringify(vnode, null, '  ')))
  .drain()
