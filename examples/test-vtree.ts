import {Stream} from '@most/types'
import {chain} from '../src/chain'
import { now } from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'
import {tree} from '../src/vtree'

import toVnode from 'snabbdom/tovnode'
import {init} from 'snabbdom'
import mclass from 'snabbdom/modules/class'
import mprops from 'snabbdom/modules/props'
import mstyle from 'snabbdom/modules/style'
import mattributes from 'snabbdom/modules/attributes'
import meventlisteners from 'snabbdom/modules/eventlisteners'

const defaultModules = [mclass, mprops, mattributes, mstyle, meventlisteners]

var rez = tree(
  'div',
  {
    style: {width: '1'},
    attrs: {style: 'background-color: #DDD;', id: 'df'},
    props: {any: undefined},
    class: {a: true, b: true}
  },
  'k0'
)((put, on) => {
  put.node('h1')(put => put.text('h1'))
  put.text(
    chain(on('click'))
      .take(1)
      .constant('click')
      .startWith('lets start')
      .valueOf()
  )
  put.node('button')(put => put.text('click'))
})

const patch = init(defaultModules)

chain(rez)
  .scan(
    (o, n) => patch(o, n as any),
    toVnode(document.getElementById('root-node')!)
  )
  .tap(x => console.info(x))
  .drain()
