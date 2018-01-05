// @flow
import {MStream} from './mstream'
import {now} from '@most/core'
import {tree} from './state'

var abs = () => ({a: 42, b: {o: 'otar'}})
var rez = tree(abs)((put, on) => {
  new MStream(on).tap(s => console.log(0, JSON.stringify(s))).drain()
  put.val('a', now(n => n + 1))
  put.extend('b', () => ({o: 'archil', t: 1}))((put, on) => {
    new MStream(on).tap(s => console.log(1, JSON.stringify(s))).drain()
    put.val('o', now(s => s + ' bolkvadze'))
  })
})
new MStream(rez).tap(s => console.log(JSON.stringify(s))).drain()
