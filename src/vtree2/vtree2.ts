import {Stream} from '@most/types'
import {
  mergeArray,
  map,
  now,
  periodic,
  scan,
  combineArray,
  MulticastSource,
  newStream,
  multicast
} from '@most/core'
import * as patcher from './patcher'

import {ring as mostRing, tree as mostTree, $, to$, isStream} from '../most'
import {chain} from '../chain'

import {
  VTree,
  VNode,
  Data,
  Tags,
  VText,
  VComment,
  VCharacterData
} from './types'
import {toVNode} from './to-vnode'
import {updateClass} from './update-class'
import {updateAttributes} from './update-attributes'

import {Pith, Bark, Patch, R} from './types'
import {ring} from './ring'

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  return mostTree(
    combineArray<Patch<TagA>, R<TagA>>((...patches) => vnode => {
      patches.forEach(patch => patch(vnode))
      vnode.children
        .slice(patches.length - 1)
        .forEach(vtree => patcher.removeChild(vtree, vnode))
      return vnode
    })
  )(ring(to$(data))(pith))
}

var rez = tree(
  'div',
  {
    class: {a: true, b: true, o: true},
    style: {width: '100%'}
  },
  'k1'
)(put => {
  put.text('hello')
  put.text(
    chain(periodic(1))
      .scan(c => c + 1, 0)
      .map(i => 'world ' + i + '!')
      .valueOf()
  )
  // put.node('h1', {class: {a: true, b: true, o: true}})(put => {
  //   put.text('world!')
  //   put.node('h1', {class: {a: true, b: true, o: true}})(put => {
  //     put.text('world!')
  //     put.node('h1', {class: {a: true, b: true, o: true}})(put => {
  //       put.text(
  //         chain(periodic(10))
  //           .scan(c => c + 1, 0)
  //           .map(String)
  //           .valueOf()
  //       )
  //     })
  //   })
  // })
})

chain(rez)
  .reduce((t, r) => r(t), toVNode<'div'>(document.getElementById('root-node')!))
  .then(console.log.bind(console))
// .tap(console.log.bind(console))
// .drain()
