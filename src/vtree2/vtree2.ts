import {Stream} from '@most/types'
import {
  now,
  periodic,
  combineArray,
  MulticastSource,
  newStream,
  multicast
} from '@most/core'

import {
  Pith as mostPith,
  ring as mostRing,
  tree as mostTree,
  $,
  to$,
  isStream
} from '../most'
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
import {patchData} from './patch-data'

import {ring, Pith as PatchRingPith, Patch, R} from './patch-ring'

export interface Bark<Tag extends Tags> {
  (pith: $<PatchRingPith>): Stream<R<Tag>>
}

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  return mostTree(xs =>
    combineArray<any, R<TagA>>(
      (data: Data, ...patches: Patch<TagA>[]) => (vnode, cb) => {
        patchData(data, vnode)
        const pl = patches.length
        const {children, node} = vnode
        for (var i = 0, l = Math.max(pl, children.length); i < l; i++) {
          if (i < pl) {
            patches[i](vnode, cb)
          } else {
            children.splice(i, 1)
            node.removeChild(children[i].node)
          }
        }
        return vnode
      },
      [to$(data), ...xs]
    )
  )(ring<PatchRingPith, TagA>(p => p)(pith))
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
    chain(periodic(1000 / 60))
      .scan(c => c + 1, 0)
      .map(i => 'world ' + i + '!')
      .take(10000)
      .valueOf()
  )
  put.node(
    'h1',
    tree('h1', {attrs: {id: 'hi'}, style: {width: '50%'}}, 'key3')(put =>
      put.text('hi')
    ),
    'key2'
  )
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
  .scan(
    (t, r) => r(t, e => console.log('on', e)),
    toVNode<'div'>(document.getElementById('root-node')!)
  )
  // .tap(vnode => console.info('patch', JSON.stringify(vnode, null, '  ')))
  .drain()
