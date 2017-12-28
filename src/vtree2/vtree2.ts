import {Stream} from '@most/types'
import {
  merge,
  map,
  now,
  periodic,
  combineArray,
  MulticastSource,
  newStream,
  multicast
} from '@most/core'
import * as patcher from './patcher'

import {Pith as mostPith, ring as mostRing, tree as mostTree, $, to$, isStream} from '../most'
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
  return merge(
    map<Data, R<TagA>>(
      data => vnode => {
        patcher.patchData(data, vnode)
        return vnode
      },
      to$(data)
    ),
    mostTree(
      combineArray<Patch<TagA>, R<TagA>>((...patches) => (vnode, cb) => {
        const pl = patches.length
        const {children} = vnode
        for (var i = 0, l = Math.max(pl, children.length); i < l; i++) {
          if (i < pl) {
            patches[i](vnode, cb)
          } else {
            patcher.removeChild(children[i], vnode)
          }
        }
        return vnode
      })
    )(ring<Pith, TagA>(p => p)(pith))
  )
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
  // put.text(
  //   chain(periodic(1))
  //     .scan(c => c + 1, 0)
  //     .map(i => 'world ' + i + '!')
  //     .take(10000)
  //     .valueOf()
  // )
  put.node('div', tree('div', {}, 'key3')(put => put.text('hi')), 'key2')
  put.text('world!')
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
  .reduce((t, r) => r(t, console.log.bind(console)), toVNode<'div'>(document.getElementById('root-node')!))
  .then(console.log.bind(console))
// .tap(console.log.bind(console))
// .drain()
