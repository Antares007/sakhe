import {tree, RState} from '../src/state'
import {now} from '@most/core'
import {chain} from './chain'

chain(
  tree(() => [])(s => {
    s.reduce('length', now<RState<number>>(s => s + 1))
  })
)
  .tap(console.log.bind(console))
  .drain()
