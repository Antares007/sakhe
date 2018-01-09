import {combineArray, map} from '@most/core'

import {tree as mostTree, to$} from '../most'
import patchData from './patch-data'
import eventProxy from './eventProxy'

export default function tree(tag, data = {}, key) {
  return pith => {
    const [on, proxy] = eventProxy()
    let localIndex = 0

    const ring = pith => put => {
      const mNode = (tagB, data = {}, key) => pith => {
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
                  const v = r(children.splice(oldIndex, 1)[0], cb)
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
        proxy
      )
    }
    const rez = mostTree(patch$s =>
      combineArray(
        (data, ...patches) =>
          function combinePatches(vnode, cb) {
            if (vnode.tag !== tag) throw new TypeError('tag')
            if (vnode.key == null && key != null) {
              vnode.key = key
            } else if (vnode.key !== key) throw new TypeError('key')
            const cb2 = e => {
              if (on) {
                on(e)
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

function createElement(tag) {
  return {
    type: 'node',
    tag,
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
