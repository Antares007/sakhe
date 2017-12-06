import {Stream} from '@most/types'
import {runEffects, now, tap, map, periodic, constant, take, scan, startWith, filter} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'
import {tree} from '../src/vtree'

import toVnode from 'snabbdom/tovnode'
import {init} from 'snabbdom'
import mclass from 'snabbdom/modules/class'
import mprops from 'snabbdom/modules/props'
import mstyle from 'snabbdom/modules/style'
import mattributes from 'snabbdom/modules/attributes'
import meventlisteners from 'snabbdom/modules/eventlisteners'

const defaultModules = [mclass,mprops,mattributes,mstyle,meventlisteners]

const observe = <A>(fn: (x: A) => any, $: Stream<A>) =>
  runEffects(tap(fn, $), newDefaultScheduler())

const logger = (key: string) => (x: any) => console.log(key, JSON.stringify(x))

const chain = <A>($: Stream<A>) => ({
  constant: <B>(b: B) => chain(constant(b, $)),
  startWith: (value: A) => chain(startWith(value, $)),
  take: (n: number) => chain(take(n, $)),
  tap: (f: (a: A) => any) => chain(tap(f, $)),
  scan: <B>(f: (b: B, a: A) => B, b: B) => chain(scan(f, b, $)),
  map: <B>(f: (a: A) => B) => chain(map<A, B>(f, $)),
  filter: (p: (a: A) => boolean) => chain(filter(p, $)),
  drain: () => runEffects($, newDefaultScheduler()),
  valueOf: () => $
})

var rez = tree('div', {
  style: {width: '1'},
  attrs: {style: 'background-color: #DDD;', id: 'df'},
  props: {any: undefined},
  class: {a: true, b: true}
}, 'k0')(put => {
  put.text(
    chain(put.on('click'))
      .take(1)
      .constant('click')
      .startWith('lets start')
      .valueOf()
  )
  put.node('button')(put => put.text('click'))
})

const patch = init(defaultModules)

chain(rez)
  .scan((o, n) => patch(o, n as any), toVnode(document.getElementById('root-node')!))
  .tap(x => console.info(x))
  .drain()
