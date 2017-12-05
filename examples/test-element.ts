import {Stream} from '@most/types'
import {runEffects, now, tap, map, periodic, constant} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'
import {bark} from '../src/element'

const observe = <A>(fn: (x: A) => any, $: Stream<A>) =>
  runEffects(tap(fn, $), newDefaultScheduler())

const logger = (key: string) => (x: any) => console.log(key, JSON.stringify(x))


var rez = bark('div', {}, 'k0')(put => {
  put.node('ul')(put => {
    put.node('li', {}, 'k1')(put => {
      put.text('hello')
      put.comment('this is comment')
    })
  })
})

observe(x => console.info(JSON.stringify(x, null, '  ')), rez)
