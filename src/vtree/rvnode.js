import {
  combineArray,
  map,
  newStream,
  MulticastSource,
  never,
  now
} from '@most/core'

import mostTree from '../most'
import patchData from './patch-data'
import {pmap, toStream} from '../pmap'

export default function tree(tag, data = {}) {
  const sync = new MulticastSource(never())
  return pith => {
    const ring = pith => put => {
      let currentIndex = 0

      const mPut = (tagB, key, r) => {
        const index = currentIndex++
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
                  li.key == null
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
        const index = currentIndex++
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
            toStream(text)
          )
        )
      }

      pith(
        {
          node: mNode,
          text: mCharacterData('text'),
          comment: mCharacterData('comment'),
          put: mPut
        },
        sync
      )

      put(
        map(
          data => (vnode, cb) => {
            if (vnode.data === data) return
            patchData(data, vnode, cb)
            vnode.data = data
          },
          toStream(data)
        )
      )

      put(
        now(vnode => {
          const {children, node} = vnode
          for (let i = currentIndex; i < children.length; i++) {
            node.removeChild(children[i].node)
            children.splice(i, 1)
          }
        })
      )
    }

    return newStream((sink, scheduler) =>
      mostTree(
        combineArray(
          (...patches) =>
            function rvnode(vnode, cb) {
              if (vnode.pachedBy === rvnode) return vnode
              if (vnode.tag !== tag) throw new TypeError('tag')
              const cb2 = e => {
                sync.event(scheduler.currentTime(), e)
                cb(e)
              }
              for (let i = 0; i < patches.length; i++) {
                patches[i](vnode, cb2)
              }
              vnode.pachedBy = rvnode
              return vnode
            }
        )
      )(pmap(ring, pith)).run(sink, scheduler)
    )
  }
}

function createElement(tag, key) {
  return {
    type: 'node',
    tag,
    key,
    data: {},
    children: [],
    node: global.document.createElement(tag)
  }
}

function createCharacterData(type, data) {
  return type === 'text'
    ? {type: 'text', data, node: global.document.createTextNode(data)}
    : {type: 'comment', data, node: global.document.createComment(data)}
}
