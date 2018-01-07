// @flow
import type {Stream} from '@most/types'
import {combineArray, map, multicast, newStream} from '@most/core'
import {disposeWith} from '@most/disposable'

import type {Data, VNode, VCharacterData} from './types'
import type {$, Pith as mostPith} from '../most'
import {tree as mostTree, to$} from '../most'
import patchData from './patch-data'

export interface Pith {
  (
    put: {
      node(tag: string, data?: $<Data>, key?: string): (pith: Pith) => void,
      text(text: $<string>): void,
      comment(text: $<string>): void,
    },
    on: Stream<Action>
  ): void;
}

export interface Action {type: 'on'; action: $FlowTODO; event: Event}
export interface RVNode {
  (vnode: VNode, cb: (event: mixed) => void): VNode;
}

interface Patch {
  (vnode: VNode, cb: (event: mixed) => void): void;
}

export interface Bark {
  (pith: $<Pith>): Stream<RVNode>;
}

export default function tree(
  tag: string,
  data: $<Data> = {},
  key?: string
): Bark {
  return pith => {
    let on: ?(x: Action) => void
    let localIndex = 0

    const ring = (pith: Pith): mostPith<Patch> => put => {
      const mNode = (tagB: string, data: $<Data> = {}, key?: string) => (
        pith: Pith
      ) => {
        const index = localIndex++
        put(
          map(
            r =>
              function patchNode(vnode, cb) {
                const {children, node} = vnode
                const li = index < children.length ? children[index] : null
                let oldIndex = -1

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
                  key != null &&
                  (oldIndex = children.findIndex(
                    (vtree, i) =>
                      i > index &&
                      vtree.type === 'node' &&
                      vtree.tag === tagB &&
                      vtree.key === key
                  )) > -1
                ) {
                  const v = r(
                    (children.splice(oldIndex, 1)[0]: $FlowTrustMe),
                    cb
                  )
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
              },
            tree(tagB, data, key)(pith)
          )
        )
      }

      const mCharacterData = (type: 'text' | 'comment') => (
        text: $<string>
      ) => {
        const index = localIndex++
        let oldText: ?string
        put(
          map(
            text =>
              function patchCharData(vnode) {
                const {children, node} = vnode
                const li = index < children.length ? children[index] : null
                let oldIndex = -1
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
                  oldText != null &&
                  (oldIndex = children.findIndex(
                    (vtree, i) =>
                      i > index && vtree.type === type && vtree.data === oldText
                  )) > -1
                ) {
                  const c = (children.splice(oldIndex, 1)[0]: $FlowTrustMe)
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
                oldText = text
              },
            to$(text)
          )
        )
      }
      pith(
        {
          node: mNode,
          text: mCharacterData('text'),
          comment: mCharacterData('comment'),
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
    }
    const rez = mostTree(patch$s =>
      combineArray(
        (data: Data, ...patches: Patch[]) =>
          function combinePatches(vnode, cb) {
            if (vnode.tag !== tag) throw new TypeError('tag')
            if (vnode.key == null && key != null) {
              vnode.key = key
            } else if (vnode.key !== key) throw new TypeError('key')
            const cb2 = (e: mixed) => {
              if (on) {
                on(((e: $FlowTODO): Action))
              }
              cb(e)
            }
            patchData(data, vnode, cb2)
            const {children, node} = vnode
            const pl = patches.length
            const l = Math.max(pl, children.length)
            for (let i = 0; i < l; i++) {
              if (i < pl) {
                patches[i](vnode, cb2)
              } else {
                node.removeChild(children[i].node)
                children.splice(i, 1)
              }
            }
            return vnode
          },
        [to$(data), ...patch$s]
      )
    )(map(ring, to$(pith)))
    return rez
  }
}

function createElement(tag: string): VNode {
  return {
    type: 'node',
    tag,
    data: {},
    children: [],
    node: global.document.createElement(tag),
  }
}

function createCharacterData(
  type: 'text' | 'comment',
  data: string
): VCharacterData {
  return type === 'text'
    ? {type: 'text', data, node: global.document.createTextNode(data)}
    : {type: 'comment', data, node: global.document.createComment(data)}
}
