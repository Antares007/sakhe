import {Stream} from '@most/types'
import {disposeWith} from '@most/disposable'
import {map, combineArray, newStream, multicast} from '@most/core'
import {ring as mostRing, tree as mostTree, $, to$} from '../most'
import {VNode, VCharacterData, Data, Tags} from './types'

import {patchData} from './patch-data'
import {chain} from '../chain'

export interface Pith {
  (
    put: {
      node: <Tag extends Tags>(
        tag: Tag,
        data?: $<Data>,
        key?: string
      ) => (pith: Pith) => void
      text: (text: $<string>) => void
      comment: (text: $<string>) => void
    },
    on: Stream<{type: 'on'; action: any; event: Event}>
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
  var on: ((x: any) => void) | undefined
  const ring = mostRing<Pith, Patch<TagA>>(pith => put => {
    var localIndex = 0
    const mNode = <TagB extends Tags>(
      tagB: TagB,
      data: $<Data> = {},
      key?: string
    ) => (pith: Pith) => {
      const index = localIndex++
      put(
        map(
          r =>
            function patchNode(vnode, cb) {
              const {children, node} = vnode
              const li = index < children.length ? children[index] : null
              let oldIndex: number | undefined

              if (li === null) {
                const v = r(createElement(tagB), cb)
                children.push(v)
                node.insertBefore(v.node, null)
              } else if (
                li.type === 'node' &&
                li.tag === tagB &&
                li.key === key
              ) {
                children[index] = r(li, cb)
              } else if (
                key &&
                -1 <
                  (oldIndex = children.findIndex(
                    (vtree, i) =>
                      i > index &&
                      vtree.type === 'node' &&
                      vtree.tag === tagB &&
                      vtree.key === key
                  ))
              ) {
                const v = r(<VNode<TagB>>children.splice(oldIndex, 1)[0], cb)
                children.splice(index, 0, v)
                node.insertBefore(v.node, li.node)
              } else if (
                li.type === 'node' &&
                li.tag === tagB &&
                typeof li.key === 'undefined'
              ) {
                children[index] = r(li, cb)
              } else {
                const v = r(createElement(tagB), cb)
                children.splice(index, 0, v)
                node.insertBefore(v.node, li.node)
              }
            } as Patch<TagA>,
          tree(tagB, data, key)(pith)
        )
      )
    }

    const mCharacterData = (type: 'text' | 'comment') => (text: $<string>) => {
      const index = localIndex++
      put(
        map(
          ([oText, text]) =>
            function patchCharData(vnode) {
              const {children, node} = vnode
              const li = index < children.length ? children[index] : null
              let oldIndex: number | undefined
              if (li === null) {
                const c = createCharacterData(type, text)
                children.push(c)
                node.insertBefore(c.node, null)
              } else if (li.type === type) {
                if (li.data !== text) {
                  li.node.textContent = text
                  li.data = text
                }
              } else if (
                -1 <
                (oldIndex = children.findIndex(
                  (vtree, i) =>
                    i > index && vtree.type === type && vtree.data === oText
                ))
              ) {
                const c = <VCharacterData>children.splice(oldIndex, 1)[0]
                children.splice(index, 0, c)
                node.insertBefore(c.node, li.node)
                if (c.data !== text) {
                  c.node.textContent = text
                  c.data = text
                }
              } else {
                const c = createCharacterData(type, text)
                children.splice(index, 0, c)
                node.insertBefore(c.node, li.node)
              }
            } as Patch<TagA>,
          chain(to$(text))
            .pairwise('')
            .valueOf()
        )
      )
    }

    pith(
      {
        node: mNode,
        text: mCharacterData('text'),
        comment: mCharacterData('comment')
      },
      multicast(
        newStream((sink, scheduler) => {
          on = e => sink.event(scheduler.currentTime(), e)
          return disposeWith(() => {
            on = undefined
          }, null)
        })
      )
    )
  })

  return mostTree(xs =>
    combineArray<any, R<TagA>>(
      (data: Data, ...patches: Patch<TagA>[]) =>
        function combinePatches(vnode, cb) {
          if (vnode.tag !== tag) throw new TypeError('tag')
          if (!vnode.key && key) {
            vnode.key = key
          } else if (vnode.key !== key) throw new TypeError('key')
          const cb2 = (e: any) => {
            if (on) {
              on(e)
            }
            cb(e)
          }
          patchData(data, vnode, cb2)
          const {children, node} = vnode
          const pl = patches.length
          const l = Math.max(pl, children.length)
          for (var i = 0; i < l; i++) {
            if (i < pl) {
              patches[i](vnode, cb2)
            } else {
              node.removeChild(children[i].node)
              children.splice(i, 1)
            }
          }
          return vnode
        },
      [to$(data), ...xs]
    )
  )(ring(pith))
}

function createElement<Tag extends Tags>(tag: Tag): VNode<Tag> {
  return {
    type: 'node',
    tag,
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
