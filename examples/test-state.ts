import {Stream} from '@most/types'
import {runEffects, now, tap, map, periodic, constant} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'
import {bark} from '../src/state'

const observe = <A>(fn: (x: A) => any, $: Stream<A>) =>
  runEffects(tap(fn, $), newDefaultScheduler())

const logger = (key: string) => (x: any) => console.log(key, JSON.stringify(x))

const inc = (s: number) => s + 1
const inc$ = now(inc)

const initState = {a: 10, b: {s: 10, x: {y: 10, x: {y:10}}}}

const rez = bark(() => ({a: 0, b: {s: -100}}), initState)(s => {
  observe(logger('1: {a: number, b: {s: number}}'), s.onChange)
  s.reduce('a', inc$)
  s.extend('b', () => ({s: 0, x: {}}))(s => {
    observe(logger('2: {s: number, x: {}}'), s.onChange)
    s.reduce('s', inc$)
    s.extend('x', () => ({y: -100, x: {y: -50}}))(s => {
      observe(logger('3: {y: number, x: {y: number}}'), s.onChange)
      s.reduce('y', inc$)
      s.extend('x', () => ({y: 1}))(s => {
        observe(logger('4: {y: number}'), s.onChange)
        s.reduce('y', constant(inc, periodic(2000)))
      })
    })
  })
})

observe(x => console.info(JSON.stringify(x)), rez)
