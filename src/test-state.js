// @flow
import {now} from '@most/core'
import M from './m'
import tree from './state'

const abs = () => ({a: 42, b: {o: 'otar'}})

const rez = tree(abs, {a: 43, b: {o: 'otar bolkvadze', t: 1}})((put, on) => {
  M.of(on)
    .tap(s => global.console.log(0, JSON.stringify(s)))
    .drain()
  put.val('a', now(n => n + 1))
  put.extend('b', () => ({o: 'archil', t: 1}))((put, on) => {
    M.of(on)
      .tap(s => global.console.log(1, JSON.stringify(s)))
      .drain()
    put.val('o', now(s => `${s} bolkvadze`))
  })
  // put.put(now(s => ({...s, a: -42})))
})

M.of(rez)
  .tap(s => global.console.log(JSON.stringify(s)))
  .drain()
