import {Stream} from '@most/types'
import {runEffects, now, tap, map, periodic, constant, take} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'
import {bark} from '../src/element'

const observe = <A>(fn: (x: A) => any, $: Stream<A>) =>
  runEffects(tap(fn, $), newDefaultScheduler())

const logger = (key: string) => (x: any) => console.log(key, JSON.stringify(x))


var rez = bark('div', {
  style: {width: '100px', height: '100px'},
  class: {a: true}
}, 'k0')(put => {
  put.node('ul')(put => {
    put.node('li', {}, 'k1')(put => {
      put.text('hello')
      put.comment('this is comment')
    })
  })
  put.node('ul')(put => {
    put.node('li', {}, 'k1')(put => {
      put.text('hello')
      put.comment(constant('comment', take(2, periodic(1000))))
    })
  })
})

observe(x => console.info(x), rez)
