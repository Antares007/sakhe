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
import {updateClass} from './update-class'
import {updateAttributes} from './update-attributes'

import {Pith, Bark, Patch, R} from './types'
import {ring} from './ring'

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  return mostTree(xs =>
    merge(
      map<Data, R<TagA>>(
        data => vnode => {
          console.log('a', JSON.stringify(vnode))
          patchData(data, vnode)
          return vnode
        },
        to$(data)
      ),
      combineArray<Patch<TagA>, R<TagA>>(
        (...patches) => (vnode, cb) => {
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
        xs
      ),
    )
  )(ring<Pith, TagA>(p => p)(pith))
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
  put.node('h1', tree('h1', {style: {width: '50%'}}, 'key3')(put => put.text('hi')), 'key2')
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
    (t, r) => r(t, console.log.bind(console)),
    toVNode<'div'>(document.getElementById('root-node')!)
  )
  .drain()
// .tap(console.log.bind(console))
// .drain()

function patchData(data: Data, vnode: VNode<any>): void {
  const oldClass = vnode.data.class || {}
  const newClass = data.class || {}

  for (const name in oldClass)
    if (!newClass[name]) vnode.node.classList.remove(name)

  for (const name in newClass)
    if (newClass[name] !== oldClass[name]) vnode.node.classList.toggle(name)
  vnode.data = data
}
