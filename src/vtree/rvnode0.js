// @flow
import type {Stream} from '@most/types'
import type {VNode, VText, VComment} from './types'

import {combineArray, map, now} from '@most/core'

import mostTree, {type Pith as MostPith} from '../most0'

export type Patch<T> = T => mixed

export type VNodeRay = {
  node(tag: string, key: string, r: Stream<Patch<VNode>>): void,
  text(r: Stream<Patch<VText>>): void,
  comment(r: Stream<Patch<VComment>>): void,
  put(rvnode: Stream<Patch<VNode>>): number
}

export type Pith = (put: VNodeRay) => void

export default function tree (pith: Pith | Stream<Pith>): Stream<Patch<VNode>> {
  const ring = (pith: Pith): MostPith<Patch<VNode>> => put => {
    var currentIndex = 0

    const node = (tagB, key, r) => {
      const index = currentIndex++
      put.put(
        map(
          patchVNode =>
            function patchChieldVNode (parentVnode, cb) {
              var {children, node} = parentVnode
              var li = children[index]
              var vnode
              if (li == null) {
                vnode = createElement(tagB, key)
                patchVNode(vnode)
                children.push(vnode)
                node.insertBefore(vnode.node, null)
                return
              }
              if (li.type === 'node' && li.tag === tagB && li.key === key) {
                patchVNode(li)
                return
              }
              if (key != null) {
                for (var i = index + 1, l = children.length; i < l; i++) {
                  vnode = children[i]
                  if (
                    vnode.type === 'node' &&
                    vnode.tag === tagB &&
                    vnode.key === key
                  ) {
                    children.splice(i, 1)
                    patchVNode(vnode)
                    children.splice(index, 0, vnode)
                    node.insertBefore(vnode.node, li.node)
                    return
                  }
                }
              }
              if (li.type === 'node' && li.tag === tagB && li.key == null) {
                li.key = key
                patchVNode(li)
                return
              }
              vnode = createElement(tagB, key)
              patchVNode(vnode)
              children.splice(index, 0, vnode)
              node.insertBefore(vnode.node, li.node)
            },
          r
        )
      )
    }
    const text = (r: Stream<Patch<VText>>) => {
      const index = currentIndex++
      put.put(
        map(
          r =>
            function patchCharData (parentVnode) {
              var {children, node} = parentVnode
              var li = children[index]
              var charData
              if (li == null) {
                charData = createText()
                children.push(charData)
                node.insertBefore(charData.node, null)
                r(charData)
                return
              }
              if (li.type === 'text') {
                r(li)
                return
              }
              charData = createText()
              children.splice(index, 0, charData)
              node.insertBefore(charData.node, li.node)
              r(charData)
            },
          r
        )
      )
    }
    const comment = (r: Stream<Patch<VComment>>) => {
      const index = currentIndex++
      put.put(
        map(
          r =>
            function patchCharData (parentVnode) {
              var {children, node} = parentVnode
              var li = children[index]
              var charData
              if (li == null) {
                charData = createComment()
                children.push(charData)
                node.insertBefore(charData.node, null)
                r(charData)
                return
              }
              if (li.type === 'comment') {
                r(li)
                return
              }
              charData = createComment()
              children.splice(index, 0, charData)
              node.insertBefore(charData.node, li.node)
              r(charData)
            },
          r
        )
      )
    }

    pith({
      ...put,
      node,
      text,
      comment: comment
    })

    put.put(
      now(function patchRemoveChildren (vnode) {
        const {children, node} = vnode
        for (let i = currentIndex; i < children.length; i++) {
          console.info('removed', children[i].node)
          node.removeChild(children[i].node)
          children.splice(i, 1)
        }
      })
    )
  }

  return mostTree(xs =>
    combineArray(
      (...patches: Array<Patch<VNode>>) =>
        function patchVNode (vnode, cb) {
          for (var i = 0; i < patches.length; i++) {
            patches[i](vnode)
          }
        },
      xs
    )
  )(typeof pith === 'function' ? ring(pith) : map(ring, pith))
}

function createElement (tag: string, key: ?string): VNode {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: document.createElement(tag)
  }
}

function createText (data = ''): VText {
  return {type: 'text', data, node: document.createTextNode(data)}
}

function createComment (data = ''): VComment {
  return {type: 'comment', data, node: document.createComment(data)}
}
