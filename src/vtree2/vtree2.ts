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

export interface Pith {
  (
    put: {
      node: <Tag extends Tags>(
        tag: Tag,
        data?: $<Data>,
        key?: string
      ) => (pith: $<Pith>) => void
      text: (text: $<string>) => void
      comment: (text: $<string>) => void
    }
  ): void
}

export interface Bark<Tag extends Tags> {
  (pith: $<Pith>): Stream<R<Tag>>
}

export type R<Tag extends Tags> = (tree: VNode<Tag>) => VNode<Tag>

interface Patch<Tag extends Tags> {
  (vnode: VNode<Tag>): void
}

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  const ring = mostRing<Pith, Patch<TagA>>(pith => put => {
    var gi = 0

    put(
      map<Data, Patch<TagA>>(
        data => vnode => {
          patcher.patchData(data, vnode)
        },
        to$(data)
      )
    )

    const mNode = <TagB extends Tags>(
      tagB: TagB,
      data: $<Data> = {},
      key?: string
    ) => (pith: $<Pith>) => {
      const li = gi++
      put(
        map<R<TagB>, Patch<TagA>>(
          r => vnode => {
            const {children} = vnode
            const chld = li < children.length ? children[li] : null
            let onode: VNode<any> | undefined
            if (chld === null) {
              patcher.insertBefore(r(patcher.createElement(tagB)), null, vnode)
            } else if (
              chld.type === 'node' &&
              chld.tag === tagB &&
              chld.key === key
            ) {
              patcher.updateChieldState(chld, r(chld), vnode)
            } else if (
              key &&
              (onode = <VNode<any> | undefined>children.find(
                (vtree, i) =>
                  i > li && vtree.type === 'node' && vtree.key === key
              ))
            ) {
              patcher.insertBefore(onode, chld, vnode)
              patcher.updateChieldState(onode, r(onode), vnode)
            } else if (chld.type === 'node' && chld.tag === tagB) {
              patcher.updateChieldState(chld, r(chld), vnode)
            } else {
              patcher.insertBefore(r(patcher.createElement(tagB)), chld, vnode)
            }
          },
          tree(tagB, data, key)(pith)
        )
      )
    }

    const mCharacterData = (type: 'text' | 'comment') => (text: $<string>) => {
      const li = gi++
      put(
        map<string[], Patch<TagA>>(
          ([oText, text]) => vnode => {
            const {children} = vnode
            const chld = li < children.length ? children[li] : null
            let oldCharData: VCharacterData | undefined
            if (!chld) {
              patcher.insertBefore(
                patcher.createCharacterData(type, text),
                null,
                vnode
              )
            } else if (chld.type === type) {
              patcher.patchText(chld, text, vnode)
            } else if (
              (oldCharData = <VCharacterData | undefined>children.find(
                (vtree, i) =>
                  i > li && vtree.type === type && vtree.data === oText
              ))
            ) {
              patcher.insertBefore(oldCharData, chld, vnode)
              patcher.patchText(oldCharData, text, vnode)
            } else {
              patcher.insertBefore(
                patcher.createCharacterData(type, text),
                chld,
                vnode
              )
            }
          },
          chain(to$(text))
            .pairwise('')
            .valueOf()
        )
      )
    }

    pith({
      node: mNode,
      text: mCharacterData('text'),
      comment: mCharacterData('comment')
    })
  })

  return mostTree(
    combineArray<Patch<TagA>, R<TagA>>((...patches) => vnode => {
      patches.forEach(patch => patch(vnode))
      vnode.children
        .slice(patches.length - 1)
        .forEach(vtree => patcher.removeChild(vtree, vnode))
      return vnode
    })
  )(ring(pith))
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
  put.node('h1', {class: {a: true, b: true, o: true}})(put => {
    put.text('world!')
    put.node('h1', {class: {a: true, b: true, o: true}})(put => {
      put.text('world!')
      put.node('h1', {class: {a: true, b: true, o: true}})(put => {
        put.text(
          chain(periodic(10))
            .scan(c => c + 1, 0)
            .map(String)
            .valueOf()
        )
      })
    })
  })
})

chain(rez)
  .reduce((t, r) => r(t), toVNode<'div'>(document.getElementById('root-node')!))
  .then(console.log.bind(console))
// .tap(console.log.bind(console))
// .drain()
