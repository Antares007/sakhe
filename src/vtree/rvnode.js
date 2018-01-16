import {combineArray, map, now} from '@most/core'

import mostTree from '../most'
import patchData from './patch-data'
import subject from '../subject'

export default function tree(tag, data = {}) {
  return pith => {
    const sync = subject()
    let localIndex = 0

    const ring = pith => put => {
      const mPut = (tagB, key, r) => {
        const index = localIndex++
        put(
          map(
            r =>
              function patchNode(vnode, cb) {
                const {children, node} = vnode
                const li = index < children.length ? children[index] : null
                let oldIndex = -1

                if (li === null) {
                  const v = r(createElement(tagB, key), cb)
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
                  const v = r(children.splice(oldIndex, 1)[0], cb)
                  children.splice(index, 0, v)
                  node.insertBefore(v.node, li.node)
                } else if (
                  li.type === 'node' &&
                  li.tag === tagB &&
                  typeof li.key === 'undefined'
                ) {
                  li.key = key
                  children[index] = r(li, cb)
                } else {
                  const v = r(createElement(tagB, key), cb)
                  children.splice(index, 0, v)
                  node.insertBefore(v.node, li.node)
                }
              },
            r
          )
        )
      }
      const mNode = (tagB, data = {}, key) => pith => {
        mPut(tagB, key, tree(tagB, data)(pith))
      }

      const mCharacterData = type => text => {
        const index = localIndex++
        let oldText
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
                  const c = children.splice(oldIndex, 1)[0]
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
            typeof text === 'string' ? now(text) : text
          )
        )
      }

      pith(
        {
          node: mNode,
          text: mCharacterData('text'),
          comment: mCharacterData('comment'),
          put: mPut,
        },
        sync.stream
      )
    }
    return mostTree(patch$s =>
      combineArray(
        (data, ...patches) => {
          const rvnode = function rvnode(vnode, cb) {
            if (vnode.tag !== tag) throw new TypeError('tag')
            const cb2 = e => {
              sync.event(e)
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
          }
          rvnode.type = 'rvnode'
          return rvnode
        },
        [typeof data.run === 'function' ? data : now(data), ...patch$s]
      )
    )(typeof pith === 'function' ? ring(pith) : map(ring, pith))
  }
}

function createElement(tag, key) {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: global.document.createElement(tag),
  }
}

function createCharacterData(type, data) {
  return type === 'text'
    ? {type: 'text', data, node: global.document.createTextNode(data)}
    : {type: 'comment', data, node: global.document.createComment(data)}
}
