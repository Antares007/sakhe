import {tree, R} from '../src/state'
import {now} from '@most/core'
import {chain} from './chain'

const bark = tree(() => ({hello: {}}))

const state$ = bark(s => {
  s.extend('hello', () => ({world: false, hello: {}}))(s => {
    s.reduce('world', now<R<boolean>>(s => !s))
    s.extend('hello', () => ({world: false, hello: {}}))(s => {
      s.reduce('world', now<R<boolean>>(s => !s))
      s.extend('hello', () => ({world: false, hello: {}}))(s => {
        s.reduce('world', now<R<boolean>>(s => !s))
      })
    })
  })
})

chain(state$)
  .tap(console.log.bind(console))
  .drain()
