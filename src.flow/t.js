// @flow
import {tree} from './r'
import {now, runEffects, tap, scan} from '@most/core'
import {newDefaultScheduler} from '@most/scheduler'

var abs = () => ({a: 42, b: {o: 'otar'}})
var rez = tree(abs)(put => {
  put.val('a', now(n => n + 1))
  put.extend('b', () => ({o: 'archil', t: 1}))(put => {
    put.val('o', now(s => s + ' bolkvadze'))
  })
})

runEffects(
  tap(
    s => console.log(JSON.stringify(s)),
    scan((s, r) => r(s), {a: 43, b: {o: 'otar bolkvadze', t: 1}}, rez)
  ),
  newDefaultScheduler()
)
