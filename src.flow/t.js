// @flow
import {now} from '@most/core'
import MStream from './mstream'
import tree from './state'

const abs = () => ({a: 42, b: {o: 'otar'}})

const rez = tree(abs)((put, on) => {
  new MStream(on).tap(s => global.console.log(0, JSON.stringify(s))).drain()
  put.val('a', now(n => n + 1))
  put.extend('b', () => ({o: 'archil', t: 1}))((put, on) => {
    new MStream(on).tap(s => global.console.log(1, JSON.stringify(s))).drain()
    put.val('o', now(s => `${s} bolkvadze`))
  })
})

new MStream(rez).tap(s => global.console.log(JSON.stringify(s))).drain()
