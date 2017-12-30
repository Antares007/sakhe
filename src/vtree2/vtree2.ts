import {Stream} from '@most/types'
import {
  now,
  map,
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

export interface Pith {
  (
    put: {
      node: <Tag extends Tags>(tag: Tag, r$: $<R<Tag>>, key?: string) => void
      text: (text: $<string>) => void
      comment: (text: $<string>) => void
    }
  ): void
}
export type R<Tag extends Tags> = (
  tree: VNode<Tag>,
  cb: (event: any) => void
) => VNode<Tag>

export type Patch<Tag extends Tags> = (
  a: VNode<Tag>,
  cb: (event: any) => void
) => void

export interface Bark<Tag extends Tags> {
  (pith: $<Pith>): Stream<R<Tag>>
}

export const tree = <TagA extends Tags>(
  tag: TagA,
  data: $<Data> = {},
  key?: string
): Bark<TagA> => pith => {
  const ring = mostRing<Pith, Patch<TagA>>(pith => put => {
      var gi = 0

      const mNode = <TagB extends Tags>(
        tagB: TagB,
        r$: $<R<TagB>>,
        key?: string
      ) => {
        const li = gi++
        put(
          map<R<TagB>, Patch<TagA>>(
            r => (vnode, cb) => {
              const {children, node} = vnode
              const chld = li < children.length ? children[li] : null
              let movedChldIndex: number | undefined

              if (chld === null) {
                const v = r(createElement(tagB, key), cb)
                children.push(v)
                node.insertBefore(v.node, null)
              } else if (
                chld.type === 'node' &&
                chld.tag === tagB &&
                chld.key === key
              ) {
                children[li] = r(chld, cb)
              } else if (
                key &&
                -1 <
                  (movedChldIndex = children.findIndex(
                    (vtree, i) =>
                      i > li &&
                      vtree.type === 'node' &&
                      vtree.tag === tagB &&
                      vtree.key === key
                  ))
              ) {
                children.splice(
                  li,
                  0,
                  r(<VNode<TagB>>children.splice(movedChldIndex, 1)[0], cb)
                )
              } else if (
                chld.type === 'node' &&
                chld.tag === tagB &&
                typeof chld.key === 'undefined'
              ) {
                children[li] = {...r(chld, cb), key} // ???
              } else {
                const v = r(createElement(tagB, key), cb)
                children.splice(li, 0, v)
                node.insertBefore(v.node, chld.node)
              }
            },
            to$(r$)
          )
        )
      }

      const mCharacterData = (type: 'text' | 'comment') => (text: $<string>) => {
        const li = gi++
        put(
          map<string[], Patch<TagA>>(
            ([oText, text]) => (vnode, cb) => {
              const {children, node} = vnode
              const chld = li < children.length ? children[li] : null
              let oldCharDataIndex: number | undefined
              if (!chld) {
                const c = createCharacterData(type, text)
                children.push(c)
                node.insertBefore(c.node, null)
              } else if (chld.type === type) {
                if (chld.data !== text) {
                  chld.node.textContent = text
                  chld.data = text
                }
              } else if (
                -1 <
                (oldCharDataIndex = children.findIndex(
                  (vtree, i) =>
                    i > li && vtree.type === type && vtree.data === oText
                ))
              ) {
                const c = <VCharacterData>children.splice(oldCharDataIndex, 1)[0]
                children.splice(li, 0, c)
                if (c.data !== text) {
                  c.node.textContent = text
                  c.data = text
                }
              } else {
                const charData = createCharacterData(type, text)
                children.splice(li, 0, charData)
                node.insertBefore(charData.node, chld.node)
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

function createElement<Tag extends Tags>(tag: Tag, key?: string): VNode<Tag> {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: document.createElement(tag)
  }
}

function createCharacterData(
  type: 'text' | 'comment',
  data: string
): VCharacterData {
  return type === 'text'
    ? {type, data, node: document.createTextNode(data)}
    : {type, data, node: document.createComment(data)}
}
