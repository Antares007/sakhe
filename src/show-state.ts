import {tree, R} from '../src/state'
import {now} from '@most/core'
import {chain} from './chain'

chain(
  tree(() => [])(s => {
    s.reduce('length', now<R<number>>(s => s + 1))
  })
)
  .tap(console.log.bind(console))
  .drain()
